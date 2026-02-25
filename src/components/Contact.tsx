import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, BookOpen, Send, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../utils/animations';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: 'RayanCoder681',
    url: personalInfo.github,
    description: 'Open source projects & code',
    color: 'hover:text-white hover:border-white/30',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'Rayan Diatsa',
    url: personalInfo.linkedin,
    description: 'Professional network',
    color: 'hover:text-blue-400 hover:border-blue-400/30',
  },
  {
    icon: BookOpen,
    label: 'Google Scholar',
    handle: 'Rayan Diatsa',
    url: personalInfo.scholar,
    description: 'Research publications & citations',
    color: 'hover:text-neural-300 hover:border-neural-300/30',
  },
];

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500));
    setStatus('success');
  };

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-neural-300/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-6"
        >
          <motion.span variants={fadeInUp} className="section-tag">06.</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white">
            Contact
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex-1 h-px bg-gradient-to-r from-neural-300/30 to-transparent"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-void-100 text-lg mb-16 max-w-2xl"
        >
          Whether you want to discuss ML research, a new project, or just want to say hi — my inbox is always open.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact form */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="neural-card rounded-xl p-8 flex flex-col items-center gap-4 text-center h-full justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-16 h-16 text-green-400" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-void-100">Thank you for reaching out. I'll get back to you within 24–48 hours.</p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="btn-neural px-6 py-3 rounded mt-4"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="neural-card rounded-xl p-8 flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-mono text-xs text-neural-400 mb-2 block">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full bg-void-600/50 border border-void-300/20 rounded px-4 py-2.5 text-white placeholder-void-300 font-body text-sm focus:outline-none focus:border-neural-300/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-neural-400 mb-2 block">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Your mail"
                      className="w-full bg-void-600/50 border border-void-300/20 rounded px-4 py-2.5 text-white placeholder-void-300 font-body text-sm focus:outline-none focus:border-neural-300/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-neural-400 mb-2 block">SUBJECT</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-void-600/50 border border-void-300/20 rounded px-4 py-2.5 text-white font-body text-sm focus:outline-none focus:border-neural-300/50 transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="collaboration">Research Collaboration</option>
                    <option value="job">Job Opportunity</option>
                    <option value="consulting">ML Consulting</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-mono text-xs text-neural-400 mb-2 block">MESSAGE</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or question..."
                    className="w-full bg-void-600/50 border border-void-300/20 rounded px-4 py-2.5 text-white placeholder-void-300 font-body text-sm focus:outline-none focus:border-neural-300/50 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-neural px-6 py-3 rounded flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-neural-300 border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Socials & info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            {/* Direct email */}
            <motion.div variants={fadeInRight} className="neural-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-neural-300" />
                <span className="font-mono text-xs text-neural-400 tracking-widest">DIRECT EMAIL</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="font-display text-xl font-semibold text-white hover:text-neural-300 transition-colors flex items-center gap-2 group"
              >
                {personalInfo.email}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-void-200 text-sm mt-2">Response time: usually within 24h</p>
            </motion.div>

            {/* Social links */}
            {socials.map((social) => (
              <motion.a
                key={social.label}
                variants={fadeInRight}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`neural-card rounded-xl p-5 flex items-center gap-4 text-void-200 border transition-all ${social.color}`}
              >
                <social.icon className="w-6 h-6 shrink-0" />
                <div className="flex-1">
                  <div className="font-display font-semibold">{social.label}</div>
                  <div className="font-mono text-xs text-void-300">{social.handle}</div>
                  <div className="text-sm mt-0.5">{social.description}</div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-50 shrink-0" />
              </motion.a>
            ))}

            {/* Availability */}
            <motion.div variants={fadeInRight} className="neural-card rounded-xl p-5 border-green-400/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400">CURRENTLY AVAILABLE</span>
              </div>
              <p className="text-void-100 text-sm">
                Open to ML engineering roles, research positions, and interesting consulting opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
