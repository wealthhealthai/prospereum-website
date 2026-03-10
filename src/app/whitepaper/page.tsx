import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Whitepaper — Prospereum Protocol v2.3',
  description:
    'Read the Prospereum (PSRE) whitepaper. Proof of Net Economic Contribution — demand-bounded, scarcity-controlled behavioral mining on Base.',
};

export default function WhitepaperPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 text-white">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Prospereum <span className="text-[#D4AF37]">Whitepaper</span> v2.3
        </h1>
        <p className="text-gray-400 text-lg">March 6, 2026 · Proof of Net Economic Contribution</p>
        <a
          href="/prospereum-whitepaper-v2.3.pdf"
          download
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#D4AF37] text-black font-bold rounded hover:bg-[#b8962e] transition-colors"
        >
          ↓ Download PDF
        </a>
      </div>

      {/* PDF embed */}
      <div className="mb-16 rounded-xl overflow-hidden border border-[#D4AF37]/20">
        <iframe
          src="/prospereum-whitepaper-v2.3.pdf"
          className="w-full"
          style={{ height: '80vh' }}
          title="Prospereum Whitepaper v2.3"
        />
      </div>

      {/* SEO key sections */}
      <div className="prose prose-invert max-w-none space-y-16">

        {/* Abstract */}
        <section>
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">1. Abstract</h2>
          <p className="text-gray-300 leading-relaxed">
            Prospereum is a decentralized behavioral mining protocol that aligns economic demand with
            progressive scarcity. Unlike Proof-of-Work (Bitcoin) or Proof-of-Stake (Ethereum),
            Prospereum introduces <strong className="text-white">Proof of Net Economic Contribution</strong>:
            token issuance is unlocked only when provable on-chain demand for PSRE is generated, and
            issuance is permanently constrained by an asymptotic scarcity function tied solely to
            emitted supply. Prospereum is neutral infrastructure — applications define aligned economic
            activity, the protocol measures only net acquisition and time-locked participation.
          </p>
        </section>

        {/* Supply model */}
        <section>
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">3. Supply Model</h2>
          <p className="text-gray-300 mb-4">Total supply is immutable at <strong className="text-white">21,000,000 PSRE</strong>.</p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#D4AF37]/30">
                  <th className="text-left py-3 px-4 text-[#D4AF37] font-semibold">Category</th>
                  <th className="text-right py-3 px-4 text-[#D4AF37] font-semibold">%</th>
                  <th className="text-right py-3 px-4 text-[#D4AF37] font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 text-[#D4AF37] font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Behavioral Mining Emission Reserve', pct: '60%', amt: '12,600,000', note: 'Not minted at genesis — reserved for epoch-based emission' },
                  { cat: 'Team & Founders', pct: '20%', amt: '4,200,000', note: '1-year cliff, 4-year linear vesting. No governance override.' },
                  { cat: 'Ecosystem Growth', pct: '8%', amt: '1,680,000', note: 'Minted at genesis to Treasury Wallet (SAFE)' },
                  { cat: 'DAO Treasury', pct: '7%', amt: '1,470,000', note: 'Liquidity stabilization, audit funding, infrastructure' },
                  { cat: 'Bootstrap Liquidity', pct: '5%', amt: '1,050,000', note: 'Minted at genesis to Treasury Wallet (SAFE)' },
                ].map((row) => (
                  <tr key={row.cat} className="border-b border-white/5 hover:bg-white/[0.02]">
                    <td className="py-3 px-4 text-white">{row.cat}</td>
                    <td className="py-3 px-4 text-[#D4AF37] text-right font-mono font-bold">{row.pct}</td>
                    <td className="py-3 px-4 text-white text-right font-mono">{row.amt}</td>
                    <td className="py-3 px-4 text-gray-400 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#0d0d0d] border border-[#D4AF37]/10 rounded-lg p-4 text-sm text-gray-400">
            <strong className="text-[#D4AF37]">Launch Policy:</strong> No pre-sale · No private token sale ·
            No ICO · No discounted insider allocation. Liquidity seeded solely from treasury allocation.
            Behavioral mining begins only after the first full epoch.
          </div>
        </section>

        {/* Emission model */}
        <section>
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">5. Behavioral Mining Reward Emission Model</h2>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Each partner participates by creating a <strong className="text-white">PartnerVault</strong> — a
              dedicated on-chain contract used to acquire and distribute PSRE tokens. When a partner purchases
              PSRE through its PartnerVault, the protocol records the <em>new net buy</em> generated during
              that epoch.
            </p>
            <p>
              At the end of each <strong className="text-white">7-day epoch</strong>, the protocol calculates
              the total reward budget based on (a) demand generated and (b) the scarcity curve, then divides
              it: 70% to partners, 30% to stakers.
            </p>
          </div>

          <h3 className="text-lg font-bold text-white mt-8 mb-3">Scarcity Curve</h3>
          <div className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-lg p-6">
            <p className="text-gray-400 text-sm mb-4">
              The scarcity-based emission ceiling decreases asymptotically as the reserve depletes:
            </p>
            <div className="font-mono text-[#D4AF37] text-lg text-center py-4">
              E_scarcity(t) = E₀ · (1 − x(t))²
            </div>
            <p className="text-gray-500 text-xs text-center">
              where x(t) = cumulative emitted / 12.6M reserve · E₀ = 0.1% of reserve per epoch initially · k = 2
            </p>
            <p className="text-gray-400 text-sm mt-4">
              As more PSRE is emitted, x(t) approaches 1, and the ceiling approaches zero. This guarantees
              the total supply cap is never breached and scarcity increases naturally over time.
            </p>
          </div>

          <h3 className="text-lg font-bold text-white mt-8 mb-3">Final Epoch Budget</h3>
          <div className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-lg p-6 font-mono text-[#D4AF37] text-sm">
            B(t) = min(E_demand(t), E_scarcity(t), S_emission − T(t))
          </div>
          <p className="text-gray-500 text-xs mt-2">The actual emission for any epoch is the minimum of the demand limit, scarcity ceiling, and remaining reserve.</p>
        </section>

        {/* Partner tiers */}
        <section>
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">6. Partner Tier Reward Rates</h2>
          <p className="text-gray-300 mb-6">
            Partners are assigned tiers based on a 13-epoch (quarterly) exponential moving average of their
            ecosystem contribution share. Tier determines maximum reward rate applied to their net buy each epoch.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#D4AF37]/30">
                  <th className="text-left py-3 px-4 text-[#D4AF37] font-semibold">Tier</th>
                  <th className="text-left py-3 px-4 text-[#D4AF37] font-semibold">Contribution Share Threshold</th>
                  <th className="text-right py-3 px-4 text-[#D4AF37] font-semibold">Max Reward Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: '🥉 Bronze', threshold: 'sₚ < 0.5% of ecosystem', rate: '8%' },
                  { tier: '🥈 Silver', threshold: '0.5% ≤ sₚ < 2.0%', rate: '10%' },
                  { tier: '🥇 Gold', threshold: 'sₚ ≥ 2.0% of ecosystem', rate: '12%' },
                ].map((row) => (
                  <tr key={row.tier} className="border-b border-white/5">
                    <td className="py-3 px-4 text-white font-semibold">{row.tier}</td>
                    <td className="py-3 px-4 text-gray-400">{row.threshold}</td>
                    <td className="py-3 px-4 text-[#D4AF37] text-right font-bold font-mono">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">
            If total reward demand exceeds the epoch budget, all rates are proportionally scaled down. No partner
            ever receives more than the budget allows.
          </p>
        </section>

        {/* Governance */}
        <section>
          <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">7. Governance</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Prospereum is governed by a DAO that may adjust operational parameters within predefined bounds.
            Core monetary policy (21M cap, emission reserve logic, scarcity math) is immutable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Base Reward Rate', value: '5% – 15% (default 10%)' },
              { label: 'Epoch Duration', value: '3 – 14 days (default 7)' },
              { label: 'Scarcity Exponent k', value: 'DAO-adjustable within bounds' },
              { label: 'Tier Thresholds', value: 'DAO-adjustable within bounds' },
            ].map((p) => (
              <div key={p.label} className="bg-[#0d0d0d] border border-white/10 rounded p-4">
                <div className="text-xs text-gray-500 mb-1">{p.label}</div>
                <div className="text-sm text-white font-semibold">{p.value}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
