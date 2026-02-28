import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, FileText, ArrowRight, TrendingUp, Cpu, Database, Eye, Brain, Zap, X } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data';
import type { Project } from '../types';
import { fadeInUp, staggerContainer, itemVariants } from '../utils/animations';

const categoryConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  'deep-learning': { label: 'Deep Learning', color: 'text-neural-300 border-neural-300/40 bg-neural-300/10', icon: Brain },
  'nlp': { label: 'NLP', color: 'text-violet-300 border-violet-400/40 bg-violet-400/10', icon: Zap },
  'computer-vision': { label: 'Computer Vision', color: 'text-blue-300 border-blue-400/40 bg-blue-400/10', icon: Eye },
  'mlops': { label: 'MLOps', color: 'text-orange-300 border-orange-400/40 bg-orange-400/10', icon: Cpu },
  'data-science': { label: 'Data Science', color: 'text-green-300 border-green-400/40 bg-green-400/10', icon: Database },
  'reinforcement-learning': { label: 'Reinforcement Learning', color: 'text-plasma-400 border-plasma-400/40 bg-plasma-500/10', icon: TrendingUp },
  'machine-learning': { label: 'Machine Learning', color: 'text-cyan-300 border-cyan-400/40 bg-cyan-400/10', icon: Brain },
};

