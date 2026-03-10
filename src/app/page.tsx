import Link from 'next/link';

const stats = [
  { label: 'Total Supply', value: '21,000,000 PSRE' },
  { label: 'Emission Reserve', value: '60% (12.6M PSRE)' },
  { label: 'Epoch Duration', value: '7 Days' },
  { label: 'Network', value: 'Base' },
];

const features = [
  {
    title: 'Demand-Bounded',
    icon: '📈',
    description:
      'Token issuance is capped at 10% of new net PSRE purchases per epoch. No demand, no mint. Rewards are a direct function of real on-chain economic activity — not a schedule.',
  },
  {
    title: 'Scarcity-Controlled',
    icon: '🔒',
    description:
      'An asymptotic scarcity function E(t) = E₀ · (1 − x)² progressively tightens emission as the reserve depletes. As more PSRE is minted, the weekly ceiling shrinks toward zero automatically.',
  },
  {
    title: 'Governance-Limited',
    icon: '⚖️',
    description:
      'The DAO can tune parameters within fixed bounds (base rate 5–15%, epoch 3–14 days). Core supply cap and emission math are immutable. No admin mint authority exists — ever.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Partner Creates a PartnerVault',
    desc: 'Any approved partner deploys a dedicated on-chain PartnerVault contract, their permanent identity in the protocol.',
  },
  {
    step: '02',
    title: 'Partner Buys PSRE',
    desc: 'The partner acquires PSRE through their PartnerVault. This net buy is recorded by the protocol as real on-chain demand.',
  },
  {
    step: '03',
    title: 'Epoch Finalizes — Rewards Minted',
    desc: 'Every 7 days the protocol calculates the emission budget (min of demand-based and scarcity limits) and mints PSRE rewards proportional to each partner\'s contribution.',
  },
  {
    step: '04',
    title: 'Partners & Stakers Claim Rewards',
    desc: '70% of epoch rewards flow to PartnerVaults (split by tier). 30% flow to PSRE stakers and LP token holders.',
  },
];

export default function HomePage() {
  return (
    <div className="text-white">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold mb-8 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            Base Network · Testnet Live
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Prospereum —{' '}
            <span className="text-[#D4AF37]">Proof of Net Economic Contribution</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Token issuance unlocked only when provable on-chain demand is generated.
          </p>

          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Prospereum (PSRE) is a decentralized behavioral mining protocol on Base. It rewards real economic
            participation — not inflation farming — and enforces permanent scarcity through math, not governance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/whitepaper"
              className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded hover:bg-[#b8962e] transition-colors"
            >
              Read Whitepaper
            </Link>
            <Link
              href="/partners"
              className="px-8 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded hover:bg-[#D4AF37]/10 transition-colors"
            >
              Become a Partner
            </Link>
            <Link
              href="/stake"
              className="px-8 py-3 border border-white/20 text-white font-bold rounded hover:bg-white/5 transition-colors"
            >
              Stake PSRE
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-[#D4AF37]/20 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-bold text-[#D4AF37]">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          How <span className="text-[#D4AF37]">Prospereum</span> Works
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Unlike proof-of-work or proof-of-stake, Prospereum issues tokens only when verifiable economic demand
          is recorded on-chain — each epoch, every 7 days.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-colors">
              <div className="text-4xl font-black text-[#D4AF37]/20 mb-4">{s.step}</div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supply breakdown */}
      <section className="bg-[#0a0a0a] border-y border-[#D4AF37]/10 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-8 text-center">Supply Allocation</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#D4AF37]/20">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Category</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-semibold">%</th>
                  <th className="text-right py-3 px-4 text-gray-400 font-semibold">Amount (PSRE)</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Behavioral Mining Reserve', pct: '60%', amt: '12,600,000', note: 'Not minted at genesis — demand-gated emission' },
                  { cat: 'Team & Founders', pct: '20%', amt: '4,200,000', note: '1-year cliff, 4-year linear vesting' },
                  { cat: 'Ecosystem Growth', pct: '8%', amt: '1,680,000', note: 'Minted to Treasury (SAFE) at genesis' },
                  { cat: 'DAO Treasury', pct: '7%', amt: '1,470,000', note: 'Liquidity, audits, infrastructure, expansion' },
                  { cat: 'Bootstrap Liquidity', pct: '5%', amt: '1,050,000', note: 'Minted to Treasury (SAFE) at genesis' },
                ].map((row) => (
                  <tr key={row.cat} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 px-4 text-white">{row.cat}</td>
                    <td className="py-3 px-4 text-[#D4AF37] text-right font-mono">{row.pct}</td>
                    <td className="py-3 px-4 text-white text-right font-mono">{row.amt}</td>
                    <td className="py-3 px-4 text-gray-500">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4 text-center">No pre-sale · No ICO · No private token sale · Liquidity seeded from treasury allocation only</p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Built Different. <span className="text-[#D4AF37]">By Design.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-xl p-8 hover:border-[#D4AF37]/60 transition-all group"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-[#D4AF37] mb-3 group-hover:text-[#e8c84a] transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Participate?</h2>
          <p className="text-gray-400 mb-8">
            Join the Prospereum ecosystem as a partner, staker, or LP provider. Mainnet launching on Base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners"
              className="px-8 py-3 bg-[#D4AF37] text-black font-bold rounded hover:bg-[#b8962e] transition-colors"
            >
              Become a Partner →
            </Link>
            <Link
              href="/stats"
              className="px-8 py-3 border border-[#D4AF37]/40 text-[#D4AF37] font-bold rounded hover:bg-[#D4AF37]/10 transition-colors"
            >
              View Live Stats
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
