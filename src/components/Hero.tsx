import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, BookOpen, ExternalLink, Terminal } from 'lucide-react';
import { personalInfo, stats } from '../data';
import { staggerContainer, fadeInUp } from '../utils/animations';

const roles = [
  'Machine Learning Student',
  'Deep Learning Student',
  'Junior Data Scientist ',
  'Junior Web Developper',
  // 'MLOps Architect',
  'Junior AI Systems Builder',
];

const codeSnippet = `# Building intelligence, one tensor at a time
import torch
import torch.nn as nn

class NeuralPortfolio(nn.Module):
    def __init__(self):
        super().__init__()
        self.expertise = [
            "Deep Learning", "NLP", 
            "Computer Vision", "MLOps"
        ]
        self.passion = float('inf')
    
    def forward(self, problem):
        return self.solve(
            problem, 
            passion=self.passion
        )`;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [codeVisible, setCodeVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && displayText === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 70;
      timeoutRef.current = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setCodeVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-neural-300/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-plasma-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Status badge */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neural-300/20 bg-neural-300/5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-neural-300">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={fadeInUp}>
              <p className="font-mono text-neural-400 text-sm tracking-widest mb-2">
                Hi, I'm
              </p>
              <h1
                className="font-display text-6xl lg:text-7xl font-800 leading-tight text-white"
                data-text={personalInfo.name}
              >
                {personalInfo.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                    {word}{i === 0 && ' '}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Dynamic role */}
            <motion.div variants={fadeInUp} className="flex items-center gap-2 h-8">
              <Terminal className="w-4 h-4 text-plasma-500 shrink-0" />
              <span className="font-mono text-neural-300 text-lg">
                {displayText}
                <span className="terminal-cursor" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeInUp}
              className="text-void-100 leading-relaxed text-lg max-w-xl font-body"
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-neural px-6 py-3 rounded flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href={personalInfo.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded border border-plasma-500/40 text-plasma-400 font-mono text-sm hover:bg-plasma-500/10 transition-all"
              >
                <BookOpen className="w-3.5 h-3.5" />
                Research
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-5 pt-2">
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-void-200 hover:text-neural-300 transition-colors group"
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-mono text-xs">{label}</span>
                </a>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-4 gap-4 mt-4 pt-6 border-t border-neural-300/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display font-bold text-2xl text-neural-300">
                    {stat.value}
                    <span className="text-plasma-500">{stat.suffix}</span>
                  </span>
                  <span className="font-mono text-xs text-void-200 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Code card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={codeVisible ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-1 bg-gradient-to-br from-neural-300/20 via-violet-600/10 to-plasma-500/20 rounded-xl blur-sm" />

            <div className="relative neural-card rounded-xl overflow-hidden scanlines">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-void-600/80 border-b border-neural-300/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-mono text-xs text-void-200 ml-2">portfolio.py</span>
              </div>

              {/* Code content */}
              <div className="p-6">
                <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                  {codeSnippet.split('\n').map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={codeVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.3 + i * 0.05, duration: 0.3 }}
                      className="flex"
                    >
                      <span className="w-8 text-void-300 select-none shrink-0 text-right mr-4">
                        {i + 1}
                      </span>
                      <span className={
                        line.startsWith('#') ? 'text-void-200 italic' :
                          line.includes('class ') || line.includes('def ') || line.includes('import ') ? 'text-plasma-400' :
                            line.includes('"') || line.includes("'") ? 'text-green-400' :
                              line.includes('self.') ? 'text-neural-300' :
                                'text-void-100'
                      }>
                        {line}
                      </span>
                    </motion.div>
                  ))}
                </pre>
              </div>

              {/* Bottom bar */}
              <div className="px-6 pb-4 flex items-center justify-between">
                <div className="flex gap-3">
                  {['PyTorch', 'TF', 'HuggingFace', 'sklearn'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono bg-neural-300/10 text-neural-300 rounded border border-neural-300/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-400"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-void-600 border border-neural-300/30 font-mono text-xs text-neural-300 shadow-neural"
            >
              🏆 NeurIPS 2023
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-full bg-void-600 border border-plasma-500/30 font-mono text-xs text-plasma-400 shadow-plasma"
            >
              ⚡ 10+ Models Deployed
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-void-200 hover:text-neural-300 transition-colors"
      >
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
