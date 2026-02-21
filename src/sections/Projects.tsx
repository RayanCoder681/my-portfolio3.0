import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon, icons } from '../components/Icon';
import { useTheme, sharedStyles } from '../context/ThemeContext';
import { mlProjects, catLabels } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { t } = useTheme();
  const [activeCat, setActiveCat] = useState<string>('all');

  const filtered = activeCat === 'all'
    ? mlProjects
    : mlProjects.filter((p) => p.cat === activeCat);

  return (
    <section
      id="projects"
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
        background: t ? 'rgba(0,0,0,0.25)' : 'rgba(241,245,249,0.5)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={sharedStyles.h2} className="display">
              Model <span style={sharedStyles.grad}>Showroom</span>
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }} className="mono">
              [ SELECTED_EXPERIMENTS // PRODUCTION_READY: TRUE ]
            </p>
          </motion.div>
        </div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {Object.entries(catLabels).map(([key, label]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCat(key)}
              style={{
                padding: '8px 20px',
                borderRadius: 99,
                border: '1px solid',
                borderColor: activeCat === key ? 'var(--primary)' : 'var(--border)',
                background: activeCat === key ? 'rgba(14,165,233,0.15)' : 'var(--surface)',
                color: activeCat === key ? 'var(--primary)' : 'var(--muted)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s, border-color 0.2s',
              }}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project cards */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring" as const, stiffness: 200, damping: 20, delay: i * 0.05 }}
                whileHover={{ y: -6, borderColor: `${project.color}40`, boxShadow: `0 10px 30px ${project.color}15` }}
                style={{
                  ...sharedStyles.card,
                }}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%)', transition: 'all 0.5s' }}
                    onMouseEnter={(e) => { (e.target as HTMLImageElement).style.filter = 'grayscale(0%) scale(1.05)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLImageElement).style.filter = 'grayscale(60%) scale(1)'; }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg) 0%, transparent 60%)', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', top: 16, left: 16, pointerEvents: 'none' }}>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontFamily: "'JetBrains Mono',monospace",
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        padding: '4px 10px',
                        borderRadius: 6,
                        background: `${project.color}20`,
                        color: project.color,
                        backdropFilter: 'blur(4px)',
                        border: `1px solid ${project.color}40`
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 10, lineHeight: 1.35, transition: 'color 0.3s' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                    {project.desc}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px solid var(--border)',
                    }}
                  >
                    <span style={{ fontSize: '0.72rem', color: project.color, fontWeight: 600 }} className="mono">
                      {project.metrics}
                    </span>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <motion.button whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: '#fff' }} style={{ ...sharedStyles.themeBtn, width: 34, height: 34, borderRadius: 10 }}>
                        <Icon d={icons.github} size={14} />
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: '#fff' }} style={{ ...sharedStyles.themeBtn, width: 34, height: 34, borderRadius: 10 }}>
                        <Icon d={icons.externalLink} size={14} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

