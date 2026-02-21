import React from 'react';
import { useCounter, useProgressBar } from '../hooks/useAnimations';
import { sharedStyles } from '../context/ThemeContext';

// ── Animated Counter ──────────────────────────────────────────────────────────
interface CounterProps {
  target: number;
  suffix?: string;
}

export const Counter: React.FC<CounterProps> = ({ target, suffix = '' }) => {
  const [ref, val] = useCounter(target);
  return <span ref={ref}>{val}{suffix}</span>;
};

// ── Animated Progress Bar ─────────────────────────────────────────────────────
interface ProgressBarProps {
  value: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const [ref, width] = useProgressBar(value);
  return (
    <div
      ref={ref}
      style={{ height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 99, overflow: 'hidden' }}
    >
      <div
        style={{
          height: '100%',
          width: `${width}%`,
          transition: 'width 1.4s cubic-bezier(.4,0,.2,1)',
          background: 'linear-gradient(90deg,var(--primary),var(--secondary))',
        }}
      />
    </div>
  );
};

// ── Badge ─────────────────────────────────────────────────────────────────────
interface BadgeProps {
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => (
  <div style={sharedStyles.badge}>{children}</div>
);

// ── Tag ───────────────────────────────────────────────────────────────────────
interface TagProps {
  color: string;
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ color, children }) => (
  <span style={sharedStyles.tag(color)}>{children}</span>
);

// ── Section Wrapper ───────────────────────────────────────────────────────────
interface SectionProps {
  id: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Section: React.FC<SectionProps> = ({ id, children, style }) => (
  <section
    id={id}
    style={{ padding: '6rem 2rem', position: 'relative', zIndex: 1, ...style }}
  >
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      {children}
    </div>
  </section>
);
