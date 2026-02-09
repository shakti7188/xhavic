// ---------------------------------------------------------------------------
// Ecosystem apps — placeholder for future population
// ---------------------------------------------------------------------------

export type EcosystemCategory =
  | "defi"
  | "nft"
  | "gaming"
  | "rwa"
  | "ai"
  | "infrastructure"
  | "bridge"
  | "wallet"
  | "tooling"
  | "social";

export interface EcosystemApp {
  readonly name: string;
  readonly description: string;
  readonly category: EcosystemCategory;
  readonly logo: string;
  readonly url: string;
  readonly tags: readonly string[];
  readonly featured?: boolean;
}

/**
 * Ecosystem applications deployed or building on Xhavic.
 *
 * This array is intentionally empty and will be populated as
 * ecosystem partners are onboarded. Each entry should include
 * the app name, a short description, category, logo path,
 * external URL, and relevant tags.
 *
 * Example entry:
 * ```ts
 * {
 *   name: "ExampleDEX",
 *   description: "Decentralized exchange with concentrated liquidity.",
 *   category: "defi",
 *   logo: "/images/ecosystem/example-dex.svg",
 *   url: "https://exampledex.xyz",
 *   tags: ["swap", "liquidity", "amm"],
 *   featured: true,
 * }
 * ```
 */
export const ECOSYSTEM_APPS: readonly EcosystemApp[] = [] as const;

/** All valid category labels for filtering UI */
export const ECOSYSTEM_CATEGORIES: readonly {
  readonly value: EcosystemCategory;
  readonly label: string;
}[] = [
  { value: "defi", label: "DeFi" },
  { value: "nft", label: "NFTs" },
  { value: "gaming", label: "Gaming" },
  { value: "rwa", label: "RWA" },
  { value: "ai", label: "AI" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "bridge", label: "Bridges" },
  { value: "wallet", label: "Wallets" },
  { value: "tooling", label: "Developer Tooling" },
  { value: "social", label: "Social" },
] as const;
