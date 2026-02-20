import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const allProjects = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution with real-time inventory management and advanced filtering capabilities.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      link: "https://github.com/Konqueror/ecom",
      category: "web"
    },
    {
      id: "6",
      title: "AI Chat Application",
      description:
        "Real-time chat application powered by AI with natural language processing capabilities.",
      tags: ["React", "WebSocket", "OpenAI API", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      link: "https://github.com",
      category: "ai"
    },
    {
      id: "2",
      title: "E-Learning Platform",
      description:
        "Comprehensive design system with 50+ components built with Radix UI and Tailwind CSS.",
      tags: ["Storybook", "React", "Design System"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      link: "https://github.com/Padevend/Edufacil",
      category: "web"
    },
    // {
    //   id: "5",
    //   title: "Pdf Fusionner",
    //   description:
    //     "Subscription-based platform with multi-tenant architecture and advanced user management.",
    //   tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    //   image:
    //     "https://images.unsplash.com/photo-1460925895917-adf4e565db5e?w=800&q=80",
    //   link: "https://github.com/RayanCoder681/Projet_Fusion-pdf",
    //   category: "fullstack"
    // },
    {
      id: "7",
      title: "Image Classifier",
      description:
        "Machine Learning model capable of classifying images with 95% accuracy using Convolutional Neural Networks.",
      tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      link: "#",
      category: "ai"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Dev" },
    { id: "ai", label: "AI / ML" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects = filter === "all"
    ? allProjects
    : allProjects.filter(p => p.category === filter);

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Featured WORK
            </h1>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              A collection of digital experiences, from interactive web apps to intelligent algorithms.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === cat.id
                  ? "bg-primary text-black border-primary"
                  : "bg-white/5 text-foreground/60 border-white/10 hover:border-white/20 hover:text-white"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/50 text-lg">No projects found in this category yet. Coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
