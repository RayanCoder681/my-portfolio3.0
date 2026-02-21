import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Icon, icons } from './Icon';
import { useTheme, sharedStyles } from '../context/ThemeContext';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Web Dev', path: '/web-dev' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar: React.FC = () => {
  const { toggleTheme, t } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Animation Variants
  const navContainer = {
    hidden: { y: -100 },
    show: { y: 0, transition: { type: 'spring' as const, stiffness: 120, damping: 20, staggerChildren: 0.1 } }
  };

  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="show"
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        padding: '1rem 2rem',
        backdropFilter: 'blur(30px)',
        WebkitBackdropFilter: 'blur(30px)',
        background: t ? 'rgba(5,7,17,0.7)' : 'rgba(248,250,252,0.7)',
        borderBottom: `1px solid ${t ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            variants={navItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em', color: 'var(--primary)', cursor: 'pointer' }}
          >
            NEXUS_AI<span style={{ color: 'var(--accent)' }}>.</span>
          </motion.div>
        </Link>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                variants={navItem}
                key={item.name}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={item.path}
                  style={{
                    display: 'block',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: isActive ? 'var(--bg)' : 'var(--muted)',
                    background: isActive ? 'var(--primary)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    userSelect: 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--primary)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                  }}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <motion.div variants={navItem} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            style={sharedStyles.themeBtn}
            onClick={toggleTheme}
            title="Toggle theme"
          >
            <Icon d={t ? icons.sun : icons.moon} size={16} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mobile-btn"
            style={{ ...sharedStyles.themeBtn, display: 'none' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon d={menuOpen ? icons.x : icons.menu} size={18} />
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ padding: '1rem 2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem', borderTop: '1px solid var(--border)', overflow: 'hidden' }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  key={item.name}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.6rem 1rem',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: isActive ? 'var(--bg)' : 'var(--muted)',
                      background: isActive ? 'var(--primary)' : 'transparent',
                      textDecoration: 'none',
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

