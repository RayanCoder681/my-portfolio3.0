import Layout from "../components/Layout.tsx";
import { ArrowRight, Code2, BrainCircuit, Rocket, Calendar, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "./../lib/utils.ts";

export default function About() {
  const experiences = [
    {
      year: "2024 - Present",
      title: "AI Engineering Path",
      company: "Self-Driven / Academic",
      description: "Deep diving into Machine Learning, Neural Networks, and Python. Building bridges between traditional web apps and intelligent systems. Exploring LLMs and Generative AI.",
      icon: BrainCircuit,
      color: "text-accent",
      align: "left"
    },
    {
      year: "2023 - 2024",
      title: "Full Stack Exploration",
      company: "Projects & Freelance",
      description: "Expanded skillset to the backend with Node.js, Express, and databases. Built complex applications like e-commerce platforms and real-time chat apps.",
      icon: Server,
      color: "text-blue-400",
      align: "right"
    },
    {
      year: "2022 - 2023",
      title: "Frontend Developer",
      company: "Freelance",
      description: "Crafting responsive, high-performance web applications using React, TypeScript, and Tailwind CSS. Focus on modern UI/UX principles and component reusability.",
      icon: Code2,
      color: "text-primary",
      align: "left"
    },
    {
      year: "2021",
      title: "The Beginning",
      company: "Hello World",
      description: "Started the coding journey with HTML, CSS, and JavaScript. The moment I realized I could build anything I imagined.",
      icon: Rocket,
      color: "text-purple-400",
      align: "right"
    }
  ];

  return (
    <Layout>
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 overflow-hidden min-h-screen">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-6xl mx-auto w-full">
          {/* Header */}
          <div className="mb-20 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
            >
              The Developer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Behind the Code</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed"
            >
              From pixel-perfect user interfaces to complex neural architectures.
              My journey is defined by a relentless curiosity and a drive to innovate.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
            {/* Bio Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 order-2 md:order-1"
            >
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Engineering DNA
              </h2>
              <div className="prose prose-invert text-foreground/70 leading-relaxed">
                <p>
                  I started as a <strong className="text-primary">Frontend Specialist</strong>,
                  obsessed with component architectures and smooth user interactions. I loved the immediate visual feedback of web development.
                </p>
                <p>
                  But as technology evolved, so did my ambition. I realized that the next frontier wasn't just about how apps <em>look</em>, but how they <em>think</em>.
                </p>
                <p>
                  Today, I'm pivoting towards <strong className="text-accent">Artificial Intelligence</strong>.
                  My goal isn't just to build websites, but to create intelligent systems that solve real-world problems using the power of ML and Data Science.
                </p>
              </div>
            </motion.div>

            {/* Image/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-1 md:order-2 flex justify-center"
            >
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 aspect-square rounded-2xl overflow-hidden border border-border/20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="./../../images/photo_cv_Crop.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Cyber Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent mix-blend-overlay" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl -z-10" />
            </motion.div>
          </div>

          {/* Central Timeline Section */}
          <div className="relative mb-32">
            <h2 className="text-3xl font-bold text-center text-foreground mb-16">Journey Timeline</h2>

            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-8 items-start md:items-center",
                    exp.align === "left" ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Icon Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block flex-1" />

                  {/* Content Card */}
                  <div className={cn(
                    "ml-12 md:ml-0 flex-1 w-full md:w-auto",
                    exp.align === "left" ? "md:text-right md:pr-12" : "md:pl-12"
                  )}>
                    <div className={cn(
                      "glass-card p-6 rounded-2xl border border-border/40 hover:border-primary/30 transition-colors group",
                      exp.align === "left" ? "md:mr-auto" : "md:ml-auto"
                    )}>
                      <div className={cn("flex items-center gap-3 mb-3", exp.align === "left" ? "md:flex-row-reverse" : "")}>
                        <div className={cn("p-2 rounded-lg bg-primary/10", exp.color)}>
                          <exp.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                          {exp.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.title}</h3>
                      <p className="text-sm font-medium text-foreground/50 mb-3">{exp.company}</p>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Let's build the future together
            </h3>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 bg-foreground text-background font-bold rounded-full hover:bg-foreground/90 transition-all transform hover:-translate-y-1 items-center gap-2 shadow-lg hover:shadow-primary/20"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
