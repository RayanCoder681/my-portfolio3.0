import React from 'react';
import { motion } from 'framer-motion';
import { useTheme, sharedStyles } from '../context/ThemeContext';
import { timeline } from '../data/portfolioData';

export const About: React.FC = () => {
  const { t } = useTheme();

  return (
    <section
      id="about"
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
        background: t ? 'rgba(0,0,0,0.3)' : 'rgba(241,245,249,0.6)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={sharedStyles.h2} className="display">
            My <span style={sharedStyles.grad}>Journey</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            From fundamentals to production AI — a timeline of growth and experimentation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, var(--primary), var(--secondary))',
              transform: 'translateX(-50%)',
              transformOrigin: 'top',
            }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, type: 'spring' as const, stiffness: 100, damping: 20 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2.5rem',
                justifyContent: item.side === 'left' ? 'flex-end' : 'flex-start',
                paddingRight: item.side === 'left' ? 'calc(50% + 2rem)' : 0,
                paddingLeft: item.side === 'right' ? 'calc(50% + 2rem)' : 0,
                position: 'relative',
              }}
            >
              {/* Center dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.2, type: 'spring' as const }}
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  border: '3px solid var(--bg)',
                  boxShadow: '0 0 0 4px rgba(14,165,233,0.2)',
                  zIndex: 2,
                }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -5, borderColor: 'rgba(14,165,233,0.35)' }}
                style={{
                  ...sharedStyles.card,
                  padding: '1.5rem 2rem',
                  maxWidth: 380,
                }}
              >
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    padding: '4px 10px',
                    borderRadius: 6,
                    background: i % 2 === 0 ? 'rgba(14,165,233,0.15)' : 'rgba(139,92,246,0.15)',
                    color: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                    display: 'inline-block',
                    marginBottom: 10,
                  }}
                >
                  {item.year}
                </span>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    marginBottom: 4,
                    fontSize: '1.05rem',
                  }}
                >
                  {item.title}
                </h3>
                <div style={{ color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 600, marginBottom: 10 }}>
                  {item.place}
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
