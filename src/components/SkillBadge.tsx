import { motion } from 'framer-motion'

interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.05)] px-4 py-2 text-sm text-[var(--text-primary)] shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition duration-300 hover:border-[var(--accent)]/40 hover:bg-[var(--accent-soft)]"
    >
      {name}
    </motion.div>
  );
}
