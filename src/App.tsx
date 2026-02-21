import React from 'react';
import { ThemeProvider, useTheme, getThemeVars } from './context/ThemeContext';
import { globalCSS } from './styles/globalCSS';
import { NeuralCanvas } from './components/NeuralCanvas';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { WebDev } from './sections/WebDev';
import { Contact } from './sections/Contact';

// Inner component has access to theme context
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AppInner: React.FC = () => {
  const { t } = useTheme();
  const location = useLocation();

  return (
    <div
      style={{
        background: 'var(--bg)',
        color: 'var(--text)',
        minHeight: '100vh',
        position: 'relative',
        ...getThemeVars(t),
      }}
    >
      <style>{globalCSS}</style>
      <NeuralCanvas />
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 100px)' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/web-dev" element={<WebDev />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppInner />
  </ThemeProvider>
);

export default App;
