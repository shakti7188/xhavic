// ---------------------------------------------------------------------------
// Site-wide metadata and social links
// ---------------------------------------------------------------------------

export interface SocialLink {
  readonly platform: string;
  readonly label: string;
  readonly url: string;
  readonly icon: string; // icon identifier (e.g. lucide / simple-icons name)
}

export interface SiteConfig {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly url: string;
  readonly locale: string;
  readonly themeColor: string;
  readonly socials: readonly SocialLink[];
}

export const SITE_CONFIG = {
  name: "Xhavic",
  tagline: "Build and Scale DApps With Ease",
  description:
    "Xhavic is an Ethereum Layer 2 execution environment offering scalable, low-cost, and EVM-compatible infrastructure for DeFi, RWA, AI, NFTs, and enterprise digital asset applications.",
  url: "https://xhavic.io",
  docsUrl: "/docs",
  locale: "en",
  themeColor: "#0A0A0A",

  socials: [
    {
      platform: "twitter",
      label: "Twitter / X",
      url: "https://x.com/xhavic",
      icon: "twitter",
    },
    {
      platform: "discord",
      label: "Discord",
      url: "https://discord.gg/xhavic",
      icon: "discord",
    },
    {
      platform: "telegram",
      label: "Telegram",
      url: "https://t.me/xhavic",
      icon: "telegram",
    },
    {
      platform: "github",
      label: "GitHub",
      url: "https://github.com/xhavic",
      icon: "github",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/company/xhavic",
      icon: "linkedin",
    },
  ],
} as const satisfies SiteConfig;
