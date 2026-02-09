// ---------------------------------------------------------------------------
// FAQ — Questions and answers (whitepaper-accurate)
// ---------------------------------------------------------------------------

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "What is Xhavic?",
    answer:
      "Xhavic is an Ethereum Layer 2 network built on optimistic rollup architecture. It executes transactions off-chain for speed and low cost, then posts transaction data and state commitments to Ethereum for final settlement and security. The result is EVM-compatible execution with significantly lower fees and higher throughput than Ethereum mainnet.",
  },
  {
    question: "Is Xhavic a sidechain?",
    answer:
      "No. Sidechains operate their own independent consensus mechanism and do not inherit Ethereum security. Xhavic is an optimistic rollup: it publishes compressed transaction data to Ethereum L1 and relies on Ethereum for data availability, settlement, and dispute resolution through fraud proofs. This means Xhavic inherits Ethereum's security guarantees rather than maintaining a separate validator set.",
  },
  {
    question: "Does Xhavic require a new wallet?",
    answer:
      "No. Xhavic is fully EVM-compatible, so any Ethereum wallet such as MetaMask, WalletConnect-supported wallets, or hardware wallets can connect by simply adding the Xhavic network. No new software or seed phrases are required. Xhavic also introduces a Dual Wallet System with an Instant Wallet for real-time transactions and a Funding Wallet with a 24-hour safety window for larger transfers.",
  },
  {
    question: "Can developers deploy existing contracts?",
    answer:
      "Yes. Because Xhavic maintains full EVM compatibility, developers can deploy existing Solidity and Vyper smart contracts without modification. Standard tooling including Hardhat, Foundry, Truffle, Remix, Ethers.js, and Web3.js works out of the box. No code rewrites or new languages are needed.",
  },
  {
    question: "Why is it cheaper than Ethereum?",
    answer:
      "Xhavic processes transactions off-chain on Layer 2 and batches them before posting compressed data to Ethereum. This amortizes the L1 gas cost across many transactions. Users pay only the L2 execution cost plus a small share of the L1 data publication cost, resulting in average fees around $0.04 compared to several dollars on Ethereum mainnet.",
  },
  {
    question: "How is security maintained?",
    answer:
      "Security is inherited from Ethereum through multiple mechanisms: transaction data is published to Ethereum for verification, state commitments are posted on-chain, and a fraud-proof challenge window allows any observer to dispute invalid state transitions. Settlement is trust-minimized, and forced inclusion via Ethereum ensures censorship resistance.",
  },
  {
    question: "What is the Dual Wallet System?",
    answer:
      "The Dual Wallet System is a security architecture unique to Xhavic. It consists of two wallet layers: the Instant Wallet, which handles real-time transactions with immediate execution, and the Funding Wallet, which provides a 24-hour safety window allowing users to cancel or reverse transfers in case of errors, compromised keys, or suspicious activity. This design adds a human-recoverable safety net on top of standard blockchain finality.",
  },
] as const;
