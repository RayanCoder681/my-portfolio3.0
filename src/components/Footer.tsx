import { motion } from 'framer-motion';
import { Brain, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-neural-300/10 bg-void-700/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-neural-300" />
            <span className="font-mono text-sm text-void-200">
              {personalInfo.name} <span className="text-neural-300">·</span> ML & Data Science Student
            </span>
          </div>

          {/* Center: Built with */}
          <div className="flex items-center gap-1.5 text-void-300 text-sm">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-plasma-500 fill-plasma-500" />
            <span>using React, TypeScript & Tailwind</span>
          </div>

          {/* Right: Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded border border-neural-300/20 text-neural-300 font-mono text-xs hover:bg-neural-300/10 transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </motion.button>
        </div>

        <div className="mt-6 pt-6 border-t border-void-400/20 text-center">
          <p className="font-mono text-xs text-void-300">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.{' '}
            <span className="text-neural-300/60 ml-2">
              Crafted with precision & passion for AI.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
