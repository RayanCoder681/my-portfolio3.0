import type { Project, SkillCategory, Experience, Publication, Stat } from '../types';

export const personalInfo = {
  name: 'Rayan Diatsa',
  title: 'ML & Data Science Student ',
  tagline: 'Building intelligent systems at the intersection of research and production.',
  bio: `Passionate ML Engineer with 2+ years turning complex data into intelligent systems. I specialize in deep learning architectures, NLP, and scalable MLOps pipelines. My work spans from crafting novel transformer-based models to deploying production-grade AI at scale.`,
  location: 'Yaounde, Cameroun',
  email: 'rayandiatsa@gmail.com',
  available: true,
  github: 'https://github.com/RayanCoder681',
  linkedin: 'https://linkedin.com/in/rayan-diatsa-0a539734a',
  // twitter: 'https://twitter.com',
  scholar: 'https://scholar.google.com',
  // huggingface: 'https://huggingface.co',
};

export const stats: Stat[] = [
  { label: 'Models deployed', value: '10', suffix: '+', description: 'Production ML models' },
  { label: 'Research papers', value: '10', suffix: '', description: 'Peer-reviewed publications' },
  { label: 'Years experience', value: '2', suffix: '+', description: 'In ML/DS' },
  { label: 'Open source stars', value: '3.2k', suffix: '', description: 'GitHub stars' },
];

