// ---------------------------------------------------------------------------
// Features — key benefits cards and slider benefits
// ---------------------------------------------------------------------------

// ---- Hero-level feature cards (from "Key Benefits" grid) ----

export interface FeatureCard {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly preview: string;
  readonly href: string;
}

export const FEATURE_CARDS: readonly FeatureCard[] = [
  {
    id: "dual-wallet",
    title: "Dual-wallet security architecture",
    description:
      "The Instant Wallet handles real-time transactions in seconds, while the Funding Wallet provides a 24-hour safety window to cancel or reverse transfers in case of errors or suspicious activity.",
    icon: "/images/features/i-1.webp",
    preview: "/images/features/img-1.webp",
    href: "/protocol/dual-wallet",
  },
  {
    id: "on-off-ramp",
    title: "On-Ramp and Off-Ramp Connectivity",
    description:
      "Enable end-users and institutional participants to move between fiat and digital assets with integrated ramp solutions, simplifying deposits and withdrawals.",
    icon: "/images/features/i-2.webp",
    preview: "/images/features/img-2.webp",
    href: "/enterprises",
  },
  {
    id: "evm-compatible",
    title: "Built for Real DApps - EVM compatible",
    description:
      "Developers can deploy Ethereum smart contracts without modification using familiar tools and languages such as Solidity, Vyper, Hardhat, and Foundry.",
    icon: "/images/features/i-3.webp",
    preview: "/images/features/img-3.webp",
    href: "/developers",
  },
] as const;

// ---- Slider benefit cards (from "Built for Real Dapps" slider) ----

export interface SliderBenefit {
  readonly title: string;
  readonly icon: string;
  readonly image: string;
  readonly href: string;
}

export const SLIDER_BENEFITS: readonly SliderBenefit[] = [
  {
    title: "Bulletproof security",
    icon: "/images/slider/icon4.png",
    image: "/images/slider/4.webp",
    href: "/protocol/security",
  },
  {
    title: "Built-in wallet",
    icon: "/images/slider/icon1.png",
    image: "/images/slider/1.png",
    href: "/protocol/dual-wallet",
  },
  {
    title: "Visualize your performance",
    icon: "/images/slider/icon3.png",
    image: "/images/slider/3.webp",
    href: "/protocol/performance",
  },
  {
    title: "Insta crypto transfer",
    icon: "/images/slider/icon2.png",
    image: "/images/slider/2.png",
    href: "/protocol",
  },
] as const;

// ---- AI Advantage perks (from robot section) ----

export interface AiPerk {
  readonly title: string;
  readonly description: string;
}

export const AI_PERKS: readonly AiPerk[] = [
  {
    title: "Seamless AI-Agent Integration",
    description:
      "Connect any AI agent and run workflows on Xhavic without friction.",
  },
  {
    title: "Automated on-chain actions",
    description:
      "Agents can monitor conditions and trigger trades, payments, rebalancing, and verification — fast on L2, secured by Ethereum.",
  },
  {
    title: "Built for AI-native dApps",
    description:
      "EVM-compatible, scalable infrastructure designed for real-world AI + Web3 products.",
  },
] as const;

// ---- Developer page feature cards ----

export interface DevFeature {
  readonly title: string;
  readonly description: string;
  readonly highlights: readonly {
    readonly label: string;
    readonly detail: string;
  }[];
  readonly badge: string;
}

