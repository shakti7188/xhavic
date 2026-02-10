# XHAVIC — Developer Documentation: Complete IA, URL Plan & Page Drafts

**Prepared by:** Documentation Architecture Team
**Date:** February 2026
**Version:** 1.0
**Status:** Ready for engineering review

---

## TABLE OF CONTENTS

1. [Deliverable A — Information Architecture (Sidebar Tree)](#deliverable-a)
2. [Deliverable B — URL Plan with Slugs](#deliverable-b)
3. [Deliverable C — Developer Expectations Checklist](#deliverable-c)
4. [Deliverable D — Full Draft Pages (12+ Critical Pages)](#deliverable-d)
5. [Deliverable E — Xhavic Differentiators Documentation](#deliverable-e)
6. [Deliverable F — Gaps & Questions for Engineers](#deliverable-f)

---

<a id="deliverable-a"></a>
## DELIVERABLE A — INFORMATION ARCHITECTURE

### Design Principles

1. **Audience-first navigation** — Top-level tabs route by reader type
2. **Sub-15-minute first deploy** — Fastest path from landing to deployed testnet contract
3. **Dual Wallet System as featured section** — Comparable to Arbitrum Stylus / zkSync Native AA
4. **"Differences from Ethereum" is page 2** — Developers click this before anything else
5. **Every page has one job** — Answers exactly one developer question

### Left Sidebar Tree

```
docs.xhavic.io
│
├── 🏠 GETTING STARTED
│   ├── Welcome to Xhavic                    ← What it is, who this is for, 30-second pitch
│   ├── Why Xhavic?                          ← Three differentiators, not marketing
│   ├── Differences from Ethereum            ← Gas, opcodes, finality, RPC changes
│   ├── Network Information                  ← Chain ID, RPC URLs, explorer, bridge, faucet
│   └── Quickstart                           ← Deploy first contract in <10 minutes
│       ├── Using Hardhat                    ← Step-by-step Hardhat deploy
│       ├── Using Foundry                    ← Step-by-step Foundry deploy
│       └── Using Remix                      ← Browser-based deploy
│
├── 🔀 DUAL WALLET SYSTEM                    ← FEATURED — Xhavic's unique differentiator
│   ├── Overview                             ← What it is, why it exists, architecture
│   ├── Instant Wallet                       ← Fast path: <200ms, composable, irreversible
│   ├── Secured Wallet                       ← Safe path: 24h escrow, reversible, non-composable
│   ├── Integration Guide                    ← How to detect, route, and handle both paths
│   ├── Finality Model                       ← Soft finality vs Ethereum finality vs escrow
│   └── Migration from Single-Wallet Chains  ← Coming from Arbitrum/Optimism? Here's what changes
│
├── 🔮 ORACLE & AI LAYER
│   ├── Oracle Overview                      ← Hybrid architecture, why native matters
│   ├── Oracle Precompiles                   ← Address range 0x00...F0-FF, gas costs, usage
│   ├── Price Feeds                          ← Reading price data, available pairs, update frequency
│   ├── AI Agent Execution                   ← Deterministic ordering, programmatic wallets
│   └── Building an AI Agent                 ← Tutorial: deploy your first on-chain agent
│
├── 🌉 BRIDGING
│   ├── Bridge Overview                      ← Architecture, supported assets, security model
│   ├── Deposits (L1 → L2)                   ← How to bridge ETH and ERC-20 tokens to Xhavic
│   ├── Withdrawals (L2 → L1)               ← Standard 7-day path + fast exit via LP
│   ├── Cross-Chain Messaging                ← L1↔L2 arbitrary message passing
│   └── Bridging Programmatically            ← SDK/contract-level bridge integration
│
├── ⚙️ HOW XHAVIC WORKS
│   ├── Architecture Overview                ← 6-layer modular design, high-level diagram
│   ├── Execution Layer                      ← EVM compatibility, opcode support, state model
│   ├── Sequencer                            ← Block production, ordering, MEV protection
│   ├── Settlement                           ← CanonicalTransactionChain, state roots on L1
│   ├── Data Availability                    ← Calldata posting, Merkle commitments, reconstruction
│   ├── Fraud Proofs                         ← Interactive bisection protocol, challenge period
│   ├── Transaction Lifecycle                ← Submit → Validate → Order → Execute → Commit → Settle
│   └── Fees & Gas                           ← Two-component model, cost comparison, estimation
│
├── 🛡️ SECURITY
│   ├── Security Model                       ← Defense-in-depth, 5 security layers
│   ├── Cryptographic Primitives             ← Keccak-256, ECDSA, ChaCha20-Poly1305, MPT
│   ├── Validator System                     ← Top 100, staking, slashing, uptime requirements
│   ├── Censorship Resistance                ← Force-include via L1, sequencer rotation
│   ├── Audit Status                         ← Timeline, completed audits, bug bounty
│   └── Bug Bounty                           ← Scope, rewards, submission process
│
├── 🖥️ NODE OPERATORS
│   ├── Overview                             ← Node types, when to run what
│   ├── Run a Full Node                      ← Hardware requirements, setup, configuration
│   ├── Run an Archive Node                  ← Extended storage requirements, use cases
│   ├── Run a Validator                      ← Staking requirements, registration, monitoring
│   └── Hardware Requirements                ← CPU/RAM/storage/bandwidth specifications
│
├── 🏛️ GOVERNANCE
│   ├── Overview                             ← DAO structure, progressive decentralization
│   ├── Four Governance Domains              ← Protocol upgrades, sequencer, oracle, treasury
│   ├── Proposal Process                     ← How to submit, vote, and execute proposals
│   └── XHV Token                            ← Utility, staking, governance weight
│
├── 🧰 TOOLS & INFRASTRUCTURE
│   ├── RPC Endpoints & Providers            ← Official endpoints, third-party providers
│   ├── Block Explorer                       ← explorer.xhavic.io features and usage
│   ├── Testnet Faucet                       ← How to get testnet ETH
│   ├── Oracles (Third-Party)                ← Chainlink, Band Protocol integrations
│   ├── Data Indexers                        ← The Graph subgraph deployment
│   └── Wallets                              ← MetaMask setup, WalletConnect, hardware wallets
│
├── 📖 TUTORIALS
│   ├── Deploy Your First Contract           ← End-to-end tutorial for beginners
│   ├── Read Oracle Price Data               ← Use precompiles to fetch ETH/USD price
│   ├── Build a Dual-Wallet dApp             ← Detect wallet type and route accordingly
│   ├── Deploy an NFT Collection             ← ERC-721 deployment and minting
│   ├── Bridge Tokens Programmatically       ← SDK-based L1↔L2 bridging
│   └── Build an AI Trading Agent            ← Autonomous agent with oracle + instant wallet
│
├── 📚 REFERENCE
│   ├── JSON-RPC API                         ← Standard eth_* + Xhavic xhv_* methods
│   ├── Contract Addresses                   ← Bridge, CTC, SCC, FraudProof, Governance, Oracle
│   ├── Protocol Parameters                  ← Block time, batch window, challenge period, etc.
│   ├── Supported Standards                  ← ERC-20, ERC-721, ERC-1155, ERC-3643, ERC-20R
│   ├── Error Codes                          ← Common errors, causes, and resolution steps
│   ├── Gas Cost Table                       ← L2 vs L1 opcode gas costs
│   └── Glossary                             ← Protocol-specific terminology
│
├── 🔄 MIGRATION GUIDES
│   ├── From Ethereum                        ← What changes when deploying from mainnet
│   ├── From Arbitrum                        ← Key differences, config changes
│   ├── From Optimism / Base                 ← OP Stack differences, unique features
│   └── From zkSync                          ← ZK vs optimistic, compiler differences
│
└── 📋 NOTICES
    ├── Network Status                       ← Live status, incident history
    ├── Upgrade Changelog                    ← Protocol upgrades with developer impact
    ├── Terms of Use                         ← Legal
    └── Privacy Policy                       ← Legal
```

### Page Count Summary

| Section | Pages |
|---------|-------|
| Getting Started | 7 |
| Dual Wallet System | 6 |
| Oracle & AI Layer | 5 |
| Bridging | 5 |
| How Xhavic Works | 8 |
| Security | 6 |
| Node Operators | 5 |
| Governance | 4 |
| Tools & Infrastructure | 6 |
| Tutorials | 6 |
| Reference | 7 |
| Migration Guides | 4 |
| Notices | 4 |
| **TOTAL** | **73 pages** |

### Priority Tiers

**Tier 1 — Launch-Blocking (ship before mainnet):**
- Getting Started (all 7)
- Dual Wallet System (all 6)
- Bridging: Overview, Deposits, Withdrawals (3)
- How Xhavic Works: Overview, Fees & Gas (2)
- Security: Security Model (1)
- Reference: JSON-RPC API, Contract Addresses, Network Parameters (3)
- **Subtotal: 22 pages**

**Tier 2 — First 30 Days Post-Mainnet:**
- Oracle & AI Layer (all 5)
- Bridging: Cross-Chain Messaging, Programmatic Bridging (2)
- How Xhavic Works: Remaining 6 pages
- Security: Remaining 5 pages
- Tutorials (all 6)
- Reference: Remaining 4 pages
- **Subtotal: 28 pages**

**Tier 3 — 60-90 Days Post-Mainnet:**
- Node Operators (all 5)
- Governance (all 4)
- Tools & Infrastructure (all 6)
- Migration Guides (all 4)
- Notices (all 4)
- **Subtotal: 23 pages**

---

<a id="deliverable-b"></a>
## DELIVERABLE B — URL PLAN WITH SLUGS

### Base URL: `docs.xhavic.io`

```
/                                           → Welcome to Xhavic
/why-xhavic                                → Why Xhavic?
/differences-from-ethereum                  → Differences from Ethereum
/network-info                               → Network Information
/quickstart                                 → Quickstart Overview
/quickstart/hardhat                         → Using Hardhat
/quickstart/foundry                         → Using Foundry
/quickstart/remix                           → Using Remix

/dual-wallet                                → Dual Wallet System Overview
/dual-wallet/instant                        → Instant Wallet
/dual-wallet/secured                        → Secured Wallet
/dual-wallet/integration                    → Integration Guide
/dual-wallet/finality                       → Finality Model
/dual-wallet/migration                      → Migration from Single-Wallet Chains

/oracle                                     → Oracle Overview
/oracle/precompiles                         → Oracle Precompiles
/oracle/price-feeds                         → Price Feeds
/oracle/ai-agents                           → AI Agent Execution
/oracle/build-agent                         → Building an AI Agent (Tutorial)

/bridge                                     → Bridge Overview
/bridge/deposits                            → Deposits (L1 → L2)
/bridge/withdrawals                         → Withdrawals (L2 → L1)
/bridge/messaging                           → Cross-Chain Messaging
/bridge/programmatic                        → Bridging Programmatically

/protocol                                   → Architecture Overview
/protocol/execution                         → Execution Layer
/protocol/sequencer                         → Sequencer
/protocol/settlement                        → Settlement
/protocol/data-availability                 → Data Availability
/protocol/fraud-proofs                      → Fraud Proofs
/protocol/transaction-lifecycle             → Transaction Lifecycle
/protocol/fees                              → Fees & Gas

/security                                   → Security Model
/security/cryptography                      → Cryptographic Primitives
/security/validators                        → Validator System
/security/censorship-resistance             → Censorship Resistance
/security/audits                            → Audit Status
/security/bug-bounty                        → Bug Bounty

/nodes                                      → Node Operators Overview
/nodes/full-node                            → Run a Full Node
/nodes/archive-node                         → Run an Archive Node
/nodes/validator                            → Run a Validator
/nodes/requirements                         → Hardware Requirements

/governance                                 → Governance Overview
/governance/domains                         → Four Governance Domains
/governance/proposals                       → Proposal Process
/governance/xhv-token                       → XHV Token

/tools                                      → Tools Overview
/tools/rpc                                  → RPC Endpoints & Providers
/tools/explorer                             → Block Explorer
/tools/faucet                               → Testnet Faucet
/tools/oracles                              → Third-Party Oracles
/tools/indexers                             → Data Indexers
/tools/wallets                              → Wallets

/tutorials/first-contract                   → Deploy Your First Contract
/tutorials/oracle-price                     → Read Oracle Price Data
/tutorials/dual-wallet-dapp                 → Build a Dual-Wallet dApp
/tutorials/nft                              → Deploy an NFT Collection
/tutorials/bridge-sdk                       → Bridge Tokens Programmatically
/tutorials/ai-agent                         → Build an AI Trading Agent

/reference/rpc-api                          → JSON-RPC API
/reference/contracts                        → Contract Addresses
/reference/parameters                       → Protocol Parameters
/reference/standards                        → Supported Standards
/reference/errors                           → Error Codes
/reference/gas-table                        → Gas Cost Table
/reference/glossary                         → Glossary

/migrate/from-ethereum                      → From Ethereum
/migrate/from-arbitrum                      → From Arbitrum
/migrate/from-optimism                      → From Optimism / Base
/migrate/from-zksync                        → From zkSync

/status                                     → Network Status
/changelog                                  → Upgrade Changelog
/terms                                      → Terms of Use
/privacy                                    → Privacy Policy
```

---

<a id="deliverable-c"></a>
## DELIVERABLE C — DEVELOPER EXPECTATIONS CHECKLIST

What a developer deploying on a Tier-1 L2 expects to find. Checked (✅) = covered by our IA. Flagged (⚠️) = needs engineering input.

### Discovery & Onboarding
- ✅ What is this chain? (Welcome page)
- ✅ How is it different from Ethereum? (Differences page)
- ✅ Chain ID, RPC URL, explorer URL, faucet URL (Network Info page)
- ✅ Add network to MetaMask in one click (Network Info page)
- ⚠️ "Add to MetaMask" button — needs `wallet_addEthereumChain` params confirmed

### First Deploy (< 15 minutes)
- ✅ Hardhat quickstart with verified config
- ✅ Foundry quickstart with verified config
- ✅ Remix quickstart with network selector
- ✅ Testnet faucet for gas tokens
- ⚠️ Faucet URL, rate limits, and amount per request — needs confirmation
- ⚠️ Contract verification — which explorer API is supported? Etherscan-compatible?

### RPC & API
- ✅ Standard eth_* JSON-RPC methods documented
- ✅ Custom xhv_* methods documented
- ⚠️ WebSocket endpoint URL — needs confirmation
- ⚠️ Rate limits per endpoint — needs confirmation
- ⚠️ Third-party RPC providers (Alchemy, Infura, QuickNode support?) — needs confirmation

### Fees & Gas
- ✅ Fee model explained (L2 execution + L1 calldata)
- ✅ Gas cost comparison table (L2 vs L1)
- ✅ Cost estimates for common operations
- ⚠️ EIP-1559 support on L2? Base fee + priority fee? — needs confirmation
- ⚠️ Gas estimation SDK/utility — needs confirmation
- ⚠️ L1 data fee component formula — needs exact formula

### Bridging
- ✅ Deposit flow (L1 → L2) documented
- ✅ Withdrawal flow (L2 → L1) documented
- ✅ 7-day challenge period explained
- ✅ Fast exit via liquidity provider explained
- ⚠️ Bridge contract addresses (L1 and L2) — needs confirmation
- ⚠️ Supported tokens list — needs confirmation
- ⚠️ Bridge SDK package name and installation — needs confirmation
- ⚠️ Minimum deposit/withdrawal amounts — needs confirmation

### Dual Wallet System
- ✅ Architecture explained (sequencer-level routing)
- ✅ Instant vs Secured comparison
- ✅ RPC methods for wallet type detection
- ✅ Integration code examples
- ⚠️ How does a user choose wallet type? Wallet UI? App-level? — needs confirmation
- ⚠️ Can a single address switch between Instant and Secured? — needs confirmation
- ⚠️ Secured Wallet reversal process — multi-sig details? Who signs? — needs confirmation
- ⚠️ Escrow contract address — needs confirmation

### Oracle & AI
- ✅ Precompile address range documented (0x00...F0-FF)
- ✅ Price feed reading code examples
- ✅ AI agent execution model explained
- ⚠️ Exact precompile ABI/interface for each address — needs confirmation
- ⚠️ Available price pairs at launch — needs confirmation
- ⚠️ Update frequency for price feeds — needs confirmation
- ⚠️ AI agent SDK package — needs confirmation
- ⚠️ Gas costs for precompile calls — needs exact numbers

### Smart Contract Development
- ✅ Solidity & Vyper support confirmed
- ✅ EVM opcode compatibility documented
- ⚠️ Any unsupported opcodes? (e.g., SELFDESTRUCT deprecated?) — needs confirmation
- ⚠️ Block.timestamp behavior — L2 timestamp vs L1 timestamp? — needs confirmation
- ⚠️ Blockhash availability — how many blocks? — needs confirmation
- ⚠️ Contract size limit — same as Ethereum (24KB)? — needs confirmation
- ⚠️ CREATE2 address computation — identical to Ethereum? — needs confirmation

### Security
- ✅ Security model documented (defense-in-depth)
- ✅ Fraud proof mechanism explained
- ✅ Validator requirements documented
- ✅ Audit timeline provided
- ⚠️ Bug bounty program URL and reward tiers — needs confirmation
- ⚠️ Security contact email — needs confirmation
- ⚠️ Incident response SLA — needs confirmation

### Node Operations
- ✅ Hardware requirements documented
- ✅ Node types explained
- ⚠️ Docker images / binary download links — needs confirmation
- ⚠️ Configuration file format and options — needs confirmation
- ⚠️ Monitoring endpoints (Prometheus, Grafana dashboards?) — needs confirmation
- ⚠️ Peer discovery mechanism — needs confirmation
- ⚠️ Snapshot/checkpoint download for fast sync — needs confirmation

### Ecosystem
- ⚠️ Subgraph deployment instructions — needs confirmation
- ⚠️ Supported indexing services — needs confirmation
- ⚠️ Account abstraction (ERC-4337) support — needs confirmation
- ⚠️ Multicall3 contract address — needs confirmation
- ⚠️ WETH contract address — needs confirmation
- ⚠️ Existing deployed protocols / dApps directory — needs confirmation

---

<a id="deliverable-d"></a>
## DELIVERABLE D — FULL DRAFT PAGES

### Legend
- `[CONFIRMED]` — Information from whitepaper or existing site content
- `[NEEDS ENGINEERING]` — Placeholder requiring engineering team input
- `[EXAMPLE]` — Illustrative code, needs validation against actual RPC/SDK

---

### PAGE 1: Welcome to Xhavic

**URL:** `docs.xhavic.io/`
**Purpose:** Orient new visitors in 30 seconds. Route them to the right path.

---

# Welcome to Xhavic

Xhavic is an Ethereum Layer 2 execution environment built on the OP Stack. It processes transactions at 2,000+ TPS with an average fee of $0.04 and soft finality under 200 milliseconds. All state settles on Ethereum.

## What Makes Xhavic Different

Xhavic introduces three protocol-level capabilities that do not exist on other Layer 2 networks:

**Dual Wallet System** — Every transaction routes through one of two execution paths at the sequencer level. The Instant Wallet provides composable, irreversible transactions with sub-200ms finality for DeFi. The Secured Wallet provides reversible transactions with a 24-hour escrow window for institutional operations. [Learn more →](/dual-wallet)

**Native Oracle Layer** — Price feeds and data services run as EVM precompiles at addresses `0x00...F0` through `0x00...FF`. No external contract calls, no bridge latency, no third-party dependencies. [Learn more →](/oracle)

**AI Agent Execution** — Deterministic transaction ordering, programmatic wallet control, and gas-metered compute cycles enable autonomous agents to operate on-chain with predictable costs. [Learn more →](/oracle/ai-agents)

## Choose Your Path

| I want to... | Start here |
|---|---|
| Deploy a smart contract | [Quickstart →](/quickstart) |
| Understand the Dual Wallet System | [Dual Wallet Overview →](/dual-wallet) |
| Read oracle price data | [Oracle Precompiles →](/oracle/precompiles) |
| Bridge assets from Ethereum | [Bridge Overview →](/bridge) |
| Run a node | [Node Operators →](/nodes) |
| Understand the architecture | [How Xhavic Works →](/protocol) |

## Network at a Glance

| Parameter | Mainnet | Testnet |
|---|---|---|
| Chain ID | `7849` | `7850` |
| RPC URL | `https://rpc.xhavic.io` | `https://testnet-rpc.xhavic.io` |
| Explorer | `https://explorer.xhavic.io` | `https://testnet-explorer.xhavic.io` |
| Bridge | `https://bridge.xhavic.io` | `https://testnet-bridge.xhavic.io` |
| Faucet | — | `https://faucet.xhavic.io` |
| Currency | ETH | ETH |
| Block Time | 2 seconds | 2 seconds |

---

### PAGE 2: Differences from Ethereum

**URL:** `docs.xhavic.io/differences-from-ethereum`
**Purpose:** Developers coming from Ethereum need to know exactly what changes.

---

# Differences from Ethereum

Xhavic is EVM-compatible at the bytecode level. Solidity, Vyper, and all standard development tools work without modification. This page documents the specific differences you should be aware of.

## Execution Differences

### Gas Costs

Xhavic transaction fees have two components:

1. **L2 execution fee** — Gas consumed by EVM execution on Xhavic. Significantly cheaper than Ethereum.
2. **L1 data fee** — Cost of posting transaction calldata to Ethereum for data availability.

| Operation | Ethereum L1 Gas | Xhavic L2 Gas | Reduction |
|---|---|---|---|
| SSTORE (new slot) | 20,000 | 500 | 40x |
| SLOAD | 2,100 | 50 | 42x |
| Transaction base | 21,000 | 300 | 70x |
| CREATE2 | 32,000 | 800 | 40x |

### Finality

| Finality Type | Time | Meaning |
|---|---|---|
| Soft finality | 2-5 seconds | Sequencer has ordered the transaction. Practically final. |
| Ethereum finality | ~13 minutes | State root committed and confirmed on Ethereum L1. |
| Challenge period | 7 days | Required waiting period for L2 → L1 withdrawals. |

Soft finality is sufficient for most application logic. The 7-day challenge period only affects withdrawals from L2 to L1.

### Block Production

| Parameter | Ethereum | Xhavic |
|---|---|---|
| Block time | ~12 seconds | 2 seconds |
| Block size limit | 30M gas | 5 MB compressed |
| Block producer | Distributed validators | Single sequencer (Phase I) |
| MEV protection | None (PBS) | Threshold encryption + time-weighted ordering |

### Opcodes

All standard EVM opcodes are supported. The following behave differently:

| Opcode | Difference |
|---|---|
| `COINBASE` | Returns the sequencer address, not a validator address `[NEEDS ENGINEERING]` |
| `DIFFICULTY` / `PREVRANDAO` | Returns a fixed value or L2-specific randomness `[NEEDS ENGINEERING]` |
| `BLOCKHASH` | Available for last 256 L2 blocks `[NEEDS ENGINEERING]` |
| `BASEFEE` | Returns L2 base fee, not L1 base fee `[NEEDS ENGINEERING]` |

## New Capabilities

### xhv_* RPC Methods

Xhavic extends the standard Ethereum JSON-RPC with custom methods:

| Method | Description |
|---|---|
| `xhv_getWalletType(address)` | Returns `"instant"` or `"secured"` |
| `xhv_getEscrowStatus(txHash)` | Returns escrow status for Secured Wallet transactions |
| `xhv_getOraclePrice(pair)` | Returns price data from native oracle |
| `xhv_getOracleFeeds()` | Lists available oracle price feeds |
| `xhv_getAgentState(agentId)` | Returns AI agent execution state |
| `xhv_getDepositStatus(txHash)` | Returns L1→L2 deposit status |
| `xhv_getWithdrawalProof(txHash)` | Generates withdrawal Merkle proof |

### Oracle Precompiles

Native oracle contracts are available at fixed addresses `0x00...F0` through `0x00...FF`. These are EVM precompiles, not deployed contracts — they execute at native speed with minimal gas overhead.

### Dual Wallet System

Transactions are routed at the sequencer level based on the originating wallet type. This is transparent to smart contracts — your contract code does not change. The difference is in finality and reversibility guarantees. See [Dual Wallet System →](/dual-wallet).

## What Does NOT Change

- Solidity and Vyper compile identically
- All standard ERC standards work (ERC-20, ERC-721, ERC-1155)
- Hardhat, Foundry, Remix, and ethers.js work without modification
- Contract addresses are deterministic (same CREATE2 behavior)
- ABI encoding is identical
- Account model is identical (EOA + contract accounts)
- Nonce management is identical

---

### PAGE 3: Network Information

**URL:** `docs.xhavic.io/network-info`
**Purpose:** Single page with every endpoint, chain ID, and address a developer needs.

---

# Network Information

## Mainnet

| Property | Value |
|---|---|
| Network Name | Xhavic Mainnet |
| Chain ID | `7849` |
| Currency Symbol | ETH |
| RPC URL (HTTPS) | `https://rpc.xhavic.io` |
| RPC URL (WebSocket) | `wss://ws.xhavic.io` `[NEEDS ENGINEERING]` |
| Block Explorer | `https://explorer.xhavic.io` |
| Bridge | `https://bridge.xhavic.io` |
| Block Time | 2 seconds |
| Average Fee | $0.04 |

## Testnet

| Property | Value |
|---|---|
| Network Name | Xhavic Testnet |
| Chain ID | `7850` |
| Currency Symbol | ETH |
| RPC URL (HTTPS) | `https://testnet-rpc.xhavic.io` |
| RPC URL (WebSocket) | `wss://testnet-ws.xhavic.io` `[NEEDS ENGINEERING]` |
| Block Explorer | `https://testnet-explorer.xhavic.io` `[NEEDS ENGINEERING]` |
| Bridge | `https://testnet-bridge.xhavic.io` `[NEEDS ENGINEERING]` |
| Faucet | `https://faucet.xhavic.io` |
| Block Time | 2 seconds |

## Add to MetaMask

Click the button below to add Xhavic to MetaMask, or add manually using the parameters above.

```javascript
// Add Xhavic Mainnet to MetaMask
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x1EA9',        // 7849
    chainName: 'Xhavic Mainnet',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.xhavic.io'],
    blockExplorerUrls: ['https://explorer.xhavic.io'],
  }],
});

// Add Xhavic Testnet to MetaMask
await window.ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [{
    chainId: '0x1EAA',        // 7850
    chainName: 'Xhavic Testnet',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://testnet-rpc.xhavic.io'],
    blockExplorerUrls: ['https://testnet-explorer.xhavic.io'],
  }],
});
```

## Contract Addresses

### L1 (Ethereum) Contracts

| Contract | Address | Purpose |
|---|---|---|
| Bridge | `[NEEDS ENGINEERING]` | Locks/unlocks assets on Ethereum |
| CanonicalTransactionChain | `[NEEDS ENGINEERING]` | Stores L2 transaction batches |
| StateCommitmentChain | `[NEEDS ENGINEERING]` | Stores L2 state root commitments |
| FraudProofVerifier | `[NEEDS ENGINEERING]` | Verifies fraud proof disputes |

### L2 (Xhavic) Contracts

| Contract | Address | Purpose |
|---|---|---|
| WETH | `[NEEDS ENGINEERING]` | Wrapped ETH on L2 |
| GovernanceDAO | `[NEEDS ENGINEERING]` | DAO governance contract |
| OracleRegistry | `[NEEDS ENGINEERING]` | Oracle feed registry |
| Multicall3 | `[NEEDS ENGINEERING]` | Batch read calls |

### Oracle Precompiles (L2)

| Address | Function |
|---|---|
| `0x00...00F0` | Price feeds (ETH/USD, etc.) |
| `0x00...00F4` | Randomness `[NEEDS ENGINEERING]` |
| `0x00...00F8` | AI Compute `[NEEDS ENGINEERING]` |

---

### PAGE 4: Quickstart — Using Hardhat

**URL:** `docs.xhavic.io/quickstart/hardhat`
**Purpose:** Deploy a contract to Xhavic testnet in under 10 minutes.

---

# Deploy with Hardhat

Deploy your first smart contract to Xhavic Testnet using Hardhat. This guide takes approximately 10 minutes.

## Prerequisites

- Node.js 18+ installed
- A wallet with testnet ETH (get from [faucet.xhavic.io](https://faucet.xhavic.io))

## 1. Create a New Project

```bash
mkdir my-xhavic-project && cd my-xhavic-project
npx hardhat init
```

Select "Create a TypeScript project" when prompted.

## 2. Configure the Network

Open `hardhat.config.ts` and add the Xhavic networks:

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    xhavic: {
      url: "https://rpc.xhavic.io",
      chainId: 7849,
      accounts: [process.env.DEPLOYER_KEY!],
    },
    "xhavic-testnet": {
      url: "https://testnet-rpc.xhavic.io",
      chainId: 7850,
      accounts: [process.env.DEPLOYER_KEY!],
    },
  },
};

export default config;
```

## 3. Set Up Environment Variables

Create a `.env` file:

```bash
DEPLOYER_KEY=your_private_key_here
```

> **Security:** Never commit your `.env` file. Add it to `.gitignore`.

## 4. Write a Contract

Create `contracts/HelloXhavic.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloXhavic {
    string public greeting = "Hello from Xhavic L2!";
    uint256 public count;

    event Counted(address indexed sender, uint256 newCount);

    function increment() external {
        count++;
        emit Counted(msg.sender, count);
    }

    function setGreeting(string calldata _greeting) external {
        greeting = _greeting;
    }
}
```

## 5. Write a Deploy Script

Create `scripts/deploy.ts`:

```typescript
import { ethers } from "hardhat";

async function main() {
  const HelloXhavic = await ethers.getContractFactory("HelloXhavic");
  const contract = await HelloXhavic.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log(`HelloXhavic deployed to: ${address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

## 6. Deploy to Testnet

```bash
npx hardhat run scripts/deploy.ts --network xhavic-testnet
```

Expected output:

```
HelloXhavic deployed to: 0x1234...abcd
```

## 7. Verify on Explorer

```bash
npx hardhat verify --network xhavic-testnet DEPLOYED_ADDRESS
```

`[NEEDS ENGINEERING: Verify the explorer API endpoint and verification plugin configuration]`

## 8. Interact with Your Contract

```bash
npx hardhat console --network xhavic-testnet
```

```javascript
const contract = await ethers.getContractAt("HelloXhavic", "DEPLOYED_ADDRESS");
await contract.greeting();    // "Hello from Xhavic L2!"
await contract.increment();   // Costs ~$0.001 on testnet
await contract.count();       // 1n
```

## What's Next?

- [Read Oracle Price Data →](/tutorials/oracle-price) — Access native oracle precompiles
- [Integrate the Dual Wallet System →](/dual-wallet/integration) — Handle Instant and Secured wallets
- [Deploy to Mainnet →](/quickstart) — Same process, different network config

---

### PAGE 5: Quickstart — Using Foundry

**URL:** `docs.xhavic.io/quickstart/foundry`
**Purpose:** Deploy with Foundry for developers who prefer it.

---

# Deploy with Foundry

Deploy your first smart contract to Xhavic Testnet using Foundry. This guide takes approximately 10 minutes.

## Prerequisites

- Foundry installed (`curl -L https://foundry.paradigm.xyz | bash && foundryup`)
- A wallet with testnet ETH (get from [faucet.xhavic.io](https://faucet.xhavic.io))

## 1. Create a New Project

```bash
forge init my-xhavic-project && cd my-xhavic-project
```

## 2. Write a Contract

Replace `src/Counter.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract HelloXhavic {
    string public greeting = "Hello from Xhavic L2!";
    uint256 public count;

    event Counted(address indexed sender, uint256 newCount);

    function increment() external {
        count++;
        emit Counted(msg.sender, count);
    }

    function setGreeting(string calldata _greeting) external {
        greeting = _greeting;
    }
}
```

## 3. Compile

```bash
forge build
```

## 4. Deploy to Testnet

```bash
forge create src/HelloXhavic.sol:HelloXhavic \
  --rpc-url https://testnet-rpc.xhavic.io \
  --private-key $DEPLOYER_KEY
```

## 5. Verify on Explorer

```bash
forge verify-contract DEPLOYED_ADDRESS \
  src/HelloXhavic.sol:HelloXhavic \
  --chain-id 7850 \
  --verifier-url https://testnet-explorer.xhavic.io/api \
  --etherscan-api-key $EXPLORER_API_KEY
```

`[NEEDS ENGINEERING: Verify the explorer API endpoint and whether an API key is required]`

## 6. Interact

```bash
# Read greeting
cast call DEPLOYED_ADDRESS "greeting()" \
  --rpc-url https://testnet-rpc.xhavic.io

# Increment counter
cast send DEPLOYED_ADDRESS "increment()" \
  --rpc-url https://testnet-rpc.xhavic.io \
  --private-key $DEPLOYER_KEY

# Read count
cast call DEPLOYED_ADDRESS "count()" \
  --rpc-url https://testnet-rpc.xhavic.io
```

---

### PAGE 6: Dual Wallet System — Overview

**URL:** `docs.xhavic.io/dual-wallet`
**Purpose:** The flagship feature page. Explains what it is and why it matters.

---

# Dual Wallet System

The Dual Wallet System is Xhavic's core protocol-level innovation. It separates transactions into two execution paths at the sequencer level, giving developers and users the ability to choose between speed and safety for every transaction.

## The Problem

Every existing Layer 2 forces a single finality model on all transactions. A $5 token swap and a $5 million treasury transfer receive identical security guarantees and identical finality times. This is a false choice:

- **Speed-optimized chains** sacrifice safety — transactions are irreversible from the moment they execute.
- **Safety-optimized chains** sacrifice speed — all transactions wait for extended confirmation periods.

Xhavic resolves this by separating the two concerns at the protocol level.

## Architecture

```
┌─────────────────────────────────────────────────┐
│                    User Transaction               │
└──────────────────────┬──────────────────────────┘
                       │
              ┌────────▼────────┐
              │    Sequencer    │
              │  (Route by      │
              │   wallet type)  │
              └───┬─────────┬───┘
                  │         │
        ┌─────────▼──┐  ┌──▼──────────┐
        │  INSTANT    │  │  SECURED    │
        │  WALLET     │  │  WALLET     │
        │             │  │             │
        │  <200ms     │  │  24h escrow │
        │  Composable │  │  Reversible │
        │  Irreversible│  │ Non-composable│
        └─────────────┘  └─────────────┘
                  │         │
              ┌───▼─────────▼───┐
              │  Ethereum L1    │
              │  Settlement     │
              └─────────────────┘
```

## Two Execution Paths

### Instant Wallet

| Property | Value |
|---|---|
| Soft finality | < 200 milliseconds |
| Composability | Full — atomic execution with other contracts |
| Reversibility | None — irreversible by design |
| Settlement | ~13 minutes (Ethereum confirmation) |
| Best for | DeFi, trading, AI agents, automation |

The Instant Wallet is the default execution path. Transactions execute immediately, are composable with other on-chain state, and cannot be reversed. This is equivalent to the finality model on Arbitrum, Optimism, and other L2s.

[Instant Wallet details →](/dual-wallet/instant)

### Secured Wallet

| Property | Value |
|---|---|
| Escrow period | 24 hours |
| Composability | None — isolated until finalized |
| Reversibility | Yes — multi-sig reversal within escrow window |
| Settlement | After 24-hour escrow closes |
| Best for | Treasury, institutional, RWA, high-value |

The Secured Wallet routes transactions through a 24-hour cryptographic escrow. During this window, authorized signers can reverse the transaction. Once the escrow expires, the transaction finalizes and becomes irreversible.

[Secured Wallet details →](/dual-wallet/secured)

## Why Composability and Reversibility Are Mutually Exclusive

This is an architectural constraint, not a design choice:

- **Composable transactions** execute atomically with other contracts in the same block. If Transaction A sends tokens to Contract B, and Contract B immediately uses those tokens in Contract C — all three state changes are linked. Reversing Transaction A would require reversing B and C, which may have already been consumed by other transactions.

- **Reversible transactions** must be isolated. No downstream contract can depend on a transaction that might be reversed. Therefore, Secured Wallet transactions are non-composable until the escrow window closes.

This is why no other L2 offers both capabilities — they are mutually exclusive at the protocol level. Xhavic is the first to support both by implementing two parallel execution paths.

## For Developers

The Dual Wallet System is transparent to smart contracts. Your contract code does not change. The routing happens at the sequencer level based on the wallet address that initiated the transaction.

To detect which wallet type initiated a transaction:

```solidity
// In your smart contract — no changes needed
// The sequencer handles routing automatically

// To query wallet type from a frontend/backend:
const walletType = await provider.send("xhv_getWalletType", [userAddress]);
// Returns: "instant" or "secured"
```

[Full Integration Guide →](/dual-wallet/integration)

---

### PAGE 7: Dual Wallet — Integration Guide

**URL:** `docs.xhavic.io/dual-wallet/integration`
**Purpose:** How to detect, route, and handle both wallet types in your dApp.

---

# Dual Wallet Integration Guide

This guide covers how to detect wallet types, handle escrow states, and build applications that support both Instant and Secured wallets.

## Detecting Wallet Type

Use the `xhv_getWalletType` RPC method to determine which execution path a user's address uses:

```typescript
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://rpc.xhavic.io");

async function getWalletType(address: string): Promise<"instant" | "secured"> {
  const result = await provider.send("xhv_getWalletType", [address]);
  return result;
}

// Usage
const type = await getWalletType("0x1234...abcd");

if (type === "instant") {
  // Transaction will finalize in <200ms
  // Composable — can interact with other contracts atomically
  // Irreversible — no undo
} else {
  // Transaction enters 24h escrow
  // Non-composable until escrow finalizes
  // Reversible within escrow window
}
```

## Checking Escrow Status

For Secured Wallet transactions, check the escrow state:

```typescript
async function checkEscrow(txHash: string) {
  const status = await provider.send("xhv_getEscrowStatus", [txHash]);
  return status;
  // Returns:
  // {
  //   status: "pending" | "finalized" | "reversed",
  //   expiresIn: "21h 43m",    // Time remaining in escrow
  //   reversible: true,         // Can still be reversed
  //   finalizedAt: null         // Timestamp when finalized (null if pending)
  // }
}
```

## UI Patterns

### Pattern 1: Inform the User

Display the wallet type and its implications before a transaction:

```typescript
async function showTransactionPreview(userAddress: string, amount: string) {
  const type = await getWalletType(userAddress);

  if (type === "secured") {
    return {
      message: `This transaction will enter a 24-hour escrow period. You can reverse it within that window.`,
      finality: "24 hours",
      reversible: true,
    };
  }

  return {
    message: `This transaction will finalize immediately and cannot be reversed.`,
    finality: "< 200ms",
    reversible: false,
  };
}
```

### Pattern 2: Route by Amount

Some dApps may want to recommend a wallet type based on transaction value:

```typescript
const SECURED_THRESHOLD = ethers.parseEther("10"); // 10 ETH

function recommendWalletType(amount: bigint): string {
  if (amount >= SECURED_THRESHOLD) {
    return "Consider using a Secured Wallet for this transaction. It provides a 24-hour reversal window.";
  }
  return "Instant Wallet recommended for fast finality.";
}
```

### Pattern 3: Wait for Escrow Finalization

If your application needs to act on a Secured Wallet transaction after it finalizes:

```typescript
async function waitForFinalization(txHash: string): Promise<void> {
  let status = await provider.send("xhv_getEscrowStatus", [txHash]);

  while (status.status === "pending") {
    await new Promise(resolve => setTimeout(resolve, 60_000)); // Poll every minute
    status = await provider.send("xhv_getEscrowStatus", [txHash]);
  }

  if (status.status === "reversed") {
    throw new Error("Transaction was reversed during escrow period");
  }

  // status.status === "finalized" — safe to proceed
}
```

## Smart Contract Considerations

Smart contracts do not need to be modified to support both wallet types. The routing is handled by the sequencer. However, be aware of the following:

1. **Secured Wallet transactions are non-composable.** If your contract calls another contract, and the initiating wallet is Secured, the transaction still executes — but it enters escrow as a unit. No downstream state changes are visible to other transactions until finalization.

2. **Events still emit during escrow.** Log events are emitted when the transaction executes, not when it finalizes. Your indexer should check escrow status before treating events as final. `[NEEDS ENGINEERING: Confirm event emission timing]`

3. **Balance queries during escrow.** Tokens transferred via Secured Wallet may show as "pending" in balance queries during the escrow period. `[NEEDS ENGINEERING: Confirm balance visibility during escrow]`

## Error Handling

| Error | Cause | Resolution |
|---|---|---|
| `WALLET_TYPE_UNKNOWN` | Address has not been registered | User needs to initialize wallet type `[NEEDS ENGINEERING]` |
| `ESCROW_NOT_FOUND` | Transaction hash is not from a Secured Wallet | Check wallet type before querying escrow |
| `ESCROW_EXPIRED` | Escrow window has closed | Transaction is finalized; no further action needed |

---

### PAGE 8: Oracle Precompiles

**URL:** `docs.xhavic.io/oracle/precompiles`
**Purpose:** How to read price data from native oracle precompiles.

---

# Oracle Precompiles

Xhavic's oracle layer is built directly into the protocol as EVM precompiles. Unlike external oracle networks that require contract calls and bridge latency, Xhavic oracles execute at native speed with minimal gas overhead.

## Architecture

```
┌──────────────────────────────────┐
│        Data Sources              │
│  Exchange APIs · Chainlink ·     │
│  Band Protocol · Custom Feeds    │
└──────────────┬───────────────────┘
               │
     ┌─────────▼─────────┐
     │  Aggregation Layer │
     │  Outlier detection  │
     │  Reliability scoring│
     │  Weighted averages  │
     └─────────┬──────────┘
               │
     ┌─────────▼─────────┐
     │  EVM Precompiles   │
     │  0x00...F0 - 0xFF  │
     │  Native execution  │
     │  Minimal gas cost  │
     └────────────────────┘
```

## Precompile Addresses

| Address | Function | Description |
|---|---|---|
| `0x00...00F0` | Price Feeds | Token/fiat price pairs with timestamps |
| `0x00...00F4` | Randomness | Verifiable random number generation `[NEEDS ENGINEERING]` |
| `0x00...00F8` | AI Compute | Compute cycles for AI agents `[NEEDS ENGINEERING]` |

`[NEEDS ENGINEERING: Complete list of all precompile addresses and their functions]`

## Reading Price Data

### From Solidity

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IXhavicOracle {
    function getPrice(bytes32 pair) external view returns (
        uint256 price,
        uint256 timestamp,
        uint8 decimals
    );

    function getAvailableFeeds() external view returns (bytes32[] memory);
}

contract PriceConsumer {
    // Oracle precompile address
    IXhavicOracle constant ORACLE = IXhavicOracle(0x00000000000000000000000000000000000000F0);

    function getEthUsdPrice() external view returns (uint256) {
        (uint256 price, , ) = ORACLE.getPrice(keccak256("ETH/USD"));
        return price;
    }

    function getPriceWithTimestamp(string calldata pair) external view returns (
        uint256 price,
        uint256 timestamp,
        uint8 decimals
    ) {
        return ORACLE.getPrice(keccak256(abi.encodePacked(pair)));
    }
}
```

`[NEEDS ENGINEERING: Confirm the exact precompile interface — function signatures, parameter encoding, return types]`

### From ethers.js

```typescript
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://rpc.xhavic.io");

// Using the xhv_getOraclePrice RPC method
async function getPrice(pair: string) {
  const result = await provider.send("xhv_getOraclePrice", [pair]);
  return {
    price: result.price,        // e.g., "2534.87"
    timestamp: result.timestamp, // Unix timestamp
    decimals: result.decimals,   // e.g., 8
  };
}

const ethPrice = await getPrice("ETH/USD");
console.log(`ETH/USD: $${ethPrice.price}`);
```

## Available Price Feeds

`[NEEDS ENGINEERING: Complete list of available price pairs at launch]`

| Pair | Update Frequency | Decimals |
|---|---|---|
| ETH/USD | `[NEEDS ENGINEERING]` | 8 |
| BTC/USD | `[NEEDS ENGINEERING]` | 8 |
| USDC/USD | `[NEEDS ENGINEERING]` | 8 |
| XHV/USD | `[NEEDS ENGINEERING]` | 8 |

## Gas Costs

Oracle precompile calls are significantly cheaper than external oracle contract calls:

| Operation | Gas Cost |
|---|---|
| Precompile price read | `[NEEDS ENGINEERING]` |
| External oracle call (Chainlink) | ~50,000 gas |
| External oracle call (custom) | ~30,000 gas |

## Chainlink Relay Architecture

For data feeds that originate from Chainlink on L1, Xhavic uses a relay architecture:

```
L1 (Ethereum/Sepolia)          L2 (Xhavic)
┌────────────────────┐         ┌────────────────────┐
│ MultiPriceOracleL1 │────────▶│ MultiPriceOracleL2 │
│ (AggregatorV3)     │ Relayer │ (Price storage)    │
└────────────────────┘         └────────────────────┘
```

The relayer bridges L1 oracle data to L2, making it available through both the precompile interface and direct contract reads.

---

### PAGE 9: JSON-RPC API Reference

**URL:** `docs.xhavic.io/reference/rpc-api`
**Purpose:** Complete reference for all supported RPC methods.

---

# JSON-RPC API Reference

Xhavic supports all standard Ethereum JSON-RPC methods plus custom `xhv_*` extensions.

## Endpoints

| Network | HTTP | WebSocket |
|---|---|---|
| Mainnet | `https://rpc.xhavic.io` | `wss://ws.xhavic.io` `[NEEDS ENGINEERING]` |
| Testnet | `https://testnet-rpc.xhavic.io` | `wss://testnet-ws.xhavic.io` `[NEEDS ENGINEERING]` |

## Standard Ethereum Methods

All standard methods are supported. The following are the most commonly used:

### Account Methods

| Method | Description |
|---|---|
| `eth_getBalance` | Returns the balance of an account |
| `eth_getTransactionCount` | Returns the nonce of an account |
| `eth_getCode` | Returns the contract bytecode at an address |
| `eth_getStorageAt` | Returns the value of a storage slot |

### Transaction Methods

| Method | Description |
|---|---|
| `eth_sendTransaction` | Sends a transaction (requires unlocked account) |
| `eth_sendRawTransaction` | Sends a signed transaction |
| `eth_getTransactionReceipt` | Returns the receipt of a transaction |
| `eth_getTransactionByHash` | Returns transaction details by hash |
| `eth_estimateGas` | Estimates gas for a transaction |

### Block Methods

| Method | Description |
|---|---|
| `eth_blockNumber` | Returns the latest block number |
| `eth_getBlockByNumber` | Returns block data by number |
| `eth_getBlockByHash` | Returns block data by hash |

### Event Methods

| Method | Description |
|---|---|
| `eth_getLogs` | Returns logs matching a filter |
| `eth_subscribe` | Creates a subscription (WebSocket only) |
| `eth_unsubscribe` | Cancels a subscription |

### Other

| Method | Description |
|---|---|
| `eth_chainId` | Returns `0x1EA9` (mainnet) or `0x1EAA` (testnet) |
| `eth_gasPrice` | Returns current gas price |
| `eth_call` | Executes a call without creating a transaction |
| `net_version` | Returns the network ID |
| `web3_clientVersion` | Returns the client version |

## Xhavic Extension Methods

These methods are unique to Xhavic and provide access to the Dual Wallet System, oracle layer, and AI agent functionality.

### xhv_getWalletType

Returns the wallet type for an address.

**Parameters:**
1. `address` — The Ethereum address to query

**Returns:** `"instant"` | `"secured"`

**Example:**
```json
// Request
{
  "jsonrpc": "2.0",
  "method": "xhv_getWalletType",
  "params": ["0x1234567890abcdef1234567890abcdef12345678"],
  "id": 1
}

// Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "instant"
}
```

### xhv_getEscrowStatus

Returns the escrow status for a Secured Wallet transaction.

**Parameters:**
1. `txHash` — The transaction hash to query

**Returns:**
```json
{
  "status": "pending" | "finalized" | "reversed",
  "expiresIn": "21h 43m",
  "reversible": true,
  "finalizedAt": null | 1708012800
}
```

**Example:**
```json
// Request
{
  "jsonrpc": "2.0",
  "method": "xhv_getEscrowStatus",
  "params": ["0xabcd...1234"],
  "id": 1
}

// Response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "status": "pending",
    "expiresIn": "21h 43m",
    "reversible": true,
    "finalizedAt": null
  }
}
```

### xhv_getOraclePrice

Returns price data from the native oracle layer.

**Parameters:**
1. `pair` — The price pair string (e.g., `"ETH/USD"`)

**Returns:**
```json
{
  "price": "2534.87000000",
  "timestamp": 1708012800,
  "decimals": 8
}
```

### xhv_getOracleFeeds

Returns a list of all available oracle price feeds.

**Parameters:** None

**Returns:**
```json
{
  "feeds": [
    { "pair": "ETH/USD", "decimals": 8, "active": true },
    { "pair": "BTC/USD", "decimals": 8, "active": true }
  ]
}
```

`[NEEDS ENGINEERING: Confirm available feeds]`

### xhv_getAgentState

Returns the state of an AI agent.

**Parameters:**
1. `agentId` — The agent identifier

**Returns:**
```json
{
  "id": "agent-001",
  "wallet": "instant",
  "gasUsed": 245000,
  "gasLimit": 500000,
  "status": "active",
  "lastExecution": 1708012800
}
```

`[NEEDS ENGINEERING: Confirm exact response format]`

### xhv_getDepositStatus

Returns the status of an L1 → L2 deposit.

**Parameters:**
1. `txHash` — The L1 transaction hash of the deposit

**Returns:**
```json
{
  "status": "pending" | "confirmed" | "failed",
  "l2TxHash": "0x...",
  "amount": "1000000000000000000",
  "token": "ETH"
}
```

### xhv_getWithdrawalProof

Generates a Merkle inclusion proof for an L2 → L1 withdrawal.

**Parameters:**
1. `txHash` — The L2 transaction hash of the withdrawal

**Returns:**
```json
{
  "proof": ["0x...", "0x...", "0x..."],
  "stateRoot": "0x...",
  "index": 42,
  "challengePeriodEnds": 1708617600
}
```

---

### PAGE 10: Security Model

**URL:** `docs.xhavic.io/security`
**Purpose:** Build trust by documenting the defense-in-depth security architecture.

---

# Security Model

Xhavic implements a defense-in-depth security architecture with five concentric layers. Every state transition ultimately settles on Ethereum, inheriting its security guarantees.

## Defense-in-Depth Architecture

```
┌─────────────────────────────────────────────┐
│  Layer 5: Ethereum Settlement               │
│  ┌─────────────────────────────────────┐    │
│  │  Layer 4: Fraud Proofs              │    │
│  │  ┌─────────────────────────────┐    │    │
│  │  │  Layer 3: Validator Oversight│    │    │
│  │  │  ┌─────────────────────┐    │    │    │
│  │  │  │  Layer 2: Deterministic│  │    │    │
│  │  │  │  Execution           │   │    │    │
│  │  │  │  ┌───────────────┐  │   │    │    │
│  │  │  │  │ Layer 1:      │  │   │    │    │
│  │  │  │  │ Cryptographic │  │   │    │    │
│  │  │  │  │ Primitives    │  │   │    │    │
│  │  │  │  └───────────────┘  │   │    │    │
│  │  │  └─────────────────────┘   │    │    │
│  │  └────────────────────────────┘    │    │
│  └────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

## Layer 1: Cryptographic Primitives

The foundation of Xhavic's security model uses battle-tested cryptographic algorithms:

| Primitive | Algorithm | Security Level | Purpose |
|---|---|---|---|
| Hashing | Keccak-256 | 256-bit | State hashing, address derivation, Merkle trees |
| Signatures | ECDSA (secp256k1) | 128-bit | Transaction signing, validator authentication |
| Encryption | ChaCha20-Poly1305 | 256-bit | Threshold encryption for MEV protection |
| State Commitment | Merkle-Patricia Trie | — | State commitment, inclusion proofs |

## Layer 2: Deterministic Execution

Xhavic runs a fully EVM-compatible execution environment. Given identical inputs, every node produces identical outputs. This determinism is essential for:

- **Fraud proof verification** — Disputes can be narrowed to a single EVM instruction
- **State reconstruction** — Any node can independently verify the entire chain state
- **Validator agreement** — All honest validators agree on state transitions

## Layer 3: Validator Oversight

| Parameter | Value |
|---|---|
| Active validator set | Top 100 by stake |
| Minimum uptime | 95% (30-day rolling average) |
| Verification scope | State roots, transaction inclusion, data availability |

### Slashing Penalties

| Violation | Penalty |
|---|---|
| Extended offline (1 epoch / 2 hours) | 5% of stake |
| Invalid fraud proof submission | 25% of stake |
| Double-signing or state root collision | 100% of stake |

## Layer 4: Fraud Proofs

Xhavic uses interactive fraud proofs based on a bisection protocol. Any validator can challenge a state root within the 7-day challenge window.

### How It Works

1. **Challenge initiation** — A validator disputes a state root posted to Ethereum
2. **Bisection protocol** — The challenger and defender narrow the dispute through successive rounds, each halving the range of disputed computation
3. **Single instruction verification** — The dispute is reduced to a single EVM instruction
4. **On-chain adjudication** — Ethereum verifies the contested instruction and slashes the malicious party

### Single Honest Participant Property

The fraud proof system requires only one honest validator to secure the entire network. If any single validator detects an invalid state transition, they can prove it on Ethereum and trigger slashing of the malicious sequencer.

### Challenge Period

All L2 → L1 withdrawals are subject to a 7-day challenge period. During this window, any validator can dispute the state root that the withdrawal depends on. After 7 days with no successful challenge, the withdrawal is finalized on Ethereum.

For users who need immediate L1 liquidity, Xhavic supports fast exits through liquidity providers. An LP pays the user on L1 immediately and claims the withdrawal after the challenge period.

## Layer 5: Ethereum Settlement

Every Xhavic state transition settles on Ethereum through the CanonicalTransactionChain contract. This means:

- **Xhavic cannot forge state** — State roots are cryptographically committed to Ethereum
- **Xhavic cannot censor permanently** — Users can force-include transactions via L1
- **Xhavic cannot withhold data** — Transaction calldata is posted to Ethereum

## Censorship Resistance

| Threat | Mitigation |
|---|---|
| Sequencer refuses to include transaction | User submits directly to L1 via force-include mechanism |
| Sequencer delays transaction | Transaction timeout of 24 hours guarantees inclusion |
| Sequencer goes offline | Sequencer rotation and slashing |
| Data withholding | All transaction data posted to Ethereum calldata |

### Force-Include via L1

If the sequencer censors a transaction, the user can submit it directly to the L1 bridge contract. The sequencer must include this transaction within the defined timeout window. Failure to do so triggers automatic rotation and slashing.

Cost: approximately 10x the normal L2 transaction fee (because the transaction is executed via L1 calldata).

---

### PAGE 11: Fees & Gas

**URL:** `docs.xhavic.io/protocol/fees`
**Purpose:** Explain the fee model, compare to L1 and other L2s.

---

# Fees & Gas

## Fee Model

Xhavic transaction fees have two components:

### 1. L2 Execution Fee

The cost of executing your transaction on the Xhavic EVM. This is analogous to Ethereum gas but significantly cheaper due to the optimized L2 execution environment.

### 2. L1 Data Fee

The cost of posting your transaction's calldata to Ethereum for data availability. This is the primary cost driver and varies with Ethereum gas prices.

```
Total Fee = L2 Execution Fee + L1 Data Fee
```

`[NEEDS ENGINEERING: Provide exact formula for L1 data fee calculation. Is it based on calldata bytes * L1 gas price * scalar? What is the scalar?]`

## Cost Comparison

### Xhavic vs Ethereum L1

| Operation | Ethereum L1 | Xhavic L2 | Savings |
|---|---|---|---|
| Simple ETH transfer | ~$5.00 | ~$0.04 | 125x |
| ERC-20 transfer | ~$8.00 | ~$0.04 | 200x |
| Token swap (DEX) | ~$15.00 | ~$0.12 | 125x |
| NFT mint | ~$25.00 | ~$0.08 | 312x |
| Contract deployment | ~$50.00 | ~$1.50 | 33x |

*Costs based on testnet benchmarks, January 2026. L1 costs assume ~30 gwei gas price.*

### Xhavic vs Other L2s

| Network | Avg Fee | TPS | Soft Finality |
|---|---|---|---|
| **Xhavic** | **$0.04** | **2,000+** | **200ms** |
| Arbitrum One | $0.08 | ~1,000 | 400ms |
| Optimism | $0.10 | ~800 | 2s |
| StarkNet | $0.06 | ~1,500 | 200ms |

## Gas Cost Table (L2 vs L1)

| EVM Opcode | Ethereum L1 Gas | Xhavic L2 Gas | Reduction |
|---|---|---|---|
| SSTORE (new) | 20,000 | 500 | 40x |
| SSTORE (update) | 5,000 | 200 | 25x |
| SLOAD | 2,100 | 50 | 42x |
| Transaction base | 21,000 | 300 | 70x |
| CREATE2 | 32,000 | 800 | 40x |
| LOG0 | 375 | 50 | 7.5x |
| CALL | 2,600 | 100 | 26x |

`[NEEDS ENGINEERING: Confirm all L2 gas values. Are these exact or approximate?]`

## Estimating Fees

### Using eth_estimateGas

```typescript
const gasEstimate = await provider.estimateGas({
  to: contractAddress,
  data: encodedFunctionCall,
  from: senderAddress,
});

const gasPrice = await provider.getGasPrice();
const estimatedFee = gasEstimate * gasPrice;
console.log(`Estimated fee: ${ethers.formatEther(estimatedFee)} ETH`);
```

### Fee Optimization Tips

1. **Minimize calldata** — L1 data fees scale with transaction size. Use compact encoding and avoid unnecessary data in transactions.
2. **Batch operations** — Combine multiple operations into a single transaction to share the base fee.
3. **Use events for off-chain data** — Store large data off-chain and emit event logs instead of writing to storage.
4. **Avoid storage writes when possible** — SSTORE remains the most expensive operation even on L2.

---

### PAGE 12: Bridge Overview

**URL:** `docs.xhavic.io/bridge`
**Purpose:** How bridging works, supported assets, architecture.

---

# Bridge Overview

The Xhavic bridge enables asset transfers between Ethereum (L1) and Xhavic (L2). It uses a lock-and-mint mechanism secured by Ethereum's settlement layer.

## Architecture

```
Ethereum L1                         Xhavic L2
┌──────────────┐                   ┌──────────────┐
│ Bridge       │                   │ Bridge       │
│ Contract     │◄─────────────────▶│ Contract     │
│              │                   │              │
│ Locks ETH/   │     Relayer       │ Mints WETH/  │
│ ERC-20       │                   │ L2 tokens    │
└──────────────┘                   └──────────────┘
       │                                  │
       │                                  │
┌──────▼──────┐                   ┌──────▼──────┐
│ Canonical   │                   │ State       │
│ Transaction │                   │ Verification│
│ Chain       │                   │             │
└─────────────┘                   └─────────────┘
```

## Deposits (L1 → L2)

Deposits move assets from Ethereum to Xhavic.

1. Send ETH or ERC-20 tokens to the bridge contract on Ethereum
2. The bridge contract locks the assets and emits a deposit event
3. The relayer detects the deposit and queues a minting instruction on L2
4. WETH or the L2 token equivalent is minted on Xhavic
5. Deposit typically completes within minutes

**Important:** ETH becomes WETH (an ERC-20 token) on Xhavic for replay protection.

[Deposit Guide →](/bridge/deposits)

## Withdrawals (L2 → L1)

Withdrawals move assets from Xhavic back to Ethereum. There are two paths:

### Standard Withdrawal (7-day)

1. Initiate withdrawal on L2 — tokens are burned
2. Wait for the L2 batch containing your withdrawal to post on Ethereum
3. Generate a Merkle inclusion proof (`xhv_getWithdrawalProof`)
4. Wait the 7-day challenge period
5. Execute the withdrawal on L1 to claim your assets

### Fast Exit (via Liquidity Provider)

For users who need immediate L1 liquidity:

1. Initiate withdrawal on L2
2. A liquidity provider pays you on L1 immediately (minus a fee)
3. The LP claims the standard withdrawal after the 7-day period

`[NEEDS ENGINEERING: Is there a built-in fast exit mechanism, or is this third-party?]`

[Withdrawal Guide →](/bridge/withdrawals)

## Supported Assets

| Asset Type | Supported | Notes |
|---|---|---|
| ETH | Yes | Represented as WETH on L2 |
| ERC-20 tokens | Yes | Standard token bridging |
| ERC-721 (NFTs) | `[NEEDS ENGINEERING]` | |
| ERC-1155 | `[NEEDS ENGINEERING]` | |

## Bridge Contract Addresses

| Contract | Network | Address |
|---|---|---|
| L1 Bridge | Ethereum | `[NEEDS ENGINEERING]` |
| L2 Bridge | Xhavic | `[NEEDS ENGINEERING]` |
| L1 Bridge (Testnet) | Sepolia | `[NEEDS ENGINEERING]` |
| L2 Bridge (Testnet) | Xhavic Testnet | `[NEEDS ENGINEERING]` |

## Cross-Chain Messaging

Beyond asset transfers, the bridge supports arbitrary message passing between L1 and L2. This enables cross-chain contract calls, governance actions initiated from L1, and other inter-layer communication.

[Cross-Chain Messaging →](/bridge/messaging)

---

### PAGE 13: Protocol Parameters

**URL:** `docs.xhavic.io/reference/parameters`
**Purpose:** Single reference page for every protocol parameter.

---

# Protocol Parameters

All protocol parameters in one place. Values marked with a date reflect testnet measurements.

## Block Production

| Parameter | Value | Source |
|---|---|---|
| Block time | 2 seconds | Whitepaper §5 |
| Max block size | 5 MB (compressed) | Whitepaper §5 |
| Batch window | 60 seconds | Whitepaper §5 |
| Transaction timeout | 24 hours | Whitepaper §5 |

## Performance

| Parameter | Value | Source |
|---|---|---|
| Peak TPS | 2,000+ | Testnet, January 2026 |
| Average latency | 200ms (soft confirmation) | Testnet, January 2026 |
| Average fee | $0.04 | Testnet, January 2026 |
| Soft finality | 2-5 seconds | Whitepaper §6 |
| Ethereum finality | ~13 minutes | Ethereum block time |

## Settlement

| Parameter | Value | Source |
|---|---|---|
| Settlement chain | Ethereum Mainnet | Whitepaper §4 |
| Challenge period | 7 days | Whitepaper §7 |
| Fraud proof type | Interactive bisection | Whitepaper §7 |
| State commitment | Modified Merkle-Patricia Trie | Whitepaper §7 |
| State encoding | RLP | Whitepaper §7 |

## Dual Wallet System

| Parameter | Value | Source |
|---|---|---|
| Instant Wallet finality | < 200ms (soft) | Whitepaper §8 |
| Secured Wallet escrow | 24 hours | Whitepaper §8 |
| Instant composability | Full | Whitepaper §8 |
| Secured composability | None (until finalized) | Whitepaper §8 |

## Validators

| Parameter | Value | Source |
|---|---|---|
| Active set size | Top 100 by stake | Whitepaper §9 |
| Minimum uptime | 95% (30-day rolling) | Whitepaper §9 |
| Epoch duration | 2 hours | Whitepaper §9 |
| Offline slashing | 5% of stake | Whitepaper §9 |
| Invalid fraud proof slashing | 25% of stake | Whitepaper §9 |
| Double-signing slashing | 100% of stake | Whitepaper §9 |

## Oracle Layer

| Parameter | Value | Source |
|---|---|---|
| Precompile address range | `0x00...F0` — `0x00...FF` | Whitepaper §12 |
| Data sources | Exchange APIs, Chainlink, Band Protocol, custom | Whitepaper §12 |
| Aggregation method | Weighted average with outlier detection | Whitepaper §12 |

## Network Identifiers

| Parameter | Mainnet | Testnet |
|---|---|---|
| Chain ID | 7849 | 7850 |
| Chain ID (hex) | 0x1EA9 | 0x1EAA |
| RPC endpoint | https://rpc.xhavic.io | https://testnet-rpc.xhavic.io |
| Explorer | https://explorer.xhavic.io | `[NEEDS ENGINEERING]` |
| Bridge | https://bridge.xhavic.io | `[NEEDS ENGINEERING]` |
| Faucet | — | https://faucet.xhavic.io |

## Infrastructure Requirements

| Node Type | CPU | RAM | Storage | Monthly Cost |
|---|---|---|---|---|
| Full node (sequencer) | 16 cores, 3.5+ GHz | 64 GB | 2 TB NVMe | $800–$1,200 |
| Archive node (validator) | 8 cores, 2.5+ GHz | 32 GB | 4 TB HDD | $200–$400 |
| Light client (RPC) | 4 cores | 8 GB | 100 GB | $50–$100 |

## Scalability Roadmap

| Phase | Target TPS | Mechanism | Timeline |
|---|---|---|---|
| Phase I | 2,000+ | Current sequencer | Q1-Q2 2026 |
| Phase II | 12,000 | Compression + batching + parallel | Q3-Q4 2026 |
| Phase III | 120,000+ | Execution sharding | H2 2027+ |

---

### PAGE 14: Finality Model

**URL:** `docs.xhavic.io/dual-wallet/finality`
**Purpose:** Explain the different finality states and what they mean for applications.

---

# Finality Model

Xhavic has multiple finality states. Understanding these is essential for building applications that correctly handle transaction confirmation.

## Finality States

```
Transaction submitted
        │
        ▼
┌───────────────┐
│ SEQUENCED     │  ~200ms
│ (Soft finality)│
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ BATCH POSTED  │  ~60 seconds
│ (L1 calldata) │
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ L1 CONFIRMED  │  ~13 minutes
│ (Eth finality)│
└───────┬───────┘
        │
        ▼
┌───────────────┐
│ CHALLENGE     │  7 days
│ PERIOD CLOSED │
│ (Full finality)│
└───────────────┘
```

## By Wallet Type

### Instant Wallet Finality

| State | Time | Meaning | Safe to act on? |
|---|---|---|---|
| Sequenced | ~200ms | Sequencer has ordered the tx | Yes — for most applications |
| Batch posted | ~60s | Calldata posted to Ethereum | Yes — data is on L1 |
| L1 confirmed | ~13 min | Ethereum block confirmed | Yes — very high security |
| Challenge closed | 7 days | No fraud proof submitted | Yes — maximum security |

For Instant Wallet transactions, **soft finality (200ms)** is sufficient for most DeFi applications. The transaction is practically irreversible at this point because:
- The sequencer has committed to the ordering
- Re-ordering would require the sequencer to produce a conflicting state root, triggering fraud proofs

### Secured Wallet Finality

| State | Time | Meaning | Safe to act on? |
|---|---|---|---|
| Escrowed | Immediate | Tx is in 24h escrow | No — can be reversed |
| Escrow closed | 24 hours | Escrow period expired | Yes — tx is finalized |
| Batch posted | 24h + ~60s | Calldata posted to L1 | Yes — data is on L1 |
| Challenge closed | 24h + 7 days | Full finality | Yes — maximum security |

For Secured Wallet transactions, **no action should be taken until the 24-hour escrow closes.** During the escrow window, authorized signers can reverse the transaction.

## Application Guidelines

| Application Type | Minimum Finality | Recommended Wallet |
|---|---|---|
| DEX trades | Soft (200ms) | Instant |
| Token transfers (small) | Soft (200ms) | Instant |
| NFT minting | Soft (200ms) | Instant |
| AI agent operations | Soft (200ms) | Instant |
| Treasury transfers | Escrow closed (24h) | Secured |
| RWA settlement | L1 confirmed (13min) + escrow | Secured |
| Institutional operations | Challenge closed (7d) | Secured |
| L2 → L1 withdrawals | Challenge closed (7d) | Either |

---

<a id="deliverable-e"></a>
## DELIVERABLE E — XHAVIC DIFFERENTIATORS DOCUMENTATION

### What Makes Xhavic Different from Other L2s

This section documents the three unique protocol-level capabilities that distinguish Xhavic.

#### 1. Dual Wallet System (vs. Single Finality on Arbitrum/Optimism)

**What exists today:** Every L2 (Arbitrum, Optimism, Base, zkSync) uses a single finality model. All transactions — whether a $5 swap or a $50M treasury transfer — go through the same execution path with the same speed and the same (lack of) reversal capability.

**What Xhavic adds:** Protocol-level separation into two execution paths. The sequencer routes transactions based on the originating wallet type. This is not an application-layer wrapper — it is built into the sequencer's ordering logic.

**Technical distinction:** Composability and reversibility are mutually exclusive at the protocol level. Xhavic is the first L2 to support both by implementing parallel execution paths rather than forcing a compromise.

**Competitor comparison:**

| Feature | Xhavic | Arbitrum | Optimism | zkSync |
|---|---|---|---|---|
| Fast execution path | Instant Wallet (<200ms) | Default (~400ms) | Default (~2s) | Default (~200ms) |
| Safe execution path | Secured Wallet (24h escrow) | None | None | None |
| Protocol-level reversibility | Yes (Secured Wallet) | No | No | No |
| Composability + Safety choice | Yes | No | No | No |

#### 2. Native Oracle Layer (vs. External Oracle Dependencies)

**What exists today:** Every L2 relies on external oracle networks (Chainlink, Pyth, etc.) deployed as smart contracts. These require cross-contract calls, bridge latency, and third-party operational dependencies.

**What Xhavic adds:** Oracle functionality is embedded as EVM precompiles at addresses `0x00...F0-FF`. Data is available at native execution speed with minimal gas overhead. The oracle layer aggregates from multiple sources (exchange APIs, Chainlink, Band Protocol) with outlier detection and reliability scoring.

**Technical distinction:** Precompiles execute within the EVM without external contract calls. This means lower gas costs, zero bridge latency, and no dependency on external oracle contract deployments.

**Competitor comparison:**

| Feature | Xhavic | Arbitrum | Optimism | zkSync |
|---|---|---|---|---|
| Oracle type | Native precompile | External contracts | External contracts | External contracts |
| Gas cost for price read | Minimal (precompile) | ~50,000 gas | ~50,000 gas | ~50,000 gas |
| Data aggregation | Multi-source + outlier detection | Single source per feed | Single source per feed | Single source per feed |
| Bridge latency | None (native) | Cross-contract | Cross-contract | Cross-contract |

#### 3. AI Agent Execution (vs. No Native Support)

**What exists today:** AI agents on existing L2s interact through standard EOA accounts with no special protocol support. Execution ordering is not deterministic for agent strategies, and oracle data requires external contract calls.

**What Xhavic adds:** First-class protocol support for autonomous agents with deterministic transaction ordering, programmatic wallet control (both Instant and Secured), native oracle precompile access, and gas-metered compute cycles.

**Technical distinction:** The combination of deterministic ordering + native oracle access + sub-200ms latency creates an execution environment purpose-built for autonomous strategies. Agents can read price data and execute trades within a single block without external dependencies.

---

<a id="deliverable-f"></a>
## DELIVERABLE F — GAPS & QUESTIONS FOR XHAVIC ENGINEERS

### Critical (Must Answer Before Docs Can Ship)

#### Dual Wallet System

1. **How does a user choose their wallet type?** Is it set during wallet creation? Can it be changed? Is it per-address or per-transaction?
2. **Can a single address switch between Instant and Secured?** Or does each address have a fixed type?
3. **Secured Wallet reversal process:** Who are the "authorized signers"? Is it multi-sig? How many signatures are required? What is the reversal transaction format?
4. **What happens to token balances during escrow?** Are tokens visible in `eth_getBalance`? Do they show as "pending"? Can the user see their escrow balance separately?
5. **Event emission timing:** Are events emitted when the Secured Wallet transaction executes (entering escrow) or when it finalizes (escrow closes)?
6. **Escrow contract address:** Where does the escrow logic live? Is it a system contract on L2?
7. **What happens if a Secured Wallet transaction interacts with a contract that reads state from an Instant Wallet transaction?** Is there isolation at the state level?

#### Oracle Layer

8. **Exact precompile ABI/interface:** What are the function signatures for each precompile address? What are the parameter types and return types?
9. **Available price pairs at launch:** Which pairs will be available on Day 1?
10. **Update frequency:** How often are price feeds updated? Is it block-by-block, time-based, or deviation-based?
11. **Gas costs for precompile calls:** What is the exact gas cost for each precompile function?
12. **Precompile address assignments:** What does each address from 0x...F0 through 0x...FF do? Are they all assigned?

#### Network & Infrastructure

13. **WebSocket RPC endpoint:** Is `wss://ws.xhavic.io` the correct URL? Is it available?
14. **Testnet explorer URL:** Is it `testnet-explorer.xhavic.io`?
15. **Rate limits:** What are the RPC rate limits per IP/key?
16. **Third-party RPC providers:** Are Alchemy, Infura, or QuickNode supporting Xhavic? When?
17. **Contract verification:** Is the explorer Etherscan-compatible for contract verification? What API endpoint?
18. **Faucet details:** How much testnet ETH per request? Rate limiting?

#### EVM Compatibility

19. **Opcode differences:** Does COINBASE return the sequencer address? What does PREVRANDAO return? How many blocks does BLOCKHASH cover?
20. **EIP-1559 support:** Does Xhavic L2 use EIP-1559 (base fee + priority fee)? Or flat gas price?
21. **L1 data fee formula:** What is the exact formula for the L1 data fee component?
22. **Contract size limit:** Same as Ethereum (24KB)?
23. **Block.timestamp behavior:** Is it L2 block timestamp or derived from L1?

### Important (Should Answer for Tier 1 Docs)

#### Bridge

24. **Bridge contract addresses:** L1 and L2 addresses for mainnet and testnet
25. **Supported tokens:** Is there a token whitelist? Or can any ERC-20 be bridged?
26. **NFT/ERC-1155 bridging:** Supported at launch?
27. **Bridge SDK:** Is there a JavaScript/TypeScript SDK for programmatic bridging? Package name?
28. **Minimum deposit/withdrawal amounts:** Any minimums?
29. **Fast exit mechanism:** Built-in protocol feature or third-party service?

#### Smart Contract Development

30. **CREATE2 behavior:** Identical address computation to Ethereum?
31. **SELFDESTRUCT:** Deprecated? Supported? Behavior?
32. **Account abstraction:** ERC-4337 support? Or native?

#### Node Operations

33. **Node software:** What binary/Docker image? Where to download?
34. **Configuration format:** TOML, YAML, env vars?
35. **Monitoring:** Prometheus metrics endpoint? Pre-built Grafana dashboards?
36. **Peer discovery:** Static peers? DNS? Discv5?
37. **Fast sync:** Snapshot/checkpoint downloads available?

#### Governance

38. **XHV token:** Total supply? Distribution? Vesting?
39. **Voting mechanism:** Token-weighted? Quadratic? Delegation?
40. **Proposal format:** On-chain submission process?

### Nice-to-Have (For Tier 2+ Docs)

41. **Multicall3 deployment:** What address? Pre-deployed?
42. **WETH address:** Standard WETH9 or custom?
43. **The Graph:** Is there a hosted subgraph service? Subgraph studio support?
44. **Error codes:** Is there a defined error code set for xhv_* methods?
45. **AI Agent SDK:** Package name, installation, documentation?
46. **Audit firm selection:** Who is performing the external audits (Phase I and II)?
47. **Bug bounty program:** URL, scope, reward tiers, maximum payout?
48. **Incident response:** SLA for security incidents? Contact email?

---

## IMPLEMENTATION NOTES

### File Structure for Docs Site

If building the docs site as part of the existing Astro project, recommended structure:

```
src/
  content/
    docs/
      index.mdx                          ← Welcome page
      why-xhavic.mdx
      differences-from-ethereum.mdx
      network-info.mdx
      quickstart/
        index.mdx
        hardhat.mdx
        foundry.mdx
        remix.mdx
      dual-wallet/
        index.mdx
        instant.mdx
        secured.mdx
        integration.mdx
        finality.mdx
        migration.mdx
      oracle/
        index.mdx
        precompiles.mdx
        price-feeds.mdx
        ai-agents.mdx
        build-agent.mdx
      bridge/
        index.mdx
        deposits.mdx
        withdrawals.mdx
        messaging.mdx
        programmatic.mdx
      protocol/
        index.mdx
        execution.mdx
        sequencer.mdx
        settlement.mdx
        data-availability.mdx
        fraud-proofs.mdx
        transaction-lifecycle.mdx
        fees.mdx
      security/
        index.mdx
        cryptography.mdx
        validators.mdx
        censorship-resistance.mdx
        audits.mdx
        bug-bounty.mdx
      nodes/
        index.mdx
        full-node.mdx
        archive-node.mdx
        validator.mdx
        requirements.mdx
      governance/
        index.mdx
        domains.mdx
        proposals.mdx
        xhv-token.mdx
      tools/
        index.mdx
        rpc.mdx
        explorer.mdx
        faucet.mdx
        oracles.mdx
        indexers.mdx
        wallets.mdx
      tutorials/
        first-contract.mdx
        oracle-price.mdx
        dual-wallet-dapp.mdx
        nft.mdx
        bridge-sdk.mdx
        ai-agent.mdx
      reference/
        rpc-api.mdx
        contracts.mdx
        parameters.mdx
        standards.mdx
        errors.mdx
        gas-table.mdx
        glossary.mdx
      migrate/
        from-ethereum.mdx
        from-arbitrum.mdx
        from-optimism.mdx
        from-zksync.mdx
      notices/
        status.mdx
        changelog.mdx
        terms.mdx
        privacy.mdx
  layouts/
    DocsLayout.astro                      ← Docs-specific layout with sidebar
  components/
    docs/
      Sidebar.astro                       ← Left sidebar navigation
      TableOfContents.astro               ← Right-side page TOC
      Callout.astro                       ← Info/warning/danger callouts
      CodeBlock.astro                     ← Enhanced code block with copy button
      Tabs.astro                          ← Tab switcher for Hardhat/Foundry/Remix
```

### Content Collection Schema (to add to config.ts)

```typescript
const docs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum([
      "getting-started",
      "dual-wallet",
      "oracle",
      "bridge",
      "protocol",
      "security",
      "nodes",
      "governance",
      "tools",
      "tutorials",
      "reference",
      "migrate",
      "notices",
    ]),
    sortOrder: z.number().default(0),
    draft: z.boolean().default(false),
    lastUpdated: z.coerce.date().optional(),
  }),
});
```

---

## SUMMARY

| Deliverable | Status | Pages/Items |
|---|---|---|
| A. Information Architecture | ✅ Complete | 73 pages across 13 sections |
| B. URL Plan | ✅ Complete | 73 URL slugs defined |
| C. Developer Checklist | ✅ Complete | 48+ items, 30+ flagged for engineering |
| D. Full Draft Pages | ✅ Complete | 14 pages fully drafted |
| E. Differentiators | ✅ Complete | 3 differentiators documented |
| F. Engineering Questions | ✅ Complete | 48 questions across 4 priority tiers |

**Next step:** Share Deliverable F with the engineering team. Their answers will unblock the `[NEEDS ENGINEERING]` placeholders across all draft pages and enable Tier 1 docs to ship.
