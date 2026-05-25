import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/data/projects";
import portfolioImage from "@/assets/portfolio.jpeg";

const services = [
  {
    tag: "01 / mvp",
    title: "MVPs that ship",
    body: "From rough idea to launched product in weeks. FastAPI + Next.js + Supabase, deployed on Vercel/Railway, with a human-in-the-loop where it matters.",
  },
  {
    tag: "02 / rag",
    title: "RAG & AI assistants",
    body: "Document-grounded chat for SOPs, compliance, tech packs and product knowledge. Department-scoped retrieval, source citations, no hallucinated answers.",
  },
  {
    tag: "03 / erp",
    title: "Inventory & ERP dashboards",
    body: "Production-to-sales tracking for garments and corporate offices. Role-based access, audit-ready movement history, decision-grade dashboards.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forhad Hossain — Software Engineer & Founder" },
      {
        name: "description",
        content:
          "Forhad Hossain — Software engineer building MVPs, RAG systems and enterprise dashboards. Founder of Mavericks Tech Bangladesh.",
      },
      { property: "og:title", content: "Forhad Hossain — Software Engineer & Founder" },
      {
        property: "og:description",
        content: "MVPs, RAG systems, and enterprise dashboards built for real businesses.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const featured = projects.filter((p) => p.featured);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="bg-grid absolute inset-0 opacity-40" aria-hidden />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 0%, color-mix(in oklab, var(--accent) 25%, transparent), transparent 70%), radial-gradient(50% 50% at 0% 100%, color-mix(in oklab, var(--accent) 18%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div className="flex flex-col justify-center">
              <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
                //Meet · AI engineer
              </p>
              <h1 className="mt-5 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                Forhad
                <br />
                Hossain.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                <span className="text-foreground">Founder & CEO of Mavericks</span>.
                Builds <span className="text-foreground">SaaS</span>,{" "}
                <span className="text-foreground">AI</span>, and{" "}
                <span className="text-foreground">automation tools</span> to help
                businesses in Bangladesh grow through simple, smart, and practical
                technology solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  View projects
                  <span className="text-mono">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-hairline bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Start a project
                </Link>
              </div>

              <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-6 text-mono">
                <Stat k="6+" v="Shipped projects" />
                <Stat k="3" v="Industries served" />
                <Stat k="100%" v="Hands-on build" />
              </div>
            </div>
            <div className="hidden overflow-hidden rounded-xl border border-hairline bg-surface-elevated md:block">
              <img
                src={portfolioImage}
                alt="Forhad Hossain Portfolio"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeader eyebrow="// services" title="What I build" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline/50 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group bg-surface p-7 transition-colors hover:bg-surface-elevated">
                <p className="text-mono text-xs text-accent">{s.tag}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — Masonry */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex items-end justify-between">
            <SectionHeader eyebrow="// featured work" title="Selected projects" />
            <Link
              to="/projects"
              className="text-mono text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              all projects →
            </Link>
          </div>

          <div className="masonry mt-10">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} accent={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="relative overflow-hidden rounded-2xl border border-hairline bg-surface p-10 md:p-16">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(40% 80% at 100% 50%, color-mix(in oklab, var(--accent) 25%, transparent), transparent 70%)",
              }}
              aria-hidden
            />
            <div className="relative grid items-center gap-8 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
                  // let's build
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                  Need a system or inventory dashboard in mind?
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  I take projects from rough idea to deployed product —
                  architecture, code, deployment and handover.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background"
                >
                  Start a conversation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-foreground">{k}</div>
      <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
        {v}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ProjectCard({
  project,
  accent = false,
}: {
  project: (typeof projects)[number];
  accent?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-xl border border-hairline bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/60 ${
        accent ? "ring-1 ring-accent/30" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-mono text-[11px] uppercase tracking-widest text-accent">
          {project.category}
        </span>
        <span className="text-mono text-[11px] text-muted-foreground">{project.year}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight">
        {project.title}
      </h3>
      <p className="mt-2 text-sm italic text-muted-foreground">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
        {project.description}
      </p>

      <ul className="mt-5 space-y-2">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2 text-sm text-muted-foreground">
            <span className="text-mono text-accent">→</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded border border-hairline bg-surface-elevated px-2 py-0.5 text-mono text-[11px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      {project.slug === "apex-weavers-rag" && (
        <a
          href="https://bit.ly/3PbWGVl"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Try RAG Demo
          <span className="text-mono">→</span>
        </a>
      )}
    </article>
  );
}
