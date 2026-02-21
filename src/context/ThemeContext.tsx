import React, { createContext, useContext, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  t: boolean; // shorthand: true = dark
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {},
  t: true,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, t: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// ─── CSS variables per theme ─────────────────────────────────────────────────
export const getThemeVars = (t: boolean): React.CSSProperties => ({
  '--bg': t ? '#050711' : '#f8fafc',
  '--bg2': t ? '#0d1117' : '#f1f5f9',
  '--surface': t ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
  '--border': t ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
  '--text': t ? '#f1f5f9' : '#0f172a',
  '--muted': t ? '#94a3b8' : '#64748b',
  '--primary': t ? '#0ea5e9' : '#0284c7',
  '--secondary': t ? '#8b5cf6' : '#7c3aed',
  '--accent': t ? '#10b981' : '#059669',
  '--card': t ? 'rgba(15,20,35,0.7)' : 'rgba(255,255,255,0.85)',
} as React.CSSProperties);

// ─── Shared style helpers ─────────────────────────────────────────────────────
export const sharedStyles = {
  card: {
    background: 'var(--card)',
    border: '1px solid var(--border)',
    borderRadius: 24,
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    transition: 'all 0.3s',
    overflow: 'hidden',
  } as React.CSSProperties,

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 16px',
    borderRadius: 99,
    background: 'rgba(14,165,233,0.1)',
    border: '1px solid rgba(14,165,233,0.25)',
    color: 'var(--primary)',
    fontSize: '0.7rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.15em',
    marginBottom: '1.5rem',
  } as React.CSSProperties,

  h2: {
    fontFamily: "'Syne', sans-serif",
    fontSize: 'clamp(2rem,5vw,3.5rem)',
    fontWeight: 800,
    letterSpacing: '-0.03em',
    marginBottom: '1rem',
  } as React.CSSProperties,

  grad: {
    background: 'linear-gradient(135deg,var(--primary),var(--secondary))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  } as React.CSSProperties,

  tag: (color: string): React.CSSProperties => ({
    fontSize: '0.65rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    padding: '4px 10px',
    borderRadius: 6,
    background: `${color}20`,
    color,
    display: 'inline-block',
  }),

  btn: (variant: 'primary' | 'ghost' = 'primary'): React.CSSProperties => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    padding: '14px 28px',
    borderRadius: 14,
    fontWeight: 700,
    fontSize: '0.9rem',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.2s',
    ...(variant === 'primary'
      ? {
          background: 'linear-gradient(135deg,var(--primary),var(--secondary))',
          color: '#fff',
          boxShadow: '0 8px 30px rgba(14,165,233,0.3)',
        }
      : {
          background: 'var(--surface)',
          color: 'var(--text)',
          border: '1px solid var(--border)',
        }),
  }),

  input: {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    color: 'var(--text)',
    fontSize: '0.95rem',
    outline: 'none',
    fontFamily: "'Space Grotesk', sans-serif",
    transition: 'border-color 0.2s',
  } as React.CSSProperties,

  themeBtn: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text)',
    transition: 'all 0.2s',
  } as React.CSSProperties,
};
