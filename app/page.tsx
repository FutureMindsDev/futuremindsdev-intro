import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "LazyDev",
    tag: "AI · CI",
    description:
      "An AI-native autonomous CI assistant. It watches GitHub issues, generates validated code fixes, and pushes fix branches safely — with a glass-box dashboard.",
    stack: ["Next.js 16", "NestJS", "LangGraph", "BullMQ"],
    href: "https://github.com/FutureMindsDev/lazydev-server",
    accent: "from-brand-amber to-brand-terracotta",
  },
  {
    name: "LazyTranslator",
    tag: "Desktop · AI",
    description:
      "A local-first desktop translator built with Tauri 2 and Rust. Multi-gigabyte neural models run on your machine — your content never leaves the device.",
    stack: ["Rust", "Tauri 2", "React 19", "SQLite"],
    href: "https://github.com/FutureMindsDev/lazytranslator-intro",
    accent: "from-brand-terracotta to-brand-violet",
  },
  {
    name: "TechSuggest",
    tag: "Chatbot · AI",
    description:
      "An AI-powered Facebook Messenger bot that recommends gadgets. Guided questions feed Google Gemini, which returns a personalized pick.",
    stack: ["Node.js", "Gemini 2.0 Flash", "Messenger API"],
    href: "https://github.com/FutureMindsDev/TechSuggest",
    accent: "from-brand-amber to-brand-amber",
  },
  {
    name: "fitAura",
    tag: "Vision · AI",
    description:
      "A virtual fitting room: upload a person photo and an outfit, and Gemini blends them into a photorealistic try-on.",
    stack: ["Python", "Gemini 2.5 Flash Image", "Pillow"],
    href: "https://github.com/FutureMindsDev/fitAura",
    accent: "from-brand-terracotta to-brand-amber",
  },
  {
    name: "audio-transcriber",
    tag: "CLI · Speech",
    description:
      "Transcribe hours of audio in minutes, fully offline, using faster-whisper. Zero cost, total privacy, 99+ languages.",
    stack: ["Python", "faster-whisper", "CLI"],
    href: "https://github.com/FutureMindsDev/audio-transcriber",
    accent: "from-brand-violet to-brand-terracotta",
  },
  {
    name: "aws-developer-questions",
    tag: "Web · Quiz",
    description:
      "A practice quiz app for AWS developer certification questions, deployed on Vercel.",
    stack: ["TypeScript", "Next.js", "Vercel"],
    href: "https://github.com/FutureMindsDev/aws-developer-questions",
    accent: "from-brand-amber to-brand-violet",
  },
];

const team = [
  {
    name: "Arkar Chan Myae",
    role: "Co-Founder & Lead Systems / AI Architect",
    focus:
      "Multi-agent orchestration, backend systems, autonomous developer tooling & infrastructure.",
    avatar: "/assets/arkar-avatar.png",
    github: "https://github.com/arkar-chanmyae",
  },
  {
    name: "Khin Me Me Latt",
    role: "Co-Founder & Software / Product Engineer",
    focus:
      "Full-stack applications, user experience, AI product innovation & creative solutions.",
    avatar: "/assets/khin-avatar.png",
    github: "https://github.com/khin-me-me-latt",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* playful background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-amber/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-24 h-80 w-80 rounded-full bg-brand-terracotta/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-brand-violet/20 blur-3xl"
      />

      <main className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8">
        {/* nav */}
        <header className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="FutureMindsDev logo"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-display text-xl font-semibold tracking-tight">
              FutureMindsDev
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium sm:flex">
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#team" className="hover:text-primary transition-colors">
              Team
            </a>
            <a
              href="https://github.com/FutureMindsDev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              GitHub
            </a>
          </nav>
        </header>

        {/* hero */}
        <section className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <span className="h-2 w-2 rounded-full bg-brand-terracotta" />
              A small studio that ships
            </span>
            <h1 className="font-display mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              We build playful, useful software with AI.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              FutureMindsDev is a tiny team crafting AI-powered tools and developer
              utilities — from autonomous CI agents to offline translators and
              chatbots. Fun to use, serious about quality.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                See our projects
              </a>
              <a
                href="https://github.com/FutureMindsDev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-card px-6 text-sm font-semibold transition-colors hover:bg-accent"
              >
                Visit GitHub
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <Image
                src="/assets/milk-and-mocha.webp"
                alt="Milk and Mocha bears"
                width={420}
                height={420}
                priority
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* stats strip */}
        <section className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Public repos", value: "8" },
            { label: "Projects shipped", value: "6+" },
            { label: "Languages", value: "5" },
            { label: "Coffee cups", value: "∞" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-border bg-card p-5 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-bold text-primary">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </section>

        {/* projects */}
        <section id="projects" className="mt-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                What we&apos;ve built
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">
                A mix of AI agents, desktop apps, chatbots and developer tools.
              </p>
            </div>
            <a
              href="https://github.com/FutureMindsDev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all on GitHub →
            </a>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block h-3 w-12 rounded-full bg-gradient-to-r ${p.accent}`}
                  />
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-xl font-semibold">
                  {p.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* team */}
        <section id="team" className="mt-20">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The humans behind it
          </h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Two friends, a lot of curiosity, and a shared love for building things
            that feel good to use.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <Image
                  src={m.avatar}
                  alt={m.name}
                  width={80}
                  height={80}
                  className="rounded-full ring-4 ring-secondary"
                />
                <div>
                  <p className="font-display text-xl font-semibold">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {m.focus}
                  </p>
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* cta */}
        <section className="mt-20 rounded-3xl bg-primary p-8 text-center text-primary-foreground sm:p-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Want to build something fun together?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/80">
            We&apos;re always happy to chat about AI, dev tools, or a new idea.
          </p>
          <a
            href="https://github.com/FutureMindsDev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-background px-6 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
          >
            Get in touch on GitHub
          </a>
        </section>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border py-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} FutureMindsDev. Made with curiosity.</p>
          <div className="flex items-center gap-2">
            <Image src="/assets/Milk.svg" alt="" width={24} height={24} />
            <Image src="/assets/Mocha.svg" alt="" width={24} height={24} />
          </div>
        </footer>
      </main>
    </div>
  );
}
