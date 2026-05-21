import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Forhad Hossain" },
      {
        name: "description",
        content:
          "Get in touch with Forhad Hossain to build an MVP, RAG system or enterprise dashboard.",
      },
      { property: "og:title", content: "Contact — Forhad Hossain" },
      {
        property: "og:description",
        content: "Start a conversation about your next project.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  {
    label: "Email",
    value: "hello@forhadhossain.tech",
    href: "mailto:hello@forhadhossain.tech",
    tag: "// preferred",
  },
  {
    label: "Company",
    value: "Mavericks Tech Bangladesh",
    href: "#",
    tag: "// founder",
  },
  {
    label: "LinkedIn",
    value: "in/forhadhossain",
    href: "https://linkedin.com",
    tag: "// social",
  },
  {
    label: "GitHub",
    value: "@forhadhossain",
    href: "https://github.com",
    tag: "// code",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-mono text-xs uppercase tracking-[0.3em] text-accent">
            // contact
          </p>
          <h1 className="mt-4 text-balance text-5xl font-bold tracking-tight md:text-7xl">
            Let&apos;s build something
            <br />
            <span className="text-muted-foreground">that actually ships.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I take a small number of new client projects each quarter. If you have an
            MVP, RAG system, ERP dashboard or AI automation in mind, send a short note
            with what you&apos;re trying to do and roughly when you need it.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1.2fr]">
          {/* Channels */}
          <div className="space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group block rounded-xl border border-hairline bg-surface p-5 transition-colors hover:border-accent/60"
              >
                <p className="text-mono text-[11px] uppercase tracking-widest text-accent">
                  {c.tag}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
                <p className="mt-1 text-mono text-lg font-medium text-foreground group-hover:text-accent">
                  {c.value}
                </p>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            className="space-y-5 rounded-xl border border-hairline bg-surface p-7"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const subject = encodeURIComponent(
                `New project inquiry — ${data.get("name") || "Portfolio"}`,
              );
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nCompany: ${data.get("company")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:hello@forhadhossain.tech?subject=${subject}&body=${body}`;
            }}
          >
            <p className="text-mono text-xs uppercase tracking-widest text-accent">
              // start a project
            </p>
            <Field label="Your name" name="name" required />
            <Field label="Company / project" name="company" />
            <div className="space-y-2">
              <label className="block text-mono text-xs uppercase tracking-widest text-muted-foreground">
                What are you trying to build?
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-md border border-hairline bg-surface-elevated px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
                placeholder="E.g. an inventory ERP for our garments factory, or an MVP for a Bangla F-commerce automator…"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Send via email →
            </button>
            <p className="text-mono text-[11px] text-muted-foreground">
              // opens your mail client with the message prefilled
            </p>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type="text"
        name={name}
        required={required}
        className="w-full rounded-md border border-hairline bg-surface-elevated px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
      />
    </div>
  );
}