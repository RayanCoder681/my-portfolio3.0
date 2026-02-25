import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, GraduationCap, Code2, BookMarked, User } from 'lucide-react';
import { personalInfo } from '../data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations';

const education = [
  {
    degree: 'Secondary Education',
    school: 'Lycee de la Cite verte',
    year: '2017–2024',
    mention: 'Mention Très Bien',
  },
  {
    degree: 'Computer Science Engineering',
    school: 'Ecole Nationale Superieure Polytechnique Yaounde',
    year: '2024-2029',
    mention: 'Still going',
  },
];

const interests = [
  { icon: '🕸️', label: 'Web development' },
  { icon: '🤖', label: 'Scientific AI' },
  { icon: '🎮', label: 'Video Games' },
  { icon: '🔐', label: 'Reseau and Cybersecurity' },
  { icon: '⚽', label: 'Football Player' },
  { icon: '☕', label: 'Specialty Coffee' },
];

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex items-center gap-4 mb-16"
        >
          <motion.span variants={fadeInUp} className="section-tag">01.</motion.span>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl font-bold text-white">
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="flex-1 h-px bg-gradient-to-r from-neural-300/30 to-transparent"
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Left: Image Frame */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6"
          >
            <motion.div
              variants={fadeInLeft}
              className="relative group mx-auto xl:mx-0 w-full max-w-md"
            >
              <div className="relative aspect-square md:aspect-[4/5] xl:aspect-square">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-neural-300/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-neural-300 z-20" />
                <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-neural-300 z-20" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-neural-300 z-20" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-neural-300 z-20" />

                {/* Main frame */}
                <div className="relative h-full w-full neural-card rounded-lg overflow-hidden border border-neural-300/30 bg-void-900/40">
                  {/* Neural technical overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full neural-grid bg-grid-sm" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-neural-300/50 animate-scan" style={{ animationDuration: '4s' }} />
                  </div>

                  {/* Placeholder Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-void-800/20">
                    <div className="w-24 h-24 rounded-full border border-neural-300/20 flex items-center justify-center mb-4 relative">
                      <User className="w-10 h-10 text-neural-300/30" />
                      <div className="absolute inset-0 rounded-full border border-neural-300/40 animate-ping opacity-10" style={{ animationDuration: '3s' }} />
                    </div>
                    <p className="font-mono text-[10px] text-neural-300/50 uppercase tracking-[0.2em]">Biometric Scan Required</p>
                    <div className="mt-4 px-4 py-2 border border-neural-300/10 rounded font-mono text-[9px] text-void-300 bg-void-950/50">
                      ID: {personalInfo.name.toUpperCase().replace(' ', '_')}
                    </div>
                  </div>

                  {/* Actual image placeholder - Ready for user to swap */}

                  <img
                    src="/images/photo_cv_Crop.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 relative z-0"
                  />

                </div>

                {/* Technical data tags - Hidden on mobile, visible on desktop */}
                <div className="absolute -right-4 top-1/4 translate-x-full hidden xl:flex flex-col gap-3">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="bg-void-900/90 backdrop-blur-md border-l-2 border-neural-300 px-3 py-1.5 flex flex-col gap-0.5"
                  >
                    <span className="font-mono text-[8px] text-neural-400 uppercase tracking-tighter">Status</span>
                    <span className="font-mono text-[10px] text-neural-300">AUTHORIZED</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="bg-void-900/90 backdrop-blur-md border-l-2 border-plasma-400 px-3 py-1.5 flex flex-col gap-0.5"
                  >
                    <span className="font-mono text-[8px] text-plasma-400 uppercase tracking-tighter">Core</span>
                    <span className="font-mono text-[10px] text-plasma-300">NEURAL ARCH</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Interests Section moved under the photo for better vertical balance */}
            <motion.div variants={fadeInLeft} className="mt-4 hidden xl:block">
              <p className="font-mono text-[10px] text-neural-400 tracking-widest mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-neural-300/30" />
                SUBSYSTEMS & INTERESTS
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-neural-300/10 bg-void-800/30 text-void-100 text-xs hover:border-neural-300/40 hover:text-neural-300 transition-all cursor-default"
                  >
                    <span className="text-sm">{interest.icon}</span>
                    <span className="font-mono opacity-80">{interest.label}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Bio Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-12 xl:col-span-7 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              <motion.p variants={fadeInRight} className="text-void-100 text-lg leading-relaxed font-body">
                {personalInfo.bio}
              </motion.p>

              <motion.p variants={fadeInRight} className="text-void-100/80 leading-relaxed font-body">
                My journey started in applied mathematics, evolved through statistical modeling, and landed in the
                deep end of neural networks. Today, I bridge research and production — turning papers into
                systems that scale.
              </motion.p>

              <motion.p variants={fadeInRight} className="text-void-100/80 leading-relaxed font-body">
                I'm particularly fascinated by <span className="text-neural-300 font-medium">foundation models</span>,
                their emergence properties, and making them efficient enough to run in the real world.
                Outside of work, I contribute to open-source and occasionally embarrass myself at Kaggle competitions.
              </motion.p>
            </div>

            {/* Contact info grid */}
            <motion.div variants={fadeInRight} className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-void-800/30 border border-void-400/20 group hover:border-neural-300/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-neural-300/10 flex items-center justify-center text-neural-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-neural-400 uppercase">Location</span>
                  <span className="text-sm text-void-100">{personalInfo.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-void-800/30 border border-void-400/20 group hover:border-neural-300/30 transition-colors">
                <div className="w-8 h-8 rounded-full bg-neural-300/10 flex items-center justify-center text-neural-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-neural-400 uppercase">Communcation</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm text-void-100 hover:text-neural-300 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Mobile Interests (Hidden on XL, shown on smaller screens) */}
            <motion.div variants={fadeInRight} className="xl:hidden mt-2">
              <p className="font-mono text-xs text-neural-400 tracking-widest mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-neural-300/30" />
                INTERESTS
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-void-400/30 bg-void-600/30 text-void-100 text-sm hover:border-neural-300/40 hover:text-neural-300 transition-all cursor-default"
                  >
                    <span>{interest.icon}</span>
                    {interest.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Row: Additional Details */}
        <div className="grid lg:grid-cols-3 gap-8 mt-24">
          {/* Education */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="neural-card rounded-xl p-6 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-neural-300/5 blur-3xl rounded-full" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-neural-300/10 flex items-center justify-center text-neural-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">Academic Path</h3>
            </div>
            <div className="flex flex-col gap-6 relative z-10">
              {education.map((edu) => (
                <div key={edu.degree} className="relative pl-5 border-l border-neural-300/20 py-1">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-neural-300 shadow-[0_0_8px_rgba(0,239,255,0.5)]" />
                  <p className="font-mono text-[10px] text-neural-400 mb-1">{edu.year}</p>
                  <p className="font-semibold text-white text-sm group-hover:text-neural-300 transition-colors">{edu.degree}</p>
                  <p className="text-void-300 text-xs mt-1">{edu.school}</p>
                  <p className="font-mono text-[10px] text-plasma-400/80 mt-2 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-plasma-400" />
                    {edu.mention}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
            className="neural-card rounded-xl p-6 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-plasma-400/5 blur-3xl rounded-full" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-plasma-400/10 flex items-center justify-center text-plasma-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">System Specs</h3>
            </div>
            <div className="flex flex-col gap-2 relative z-10">
              {[
                { label: 'Primary language', value: 'Python 🐍' },
                { label: 'Preferred framework', value: 'PyTorch' },
                { label: 'Specialization', value: 'NLP + MLOps' },
                { label: 'Kaggle rank', value: 'Junior' },
                { label: 'Languages', value: 'FR, EN' },
              ].map((fact) => (
                <div key={fact.label} className="flex justify-between items-center py-2.5 border-b border-void-400/10 last:border-0 group/fact">
                  <span className="font-mono text-[10px] text-void-300 uppercase tracking-tighter">{fact.label}</span>
                  <span className="font-mono text-xs text-neural-300 group-hover/fact:translate-x-[-2px] transition-transform">{fact.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications teaser */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.2 }}
            className="neural-card rounded-xl p-6 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-400/5 blur-3xl rounded-full" />
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-violet-400/10 flex items-center justify-center text-violet-400">
                <BookMarked className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">Certifications</h3>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
              {['AWS ML Specialty', 'Google Cloud GenAI Leader', 'Numpy, Scipy, Matplotlib & pandas : ML'].map((cert) => (
                <div key={cert} className="flex items-start gap-3 p-2 rounded-lg hover:bg-void-800/20 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                  <span className="text-sm text-void-100/90 leading-tight">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
