import Link from 'next/link';

const stats = [
  { label: 'Total Supply', value: '21M PSRE' },
  { label: 'Emission Reserve', value: '60%' },
  { label: 'Epoch Duration', value: '7 Days' },
  { label: 'Network', value: 'Base' },
];

const steps = [
  {
    step: '01',
    title: 'Partner Creates a PartnerVault',
    desc: 'Any approved partner deploys a dedicated on-chain PartnerVault contract - their permanent identity in the protocol.',
  },
  {
    step: '02',
    title: 'Partner Buys PSRE',
    desc: 'The partner acquires PSRE through their PartnerVault. This net buy is recorded by the protocol as real on-chain demand.',
  },
  {
    step: '03',
    title: 'Epoch Finalizes - Rewards Minted',
    desc: "Every 7 days the protocol calculates the emission budget and mints PSRE rewards proportional to each partner's contribution.",
  },
  {
    step: '04',
    title: 'Partners & Stakers Claim',
    desc: '70% of epoch rewards flow to PartnerVaults (split by tier). 30% flows to PSRE stakers and LP token holders.',
  },
];

const features = [
  {
    icon: '',
    title: 'Demand-Bounded',
    description:
      'Token issuance is capped at 10% of new net PSRE purchases per epoch. No demand, no mint. Rewards are a direct function of real on-chain economic activity - not a schedule.',
  },
  {
    icon: '',
    title: 'Scarcity-Controlled',
    description:
      'An asymptotic scarcity function E(t) = E0 - (1 - x)^2 progressively tightens emission as the reserve depletes. The weekly ceiling shrinks toward zero automatically.',
  },
  {
    icon: '',
    title: 'Governance-Limited',
    description:
      'The DAO tunes parameters within fixed bounds (base rate 5-15%, epoch 3-14 days). Core supply cap and emission math are immutable. No admin mint authority exists - ever.',
  },
];

const allocation = [
  { cat: 'Behavioral Mining Reserve', pct: '60%', amt: '12,600,000', note: 'Not minted at genesis - demand-gated emission', width: 60 },
  { cat: 'Team & Founders', pct: '20%', amt: '4,200,000', note: '1-year cliff, 4-year linear vesting', width: 20 },
  { cat: 'Ecosystem Growth', pct: '8%', amt: '1,680,000', note: 'Minted to Treasury (SAFE) at genesis', width: 8 },
  { cat: 'DAO Treasury', pct: '7%', amt: '1,470,000', note: 'Liquidity, audits, infrastructure', width: 7 },
  { cat: 'Bootstrap Liquidity', pct: '5%', amt: '1,050,000', note: 'Minted to Treasury (SAFE) at genesis', width: 5 },
];

