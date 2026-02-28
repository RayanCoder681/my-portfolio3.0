import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain, Github, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '../data';

const navItems = [
  { label: '01.about', href: '/about' },
  { label: '02.skills', href: '/skills' },
  { label: '03.projects', href: '/projects' },
  { label: '04.experience', href: '/experience' },
  { label: '05.publications', href: '/publications' },
  { label: '06.contact', href: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems
        .map((item) => item.href.replace('#', ''))
        .filter(Boolean);

      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(`/${section}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    navigate(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-void-800/90 backdrop-blur-xl border-b border-neural-300/10 shadow-neural'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.4 }}
                className="w-8 h-8 border border-neural-300/40 rounded flex items-center justify-center group-hover:border-neural-300"
              >
                <Brain className="w-4 h-4 text-neural-300" />
              </motion.div>
              <span className="font-mono text-sm text-neural-300 tracking-widest">
                Rayan<span className="text-plasma-500">.</span>Diatsa
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Social + CTA */}
            <div className="hidden md:flex items-center gap-4">
              {/* <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-void-200 hover:text-neural-300 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-void-200 hover:text-neural-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a> */}
              <a
                href="/rayan-diatsa-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neural px-4 py-2 text-xs rounded flex items-center gap-2"
              >
                <FileText className="w-3 h-3" />
                Obtenir mon CV
              </a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden text-void-100 hover:text-neural-300 transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-72 z-40 bg-void-700/95 backdrop-blur-xl border-l border-neural-300/10 flex flex-col"
          >
            <div className="flex flex-col gap-6 p-8 mt-20">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left nav-link text-lg"
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="mt-4 pt-6 border-t border-neural-300/10 flex items-center gap-4">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-void-200 hover:text-neural-300 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-void-200 hover:text-neural-300 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-neural-300 to-plasma-500 z-[60] origin-left"
        style={{ scaleX: 0 }}
        id="scroll-progress"
      />
    </>
  );
};

export default Navbar;
