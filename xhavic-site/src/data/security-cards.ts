// ---------------------------------------------------------------------------
// Security model — five security card entries
// ---------------------------------------------------------------------------

export interface SecurityCard {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  /** CSS modifier class used for bento-grid layout variants */
  readonly layoutClass: string;
}

export const SECURITY_CARDS: readonly SecurityCard[] = [
  {
    id: "fraud-proofs",
    title: "Fraud Proofs",
    description:
      "Execution is verified through an optimistic fraud-proof mechanism. State transitions are assumed valid unless challenged within the dispute window. Any observer can submit a fraud proof to Ethereum if an invalid state root is detected, ensuring correctness without requiring every node to re-execute every transaction.",
    image: "/images/security/1.webp",
    layoutClass: "is-lock",
  },
  {
    id: "data-publication",
    title: "Ethereum Data Publication",
    description:
      "Transaction data is published to Ethereum in compressed batches, ensuring full data availability on L1. This allows independent verification of state transitions and guarantees that the rollup state can always be reconstructed from Ethereum data alone.",
    image: "/images/security/2.webp",
    layoutClass: "is-data",
  },
  {
    id: "trust-minimized-settlement",
    title: "Trust-Minimized Settlement",
    description:
      "Final settlement occurs on Ethereum, removing the need to trust any single sequencer or operator. The combination of on-chain data availability and fraud-proof dispute resolution means users retain Ethereum-grade security guarantees for their assets and transactions.",
    image: "/images/security/3.webp",
    layoutClass: "is-engine",
  },
  {
    id: "transparent-state-transitions",
    title: "Transparent State Transitions",
    description:
      "Every state transition is deterministic and publicly verifiable. State roots are posted on-chain, and the complete execution trace can be audited by anyone. This transparency ensures that no hidden or unauthorized changes to the rollup state can occur.",
    image: "/images/security/4.webp",
    layoutClass: "is-payments",
  },
  {
    id: "censorship-resistance",
    title: "Censorship Resistance",
    description:
      "Xhavic incorporates forced-inclusion mechanisms that allow users to submit transactions directly to Ethereum L1 if the Layer 2 sequencer is unresponsive or censoring. This ensures that no single party can prevent users from accessing or withdrawing their assets.",
    image: "/images/security/5.webp",
    layoutClass: "is-more",
  },
] as const;
