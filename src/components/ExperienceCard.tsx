import { motion } from 'framer-motion'

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export function ExperienceCard({
  role,
  company,
  period,
  highlights,
}: ExperienceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/95 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.34)]"
    >
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]/80">
          {period}
        </p>
        <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{role}</h3>
        <p className="text-sm text-[var(--text-muted)]">{company}</p>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-[var(--text-muted)]">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--accent-secondary)]"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
