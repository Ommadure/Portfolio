import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from 'lucide-react'

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  live,
  github,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={
        featured
          ? "group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/95 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.34)]"
          : "group overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-7 transition hover:border-[var(--accent-secondary)]/50"
      }
    >
      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--accent)]/80">
        {subtitle}
      </span>
      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.05)] px-3 py-1 text-xs text-[var(--text-primary)] transition hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={live}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-soft)] px-4 py-2 text-sm font-medium text-[var(--accent-secondary)] transition hover:bg-[rgba(34,211,238,0.16)]"
        >
          Live demo
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <a
          href={github}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-[var(--accent-secondary)]/50"
        >
          GitHub
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}
