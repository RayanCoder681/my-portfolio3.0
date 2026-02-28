import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NeuralBackground from './components/NeuralBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      {/* Neural canvas background */}
      <NeuralBackground />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress */}
      <ScrollProgress />

      {/* Neural grid overlay */}
      <div className="fixed inset-0 neural-grid pointer-events-none z-0" />

      {/* App shell */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/project/:id" element={<Home />} />
            <Route path="/experience" element={<Home />} />
            <Route path="/publications" element={<Home />} />
            <Route path="/publication/:id" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
