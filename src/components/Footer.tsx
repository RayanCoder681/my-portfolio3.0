import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => (
  <motion.footer
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      padding: '4rem 2rem',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
      color: 'var(--muted)',
      fontSize: '0.85rem',
      position: 'relative',
      zIndex: 1,
      background: 'rgba(0,0,0,0.1)',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, marginBottom: 16 }} className="mono">
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--accent)',
          boxShadow: '0 0 10px var(--accent)',
        }}
      />
      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
        System Operational: Architecture v2.5.0
      </span>
    </div>
    <p>Engineered with Precision &amp; Mathematical Rigor.</p>
    <motion.p
      whileHover={{ opacity: 1, color: 'var(--primary)' }}
      style={{ marginTop: 12, opacity: 0.25, fontSize: '0.7rem', cursor: 'default', transition: 'all 0.3s' }}
      className="mono"
    >
      01001110 01000101 01011000 01010101 01010011
    </motion.p>
  </motion.footer>
);
