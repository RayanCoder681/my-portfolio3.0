import type { Project, SkillCategory, Experience, Publication, Stat } from '../types';

export const webPersonalInfo = {
    name: 'Rayan Diatsa',
    title: 'Web dev et AI engineer Student',
    tagline: 'Building dynamic and scalable web applications with React.',
    bio: `Passionate Web Developer specialized in the React ecosystem (React, TypeScript, TailwindCSS) and modern backend frameworks (HonoJS, Node.js). Experienced in designing seamless user interfaces and robust APIs.`,
    location: 'Yaounde, Cameroun',
    email: 'rayandiatsa@gmail.com',
    available: true,
    github: 'https://github.com/RayanCoder681',
    linkedin: 'https://linkedin.com/in/rayan-diatsa-0a539734a',
    scholar: 'https://scholar.google.com',
};

export const webStats: Stat[] = [
    { label: 'Projects Completed', value: '3', suffix: '+', description: 'Full-stack web applications' },
    { label: 'Years Experience', value: '1', suffix: '', description: 'Frontend & Backend' },
    { label: 'Technologies', value: '10', suffix: '+', description: 'Mastered tools' },
];

export const webProjects: Project[] = [
    {
        id: 'web-portfolio',
        title: 'Interactive Portfolio',
        subtitle: 'Dual-track Developer & AI Portfolio',
        description: 'A dynamic, highly interactive portfolio exposing both Web Development and Machine Learning skills using modern React patterns.',
        longDescription: 'Created a complex dual-track app that switches smoothly between two entirely different personas (AI Engineer vs Web Developer) using context and Framer Motion. Engineered with React, TypeScript, and a premium glassmorphic UI design using TailwindCSS.',
        tags: ['React', 'TypeScript', 'TailwindCSS'],
        category: 'web-development',
        metrics: [],
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        github: 'https://github.com/RayanCoder681/my-portfolio3.0',
        image: '/images/portfolio.jpg',
        featured: true,
        year: 2026,
    },
    {
        id: 'offline-messenger',
        title: 'Messagerie Offline',
        subtitle: 'PWA Instant Messaging App',
        description: 'An offline-first instant messaging web application built with a modern tech stack.',
        longDescription: 'A sophisticated web application offering instant messaging capabilities even in low-connectivity environments. Uses PostgreSQL for reliable local/remote data persistence and HonoJS for the fast server logic.',
        tags: ['React', 'HonoJS', 'PostgreSQL'],
        category: 'web-development',
        metrics: [],
        technologies: ['React', 'TypeScript', 'PostgreSQL', 'HonoJS'],
        github: 'https://github.com/RayanCoder681',
        image: '/images/messenger.jpg',
        featured: true,
        year: 2026,
    },
    {
        id: 'todo-app',
        title: 'Todo App',
        subtitle: 'Task Management with Firebase',
        description: 'A responsive and robust task management application integrating real-time database updates and authentication.',
        longDescription: 'A complete CRUD application featuring persistent cloud data storage and real-time syncing across devices. Implemented robust state management, user authentication flows, and a polished user interface.',
        tags: ['React', 'Firebase', 'TypeScript'],
        category: 'web-development',
        metrics: [],
        technologies: ['React', 'TypeScript', 'TailwindCSS', 'Firebase'],
        github: 'https://github.com/RayanCoder681',
        image: '/images/todo.jpg',
        featured: false,
        year: 2026,
    },
    {
        id: 'ecommerce-vitrine',
        title: 'Site Vitrine',
        subtitle: 'Dynamic PHP Storefront',
        description: 'E-commerce showcase site with dynamic product displays.',
        longDescription: 'A traditional but robust web app providing a reliable e-commerce storefront. Designed responsive layouts and managed secure server-side logic and database queries using PHP.',
        tags: ['PHP', 'HTML', 'CSS'],
        category: 'web-development',
        metrics: [],
        technologies: ['PHP', 'HTML', 'CSS', 'SQL'],
        github: 'https://github.com/RayanCoder681',
        image: '/images/ecommerce.jpg',
        featured: false,
        year: 2025,
    }
];

export const webSkillCategories: SkillCategory[] = [
    {
        title: 'Frontend Development',
        icon: '💻',
        skills: [
            { name: 'React', level: 65, category: 'framework' },
            { name: 'TypeScript', level: 55, category: 'language' },
            { name: 'TailwindCSS', level: 70, category: 'tool' },
            { name: 'HTML5 / CSS3', level: 85, category: 'language' },
            { name: 'JavaScript', level: 75, category: 'language' },
        ],
    },
    {
        title: 'Backend & Database',
        icon: '🗄️',
        skills: [
            { name: 'Node.js', level: 50, category: 'tool' },
            { name: 'HonoJS', level: 60, category: 'framework' },
            { name: 'PostgreSQL', level: 50, category: 'tool' },
            { name: 'API REST', level: 65, category: 'concept' },
            { name: 'PHP', level: 45, category: 'language' },
        ],
    },
    {
        title: 'Soft Skills & Management',
        icon: '🤝',
        skills: [
            { name: 'Project Management', level: 80, category: 'concept' },
            { name: 'Teamwork', level: 90, category: 'concept' },
            { name: 'Effective Communication', level: 85, category: 'concept' },
            { name: 'Critical Thinking', level: 85, category: 'concept' },
        ],
    }
];

export const webExperiences: Experience[] = [
    {
        id: 'web-exp1',
        company: 'Personal-Work',
        role: 'Full-Stack Web Developer',
        period: '2025 — Present',
        location: 'Yaounde, Cameroun',
        type: 'full-time',
        description: 'Developed and published multiple web applications including an offline-first messaging app and e-commerce platforms.',
        achievements: [
            'Designed a dual-track interactive portfolio using Framer Motion and context providers',
            'Built a PWA capable messaging service using HonoJS and Postgres',
            'Engineered an e-commerce storefront with dynamic PHP rendering',
        ],
        stack: ['React', 'TypeScript', 'TailwindCSS', 'HonoJS', 'PostgreSQL', 'PHP'],
    }
];

export const webPublications: Publication[] = [];
