import { privacyPoints } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Phone } from "@/components/ui/phone";
import { SectionHeading } from "@/components/ui/section-heading";

export function Privacy() {
  return (
    <section id="privacy" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden className="absolute -top-48 -right-48 size-[620px] rounded-full bg-accent/15" />
      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            align="left"
            inverted
            eyebrow="Privacy & security"
            title="Your household data stays yours."
            body="Money matters are personal. HouseRaja is built so that only you can ever see your hisaab."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {privacyPoints.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70}>
                <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-mint">
                  <Icon name={p.icon} size={22} weight="duotone" />
                </span>
                <h3 className="mt-4 font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/65">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal className="flex justify-center">
          <Phone src="/screens/login.webp" alt="HouseRaja login screen with Google sign-in" width={280} />
        </Reveal>
      </Container>
    </section>
  );
}
