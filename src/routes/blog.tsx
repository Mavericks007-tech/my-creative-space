import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { posts } from "@/data/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Forhad Hossain" },
      {
        name: "description",
        content:
          "Insights on AI, product strategy, automation and practical engineering from Forhad Hossain.",
      },
      { property: "og:title", content: "Blog — Forhad Hossain" },
      {
        property: "og:description",
        content:
          "Notes and stories about building MVPs, RAG systems, and enterprise dashboards.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
            // insights
          </p>
          <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight md:text-6xl">
            Thoughts on building.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Software engineering, startups, AI, design, and building products that solve real problems.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.id} className="group border-b border-border/40 pb-12 last:border-0">
                <span className="text-mono text-[11px] uppercase tracking-widest text-accent">
                  {post.category}
                </span>
                <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              Want to discuss? Let&apos;s talk →
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
