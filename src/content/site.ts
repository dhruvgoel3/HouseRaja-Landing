/**
 * All copy and links for the landing page live here, so text changes never
 * need touching layout code.
 */

export const site = {
  name: "HouseRaja",
  tagline: "Ghar ka hisaab, made simple.",
  description:
    "Track your milkman, maid, cook, newspaper and daily expenses in one simple app. Automatic monthly bills, WhatsApp sharing, reminders — in English & Hindi. Free, private, no ads.",
  url: "https://houseraja-app.web.app",
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.houseraja.app",
  supportEmail: "goelbuilds@gmail.com",
  developer: "Dhruv Goel",
  // Static pages shipped in /public (also used as the Play Console URLs).
  legal: {
    privacy: "/privacy",
    terms: "/terms",
    deleteAccount: "/delete-account",
  },
} as const;

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
] as const;

export type IconName =
  | "drop" | "receipt" | "chart" | "bell" | "whatsapp" | "translate"
  | "wifi" | "shield" | "lock" | "cloud" | "users" | "wallet" | "calendar"
  | "hand" | "sparkle" | "device";

export const highlights: { icon: IconName; label: string }[] = [
  { icon: "users", label: "7 household services" },
  { icon: "wifi", label: "Works offline" },
  { icon: "translate", label: "English & हिंदी" },
  { icon: "sparkle", label: "Free · No ads" },
];

export const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "drop",
    title: "Services that count themselves",
    body: "Milkman, maid, cook, newspaper, water can, dhobi, driver — everyone is marked present automatically. Tap only when someone skips a day or brings extra.",
  },
  {
    icon: "receipt",
    title: "Monthly bills, auto-calculated",
    body: "Per litre, per visit or fixed monthly — with paid leaves and weekly offs. The bill is ready the moment the month ends.",
  },
  {
    icon: "whatsapp",
    title: "Share bills on WhatsApp",
    body: "Send a clean, itemised bill to your milkman or maid in one tap. No more arguments over “kitne din aaye the?”.",
  },
  {
    icon: "wallet",
    title: "Daily kharcha in seconds",
    body: "Add vegetables, grocery, fuel or bills in a few taps. See today, this week and this month at a glance.",
  },
  {
    icon: "chart",
    title: "Clear monthly reports",
    body: "Total household spend — services plus daily expenses — broken down by category, month after month.",
  },
  {
    icon: "bell",
    title: "Smart reminders",
    body: "Last day of the month: check missed days. 1st of the month: your bills are ready. Optional nightly expense nudge.",
  },
];

export const steps: { title: string; body: string; image: string; alt: string }[] = [
  {
    title: "Add your services",
    body: "Add each helper once — name, rate and how they charge. Takes under a minute.",
    image: "/screens/services.webp",
    alt: "HouseRaja services list with milkman, maid, cook and newspaper",
  },
  {
    title: "Tap only the exceptions",
    body: "Everyone is marked present daily. Mark a leave or extra quantity with one tap.",
    image: "/screens/home.webp",
    alt: "HouseRaja home screen with today's services and month total",
  },
  {
    title: "Get the bill. Share it.",
    body: "At month end the bill is ready with every day accounted for — share it on WhatsApp.",
    image: "/screens/bill.webp",
    alt: "Milkman bill with attendance calendar and WhatsApp share button",
  },
];

export const showcase: {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  image: string;
  alt: string;
}[] = [
  {
    eyebrow: "Monthly bills",
    title: "Every rupee, every day — accounted for.",
    body: "A calendar view shows exactly who came, who didn't and who brought extra. Advances and payments are tracked, so you always know the balance.",
    points: ["Paid leaves & weekly offs", "Advances and part-payments", "One-tap WhatsApp bill"],
    image: "/screens/bill.webp",
    alt: "Monthly milk bill of ₹3,770 with balance due and attendance calendar",
  },
  {
    eyebrow: "Daily expenses",
    title: "Log kharcha before you forget it.",
    body: "Amount, category, done. Edit or delete anytime, undo if you slip — and everything syncs across your phones instantly.",
    points: ["8 everyday categories", "Today, week & month totals", "Edits sync everywhere in real time"],
    image: "/screens/add-expense.webp",
    alt: "Add expense sheet with amount ₹240 and grocery category selected",
  },
  {
    eyebrow: "Reports",
    title: "See where the money really goes.",
    body: "One honest number for the whole household, split between services and daily spends, with a category breakdown for every month.",
    points: ["Services vs. daily spend", "Category-wise breakdown", "Compare any past month"],
    image: "/screens/reports.webp",
    alt: "Monthly report showing ₹18,640 total spend with category bars",
  },
];

export const privacyPoints: { icon: IconName; title: string; body: string }[] = [
  { icon: "lock", title: "Your account, your data", body: "Every household is a separate, private account. Nobody else — not even another account on the same phone — can see it." },
  { icon: "shield", title: "Encrypted in transit & at rest", body: "Data is encrypted in transit (TLS) and at rest (AES-256) on Google Cloud servers in Mumbai." },
  { icon: "cloud", title: "Backed up & synced", body: "Change phones without losing a single entry. Works offline and syncs when you're back online." },
  { icon: "hand", title: "No ads. No selling.", body: "We don't show ads, use an advertising ID or sell data. Delete your account and all data anytime from Settings." },
];

export const faqs: { q: string; a: string }[] = [
  { q: "Is HouseRaja free?", a: "Yes. HouseRaja is free to download and use, with no ads." },
  { q: "Which services can I track?", a: "Milkman, maid, cook, newspaper, water can, ironing/dhobi and driver — billed per litre, per visit/piece, or as a fixed monthly amount with paid leaves and weekly offs." },
  { q: "Does it work without internet?", a: "Yes. Everything works offline and syncs automatically to your account when you're back online." },
  { q: "Can my family use it on two phones?", a: "Yes. Sign in with the same account on both phones — every change shows up on the other phone instantly." },
  { q: "Is the app available in Hindi?", a: "Yes. Switch between English and हिंदी anytime from Settings." },
  { q: "How do I delete my data?", a: "Open Settings → Delete account. Your account and all data are permanently deleted. You can also request deletion from our website." },
];
