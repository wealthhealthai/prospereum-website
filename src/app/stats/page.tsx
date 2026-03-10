import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protocol Stats — Prospereum (PSRE)',
  description: 'Live Prospereum protocol stats from Base Sepolia testnet. Epoch data, partner activity, staking metrics.',
};

export default function StatsPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Protocol <span className="text-[#D4AF37]">Stats</span>
          </h1>
          <div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Base Sepolia Testnet
          </div>
        </div>
        <p className="text-gray-500 text-sm">Live data from the Prospereum protocol deployment on Base Sepolia testnet.</p>
      </div>

      {/* Dashboard iframe */}
      <div className="w-full border-y border-[#D4AF37]/10">
        <iframe
          src="https://wealthhealthai.github.io/prospereum-protocol/"
          className="w-full"
          style={{ height: 'calc(100vh - 220px)', minHeight: '600px' }}
          title="Prospereum Protocol Dashboard"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      {/* Footer note */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">
              📡 Live data from{' '}
              <a
                href="https://wealthhealthai.github.io/prospereum-protocol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:underline"
              >
                wealthhealthai.github.io/prospereum-protocol
              </a>
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Testnet data only. Mainnet launch TBD. Contract addresses visible in the dashboard.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wealthhealthai.github.io/prospereum-protocol/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#D4AF37]/30 text-[#D4AF37] text-sm rounded hover:bg-[#D4AF37]/10 transition-colors"
            >
              Open in New Tab ↗
            </a>
          </div>
        </div>

        {/* Stat cards placeholder */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Current Epoch', value: 'Live ↗' },
            { label: 'Total PSRE Emitted', value: 'Live ↗' },
            { label: 'Active Partners', value: 'Live ↗' },
            { label: 'Total Staked', value: 'Live ↗' },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[#0d0d0d] border border-white/10 rounded-xl p-5 text-center opacity-60"
            >
              <div className="text-lg font-bold text-[#D4AF37]">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-700 text-center mt-3">
          Aggregated stats shown in dashboard above. Mainnet stat cards will populate on launch.
        </p>
      </div>
    </div>
  );
}
