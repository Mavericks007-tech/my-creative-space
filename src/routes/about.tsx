import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import forhadPhoto from "@/assets/forhad.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Forhad Hossain" },
      {
        name: "description",
        content:
          "About Forhad Hossain — Founder & CEO of Mavericks Tech Bangladesh, student at Middlesex University, building practical software for real businesses.",
      },
      { property: "og:title", content: "About — Forhad Hossain" },
      {
        property: "og:description",
        content:
          "Founder of Mavericks Tech Bangladesh. Engineer building MVPs, RAG systems and ERP dashboards.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const skills = [
  "Entrepreneurship",
  "SaaS Product Strategy",
  "AI & Automation",
  "RAG / Vector Search",
  "Web & Platform Development",
  "FastAPI / Python",
  "Next.js / React",
  "PostgreSQL / Supabase",
  "Inventory & ERP Systems",
  "Digital Commerce",
];

const principles = [
  {
    n: "01",
    title: "Real workflows, not screens.",
    body: "Software should match how a business actually operates — from cutting floor to showroom.",
  },
  {
    n: "02",
    title: "Ship the MVP. Learn. Iterate.",
    body: "Don't wait for code to be perfect. Launch the moment the core button works.",
  },
  {
    n: "03",
    title: "Human-in-the-loop AI.",
    body: "AI drafts the answer. A person confirms. That's how trust gets built.",
  },
  {
    n: "04",
    title: "Built to scale, priced to start.",
    body: "Free tier to hook, paid tiers to grow, infrastructure that doesn't melt at 100x.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="overflow-hidden rounded-xl border border-hairline bg-surface-elevated">
              <img
                src={forhadPhoto}
                alt="Forhad Hossain"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
              // about
            </p>
            <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight md:text-6xl">
              I build real technology for modern businesses.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m <span className="text-foreground">Forhad Hossain</span> — Founder
                & CEO of <span className="text-foreground">Mavericks Tech Bangladesh</span>,
                an IT firm focused on modern digital solutions, SaaS platforms, AI-powered
                tools, business automation and custom software development.
              </p>
              <p>
                I&apos;m currently studying at{" "}
                <span className="text-foreground">Middlesex University</span> and shipping
                software at the same time — MVPs, RAG knowledge bases and enterprise
                inventory dashboards for garments manufacturers, corporate offices and
                F-commerce sellers.
              </p>
              <p>
                My approach is simple: clean, practical, scalable systems that match the
                client&apos;s real workflow. Owners should open one dashboard and
                understand their business — not ask five different people for an update.
              </p>
            </div>

            <blockquote className="mt-10 border-l-2 border-accent pl-6 text-mono text-base text-foreground">
              &ldquo;A young entrepreneur building real technology for modern
              businesses.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
            // principles
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            How I work.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline/50 md:grid-cols-2">
            {principles.map((p) => (
              <div key={p.n} className="bg-surface p-8">
                <span className="text-mono text-sm text-accent">{p.n}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
            // toolkit
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Core skills.
          </h2>
          <div className="mt-8 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-hairline bg-surface px-3 py-1.5 text-mono text-sm text-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-hairline bg-surface px-5 py-2.5 text-sm font-medium hover:border-accent hover:text-accent"
            >
              See the work →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background"
            >
              Work with me
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}