export const projects: Project[] = [
  // {
  //   id: 'neural-llm-fine-tuning',
  //   title: 'LLaMA Fine-Tuning Framework',
  //   subtitle: 'Production-grade LLM fine-tuning with LoRA & QLoRA',
  //   description: 'End-to-end framework for fine-tuning large language models using PEFT techniques. Achieves 4x memory reduction with QLoRA while maintaining 98% of base model performance.',
  //   longDescription: `A comprehensive framework designed to simplify the fine-tuning of open-source LLMs for domain-specific tasks. 
  //   The system integrates LoRA and QLoRA adapters, automatic mixed precision training, gradient checkpointing, 
  //   and a streamlined evaluation pipeline. Deployed at scale serving 10k+ daily inference requests.`,
  //   tags: ['LLM', 'LoRA', 'Fine-tuning', 'NLP', 'Transformers'],
  //   category: 'nlp',
  //   metrics: [
  //     { label: 'Memory reduction', value: '4×' },
  //     { label: 'Perplexity improvement', value: '34%' },
  //     { label: 'Training speed', value: '2.8×' },
  //   ],
  //   technologies: ['Python', 'PyTorch', 'HuggingFace', 'PEFT', 'bitsandbytes', 'WandB', 'FastAPI'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.example.com',
  //   image: 'llm',
  //   featured: true,
  //   year: 2024,
  // },
  // {
  //   id: 'vision-transformer-med',
  //   title: 'MedViT — Medical Image Segmentation',
  //   subtitle: 'Vision Transformer for tumor detection & segmentation',
  //   description: 'Custom ViT architecture for medical imaging achieving state-of-the-art results on BraTS 2023 benchmark. Dice score of 0.924 on brain tumor segmentation.',
  //   longDescription: `MedViT is a specialized Vision Transformer for 3D medical image analysis. 
  //   The model incorporates multi-scale feature extraction, attention-based skip connections, 
  //   and a novel data augmentation strategy for limited medical datasets. 
  //   Validated on BraTS 2023, LiTS, and KiTS23 benchmarks.`,
  //   tags: ['Computer Vision', 'ViT', 'Medical AI', 'Segmentation', 'Deep Learning'],
  //   category: 'computer-vision',
  //   metrics: [
  //     { label: 'Dice Score', value: '0.924' },
  //     { label: 'Sensitivity', value: '96.2%' },
  //     { label: 'Inference time', value: '120ms' },
  //   ],
  //   technologies: ['Python', 'PyTorch', 'MONAI', 'SimpleITK', 'NumPy', 'TensorBoard'],
  //   github: 'https://github.com',
  //   paper: 'https://arxiv.org',
  //   image: 'medvit',
  //   featured: true,
  //   year: 2024,
  // },
  // {
  //   id: 'mlops-platform',
  //   title: 'NeuralFlow MLOps Platform',
  //   subtitle: 'End-to-end ML lifecycle management system',
  //   description: 'Internal MLOps platform handling model versioning, A/B testing, drift detection, and automated retraining pipelines for 50+ production models.',
  //   longDescription: `NeuralFlow is a production MLOps platform built to handle the full lifecycle of ML models. 
  //   Features include feature store integration, model registry, real-time monitoring with drift detection, 
  //   shadow deployment, and automated retraining triggers via Airflow DAGs.`,
  //   tags: ['MLOps', 'Kubernetes', 'Feature Store', 'Monitoring', 'CI/CD'],
  //   category: 'mlops',
  //   metrics: [
  //     { label: 'Models managed', value: '50+' },
  //     { label: 'Deployment time', value: '−85%' },
  //     { label: 'MTTR', value: '<5min' },
  //   ],
  //   technologies: ['Python', 'FastAPI', 'Airflow', 'MLflow', 'Kubernetes', 'Prometheus', 'Grafana', 'Redis', 'PostgreSQL'],
  //   github: 'https://github.com',
  //   image: 'mlops',
  //   featured: true,
  //   year: 2023,
  // },
  // {
  //   id: 'graph-neural-recommender',
  //   title: 'Graph Neural Recommender System',
  //   subtitle: 'GNN-based collaborative filtering at scale',
  //   description: 'Production recommender system using Graph Neural Networks for a 10M+ user platform, achieving 28% improvement in CTR over matrix factorization baseline.',
  //   longDescription: `A graph-based recommendation engine that models user-item interactions as a heterogeneous graph. 
  //   Using GraphSAGE with attention mechanisms, the system captures high-order connectivity patterns. 
  //   Deployed with Faiss for approximate nearest-neighbor search, serving real-time recommendations at <50ms latency.`,
  //   tags: ['GNN', 'Recommender Systems', 'Graph ML', 'PyTorch Geometric'],
  //   category: 'deep-learning',
  //   metrics: [
  //     { label: 'CTR improvement', value: '+28%' },
  //     { label: 'Latency p99', value: '48ms' },
  //     { label: 'Users', value: '10M+' },
  //   ],
  //   technologies: ['Python', 'PyG', 'Faiss', 'Redis', 'Spark', 'Kafka'],
  //   github: 'https://github.com',
  //   image: 'gnn',
  //   featured: false,
  //   year: 2023,
  // },
  // {
  //   id: 'rl-trading',
  //   title: 'RL Portfolio Optimization',
  //   subtitle: 'Deep Reinforcement Learning for algorithmic trading',
  //   description: 'PPO + Transformer-based RL agent for multi-asset portfolio optimization. Outperforms S&P 500 benchmark by 18.4% annualized return in backtesting.',
  //   longDescription: `A deep RL agent using Proximal Policy Optimization with a Transformer-based policy network 
  //   for portfolio management. The state space encodes technical indicators, order book data, and macro features. 
  //   Trained on 20 years of historical data across 500+ assets.`,
  //   tags: ['Reinforcement Learning', 'FinTech', 'PPO', 'Time Series', 'Transformers'],
  //   category: 'reinforcement-learning',
  //   metrics: [
  //     { label: 'Annual return', value: '+18.4%' },
  //     { label: 'Sharpe ratio', value: '1.84' },
  //     { label: 'Max drawdown', value: '−12%' },
  //   ],
  //   technologies: ['Python', 'PyTorch', 'Stable-Baselines3', 'Ray RLlib', 'Pandas', 'QuantLib'],
  //   github: 'https://github.com',
  //   image: 'rl',
  //   featured: false,
  //   year: 2022,
  // },
  {
    id: 'linear-regression-scratch',
    title: 'Linear Regression from Scratch',
    subtitle: 'OLS & Gradient Descent Implementation',
    description: 'NumPy-based implementation of Linear Regression using Ordinary Least Squares and Gradient Descent. Includes convergence analysis and real-time visualization.',
    longDescription: `A pedagogical implementation of Linear Regression fundamentals. 
    It features a comparative study between the closed-form solution (OLS) and the iterative optimization 
    (Gradient Descent). The project includes automated hyperparameter tuning for the learning rate, 
    L1/L2 regularization options, and interactive Matplotlib visualizations showing the loss landscape.`,
    tags: ['Machine Learning', 'NumPy', 'Optimization', 'Scratch'],
    category: 'machine-learning',
    metrics: [
      { label: 'MSE', value: '0.024' },
      { label: 'R² Score', value: '0.98' },
      { label: 'Convergence', value: '<50 epochs' },
    ],
    technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Calculus'],
    github: 'https://github.com/RayanCoder681/ML_From_Scratch/tree/main/Regression',
    image: '/images/Linear_regress.jpg',
    featured: true,
    year: 2026,
  },
  {
    id: 'knn-from-scratch',
    title: 'KNN from Scratch',
    subtitle: 'K-Nearest Neighbors Algorithm',
    description: 'A pure NumPy implementation of the K-Nearest Neighbors algorithm with support for multiple distance metrics and automated K-value optimization.',
    longDescription: `An end-to-end implementation of the K-Nearest Neighbors (KNN) algorithm without using high-level ML libraries. 
    Key features include supporting Euclidean, Manhattan, and Minkowski distance metrics, a built-in cross-validation 
    module for selecting the optimal 'k', and high-performance vectorized operations using NumPy for efficient 
    inference on large datasets. Tested on Iris and MNIST-subset datasets.`,
    tags: ['Machine Learning', 'NumPy', 'Algorithms', 'Scratch'],
    category: 'machine-learning',
    metrics: [
      { label: 'Accuracy', value: '98.2%' },
      { label: 'K-Optimal', value: '5' },
      { label: 'Metrics', value: 'Euclidean' },
    ],
    technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'Seaborn'],
    github: 'https://github.com/RayanCoder681/ML_From_Scratch/tree/main/Learn_KNN',
    image: '/images/knn.jpg',
    featured: false,
    year: 2026,
  },
  {
    id: 'logistic-regression-scratch',
    title: 'Logistic Regression from Scratch',
    subtitle: 'Gradient Descent Implementation',
    description: 'A pure NumPy implementation of Logistic Regression for binary classification. Developed as part of a deep dive into fundamental ML optimization.',
    longDescription: `An end-to-end implementation of Logistic Regression using NumPy. It features a robust gradient descent optimizer, Z-score normalization, and a comprehensive evaluation suite including accuracy, precision, recall, and F1-score. Created a synthetic dataset of university admissions to validate the model, achieving 83% accuracy and providing clear weight interpretability.`,
    tags: ['Machine Learning', 'NumPy', 'Optimization', 'Scratch'],
    category: 'machine-learning',
    metrics: [
      { label: 'Accuracy', value: '83%' },
      { label: 'F1-Score', value: '0.84' },
      { label: 'Convergence', value: '1000 epochs' },
    ],
    technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/RayanCoder681/ML_From_Scratch/tree/main/Regression%20Logistic',
    image: '/images/logistic_regression.jpg',
    featured: true,
    year: 2026,
  },
  // {
  //   id: 'multimodal-rag',
  //   title: 'Multimodal RAG Pipeline',
  //   subtitle: 'Retrieval-Augmented Generation with vision + text',
  //   description: 'RAG system combining CLIP embeddings and LLM for cross-modal retrieval over 2M+ document/image pairs. Powers an enterprise knowledge base serving 5k+ daily queries.',
  //   longDescription: `A production multimodal RAG pipeline that handles both text and image queries. 
  //   Uses CLIP for joint embedding, ChromaDB for vector storage, and a fine-tuned LLaMA model for generation. 
  //   Implements hybrid dense/sparse retrieval with re-ranking via cross-encoders.`,
  //   tags: ['RAG', 'Multimodal', 'CLIP', 'LLM', 'Vector DB', 'NLP'],
  //   category: 'nlp',
  //   metrics: [
  //     { label: 'Retrieval accuracy', value: '91.3%' },
  //     { label: 'Response time', value: '1.2s' },
  //     { label: 'Documents indexed', value: '2M+' },
  //   ],
  //   technologies: ['Python', 'LangChain', 'CLIP', 'ChromaDB', 'FastAPI', 'Docker'],
  //   github: 'https://github.com',
  //   demo: 'https://demo.example.com',
  //   image: 'rag',
  //   featured: false,
  //   year: 2024,
  // },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Deep Learning',
    icon: '🧠',
    skills: [
      { name: 'PyTorch', level: 10, category: 'framework' },
      { name: 'TensorFlow / Keras', level: 10, category: 'framework' },
      { name: 'JAX / Flax', level: 2, category: 'framework' },
      { name: 'Transformers (HuggingFace)', level: 2, category: 'framework' },
      { name: 'CNNs / ViT / DETR', level: 2, category: 'concept' },
      { name: 'LLMs / Fine-tuning', level: 2, category: 'concept' },
    ],
  },
  {
    title: 'Data Science & ML',
    icon: '📊',
    skills: [
      { name: 'Scikit-learn', level: 50, category: 'framework' },
      { name: 'XGBoost / LightGBM', level: 2, category: 'framework' },
      { name: 'Pandas / Polars', level: 80, category: 'tool' },
      { name: 'Statistical Modeling', level: 80, category: 'concept' },
      { name: 'Feature Engineering', level: 10, category: 'concept' },
      { name: 'Time Series Analysis', level: 2, category: 'concept' },
    ],
  },
  {
    title: 'MLOps & Infrastructure',
    icon: '⚙️',
    skills: [
      { name: 'MLflow / DVC', level: 2, category: 'tool' },
      { name: 'Kubernetes / Docker', level: 2, category: 'tool' },
      { name: 'Apache Airflow', level: 2, category: 'tool' },
      { name: 'Prometheus / Grafana', level: 2, category: 'tool' },
      { name: 'CI/CD (GitHub Actions)', level: 2, category: 'tool' },
      { name: 'Model Serving (Triton)', level: 2, category: 'tool' },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    skills: [
      { name: 'Python', level: 70, category: 'language' },
      { name: 'SQL / NoSQL', level: 15, category: 'language' },
      { name: 'Html / Css ', level: 98, category: 'language' },
      { name: 'javaScript', level: 40, category: 'language' },
      { name: 'TypeScript', level: 30, category: 'language' },
      { name: 'Bash / Linux', level: 10, category: 'language' },
    ],
  },
  {
    title: 'Cloud & Data Platforms',
    icon: '☁️',
    skills: [
      { name: 'AWS (SageMaker, S3, EC2)', level: 2, category: 'cloud' },
      { name: 'GCP (Vertex AI, BigQuery)', level: 2, category: 'cloud' },
      { name: 'Azure ML', level: 2, category: 'cloud' },
      { name: 'Apache Spark / Databricks', level: 2, category: 'tool' },
      { name: 'Kafka / Flink', level: 2, category: 'tool' },
      { name: 'dbt / Airflow', level: 2, category: 'tool' },
    ],
  },
  {
    title: 'NLP & Vision Specializations',
    icon: '👁️',
    skills: [
      { name: 'RAG / Vector DBs', level: 10, category: 'concept' },
      { name: 'RLHF / Alignment', level: 2, category: 'concept' },
      { name: 'Object Detection / YOLO', level: 2, category: 'concept' },
      { name: 'Image Segmentation', level: 40, category: 'concept' },
      { name: 'Graph Neural Networks', level: 40, category: 'concept' },
      { name: 'Diffusion Models', level: 10, category: 'concept' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Personal-Work',
    role: 'Machine and Deep Learning Student',
    period: 'Feb 2026 — Present',
    location: 'Yaounde, Cameroun',
    type: 'full-time',
    description: 'Learning and then write from scratch an artificial neuron',
    achievements: [
      'Implement and demonstrate the differents formulas for the neuron',
      'Implement and demonstrate the differents formulas for the perceptron',
      'Implement and demonstrate the differents formulas for the multi-layer perceptron',
    ],
    stack: ['Python', 'Algebra Skills', 'Numpy', 'Pandas', 'Matplotlib', 'sklearn'],
  },
  {
    id: 'exp2',
    company: 'Personal-Work',
    role: 'Machine Learning Student',
    period: 'Jan 2026 Feb-2026',
    location: 'Yaounde, Cameroun',
    type: 'full-time',
    description: 'Learning and then write from the scratch the main ML algorithms',
    achievements: [
      'Implement and Write the code of the Linear regression using the mean-squared method',
      'Implement and Write the code of the Logistic regression using the gradient descent method',
      'Implement and Write the code of the Neural network using the backpropagation method',
    ],
    stack: ['Python', 'Numpy', 'Pandas', 'Matplotlib'],
  },
  // {
  //   id: 'exp3',
  //   company: 'Criteo AI Lab',
  //   role: 'Data Scientist — RecSys',
  //   period: 'Jun 2020 — Feb 2022',
  //   location: 'Paris, France',
  //   type: 'full-time',
  //   description: 'Built and maintained large-scale recommendation systems serving billions of daily ad impressions.',
  //   achievements: [
  //     'Redesigned CTR prediction model with GNN achieving +15% CTR lift across major campaigns',
  //     'Deployed real-time feature pipeline on Kafka + Flink processing 500k events/second',
  //     'Led A/B testing framework reducing experiment cycle time from 2 weeks to 3 days',
  //     'Mentored 3 junior data scientists; established ML best practices documentation',
  //   ],
  //   stack: ['Python', 'PyTorch', 'Spark', 'Kafka', 'Flink', 'Hive', 'Airflow'],
  // },
  // {
  //   id: 'exp4',
  //   company: 'INRIA',
  //   role: 'Research Intern — Machine Learning',
  //   period: 'Feb 2020 — May 2020',
  //   location: 'Sophia Antipolis, France',
  //   type: 'internship',
  //   description: 'Research on federated learning and differential privacy for healthcare data.',
  //   achievements: [
  //     'Implemented FL algorithm with DP guarantees (ε=1.0) across 10 hospital nodes',
  //     'Achieved 94% of centralized baseline accuracy while preserving patient privacy',
  //     'Co-authored workshop paper at ICLR 2020 on privacy-preserving medical AI',
  //   ],
  //   stack: ['Python', 'TensorFlow-Federated', 'PySyft', 'NumPy'],
  // },
];

export const publications: Publication[] = [
  // {
  //   id: 'pub1',
  //   title: 'Efficient Long-Context Transformers via Hierarchical Sparse Attention',
  //   authors: ['Alex Chen', 'Maria Santos', 'Yuki Tanaka', 'David Kim'],
  //   venue: 'NeurIPS 2023',
  //   year: 2023,
  //   type: 'conference',
  //   abstract: 'We propose HierSparse, a hierarchical sparse attention mechanism that reduces the computational complexity of self-attention from O(n²) to O(n log n) while maintaining full expressiveness for long-context tasks. Evaluated across 7 benchmarks, HierSparse matches full attention performance with 4× speed improvement at 16k context length.',
  //   arxiv: 'https://arxiv.org/abs/2312.xxxxx',
  //   citations: 127,
  //   tags: ['Transformers', 'Attention', 'Efficiency', 'LLM'],
  // },
  {
    id: 'data-leakage-preprocessing',
    title: 'Le Piège Silencieux du Machine Learning : Éviter le "Data Leakage" lors du Prétraitement',
    authors: ['Rayan Diatsa'],
    venue: 'ML Blog',
    year: 2026,
    type: 'article',
    abstract: 'Exploration de l\'erreur subtile du data leakage en prétraitement, avec des exemples concrets tirés d\'une implémentation de régression logistique from scratch.',
    content: `
# Le Piège Silencieux du Machine Learning : Éviter le "Data Leakage" lors du Prétraitement

**Introduction**
Imaginez la situation : vous venez de terminer la modélisation de votre jeu de données. Vos métriques d'évaluation sont exceptionnelles, votre modèle affiche une précision (*accuracy*) de 98%. Vous le déployez en production, confiant... et c'est la catastrophe. Les prédictions sur les nouvelles données sont très mauvaises.

Que s'est-il passé ? Vous avez probablement été victime de **Data Leakage** (ou fuite de données). Dans cet article, nous allons explorer comment cette erreur subtile s'immisce dans une phase apparemment inoffensive : le prétraitement des données (*preprocessing*).

### Qu'est-ce que le Data Leakage en Prétraitement ?
Le principe fondamental du Machine Learning est que le jeu de test (\`Test Set\`) doit simuler des données futures, totalement inconnues du modèle. Le Data Leakage se produit lorsque des éléments ou la structure mathématique de ce jeu de test "fuitent" dans le jeu d'entraînement (\`Train Set\`) pendant le développement du modèle.

L'une des façons les plus courantes — et les plus vicieuses — de créer une telle fuite, est d'appliquer des transformations statistiques (comme la normalisation, la standardisation, ou l'imputation de valeurs manquantes) sur *l'ensemble* du jeu de données, **avant** de procéder à la séparation Train/Test.

### L'Erreur Classique (Ce qu'il ne faut pas faire) ❌
Prenons l'exemple de la standardisation (*Z-score normalization*), que j'ai eu l'occasion de coder de zéro dans un récent projet de Régression Logistique. La formule implique de soustraire la moyenne globale de la variable, puis de la diviser par son écart-type.

Voici l'approche erronée que l'on observe souvent :
\`\`\`python
# ❌ L'ERREUR CLASSIQUE : Normaliser AVANT de séparer
# La moyenne et l'écart-type sont calculés sur CHAQUE ligne, y compris les futures données de test !
X_normalized = (X - X.mean()) / X.std()

# Le modèle va s'entraîner sur des données qui "connaissent" déjà les statistiques globales...
X_train, X_test, y_train, y_test = train_test_split(X_normalized, y, test_size=0.2)
\`\`\`
**Pourquoi est-ce mauvais ?** Parce que la moyenne (et l'écart-type) que vous avez utilisée pour transformer votre \`X_train\` a été influencée par les valeurs de votre \`X_test\`. Votre modèle a secrètement "vu" une information mathématique sur les données de test à l'avance. Son évaluation sera alors facticement optimiste.

### La Bonne Pratique : Respecter la Chronologie des Données ✅
La règle d'or en Data Science est stricte : **Séparer d'abord, Transformer ensuite.**

Les paramètres de prétraitement (la moyenne \`mean\` et l'écart-type \`std\`) doivent être "appris" **uniquement** sur les données d'entraînement. Ces mêmes paramètres sont ensuite appliqués aux données d'entraînement ET aux données de test.

Voici la bonne approche, tirée de l'implémentation *From Scratch* de mon algorithme :

\`\`\`python
# ✅ LA BONNE PRATIQUE : Séparer d'abord
# 1. On sépare les données D'ABORD
X_train, X_test, y_train, y_test = train_test_split_manual(X, y, test_size=0.2)

# 2. On calcule les paramètres UNIQUEMENT sur X_train
mean_train = np.mean(X_train, axis=0)
std_train = np.std(X_train, axis=0)

# 3. On applique la transformation au Train ET au Test, en utilisant UNIQUEMENT mean_train et std_train
X_train_norm = (X_train - mean_train) / std_train
X_test_norm = (X_test - mean_train) / std_train 
\`\`\`

Même si le \`X_test\` a sa propre moyenne mathématique dans l'absolu, nous l'ignorons volontairement. Nous le traitons exactement de la même manière qu'une nouvelle donnée isolée (un étudiant candidat) arrivant dans l'algorithme une fois en production. 

### Conclusion
Dans un pipeline de Machine Learning, l'hygiène de la donnée est tout aussi vitale que le choix de l'algorithme. Gérer le prétraitement après la séparation de vos données garantit que vos métriques d'évaluation reflètent la performance réelle de votre modèle face à la réalité.

Avoir conscience de l'étanchéité absolue qui doit exister entre votre Train et votre Test n'est pas qu'un détail d'implémentation, c'est la marque d'une véritable maturité scientifique en Data Science. 
`,
    tags: ['Machine Learning', 'Data Science', 'Preprocessing', 'Data Leakage', 'Python'],
  },
  // {
  //   id: 'pub2',
  //   title: 'MedViT-3D: Vision Transformers for Volumetric Medical Image Segmentation',
  //   authors: ['Alex Chen', 'Sophie Dubois', 'Ahmed Hassan'],
  //   venue: 'Medical Image Analysis',
  //   year: 2023,
  //   type: 'journal',
  //   abstract: 'We introduce MedViT-3D, a pure Vision Transformer architecture for 3D medical image segmentation. Our approach uses 3D window attention with shifted partitioning, achieving state-of-the-art results on BraTS 2023, LiTS, and KiTS23 benchmarks without CNN priors.',
  //   doi: '10.1016/j.media.2023.xxxxx',
  //   arxiv: 'https://arxiv.org/abs/2308.xxxxx',
  //   citations: 89,
  //   tags: ['Medical AI', 'ViT', 'Segmentation', 'Computer Vision'],
  // },
  // {
  //   id: 'pub3',
  //   title: 'Privacy-Preserving Federated Learning for Clinical NLP with Differential Privacy',
  //   authors: ['Alex Chen', 'Isabelle Moreau', 'Thomas Weber'],
  //   venue: 'ICLR 2021 Workshop on Healthcare AI',
  //   year: 2021,
  //   type: 'workshop',
  //   abstract: 'We present a federated learning framework for clinical text classification that provides (ε, δ)-differential privacy guarantees. Across 10 hospital nodes, our approach achieves 94% of centralized accuracy with ε=1.0, enabling privacy-preserving medical AI at scale.',
  //   arxiv: 'https://arxiv.org/abs/2104.xxxxx',
  //   citations: 43,
  //   tags: ['Federated Learning', 'Differential Privacy', 'NLP', 'Healthcare'],
  // },
  // {
  //   id: 'pub4',
  //   title: 'GraphRec+: Heterogeneous Graph Neural Networks for Session-Based Recommendation',
  //   authors: ['Alex Chen', 'Wei Liu', 'Carlos Mendez'],
  //   venue: 'RecSys 2022',
  //   year: 2022,
  //   type: 'conference',
  //   abstract: 'GraphRec+ extends session-based recommendation to heterogeneous graphs, modeling user-item-category-attribute interactions. Our model achieves state-of-the-art performance on five public datasets with a novel temporal graph sampling strategy.',
  //   arxiv: 'https://arxiv.org/abs/2209.xxxxx',
  //   citations: 61,
  //   tags: ['GNN', 'RecSys', 'Graph ML', 'Deep Learning'],
  // },
];
