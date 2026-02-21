export interface MLProject {
  title: string;
  tag: string;
  cat: 'ml' | 'dl' | 'mlops';
  desc: string;
  metrics: string;
  img: string;
  color: string;
}

export interface WebProject {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  img: string;
  status: string;
  color: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  desc: string;
}

export interface TimelineItem {
  year: string;
  side: 'left' | 'right';
  title: string;
  place: string;
  desc: string;
}

export const mlProjects: MLProject[] = [
  {
    title: 'NeuroGAN: HyperRealistic Text-to-Image',
    tag: 'Generative AI',
    cat: 'ml',
    desc: 'Custom GAN architecture optimized for low-VRAM environments. State-of-the-art FID scores on CelebA-HQ dataset.',
    metrics: 'FID: 12.4 | Params: 45M',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    color: '#0ea5e9',
  },
  {
    title: 'EcoNet: Climate Sentiment 3.0',
    tag: 'NLP',
    cat: 'ml',
    desc: 'Hierarchical attention network for multi-language climate discourse analysis. Processing 1M+ tweets daily.',
    metrics: 'mAP: 0.94 | Accuracy: 89%',
    img: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?auto=format&fit=crop&q=80&w=800',
    color: '#8b5cf6',
  },
  {
    title: 'VisionEdge: Real-time Object Tracking',
    tag: 'Computer Vision',
    cat: 'dl',
    desc: 'Custom YOLOv8 backbone for TensorRT deployment. Ultra-low latency warehouse automation system.',
    metrics: 'FPS: 120+ | Latency: 4ms',
    img: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
    color: '#10b981',
  },
  {
    title: 'TransformerLM: Domain-Adapted LLM',
    tag: 'Deep Learning',
    cat: 'dl',
    desc: 'Fine-tuned LLaMA-2 on scientific literature with custom tokenizer. Achieves SOTA on BioASQ benchmark.',
    metrics: 'BioASQ: 0.87 | BLEU: 0.72',
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    color: '#f59e0b',
  },
  {
    title: 'OptiML: AutoML Pipeline',
    tag: 'MLOps',
    cat: 'mlops',
    desc: 'End-to-end automated ML pipeline with Optuna hyperparameter search, SHAP explainability and drift monitoring.',
    metrics: 'Trials: 500+ | Δ Acc: +12%',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: '#ef4444',
  },
  {
    title: 'SpeechFormer: Emotion Recognition',
    tag: 'Audio ML',
    cat: 'dl',
    desc: 'Wav2Vec2-based pipeline for real-time emotion detection in call centers with <50ms latency.',
    metrics: 'F1: 0.91 | Latency: 48ms',
    img: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    color: '#ec4899',
  },
];

export const webProjects: WebProject[] = [
  {
    title: 'DataViz Dashboard',
    tag: 'React / D3.js',
    desc: 'Interactive analytics dashboard with real-time data streaming, custom D3 visualizations and WebSocket integration.',
    stack: ['React', 'D3.js', 'WebSocket', 'TailwindCSS'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    status: 'In Dev',
    color: '#0ea5e9',
  },
  {
    title: 'AI Prompt Studio',
    tag: 'Next.js / OpenAI',
    desc: 'Full-stack web app to craft, test and version-control LLM prompts with side-by-side model comparison.',
    stack: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
    status: 'In Dev',
    color: '#8b5cf6',
  },
  {
    title: 'MLOps Monitoring Portal',
    tag: 'React / FastAPI',
    desc: 'Production ML model monitoring portal with drift detection alerts, performance graphs and A/B test management.',
    stack: ['React', 'FastAPI', 'Grafana', 'Redis'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    status: 'In Dev',
    color: '#10b981',
  },
];

export const skills: Skill[] = [
  { name: 'Deep Learning Architectures', icon: 'layers', level: 92, desc: 'CNNs, Transformers, custom RNNs — PyTorch & TensorFlow.' },
  { name: 'Natural Language Processing', icon: 'brain', level: 85, desc: 'BERT, GPT fine-tuning, embeddings, sentiment pipelines.' },
  { name: 'Data Engineering & ETL', icon: 'database', level: 88, desc: 'Spark, SQL, automated cleaning and feature engineering.' },
  { name: 'Model Optimization', icon: 'activity', level: 80, desc: 'Quantization, pruning, Optuna, WandB hyperparameter tuning.' },
  { name: 'Core AI Programming', icon: 'code', level: 95, desc: 'Python (NumPy/Pandas), C++ inference engines, modular research code.' },
  { name: 'Cloud MLOps', icon: 'cloud', level: 75, desc: 'Docker, AWS SageMaker, production drift monitoring.' },
];

export const timeline: TimelineItem[] = [
  { year: '2020', side: 'left', title: 'Licence Informatique', place: 'Université de Paris', desc: 'Fondements algorithmiques, programmation Python, premières expériences en data science.' },
  { year: '2021', side: 'right', title: 'Premiers projets ML', place: 'Self-taught / Kaggle', desc: 'Participation à des compétitions Kaggle, top 15% sur House Prices et Titanic.' },
  { year: '2022', side: 'left', title: 'Master IA & Deep Learning', place: 'CentraleSupélec', desc: 'Spécialisation en architectures profondes, NLP, vision par ordinateur et MLOps.' },
  { year: '2022', side: 'right', title: 'Stage Recherche – NLP', place: 'Inria Paris', desc: 'Développement d\'un modèle de détection de désinformation sur Twitter avec BERT fine-tuné.' },
  { year: '2023', side: 'left', title: 'Junior ML Engineer', place: 'TechCorp AI', desc: 'Déploiement de pipelines MLOps sur AWS, optimisation de modèles de recommandation (CTR +18%).' },
  { year: '2024', side: 'right', title: 'Recherche indépendante', place: 'Open Source', desc: 'Publication de NeuroGAN sur arXiv, contribution à HuggingFace, mentor dans des bootcamps ML.' },
];

export const catLabels: Record<string, string> = {
  all: 'All',
  ml: 'Machine Learning',
  dl: 'Deep Learning',
  mlops: 'MLOps',
};
