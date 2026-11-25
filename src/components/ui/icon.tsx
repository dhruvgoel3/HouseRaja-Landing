import {
  CalendarBlank,
  ChartPieSlice,
  CloudCheck,
  DeviceMobile,
  Drop,
  HandHeart,
  Lock,
  Receipt,
  ShieldCheck,
  Sparkle,
  Translate,
  Users,
  Wallet,
  WhatsappLogo,
  WifiSlash,
  BellRinging,
} from "@phosphor-icons/react/ssr";
import type { IconProps } from "@phosphor-icons/react";

import type { IconName } from "@/content/site";

const icons: Record<IconName, React.ComponentType<IconProps>> = {
  drop: Drop,
  receipt: Receipt,
  chart: ChartPieSlice,
  bell: BellRinging,
  whatsapp: WhatsappLogo,
  translate: Translate,
  wifi: WifiSlash,
  shield: ShieldCheck,
  lock: Lock,
  cloud: CloudCheck,
  users: Users,
  wallet: Wallet,
  calendar: CalendarBlank,
  hand: HandHeart,
  sparkle: Sparkle,
  device: DeviceMobile,
};

/** Phosphor icon by name — the same icon family the app uses. */
export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Component = icons[name];
  return <Component aria-hidden {...props} />;
}
