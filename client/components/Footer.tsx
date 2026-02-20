import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail, ArrowRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/RayanCoder681",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://cm.linkedin.com/in/rayan-diatsa-0a539734a",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:rayandiatsa@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-background pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-white to-accent bg-clip-text text-transparent">
              Rayan Diatsa
            </h3>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              Crafting intelligent digital experiences at the intersection of
              modern web development and artificial intelligence.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-foreground/60 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-6">Stay Connected</h4>
            <p className="text-sm text-foreground/60 mb-4">
              Interested in collaborating? Let's build something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              Start a conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/50">
            © {currentYear} Rayan Diatsa. All rights reserved.
          </p>
          <p className="text-sm text-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500/20" /> using React, Tailwind & AI
          </p>
        </div>
      </div>
    </footer>
  );
}
