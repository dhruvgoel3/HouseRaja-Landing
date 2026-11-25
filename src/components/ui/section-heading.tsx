export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  inverted = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: "center" | "left";
  inverted?: boolean;
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <p className={`text-xs font-bold uppercase tracking-[0.18em] ${inverted ? "text-mint" : "text-accent"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${inverted ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {body && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${inverted ? "text-white/70" : "text-muted"}`}>
          {body}
        </p>
      )}
    </div>
  );
}
