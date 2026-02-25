# 🧠 ML/DS Portfolio — Alex Chen

Un portfolio moderne orienté **Machine Learning, Deep Learning & Data Science**, construit avec React + TypeScript + TailwindCSS + DaisyUI + Framer Motion.

## 🎨 Design

**Esthétique** : Dark Tech / Neural Network  
**Palette** : 
- Primary: `#00EFFF` (Neural Cyan)
- Accent: `#FF5A0A` (Plasma Orange)  
- Background: `#080E17` (Deep Void)
- Purple accents: `#7C3AED`

**Fonts** :
- Display: `Syne` (headings)
- Mono: `JetBrains Mono` (code/labels)
- Body: `Outfit` (text)

## 🚀 Stack

| Technologie | Usage |
|-------------|-------|
| React 18 + TypeScript | UI Framework |
| Vite | Build tool |
| TailwindCSS 3 | Styling |
| DaisyUI 4 | UI Components (custom `neuraldark` theme) |
| Framer Motion | Animations |
| React Router DOM 6 | Routing |
| Lucide React | Icons |
| react-intersection-observer | Scroll animations |

## 📁 Structure

```
src/
├── components/
│   ├── NeuralBackground.tsx  ← Canvas neural network animation
│   ├── CustomCursor.tsx      ← Custom cursor effet
│   ├── ScrollProgress.tsx    ← Progress bar scroll
│   ├── Navbar.tsx            ← Navigation responsive
│   ├── Hero.tsx              ← Section hero avec typing effect
│   ├── About.tsx             ← À propos + éducation
│   ├── Skills.tsx            ← Skills avec barres animées
│   ├── Projects.tsx          ← Grid projets avec filtres
│   ├── Experience.tsx        ← Timeline expériences
│   ├── Publications.tsx      ← Publications recherche
│   ├── Contact.tsx           ← Formulaire + réseaux
│   └── Footer.tsx            
├── pages/
│   ├── Home.tsx              ← Page principale
│   └── NotFound.tsx          ← Page 404
├── data/
│   └── index.ts              ← Données du portfolio
├── types/
│   └── index.ts              ← Types TypeScript
├── utils/
│   └── animations.ts         ← Variants Framer Motion
├── hooks/
│   └── useInView.ts          ← Hooks personnalisés
└── styles/
    └── globals.css           ← CSS global + animations
```

## 📦 Installation

```bash
# Cloner ou décompresser le projet
cd portfolio-ml

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build
```

## ✏️ Personalisation

### 1. Modifier vos infos personnelles
Éditez `src/data/index.ts` → `personalInfo`

### 2. Ajouter des projets
Éditez `src/data/index.ts` → tableau `projects`

### 3. Mettre à jour l'expérience
Éditez `src/data/index.ts` → tableau `experiences`

### 4. Ajouter des publications
Éditez `src/data/index.ts` → tableau `publications`

### 5. Modifier la palette de couleurs
Éditez `tailwind.config.ts` → sections `colors` et `daisyui.themes`

## 🔧 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Intro avec typing animation, code snippet animé, stats |
| **About** | Bio, éducation, certifications, intérêts |
| **Skills** | Catégories de compétences avec barres de progression |
| **Projects** | Grid avec filtres par catégorie (NLP, CV, MLOps...) |
| **Experience** | Timeline interactive avec détails |
| **Publications** | Liste de papers avec venue, citations, liens |
| **Contact** | Formulaire + liens sociaux |

## 🎭 Fonctionnalités

- ✅ Curseur personnalisé
- ✅ Canvas neural network animé en background
- ✅ Scroll progress bar
- ✅ Typing animation dans le Hero
- ✅ Animations Framer Motion sur scroll
- ✅ Filtres projets par catégorie
- ✅ Timeline expérience interactive
- ✅ Formulaire de contact avec états
- ✅ Design responsive mobile-first
- ✅ Thème DaisyUI personnalisé `neuraldark`
- ✅ Custom scrollbar
- ✅ Scanlines effect sur terminal
- ✅ Grid overlay neural
