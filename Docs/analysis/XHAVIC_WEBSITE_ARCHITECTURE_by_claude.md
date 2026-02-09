# XHAVIC — Website & Documentation Architecture
## Master Source of Truth · v1.0 · February 2026

**Document purpose:** This file is the single authoritative reference for all design, content, and engineering decisions related to xhavic.org and docs.xhavic.org. Everything flows from here.

**Source of truth for protocol claims:** XHAVIC Technical Whitepaper v1.0, January 2026. No claim on the website may contradict or exceed the whitepaper. If it's not in the whitepaper, it does not go on the site.

---

## TABLE OF CONTENTS

1. [Positioning & Narrative](#1-positioning--narrative)
2. [Audience Segmentation](#2-audience-segmentation)
3. [Complete Sitemap](#3-complete-sitemap)
4. [Page-by-Page Architecture](#4-page-by-page-architecture)
5. [Wireframe Logic](#5-wireframe-logic)
6. [Content Rules](#6-content-rules)
7. [Design Constraints](#7-design-constraints)
8. [Evaluation of Associate Input](#8-evaluation-of-associate-input)
9. [Final Checklist](#9-final-checklist)

---

## 1. POSITIONING & NARRATIVE

### 1.1 One-Line Positioning

> **Xhavic is an Ethereum Layer-2 execution network that separates fast DeFi from institutional safety at the protocol level.**

This is not a tagline. It is the positioning anchor. Every page, every diagram, every CTA must trace back to this sentence.

### 1.2 Core Mental Model

**Ethereum = security and finality.**
**Xhavic = execution and risk differentiation.**

Ethereum settles. Xhavic executes. The mental model for every visitor must be: "Xhavic adds speed and cost efficiency to Ethereum without asking me to trust a new security model."

This is the same model Arbitrum and Optimism use — but Xhavic adds a third dimension: **risk-appropriate execution paths**. This is the Dual Wallet System, and it is what creates a new category.

### 1.3 The Category Xhavic Creates

Every existing L2 treats every transaction identically — same pipeline, same finality model, same risk profile. Xhavic is the first L2 to implement **protocol-level transaction risk routing**: two execution paths, separated at the sequencer, serving fundamentally different operational profiles within a single network.

**The category name: Risk-Differentiated Execution Network.**

This language must appear on the homepage, in the protocol section, and in developer documentation. It is not a feature. It is the architectural thesis.

### 1.4 Three Defensible Claims

These are the only claims the site should make prominently. Each is sourced directly from the whitepaper:

| Claim | Source | How to present |
|-------|--------|----------------|
| Dual Wallet System — two execution paths at the sequencer level | Whitepaper §8 | Diagram + table comparing Instant vs Secured |
| Native oracle + AI agent execution layer | Whitepaper §12 | Architecture diagram showing precompile access |
| Modular 6-layer architecture with independent upgradeability | Whitepaper §4 | Stacked layer diagram (already in whitepaper) |

### 1.5 What Xhavic Is NOT

The site must never position Xhavic as:
- A "blockchain for everything" (it is specifically an Ethereum execution layer)
- A competitor to Ethereum (it inherits from Ethereum)
- An L1 alternative
- A wallet product (the Dual Wallet System is a protocol mechanism, not an app)
- A chain-as-a-service platform (unlike Optimism's OP Stack positioning)

---

## 2. AUDIENCE SEGMENTATION

### 2.1 Four Primary Audiences

| Audience | What they need | Where they land | Primary action |
|----------|---------------|-----------------|----------------|
| **Developers** | Deploy contracts, read API docs, understand architecture | /developers → docs.xhavic.org | Deploy first contract |
| **Users** | Bridge assets, use dApps, understand wallet model | /users | Bridge to Xhavic |
| **Enterprises / Institutions** | Evaluate protocol for treasury, RWA, compliance use cases | /enterprises | Request technical brief |
| **Researchers / Ecosystem** | Understand protocol design, contribute, validate claims | /protocol → whitepaper | Read whitepaper / contribute |

### 2.2 Audience Separation Rules

- **Developers** and **Users** must never share the same page. A developer page that mentions "easy onboarding for beginners" loses credibility. A user page that mentions "precompile addresses" loses clarity.
- **Enterprises** get their own flow with different language (settlement, compliance, auditability, reversal window). No crypto jargon. No mentions of "aping in" or "yield farming."
- **Researchers** are served by the Protocol section and the whitepaper. This audience validates claims, so every number must be sourced and every diagram must be accurate.

### 2.3 Audience-to-Content Mapping

| Content type | Developers | Users | Enterprises | Researchers |
|-------------|------------|-------|-------------|-------------|
| Architecture diagrams | ✓ | — | Summary only | ✓ |
| Performance numbers | ✓ (with methodology) | ✓ (simplified) | ✓ (context) | ✓ (raw data) |
| Dual Wallet explanation | Technical spec | UX implications | Risk management value | Protocol design |
| Bridge documentation | Integration guide | Step-by-step | Custody workflow | Cross-chain proofs |
| Governance | Proposal process | Voting | Compliance alignment | Mechanism design |

---

## 3. COMPLETE SITEMAP

### 3.1 Primary Domain: xhavic.org

```
xhavic.org
├── / (Home)
├── /protocol
│   ├── /protocol/overview
│   ├── /protocol/architecture
│   ├── /protocol/dual-wallet
│   ├── /protocol/performance
│   └── /protocol/security
├── /developers
│   ├── /developers/get-started
│   ├── /developers/quickstart
│   └── /developers/tools
├── /users
│   ├── /users/get-started
│   └── /users/bridge
├── /enterprises
│   ├── /enterprises/overview
│   └── /enterprises/contact
├── /ecosystem
│   ├── /ecosystem/apps
│   └── /ecosystem/partners
├── /governance
├── /community
├── /blog
├── /media
├── /whitepaper (PDF download + HTML version)
├── /terms
├── /privacy
└── /risk-disclosure
```

### 3.2 Documentation Domain: docs.xhavic.org

**Platform recommendation:** Mintlify (used by Optimism) or Docusaurus (used by Arbitrum). Both support versioned docs, AI-powered search, audience-segmented navigation, and GitHub-based contribution workflows.

**Structural pattern:** Audience-based top navigation (like Optimism: Chain Operators / Node Operators / App Developers), with Quickstart → Guides → Tutorials → Tools → Reference sub-layers under each audience. Plus cross-cutting sections for protocol internals and general reference.

```
docs.xhavic.org
│
├── / (Landing Page — audience router)
│   ├── "I want to build apps" → /app-developers
│   ├── "I want to run a node" → /node-operators
│   ├── "I want to understand the protocol" → /how-xhavic-works
│   └── "I want to bridge assets" → /bridge
│
│
│ ══════════════════════════════════════════════════
│ TOP-LEVEL NAV TABS (always visible in sidebar)
│ ══════════════════════════════════════════════════
│
│
├── APP DEVELOPERS (/app-developers)
│   │
│   ├── Quickstart
│   │   ├── /app-developers/quickstart/overview
│   │   ├── /app-developers/quickstart/deploy-with-hardhat
│   │   ├── /app-developers/quickstart/deploy-with-foundry
│   │   └── /app-developers/quickstart/deploy-with-remix
│   │
│   ├── Guides
│   │   ├── /app-developers/guides/deploying-contracts
│   │   ├── /app-developers/guides/dual-wallet-integration
│   │   │   ├── Instant Wallet — composable DeFi contracts
│   │   │   └── Secured Wallet — escrow-aware contract patterns
│   │   ├── /app-developers/guides/using-oracle-precompiles
│   │   │   ├── Reading price feeds via precompile (0x..F0–FF)
│   │   │   ├── Supported oracle data sources
│   │   │   └── Handling oracle data in Solidity
│   │   ├── /app-developers/guides/building-ai-agents
│   │   │   ├── Deterministic execution guarantees
│   │   │   ├── Programmatic wallet control
│   │   │   ├── Gas-metered compute budgeting
│   │   │   └── Multi-step strategy patterns
│   │   ├── /app-developers/guides/cross-chain-messaging
│   │   │   ├── L1 → L2 contract calls
│   │   │   ├── L2 → L1 contract calls
│   │   │   └── Message passing via bridge contracts
│   │   ├── /app-developers/guides/migrating-from-ethereum
│   │   ├── /app-developers/guides/migrating-from-other-l2s
│   │   ├── /app-developers/guides/estimating-transaction-costs
│   │   └── /app-developers/guides/handling-deposits-withdrawals
│   │
│   ├── Tutorials
│   │   ├── /app-developers/tutorials/build-a-dex-on-xhavic
│   │   ├── /app-developers/tutorials/build-an-escrow-contract (Secured Wallet)
│   │   ├── /app-developers/tutorials/oracle-powered-lending
│   │   ├── /app-developers/tutorials/automated-trading-agent
│   │   ├── /app-developers/tutorials/token-bridge-integration
│   │   └── /app-developers/tutorials/testing-with-local-node
│   │
│   ├── Tools
│   │   ├── /app-developers/tools/overview
│   │   ├── /app-developers/tools/block-explorer
│   │   ├── /app-developers/tools/testnet-faucet
│   │   ├── /app-developers/tools/sdks-and-libraries
│   │   │   ├── ethers.js configuration
│   │   │   ├── web3.py configuration
│   │   │   ├── wagmi / viem configuration
│   │   │   └── Xhavic-specific SDK (xhv_* methods)
│   │   ├── /app-developers/tools/indexing (The Graph, subgraphs)
│   │   └── /app-developers/tools/debugging-and-tracing
│   │
│   └── Reference
│       ├── /app-developers/reference/rpc-methods
│       │   ├── Standard Ethereum JSON-RPC (eth_*)
│       │   ├── Xhavic Oracle methods (xhv_getOraclePrice, xhv_getOracleFeeds)
│       │   └── Xhavic Bridge methods (xhv_getDepositStatus, xhv_getWithdrawalProof)
│       ├── /app-developers/reference/contract-addresses (testnet + mainnet)
│       ├── /app-developers/reference/gas-costs-and-fees
│       ├── /app-developers/reference/precompile-addresses
│       ├── /app-developers/reference/evm-differences (any deviations from L1)
│       ├── /app-developers/reference/error-codes
│       └── /app-developers/reference/chain-info (chain ID, RPC URLs, explorer)
│
│
├── NODE OPERATORS (/node-operators)
│   │
│   ├── Overview
│   │   ├── /node-operators/overview
│   │   └── /node-operators/node-types
│   │       ├── Full node (sequencer) — 16 cores, 64 GB, 2 TB NVMe
│   │       ├── Archive node (validator) — 8 cores, 32 GB, 4 TB HDD
│   │       └── Light client (RPC) — 4 cores, 8 GB, 100 GB
│   │
│   ├── Guides
│   │   ├── /node-operators/guides/run-a-full-node
│   │   ├── /node-operators/guides/run-a-validator-node
│   │   ├── /node-operators/guides/run-an-rpc-node
│   │   ├── /node-operators/guides/validator-staking-requirements
│   │   └── /node-operators/guides/monitoring-and-alerting
│   │
│   ├── Configuration
│   │   ├── /node-operators/configuration/execution-client
│   │   ├── /node-operators/configuration/consensus-client
│   │   ├── /node-operators/configuration/networking
│   │   └── /node-operators/configuration/hardware-requirements
│   │
│   └── Reference
│       ├── /node-operators/reference/validator-slashing-rules
│       │   (5% for offline, 25% for invalid fraud proof, 100% for double-signing)
│       ├── /node-operators/reference/sequencer-parameters
│       │   (block time, batch window, max block size, tx timeout)
│       └── /node-operators/reference/data-availability-specs
│
│
├── BRIDGE (/bridge)
│   │
│   ├── /bridge/overview
│   ├── /bridge/deposits (L1 → L2)
│   │   ├── How deposits work (lock on L1, mint WETH on L2)
│   │   ├── Deposit times and confirmation
│   │   └── Force-include via L1 (censorship resistance)
│   ├── /bridge/withdrawals (L2 → L1)
│   │   ├── Standard withdrawal (7-day challenge period)
│   │   ├── LP fast exit (instant, provider-backed)
│   │   └── Merkle inclusion proof submission
│   ├── /bridge/supported-tokens
│   ├── /bridge/bridge-contract-addresses
│   └── /bridge/troubleshooting
│
│
├── HOW XHAVIC WORKS (/how-xhavic-works)
│   │
│   ├── /how-xhavic-works/overview
│   │   (What is Xhavic, optimistic rollup primer, Ethereum settlement)
│   │
│   ├── Protocol Architecture
│   │   ├── /how-xhavic-works/architecture/overview (6-layer diagram)
│   │   ├── /how-xhavic-works/architecture/execution-layer
│   │   │   ├── EVM bytecode compatibility
│   │   │   ├── Gas semantics and cost model
│   │   │   ├── 256-bit word size, 1024 stack depth
│   │   │   └── Oracle precompile integration
│   │   ├── /how-xhavic-works/architecture/sequencer
│   │   │   ├── Transaction ordering and MEV mitigation
│   │   │   ├── Threshold encryption
│   │   │   ├── Time-weighted ordering
│   │   │   ├── Block production (2s block time)
│   │   │   ├── Batch submission (60s window)
│   │   │   └── Phase I (permissioned) → Phase II (multi-sequencer)
│   │   ├── /how-xhavic-works/architecture/settlement-layer
│   │   │   ├── CanonicalTransactionChain contract
│   │   │   ├── State root commitments
│   │   │   ├── Soft finality (2–5s) vs Ethereum finality (~13 min)
│   │   │   └── State commitment (modified Merkle-Patricia trie)
│   │   ├── /how-xhavic-works/architecture/data-availability
│   │   │   ├── Calldata posting to Ethereum
│   │   │   ├── Merkle commitments
│   │   │   ├── Redundant off-chain copies
│   │   │   └── State reconstruction time (5–10 min)
│   │   ├── /how-xhavic-works/architecture/oracle-ai-layer
│   │   │   ├── Hybrid oracle architecture (multi-source aggregation)
│   │   │   ├── Outlier detection and weighted averaging
│   │   │   ├── Precompile address range (0x00..F0–FF)
│   │   │   ├── AI agent execution model
│   │   │   └── Scope: protocol vs application layer
│   │   └── /how-xhavic-works/architecture/governance
│   │       ├── DAO structure (4 governance domains)
│   │       ├── On-chain execution (no off-chain multisig)
│   │       └── Progressive decentralization roadmap
│   │
│   ├── Deep Dives
│   │   ├── /how-xhavic-works/deep-dives/dual-wallet-system
│   │   │   ├── Protocol-level routing mechanism
│   │   │   ├── Instant Wallet specification
│   │   │   ├── Secured Wallet escrow mechanics
│   │   │   ├── Why composability and reversibility are mutually exclusive
│   │   │   └── Sequencer-level implementation details
│   │   ├── /how-xhavic-works/deep-dives/fraud-proofs
│   │   │   ├── Interactive bisection protocol
│   │   │   ├── Single honest participant property
│   │   │   ├── Challenge window (7 days)
│   │   │   └── On-chain verification of single EVM instruction
│   │   ├── /how-xhavic-works/deep-dives/transaction-lifecycle
│   │   │   ├── Submit → Validate → Order → Execute → Commit → Settle
│   │   │   ├── End-to-end latency breakdown
│   │   │   └── Censorship resistance (L1 force-include)
│   │   ├── /how-xhavic-works/deep-dives/state-model
│   │   │   ├── Account model (EOAs + contract accounts)
│   │   │   ├── State transitions: S(n+1) = Apply(S(n), T(n))
│   │   │   └── StateRoot computation
│   │   ├── /how-xhavic-works/deep-dives/mev-mitigation
│   │   │   ├── Threshold encryption
│   │   │   ├── Time-weighted ordering
│   │   │   ├── Oracle sequencing (feeds before user txs)
│   │   │   └── Transaction batching
│   │   └── /how-xhavic-works/deep-dives/cross-chain-interop
│   │       ├── L1 ↔ L2 message passing
│   │       ├── Bridge contract architecture (Figure 5)
│   │       └── Asynchronous cross-chain calls
│   │
│   └── Security
│       ├── /how-xhavic-works/security/model
│       │   (Defense-in-depth: 5 layers from crypto primitives to Ethereum settlement)
│       ├── /how-xhavic-works/security/threat-mitigation
│       │   (Sequencer censorship, state root manipulation, data withholding)
│       ├── /how-xhavic-works/security/cryptographic-primitives
│       │   (Keccak-256, ECDSA, ChaCha20-Poly1305, Merkle-Patricia Trie)
│       ├── /how-xhavic-works/security/validator-system
│       │   (Top 100 by stake, 95% uptime, slashing schedule)
│       └── /how-xhavic-works/security/audits
│
│
├── GOVERNANCE (/governance)
│   ├── /governance/overview
│   ├── /governance/dao-structure
│   ├── /governance/proposal-process
│   ├── /governance/voting-mechanism
│   └── /governance/progressive-decentralization
│
│
├── REFERENCE (cross-cutting, always accessible)
│   ├── /reference/protocol-parameters (full table from Whitepaper §A.2)
│   ├── /reference/contract-addresses (testnet + mainnet, from §A.3)
│   ├── /reference/glossary (from Whitepaper §A.1)
│   ├── /reference/whitepaper (PDF download + HTML render)
│   ├── /reference/network-information
│   │   ├── Chain ID
│   │   ├── RPC endpoints (mainnet, testnet)
│   │   ├── Block explorer URL
│   │   ├── Bridge URL
│   │   └── Faucet URL
│   └── /reference/differences-from-ethereum
│       (Any EVM deviations, gas semantics differences, oracle precompiles)
│
│
├── NOTICES (/notices)
│   └── Network upgrades, breaking changes, deprecations
│
│
└── RESOURCES
    ├── /resources/faq
    ├── /resources/contribute (GitHub contribution guide)
    └── /resources/community-links
```

#### 3.2.1 Docs Landing Page (docs.xhavic.org/)

Modeled on Arbitrum's approach: a single landing page that routes visitors by role with a table:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   Xhavic Documentation                                     │
│                                                             │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│   │ App          │  │ Node         │  │ How Xhavic   │    │
│   │ Developers   │  │ Operators    │  │ Works        │    │
│   │              │  │              │  │              │    │
│   │ Deploy smart │  │ Run full,    │  │ Protocol     │    │
│   │ contracts,   │  │ validator,   │  │ architecture,│    │
│   │ integrate    │  │ or RPC       │  │ security,    │    │
│   │ Dual Wallet, │  │ nodes        │  │ deep dives   │    │
│   │ use oracles  │  │              │  │              │    │
│   └──────┬───────┘  └──────┬───────┘  └──────┬───────┘    │
│          ↓                 ↓                 ↓             │
│   Quickstart          Run a Node       Overview            │
│                                                             │
│   ──────────────────────────────────────────────            │
│   Quick Links                                               │
│   Testnet Faucet | Bridge | Block Explorer | GitHub         │
│   Chain ID | RPC Endpoints | Contract Addresses             │
│   ──────────────────────────────────────────────            │
│                                                             │
│   ┌──────────────┐  ┌──────────────┐                       │
│   │ Bridge       │  │ Governance   │                       │
│   │ Deposits,    │  │ DAO,         │                       │
│   │ withdrawals, │  │ proposals,   │                       │
│   │ LP fast exit │  │ voting       │                       │
│   └──────────────┘  └──────────────┘                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

#### 3.2.2 Docs Navigation (Sidebar)

Top-level tabs in the sidebar (always visible, matching Optimism's pattern):

| Tab | Audience | Content depth |
|-----|----------|---------------|
| **App Developers** | Solidity/Vyper devs building dApps | Quickstart → Guides → Tutorials → Tools → Reference |
| **Node Operators** | Infrastructure operators | Setup → Configuration → Monitoring → Reference |
| **Bridge** | All users/devs who move assets | Deposits → Withdrawals → Supported Tokens → Troubleshooting |
| **How Xhavic Works** | Researchers, technical evaluators | Architecture → Deep Dives → Security |
| **Governance** | Token holders, DAO participants | Structure → Proposals → Voting |
| **Reference** | Everyone | Parameters → Contracts → Glossary → Network Info |
| **Notices** | Everyone | Upgrades, breaking changes |

#### 3.2.3 Docs Content Priorities (What to Write First)

**Phase 1 (pre-mainnet, must ship with site):**
1. App Developers → Quickstart (deploy with Hardhat, Foundry)
2. App Developers → Reference → RPC Methods (complete list)
3. App Developers → Reference → Chain Info (chain ID, RPC URLs)
4. App Developers → Reference → Contract Addresses
5. Bridge → Overview, Deposits, Withdrawals
6. How Xhavic Works → Overview
7. How Xhavic Works → Architecture → all 6 layers (one page each)
8. How Xhavic Works → Deep Dives → Dual Wallet System
9. How Xhavic Works → Security → Model
10. Reference → Protocol Parameters, Glossary, Network Information

**Phase 2 (post-mainnet, first 30 days):**
1. App Developers → Guides → Dual Wallet Integration
2. App Developers → Guides → Using Oracle Precompiles
3. App Developers → Guides → Building AI Agents
4. Node Operators → all pages
5. How Xhavic Works → Deep Dives → Fraud Proofs, Transaction Lifecycle, MEV Mitigation
6. Tutorials → all

**Phase 3 (ongoing):**
1. App Developers → Guides → Cross-Chain Messaging
2. Governance → all pages (when DAO launches in Phase II)
3. Tutorials → expand based on developer feedback
4. Reference → EVM Differences (document as discovered)

#### 3.2.4 Docs Features Required

| Feature | Why it matters | Implementation |
|---------|---------------|----------------|
| **AI-powered search** | Developers search, not browse. Optimism uses Mintlify's AI chat trained on their docs. | Mintlify AI or Algolia DocSearch |
| **Version selector** | Protocol will evolve; docs must support multiple versions | Built into Mintlify/Docusaurus |
| **Code block copy** | Developers copy-paste RPC configs, contract addresses | Default in both platforms |
| **Feedback per page** | "Was this page helpful?" + issue reporting | Mintlify native or GitHub Issues link |
| **API playground** | Interactive RPC method testing (like Alchemy's docs) | Phase 2, custom build or third-party |
| **Status page link** | Network status always visible | Link in top nav to status.xhavic.org |
| **GitHub edit link** | Every page links to its source for community contributions | Built into both platforms |
| **Dark mode** | Developer preference | Built into both platforms |

### 3.3 Top-Level Navigation (Desktop)

```
[ Protocol ▾ ]  [ Developers ]  [ Users ]  [ Enterprises ]  [ Ecosystem ]  [ Governance ]
                                                                    [ Docs ↗ ]  [ Bridge ↗ ]
```

**Protocol** dropdown:
- Overview
- Architecture
- Dual Wallet System
- Performance
- Security

**Docs** and **Bridge** are external links (docs.xhavic.org, bridge.xhavic.org). They open in new tabs.

### 3.4 Mobile Navigation

Hamburger menu with the same hierarchy, collapsible. No dropdown on mobile — all items are visible in a flat list within the menu drawer.

---

## 4. PAGE-BY-PAGE ARCHITECTURE

---

### 4.0 HOME (/)

**Purpose:** Establish what Xhavic is, why it exists, and route visitors to the correct audience path in under 10 seconds.

**Key sections (in order):**

1. **Hero**
   - Headline: One sentence that communicates risk-differentiated execution on Ethereum. Not generic "fast and cheap" language.
   - Subheadline: Two sentences max. Mention Dual Wallet System and Ethereum settlement explicitly.
   - Primary CTA: "Read the Protocol" → /protocol/overview
   - Secondary CTA: "Start Building" → docs.xhavic.org
   - Audience routing: Three links below — "For Developers" | "For Users" | "For Enterprises"

2. **What Xhavic Does (3-panel section)**
   - Panel 1: "Executes transactions off-chain" — reference execution layer
   - Panel 2: "Settles on Ethereum" — reference settlement layer
   - Panel 3: "Routes by risk profile" — reference Dual Wallet System
   - Diagram: Simplified version of the 6-layer architecture (Whitepaper Figure 1)

3. **The Dual Wallet System (hero-level feature section)**
   - This is NOT buried. It appears on the homepage as the primary feature explanation.
   - Two-column layout: Instant Wallet (left) vs Secured Wallet (right)
   - Table from Whitepaper Table 4 (confirmation time, reversibility, composability, target use case, settlement)
   - Diagram: Whitepaper Figure 4 adapted for web

4. **Performance Numbers**
   - Four metrics in a horizontal strip: 2,000+ TPS | $0.04 avg fee | <200ms latency | 2–5s soft finality
   - Footnote: "Testnet benchmarks, January 2026. Architecture supports 12,000 TPS current cap; 120,000+ with sharding."
   - Comparison table (Whitepaper Table 7): Xhavic vs Ethereum vs Arbitrum vs Optimism vs StarkNet

5. **Architecture Overview**
   - Six-layer diagram (Whitepaper Figure 1)
   - One sentence per layer. Link to /protocol/architecture for each.

6. **Use Cases (compact)**
   - Four cards: DeFi + Trading | Gaming | Institutional + RWA | Supply Chain + IoT
   - Each card: one sentence + link to /protocol/overview#use-cases

7. **Developer Quick-Start**
   - Code snippet showing RPC connection (ethers.js or Hardhat config)
   - Message: "Your Ethereum contracts work without changes."
   - CTA: "View Documentation" → docs.xhavic.org

8. **Footer**

**What must NOT be on the homepage:**
- Token price or tokenomics (no token details in whitepaper beyond governance mentions)
- "Join our airdrop" or speculative language
- Unsubstantiated claims ("the fastest L2" without context)
- On-ramp/off-ramp messaging (not in the whitepaper)
- "Xhavic Labs" incubator (not in the whitepaper)

**Primary CTA:** Read the Protocol
**Secondary CTA:** Start Building

---

### 4.1 PROTOCOL OVERVIEW (/protocol/overview)

**Purpose:** Explain what Xhavic is at a technical level for anyone who wants to understand the protocol before committing further.

**Key sections:**
1. What is Xhavic — paragraph explaining optimistic rollup, L2 execution, Ethereum settlement
2. Why Another L2 — the specific gaps (risk-uniform execution, bolted-on oracles, no AI-native support)
3. Design Philosophy — five principles from Whitepaper §3: Ethereum alignment, security inheritance, modularity, progressive decentralization, practical focus
4. What Makes Xhavic Different — three differentiators with links to deep-dive pages
5. Development Roadmap — Whitepaper Figure 12 (Phase I–IV timeline)
6. Challenges and Limitations — directly from Whitepaper §20 (DA costs, withdrawal latency, sequencer centralization in Phase I, bridge complexity)

**What must be explained:** Why an optimistic rollup vs ZK, what "Ethereum-settled security" means concretely, why progressive decentralization is the honest approach.

**What must NOT be said:** That Xhavic is "better than" specific competitors in absolute terms. The comparison table uses numbers; the prose does not make subjective comparative claims.

**Primary CTA:** Read the Whitepaper

---

### 4.2 ARCHITECTURE (/protocol/architecture)

**Purpose:** Technical deep-dive into the six-layer modular architecture.

**Key sections:**
1. Architecture diagram (Whitepaper Figure 1, full-width, interactive if possible)
2. One section per layer:
   - **Execution Layer** — EVM bytecode compatibility, gas cost comparison table (Whitepaper Table 1), 256-bit word size, oracle precompile range
   - **Sequencer Layer** — block time, batch window, max block size, tx timeout (Whitepaper Table 2). Phase I permissioned, Phase II multi-sequencer.
   - **Settlement Layer** — CanonicalTransactionChain contract, state root commitments, Ethereum finality
   - **Data Availability Layer** — calldata posting, Merkle commitments, redundant off-chain copies, 5–10 min reconstruction time
   - **Oracle & AI Agent Layer** — hybrid oracle architecture (Whitepaper Figure 8), precompile addresses, AI agent capabilities (Whitepaper Table 6)
   - **Governance Layer** — DAO structure (Whitepaper Figure 9), four governance domains
3. Modularity explanation — why independent upgradeability matters, with concrete examples

**Mandatory diagrams:** Architecture overview (Figure 1), Oracle pipeline (Figure 8), DAO structure (Figure 9)

**Primary CTA:** View Full Technical Docs → docs.xhavic.org/how-xhavic-works/architecture/overview

---

### 4.3 DUAL WALLET SYSTEM (/protocol/dual-wallet)

**Purpose:** This is the most important page on the entire site. It explains the feature that creates the new category.

**Key sections:**
1. **The Problem** — why treating a $50 swap and a $5M treasury move identically is bad protocol design. Use the exact framing from Whitepaper §8.
2. **How It Works** — sequencer-level routing based on originating wallet type. This is a protocol mechanism, not a UI feature.
3. **Instant Wallet**
   - Confirmation: <200ms soft finality
   - Irreversible — composability requires finality
   - Use cases: DEX trades, perpetuals, liquidations, arbitrage, AI agent operations
   - Diagram: Whitepaper Figure 4 (left path)
4. **Secured Wallet**
   - 24-hour cryptographic escrow
   - Reversal via multi-sig or threshold signature during window
   - Non-composable until finalized (deliberate design choice)
   - Use cases: Treasury operations, institutional settlement, RWA transfers
   - Diagram: Whitepaper Figure 4 (right path)
5. **Comparison Table** — Whitepaper Table 4 (side by side)
6. **Why Not Both in One Wallet?** — Explain why composability and reversibility are mutually exclusive at the protocol level
7. **Developer Integration** — link to docs.xhavic.org/app-developers/guides/dual-wallet-integration

**What must NOT be said:**
- That the Secured Wallet is a "safety net" (it's a deliberate execution path, not a backup)
- That users can "toggle" between modes (the wallet type determines the path; it's architectural)
- Any comparison to multisig wallets (this is sequencer-level, not application-level)

**Mandatory diagrams:** Full dual-path comparison (Figure 4), escrow lifecycle flow

**Primary CTA:** Build with Dual Wallets → docs.xhavic.org/app-developers/guides/dual-wallet-integration

---

### 4.4 PERFORMANCE (/protocol/performance)

**Purpose:** Present verifiable performance data with full context.

**Key sections:**
1. **Headline Numbers** — 2,000+ TPS, $0.04 avg fee, <200ms latency, 2–5s soft finality
2. **Methodology Note** — "These are testnet benchmarks from January 2026. They are not theoretical projections."
3. **Network Comparison** — Whitepaper Table 7 (Xhavic vs Ethereum vs Arbitrum vs Optimism vs StarkNet)
4. **Cost Analysis** — Whitepaper Table 8 (per-operation cost: simple transfer, token swap, NFT mint, contract deployment)
5. **Gas Cost Reduction** — Whitepaper Table 1 (SSTORE, SLOAD, TX base, CREATE2)
6. **Scalability Path** — Whitepaper Figure 11 (20× compress × 8× batch × 5× parallel = 800× = 12K TPS; × 10× shard = 120K TPS)
7. **Infrastructure Requirements** — Whitepaper Table 9 (node types, hardware specs, monthly costs)
8. **Transaction Flow** — Whitepaper Figure 3 (6-step pipeline, <200ms)
9. **Finality Model** — soft finality (2–5s), Ethereum finality (~13 min), explanation of what each means

**What must NOT be said:**
- "Fastest L2" without qualification
- Projected numbers presented as current numbers
- Comparisons that omit methodology differences

**Mandatory diagrams:** TPS bar chart (Figure 10), scalability multiplier diagram (Figure 11), transaction pipeline (Figure 3)

**Primary CTA:** Deploy and Test → docs.xhavic.org/app-developers/quickstart/overview

---

### 4.5 SECURITY (/protocol/security)

**Purpose:** Explain the security model with enough rigor to satisfy researchers and enough clarity to reassure institutional evaluators.

**Key sections:**
1. **Security Model** — defense-in-depth diagram (Whitepaper Figure 6), five layers explained
2. **Fraud Proofs** — interactive bisection protocol (Whitepaper Figure 7), "one honest participant" property
3. **Validator System** — top 100 by stake, 95% uptime requirement, slashing schedule (Whitepaper Table 3)
4. **Threat Mitigation** — three vectors addressed: sequencer censorship, state root manipulation, data withholding
5. **Cryptographic Primitives** — Whitepaper Table 5 (Keccak-256, ECDSA, ChaCha20-Poly1305, Merkle-Patricia Trie)
6. **Censorship Resistance** — force-include via L1, sequencer slashing, 10× cost but permanent availability
7. **Audit Status** — current audit state (to be filled by client)

**What must NOT be said:**
- "Unhackable" or "100% secure"
- Claims about audit results before audits are complete

**Mandatory diagrams:** Defense-in-depth rings (Figure 6), bisection protocol (Figure 7)

**Primary CTA:** Read Security Documentation → docs.xhavic.org/how-xhavic-works/security/model

---

### 4.6 DEVELOPERS (/developers)

**Purpose:** Convince an Ethereum developer that migration requires zero new learning and provide immediate onboarding.

**Key sections:**
1. **Hero** — "Your Ethereum contracts run on Xhavic without changes."
2. **EVM Compatibility** — bytecode-level equivalence, Ethereum Yellow Paper spec adherence. Supported tools: Hardhat, Foundry, Remix, ethers.js, web3.py, MetaMask.
3. **What's New** — Xhavic-specific RPC methods (xhv_getOraclePrice, xhv_getOracleFeeds, xhv_getDepositStatus, xhv_getWithdrawalProof) from Whitepaper Table 11
4. **Quick Deploy** — code snippet: Hardhat config pointing to Xhavic RPC, deploy command, verify on explorer
5. **Dual Wallet Integration** — how to target Instant vs Secured wallet execution paths in contract design
6. **Oracle Access** — precompile addresses (0x00…00F0–0xFF), direct reads, no external contracts needed
7. **AI Agent Development** — deterministic ordering, programmatic wallets, gas-metered compute (Whitepaper Table 6)
8. **Resources Grid** — links to: Documentation, RPC Endpoints, Contract Addresses, Testnet Faucet, Block Explorer, GitHub

**What must NOT be on this page:**
- "Easy for beginners" messaging
- On-ramp/off-ramp discussion
- NFT-specific marketing language
- Mention of "Xhavic Labs" (does not exist in the whitepaper)

**Primary CTA:** Read the Docs → docs.xhavic.org

---

### 4.7 USERS (/users)

**Purpose:** Help a person who already uses Ethereum or other L2s understand how to start using Xhavic applications.

**Key sections:**
1. **Hero** — "Same wallet. Lower fees. Two ways to transact."
2. **What Changes for You** — three differences: lower fees ($0.04 avg), faster confirmation (<200ms), choice of execution path (Instant or Secured)
3. **The Dual Wallet Explained (for users)** — non-technical explanation. Instant = for everyday DeFi. Secured = for large transfers with a 24-hour safety window.
4. **Getting Started**
   - Step 1: Connect your existing Ethereum wallet (MetaMask, WalletConnect, hardware wallets)
   - Step 2: Add Xhavic network (RPC details)
   - Step 3: Bridge assets from Ethereum (link to bridge.xhavic.org)
   - Step 4: Use applications on Xhavic
5. **Bridging** — deposits (L1→L2, minutes), withdrawals (L2→L1, 7-day challenge period or LP fast exit). Sourced from Whitepaper §7.2 and §9.1.
6. **FAQ** (user-focused)
   - Do I need a new wallet? No.
   - Is Xhavic a sidechain? No. It posts data to Ethereum.
   - Why do withdrawals take 7 days? Security mechanism. LP fast exit available.
   - What's the Secured Wallet? A 24-hour escrow for high-value transactions.

**What must NOT be on this page:**
- Technical architecture details
- Precompile addresses or RPC method names
- Contract deployment guides
- Tokenomics or airdrop language

**Primary CTA:** Bridge to Xhavic → bridge.xhavic.org

---

### 4.8 ENTERPRISES (/enterprises)

**Purpose:** Address institutional decision-makers evaluating Xhavic for treasury operations, RWA tokenization, or regulated financial workflows.

**Key sections:**
1. **Hero** — "Protocol-level transaction safety for institutional operations on Ethereum."
2. **The Secured Wallet for Institutions** — 24-hour reversal window, multi-sig authentication, non-composable by design, L1 settlement after escrow
3. **RWA-Ready Architecture** — compliance-friendly design, tokenized asset support, auditable state transitions via Ethereum settlement
4. **Operational Profile**
   - Settlement: Ethereum-secured state roots
   - Execution cost: $0.04 average per transaction
   - Throughput: 2,000+ TPS (12,000 current cap, 120,000+ with sharding)
   - Latency: <200ms execution, 2–5s soft finality, ~13 min Ethereum finality
5. **Use Cases**
   - Treasury management with reversal protection
   - Tokenized securities settlement
   - Institutional DeFi with compliance modules
   - Supply chain verification
6. **Integration Path** — EVM compatible, standard tooling, no new developer stack required
7. **Contact** — technical evaluation request form

**What must NOT be on this page:**
- Retail DeFi language ("yield farming," "aping")
- Speculative token language
- Unaudited security claims
- Promise of regulatory compliance (Xhavic provides infrastructure; compliance is the application layer's responsibility)

**Primary CTA:** Request Technical Brief → contact form

---

### 4.9 ECOSYSTEM (/ecosystem)

**Purpose:** Showcase applications, integrations, and partners building on Xhavic.

**Key sections:**
1. Directory of live applications (filterable by category: DeFi, Gaming, RWA, Infrastructure, Tools)
2. Partner logos (only verified integrations)
3. "Build on Xhavic" CTA for developers

**Note:** This page may be sparse at launch. That is acceptable. An empty ecosystem page with honest labeling ("Coming Soon") is better than a fabricated one.

**Primary CTA:** Deploy Your dApp → docs.xhavic.org/app-developers/quickstart/overview

---

### 4.10 GOVERNANCE (/governance)

**Purpose:** Explain the DAO structure and governance transition plan.

**Key sections:**
1. Governance model — DAO with token holder voting (Whitepaper §13, Figure 9)
2. Four governance domains: protocol upgrades, sequencer policies, oracle parameters, treasury allocation
3. On-chain execution — no off-chain multisig backdoors
4. Progressive decentralization timeline — Phase I (permissioned sequencer), Phase II (multi-sequencer, DAO active)
5. How to participate (when DAO is live)

**What must NOT be said:**
- That the DAO is currently active if it isn't (Phase I is permissioned)
- Token value propositions

**Primary CTA:** Read Governance Documentation → docs.xhavic.org/governance/overview

---

### 4.11 COMMUNITY (/community)

**Purpose:** Channel visitors to communication platforms and contribution paths.

**Key sections:**
1. Communication channels: Discord, Telegram, Twitter/X, GitHub, Forum
2. Contribution paths: documentation, tooling, research, bug reports
3. Technical governance calls (schedule)
4. Newsletter signup

**Primary CTA:** Join Discord

---

### 4.12 MEDIA & BRAND KIT (/media)

**Purpose:** Provide journalists, researchers, and partners with standardized materials.

**Key sections:**
1. Brand assets: logos (light/dark, SVG/PNG), colors, typography, usage guidelines
2. Boilerplate description (sourced from whitepaper abstract, rewritten for press)
3. Architecture diagrams (approved for republication)
4. Press contact email
5. Download link for complete media kit (ZIP)

**Official boilerplate:**
> Xhavic is an Ethereum Layer-2 execution network built on optimistic rollup architecture. The protocol implements a Dual Wallet System — two execution paths separated at the sequencer level — enabling both composable DeFi operations and institutional-grade transactions with a 24-hour reversal window within a single network. Xhavic delivers 2,000+ TPS at $0.04 average cost with sub-200ms latency, full EVM bytecode compatibility, native oracle infrastructure, and AI agent execution support.

**Primary CTA:** Download Media Kit

---

## 5. WIREFRAME LOGIC

### 5.1 Information Hierarchy (all pages)

**Above the fold (first viewport):**
- Headline + subheadline
- One sentence that communicates what this page does
- Primary CTA
- No decorative imagery that pushes content below the fold

**Second viewport:**
- The primary explanation or diagram
- On the homepage, this is the Dual Wallet System
- On the protocol page, this is the architecture diagram

**Below the fold:**
- Supporting evidence (tables, comparisons, secondary diagrams)
- Related pages and cross-links
- Footer

### 5.2 Section Ordering Principle

Every page follows this sequence:
1. **Claim** — what we're saying
2. **Evidence** — diagram, table, or specification that supports it
3. **Implication** — what this means for the visitor's audience segment
4. **Action** — CTA to go deeper or take next step

### 5.3 Mandatory Diagram Locations

| Page | Diagram | Source |
|------|---------|--------|
| Home | 6-layer architecture (simplified) | Whitepaper Figure 1 |
| Home | Dual Wallet comparison | Whitepaper Figure 4 |
| /protocol/architecture | Full 6-layer architecture | Whitepaper Figure 1 |
| /protocol/dual-wallet | Dual execution paths | Whitepaper Figure 4 |
| /protocol/performance | TPS comparison bar chart | Whitepaper Figure 10 |
| /protocol/performance | Scalability multipliers | Whitepaper Figure 11 |
| /protocol/performance | Transaction pipeline | Whitepaper Figure 3 |
| /protocol/security | Defense-in-depth rings | Whitepaper Figure 6 |
| /protocol/security | Bisection protocol | Whitepaper Figure 7 |
| /enterprises | Cross-chain bridge | Whitepaper Figure 5 |
| docs: oracle layer | Hybrid oracle pipeline | Whitepaper Figure 8 |
| docs: governance | DAO structure | Whitepaper Figure 9 |

### 5.4 Table Usage Rules

- Every comparison table must include a source footnote
- Performance tables must note "testnet benchmarks, January 2026"
- Competitor data must be labeled with date of measurement
- Tables replace paragraphs wherever structured data is being presented

---

## 6. CONTENT RULES

### 6.1 Tone

**Infrastructure, not startup.** The writing style should read like documentation for a bridge engineering project, not a pitch deck for a seed round.

Reference tones:
- Arbitrum's technical documentation (good: precise, specific)
- Stripe's product pages (good: clear, confident, no hype)
- NOT: typical L2 landing pages with gradient text and "the future of finance" headlines

### 6.2 Language Constraints

**Never use:**
- "Revolutionary" / "groundbreaking" / "game-changing"
- "The future of [anything]"
- "Web3 Applications That Feel Instant and Affordable" (generic, says nothing specific)
- "Unlock" as a verb
- "Seamless" (everything claims to be seamless; nothing is)
- "Supercharge" / "turbocharge" / "next-level"
- "Ecosystem" as a standalone value proposition (it's a structural word, not a benefit)
- "MCP" or "Model Context Protocol" (this is not in the whitepaper and was fabricated in the associate's draft)

**Always use:**
- Specific numbers with sources
- Protocol-level terminology from the whitepaper
- "Execution network" (not "blockchain" or "platform")
- "Ethereum-settled" (not "Ethereum-secured" — the security is inherited through settlement)
- "Sequencer-level routing" when describing the Dual Wallet System

### 6.3 Claims Policy

| Claim type | Allowed? | How to present |
|------------|----------|----------------|
| Performance numbers from whitepaper | Yes | With "testnet, January 2026" footnote |
| Comparative claims vs competitors | Yes | Only with sourced data, no subjective ranking |
| "First L2 to implement [X]" | Only if verifiably true | Whitepaper-sourced differentiators only |
| Future capabilities (Phase II–IV) | Yes | Labeled as roadmap items, not current features |
| Security guarantees | Yes | Framed as inherited from Ethereum + fraud proofs |
| Regulatory compliance | No | Xhavic provides infrastructure; compliance is application-layer |

### 6.4 Number Presentation Rules

- All performance numbers include source and date
- Ranges are preferred over single numbers where uncertainty exists
- "2,000+ TPS" not "2,000 TPS" (the "+" is in the whitepaper)
- Cost comparisons include both absolute numbers and multipliers (e.g., "$0.04 — 500× cheaper than Ethereum L1")
- Scalability projections are clearly separated from current measurements

---

## 7. DESIGN CONSTRAINTS

### 7.1 Visual Identity

- **Background:** White or near-white (#FAFAFA). No dark mode for launch (it can be added later).
- **Primary accent:** One color only, used sparingly for CTAs and active states. Derived from Xhavic brand (client to confirm — the whitepaper uses a navy/dark blue for headers).
- **Typography:** One sans-serif family. Two weights maximum (regular, bold). No decorative fonts.
- **Spacing:** Generous whitespace. Content density should feel like a technical specification, not a marketing brochure.

### 7.2 Diagram Style

- Clean, geometric, flat
- Match the style established in the whitepaper (the existing diagrams are well-designed)
- Consistent color coding across all diagrams: one color per layer, carried throughout the site
- SVG format for web, with fallback PNG
- Interactive where possible (hover states on architecture diagram showing layer details)

### 7.3 What Must NOT Appear

- Gradient text
- 3D blockchain illustrations
- Stock photos of people looking at screens
- Animated particle backgrounds
- "Trusted by" logos of companies that haven't actually deployed on Xhavic
- Token charts or price tickers
- Countdown timers

### 7.4 Responsive Strategy

- Desktop-first design (primary audience is developers and institutional evaluators)
- Mobile must be fully functional but not the primary optimization target
- Tables convert to stacked cards on mobile
- Diagrams scale down with horizontal scroll where necessary

---

## 8. EVALUATION OF ASSOCIATE INPUT

### 8.1 What Was Kept (and Why)

| Element | Reason to keep | Modifications applied |
|---------|---------------|----------------------|
| Audience segmentation (Developers / Users / Enterprises) | Correct structural instinct | Added Researchers/Ecosystem as fourth audience |
| Footer structure concept (Build, Ecosystem, Resources, Legal) | Sound information architecture | Refined categories, removed fabricated items |
| FAQ section on homepage | Good UX pattern for reducing bounce | Rewritten with whitepaper-sourced answers |
| Media Kit page concept | Necessary for protocol credibility | Scoped to verified materials only |
| Community page concept | Required for ecosystem building | Stripped generic language, focused on contribution paths |
| Getting Started flow for users (wallet → RPC → bridge → dApps) | Correct user journey | Kept sequence, rewrote content |

### 8.2 What Was Removed or Corrected (and Why)

| Element | Problem | Action taken |
|---------|---------|-------------|
| **Hero headline: "Web3 Applications That Feel Instant and Affordable"** | Generic. Could describe any L2. Says nothing specific about Xhavic. | Replaced with positioning centered on Dual Wallet System and Ethereum settlement |
| **"MCP-style AI-agentic execution"** | MCP (Model Context Protocol) is not mentioned in the whitepaper. This is fabricated terminology. The whitepaper describes "native oracle and AI-agent layer" with specific capabilities. | Corrected to whitepaper terminology: native oracle precompile access, deterministic ordering, programmatic wallet control |
| **"On-Ramp and Off-Ramp Integration"** | Not mentioned anywhere in the whitepaper. This is an application-layer service, not a protocol feature. | Removed entirely from all pages |
| **"Xhavic Labs" incubator** | Does not exist in the whitepaper. Fabricated program with no backing commitment. | Removed entirely. Can be added if/when the client establishes this program. |
| **"Secure Wallet Application" / "time-based security features"** | Vague rewording of the Dual Wallet System that loses all technical specificity. Makes it sound like a wallet app feature, not a protocol mechanism. | Replaced with precise Dual Wallet System language sourced from Whitepaper §8 |
| **"AI-Agentic MCP Support" on developer page** | Wrong technology name. The developer page listed MCP as a supported standard, which it is not. | Corrected to: oracle precompile access, deterministic execution guarantees, programmatic wallet control, gas-metered compute |
| **Use Cases page as separate top-level page** | Use cases are supporting evidence for other pages, not a destination in themselves | Integrated into /protocol/overview and audience-specific pages |
| **"Supports ERC-20, ERC-721, ERC-1155"** | Trivially true of any EVM-compatible chain. Stating this is like a car company advertising that their car has wheels. | Removed as a feature claim. Mentioned only in docs as technical compatibility fact. |
| **"NFT and Token Standards Supported" as developer feature** | Generic EVM capability, not a differentiator | Removed from feature list |
| **"Loyalty, Rewards, and Consumer Finance" enterprise use case** | Not substantiated in the whitepaper. Too broad. | Removed. Enterprise use cases narrowed to whitepaper-sourced items. |
| **Generic security section on homepage** | Listed properties without explaining the mechanism | Replaced with specific references to fraud proofs, validator slashing, and forced inclusion |

### 8.3 What Was Missing Entirely and Added

| Element | Why it was missing | Why it matters |
|---------|-------------------|----------------|
| **Dual Wallet System as headline feature** | Associate treated it as a minor UX detail ("time-based security") instead of the core differentiator | It is literally the reason Xhavic exists in its current form (Whitepaper §8: "Pay attention to this section. It's the main reason Xhavic exists.") |
| **Protocol section with architecture deep-dive** | Associate had no dedicated protocol pages | Protocol transparency is table stakes for L2 credibility. Arbitrum, Optimism, and StarkNet all have extensive protocol documentation on their main site. |
| **Performance page with methodology** | Numbers were mentioned but without context, source, or methodology | Uncontextualized performance claims damage credibility. Every number needs a footnote. |
| **Security architecture page** | Only a brief mention of "fraud proofs" in the homepage | Security is the #1 concern for institutional evaluators and the primary axis of competition among L2s |
| **Challenges and Limitations** | Completely absent from associate's draft | Whitepaper §20 explicitly lists limitations. Omitting them from the site creates a credibility gap that technical audiences will immediately notice. |
| **Governance page** | No governance content at all | DAO governance is a core protocol component (Whitepaper §13). It must have its own page. |
| **docs.xhavic.org structure** | Only "Explore Documentation" CTAs with no actual structure | A protocol without organized documentation is not taken seriously. The docs domain is arguably more important than the marketing site. |
| **Whitepaper page** | No dedicated whitepaper page | The whitepaper is the source of truth. It needs a direct URL (xhavic.org/whitepaper) with both PDF download and HTML rendering. |
| **Competitive analysis framing** | No competitive context at all | The whitepaper includes a detailed comparison table (Table 10). Visitors will compare regardless; controlling that narrative is essential. |
| **Content rules and claims policy** | No content governance framework | Without explicit rules, the site will accumulate marketing language that contradicts the protocol's technical positioning |

---

## 9. FINAL CHECKLIST

### 9.1 What Designers Need

- [ ] Brand color palette confirmation from client (whitepaper uses navy/dark blue — is this official?)
- [ ] Typography selection (one sans-serif family, two weights)
- [ ] Icon set for six architecture layers (consistent style)
- [ ] Diagram redesign for web: Figures 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 from whitepaper
- [ ] Responsive breakpoints: desktop (1280px+), tablet (768–1279px), mobile (<768px)
- [ ] Table styling: header rows, alternating row shading, footnote placement
- [ ] CTA button styles: primary (filled), secondary (outlined), text link
- [ ] Code block styling for developer pages
- [ ] This architecture document as design source of truth

### 9.2 What Frontend Engineers Need

- [ ] This architecture document for routing and page structure
- [ ] docs.xhavic.org platform selection: **Mintlify** (recommended — used by Optimism, supports AI search, GitHub sync, audience tabs) or **Docusaurus** (used by Arbitrum, React-based, more customizable). Decision required before docs writing begins.
- [ ] SVG assets for all diagrams (from design team)
- [ ] RPC endpoint URLs for developer quick-start examples (from protocol team)
- [ ] Testnet faucet URL (from protocol team)
- [ ] Block explorer URL (from protocol team)
- [ ] Bridge application URL (bridge.xhavic.org — separate build or third-party)
- [ ] Status page setup (status.xhavic.org — Statuspage.io or Instatus)
- [ ] Analytics setup (privacy-respecting: Plausible or Fathom, not Google Analytics)
- [ ] SEO metadata for every page (title, description, OG images)

### 9.3 What Documentation Writers Need

- [ ] This architecture document — specifically §3.2 for full docs.xhavic.org structure
- [ ] Content priority phases (§3.2.3): Phase 1 = 10 pages pre-mainnet, Phase 2 = post-mainnet expansion, Phase 3 = ongoing
- [ ] XHAVIC Technical Whitepaper v1.0 as source of truth for all technical claims
- [ ] Content rules from §6 of this document
- [ ] Access to protocol team for technical verification of RPC methods, gas semantics, EVM differences
- [ ] Confirmed RPC method specifications (Whitepaper Table 11 is the starting point)
- [ ] Contract address list (testnet — Whitepaper §A.3 lists TBD addresses; mainnet when available)
- [ ] Protocol parameter reference (Whitepaper §A.2)
- [ ] Glossary terms (Whitepaper §A.1)
- [ ] Audience-role mapping: every page must target exactly one of {App Developers, Node Operators, Researchers}. No mixed-audience pages.
- [ ] Docs platform access and contribution workflow (GitHub repo → PR → review → deploy)
- [ ] Reference implementations: study docs.optimism.io (Mintlify, audience tabs) and docs.arbitrum.io (Docusaurus, role-based routing) for structural patterns

### 9.4 What the Client Must Approve Before Development Starts

1. **Positioning statement** (§1.1) — is "risk-differentiated execution network" the correct category?
2. **Sitemap** (§3) — are all pages accounted for? Any additions or removals?
3. **Homepage hierarchy** — is Dual Wallet System correctly prioritized as the #1 feature?
4. **Performance numbers** — are the whitepaper testnet benchmarks still current, or have they been updated?
5. **Roadmap dates** — are Phase I (Q1–Q2 2026) and Phase II (Q3–Q4 2026) still accurate?
6. **Brand assets** — colors, typography, logo files for designer handoff
7. **Content that doesn't exist in the whitepaper** — confirm whether any of the following should be added:
   - Xhavic Labs incubator program
   - On-ramp/off-ramp partnerships
   - Token launch details
   - Team page / leadership profiles
8. **Audit status** — is there an audit timeline to reference on the security page?
9. **Legal review** — terms, privacy policy, risk disclosure text
10. **Domain ownership** — xhavic.org, docs.xhavic.org, bridge.xhavic.org confirmed and configured?

---

## APPENDIX A: FOOTER STRUCTURE

```
PROTOCOL                    BUILD                       ECOSYSTEM                   COMPANY
Overview                    Documentation               Applications                Blog
Architecture                RPC Endpoints               Partners                    Governance
Dual Wallet System          GitHub                      Community                   Media Kit
Performance                 Testnet Faucet              Grants (when available)      Careers (when available)
Security                    Block Explorer                                           Contact
Whitepaper                  Bridge

LEGAL
Terms of Use  ·  Privacy Policy  ·  Risk Disclosure

© 2026 Xhavic Protocol Foundation. All rights reserved.
```

---

## APPENDIX B: SEO PAGE TITLES AND DESCRIPTIONS

| Page | Title | Meta Description |
|------|-------|-----------------|
| Home | Xhavic — Ethereum Layer-2 Execution Network | Xhavic is an Ethereum L2 with protocol-level risk routing. Dual Wallet System, 2,000+ TPS, $0.04 avg fee. Full EVM compatibility. |
| Protocol Overview | Protocol Overview — Xhavic | How Xhavic works: optimistic rollup architecture, 6-layer modular design, Ethereum-settled security. |
| Architecture | Architecture — Xhavic | Six independent layers: execution, sequencing, settlement, data availability, oracle + AI agents, governance. |
| Dual Wallet | Dual Wallet System — Xhavic | Two execution paths at the sequencer level. Instant Wallet for composable DeFi. Secured Wallet with 24h reversal for institutional operations. |
| Performance | Performance — Xhavic | 2,000+ TPS, $0.04 avg fee, <200ms latency. Testnet benchmarks, January 2026. Scalability path to 120,000+ TPS. |
| Security | Security — Xhavic | Defense-in-depth: Ethereum settlement, fraud proofs, validator oversight, deterministic execution, cryptographic primitives. |
| Developers | Developers — Xhavic | Deploy Ethereum contracts without changes. Hardhat, Foundry, ethers.js, web3.py. Full EVM bytecode compatibility. |
| Users | Get Started — Xhavic | Use your existing Ethereum wallet. Bridge assets, access dApps, and choose between Instant and Secured execution paths. |
| Enterprises | Enterprise Solutions — Xhavic | Institutional-grade transaction safety. 24-hour reversal window, Ethereum settlement, RWA-ready infrastructure. |
| Governance | Governance — Xhavic | DAO-controlled protocol upgrades, sequencer policies, oracle parameters, and treasury allocation. |

---

**END OF DOCUMENT**

*This file is the master source of truth for the Xhavic website project. All design, content, and engineering decisions must reference this document. If a question arises that this document does not answer, the XHAVIC Technical Whitepaper v1.0 is the fallback authority.*
