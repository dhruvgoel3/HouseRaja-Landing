import { Container } from "@/components/ui/container";
import { AppLogo } from "@/components/ui/logo";
import { PlayStoreButton } from "@/components/ui/play-store-button";

export function Cta() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div aria-hidden className="absolute -top-24 -left-24 size-72 rounded-full bg-white/10" />
          <div aria-hidden className="absolute -right-20 -bottom-28 size-80 rounded-full bg-ink/10" />
          <div className="relative">
            <div className="flex justify-center">
              <AppLogo size={64} outline />
            </div>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Start your ghar ka hisaab today.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
              Free forever. Takes less than a minute to set up.
            </p>
            <div className="mt-8 flex justify-center">
              <PlayStoreButton variant="light" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
