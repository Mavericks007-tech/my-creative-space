import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Forhad Hossain" },
      {
        name: "description",
        content:
          "Selected work by Forhad Hossain: garments ERP, RAG knowledge base, F-commerce automator, and AI automation proposals.",
      },
      { property: "og:title", content: "Projects — Forhad Hossain" },
      {
        property: "og:description",
        content:
          "MVPs, RAG systems and enterprise dashboards built for real businesses.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
            // projects
          </p>
          <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight md:text-6xl">
            Things I&apos;ve built.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            A working portfolio of MVPs, RAG systems and enterprise dashboards
            shipped through Mavericks Tech Bangladesh and as a solo engineer.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="masonry">
            {projects.map((p) => (
              <article
                key={p.slug}
                className="group overflow-hidden rounded-xl border border-hairline bg-surface p-6 transition-colors hover:border-accent/60"
              >
                <div className="flex items-center justify-between">
                  <span className="text-mono text-[11px] uppercase tracking-widest text-accent">
                    {p.category}
                  </span>
                  <span className="text-mono text-[11px] text-muted-foreground">
                    {p.year}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-tight tracking-tight">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm italic text-muted-foreground">
                  {p.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                  {p.description}
                </p>

                <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm">
                  <dt className="text-mono text-xs text-muted-foreground">client</dt>
                  <dd className="text-foreground">{p.client}</dd>
                  <dt className="text-mono text-xs text-muted-foreground">role</dt>
                  <dd className="text-foreground">{p.role}</dd>
                </dl>

                <ul className="mt-5 space-y-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-mono text-accent">→</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-hairline bg-surface-elevated px-2 py-0.5 text-mono text-[11px] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              Have a similar project? Let&apos;s talk →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}