import { useLayoutEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Typewriter } from 'react-simple-typewriter'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Mail, Moon, Sun } from 'lucide-react'
import { SectionHeading } from './components/SectionHeading'
import { ProjectCard } from './components/ProjectCard'
import { SkillBadge } from './components/SkillBadge'
import { ExperienceCard } from './components/ExperienceCard'
import { about, experience, heroPhrases, navItems, projects, skills, socialLinks } from './data/content'

const sectionReveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function App() {
  const { scrollYProgress } = useScroll()
  const accentTranslateY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 220]), {
    stiffness: 160,
    damping: 40,
  })

  const accentOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 0.45, 0.45, 0])

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark'
    const saved = localStorage.getItem('portfolio-theme')
    return saved === 'light' ? 'light' : 'dark'
  })

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 blur-3xl bg-[radial-gradient(circle_at_top,_rgba(239,167,123,0.24),_transparent_16%),radial-gradient(circle_at_80%_20%,rgba(242,183,148,0.16),_transparent_18%)]" />
      <div className="pointer-events-none absolute right-5 top-28 hidden h-[calc(100vh-8rem)] w-1 rounded-full bg-[var(--accent)]/10 lg:block" />
      <motion.div
        style={{ y: accentTranslateY, opacity: accentOpacity }}
        className="pointer-events-none absolute right-5 top-28 hidden h-16 w-1 rounded-full bg-[var(--accent)]/80 shadow-[0_0_40px_rgba(245,158,11,0.35)] lg:block"
      />
      <main className="relative mx-auto flex min-h-screen max-w-360 flex-col gap-10 px-5 py-6 lg:px-10 lg:py-8">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={sectionReveal}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="flex items-center justify-between gap-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/95 px-5 py-4 shadow-[0_18px_70px_rgba(15,23,42,0.25)] backdrop-blur-xl lg:hidden"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]/90">Om Madure</p>
            <p className="text-sm text-[var(--text-muted)]">Frontend Developer</p>
          </div>
          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] text-[var(--text-primary)] transition hover:border-[var(--accent)]/60 hover:bg-[var(--bg-soft)]"
            aria-label="Toggle light and dark theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:items-start">
          <motion.aside
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionReveal}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="hidden lg:block lg:sticky lg:top-6 lg:self-start"
          >
            <div className="space-y-8 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/95 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.25)] backdrop-blur-xl">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.4em] text-[var(--accent)]/80">Frontend Developer</p>
                <h1 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">Om Madure</h1>
                <p className="text-sm leading-7 text-[var(--text-muted)]">Building modern, performance-first React applications with a polished design system and a strong UX focus.</p>
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--text-muted)]/80">Navigation</p>
                <nav className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
                  {navItems.map((item) => (
                    <motion.div key={item.id} whileHover={{ x: 6 }} className="rounded-2xl px-3 py-3 transition hover:bg-[var(--bg-soft)] hover:text-[var(--text-primary)]">
                      <Link
                        to={item.id}
                        spy
                        smooth
                        offset={-90}
                        duration={500}
                        className="block cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/95 p-5 text-sm text-[var(--text-muted)]">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="uppercase tracking-[0.32em] text-[var(--accent)]/80">Theme</p>
                    <p className="text-sm text-[var(--text-muted)]"></p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-soft)] text-[var(--text-primary)] transition hover:border-[var(--accent)]/60 hover:bg-[var(--bg-soft)]"
                    aria-label="Toggle light and dark theme"
                  >
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </button>
                </div>
                <p className="uppercase tracking-[0.32em] text-[var(--accent)]/80">Location</p>
                <p className="mt-3 text-[var(--text-primary)]">India</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.04)] px-3 py-2 text-xs text-[var(--text-primary)] transition hover:border-[var(--accent-secondary)]/60"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>

          <div className="space-y-16">
            <motion.section
              id="hero"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionReveal}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="overflow-hidden rounded-4xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--bg-soft)] px-4 py-2 text-sm text-[var(--accent)]"> 
                    Frontend developer • React • TypeScript
                  </span>
                  <div className="space-y-5">
                    <p className="text-base uppercase tracking-[0.36em] text-[var(--accent)]/75">Hello, I’m Om</p>
                    <h2 className="text-5xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-6xl">Building premium web experiences for modern products.</h2>
                    <p className="max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
                      {about.description}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                      <a href="mailto:ommadure7@gmail.com" className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.06)] px-3 py-2 text-sm text-[var(--accent)] transition hover:border-[var(--accent-secondary)]/60 hover:bg-[var(--bg-soft)]">Email me at ommadure7@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <motion.div whileHover={{ y: -2 }} className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[var(--accent-secondary)]">
                      <Link
                        to="projects"
                        spy
                        smooth
                        offset={-90}
                        duration={500}
                        className="block"
                      >
                        Explore projects
                      </Link>
                      <ArrowUpRight className="h-4 w-4" />
                    </motion.div>
                    <motion.a whileHover={{ y: -2 }} href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.05)] px-6 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent-secondary)]/60 hover:bg-[rgba(255,255,255,0.08)]">
                      Contact me
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: 'easeOut' }}
                  className="relative isolate overflow-hidden rounded-4xl border border-[var(--accent)]/15 bg-[linear-gradient(135deg,rgba(239,167,123,0.10),rgba(242,183,148,0.08))] p-6 shadow-[0_25px_80px_rgba(239,167,123,0.18)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,167,123,0.15),transparent_40%),radial-gradient(circle_at_20%_20%,rgba(242,183,148,0.12),transparent_30%)]" />
                  <div className="relative space-y-5">
                    <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]/80">Featured workflow</p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
                      className="space-y-3 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-6"
                    >
                      <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">What I build</p>
                      <p className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                        <Typewriter
                          words={heroPhrases}
                          loop={0}
                          cursor
                          cursorStyle="|"
                          typeSpeed={80}
                          deleteSpeed={40}
                          delaySpeed={1800}
                        />
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            <motion.section
              id="about"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="rounded-4xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl"
            >
              <SectionHeading
                pretitle="About"
                title="Focused on clarity, performance, and a polished user journey."
                description="I build responsive frontends that feel fast and intuitive across devices. My work emphasizes reusable systems, pragmatic state management, and user-first interfaces."
              />
              <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
                <div className="space-y-6 text-[var(--text-muted)]">
                  <p>With experience in production workflows at Test Yantra Software Solutions, I’ve delivered scalable React apps that solve real business needs. I collaborate closely with designers, backend teams, and stakeholders to ensure each interface is accessible, maintainable, and high-performing.</p>
                  <p>My toolkit includes modern UI architecture, TypeScript-first development, modular styling, and motion-driven interactions that feel natural without overwhelming the user.</p>
                </div>
                <div className="space-y-4 rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-6">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]/80">Core strength</p>
                    <p className="text-lg font-semibold text-[var(--text-primary)]">Clean UI implementation</p>
                  </div>
                  <ul className="space-y-3 text-[var(--text-muted)]">
                    <li>Responsive applications built with modern React patterns</li>
                    <li>Reusable component-driven architecture</li>
                    <li>Performance and accessibility-first delivery</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="skills"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
              className="rounded-4xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl"
            >
              <SectionHeading
                pretitle="Skills"
                title="A modern toolkit for UI, animation, and state management."
                description="These are the technologies I rely on to ship fast, polished frontend experiences with minimal friction." 
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((group) => (
                  <div key={group.category} className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-6">
                    <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]/80">{group.category}</p>
                    <div className="mt-5 grid gap-3">
                      {group.items.map((skill) => (
                        <SkillBadge key={skill} name={skill} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              id="projects"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="rounded-4xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl"
            >
              <SectionHeading
                pretitle="Projects"
                title="Featured work with real product-level scope."
                description="High-priority projects that highlight frontend ownership, data workflows, and polished interface design."
              />
              <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
                <ProjectCard {...projects[0]} featured />
                <div className="space-y-6">
                  {projects.slice(1).map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </div>
            </motion.section>

            <motion.section
              id="experience"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="rounded-4xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl"
            >
              <SectionHeading
                pretitle="Experience"
                title="One year of production frontend development at scale."
                description="Delivered real business-facing solutions using React, TypeScript, reusable UI patterns, and collaborative workflows." 
              />
              <div className="grid gap-6">
                {experience.map((item) => (
                  <ExperienceCard key={item.company} {...item} />
                ))}
              </div>
            </motion.section>

            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="rounded-4xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.28)] backdrop-blur-xl"
            >
              <SectionHeading
                pretitle="Contact"
                title="Ready to collaborate on your next product-focused frontend."
                description="Let’s connect if you need a frontend developer who can ship scalable React interfaces with strong performance and polish."
              />
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-6 text-[var(--text-muted)]">
                  <p className="text-lg leading-8">I’m available for frontend work, consulting, and collaboration on modern web products. Send a message and I’ll respond quickly with a practical plan.</p>
                  <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)]/90 p-6">
                    <p className="text-sm uppercase tracking-[0.32em] text-[var(--accent)]/80">Contact details</p>
                    <div className="mt-5 space-y-4 text-sm text-[var(--text-primary)]">
                      <div className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.05)] px-4 py-3">
                        <p className="text-[var(--text-muted)]">Email</p>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ommadure7@gmail.com" target="_blank" rel="noreferrer" className="mt-1 block text-[var(--accent)] transition hover:text-[var(--accent-secondary)]">ommadure7@gmail.com</a>
                      </div>
                      <a href="https://github.com/" target="_blank" rel="noreferrer" className="block rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.05)] px-4 py-3 transition hover:border-[var(--accent-secondary)]/60">github.com/om-madure</a>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="block rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.05)] px-4 py-3 transition hover:border-[var(--accent-secondary)]/60">linkedin.com/in/om-madure</a>
                    </div>
                  </div>
                </div>
                <div className="rounded-4xl border border-[var(--accent)]/15 bg-[var(--accent-secondary-soft)] p-10 text-[var(--text-primary)]">
                  <div className="space-y-5">
                    <div className="inline-flex items-center gap-3 rounded-full bg-[var(--accent-secondary-soft)] px-4 py-2 text-xs uppercase tracking-[0.4em] text-[var(--accent-secondary)]/90">
                      <Mail className="h-4 w-4" />
                      Quick reply
                    </div>
                    <p className="text-3xl font-semibold tracking-tight text-[var(--text-primary)]">Let’s build something meaningful together.</p>
                    <p className="text-[var(--text-muted)]">I’m open to new frontend roles and product collaborations. If you have a concept or need a React-first implementation, reach out.</p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ommadure7@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-[rgba(255,255,255,0.08)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[rgba(255,255,255,0.14)]"
                    >
                      Email me
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
