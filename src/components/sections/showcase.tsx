import { Check } from "@phosphor-icons/react/ssr";

import { showcase } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { Phone } from "@/components/ui/phone";

export function Showcase() {
  return (
    <section className="overflow-x-clip py-20 sm:py-28">
      <Container className="flex flex-col gap-24 lg:gap-32">
        {showcase.map((item, i) => {
          const flip = i % 2 === 1;
          return (
            <div key={item.title} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal className={flip ? "lg:order-2" : ""}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{item.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{item.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">{item.body}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 font-semibold">
                      <span className="grid size-6 place-items-center rounded-full bg-accent text-white">
                        <Check weight="bold" size={14} aria-hidden />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120} className={`relative flex justify-center ${flip ? "lg:order-1" : ""}`}>
                <div aria-hidden className="absolute top-1/2 left-1/2 size-[320px] -translate-1/2 rounded-full bg-accent-soft sm:size-[480px]" />
                <Phone src={item.image} alt={item.alt} width={280} className="relative" />
              </Reveal>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
