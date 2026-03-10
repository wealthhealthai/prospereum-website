import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Whitepaper — Prospereum Protocol v2.3',
  description:
    'Read the Prospereum (PSRE) whitepaper. Proof of Net Economic Contribution — demand-bounded, scarcity-controlled behavioral mining on Base.',
};

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0C0C0E', color: '#F2EDE8' }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          {/* Eyebrow */}
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}
          >
            Protocol Documentation
          </span>

          <h1
            className="font-extrabold mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}
          >
            Prospereum{' '}
            <span style={{ color: '#D4AF37' }}>Whitepaper</span>{' '}
            v2.3
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '16px' }}>
            March 6, 2026 · Proof of Net Economic Contribution
          </p>

          <a
            href="/prospereum-whitepaper-v2.3.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              background: 'rgba(212,175,55,0.12)',
              border: '1px solid rgba(212,175,55,0.55)',
              color: '#D4AF37',
            }}
          >
            ↓ Download PDF
          </a>
        </div>

        {/* PDF embed */}
        <div
          className="mb-16 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(212,175,55,0.20)' }}
        >
          <iframe
            src="/prospereum-whitepaper-v2.3.pdf"
            className="w-full"
            style={{ height: '80vh', background: '#111' }}
            title="Prospereum Whitepaper v2.3"
          />
        </div>

        {/* SEO sections */}
        <div className="space-y-16">

          {/* Abstract */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px', color: '#D4AF37' }}
            >
              1. Abstract
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.70)', lineHeight: '1.7', fontSize: '16px' }}>
              Prospereum is a decentralized behavioral mining protocol that aligns economic demand with
              progressive scarcity. Unlike Proof-of-Work (Bitcoin) or Proof-of-Stake (Ethereum),
              Prospereum introduces{' '}
              <strong style={{ color: '#ffffff' }}>Proof of Net Economic Contribution</strong>:
              token issuance is unlocked only when provable on-chain demand for PSRE is generated, and
              issuance is permanently constrained by an asymptotic scarcity function tied solely to
              emitted supply. Prospereum is neutral infrastructure — applications define aligned economic
              activity, the protocol measures only net acquisition and time-locked participation.
            </p>
          </section>

          {/* Supply model */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px', color: '#D4AF37' }}
            >
              3. Supply Model
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.70)', marginBottom: '16px' }}>
              Total supply is immutable at <strong style={{ color: '#ffffff' }}>21,000,000 PSRE</strong>.
            </p>

            <div
              className="rounded-2xl overflow-hidden mb-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(212,175,55,0.20)' }}>
                      <th className="text-left py-3 px-5 font-semibold" style={{ color: '#D4AF37' }}>Category</th>
                      <th className="text-right py-3 px-4 font-semibold" style={{ color: '#D4AF37' }}>%</th>
                      <th className="text-right py-3 px-4 font-semibold" style={{ color: '#D4AF37' }}>Amount</th>
                      <th className="text-left py-3 px-5 font-semibold hidden md:table-cell" style={{ color: '#D4AF37' }}>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cat: 'Behavioral Mining Emission Reserve', pct: '60%', amt: '12,600,000', note: 'Not minted at genesis — reserved for epoch-based emission' },
                      { cat: 'Team & Founders', pct: '20%', amt: '4,200,000', note: '1-year cliff, 4-year linear vesting. No governance override.' },
                      { cat: 'Ecosystem Growth', pct: '8%', amt: '1,680,000', note: 'Minted at genesis to Treasury Wallet (SAFE)' },
                      { cat: 'DAO Treasury', pct: '7%', amt: '1,470,000', note: 'Liquidity stabilization, audit funding, infrastructure' },
                      { cat: 'Bootstrap Liquidity', pct: '5%', amt: '1,050,000', note: 'Minted at genesis to Treasury Wallet (SAFE)' },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.cat}
                        style={{
                          borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                        }}
                      >
                        <td className="py-3 px-5" style={{ color: '#F2EDE8' }}>{row.cat}</td>
                        <td className="py-3 px-4 text-right font-mono font-bold" style={{ color: '#D4AF37' }}>{row.pct}</td>
                        <td className="py-3 px-4 text-right font-mono" style={{ color: '#F2EDE8' }}>{row.amt}</td>
                        <td className="py-3 px-5 text-xs hidden md:table-cell" style={{ color: 'rgba(255,255,255,0.40)' }}>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div
              className="rounded-xl p-4 text-sm"
              style={{
                background: 'rgba(212,175,55,0.06)',
                border: '1px solid rgba(212,175,55,0.15)',
                color: 'rgba(255,255,255,0.60)',
              }}
            >
              <strong style={{ color: '#D4AF37' }}>Launch Policy:</strong> No pre-sale · No private token sale ·
              No ICO · No discounted insider allocation. Liquidity seeded solely from treasury allocation.
              Behavioral mining begins only after the first full epoch.
            </div>
          </section>

          {/* Emission model */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px', color: '#D4AF37' }}
            >
              5. Behavioral Mining Reward Emission Model
            </h2>

            <div className="space-y-4" style={{ color: 'rgba(255,255,255,0.70)', lineHeight: '1.7' }}>
              <p>
                Each partner participates by creating a <strong style={{ color: '#ffffff' }}>PartnerVault</strong> — a
                dedicated on-chain contract used to acquire and distribute PSRE tokens. When a partner purchases
                PSRE through its PartnerVault, the protocol records the <em>new net buy</em> generated during
                that epoch.
              </p>
              <p>
                At the end of each <strong style={{ color: '#ffffff' }}>7-day epoch</strong>, the protocol calculates
                the total reward budget based on (a) demand generated and (b) the scarcity curve, then divides
                it: 70% to partners, 30% to stakers.
              </p>
            </div>

            <h3
              className="font-bold mt-8 mb-3"
              style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}
            >
              Scarcity Curve
            </h3>
            <div
              className="rounded-xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.20)' }}
            >
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.50)' }}>
                The scarcity-based emission ceiling decreases asymptotically as the reserve depletes:
              </p>
              <div
                className="font-mono text-lg text-center py-4"
                style={{ color: '#D4AF37' }}
              >
                E_scarcity(t) = E₀ · (1 − x(t))²
              </div>
              <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.40)' }}>
                where x(t) = cumulative emitted / 12.6M reserve · E₀ = 0.1% of reserve per epoch initially · k = 2
              </p>
            </div>

            <h3
              className="font-bold mt-8 mb-3"
              style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff' }}
            >
              Final Epoch Budget
            </h3>
            <div
              className="rounded-xl p-5 font-mono text-sm"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,175,55,0.20)',
                color: '#D4AF37',
              }}
            >
              B(t) = min(E_demand(t), E_scarcity(t), S_emission − T(t))
            </div>
            <p className="text-xs mt-2" style={{ color: 'rgba(255,255,255,0.40)' }}>
              The actual emission for any epoch is the minimum of the demand limit, scarcity ceiling, and remaining reserve.
            </p>
          </section>

          {/* Partner tiers */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px', color: '#D4AF37' }}
            >
              6. Partner Tier Reward Rates
            </h2>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.70)', lineHeight: '1.7' }}>
              Partners are assigned tiers based on a 13-epoch (quarterly) exponential moving average of their
              ecosystem contribution share. Tier determines maximum reward rate applied to their net buy each epoch.
            </p>

            <div
              className="rounded-2xl overflow-hidden mb-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(212,175,55,0.20)' }}>
                      <th className="text-left py-3 px-5 font-semibold" style={{ color: '#D4AF37' }}>Tier</th>
                      <th className="text-left py-3 px-4 font-semibold" style={{ color: '#D4AF37' }}>Contribution Share Threshold</th>
                      <th className="text-right py-3 px-5 font-semibold" style={{ color: '#D4AF37' }}>Max Reward Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tier: '🥉 Bronze', threshold: 'sₚ < 0.5% of ecosystem', rate: '8%' },
                      { tier: '🥈 Silver', threshold: '0.5% ≤ sₚ < 2.0%', rate: '10%' },
                      { tier: '🥇 Gold', threshold: 'sₚ ≥ 2.0% of ecosystem', rate: '12%' },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.tier}
                        style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
                      >
                        <td className="py-3 px-5 font-semibold" style={{ color: '#F2EDE8' }}>{row.tier}</td>
                        <td className="py-3 px-4" style={{ color: 'rgba(255,255,255,0.50)' }}>{row.threshold}</td>
                        <td className="py-3 px-5 text-right font-bold font-mono" style={{ color: '#D4AF37' }}>{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.40)' }}>
              If total reward demand exceeds the epoch budget, all rates are proportionally scaled down.
            </p>
          </section>

          {/* Governance */}
          <section>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.5px', color: '#D4AF37' }}
            >
              7. Governance
            </h2>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.70)', lineHeight: '1.7' }}>
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
                <div
                  key={p.label}
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.40)' }}>{p.label}</div>
                  <div className="text-sm font-semibold" style={{ color: '#F2EDE8' }}>{p.value}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
