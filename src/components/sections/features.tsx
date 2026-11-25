import { features } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title={<>Everything your home spends on, <span className="text-accent">in one place.</span></>}
          body="Built for Indian homes — from the doodhwala's litres to the dhobi's pieces."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={(i % 3) * 80}>
              <article className="group h-full rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/30 sm:p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon name={f.icon} size={24} weight="duotone" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
