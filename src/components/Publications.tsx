import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Quote, BookOpen, Award } from 'lucide-react';
import { publications } from '../data';
import { fadeInUp, staggerContainer, itemVariants } from '../utils/animations';

const typeConfig: Record<string, { label: string; color: string }> = {
  journal: { label: 'Journal', color: 'text-neural-300 border-neural-300/40 bg-neural-300/10' },
  conference: { label: 'Conference', color: 'text-plasma-400 border-plasma-400/40 bg-plasma-500/10' },
  preprint: { label: 'Preprint', color: 'text-violet-300 border-violet-400/40 bg-violet-400/10' },
  workshop: { label: 'Workshop', color: 'text-green-300 border-green-400/40 bg-green-400/10' },
};

const Publications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="publications" className="py-32 relative" ref={ref}>
      <div className="absolute left-1/4 top-1/2 w-96 h-96 -translate-y-1/2 rounded-full bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <motion.span variants={fadeInUp} className="section-tag">05.</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white">
            Publications
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex-1 h-px bg-gradient-to-r from-neural-300/30 to-transparent"
          />
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-6 mb-12"
        >
          {[
            { icon: BookOpen, label: 'Total Papers', value: `${publications.length}` },
            {
              icon: Quote,
              label: 'Total Citations',
              value: `${publications.reduce((sum, p) => sum + (p.citations || 0), 0)}+`,
            },
            { icon: Award, label: 'Top Venues', value: 'NeurIPS, RecSys, MedIA' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 px-4 py-3 neural-card rounded-lg">
              <stat.icon className="w-5 h-5 text-neural-300" />
              <div>
                <div className="font-display font-bold text-white">{stat.value}</div>
                <div className="font-mono text-xs text-void-200">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Publications list */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-6"
        >
          <h1 className='text-center mt-10 text-2xl font-bold text-neural-300'>
            # Coming Soon
          </h1>
          {/*
          {publications.map((pub, i) => {
            const typeStyle = typeConfig[pub.type] || typeConfig.preprint;

            return (
              <motion.div
                key={pub.id}
                variants={itemVariants}
                className="neural-card rounded-xl p-6 group hover:border-neural-300/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Index number */} {/*
                  <div className="shrink-0 font-mono text-3xl font-bold text-void-400 group-hover:text-neural-300/30 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Content */} {/*
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h3 className="font-display font-semibold text-white text-lg leading-snug group-hover:text-neural-300 transition-colors">
                        {pub.title}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`px-2 py-0.5 rounded text-xs font-mono border ${typeStyle.color}`}>
                          {typeStyle.label}
                        </span>
                        {pub.citations !== undefined && (
                          <span className="flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono border border-void-300/20 text-void-200">
                            <Quote className="w-3 h-3" />
                            {pub.citations}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Authors */} {/*
        <p className="text-void-200 text-sm mb-1">
          {pub.authors.map((author, ai) => (
            <span key={author}>
              <span className={author === 'Alex Chen' ? 'text-neural-300 font-medium' : ''}>
                {author}
              </span>
              {ai < pub.authors.length - 1 && ', '}
            </span>
          ))}
        </p>

        {/* Venue & year */} {/*
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs text-plasma-400">{pub.venue}</span>
          <span className="font-mono text-xs text-void-300">· {pub.year}</span>
        </div>

        {/* Abstract */} {/*
        <p className="text-void-100 text-sm leading-relaxed mb-4 line-clamp-3">
          {pub.abstract}
        </p>

        {/* Tags & links */} {/*
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {pub.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded font-mono text-xs bg-void-500/40 text-void-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {pub.arxiv && (
              <a
                href={pub.arxiv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-void-200 hover:text-neural-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                arXiv
              </a>
            )}
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs text-void-200 hover:text-neural-300 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                DOI
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
              </motion.div >
            );
          })}  */}
        </motion.div >
      </div >
    </section >
  );
};

export default Publications;
