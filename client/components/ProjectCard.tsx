import { Link } from "react-router-dom";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "./../lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  featured?: boolean;
}

export default function ProjectCard({
  id,
  title,
  description,
  tags,
  image,
  link,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.3)]",
        featured ? "md:col-span-2" : ""
      )}
    >
      {/* Image Container with Overlay */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 z-10 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 z-20">
          <Link
            to={`/projects/${id}`}
            className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-primary hover:border-primary transition-colors"
          >
            Details <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 relative z-10">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
              title="View Source"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        <p className="text-sm text-foreground/60 mb-6 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary bg-primary/10 rounded-md border border-primary/10"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="px-2.5 py-1 text-[10px] font-medium text-foreground/50 bg-secondary/50 rounded-md border border-white/5">
                +{tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
