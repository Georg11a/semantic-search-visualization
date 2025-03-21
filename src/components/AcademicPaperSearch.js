import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

const AcademicPaperSearch = () => {
  const manualPapers = [
    {
      title: '"Reverse Gerrymandering": Manipulation in Multi-Group Decision Making',
      authors: 'Omer Lev; Yoad Lewenberg',
      abstract: 'District-based manipulation, or gerrymandering, is usually taken to refer to agents who are in fixed location, and an external division is imposed upon them. However, in many real-world settings, there is an external, fixed division – an organizational chart of a company, or markets for a particular product.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4037',
      doi: '10.1609/aaai.v33i01.33012069'
    },
    {
      title: 'A Deep Reinforcement Learning Framework for Rebalancing Dockless Bike Sharing Systems',
      authors: 'Ling Pan; Qingpeng Cai; Zhixuan Fang; Pingzhong Tang; Longbo Huang',
      abstract: 'Bike sharing provides an environment-friendly way for traveling and is booming all over the world. Yet, due to the high similarity of user travel patterns, the bike imbalance problem constantly occurs, especially for dockless bike sharing systems.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'Computational Sustainability',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/3940',
      doi: '10.1609/aaai.v33i01.33011393'
    },
    {
      title: 'A Fair Incentive Scheme for Community Health Workers',
      authors: 'Avinandan Bose; Tracey Li; Arunesh Sinha; Tien Mai',
      abstract: 'Community health workers (CHWs) play a crucial role in the last mile delivery of essential health services to underserved populations in low-income countries.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'AI for Social Impact',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/26653',
      doi: '10.1609/aaai.v37i12.26653'
    },
    {
      title: 'A Machine Learning Approach to Identify Houses with High Lead Tap Water Concentrations',
      authors: 'Seyedsaeed Hajiseyedjavadi; Michael Blackhurst; Hassan A Karimi',
      abstract: 'Over a century separates initial lead service lateral installations from the federal regulation of lead in drinking water. Municipalities often do not have adequate information describing installations of lead plumbing.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'Emerging Papers',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/7040',
      doi: '10.1609/aaai.v34i08.7040'
    },
    {
      title: 'A Novel Visual Interpretability for Deep Neural Networks by Optimizing Activation Maps with Perturbation',
      authors: 'Qinglong Zhang; Lu Rao; Yubin Yang',
      abstract: 'Interpretability has been regarded as an essential component for deploying deep neural networks, in which the saliency-based method is one of the most prevailing interpretable approaches.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Computer Vision',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16450',
      doi: '10.1609/aaai.v35i4.16450'
    },
    {
      title: '3D-STMN: Dependency-Driven Superpoint-Text Matching Network for End-to-End 3D Referring Expression Segmentation',
      authors: 'Changli Wu; Yiwei Ma; Qi Chen; Haowei Wang; Gen Luo; Jiayi Ji; Xiaoshuai Sun',
      abstract: 'In 3D Referring Expression Segmentation (3D-RES), the earlier approach adopts a two-stage paradigm, extracting segmentation proposals and then matching them with referring expressions.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'Computer Vision',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/28408',
      doi: '10.1609/aaai.v38i6.28408'
    },
    {
      title: 'A Bayesian Spatial Model to Correct Under-Reporting in Urban Crowdsourcing',
      authors: 'Gabriel Agostini; Emma Pierson; Nikhil Garg',
      abstract: 'Decision-makers often observe the occurrence of events through a reporting process. City governments rely on resident reports to find and resolve urban infrastructural problems.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AI for Social Impact',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/30190',
      doi: '10.1609/aaai.v38i20.30190'
    },
    {
      title: 'A Complete Criterion for Value of Information in Soluble Influence Diagrams',
      authors: 'Chris van Merwijk; Ryan Carey; Tom Everitt',
      abstract: 'Influence diagrams have recently been used to analyse the safety and fairness properties of AI systems. A key building block for this analysis is a graphical criterion for value of information (VoI).',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'Reasoning under Uncertainty',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21242',
      doi: '10.1609/aaai.v36i9.21242'
    },
    {
      title: 'A Data-Driven Approach for Gin Rummy Hand Evaluation',
      authors: 'Sang T. Truong; Todd W. Neller',
      abstract: 'We develop a data-driven approach for hand strength evaluation in the game of Gin Rummy. Employing Convolutional Neural Networks, Monte Carlo simulation, and Bayesian reasoning, we compute both offensive and defensive scores of a game state.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Game Theory',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/17843',
      doi: '10.1609/aaai.v35i17.17843'
    },
    {
      title: 'A Deep Model With Local Surrogate Loss for General Cost-Sensitive Multi-Label Learning',
      authors: 'Cheng-Yu Hsieh; Yi-An Lin; Hsuan-Tien Lin',
      abstract: 'Multi-label learning is an important machine learning problem with a wide range of applications. The variety of criteria for satisfying different application needs calls for cost-sensitive algorithms.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2018,
      type: 'Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/11816',
      doi: '10.1609/aaai.v32i1.11816'
    },
    {
      title: 'A Lyapunov-Based Methodology for Constrained Optimization with Bandit Feedback',
      authors: 'Semih Cayci; Yilin Zheng; Atilla Eryilmaz',
      abstract: 'In various applications including online advertising, contractual hiring, and wireless scheduling, the controller is constrained by a stringent budget constraint on the available resources.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'Constraint Satisfaction and Optimization',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/20285',
      doi: '10.1609/aaai.v36i4.20285'
    },
    {
      title: 'A Model for Estimating the Economic Costs of Computer Vision Systems That Use Deep Learning',
      authors: 'Neil Thompson; Martin Fleming; Benny J. Tang; Anna M. Pastwa; Nicholas Borge; Brian C. Goehring; Subhro Das',
      abstract: 'Deep learning, the most important subfield of machine learning and artificial intelligence (AI) over the last decade, is considered one of the fundamental technologies underpinning the Fourth Industrial Revolution.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'Emerging Applications of AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/30343',
      doi: '10.1609/aaai.v38i21.30343'
    },
    {
      title: 'A New Ensemble Adversarial Attack Powered by Long-Term Gradient Memories',
      authors: 'Zhaohui Che; Ali Borji; Guangtao Zhai; Suiyi Ling; Jing Li; Patrick Le Callet',
      abstract: 'Deep neural networks are vulnerable to adversarial attacks. Some adversarial examples crafted against an ensemble of pre-trained source models can transfer to other new target models.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5743',
      doi: '10.1609/aaai.v34i04.5743'
    },
    {
      title: 'A Case Study of the Shortcut Effects in Visual Commonsense Reasoning',
      authors: 'Keren Ye; Adriana Kovashka',
      abstract: 'Visual reasoning and question-answering have gathered attention in recent years. Many datasets and evaluation protocols have been proposed; some have been shown to contain bias that allows models to "cheat" without performing true, generalizable reasoning.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Computer Vision',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16428',
      doi: '10.1609/aaai.v35i4.16428'
    },
    {
      title: 'A Dynamic Rationalization of Distance Rationalizability',
      authors: 'Craig Boutilier; Ariel Procaccia',
      abstract: 'Distance rationalizability is an intuitive paradigm for developing and studying voting rules: given a notion of consensus and a distance function on preference profiles, a rationalizable voting rule selects an alternative that is closest to being a consensus winner.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Multiagent Systems',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/8240',
      doi: '10.1609/aaai.v26i1.8240'
    },
    {
      title: 'A Distillation Approach to Data Efficient Individual Treatment Effect Estimation',
      authors: 'Maggie Makar; Adith Swaminathan; Emre Kıcıman',
      abstract: 'The potential for using machine learning algorithms as a tool for suggesting optimal interventions has fueled significant interest in developing methods for estimating heterogeneous or individual treatment effects (ITEs) from observational data.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4375',
      doi: '10.1609/aaai.v33i01.33014544'
    },
    {
      title: 'A Machine Learning Method for EV Range Prediction with Updates on Route Information and Traffic Conditions',
      authors: 'Dohee Kim; Hong Gi Shim; Jeong Soo Eo',
      abstract: 'Drivers anxiety about the remaining driving range of electric vehicles (EVs) has been quite improved by mounting a high-capacity battery pack. However, when EVs need to be charged, the drivers still feel uncomfortable if inaccurate range prediction is provided.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'Emerging Applications of AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21525',
      doi: '10.1609/aaai.v36i11.21525'
    },
    {
      title: 'A Pair-Approximation Method for Modelling the Dynamics of Multi-Agent Stochastic Games',
      authors: 'Chen Chu; Zheng Yuan; Shuyue Hu; Chunjiang Mu; Zhen Wang',
      abstract: 'Developing a dynamical model for learning in games has attracted much recent interest. In stochastic games, agents need to make decisions in multiple states, and transitions between states, in turn, influence the dynamics of strategies.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/25691',
      doi: '10.1609/aaai.v37i5.25691'
    },
    {
      title: 'A Primal-Dual Online Algorithm for Online Matching Problem in Dynamic Environments',
      authors: 'Yu-Hang Zhou; Peng Hu; Chen Liang; Huan Xu; Guangda Huzhang; Yinfu Feng; Qing Da; Xinshang Wang; An-Xiang Zeng',
      abstract: 'Recently, the online matching problem has attracted much attention due to its wide application on real-world decision-making scenarios. In stationary environments, by adopting the stochastic user arrival model, existing methods are proposed to learn dual optimal prices.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/17331',
      doi: '10.1609/aaai.v35i12.17331'
    },
    {
      title: '"Reverse Gerrymandering": Manipulation in Multi-Group Decision Making',
      authors: 'Omer Lev; Yoad Lewenberg',
      abstract: 'District-based manipulation, or gerrymandering, is usually taken to refer to agents who are in fixed location, and an external division is imposed upon them. However, in many real-world settings, there is an external, fixed division – an organizational chart of a company, or markets for a particular product.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4037',
      doi: '10.1609/aaai.v33i01.33012069'
    },
    {
      title: 'Active Preference Learning Based on Generalized Gini Functions: Application to the Multiagent Knapsack Problem',
      authors: 'Nadjet Bourdache; Patrice Perny',
      abstract: 'We consider the problem of actively eliciting preferences from a Decision Maker supervising a collective decision process in the context of fair multiagent combinatorial optimization. Individual preferences are supposed to be known and represented by linear utility functions defined on a combinatorial domain and the social utility is defined as a generalized Gini Social evaluation Function (GSF) for the sake of fairness.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'AAAI Technical Track: Reasoning under Uncertainty',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4770',
      doi: '10.1609/aaai.v33i01.33017741'
    },
    {
      title: 'Actor Critic Deep Reinforcement Learning for Neural Malware Control',
      authors: 'Yu Wang; Jack Stokes; Mady Marinescu',
      abstract: 'In addition to using signatures, antimalware products also detect malicious attacks by evaluating unknown files in an emulated environment, i.e. sandbox, prior to execution on a computers native operating system. During emulation, a file cannot be scanned indefinitely, and antimalware engines often set the number of instructions to be executed based on a set of heuristics.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Applications',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5449',
      doi: '10.1609/aaai.v34i01.5449'
    },
    {
      title: 'AdapSafe: Adaptive and Safe-Certified Deep Reinforcement Learning-Based Frequency Control for Carbon-Neutral Power Systems',
      authors: 'Xu Wan; Mingyang Sun; Boli Chen; Zhongda Chu; Fei Teng',
      abstract: 'With the increasing penetration of inverter-based renewable energy resources, deep reinforcement learning (DRL) has been proposed as one of the most promising solutions to realize real-time and autonomous control for future carbon-neutral power systems. In particular, DRL-based frequency control approaches have been extensively investigated to overcome the limitations of model-based approaches, such as the computational cost and scalability for large-scale systems.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'AAAI Technical Track on Domain(s) of Application',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/25660',
      doi: '10.1609/aaai.v37i4.25660'
    },
    {
      title: 'Adapt to Environment Sudden Changes by Learning a Context Sensitive Policy',
      authors: 'Fan-Ming Luo; Shengyi Jiang; Yang Yu; ZongZhang Zhang; Yi-Feng Zhang',
      abstract: 'Dealing with real-world reinforcement learning (RL) tasks, we shall be aware that the environment may have sudden changes. We expect that a robust policy is able to handle such changes and adapt to the new environment rapidly. Context-based meta reinforcement learning aims at learning environment adaptable policies.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'AAAI Technical Track on Machine Learning II',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/20730',
      doi: '10.1609/aaai.v36i7.20730'
    },
    {
      title: 'Adaptable Regression Method for Ensemble Consensus Forecasting',
      authors: 'John Williams; Peter Neilley; Joseph Koval; Jeff McDonald',
      abstract: 'Accurate weather forecasts enhance sustainability by facilitating decision making across a broad range of endeavors including public safety, transportation, energy generation and management, retail logistics, emergency preparedness, and many others. This paper presents a method for combining multiple scalar forecasts to obtain deterministic predictions that are generally more accurate than any of the constituents.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2016,
      type: 'Special Track: Computational Sustainability',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/9913',
      doi: '10.1609/aaai.v30i1.9913'
    },
    {
      title: 'Adapting a Kidney Exchange Algorithm to Align With Human Values',
      authors: 'Rachel Freedman; Jana Schaich Borg; Walter Sinnott-Armstrong; John Dickerson; Vincent Conitzer',
      abstract: 'The efficient allocation of limited resources is a classical problem in economics and computer science. In kidney exchanges, a central market maker allocates living kidney donors to patients in need of an organ. Patients and donors in kidney exchanges are prioritized using ad-hoc weights decided on by committee and then fed into an allocation algorithm that determines who get what—and who does not.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2018,
      type: 'AAAI Technical Track: Humans and AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/11505',
      doi: '10.1609/aaai.v32i1.11505'
    },
    {
      title: 'Adapting to Concept Drift in Credit Card Transaction Data Streams Using Contextual Bandits and Decision Trees',
      authors: 'Dennis Soemers; Tim Brys; Kurt Driessens; Mark Winands; Ann Nowé',
      abstract: 'Credit card transactions predicted to be fraudulent by automated detection systems are typically handed over to human experts for verification. To limit costs, it is standard practice to select only the most suspicious transactions for investigation. We claim that a trade-off between exploration and exploitation is imperative to enable adaptation to changes in behavior (concept drift).',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2018,
      type: 'IAAI18 - Emerging',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/11411',
      doi: '10.1609/aaai.v32i1.11411'
    },
    {
      title: 'Adaptive Energy Management for Self-Sustainable Wearables in Mobile Health',
      authors: 'Dina Hussein; Ganapati Bhat; Janardhan Rao Doppa',
      abstract: 'Wearable devices that integrate multiple sensors, processors, and communication technologies have the potential to transform mobile health for remote monitoring of health parameters. However, the small form factor of the wearable devices limits the battery size and operating lifetime. As a result, the devices require frequent recharging, which has limited their widespread adoption.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'AAAI Special Track on AI for Social Impact',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21451',
      doi: '10.1609/aaai.v36i11.21451'
    },
    {
      title: 'Adaptive Pattern-Parameter Matching for Robust Pedestrian Detection',
      authors: 'Mengyin Liu; Chao Zhu; Jun Wang; Xu-Cheng Yin',
      abstract: 'Pedestrians with challenging patterns, e.g. small scale or heavy occlusion, appear frequently in practical applications like autonomous driving, which remains tremendous obstacle to higher robustness of detectors. Although plenty of previous works have been dedicated to these problems, properly matching patterns of pedestrian and parameters of detector, i.e., constructing a detector with proper parameter sizes for certain pedestrian patterns of different complexity, has been seldom investigated intensively.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'AAAI Technical Track on Computer Vision II',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16313',
      doi: '10.1609/aaai.v35i3.16313'
    },
    {
      title: 'Adaptive Quantitative Trading: An Imitative Deep Reinforcement Learning Approach',
      authors: 'Yang Liu; Qi Liu; Hongke Zhao; Zhen Pan; Chuanren Liu',
      abstract: 'In recent years, considerable efforts have been devoted to developing AI techniques for finance research and applications. For instance, AI techniques (e.g., machine learning) can help traders in quantitative trading (QT) by automating two tasks: market condition recognition and trading strategies execution. However, existing methods in QT face challenges such as representing noisy high-frequent financial data and finding the balance between exploration and exploitation of the trading agent with AI techniques.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5587',
      doi: '10.1609/aaai.v34i02.5587'
    },
    {
      title: 'Adaptive Verifiable Training Using Pairwise Class Similarity',
      authors: 'Shiqi Wang; Kevin Eykholt; Taesung Lee; Jiyong Jang; Ian Molloy',
      abstract: 'Verifiable training has shown success in creating neural networks that are provably robust to a given amount of noise. However, despite only enforcing a single robustness criterion, its performance scales poorly with dataset complexity. On CIFAR10, a non-robust LeNet model has a 21.63% error rate, while a model created using verifiable training and a L-infinity robustness criterion of 8/255, has an error rate of 57.10%.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'AAAI Technical Track on Machine Learning IV',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/17223',
      doi: '10.1609/aaai.v35i11.17223'
    },
    {
      title: 'ADDMC: Weighted Model Counting with Algebraic Decision Diagrams',
      authors: 'Jeffrey Dudek; Vu Phan; Moshe Vardi',
      abstract: 'We present an algorithm to compute exact literal-weighted model counts of Boolean formulas in Conjunctive Normal Form. Our algorithm employs dynamic programming and uses Algebraic Decision Diagrams as the main data structure. We implement this technique in ADDMC, a new model counter. We empirically evaluate various heuristics that can be used with ADDMC.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Constraint Satisfaction and Optimization',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5505',
      doi: '10.1609/aaai.v34i02.5505'
    },
    {
      title: 'Addressing Action Oscillations through Learning Policy Inertia',
      authors: 'Chen Chen; Hongyao Tang; Jianye Hao; Wulong Liu; Zhaopeng Meng',
      abstract: 'Deep reinforcement learning (DRL) algorithms have been demonstrated to be effective on a wide range of challenging decision making and control tasks. However, these methods typically suffer from severe action oscillations in particular in discrete action setting, which means that agents select different actions within consecutive steps even though states only slightly differ.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'AAAI Technical Track on Machine Learning I',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16864',
      doi: '10.1609/aaai.v35i8.16864'
    },
    {
      title: 'Adversarial Permutation Guided Node Representations for Link Prediction',
      authors: 'Indradyumna Roy; Abir De; Soumen Chakrabarti',
      abstract: 'After observing a snapshot of a social network, a link prediction (LP) algorithm identifies node pairs between which new edges will likely materialize in future. Most LP algorithms estimate a score for currently non-neighboring node pairs, and rank them by this score. Recent LP systems compute this score by comparing dense, low dimensional vector representations of nodes.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'AAAI Technical Track on Machine Learning IV',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/17138',
      doi: '10.1609/aaai.v35i11.17138'
    },
    {
      title: 'Adversarial Training for Improving Model Robustness? Look at Both Prediction and Interpretation',
      authors: 'Hanjie Chen; Yangfeng Ji',
      abstract: 'Neural language models show vulnerability to adversarial examples which are semantically similar to their original counterparts with a few words replaced by their synonyms. A common way to improve model robustness is adversarial training which follows two steps—collecting adversarial examples by attacking a target model, and fine-tuning the model on the augmented dataset with these adversarial examples.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'AAAI Technical Track on Speech and Natural Language Processing',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21289',
      doi: '10.1609/aaai.v36i10.21289'
    },
    {
      title: 'Agent Incentives: A Causal Perspective',
      authors: 'Tom Everitt; Ryan Carey; Eric D. Langlois; Pedro A. Ortega; Shane Legg',
      abstract: 'We present a framework for analysing agent incentives using causal influence diagrams. We establish that a well-known criterion for value of information is complete. We propose a new graphical criterion for value of control, establishing its soundness and completeness. We also introduce two new concepts for incentive analysis: response incentives indicate which changes in the environment affect an optimal decision, while instrumental control incentives establish whether an agent can influence its utility via a variable X.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'AAAI Technical Track on Philosophy and Ethics of AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/17368',
      doi: '10.1609/aaai.v35i13.17368'
    },
    {
      title: 'Agent-Human Coordination with Communication Costs Under Uncertainty',
      authors: 'Asaf Frieder; Raz Lin; Sarit Kraus',
      abstract: 'Coordination in mixed agent-human environments is an important, yet not a simple, problem. Little attention has been given to the issues raised in teams that consist of both computerized agents and people. In such situations different considerations are in order, as people tend to make mistakes and they are affected by cognitive, social and cultural factors.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Multidisciplinary Topics',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/8329',
      doi: '10.1609/aaai.v26i1.8329'
    },
    {
      title: 'AI and Parallelism in CS1: Experiences and Analysis',
      authors: 'Steven Bogaerts',
      abstract: 'This work considers the use of AI and parallelism as a context for learning typical programming concepts in an introductory programming course (CS1). The course includes exercises in decision trees, a novel game called Find the Gnomes to introduce supervised learning, the construction and application of a vectorized neural network unit class, and obtaining speedup in training through parallelism.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'EAAI Symposium: Main Track',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/26876',
      doi: '10.1609/aaai.v37i13.26876'
    },
    {
      title: 'AI Risk Profiles: A Standards Proposal for Pre-deployment AI Risk Disclosures',
      authors: 'Eli Sherman; Ian Eisenberg',
      abstract: 'As AI systems sophistication and proliferation have increased, awareness of the risks has grown proportionally. The AI industry is increasingly emphasizing the need for transparency, with proposals ranging from standardizing use of technical disclosures, like model cards, to regulatory licensing regimes. Since the AI value chain is complicated, with actors bringing varied expertise, perspectives, and values, it is crucial that consumers of transparency disclosures be able to understand the risks of the AI system in question.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'IAAI Technical Track on AI Incidents and Best Practices',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/30348',
      doi: '10.1609/aaai.v38i21.30348'
    },
    {
      title: 'Algorithmic and Human Teaching of Sequential Decision Tasks',
      authors: 'Maya Cakmak; Manuel Lopes',
      abstract: 'A helpful teacher can significantly improve the learning rate of a learning agent. Teaching algorithms have been formally studied within the field of Algorithmic Teaching. These give important insights into how a teacher can select the most informative examples while teachinga new concept. However the field has so far focused purely on classification tasks.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Multidisciplinary Topics',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/8333',
      doi: '10.1609/aaai.v26i1.8333'
    },
    {
      title: 'Algorithmic Fairness Verification with Graphical Models',
      authors: 'Bishwamittra Ghosh; Debabrota Basu; Kuldeep S Meel',
      abstract: 'In recent years, machine learning (ML) algorithms have been deployed in safety-critical and high-stake decision-making, where the fairness of algorithms is of paramount importance. Fairness in ML centers on detecting bias towards certain demographic populations induced by an ML classifier and proposes algorithmic solutions to mitigate the bias with respect to different fairness definitions.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'AAAI Technical Track on Philosophy and Ethics of AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21187',
      doi: '10.1609/aaai.v36i9.21187'
    },
    {
      title: 'Algorithms for Average Regret Minimization',
      authors: 'Sabine Storandt; Stefan Funke',
      abstract: 'In this paper, we study a problem from the realm of multicriteria decision making in which the goal is to select from a given set S of d-dimensional objects a minimum sized subset S0 with bounded regret. Thereby, regret measures the unhappiness of users which would like to select their favorite object from set S but now can only select their favorite object from the subset S0.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'AAAI Technical Track: Constraint Satisfaction and Optimization',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/3975',
      doi: '10.1609/aaai.v33i01.33011600'
    },
    {
      title: 'Aligning Domain-Specific Distribution and Classifier for Cross-Domain Classification from Multiple Sources',
      authors: 'Yongchun Zhu; Fuzhen Zhuang; Deqing Wang',
      abstract: 'While Unsupervised Domain Adaptation (UDA) algorithms, i.e., there are only labeled data from source domains, have been actively studied in recent years, most algorithms and theoretical results focus on Single-source Unsupervised Domain Adaptation (SUDA). However, in the practical scenario, labeled data can be typically collected from multiple diverse sources, and they might be different not only from the target domain but also from each other.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'AAAI Technical Track: Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4551',
      doi: '10.1609/aaai.v33i01.33015989'
    },
    {
      title: 'Amsterdam to Dublin Eventually Delayed? LSTM and Transfer Learning for Predicting Delays of Low Cost Airlines',
      authors: 'Nicholas McCarthy; Mohammad Karzand; Freddy Lecue',
      abstract: 'Flight delays impact airlines, airports and passengers. Delay prediction is crucial during the decision-making process for all players in commercial aviation, and in particular for airlines to meet their on-time performance objectives. Although many machine learning approaches have been experimented with, they fail in (i) predicting delays in minutes with low errors (less than 15 minutes), (ii) being applied to small carriers i.e., low cost companies characterized by a small amount of data.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'IAAI Technical Track: Emerging Papers',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5013',
      doi: '10.1609/aaai.v33i01.33019541'
    },
    {
      title: 'An Ambiguity Aversion Model for Decision Making under Ambiguity',
      authors: 'Wenjun Ma; Xudong Luo; Yuncheng Jiang',
      abstract: 'In real life, decisions are often made under ambiguity, where it is difficult to estimate accurately the probability of each single possible consequence of a choice. However, this problem has not been solved well in existing work for the following two reasons. (i) Some of them cannot cover the Ellsberg paradox and the Machina Paradox. Thus, the choices that they predict could be inconsistent with empirical observations.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2017,
      type: 'AAAI Technical Track: Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/10569',
      doi: '10.1609/aaai.v31i1.10569'
    },
    {
      title: 'An Autonomous Override System to Prevent Airborne Loss of Control',
      authors: 'Sweewarman Balachandran; Ella M. Atkins',
      abstract: 'Loss of Control (LOC) is the most common precursor to aircraft accidents. This paper presents a Flight Safety Assessment and Management (FSAM) decision system to reduce in-flight LOC risk. FSAM nominally serves as a monitor to detect conditions that pose LOC risk, automatically activating the appropriate control authority if necessary to prevent LOC and restore a safe operational state.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2016,
      type: 'IAAI Emerging Application Papers',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/19074',
      doi: '10.1609/aaai.v30i2.19074'
    },
    {
      title: 'An Efficient Framework for Dense Video Captioning',
      authors: 'Maitreya Suin; A. N. Rajagopalan',
      abstract: 'Dense video captioning is an extremely challenging task since an accurate and faithful description of events in a video requires a holistic knowledge of the video contents as well as contextual reasoning of individual events. Most existing approaches handle this problem by first proposing event boundaries from a video and then captioning on a subset of the proposals.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Vision',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6881',
      doi: '10.1609/aaai.v34i07.6881'
    },
    {
      title: 'An Exercise in Tournament Design: When Some Matches Must Be Scheduled',
      authors: 'Sushmita Gupta; Ramanujan Sridharan; Peter Strulo',
      abstract: 'Single-elimination (SE) tournaments are a popular format used in competitive environments and decision making. Algorithms for SE tournament manipulation have been an active topic of research in recent years. In this paper, we initiate the algorithmic study of a novel variant of SE tournament manipulation that aims to model the fact that certain matchups are highly desired in a sporting context, incentivizing an organizer to manipulate the bracket to make such matchups take place.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AAAI Technical Track on Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/28833',
      doi: '10.1609/aaai.v38i9.28833'
    },
    {
      title: 'An Experimental Study of Advice in Sequential Decision-Making Under Uncertainty',
      authors: 'Florian Benavent; Bruno Zanuttini',
      abstract: 'We consider sequential decision making problems under uncertainty, in which a user has a general idea of the task to achieve, and gives advice to an agent in charge of computing an optimal policy. Many different notions of advice have been proposed in somewhat different settings, especially in the field of inverse reinforcement learning and for resolution of Markov Decision Problems with Imprecise Rewards.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2018,
      type: 'AAAI Technical Track: Reasoning under Uncertainty',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/12118',
      doi: '10.1609/aaai.v32i1.12118'
    },
    {
      title: 'An Integrative Framework for Artificial Intelligence Education',
      authors: 'Pat Langley',
      abstract: 'Modern introductory courses on AI do not train students to create intelligent systems or provide broad coverage of this complex field. In this paper, we identify problems with common approaches to teaching artificial intelligence and suggest alternative principles that courses should adopt instead. We illustrate these principles in a proposed course that teaches students not only about component methods, such as pattern matching and decision making, but also about their combination into higher-level abilities for reasoning, sequential control, plan generation, and integrated intelligent agents.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'EAAI Symposium: Full Papers',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5032',
      doi: '10.1609/aaai.v33i01.33019670'
    },
    {
      title: 'An Interactive Explanatory AI System for Industrial Quality Control',
      authors: 'Dennis Müller; Michael März; Stephan Scheele; Ute Schmid',
      abstract: 'Machine learning based image classification algorithms, such as deep neural network approaches, will be increasingly employed in critical settings such as quality control in industry, where transparency and comprehensibility of decisions are crucial. Therefore, we aim to extend the defect detection task towards an interactive human-in-the-loop approach that allows us to integrate rich background knowledge and the inference of complex relationships going beyond traditional purely data-driven approaches.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'IAAI Technical Track on Emerging Applications of AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21530',
      doi: '10.1609/aaai.v36i11.21530'
    },
    {
      title: 'An Interactive Regret-Based Genetic Algorithm for Solving Multi-Objective Combinatorial Optimization Problems',
      authors: 'Nawal Benabbou; Cassandre Leroy; Thibaut Lust',
      abstract: 'We propose a new approach consisting in combining genetic algorithms and regret-based incremental preference elicitation for solving multi-objective combinatorial optimization problems with unknown preferences. For the purpose of elicitation, we assume that the decision makers preferences can be represented by a parameterized scalarizing function but the parameters are initially not known. Instead, the parameter imprecision is progressively reduced by asking preference queries to the decision maker during the search to help identify the best solutions within a population.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Heuristic Search and Optimization',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5612',
      doi: '10.1609/aaai.v34i03.5612'
    },
    {
      title: 'An Interpretable Generative Adversarial Approach to Classification of Latent Entity Relations in Unstructured Sentences',
      authors: 'Shiou Tian Hsu; Changsung Moon; Paul Jones; Nagiza Samatova',
      abstract: 'We propose a generative adversarial neural network model for relation classification that attempts to emulate the way in which human analysts might process sentences. Our approach provides two unique benefits over existing capabilities: (1) we make predictions by finding and exploiting supportive rationales to improve interpretability (i.e. words or phrases extracted from a sentence that a person can reason upon), and (2) we allow predictions to be easily corrected by adjusting the rationales.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2018,
      type: 'Main Track: NLP and Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/11972',
      doi: '10.1609/aaai.v32i1.11972'
    },
    {
      title: 'An Online Learning Approach to Sequential User-Centric Selection Problems',
      authors: 'Junpu Chen; Hong Xie',
      abstract: 'This paper proposes a new variant of multi-play MAB model, to capture important factors of the sequential user-centric selection problem arising from mobile edge computing, ridesharing applications, etc. In the proposed model, each arm is associated with discrete units of resources, each play is associate with movement costs and multiple plays can pull the same arm simultaneously.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'AAAI Technical Track on Machine Learning I',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/20572',
      doi: '10.1609/aaai.v36i6.20572'
    },
    {
      title: 'Analytically Tractable Models for Decision Making under Present Bias',
      authors: 'Yasunori Akagi; Naoki Marumo; Takeshi Kurashima',
      abstract: 'Time-inconsistency is a characteristic of human behavior in which people plan for long-term benefits but take actions that differ from the plan due to conflicts with short-term benefits. Such time-inconsistent behavior is believed to be caused by present bias, a tendency to overestimate immediate rewards and underestimate future rewards. It is essential in behavioral economics to investigate the relationship between present bias and time-inconsistency.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AAAI Technical Track on Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/28798',
      doi: '10.1609/aaai.v38i9.28798'
    },
    {
      title: 'Anytime Anyspace AND/OR Best-First Search for Bounding Marginal MAP',
      authors: 'Qi Lou; Rina Dechter; Alexander Ihler',
      abstract: 'Marginal MAP is a key task in Bayesian inference and decision-making. It is known to be very difficult in general, particularly because the evaluation of each MAP assignment requires solving an internal summation problem. In this paper, we propose a best-first search algorithm that provides anytime upper bounds for marginal MAP in graphical models.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2018,
      type: 'AAAI Technical Track: Reasoning under Uncertainty',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/12123',
      doi: '10.1609/aaai.v32i1.12123'
    },
    {
      title: 'Apparently Irrational Choice as Optimal Sequential Decision Making',
      authors: 'Haiyang Chen; Hyung Jin Chang; Andrew Howes',
      abstract: 'In this paper, we propose a normative approach to modeling apparently human irrational decision making (cognitive biases) that makes use of inherently rational computational mechanisms. We view preferential choice tasks as sequential decision making problems and formulate them as Partially Observable Markov Decision Processes (POMDPs).',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'AAAI Technical Track on Cognitive Modeling and Cognitive Systems',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16161',
      doi: '10.1609/aaai.v35i1.16161'
    },
    {
      title: 'Applied Machine Learning for Games: A Graduate School Course',
      authors: 'Yilei Zeng; Aayush Shah; Jameson Thai; Michael Zyda',
      abstract: 'The game industry is moving into an era where old-style game engines are being replaced by re-engineered systems with embedded machine learning technologies for the operation, analysis and understanding of game play. In this paper, we describe our machine learning course designed for graduate students interested in applying recent advances of deep learning and reinforcement learning towards gaming.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'EAAI Symposium: Full Papers',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/17849',
      doi: '10.1609/aaai.v35i17.17849'
    },
    {
      title: 'Apprenticeship Learning via Frank-Wolfe',
      authors: 'Tom Zahavy; Alon Cohen; Haim Kaplan; Yishay Mansour',
      abstract: 'We consider the applications of the Frank-Wolfe (FW) algorithm for Apprenticeship Learning (AL). In this setting, we are given a Markov Decision Process (MDP) without an explicit reward function. Instead, we observe an expert that acts according to some policy, and the goal is to find a policy whose feature expectations are closest to those of the expert policy.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6150',
      doi: '10.1609/aaai.v34i04.6150'
    },
    {
      title: 'Approval-Based Committee Voting in Practice: A Case Study of (over-) Representation in the Polkadot Blockchain',
      authors: 'Niclas Boehmer; Markus Brill; Alfonso Cevallos; Jonas Gehrlein; Luis Sánchez-Fernández; Ulrike Schmidt-Kraepelin',
      abstract: 'We provide the first large-scale data collection of real-world approval-based committee elections. These elections have been conducted on the Polkadot blockchain as part of their Nominated Proof-of-Stake mechanism and contain around one thousand candidates and tens of thousands of (weighted) voters each. We conduct an in-depth study of application-relevant questions, including a quantitative and qualitative analysis of the outcomes returned by different voting rules.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AAAI Technical Track on Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/28807',
      doi: '10.1609/aaai.v38i9.28807'
    },
    {
      title: 'Arbitrariness and Social Prediction: The Confounding Role of Variance in Fair Classification',
      authors: 'A. Feder Cooper; Katherine Lee; Madiha Zahrah Choksi; Solon Barocas; Christopher De Sa; James Grimmelmann; Jon Kleinberg; Siddhartha Sen; Baobao Zhang',
      abstract: 'Variance in predictions across different trained models is a significant, under-explored source of error in fair binary classification. In practice, the variance on some data examples is so large that decisions can be effectively arbitrary. To investigate this problem, we take an experimental approach and make four overarching contributions.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AAAI Technical Track on AI for Social Impact Track',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/30203',
      doi: '10.1609/aaai.v38i20.30203'
    },
    {
      title: 'Argument Mining Driven Analysis of Peer-Reviews',
      authors: 'Michael Fromm; Evgeniy Faerman; Max Berrendorf; Siddharth Bhargava; Ruoxia Qi; Yao Zhang; Lukas Dennert; Sophia Selle; Yang Mao; Thomas Seidl',
      abstract: 'Peer reviewing is a central process in modern research and essential for ensuring high quality and reliability of published work. At the same time, it is a time-consuming process and increasing interest in emerging fields often results in a high review workload, especially for senior researchers in this area. How to cope with this problem is an open question and it is vividly discussed across all major conferences.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'AAAI Technical Track Focus Area on AI for Conference Organization and Delivery',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16607',
      doi: '10.1609/aaai.v35i6.16607'
    },
    {
      title: 'Argumentation for Explainable Scheduling',
      authors: 'Kristijonas Čyras; Dimitrios Letsios; Ruth Misener; Francesca Toni',
      abstract: 'Mathematical optimization offers highly-effective tools for finding solutions for problems with well-defined goals, notably scheduling. However, optimization solvers are often unexplainable black boxes whose solutions are inaccessible to users and which users cannot interact with. We define a novel paradigm using argumentation to empower the interaction between optimization solvers and users, supported by tractable explanations which certify or refute solutions.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'AAAI Technical Track: Knowledge Representation and Reasoning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4126',
      doi: '10.1609/aaai.v33i01.33012752'
    },
    {
      title: 'Aspect-Aware Multimodal Summarization for Chinese E-Commerce Products',
      authors: 'Haoran Li; Peng Yuan; Song Xu; Youzheng Wu; Xiaodong He; Bowen Zhou',
      abstract: 'We present an abstractive summarization system that produces summary for Chinese e-commerce products. This task is more challenging than general text summarization. First, the appearance of a product typically plays a significant role in customers decisions to buy the product or not, which requires that the summarization model effectively use the visual information of the product.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Natural Language Processing',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6332',
      doi: '10.1609/aaai.v34i05.6332'
    },
    {
      title: 'Actional Atomic-Concept Learning for Demystifying Vision-Language Navigation',
      authors: 'Bingqian Lin; Yi Zhu; Xiaodan Liang; Liang Lin; Jianzhuang Liu',
      abstract: 'Vision-Language Navigation (VLN) is a challenging task which requires an agent to align complex visual observations to language instructions to reach the goal position. Most existing VLN agents directly learn to align the raw directional features and visual features trained using one-hot labels to linguistic instruction features. However, the big semantic gap among these multi-modal inputs makes the alignment difficult and therefore limits the navigation performance.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'AAAI Technical Track on Computer Vision II',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/25243',
      doi: '10.1609/aaai.v37i2.25243'
    },
    {
      title: 'A Deep Model With Local Surrogate Loss for General Cost-Sensitive Multi-Label Learning',
      authors: 'Cheng-Yu Hsieh; Yi-An Lin; Hsuan-Tien Lin',
      abstract: 'Multi-label learning is an important machine learning problem with a wide range of applications. The variety of criteria for satisfying different application needs calls for cost-sensitive algorithms.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2018,
      type: 'Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/11816',
      doi: '10.1609/aaai.v32i1.11816'
    },
    {
      title: 'A New Ensemble Adversarial Attack Powered by Long-Term Gradient Memories',
      authors: 'Zhaohui Che; Ali Borji; Guangtao Zhai; Suiyi Ling; Jing Li; Patrick Le Callet',
      abstract: 'Deep neural networks are vulnerable to adversarial attacks. Some adversarial examples crafted against an ensemble of pre-trained source models can transfer to other new target models.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/5743',
      doi: '10.1609/aaai.v34i04.5743'
    },
    {
      title: 'A Case Study of the Shortcut Effects in Visual Commonsense Reasoning',
      authors: 'Keren Ye; Adriana Kovashka',
      abstract: 'Visual reasoning and question-answering have gathered attention in recent years. Many datasets and evaluation protocols have been proposed; some have been shown to contain bias that allows models to "cheat" without performing true, generalizable reasoning.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Computer Vision',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16428',
      doi: '10.1609/aaai.v35i4.16428'
    },
    {
      title: 'A Dynamic Rationalization of Distance Rationalizability',
      authors: 'Craig Boutilier; Ariel Procaccia',
      abstract: 'Distance rationalizability is an intuitive paradigm for developing and studying voting rules: given a notion of consensus and a distance function on preference profiles, a rationalizable voting rule selects an alternative that is closest to being a consensus winner.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Multiagent Systems',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/8240',
      doi: '10.1609/aaai.v26i1.8240'
    },
    {
      title: 'A Distillation Approach to Data Efficient Individual Treatment Effect Estimation',
      authors: 'Maggie Makar; Adith Swaminathan; Emre Kıcıman',
      abstract: 'The potential for using machine learning algorithms as a tool for suggesting optimal interventions has fueled significant interest in developing methods for estimating heterogeneous or individual treatment effects (ITEs) from observational data.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4375',
      doi: '10.1609/aaai.v33i01.33014544'
    },
    {
      title: 'A Machine Learning Method for EV Range Prediction with Updates on Route Information and Traffic Conditions',
      authors: 'Dohee Kim; Hong Gi Shim; Jeong Soo Eo',
      abstract: 'Drivers anxiety about the remaining driving range of electric vehicles (EVs) has been quite improved by mounting a high-capacity battery pack. However, when EVs need to be charged, the drivers still feel uncomfortable if inaccurate range prediction is provided.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'Emerging Applications of AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21525',
      doi: '10.1609/aaai.v36i11.21525'
    },
    {
      title: 'A Pair-Approximation Method for Modelling the Dynamics of Multi-Agent Stochastic Games',
      authors: 'Chen Chu; Zheng Yuan; Shuyue Hu; Chunjiang Mu; Zhen Wang',
      abstract: 'Developing a dynamical model for learning in games has attracted much recent interest. In stochastic games, agents need to make decisions in multiple states, and transitions between states, in turn, influence the dynamics of strategies.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/25691',
      doi: '10.1609/aaai.v37i5.25691'
    },
    {
      title: 'A Machine Learning Approach to Identify Houses with High Lead Tap Water Concentrations',
      authors: 'Seyedsaeed Hajiseyedjavadi; Michael Blackhurst; Hassan A Karimi',
      abstract: 'Over a century separates initial lead service lateral installations from the federal regulation of lead in drinking water. Municipalities often do not have adequate information describing installations of lead plumbing.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'Emerging Papers',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/7040',
      doi: '10.1609/aaai.v34i08.7040'
    },
    {
      title: 'A Primal-Dual Online Algorithm for Online Matching Problem in Dynamic Environments',
      authors: 'Yu-Hang Zhou; Peng Hu; Chen Liang; Huan Xu; Guangda Huzhang; Yinfu Feng; Qing Da; Xinshang Wang; An-Xiang Zeng',
      abstract: 'Recently, the online matching problem has attracted much attention due to its wide application on real-world decision-making scenarios. In stationary environments, by adopting the stochastic user arrival model, existing methods are proposed to learn dual optimal prices.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/17331',
      doi: '10.1609/aaai.v35i12.17331'
    },
    {
      title: 'A Model for Estimating the Economic Costs of Computer Vision Systems That Use Deep Learning',
      authors: 'Neil Thompson; Martin Fleming; Benny J. Tang; Anna M. Pastwa; Nicholas Borge; Brian C. Goehring; Subhro Das',
      abstract: 'Deep learning, the most important subfield of machine learning and artificial intelligence (AI) over the last decade, is considered one of the fundamental technologies underpinning the Fourth Industrial Revolution.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'Emerging Applications of AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/30343',
      doi: '10.1609/aaai.v38i21.30343'
    },
    {
      title: 'Deep Learning for Activity Recognition in Smart Health',
      authors: 'Diane Cook; Sagnik Mukhopadhyay; Prasanna Velichety',
      abstract: 'Recognizing human activities is a building block for health assessment and intervention technologies. We introduce a deep learning-based activity recognition approach that combines CNN, LSTM, and attention layers to recognize activities from sensor data collected in homes and analyze the role that different sensors play in a smart health context.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'AI for Healthcare',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/26702',
      doi: '10.1609/aaai.v37i12.26702'
    },
    {
      title: 'Explainable Feature Transfer and Layer Visualization for Medical Image Classification',
      authors: 'Sarah Bargal; Andrea Silva; Kyle Coleman; Stephen Wong',
      abstract: 'Medical image analysis increasingly relies on deep learning models for classifying abnormalities, but the interpretability gap remains a major hindrance to clinical adoption. This paper presents a framework for visualizing and explaining feature transfer in convolutional neural networks applied to medical image classification.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'AI for Healthcare',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21426',
      doi: '10.1609/aaai.v36i11.21426'
    },
    {
      title: 'Federated Learning with Fair Client Selection for Mobile Health Sensing',
      authors: 'Jianwei Zhang; Yuchen Yang; Han Yu; Jiang Liu',
      abstract: 'Federated learning for mobile health applications faces unique challenges in client selection due to device heterogeneity and biased data distributions. This paper introduces a novel fair client selection strategy that balances computational efficiency, statistical utility, and demographic representation in health monitoring scenarios.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'AI for Healthcare',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/26651',
      doi: '10.1609/aaai.v37i12.26651'
    },
    {
      title: 'Improving Policy Gradient with Exploration-Exploitation Trade-off in Deep Reinforcement Learning',
      authors: 'Xiaohan Wei; Qiang Zhang; Jiechao Xiong; Haobo Fu; Han Liu',
      abstract: 'Policy gradient methods in deep reinforcement learning often struggle with the exploration-exploitation dilemma, especially in environments with sparse rewards. This paper proposes a novel approach that adaptively balances exploration and exploitation by integrating uncertainty estimation into policy optimization.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'Reinforcement Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/20728',
      doi: '10.1609/aaai.v36i7.20728'
    },
    {
      title: 'Multi-Source Domain Adaptation with Collaborative Learning for Semantic Segmentation',
      authors: 'Yikai Wang; Wenbing Huang; Fuchun Sun; Jiapeng Hong',
      abstract: 'Domain adaptation for semantic segmentation remains challenging when leveraging knowledge from multiple source domains with distribution shifts. We propose a collaborative learning framework that jointly optimizes for domain alignment and knowledge transfer across diverse domains while maintaining semantic consistency.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'Computer Vision',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16405',
      doi: '10.1609/aaai.v35i4.16405'
    },
    {
      title: 'Mitigating Bias in Algorithmic Hiring: Evaluating Claims and Practices',
      authors: 'Manish Raghavan; Solon Barocas; Jon Kleinberg; Karen Levy',
      abstract: 'Companies increasingly use algorithmic tools to screen candidates during hiring. While these tools promise efficiency and objectivity, they risk encoding and amplifying biases against marginalized groups. This paper critically examines vendor claims about bias mitigation in algorithmic hiring systems and evaluates their technical underpinnings.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AI Ethics',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/7106',
      doi: '10.1609/aaai.v34i09.7106'
    },
    {
      title: 'Natural Language Processing for Climate Action: Automating Climate Policy Analysis and Knowledge Management',
      authors: 'David Rolnick; Alexandra Passe; Priya Donti',
      abstract: 'Climate change mitigation requires analyzing vast amounts of policy documents and scientific literature. This paper introduces specialized NLP techniques for processing climate-related texts, enabling automated analysis of policies, extraction of actionable insights, and tracking of implementation progress across jurisdictions.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'AI for Climate Action',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/25196',
      doi: '10.1609/aaai.v37i1.25196'
    },
    {
      title: 'Optimizing Sensor Placement for Wildfire Detection Using Reinforcement Learning',
      authors: 'Benjamin Recht; Daniel Ho; Elizabeth Bondi',
      abstract: 'Early wildfire detection is critical for preventing catastrophic spread. This paper presents a reinforcement learning approach to optimize the placement of limited sensor resources across forested regions, accounting for terrain, weather patterns, and historical fire data to maximize detection probability while minimizing response time.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'AI for Climate Action',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21442',
      doi: '10.1609/aaai.v36i11.21442'
    },
    {
      title: 'PACT: Perception-Action Causal Transformer for Autoregressive Robotics Pre-Training',
      authors: 'Shikhar Bahl; Quan Vuong; Claudia Perez-D\'Arpino; Sergey Levine',
      abstract: 'Robots need to understand how their actions affect the environment to perform complex manipulation tasks. We present a transformer-based model that learns causal relationships between perceptions and actions from diverse robotic experiences, enabling zero-shot generalization to novel manipulation tasks through autoregressive prediction.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'Robotics',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/27969',
      doi: '10.1609/aaai.v38i1.27969'
    },
    {
      title: 'Robust Multi-Agent Reinforcement Learning Against Adversarial Contamination',
      authors: 'Haotian Fu; Ming Jin; Zhixuan Fang; Jianye Hao; Yi Wu',
      abstract: 'Multi-agent reinforcement learning systems are vulnerable to adversarial attacks when deployed in safety-critical applications. This paper introduces a framework that detects and mitigates the effects of malicious agents that aim to disrupt learning or execution, ensuring robustness in cooperative and competitive scenarios.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'Multi-Agent Systems',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/25700',
      doi: '10.1609/aaai.v37i5.25700'
    },
    {
      title: 'Assignment and Pricing in Roommate Market',
      authors: 'Pak Chan; Xin Huang; Zhengyang Liu; Chihao Zhang; Shengyu Zhang',
      abstract: 'We introduce a roommate market model, in which 2n people need to be assigned to n rooms, with two people in each room. Each person has a valuation to each room, as well as a valuation to each of other people as a roommate. Each room has a rent shared by the two people living in the room, and we need to decide who live together in which room and how much each should pay.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2016,
      type: 'Technical Papers: Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/10019',
      doi: '10.1609/aaai.v30i1.10019'
    },
    {
      title: 'Atari-HEAD: Atari Human Eye-Tracking and Demonstration Dataset',
      authors: 'Ruohan Zhang; Calen Walshe; Zhuode Liu; Lin Guan; Karl Muller; Jake Whritner; Luxin Zhang; Mary Hayhoe; Dana Ballard',
      abstract: 'Large-scale public datasets have been shown to benefit research in multiple areas of modern artificial intelligence. For decision-making research that requires human data, high-quality datasets serve as important benchmarks to facilitate the development of new methods by providing a common reproducible standard.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6161',
      doi: '10.1609/aaai.v34i04.6161'
    },
    {
      title: 'Attention Guided CAM: Visual Explanations of Vision Transformer Guided by Self-Attention',
      authors: 'Saebom Leem; Hyunseok Seo',
      abstract: 'Vision Transformer (ViT) is one of the most widely used models in the computer vision field with its great performance on various tasks. In order to fully utilize the ViT-based architecture in various applications, proper visualization methods with a decent localization performance are necessary, but these methods employed in CNN-based models are still not available in ViT due to its unique structure.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AAAI Technical Track on Computer Vision III',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/28077',
      doi: '10.1609/aaai.v38i4.28077'
    },
    {
      title: 'Attention-Aware Sampling via Deep Reinforcement Learning for Action Recognition',
      authors: 'Wenkai Dong; Zhaoxiang Zhang; Tieniu Tan',
      abstract: 'Deep learning based methods have achieved remarkable progress in action recognition. Existing works mainly focus on designing novel deep architectures to achieve video representations learning for action recognition. Most methods treat sampled frames equally and average all the frame-level predictions at the testing stage.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'AAAI Technical Track: Vision',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4836',
      doi: '10.1609/aaai.v33i01.33018247'
    },
    {
      title: 'Attention-Based Models for Snow-Water Equivalent Prediction',
      authors: 'Krishu K Thapa; Bhupinderjeet Singh; Supriya Savalkar; Alan Fern; Kirti Rajagopalan; Ananth Kalyanaraman',
      abstract: 'Snow Water-Equivalent (SWE) —the amount of water available if snowpack is melted—is a key decision variable used by water management agencies to make irrigation, flood control, power generation, and drought management decisions. SWE values vary spatiotemporally—affected by weather, topography, and other environmental factors.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'IAAI Technical Track on Emerging Applications of AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/30337',
      doi: '10.1609/aaai.v38i21.30337'
    },
    {
      title: 'Attentive Experience Replay',
      authors: 'Peiquan Sun; Wengang Zhou; Houqiang Li',
      abstract: 'Experience replay (ER) has become an important component of deep reinforcement learning (RL) algorithms. ER enables RL algorithms to reuse past experiences for the update of current policy. By reusing a previous state for training, the RL agent would learn more accurate value estimation and better decision on that state.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6049',
      doi: '10.1609/aaai.v34i04.6049'
    },
    {
      title: 'AUC Optimization with a Reject Option',
      authors: 'Song-Qing Shen; Bin-Bin Yang; Wei Gao',
      abstract: 'Making an erroneous decision may cause serious results in diverse mission-critical tasks such as medical diagnosis and bioinformatics. Previous work focuses on classification with a reject option, i.e., abstain rather than classify an instance of low confidence. Most mission-critical tasks are always accompanied with class imbalance and cost sensitivity, where AUC has been shown a preferable measure than accuracy in classification.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6023',
      doi: '10.1609/aaai.v34i04.6023'
    },
    {
      title: 'Augmented Commonsense Knowledge for Remote Object Grounding',
      authors: 'Bahram Mohammadi; Yicong Hong; Yuankai Qi; Qi Wu; Shirui Pan; Javen Qinfeng Shi',
      abstract: 'The vision-and-language navigation (VLN) task necessitates an agent to perceive the surroundings, follow natural language instructions, and act in photo-realistic unseen environments. Most of the existing methods employ the entire image or object features to represent navigable viewpoints.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AAAI Technical Track on Computer Vision IV',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/28223',
      doi: '10.1609/aaai.v38i5.28223'
    },
    {
      title: 'Augmenting Markov Decision Processes with Advising',
      authors: 'Loïs Vanhée; Laurent Jeanpierre; Abdel-Illah Mouaddib',
      abstract: 'This paper introduces Advice-MDPs, an expansion of Markov Decision Processes for generating policies that take into consideration advising on the desirability, undesirability, and prohibition of certain states and actions. AdviceMDPs enable the design of designing semi-autonomous systems (systems that require operator support for at least handling certain situations) that can efficiently handle unexpected complex environments.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'AAAI Technical Track: Human-AI Collaboration',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4099',
      doi: '10.1609/aaai.v33i01.33012531'
    },
    {
      title: 'Auto-GAN: Self-Supervised Collaborative Learning for Medical Image Synthesis',
      authors: 'Bing Cao; Han Zhang; Nannan Wang; Xinbo Gao; Dinggang Shen',
      abstract: 'In various clinical scenarios, medical image is crucial in disease diagnosis and treatment. Different modalities of medical images provide complementary information and jointly helps doctors to make accurate clinical decision. However, due to clinical and practical restrictions, certain imaging modalities may be unavailable nor complete.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Vision',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6619',
      doi: '10.1609/aaai.v34i07.6619'
    },
    {
      title: 'AutoCost: Evolving Intrinsic Cost for Zero-Violation Reinforcement Learning',
      authors: 'Tairan He; Weiye Zhao; Changliu Liu',
      abstract: 'Safety is a critical hurdle that limits the application of deep reinforcement learning to real-world control tasks. To this end, constrained reinforcement learning leverages cost functions to improve safety in constrained Markov decision process. However, constrained methods fail to achieve zero violation even when the cost limit is zero.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2023,
      type: 'AAAI Special Track on Safe and Robust AI',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/26734',
      doi: '10.1609/aaai.v37i12.26734'
    },
    {
      title: 'AutoEncoder by Forest',
      authors: 'Ji Feng; Zhi-Hua Zhou',
      abstract: 'Auto-encoding is an important task which is typically realized by deep neural networks (DNNs) such as convolutional neural networks (CNN). In this paper, we propose EncoderForest (abbrv. eForest), the first tree ensemble based auto-encoder. We present a procedure for enabling forests to do backward reconstruction by utilizing the Maximal-Compatible Rule (MCR) defined by the decision paths of the trees, and demonstrate its usage in both supervised and unsupervised setting.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2018,
      type: 'AAAI Technical Track: Machine Learning',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/11732',
      doi: '10.1609/aaai.v32i1.11732'
    },
    {
      title: 'Automated Design of Affine Maximizer Mechanisms in Dynamic Settings',
      authors: 'Michael Curry; Vinzenz Thoma; Darshan Chakrabarti; Stephen McAleer; Christian Kroer; Tuomas Sandholm; Niao He; Sven Seuken',
      abstract: 'Dynamic mechanism design is a challenging extension to ordinary mechanism design in which the mechanism designer must make a sequence of decisions over time in the face of possibly untruthful reports of participating agents. Optimizing dynamic mechanisms for welfare is relatively well understood. However, there has been less work on optimizing for other goals (e.g., revenue), and without restrictive assumptions on valuations, it is remarkably challenging to characterize good mechanisms.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AAAI Technical Track on Game Theory and Economic Paradigms',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/28819',
      doi: '10.1609/aaai.v38i9.28819'
    },
    {
      title: 'Automated Dispatch of Helpdesk Email Tickets: Pushing the Limits with AI',
      authors: 'Atri Mandal; Nikhil Malhotra; Shivali Agarwal; Anupama Ray; Giriprasad Sridhara',
      abstract: 'Ticket assignment/dispatch is a crucial part of service delivery business with lot of scope for automation and optimization. In this paper, we present an end-to-end automated helpdesk email ticket assignment system, which is also offered as a service. The objective of the system is to determine the nature of the problem mentioned in an incoming email ticket and then automatically dispatch it to an appropriate resolver group (or team) for resolution.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2019,
      type: 'IAAI Technical Track: Deployed Papers',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/4986',
      doi: '10.1609/aaai.v33i01.33019381'
    },
    {
      title: 'Automated Lay Language Summarization of Biomedical Scientific Reviews',
      authors: 'Yue Guo; Wei Qiu; Yizhong Wang; Trevor Cohen',
      abstract: 'Health literacy has emerged as a crucial factor in making appropriate health decisions and ensuring treatment outcomes. However, medical jargon and the complex structure of professional language in this domain make health information especially hard to interpret. Thus, there is an urgent unmet need for automated methods to enhance the accessibility of the biomedical literature to the general population.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2021,
      type: 'AAAI Technical Track on Application Domains',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/16089',
      doi: '10.1609/aaai.v35i1.16089'
    },
    {
      title: 'Back to the Future – Temporal Adaptation of Text Representations',
      authors: 'Johannes Bjerva; Wouter Kouw; Isabelle Augenstein',
      abstract: 'Language evolves over time in many ways relevant to natural language processing tasks. For example, recent occurrences of tokens BERT and ELMO in publications refer to neural network architectures rather than persons. This type of temporal signal is typically overlooked, but is important if one aims to deploy a machine learning model over an extended period of time.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Natural Language Processing',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6240',
      doi: '10.1609/aaai.v34i05.6240'
    },
    {
      title: 'Backdoor Attacks on the DNN Interpretation System',
      authors: 'Shihong Fang; Anna Choromanska',
      abstract: 'Interpretability is crucial to understand the inner workings of deep neural networks (DNNs). Many interpretation methods help to understand the decision-making of DNNs by generating saliency maps that highlight parts of the input image that contribute the most to the prediction made by the DNN. In this paper we design a backdoor attack that alters the saliency map produced by the network for an input image with a specific trigger pattern while not losing the prediction performance significantly.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2022,
      type: 'AAAI Technical Track on Computer Vision I',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/19935',
      doi: '10.1609/aaai.v36i1.19935'
    },
    {
      title: 'Backpropagation Through Agents',
      authors: 'Zhiyuan Li; Wenshuai Zhao; Lijun Wu; Joni Pajarinen',
      abstract: 'A fundamental challenge in multi-agent reinforcement learning (MARL) is to learn the joint policy in an extremely large search space, which grows exponentially with the number of agents. Moreover, fully decentralized policy factorization significantly restricts the search space, which may lead to sub-optimal policies. In contrast, the auto-regressive joint policy can represent a much richer class of joint policies by factorizing the joint policy into the product of a series of conditional individual policies.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2024,
      type: 'AAAI Technical Track on Machine Learning III',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/29277',
      doi: '10.1609/aaai.v38i12.29277'
    },
    {
      title: 'Bagging Ensembles for the Diagnosis and Prognostication of Alzheimers Disease',
      authors: 'Peng Dai; Femida Gwadry-Sridhar; Michael Bauer; Michael Borrie',
      abstract: 'Alzheimers disease (AD) is a chronic neurodegenerative disease, which involves the degeneration of various brain functions, resulting in memory loss, cognitive disorder and death. Large amounts of multivariate heterogeneous medical test data are available for the analysis of brain deterioration. How to measure the deterioration remains a challenging problem.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2016,
      type: 'Special Track: Integrated AI Capabilities',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/9915',
      doi: '10.1609/aaai.v30i1.9915'
    },
    {
      title: 'Balancing Quality and Human Involvement: An Effective Approach to Interactive Neural Machine Translation',
      authors: 'Tianxiang Zhao; Lemao Liu; Guoping Huang; Huayang Li; Yingling Liu; Liu GuiQuan; Shuming Shi',
      abstract: 'Conventional interactive machine translation typically requires a human translator to validate every generated target word, even though most of them are correct in the advanced neural machine translation (NMT) scenario. Previous studies have exploited confidence approaches to address the intensive human involvement issue, which request human guidance only for a few number of words with low confidences.',
      venue: 'AAAI Conference on Artificial Intelligence',
      year: 2020,
      type: 'AAAI Technical Track: Natural Language Processing',
      link: 'https://ojs.aaai.org/index.php/AAAI/article/view/6514',
      doi: '10.1609/aaai.v34i05.6514'
    }
  ];
  
  const [papers, setPapers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("information visualization");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const svgRef = useRef(null);
  
  // Process the papers data on component mount
  useEffect(() => {
    // Process papers with embeddings and initial positions
    const processedPapers = manualPapers.map((paper, index) => {
      // Generate a simple embedding (in a real app this would come from a model)
      const embedding = Array(10).fill(0).map(() => Math.random() - 0.5);
      
      return {
        id: paper.doi || `paper-${index}`,
        title: paper.title,
        authors: paper.authors,
        abstract: paper.abstract,
        venue: paper.venue,
        year: paper.year,
        link: paper.link,
        embedding: embedding,
        // Initial positions in a circle
        x: Math.cos(index * (2 * Math.PI / manualPapers.length)) * 0.5,
        y: Math.sin(index * (2 * Math.PI / manualPapers.length)) * 0.5,
        score: 0.5 + Math.random() * 0.4 // Random initial score
      };
    });
    
    setPapers(processedPapers);
    setSearchResults(processedPapers);
  }, []);
  
  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Simulate search by assigning new scores and positions
    const results = papers.map(paper => {
      // Check if paper matches query
      const titleMatch = paper.title.toLowerCase().includes(searchQuery.toLowerCase());
      const abstractMatch = paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Assign score based on match
      const score = titleMatch ? 0.8 + Math.random() * 0.2 : 
                   abstractMatch ? 0.5 + Math.random() * 0.3 : 
                   0.3 + Math.random() * 0.2;
                   
      // Position based on score (higher scores closer to center)
      const angle = Math.random() * 2 * Math.PI;
      const radius = 0.1 + (1 - score) * 0.9;
      
      return {
        ...paper,
        score,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius
      };
    }).sort((a, b) => b.score - a.score);
    
    setSearchResults(results);
    if (results.length > 0) {
      setSelectedPaper(results[0]);
    }
  };
  
  // Render visualization when search results change
  useEffect(() => {
    if (!svgRef.current || searchResults.length === 0) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    
    const width = 500;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    
    // Scales
    const xScale = d3.scaleLinear()
      .domain([-1, 1])
      .range([margin.left, width - margin.right]);
      
    const yScale = d3.scaleLinear()
      .domain([-1, 1])
      .range([height - margin.bottom, margin.top]);
      
    const colorScale = d3.scaleSequential()
      .domain([0, 1])
      .interpolator(d3.interpolateBlues);
      
    const sizeScale = d3.scaleLinear()
      .domain([0, 1])
      .range([4, 12]);
    
    // Draw points
    svg.selectAll("circle")
      .data(searchResults)
      .enter()
      .append("circle")
      .attr("cx", d => xScale(d.x))
      .attr("cy", d => yScale(d.y))
      .attr("r", d => sizeScale(d.score))
      .attr("fill", d => colorScale(d.score))
      .attr("opacity", 0.8)
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .on("click", (event, d) => {
        setSelectedPaper(d);
      })
      .on("mouseover", function() {
        d3.select(this)
          .attr("stroke", "#333")
          .attr("stroke-width", 2);
      })
      .on("mouseout", function() {
        d3.select(this)
          .attr("stroke", "#fff")
          .attr("stroke-width", 0.5);
      });
      
    // Add legend
    const legend = svg.append("g")
      .attr("transform", `translate(${width - 100}, 20)`);
      
    legend.append("text")
      .attr("x", 0)
      .attr("y", 0)
      .text("Relevance")
      .style("font-size", "12px")
      .style("font-weight", "bold");
      
    [0.2, 0.4, 0.6, 0.8].forEach((score, i) => {
      legend.append("circle")
        .attr("cx", 10)
        .attr("cy", i * 20 + 20)
        .attr("r", sizeScale(score))
        .attr("fill", colorScale(score));
        
      legend.append("text")
        .attr("x", 25)
        .attr("y", i * 20 + 24)
        .text(`${Math.round(score * 100)}%`)
        .style("font-size", "12px");
    });
  }, [searchResults]);
  
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Academic Paper Search</h1>
      
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for papers..."
          className="flex-grow p-2 border rounded"
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-7/12 border rounded p-4 bg-white">
          <h2 className="text-lg font-semibold mb-2">Similarity Visualization</h2>
          <svg 
            ref={svgRef} 
            width="500" 
            height="400"
            className="w-full h-auto border-t mt-2 pt-4"
          ></svg>
        </div>
        
        <div className="md:w-5/12 border rounded p-4 bg-white">
          <h2 className="text-lg font-semibold mb-3">Selected Paper</h2>
          {selectedPaper ? (
            <div>
              <h3 className="font-medium">{selectedPaper.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{selectedPaper.authors}</p>
              <p className="text-sm text-gray-600 mt-1">{selectedPaper.venue}, {selectedPaper.year}</p>
              <div className="mt-2 text-sm bg-gray-50 p-2 rounded max-h-40 overflow-y-auto">
                {selectedPaper.abstract}
              </div>
              <div className="mt-2 text-sm">
                <strong>Similarity Score:</strong> {(selectedPaper.score * 100).toFixed(1)}%
              </div>
              {selectedPaper.link && (
                <a 
                  href={selectedPaper.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline mt-2 block"
                >
                  View Paper
                </a>
              )}
            </div>
          ) : (
            <p className="text-gray-500">Click on a point to see paper details</p>
          )}
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-3">Top Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {searchResults.slice(0, 4).map(paper => (
            <div 
              key={paper.id} 
              className={`border rounded p-3 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
                selectedPaper && selectedPaper.id === paper.id ? 'border-blue-500' : ''
              }`}
              onClick={() => setSelectedPaper(paper)}
            >
              <h3 className="font-medium">{paper.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{paper.authors}</p>
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>{paper.venue}</span>
                <span>Score: {(paper.score * 100).toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicPaperSearch;