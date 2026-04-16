interface SectionHeadingProps {
  pretitle: string;
  title: string;
  description: string;
}

export function SectionHeading({
  pretitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]/75">
        {pretitle}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
