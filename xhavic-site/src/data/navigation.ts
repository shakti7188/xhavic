// ---------------------------------------------------------------------------
// Navigation — main nav, footer columns, legal links
// ---------------------------------------------------------------------------

export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
}

export interface NavDropdown {
  readonly label: string;
  readonly items: readonly NavLink[];
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

// ---- Main navigation (header) ----

export const MAIN_NAV: readonly NavItem[] = [
  {
    label: "Protocol",
    items: [
      { label: "Overview", href: "/protocol" },
      { label: "Architecture", href: "/protocol/architecture" },
      { label: "Dual Wallet System", href: "/protocol/dual-wallet" },
      { label: "Performance", href: "/protocol/performance" },
      { label: "Security", href: "/protocol/security" },
    ],
  },
  { label: "Developers", href: "/developers" },
  { label: "Users", href: "/users" },
  { label: "Enterprises", href: "/enterprises" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Governance", href: "/governance" },
  { label: "Community", href: "/community" },
  { label: "Docs", href: "/docs", external: true },
] as const;

// ---- Footer columns ----

export interface FooterColumn {
  readonly title: string;
  readonly links: readonly NavLink[];
}

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Protocol",
    links: [
      { label: "Overview", href: "/protocol" },
      { label: "Architecture", href: "/protocol/architecture" },
      { label: "Dual Wallet System", href: "/protocol/dual-wallet" },
      { label: "Performance", href: "/protocol/performance" },
      { label: "Security", href: "/protocol/security" },
      { label: "Whitepaper", href: "/whitepaper", external: false },
    ],
  },
  {
    title: "Build",
    links: [
      { label: "Documentation", href: "/docs", external: true },
      { label: "RPC Endpoints", href: "/docs", external: true },
      { label: "GitHub", href: "https://github.com/xhavic", external: true },
      { label: "Testnet Faucet", href: "https://faucet.xhavic.io", external: true },
      { label: "Block Explorer", href: "https://xhaviscan.com", external: true },
      { label: "Bridge", href: "https://bridge.xhavic.io", external: true },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Applications", href: "/ecosystem" },
      { label: "Partners", href: "/ecosystem" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Governance", href: "/governance" },
      { label: "Media Kit", href: "/media" },
    ],
  },
] as const;

// ---- Legal links (footer bottom) ----

export const LEGAL_LINKS: readonly NavLink[] = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Risk Disclosure", href: "/risk-disclosure" },
] as const;

// ---- Social footer links (extracted from index.html) ----

export const SOCIAL_FOOTER_LINKS: readonly NavLink[] = [
  { label: "Twitter / X", href: "https://x.com/xhavic", external: true },
  { label: "Discord", href: "https://discord.gg/xhavic", external: true },
  { label: "Telegram", href: "https://t.me/xhavic", external: true },
  { label: "GitHub", href: "https://github.com/xhavic", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/company/xhavic", external: true },
] as const;
