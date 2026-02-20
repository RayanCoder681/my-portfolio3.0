import Layout from "../components/Layout";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const { id } = useParams();

  // Expanded dummy data for demo purposes
  const projects: Record<string, any> = {
    "1": {
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with real-time inventory management.",
      longDescription: "This project was built to solve the problem of legacy e-commerce platforms that were slow and hard to maintain. We created a modern, scalable solution using React and Node.js that can handle thousands of concurrent users. The architecture focuses on microservices for scalability.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      link: "https://github.com/Konqueror/ecom",
      status: "Completed",
      teamSize: "4 Developers",
      duration: "3 Months",
      challenge: "The main challenge was creating a system that could handle high traffic during peak seasons while maintaining fast load times. Integrating multiple payment gateways seamlessly was also a significant hurdle.",
      solution: "We implemented caching strategies with Redis, optimized database queries, and utilized a CDN for static assets. We also adopted a modular payment adapter pattern.",
      results: ["50% faster page load times", "99.9% uptime achieved", "Successfull handling of Black Friday traffic"],
    },
    "6": {
      title: "AI Chat Application",
      description: "Real-time intelligent chat assistant.",
      longDescription: "An advanced chat application leveraging OpenAI's GPT models to provide context-aware responses. Built with a focus on real-time latency and user experience.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      tags: ["React", "WebSocket", "OpenAI API", "MongoDB", "Express"],
      link: "https://github.com",
      status: "In Progress",
      teamSize: "2 Developers",
      duration: "Ongoing",
      challenge: "Handling real-time websocket connections at scale and managing token context windows for the AI model efficiently.",
      solution: "Implemented a custom websocket server with horizontal scaling capabilities and a smart context truncation algorithm.",
      results: ["Real-time response latency < 200ms", "Seamless conversation history management"],
    },
    // Add other projects here as needed for the demo
  };

  const project = projects[id || "1"];

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="min-h-screen pb-20">
        {/* Full Width Hero Image */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 pb-12">
            <div className="max-w-7xl mx-auto">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors mb-6 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-6xl font-bold text-white mb-4"
              >
                {project.title}
              </motion.h1>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-primary/20 text-primary border border-primary/20 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {project.longDescription}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-8 h-1 bg-red-500 rounded-full" /> Challenge
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-8 h-1 bg-green-500 rounded-full" /> Solution
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Key Results</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.results.map((result: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-foreground/80">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl sticky top-24">
                <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-4">Project Info</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-foreground/50">Timeline</p>
                      <p className="text-white font-medium">{project.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-foreground/50">Team</p>
                      <p className="text-white font-medium">{project.teamSize}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="text-sm text-foreground/50">Status</p>
                      <p className="text-white font-medium">{project.status}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    View Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
