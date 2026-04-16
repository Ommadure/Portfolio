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
    <article className="rounded-3xl border border-(--border) bg-(--bg-surface)/95 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.34)]">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.32em] text-(--accent)/80">
          {period}
        </p>
        <h3 className="text-2xl font-semibold text-(--text-primary)">{role}</h3>
        <p className="text-sm text-(--text-muted)">{company}</p>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-(--text-muted)">
        {highlights.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-(--accent-secondary)"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
