import React from 'react';
import { Icon, icons } from '../components/Icon';
import { Badge, Section } from '../components/UI';
import { sharedStyles } from '../context/ThemeContext';
import { webProjects } from '../data/portfolioData';

export const WebDev: React.FC = () => {
  return (
    <Section id="web-dev">
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <Badge>
          <Icon d={icons.globe} size={14} />
          Web Development
        </Badge>
        <h2 style={sharedStyles.h2} className="display">
          Web <span style={sharedStyles.grad}>Projects</span>
        </h2>
        <p style={{ color: 'var(--muted)', maxWidth: 500, lineHeight: 1.7 }}>
          Beyond ML — building beautiful, functional interfaces to bring AI products to life.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))',
          gap: '1.5rem',
        }}
      >
        {webProjects.map((project, i) => (
          <div
            key={project.title}
            style={{
              ...sharedStyles.card,
              display: 'flex',
              flexDirection: 'column',
              animation: `fadeUp 0.5s ease ${i * 0.1}s both`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-6px)';
              el.style.borderColor = `${project.color}40`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.borderColor = 'var(--border)';
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', height: 180, overflow: 'hidden' }}>
              <img
                src={project.img}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)', transition: 'filter 0.4s' }}
                onMouseEnter={(e) => { (e.target as HTMLImageElement).style.filter = 'grayscale(0%)'; }}
                onMouseLeave={(e) => { (e.target as HTMLImageElement).style.filter = 'grayscale(50%)'; }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg), transparent 60%)' }} />
              {/* Status badge */}
              <div style={{ position: 'absolute', top: 12, right: 12 }}>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontFamily: "'JetBrains Mono',monospace",
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '4px 10px',
                    borderRadius: 6,
                    background: 'rgba(245,158,11,0.15)',
                    color: '#f59e0b',
                  }}
                >
                  🔧 {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontFamily: "'JetBrains Mono',monospace",
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  padding: '4px 10px',
                  borderRadius: 6,
                  background: `${project.color}15`,
                  color: project.color,
                  display: 'inline-block',
                  marginBottom: 10,
                }}
              >
                {project.tag}
              </span>

              <h3 style={{ fontWeight: 700, marginBottom: 10 }}>{project.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.65, flex: 1, marginBottom: '1.2rem' }}>
                {project.desc}
              </p>

              {/* Tech stack chips */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--border)',
                }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '0.68rem',
                      padding: '4px 10px',
                      borderRadius: 6,
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--muted)',
                    }}
                    className="mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