export const DEV_FEATURES: readonly DevFeature[] = [
  {
    title: "EVM Compatibility",
    description:
      "Deploy Solidity and Vyper smart contracts without code changes. Existing Ethereum tools and libraries work out of the box.",
    highlights: [
      { label: "Zero rewrites", detail: "Ship with the same code and workflows." },
      { label: "Tooling ready", detail: "Wallets, libraries, and infra integrate fast." },
    ],
    badge: "Out of the box",
  },
  {
    title: "Low Fees and High TPS",
    description:
      "Significantly lower execution fees with high TPS performance — built for scalable DeFi, real-time trading, and gaming applications.",
    highlights: [
      { label: "Scalable UX", detail: "Cheap execution makes high-frequency actions practical." },
      { label: "Real-time apps", detail: "Trading, games, and dApps with instant feedback." },
    ],
    badge: "Throughput",
  },
  {
    title: "NFT and Token Standards Supported",
    description:
      "Supports ERC-20, ERC-721, ERC-1155 and related infrastructure. Metadata, minting, and marketplace interactions work with minimal friction.",
    highlights: [
      { label: "Standards native", detail: "Tokens + NFTs behave as expected across tooling." },
      { label: "Marketplace-ready", detail: "Smooth mint + list + trade flows." },
    ],
    badge: "Ecosystem",
  },
  {
    title: "AI-Agentic MCP Support",
    description:
      "Supports MCP-style multi-chain agentic execution — autonomous contract agents, automated strategies, and AI-driven DeFi primitives.",
    highlights: [
      { label: "Autonomous agents", detail: "Execute actions and strategies on-chain." },
      { label: "Multi-chain workflows", detail: "Coordinate liquidity + actions across networks." },
    ],
    badge: "Agentic",
  },
  {
    title: "RWA-Compliant Infrastructure",
    description:
      "Build tokenized real estate, commodities, digital securities, and compliance-driven products with institutional workflows and auditability.",
    highlights: [
      { label: "Institution-ready", detail: "Audit trails + compliance-first design patterns." },
      { label: "Tokenize RWAs", detail: "Real estate, commodities, and securities flows." },
    ],
    badge: "Compliance",
  },
  {
    title: "On-Ramp and Off-Ramp Integration",
    description:
      "Build consumer-friendly experiences that connect banking rails to Web3 dApps without extra middleware.",
    highlights: [
      { label: "Bank rails to Web3", detail: "Simplify deposits and withdrawals for users." },
      { label: "No middleware pain", detail: "Fewer moving parts, faster integrations." },
    ],
    badge: "UX",
  },
  {
    title: "Secure Wallet Integration",
    description:
      "Wallet applications with time-based security features for safer signing, bridging, and transaction batching.",
    highlights: [
      { label: "Time-based safety", detail: "Extra protection window for sensitive actions." },
      { label: "Batch + bridge", detail: "Safer signing for complex multi-step flows." },
    ],
    badge: "Security",
  },
] as const;

// ---- Tooling ecosystem (developer page ticker) ----

export const TOOLING_ROW_1 = [
  "Solidity",
  "Vyper",
  "Hardhat",
  "Foundry",
  "Truffle",
  "Remix",
] as const;

export const TOOLING_ROW_2 = [
  "Ethers.js",
  "Web3.js",
  "Wagmi",
  "MetaMask",
  "WalletConnect",
  "Hardware Wallets",
] as const;

// ---- Xhavic Labs incubator cards ----

export interface LabsCard {
  readonly title: string;
  readonly description: string;
}

export const LABS_CARDS: readonly LabsCard[] = [
  {
    title: "Technical guidance",
    description: "Architecture, smart contract patterns, scalability, and best practices.",
  },
  {
    title: "Security reviews",
    description: "Threat modeling, audits, testing, and launch readiness checks.",
  },
  {
    title: "Dev tooling",
    description: "SDKs, templates, CI/CD pipelines, and reliable dev workflows.",
  },
  {
    title: "Go-to-market support",
    description: "Positioning, launch strategy, community, and growth playbooks.",
  },
  {
    title: "Liquidity pathways",
    description: "Access routes for liquidity, partners, and ecosystem integrations.",
  },
] as const;

// ---- Get Started tabs ----

export interface GetStartedItem {
  readonly key: string;
  readonly tabLabel: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly ctaText: string;
  readonly href: string;
  readonly image: string;
}

export const GET_STARTED_ITEMS: readonly GetStartedItem[] = [
  {
    key: "users",
    tabLabel: "Users",
    icon: "/images/get-started/icon-1.png",
    title: "Users",
    description: "Explore applications running on Xhavic.",
    ctaText: "Explore apps",
    href: "/ecosystem",
    image: "/images/get-started/3.jpg",
  },
  {
    key: "devs",
    tabLabel: "Developers",
    icon: "/images/get-started/icon-2.png",
    title: "Developers",
    description: "Read the documentation and deploy contracts.",
    ctaText: "Read docs",
    href: "/docs",
    image: "/images/get-started/2.jpg",
  },
  {
    key: "enterprise",
    tabLabel: "Enterprises",
    icon: "/images/get-started/icon-3.png",
    title: "Enterprises",
    description: "Contact the team for integration support.",
    ctaText: "Contact team",
    href: "/enterprises",
    image: "/images/get-started/1.jpg",
  },
] as const;
