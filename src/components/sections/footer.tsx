import { site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/logo";

export function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "Privacy policy", href: site.legal.privacy },
    { label: "Terms of use", href: site.legal.terms },
    { label: "Delete account", href: site.legal.deleteAccount },
    { label: "Contact", href: `mailto:${site.supportEmail}` },
  ];
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark size={32} />
          <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline} Made with ❤️ in India.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm font-semibold text-muted transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-xs text-muted">
          © {year} {site.developer}. Google Play and the Google Play logo are trademarks of Google LLC.
        </p>
      </Container>
    </footer>
  );
}
