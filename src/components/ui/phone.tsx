import Image from "next/image";

/**
 * A rendered app screen (already framed as a phone, transparent PNG/WebP
 * at 2x: 836 × 1744). Width drives the size; height follows the ratio.
 */
export function Phone({
  src,
  alt,
  width = 300,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={836}
      height={1744}
      priority={priority}
      sizes={`${width}px`}
      style={{ width, height: "auto" }}
      className={`drop-shadow-[0_40px_50px_rgba(21,21,21,0.28)] select-none ${className}`}
      draggable={false}
    />
  );
}
