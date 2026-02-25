import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { experiences } from '../data';
import { fadeInUp, staggerContainer } from '../utils/animations';

const typeColors: Record<string, string> = {
  'full-time': 'text-neural-300 border-neural-300/30 bg-neural-300/10',
  'contract': 'text-plasma-400 border-plasma-400/30 bg-plasma-400/10',
  'internship': 'text-violet-300 border-violet-400/30 bg-violet-400/10',
  'research': 'text-green-300 border-green-400/30 bg-green-400/10',
};

const Experience = () => {
  const [activeExp, setActiveExp] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const current = experiences[activeExp];

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <motion.span variants={fadeInUp} className="section-tag">04.</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white">
            Experience
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex-1 h-px bg-gradient-to-r from-neural-300/30 to-transparent"
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Timeline sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-3 top-0 bottom-0 w-px bg-neural-300/15" />

              {experiences.map((exp, i) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExp(i)}
                  className={`relative w-full text-left pl-10 pr-4 py-4 mb-2 rounded-r-lg transition-all ${
                    activeExp === i
                      ? 'bg-neural-300/5 border-r-2 border-neural-300'
                      : 'hover:bg-void-600/30'
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all ${
                      activeExp === i
                        ? 'bg-neural-300 border-neural-300 shadow-neural'
                        : 'bg-void-700 border-void-300/40'
                    }`}
                  />

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-display font-semibold text-white text-sm">
                        {exp.company}
                      </p>
                      <p className="text-void-200 text-xs mt-0.5">{exp.role}</p>
                    </div>
                    {activeExp === i && (
                      <ChevronRight className="w-4 h-4 text-neural-300 shrink-0 mt-0.5" />
                    )}
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <span className="font-mono text-xs text-void-300">{exp.period}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-xs font-mono border capitalize ${
                        typeColors[exp.type] || 'text-void-200 border-void-300/20'
                      }`}
                    >
                      {exp.type.replace('-', ' ')}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Detail panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="neural-card rounded-xl p-8 h-full"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-2xl font-bold text-white">{current.role}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-mono border capitalize shrink-0 ${typeColors[current.type]}`}>
                      {current.type.replace('-', ' ')}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 mb-1">
                    <Briefcase className="w-4 h-4 text-neural-300" />
                    <span className="font-display font-semibold text-neural-300">{current.company}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-void-200">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {current.location}
                    </div>
                    <span className="font-mono text-xs">{current.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-void-100 leading-relaxed mb-6">{current.description}</p>

                {/* Achievements */}
                <div className="mb-6">
                  <p className="font-mono text-xs text-neural-400 tracking-widest mb-4">KEY ACHIEVEMENTS</p>
                  <ul className="flex flex-col gap-3">
                    {current.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neural-300 shrink-0" />
                        <span className="text-void-100 text-sm leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div>
                  <p className="font-mono text-xs text-neural-400 tracking-widest mb-3">STACK</p>
                  <div className="flex flex-wrap gap-2">
                    {current.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded font-mono text-xs bg-void-500/50 text-void-100 border border-void-300/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
