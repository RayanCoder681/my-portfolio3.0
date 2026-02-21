export const globalCSS = `
/* Au début de globalCSS.ts */
@font-face {
  font-family: 'FA-1-Regular';
  src: url('/fonts/FA-1-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { 
    font-family: 'FA-1-Regular','Space Grotesk', sans-serif; 
    overflow-x: hidden; 
    letter-spacing: 0.03em;
  }

  h1, h2, h3, h4, .display {
    letter-spacing: 0.05em;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 99px; }
  ::selection { background: rgba(14,165,233,0.3); }

  .mono { 
    font-family: 'JetBrains Mono', monospace; 
    letter-spacing: 0.05em;
  }
  .display { font-family: 'Syne', sans-serif; }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-12px); }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.4; }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  /* Responsive nav */
  @media (max-width: 768px) {
    .desktop-nav  { display: none !important; }
    .mobile-btn   { display: flex !important; }
    .hero-visual  { display: none !important; }
    .hero-grid    { grid-template-columns: 1fr !important; }
    .contact-grid { grid-template-columns: 1fr !important; }
  }
`;