const allCategories = ['all', ...Object.keys(categoryConfig)];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const config = categoryConfig[project.category];
  const CategoryIcon = config.icon;
  const navigate = useNavigate();

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/project/${project.id}`)}
      className={`neural-card rounded-xl overflow-hidden flex flex-col group cursor-pointer ${project.featured ? 'col-span-1 lg:col-span-1' : ''
        }`}
    >
      {/* Card header with visual */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-void-600 to-void-700">
        {/* Abstract visualization pattern or project image */}
        {project.image && (project.image.startsWith('/') || project.image.startsWith('http')) ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
          />
        ) : (
          <svg
            className="absolute inset-0 w-full h-full opacity-20"
            viewBox="0 0 400 160"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 8 }, (_, i) => (
              <motion.circle
                key={i}
                cx={50 + i * 50 + (index % 3) * 15}
                cy={40 + (i % 3) * 40}
                r={3 + i * 2}
                fill="none"
                stroke="#00EFFF"
                strokeWidth="0.5"
                animate={hovered ? {
                  r: [3 + i * 2, 5 + i * 2, 3 + i * 2],
                  opacity: [0.3, 1, 0.3],
                } : {}}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
            {Array.from({ length: 6 }, (_, i) => (
              <motion.line
                key={`l${i}`}
                x1={50 + i * 60}
                y1={40 + (i % 3) * 40}
                x2={110 + i * 60}
                y2={80 - (i % 3) * 20}
                stroke="#00EFFF"
                strokeWidth="0.5"
                opacity={0.3}
                animate={hovered ? { opacity: [0.3, 0.7, 0.3] } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
              />
            ))}
          </svg>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono border ${config.color}`}>
            <CategoryIcon className="w-3 h-3" />
            {config.label}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-3 right-3 font-mono text-xs text-void-200">
          {project.year}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute bottom-3 right-3">
            <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-plasma-500/20 text-plasma-400 border border-plasma-500/30">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl font-semibold text-white mb-1 group-hover:text-neural-300 transition-colors">
          {project.title}
        </h3>
        <p className="font-mono text-xs text-plasma-400 mb-3">{project.subtitle}</p>
        <p className="text-void-100 text-sm leading-relaxed flex-1">{project.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 my-4 py-4 border-y border-void-400/20">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-display font-bold text-neural-300 text-sm">{metric.value}</div>
              <div className="font-mono text-xs text-void-300 mt-0.5 leading-tight">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded font-mono text-xs bg-void-500/50 text-void-100">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-0.5 rounded font-mono text-xs text-void-300">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-void-200 hover:text-neural-300 transition-colors font-mono text-xs"
            >
              <Github className="w-3.5 h-3.5" /> Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-void-200 hover:text-neural-300 transition-colors font-mono text-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Demo
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-void-200 hover:text-plasma-400 transition-colors font-mono text-xs"
            >
              <FileText className="w-3.5 h-3.5" /> Paper
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const config = categoryConfig[project.category];
  const CategoryIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div
        className="absolute inset-0 bg-void-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto neural-card rounded-2xl bg-void-800 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-void-700/50 text-void-100 hover:bg-void-600 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Visual Header */}
          <div className="relative h-64 md:h-full bg-gradient-to-br from-void-700 to-void-900 overflow-hidden min-h-[300px]">
            {project.image && (project.image.startsWith('/') || project.image.startsWith('http')) ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            ) : (
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={Math.random() * 400}
                    cy={Math.random() * 400}
                    r={Math.random() * 3 + 1}
                    fill={i % 2 === 0 ? '#00EFFF' : '#7C3AED'}
                    animate={{
                      opacity: [0.1, 0.5, 0.1],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </svg>
            )}
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center">
                <CategoryIcon className="w-20 h-20 text-neural-300 mx-auto mb-6 opacity-50" />
                <span className={`px-3 py-1 rounded-full text-xs font-mono border ${config.color}`}>
                  {config.label}
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="p-8 md:p-12 overflow-y-auto">
            <div className="font-mono text-xs text-plasma-400 mb-2">{project.year} · {project.subtitle}</div>
            <h2 className="font-display text-3xl font-bold text-white mb-6 underline decoration-neural-300/30 underline-offset-8">
              {project.title}
            </h2>

            <p className="text-void-100 leading-relaxed mb-8 whitespace-pre-line">
              {project.longDescription || project.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {project.metrics.map(m => (
                <div key={m.label} className="p-3 bg-void-700/30 rounded-lg border border-void-400/10">
                  <div className="font-display font-bold text-lg text-neural-300">{m.value}</div>
                  <div className="font-mono text-[10px] text-void-300 uppercase tracking-tighter">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="font-mono text-xs text-void-400 uppercase tracking-widest mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(t => (
                  <span key={t} className="px-3 py-1 rounded-md text-xs font-mono bg-void-700 text-void-100 border border-void-400/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-void-400/10">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-void-100 hover:text-neural-300 transition-colors font-mono text-sm group">
                  <Github className="w-5 h-5" />
                  <span className="border-b border-transparent group-hover:border-neural-300">Repository</span>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-void-100 hover:text-neural-300 transition-colors font-mono text-sm group">
                  <ExternalLink className="w-5 h-5" />
                  <span className="border-b border-transparent group-hover:border-neural-300">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const selectedProject = id ? projects.find(p => p.id === id) : null;

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="absolute right-0 top-1/2 w-80 h-80 -translate-y-1/2 rounded-full bg-plasma-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-8"
        >
          <motion.span variants={fadeInUp} className="section-tag">03.</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white">
            Projects
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex-1 h-px bg-gradient-to-r from-neural-300/30 to-transparent"
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={(e) => {
                e.stopPropagation();
                setActiveFilter(cat);
              }}
              className={`px-4 py-1.5 rounded-full font-mono text-xs border transition-all ${activeFilter === cat
                ? 'bg-neural-300/15 border-neural-300/50 text-neural-300'
                : 'border-void-300/20 text-void-200 hover:border-void-300/40 hover:text-void-100'
                }`}
            >
              {cat === 'all' ? 'All Projects' : categoryConfig[cat]?.label || cat}
              {cat !== 'all' && (
                <span className="ml-1.5 text-void-300">
                  ({projects.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/RayanCoder681"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-neural px-6 py-3 rounded group"
          >
            <Github className="w-4 h-4" />
            <span>View All on GitHub</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => navigate('/projects')}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
