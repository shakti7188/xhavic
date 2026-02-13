// ---------------------------------------------------------------------------
// Use cases — card data for the use-cases section
// ---------------------------------------------------------------------------

export interface UseCase {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly href: string;
}

export const USE_CASES: readonly UseCase[] = [
  {
    tag: "DeFi & Trading",
    title: "Decentralized Finance (DeFi) Apps",
    description:
      "Lending, swapping, stablecoins, derivatives, and structured products benefit from predictable, low-cost execution. High throughput enables real-time trading and automated strategies on Layer 2.",
    image: "/images/use-cases/defi.webp",
    href: "/ecosystem",
  },
  {
    tag: "Tokenized Assets",
    title: "Tokenized Assets",
    description:
      "Real estate, commodities, identity systems, and digital securities require secure settlement with fast execution. Xhavic provides the compliant, auditable infrastructure for tokenizing real-world assets.",
    image: "/images/use-cases/tokenized-assets.avif",
    href: "/enterprises",
  },
  {
    tag: "AI Agent Applications",
    title: "AI Agent Applications",
    description:
      "Autonomous AI agents can monitor on-chain conditions and trigger trades, payments, rebalancing, and verification. Xhavic's low fees and fast execution make it ideal for high-frequency agentic workloads powered by MCP-style multi-chain execution.",
    image: "/images/use-cases/ai-agents.webp",
    href: "/developers",
  },
  {
    tag: "Institutional & RWA",
    title: "Institutional & RWA",
    description:
      "Enterprise and institutional participants can build compliance-driven products with audit trails, on-ramp / off-ramp connectivity, and institutional-grade workflows for digital securities, commodities, and real estate on Ethereum-secured infrastructure.",
    image: "/images/use-cases/institutional-rwa.webp",
    href: "/enterprises",
  },
  {
    tag: "Gaming & NFTs",
    title: "Gaming & NFTs",
    description:
      "On-chain games, NFT marketplaces, and digital collectibles demand instant transactions at minimal cost. Xhavic's sub-second soft finality and $0.04 fees enable real-time in-game economies and seamless NFT minting, trading, and staking.",
    image: "/images/use-cases/gaming-nfts.webp",
    href: "/ecosystem",
  },
] as const;
