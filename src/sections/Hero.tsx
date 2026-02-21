import React from 'react';
import { motion } from 'framer-motion';
import { Icon, icons } from '../components/Icon';
import { Counter } from '../components/UI';
import { sharedStyles } from '../context/ThemeContext';

const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export const Hero: React.FC = () => {
  const h1Style: React.CSSProperties = {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(3rem,8vw,6rem)',
    fontWeight: 800,
    lineHeight: 0.92,
    letterSpacing: '-0.04em',
    marginBottom: '1.5rem',
  };

  const stats = [
    { val: 98, suf: '%', label: 'Model Accuracy' },
    { val: 14, suf: '+', label: 'ML Projects' },
    { val: 2, suf: 'ms', label: 'Inference' },
  ];

  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 300, damping: 24 }
    },
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 2rem 4rem',
        maxWidth: 1200,
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="hero-grid"
        style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center', width: '100%' }}
      >
        {/* Left column */}
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={itemVars} style={sharedStyles.badge}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', animation: 'pulse-dot 2s infinite' }} />
            Neural Research &amp; Development
          </motion.div>

          <motion.h1 variants={itemVars} style={h1Style} className="display">
            Architecting<br />
            <span style={sharedStyles.grad}>Intelligence.</span>
          </motion.h1>

          <motion.p variants={itemVars} style={{ color: 'var(--muted)', fontSize: '1.15rem', maxWidth: 520, lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Junior AI Engineer specialized in{' '}
            <strong style={{ color: 'var(--text)' }}>Deep Neural Architectures</strong> and{' '}
            <strong style={{ color: 'var(--text)' }}>Stochastic Optimization</strong>. Bridging
            mathematical theory and production-ready ML systems.
          </motion.p>

          <motion.div variants={itemVars} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={sharedStyles.btn('primary')}
              onClick={() => scroll('projects')}
            >
              View Projects <Icon d={icons.zap} size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
              whileTap={{ scale: 0.95 }}
              style={sharedStyles.btn('ghost')}
              onClick={() => scroll('contact')}
            >
              Get In Touch <Icon d={icons.mail} size={16} />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVars}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: '1.5rem',
              marginTop: '3.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid var(--border)',
              maxWidth: 420,
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.8rem', fontWeight: 800 }}>
                  <Counter target={stat.val} suffix={stat.suf} />
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring" as const }}
          className="hero-visual"
          style={{ position: 'relative' }}
        >
          {/* Main Node with float animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 280, height: 280, borderRadius: 48,
              background: 'rgba(14,165,233,0.08)',
              border: '1px solid rgba(14,165,233,0.2)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 0 60px rgba(14,165,233,0.15) inset'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(14,165,233,0.15), transparent 70%)' }} />
            <Icon d={icons.network} size={120} stroke="var(--primary)" strokeWidth={0.8} />
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  position: 'absolute', width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--accent)',
                  animation: `pulse-dot ${1.5 + i * 0.4}s ease-in-out ${i * 0.3}s infinite`,
                  top: `${25 + i * 15}%`,
                  left: `${20 + Math.sin(i * 1.5) * 30}%`,
                }}
              />
            ))}
          </motion.div>

          {/* Floating metric cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ position: 'absolute', top: -16, right: -20, ...sharedStyles.card, padding: '12px 16px' }}
          >
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: 4 }} className="mono">accuracy</div>
            <div style={{ fontWeight: 800, color: 'var(--accent)', fontFamily: "'Syne',sans-serif" }}>98.2%</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ position: 'absolute', bottom: -12, left: -20, ...sharedStyles.card, padding: '12px 16px' }}
          >
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginBottom: 4 }} className="mono">latency</div>
            <div style={{ fontWeight: 800, color: 'var(--primary)', fontFamily: "'Syne',sans-serif" }}>2ms</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