export default function HomePage() {
  return (
    <div style={{ color: '#F2EDE8' }}>

      {/* -- HERO -- */}
      <section
        className="relative min-h-[88vh] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
      >
        {/* Radial gold glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.10) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'rgba(212,175,55,0.12)',
              color: '#D4AF37',
              border: '1px solid rgba(212,175,55,0.30)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#D4AF37' }}
            />
            Behavioral Mining Protocol
          </div>

          {/* H1 */}
          <h1
            className="font-extrabold leading-none mb-6 text-white"
            style={{
              fontSize: 'clamp(48px, 7vw, 78px)',
              fontWeight: 800,
              letterSpacing: '-4px',
              lineHeight: '1.05',
            }}
          >
            Proof of Net Economic Contribution
          </h1>

          {/* Subtitle */}
          <p
            className="mb-4 max-w-2xl mx-auto"
            style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: 'rgba(255,255,255,0.60)',
            }}
          >
            Token issuance unlocked only when provable on-chain demand is generated.
          </p>
          <p
            className="mb-12 max-w-2xl mx-auto"
            style={{ fontSize: '16px', color: 'rgba(255,255,255,0.40)', lineHeight: '1.6' }}
          >
            Prospereum (PSRE) rewards real economic participation - not inflation farming - and
            enforces permanent scarcity through math, not governance.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/whitepaper"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid rgba(212,175,55,0.55)',
                color: '#D4AF37',
              }}
              onMouseEnter={undefined}
            >
              Read Whitepaper
            </Link>
            <Link
              href="/partners"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#ffffff',
              }}
            >
              Become a Partner
            </Link>
            <Link
              href="/stake"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#ffffff',
              }}
            >
              Stake PSRE
            </Link>
          </div>
        </div>
      </section>

      {/* -- STAT BAR -- */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-2xl font-bold"
                style={{ color: '#D4AF37', fontWeight: 800 }}
              >
                {s.value}
              </div>
              <div
                className="text-sm mt-1"
                style={{ color: 'rgba(255,255,255,0.50)', fontSize: '14px' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -- HOW IT WORKS -- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}
            >
              Protocol Flow
            </span>
          </div>
          <h2
            className="text-center font-extrabold mb-4"
            style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}
          >
            How Prospereum Works
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mb-16"
            style={{ color: 'rgba(255,255,255,0.50)', fontSize: '16px', lineHeight: '1.6' }}
          >
            Unlike proof-of-work or proof-of-stake, Prospereum issues tokens only when verifiable
            economic demand is recorded on-chain - each epoch, every 7 days.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-2xl p-6 transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="text-5xl font-black mb-4"
                  style={{ color: 'rgba(212,175,55,0.20)', lineHeight: '1', fontWeight: 900 }}
                >
                  {s.step}
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.5px', color: '#ffffff' }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: '1.6' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- WHY PROSPEREUM -- */}
      <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center font-extrabold mb-16"
            style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}
          >
            Built Different.{' '}
            <span style={{ color: '#D4AF37' }}>By Design.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-8 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3
                  className="font-bold mb-3"
                  style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px', color: '#D4AF37' }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: '1.7' }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- TOKEN DISTRIBUTION -- */}
      <section className="py-24 px-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-center font-extrabold mb-4"
            style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}
          >
            Token <span style={{ color: '#D4AF37' }}>Distribution</span>
          </h2>
          <p
            className="text-center max-w-xl mx-auto mb-12"
            style={{ color: 'rgba(255,255,255,0.50)', fontSize: '16px' }}
          >
            Total supply is immutable at 21,000,000 PSRE. No pre-sale - No ICO - No private token sale.
          </p>

          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: 'rgba(255,255,255,0.50)' }}>Category</th>
                    <th className="text-right py-4 px-4 font-semibold" style={{ color: 'rgba(255,255,255,0.50)' }}>%</th>
                    <th className="text-right py-4 px-4 font-semibold" style={{ color: 'rgba(255,255,255,0.50)' }}>Amount (PSRE)</th>
                    <th className="text-left py-4 px-6 font-semibold hidden md:table-cell" style={{ color: 'rgba(255,255,255,0.50)' }}>Allocation Bar</th>
                    <th className="text-left py-4 px-6 font-semibold hidden lg:table-cell" style={{ color: 'rgba(255,255,255,0.50)' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {allocation.map((row, i) => (
                    <tr
                      key={row.cat}
                      style={{
                        borderBottom: i < allocation.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                      }}
                    >
                      <td className="py-4 px-6 font-medium" style={{ color: '#F2EDE8' }}>{row.cat}</td>
                      <td className="py-4 px-4 text-right font-mono font-bold" style={{ color: '#D4AF37' }}>{row.pct}</td>
                      <td className="py-4 px-4 text-right font-mono" style={{ color: '#F2EDE8' }}>{row.amt}</td>
                      <td className="py-4 px-6 hidden md:table-cell">
                        <div
                          className="h-2 rounded-full"
                          style={{
                            width: `${row.width}%`,
                            background: 'linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.50))',
                            minWidth: '12px',
                          }}
                        />
                      </td>
                      <td className="py-4 px-6 hidden lg:table-cell" style={{ color: 'rgba(255,255,255,0.40)', fontSize: '13px' }}>
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* -- CTA SECTION -- */}
      <section
        className="relative py-24 text-center overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(212,175,55,0.07) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2
            className="font-extrabold mb-4"
            style={{ fontSize: '42px', fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}
          >
            Ready to Participate?
          </h2>
          <p className="mb-10" style={{ color: 'rgba(255,255,255,0.50)', lineHeight: '1.6' }}>
            Join the Prospereum ecosystem as a partner, staker, or LP provider. Mainnet launching on Base.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partners"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(212,175,55,0.12)',
                border: '1px solid rgba(212,175,55,0.55)',
                color: '#D4AF37',
              }}
            >
              Become a Partner &gt;
            </Link>
            <Link
              href="/stats"
              className="inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#ffffff',
              }}
            >
              View Live Stats
            </Link>
          </div>
        </div>
      </section>

      {/* -- FOOTER -- */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Wordmark */}
            <div>
              <img
                src="/logo-dark.png"
                alt="Prospereum"
                style={{ height: '30px', width: 'auto', objectFit: 'contain', marginBottom: '4px' }}
              />
              <div style={{ color: 'rgba(255,255,255,0.40)', fontSize: '13px' }}>
                Proof of Net Economic Contribution - Built on Base
              </div>
            </div>
            {/* Links */}
            <div className="flex gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.50)' }}>
              <Link href="/whitepaper" className="hover:text-white transition-colors duration-200">Whitepaper</Link>
              <Link href="/partners" className="hover:text-white transition-colors duration-200">Partners</Link>
              <Link href="/stake" className="hover:text-white transition-colors duration-200">Stake</Link>
              <Link href="/stats" className="hover:text-white transition-colors duration-200">Stats</Link>
            </div>
          </div>
          <div
            className="mt-8 pt-6 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.30)', fontSize: '13px' }}
          >
            <span>(c) 2026 WealthHealth AI - Prospereum Protocol (PSRE)</span>
            <span>No pre-sale - No ICO - No private token sale - Demand-bounded emission</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
