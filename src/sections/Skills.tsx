import React from 'react';
import { motion } from 'framer-motion';
import { Icon, icons } from '../components/Icon';
import { ProgressBar, Section } from '../components/UI';
import { sharedStyles } from '../context/ThemeContext';
import { skills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <Section id="skills">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={sharedStyles.h2} className="display">
          Neural <span style={sharedStyles.grad}>Capabilities</span>
        </h2>
        <div
          style={{
            width: 60,
            height: 3,
            background: 'linear-gradient(90deg,var(--primary),var(--secondary))',
            borderRadius: 99,
            marginTop: 8,
          }}
        />
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
          gap: '1.5rem',
        }}
      >
        {skills.map((sk, i) => (
          <motion.div
            key={sk.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, type: "spring" as const, stiffness: 200, damping: 20 }}
            whileHover={{ y: -6, borderColor: 'rgba(14,165,233,0.35)' }}
            style={{
              ...sharedStyles.card,
              padding: '1.8rem',
            }}
          >
            {/* Icon + level */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
              <div style={{ padding: 14, borderRadius: 14, background: 'rgba(14,165,233,0.1)', color: 'var(--primary)' }}>
                <Icon d={icons[sk.icon]} size={22} />
              </div>
              <span
                style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'var(--muted)',
                  opacity: 0.3,
                  transition: 'opacity 0.3s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.3')}
              >
                {sk.level}%
              </span>
            </div>

            <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{sk.name}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              {sk.desc}
            </p>

            <ProgressBar value={sk.level} />

            <div
              style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, color: 'var(--muted)' }}
              className="mono"
            >
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                loss: 0.0{100 - sk.level}
              </span>
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                epoch: 450
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

