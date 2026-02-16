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
      url: "https://x.com/Xhavicofficial",
      icon: "twitter",
    },
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/xhavicofficial/",
      icon: "instagram",
    },
    {
      platform: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61587340254751",
      icon: "facebook",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/xhavic/",
      icon: "linkedin",
    },
    {
      platform: "discord",
      label: "Discord",
      url: "#",
      icon: "discord",
    },
    {
      platform: "telegram",
      label: "Telegram",
      url: "#",
      icon: "telegram",
    },
    {
      platform: "github",
      label: "GitHub",
      url: "#",
      icon: "github",
    },
  ],
} as const satisfies SiteConfig;
