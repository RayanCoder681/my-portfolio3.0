import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { ArrowRight, Zap, Palette, Code, Cpu, Brain, Database, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Index() {
  const featuredProjects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with real-time inventory management and advanced filtering capabilities.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      link: "https://github.com/Konqueror/ecom",
      featured: true,
    },
    {
      id: "6",
      title: "AI Chat Application",
      description:
        "Real-time chat application powered by AI with natural language processing capabilities.",
      tags: ["React", "WebSocket", "OpenAI API", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", // Updated image for AI vibe
      link: "https://github.com",
    },
    {
      id: "5",
      title: "Pdf Fusionner",
      description:
        "Subscription-based platform with multi-tenant architecture and advanced user management.",
      tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
      image:
        "https://images.unsplash.com/photo-1460925895917-adf4e565db5e?w=800&q=80",
      link: "https://github.com/RayanCoder681/Projet_Fusion-pdf",
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Code,
      color: "text-primary",
      skills: ["React & modern ecosystems", "TypeScript Architecture", "Responsive UI/UX", "Performance Optimization"],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-accent",
      skills: ["Deep Learning Fundamentals", "Data Processing Pipelines", "Neural Networks", "Python & TensorFlow/PyTorch"],
    },
    {
      title: "Backend & Cloud",
      icon: Database,
      color: "text-purple-400",
      skills: ["Node.js & Express", "PostgreSQL / MongoDB", "RESTful APIs", "Cloud Deployment (AWS/Vercel)"],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse_fast mix-blend-screen" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] -z-10 animate-float mix-blend-screen" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-foreground/80">Available for innovative projects</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Crafting <br />
              <span className="bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                Intelligent
              </span> <br />
              Digital Experiences
            </h1>

            <p className="text-lg text-foreground/60 leading-relaxed max-w-xl">
              I bridge the gap between <span className="text-primary font-medium">modern web engineering</span> and <span className="text-accent font-medium">artificial intelligence</span>.
              Building the future of the web, one neural network at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/projects"
                className="group px-8 py-4 bg-foreground text-background font-bold rounded-full hover:opacity-90 transition-all flex items-center gap-2"
              >
                View Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 border border-foreground/20 text-foreground font-medium rounded-full hover:bg-foreground/5 transition-colors backdrop-blur-sm"
              >
                About Me
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Profile/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-accent/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-border/20 shadow-2xl">
                <img
                  src="images/photo_cv.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-border/10 shadow-xl"
              >
                <Code className="w-6 h-6 text-primary mb-1" />
                <span className="text-xs font-bold text-foreground block">Full Stack</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-card/80 backdrop-blur-md p-4 rounded-xl border border-border/10 shadow-xl"
              >
                <Brain className="w-6 h-6 text-accent mb-1" />
                <span className="text-xs font-bold text-foreground block">Future AI Eng.</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills / Expertise Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32 bg-secondary/20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Technical Arsenal
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A hybrid skillset designed to build the next generation of intelligent web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 glass-card rounded-2xl group"
              >
                <div className={`w-14 h-14 ${category.color} bg-primary/5 rounded-xl flex items-center justify-center mb-6 border border-primary/10 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-foreground/70">
                      <span className={`w-1.5 h-1.5 rounded-full ${category.color === 'text-primary' ? 'bg-primary' : category.color === 'text-accent' ? 'bg-accent' : 'bg-purple-400'}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">
                Selected Work
              </h2>
              <p className="text-foreground/60 text-lg max-w-xl">
                Projects that demonstrate my journey from web development to machine learning.
              </p>
            </div>
            <Link
              to="/projects"
              className="px-6 py-3 rounded-full border border-border/40 hover:bg-foreground/5 text-foreground transition-colors flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto w-full text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Ready to innovate?
          </h2>
          <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto">
            Whether it's a complex web application or an AI integration, I'm ready to bring your vision to life with code and creativity.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-10 py-5 bg-foreground text-background font-bold rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
