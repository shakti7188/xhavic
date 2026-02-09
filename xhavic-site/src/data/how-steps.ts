// ---------------------------------------------------------------------------
// How It Works — four-step accordion data
// ---------------------------------------------------------------------------

export interface HowStep {
  readonly step: number;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly preview: string;
}

export const HOW_STEPS: readonly HowStep[] = [
  {
    step: 1,
    title: "Transact on Xhavic",
    description:
      "Users swap, mint, send, pay, or interact with dApps on Xhavic for fast, low-cost execution. Transactions are confirmed in seconds with fees averaging $0.04, making high-frequency actions practical for everyday users and applications.",
    icon: "/images/how/icon-1.png",
    preview: "/images/how/1.webp",
  },
  {
    step: 2,
    title: "Execute and bundle",
    description:
      "Xhavic runs transactions on Layer 2, then bundles many of them into compressed batches. This increases throughput and reduces per-transaction costs by amortizing Ethereum data publication fees across the entire batch.",
    icon: "/images/how/icon-2.png",
    preview: "/images/how/2.png",
  },
  {
    step: 3,
    title: "Anchor to Ethereum",
    description:
      "Each batch generates a state commitment that is posted to Ethereum, using Ethereum as the settlement and data-availability layer. This anchoring ensures that all Xhavic state transitions are independently verifiable on L1.",
    icon: "/images/how/icon-3.png",
    preview: "/images/how/3.png",
  },
  {
    step: 4,
    title: "Secure finality, bridge, and automate",
    description:
      "Bridging keeps assets usable across networks by moving tokens between Ethereum and Xhavic seamlessly. AI agents can automate on-chain actions like trading, payments, rebalancing, and verification while execution happens on Xhavic's low-cost Layer 2.",
    icon: "/images/how/icon-4.png",
    preview: "/images/how/4.webp",
  },
] as const;

export const HOW_SECTION_META = {
  heading: "How Xhavic Works",
  subheading:
    "Xhavic is built on optimistic rollup architecture. Transactions are processed off-chain by the Xhavic network and periodically submitted to Ethereum for final settlement.",
  ctaText: "Get started",
  ctaHref: "/developers",
  defaultPreview: "/images/how/default.png",
} as const;
