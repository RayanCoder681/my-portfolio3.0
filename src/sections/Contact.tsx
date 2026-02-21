import React, { useState } from 'react';
import { Icon, icons } from '../components/Icon';
import { Badge } from '../components/UI';
import { useTheme, sharedStyles } from '../context/ThemeContext';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const { t } = useTheme();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const socialLinks = [
    { icon: 'github',   href: '#',                    label: 'GitHub' },
    { icon: 'linkedin', href: '#',                    label: 'LinkedIn' },
    { icon: 'mail',     href: 'mailto:you@email.com', label: 'Email' },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 2rem',
        position: 'relative',
        zIndex: 1,
        background: t ? 'rgba(0,0,0,0.3)' : 'rgba(241,245,249,0.6)',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <Badge>
          <Icon d={icons.mail} size={14} />
          Get In Touch
        </Badge>

        <h2 style={sharedStyles.h2} className="display">
          Let&apos;s <span style={sharedStyles.grad}>Connect</span>
        </h2>
        <p style={{ color: 'var(--muted)', marginBottom: '3rem', lineHeight: 1.7 }}>
          Open to collaborations, research opportunities, and interesting ML challenges.
          Drop me a message!
        </p>

        {/* Form card */}
        <div style={{ ...sharedStyles.card, padding: '2.5rem', textAlign: 'left' }}>
          {sent && (
            <div
              style={{
                padding: '14px 20px',
                borderRadius: 12,
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.25)',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
                fontWeight: 600,
              }}
            >
              ✅ Message sent! I&apos;ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 600, display: 'block', marginBottom: 6 }}>Name</label>
                <input
                  style={sharedStyles.input}
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                  onBlur={(e)  => { e.target.style.borderColor = 'var(--border)'; }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 600, display: 'block', marginBottom: 6 }}>Email</label>
                <input
                  style={sharedStyles.input}
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                  onBlur={(e)  => { e.target.style.borderColor = 'var(--border)'; }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 600, display: 'block', marginBottom: 6 }}>Message</label>
              <textarea
                style={{ ...sharedStyles.input, minHeight: 160, resize: 'vertical' }}
                placeholder="Tell me about your project or opportunity..."
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                onFocus={(e) => { e.target.style.borderColor = 'var(--primary)'; }}
                onBlur={(e)  => { e.target.style.borderColor = 'var(--border)'; }}
              />
            </div>

            <button
              type="submit"
              style={{ ...sharedStyles.btn('primary'), justifyContent: 'center', width: '100%', padding: '16px' }}
            >
              Send Message <Icon d={icons.send} size={16} />
            </button>
          </form>
        </div>

        {/* Social links */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: '2rem', flexWrap: 'wrap' }}>
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 20px',
                borderRadius: 12,
                border: '1px solid var(--border)',
                color: 'var(--muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'all 0.2s',
                background: 'var(--surface)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'var(--primary)';
                el.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = 'var(--muted)';
                el.style.borderColor = 'var(--border)';
              }}
            >
              <Icon d={icons[icon]} size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
