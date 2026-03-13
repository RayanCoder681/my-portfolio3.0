import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Quote, BookOpen, Award, X, FileText, Calendar, Users, MapPin } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { publications } from '../data';
import { fadeInUp, staggerContainer, itemVariants } from '../utils/animations';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
import type { Publication } from '../types';

const typeConfig: Record<string, { label: string; color: string }> = {
  journal: { label: 'Journal', color: 'text-neural-300 border-neural-300/40 bg-neural-300/10' },
  conference: { label: 'Conference', color: 'text-plasma-400 border-plasma-400/40 bg-plasma-500/10' },
  preprint: { label: 'Preprint', color: 'text-violet-300 border-violet-400/40 bg-violet-400/10' },
  workshop: { label: 'Workshop', color: 'text-green-300 border-green-400/40 bg-green-400/10' },
  article: { label: 'Article', color: 'text-amber-300 border-amber-400/40 bg-amber-400/10' },
};

const PublicationModal = ({ pub, onClose }: { pub: Publication; onClose: () => void }) => {
  const typeStyle = typeConfig[pub.type] || typeConfig.preprint;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      <div
        className="absolute inset-0 bg-void-950/90 backdrop-blur-xl"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto neural-card rounded-3xl bg-void-800 shadow-2xl p-8 md:p-16"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-void-700/50 text-void-100 hover:bg-void-600 hover:text-white transition-all z-10 hover:scale-110 active:scale-95"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8 flex items-center gap-4">
          <span className={`px-3 py-1 rounded-full text-xs font-mono border tracking-wider uppercase ${typeStyle.color}`}>
            {typeStyle.label}
          </span>
          {pub.citations !== undefined && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-void-300/20 text-void-200">
              <Quote className="w-3.5 h-3.5" />
              {pub.citations} Citations
            </span>
          )}
          <span className="text-void-400 font-mono text-xs ml-auto">{pub.year}</span>
        </div>

        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-8 leading-[1.15] tracking-tight">
          {pub.title}
        </h2>

        <div className="flex flex-wrap items-center gap-y-4 gap-x-8 mb-12 pb-8 border-b border-void-400/10">
          <div className="flex items-start gap-3 text-void-200">
            <Users className="w-5 h-5 mt-0.5 text-neural-300 shrink-0" />
            <div className="text-sm">
              <span className="text-void-400 block uppercase text-[10px] tracking-widest mb-1">Authors</span>
              <p>
                {pub.authors.map((author, ai) => (
                  <span key={author}>
                    <span className={author === 'Rayan Diatsa' ? 'text-neural-300 font-semibold' : ''}>
                      {author}
                    </span>
                    {ai < pub.authors.length - 1 && ', '}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-void-200">
            <MapPin className="w-5 h-5 mt-0.5 text-neural-300 shrink-0" />
            <div className="text-sm">
              <span className="text-void-400 block uppercase text-[10px] tracking-widest mb-1">Venue</span>
              <p className="font-medium text-void-100">{pub.venue}</p>
            </div>
          </div>
        </div>

        <div className="mb-12 bg-void-900/50 rounded-2xl p-6 md:p-8 border border-void-400/10">
          <h4 className="font-mono text-[10px] text-neural-300 uppercase tracking-[0.2em] mb-4">Abstract</h4>
          <p className="text-void-100 text-base leading-relaxed italic opacity-90">
            "{pub.abstract}"
          </p>
        </div>

        {pub.content && (
          <div className="mb-12">
            <h4 className="font-mono text-[10px] text-neural-300 uppercase tracking-[0.2em] mb-6">Full Publication</h4>
            <div className="prose prose-invert prose-neural max-w-none">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="rounded-xl overflow-hidden my-8 border border-void-400/20 shadow-2xl">
                        <div className="bg-void-950 px-4 py-2 border-b border-void-400/10 flex justify-between items-center">
                          <span className="text-[10px] font-mono text-void-400 tracking-widest uppercase">{match[1]}</span>
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-void-700" />
                            <div className="w-2.5 h-2.5 rounded-full bg-void-700" />
                            <div className="w-2.5 h-2.5 rounded-full bg-void-700" />
                          </div>
                        </div>
                        <SyntaxHighlighter
                          style={vscDarkPlus as any}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{
                            margin: 0,
                            padding: '1.5rem',
                            backgroundColor: '#020407',
                            fontSize: '0.9rem',
                            lineHeight: '1.7',
                          }}
                          {...props}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {pub.content}
              </ReactMarkdown>
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2.5 mb-12">
          {pub.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded font-mono text-xs bg-void-500/40 text-void-100">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-6 border-t border-void-400/10">
          {pub.arxiv && (
            <a href={pub.arxiv} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-void-100 hover:text-neural-300 transition-colors font-mono text-sm group">
              <ExternalLink className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-neural-300">arXiv</span>
            </a>
          )}
          {pub.doi && (
            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-void-100 hover:text-neural-300 transition-colors font-mono text-sm group">
              <FileText className="w-5 h-5" />
              <span className="border-b border-transparent group-hover:border-neural-300">DOI</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Publications = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const selectedPub = id ? publications.find(p => p.id === id) : null;

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
          {publications.map((pub, i) => {
            const typeStyle = typeConfig[pub.type] || typeConfig.preprint;

            return (
              <motion.div
                key={pub.id}
                variants={itemVariants}
                onClick={() => navigate(`/publications/${pub.id}`)}
                className="neural-card rounded-xl p-6 group hover:border-neural-300/30 transition-all cursor-pointer"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Index number */}
                  <div className="shrink-0 font-mono text-3xl font-bold text-void-400 group-hover:text-neural-300/30 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
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

                    {/* Authors */}
                    <p className="text-void-200 text-sm mb-1">
                      {pub.authors.map((author, ai) => (
                        <span key={author}>
                          <span className={author === 'Rayan Diatsa' ? 'text-neural-300 font-medium' : ''}>
                            {author}
                          </span>
                          {ai < pub.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </p>

                    {/* Venue & year */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-plasma-400">{pub.venue}</span>
                      <span className="font-mono text-xs text-void-300">· {pub.year}</span>
                    </div>

                    {/* Abstract */}
                    <p className="text-void-100 text-sm leading-relaxed mb-4 line-clamp-2">
                      {pub.abstract}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded font-mono text-xs bg-void-500/40 text-void-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedPub && (
          <PublicationModal
            pub={selectedPub}
            onClose={() => navigate('/publications')}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Publications;
