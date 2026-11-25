import { House } from "@phosphor-icons/react/ssr";

/** App icon: ink tile, house and the emerald "raja" dot (matches the launcher icon). */
export function AppLogo({ size = 36, outline = false }: { size?: number; outline?: boolean }) {
  const dot = size * 0.18;
  return (
    <span
      aria-hidden
      className={`relative inline-grid shrink-0 place-items-center bg-ink ${outline ? "ring-2 ring-white/15" : ""}`}
      style={{ width: size, height: size, borderRadius: size * 0.28 }}
    >
      <House weight="fill" size={size * 0.54} className="text-white" />
      <span
        className="absolute rounded-full bg-accent"
        style={{
          top: size * 0.17,
          right: size * 0.17,
          width: dot,
          height: dot,
          border: `${size * 0.03}px solid var(--color-ink)`,
        }}
      />
    </span>
  );
}

/** Logo + "HouseRaja" wordmark. */
export function BrandMark({
  size = 36,
  inverted = false,
}: {
  size?: number;
  inverted?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <AppLogo size={size} outline={inverted} />
      <span
        className={`font-extrabold tracking-tight ${inverted ? "text-white" : "text-ink"}`}
        style={{ fontSize: size * 0.56 }}
      >
        House<span className={inverted ? "text-mint" : "text-accent"}>Raja</span>
      </span>
    </span>
  );
}
