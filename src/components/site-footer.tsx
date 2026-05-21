import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
            // about
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Forhad Hossain — Founder & CEO of Mavericks Tech Bangladesh.
            Building software that runs real operations.
          </p>
        </div>
        <div>
          <p className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
            // sitemap
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-mono text-xs uppercase tracking-widest text-muted-foreground">
            // elsewhere
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="mailto:hello@forhadhossain.tech" className="hover:text-accent">hello@forhadhossain.tech</a></li>
            <li><a href="https://www.instagram.com/_forhad__75?igsh=Nzd2b3B1eHF1cjU%3D" className="hover:text-accent" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/in/forhad-hossain-52b8b9354?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="hover:text-accent" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Forhad Hossain</span>
          <span>Mavericks Tech Bangladesh</span>
        </div>
      </div>
    </footer>
  );
}