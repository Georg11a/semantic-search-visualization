const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');
const { pipeline } = require('@xenova/transformers');

async function generateEmbeddings() {
  // Create output directory
  const outputDir = './embeddings_output';
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  // Check for previous progress file
  const progressFile = path.join(outputDir, 'progress.json');
  let startIndex = 0;
  let processedPapers = [];
  
  if (fs.existsSync(progressFile)) {
    const progress = JSON.parse(fs.readFileSync(progressFile, 'utf-8'));
    startIndex = progress.lastProcessedIndex + 1;
    console.log(`Continuing from index ${startIndex}`);
    
    // Load previously processed papers
    const processedFiles = fs.readdirSync(outputDir)
      .filter(file => file.startsWith('papers_batch_') && file.endsWith('.json'));
    
    for (const file of processedFiles) {
      const batchData = JSON.parse(fs.readFileSync(path.join(outputDir, file), 'utf-8'));
      processedPapers = processedPapers.concat(batchData);
    }
    
    console.log(`Loaded ${processedPapers.length} previously processed papers`);
  }
  
  // Read CSV file
  console.log("Reading CSV file...");
  const csvText = fs.readFileSync('./src/data/unique_papers.csv', 'utf-8');
  
  // Parse CSV
  const papers = Papa.parse(csvText, {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true
  }).data;
  
  console.log(`Found ${papers.length} papers, starting processing from index ${startIndex}`);
  
  // Load model
  console.log("Loading transformer model...");
  const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  
  // Generate embeddings for each paper
  console.log("Starting embeddings generation...");
  
  // Set batch processing parameters
  const batchSize = 25; // Process 25 papers per batch
  const saveFrequency = 4; // Save every 4 batches
  
  let currentBatch = [];
  let batchCount = 0;
  
  for (let i = startIndex; i < papers.length; i++) {
    const paper = papers[i];
    // Combine title and abstract as input text
    const text = `${paper.title || ''} ${paper.abstract || ''}`.trim();
    
    let embedding;
    if (!text) {
      console.log(`Warning: Paper ${i} has no title or abstract`);
      embedding = Array(384).fill(0); // Zero vector
    } else {
      try {
        // Generate embedding
        const result = await extractor(text, {
          pooling: 'mean',
          normalize: true
        });
        embedding = Array.from(result.data);
      } catch (error) {
        console.error(`Error processing paper ${i}:`, error);
        embedding = Array(384).fill(0); // Use zero vector on error
      }
    }
    
    currentBatch.push({
      ...paper,
      embedding
    });
    
    // Process batch when we've accumulated enough papers or reached the end
    if (currentBatch.length >= batchSize || i === papers.length - 1) {
      processedPapers = processedPapers.concat(currentBatch);
      
      batchCount++;
      console.log(`Processed ${processedPapers.length}/${papers.length} papers (${((processedPapers.length / papers.length) * 100).toFixed(2)}%)`);
      
      // Update progress file
      fs.writeFileSync(progressFile, JSON.stringify({
        lastProcessedIndex: i,
        totalProcessed: processedPapers.length,
        totalPapers: papers.length
      }));
      
      // Save intermediate results periodically
      if (batchCount % saveFrequency === 0 || i === papers.length - 1) {
        const batchFile = path.join(outputDir, `papers_batch_${Math.floor(batchCount / saveFrequency)}.json`);
        fs.writeFileSync(batchFile, JSON.stringify(currentBatch));
        console.log(`Saved batch to file: ${batchFile}`);
      }
      
      currentBatch = [];
    }
  }
  
  // Save complete results
  console.log("Merging and saving all embeddings...");
  fs.writeFileSync('papers_with_embeddings.json', JSON.stringify(processedPapers));
  console.log("Processing complete! Processed " + processedPapers.length + " papers");
}

// Execute main function
generateEmbeddings().catch(error => {
  console.error("Error occurred:", error);
});