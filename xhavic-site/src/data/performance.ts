// ---------------------------------------------------------------------------
// Performance metrics — headline stats and comparison table
// ---------------------------------------------------------------------------

export interface HeadlineStat {
  readonly label: string;
  readonly value: string;
  readonly unit?: string;
  readonly footnote: string;
}

export const HEADLINE_STATS: readonly HeadlineStat[] = [
  {
    label: "Transactions per second",
    value: "2,000+",
    unit: "TPS",
    footnote: "Testnet benchmarks, January 2026",
  },
  {
    label: "Average transaction fee",
    value: "$0.04",
    unit: "avg fee",
    footnote: "Testnet benchmarks, January 2026",
  },
  {
    label: "Transaction latency",
    value: "<200",
    unit: "ms",
    footnote: "Testnet benchmarks, January 2026",
  },
  {
    label: "Soft finality",
    value: "2-5",
    unit: "seconds",
    footnote: "Testnet benchmarks, January 2026",
  },
] as const;

// ---- Comparison table ----

export interface ComparisonRow {
  readonly network: string;
  readonly tps: string;
  readonly latency: string;
  readonly finality: string;
  readonly avgFee: string;
  readonly highlight?: boolean;
}

export const COMPARISON_TABLE: readonly ComparisonRow[] = [
  {
    network: "Xhavic",
    tps: "2,000+",
    latency: "<200ms",
    finality: "2-5s (soft)",
    avgFee: "$0.04",
    highlight: true,
  },
  {
    network: "Ethereum",
    tps: "15-30",
    latency: "12s",
    finality: "~15 min",
    avgFee: "$1-$50+",
  },
  {
    network: "Arbitrum",
    tps: "~40,000",
    latency: "~250ms",
    finality: "~1 week (fraud proof)",
    avgFee: "$0.01-$0.10",
  },
  {
    network: "Optimism",
    tps: "~2,000",
    latency: "~2s",
    finality: "~1 week (fraud proof)",
    avgFee: "$0.01-$0.20",
  },
  {
    network: "StarkNet",
    tps: "~500",
    latency: "~5s",
    finality: "~hours (validity proof)",
    avgFee: "$0.01-$0.10",
  },
] as const;

export const COMPARISON_COLUMNS = [
  { key: "network", label: "Network" },
  { key: "tps", label: "TPS" },
  { key: "latency", label: "Latency" },
  { key: "finality", label: "Finality" },
  { key: "avgFee", label: "Avg Fee" },
] as const;

export const PERFORMANCE_FOOTNOTE =
  "Testnet benchmarks, January 2026. Mainnet performance may vary." as const;
