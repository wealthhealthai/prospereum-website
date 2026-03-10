import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protocol Stats - Prospereum (PSRE)',
  description: 'Live Prospereum protocol stats from Base Sepolia testnet. Epoch data, partner activity, staking metrics.',
};

export default function StatsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#0C0C0E', color: '#F2EDE8' }}>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-2">
          <h1
            className="font-extrabold"
            style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}
          >
            Protocol <span style={{ color: '#D4AF37' }}>Stats</span>
          </h1>
          <div
            className="flex items-center gap-2 text-xs rounded-full px-3 py-1"
            style={{
              color: '#3ECF8E',
              background: 'rgba(62,207,142,0.10)',
              border: '1px solid rgba(62,207,142,0.20)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#3ECF8E' }}
            />
            Base Sepolia Testnet
          </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '14px' }}>
          Live data from the Prospereum protocol deployment on Base Sepolia testnet.
        </p>
      </div>

      {/* Dashboard iframe - dark container */}
      <div
        className="w-full"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
      >
        <iframe
          src="https://wealthhealthai.github.io/prospereum-protocol/"
          className="w-full"
          style={{
            height: 'calc(100vh - 220px)',
            minHeight: '600px',
            background: '#0C0C0E',
            display: 'block',
          }}
          title="Prospereum Protocol Dashboard"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      {/* Footer note */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div>
            <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '14px' }}>
               Live data from{' '}
              <a
                href="https://wealthhealthai.github.io/prospereum-protocol/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#D4AF37' }}
              >
                wealthhealthai.github.io/prospereum-protocol
              </a>
            </p>
            <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', marginTop: '4px' }}>
              Testnet data only. Mainnet launch TBD. Contract addresses visible in the dashboard.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wealthhealthai.github.io/prospereum-protocol/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#F2EDE8',
              }}
            >
              Open in New Tab >
            </a>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Current Epoch', value: 'Live >' },
            { label: 'Total PSRE Emitted', value: 'Live >' },
            { label: 'Active Partners', value: 'Live >' },
            { label: 'Total Staked', value: 'Live >' },
          ].map((s) => (
            <div
              key={s.label}
              className="p-5 text-center rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                opacity: 0.65,
              }}
            >
              <div className="text-lg font-bold" style={{ color: '#D4AF37' }}>{s.value}</div>
              <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.40)' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-center mt-3" style={{ color: 'rgba(255,255,255,0.20)' }}>
          Aggregated stats shown in dashboard above. Mainnet stat cards will populate on launch.
        </p>
      </div>

    </div>
  );
}
