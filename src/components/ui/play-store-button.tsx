import { GooglePlayLogo } from "@phosphor-icons/react/ssr";

import { site } from "@/content/site";

/** Primary call to action → Google Play listing. */
export function PlayStoreButton({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const styles =
    variant === "dark"
      ? "bg-ink text-white hover:bg-ink-soft"
      : "bg-white text-ink hover:bg-paper";
  return (
    <a
      href={site.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex h-14 items-center gap-3 rounded-2xl px-5 shadow-soft transition duration-200 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      <GooglePlayLogo weight="fill" size={26} aria-hidden />
      <span className="flex flex-col leading-none">
        <span className="text-[11px] font-medium uppercase tracking-wider opacity-70">
          Get it on
        </span>
        <span className="mt-1 text-lg font-bold">Google Play</span>
      </span>
    </a>
  );
}
