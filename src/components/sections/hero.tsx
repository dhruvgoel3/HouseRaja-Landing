import { ArrowRight, CheckCircle, WhatsappLogo } from "@phosphor-icons/react/ssr";

import { highlights } from "@/content/site";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Phone } from "@/components/ui/phone";
import { PlayStoreButton } from "@/components/ui/play-store-button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* soft background shapes */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[640px] rounded-full bg-accent-soft blur-0" />
      <div aria-hidden className="pointer-events-none absolute top-[420px] -left-48 size-[420px] rounded-full bg-white/70" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-bold text-ink shadow-soft">
            <span className="size-2 rounded-full bg-accent" />
            Free · No ads · English &amp; हिंदी
          </p>

          <h1 className="mt-6 text-[2.75rem] leading-[1.02] font-extrabold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Ghar ka hisaab,{" "}
            <span className="text-accent">made simple.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Milkman, maid, cook, newspaper and your daily kharcha — tracked in one
            app. Monthly bills calculate themselves and go out on WhatsApp in one tap.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PlayStoreButton />
            <a
              href="#how-it-works"
              className="group inline-flex h-14 items-center gap-2 rounded-2xl px-4 font-bold text-ink transition hover:bg-surface"
            >
              See how it works
              <ArrowRight weight="bold" className="transition group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>

          <ul className="mt-10 grid max-w-lg grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4 sm:gap-4">
            {highlights.map((h) => (
              <li key={h.label} className="flex items-center gap-2 text-sm font-semibold text-muted sm:flex-col sm:items-start">
                <Icon name={h.icon} size={20} className="text-accent" />
                {h.label}
              </li>
            ))}
          </ul>
        </div>

        {/* phones */}
        <div className="relative mx-auto h-[560px] w-full max-w-[460px] sm:h-[620px]">
          <div className="absolute top-10 left-0 hidden -rotate-6 opacity-95 sm:block">
            <Phone src="/screens/services.webp" alt="" width={250} />
          </div>
          <div className="absolute top-0 right-0 left-0 mx-auto w-fit sm:right-0 sm:left-auto">
            <Phone
              src="/screens/home.webp"
              alt="HouseRaja home screen showing ₹18,640 spent this month and today's services"
              width={290}
              priority
            />
          </div>

          {/* floating cards */}
          <div className="animate-float absolute bottom-16 -left-2 flex items-center gap-3 rounded-2xl border border-line bg-surface p-3 pr-4 shadow-soft sm:bottom-24 sm:-left-6">
            <span className="grid size-10 place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
              <WhatsappLogo weight="fill" size={22} aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">Bill sent to Ramesh</span>
              <span className="block text-xs text-muted">Milk · November · ₹3,770</span>
            </span>
          </div>
          <div
            className="animate-float absolute top-[360px] -right-2 flex items-center gap-2 rounded-2xl bg-ink px-4 py-3 text-white shadow-lift sm:top-[400px] sm:-right-6"
            style={{ animationDelay: "-3s" }}
          >
            <CheckCircle weight="fill" size={20} className="text-mint" aria-hidden />
            <span className="text-sm font-bold">28 of 30 days counted</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
