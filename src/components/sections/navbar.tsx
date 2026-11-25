"use client";

import { List, X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

import { navLinks, site } from "@/content/site";
import { Container } from "@/components/ui/container";
import { BrandMark } from "@/components/ui/logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" aria-label="HouseRaja home" onClick={() => setOpen(false)}>
          <BrandMark size={34} />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold text-muted transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center rounded-xl bg-ink px-4 text-sm font-bold text-white transition hover:bg-ink-soft sm:inline-flex"
          >
            Download free
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl border border-line bg-surface md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-paper md:hidden">
          <Container className="flex flex-col py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-base font-semibold text-ink hover:bg-surface-alt"
              >
                {l.label}
              </a>
            ))}
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-ink font-bold text-white"
            >
              Download free on Google Play
            </a>
          </Container>
        </nav>
      )}
    </header>
  );
}
