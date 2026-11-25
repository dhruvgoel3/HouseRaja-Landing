import { steps } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { Phone } from "@/components/ui/phone";
import { SectionHeading } from "@/components/ui/section-heading";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Set it up once. Then just live your life."
          body="Most days you won't need to open the app at all — HouseRaja assumes everyone came."
        />
        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 100} className="flex flex-col items-center text-center">
              <div className="relative flex h-[360px] w-full items-start justify-center overflow-hidden rounded-[2rem] bg-accent-soft pt-8">
                <Phone src={s.image} alt={s.alt} width={230} />
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-accent-soft to-transparent" />
              </div>
              <span className="mt-6 grid size-9 place-items-center rounded-full bg-ink text-sm font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 max-w-xs leading-relaxed text-muted">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
