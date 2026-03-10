'use client';

import { useState } from 'react';

type Tab = 'psre' | 'lp';
type Action = 'stake' | 'unstake';

export default function StakePage() {
  const [tab, setTab] = useState<Tab>('psre');
  const [action, setAction] = useState<Action>('stake');
  const [amount, setAmount] = useState('');
  const [walletConnected] = useState(false);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Stake <span className="text-[#D4AF37]">PSRE</span>
        </h1>
        <p className="text-gray-400">
          Lock PSRE or LP tokens to earn your share of the 30% staker reward pool — distributed every 7-day epoch.
        </p>
      </div>

      {/* Mainnet notice */}
      <div className="mb-8 flex items-center gap-3 bg-amber-500/5 border border-amber-500/20 rounded-xl px-5 py-4 text-amber-400 text-sm">
        <span className="text-xl">⚠</span>
        <div>
          <strong>Staking goes live on mainnet.</strong> This interface is a preview. No transactions will
          be initiated. Testnet staking is available via{' '}
          <a href="/stats" className="underline hover:text-amber-300">the Stats dashboard</a>.
        </div>
      </div>

      {/* Connect wallet prompt */}
      {!walletConnected && (
        <div className="mb-8 bg-[#0d0d0d] border border-[#D4AF37]/30 rounded-xl p-6 text-center">
          <div className="text-3xl mb-3">🔗</div>
          <h3 className="text-lg font-bold mb-2">Connect Your Wallet</h3>
          <p className="text-gray-400 text-sm mb-4">Connect to view your balances and stake PSRE or LP tokens.</p>
          <button
            className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded hover:bg-[#D4AF37]/10 transition-colors"
            onClick={() => alert('Wallet connection goes live with mainnet launch.')}
          >
            Connect Wallet
          </button>
        </div>
      )}

      {/* Balances */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Your PSRE Balance', value: walletConnected ? '—' : '—' },
          { label: 'Your Staked Amount', value: walletConnected ? '—' : '—' },
          { label: 'Pending Rewards', value: walletConnected ? '—' : '—' },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#0d0d0d] border border-white/10 rounded-xl p-4 text-center">
            <div className="text-xl font-bold text-[#D4AF37]">{stat.value}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tab selector: PSRE vs LP */}
      <div className="flex rounded-xl overflow-hidden border border-[#D4AF37]/20 mb-6">
        {(['psre', 'lp'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-3 text-sm font-bold transition-colors ${
              tab === t
                ? 'bg-[#D4AF37] text-black'
                : 'bg-[#0d0d0d] text-gray-400 hover:text-white'
            }`}
          >
            {t === 'psre' ? 'Stake PSRE' : 'Stake LP Tokens'}
          </button>
        ))}
      </div>

      {/* Stake/Unstake form */}
      <div className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-xl p-8">
        {/* Action toggle */}
        <div className="flex gap-4 mb-6">
          {(['stake', 'unstake'] as Action[]).map((a) => (
            <button
              key={a}
              onClick={() => setAction(a)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                action === a
                  ? 'bg-[#D4AF37] text-black'
                  : 'border border-white/20 text-gray-400 hover:text-white'
              }`}
            >
              {a.charAt(0).toUpperCase() + a.slice(1)}
            </button>
          ))}
        </div>

        <div className="mb-2">
          <label className="text-sm text-gray-400 font-semibold block mb-2">
            Amount to {action} ({tab === 'psre' ? 'PSRE' : 'LP Tokens'})
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              min="0"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 bg-black border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors font-mono"
            />
            <button
              className="px-4 py-3 border border-[#D4AF37]/30 text-[#D4AF37] text-sm rounded hover:bg-[#D4AF37]/10 transition-colors"
              onClick={() => setAmount('0')}
            >
              MAX
            </button>
          </div>
        </div>

        <button
          className="w-full mt-6 py-3 bg-[#D4AF37] text-black font-bold rounded hover:bg-[#b8962e] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          disabled={!walletConnected}
          onClick={() => alert('Connect wallet and wait for mainnet launch to stake.')}
        >
          {action === 'stake' ? `Stake ${tab === 'psre' ? 'PSRE' : 'LP Tokens'}` : `Unstake ${tab === 'psre' ? 'PSRE' : 'LP Tokens'}`}
        </button>

        {!walletConnected && (
          <p className="text-xs text-gray-600 text-center mt-3">Connect wallet to enable staking</p>
        )}
      </div>

      {/* Staking mechanics explainer */}
      <div className="mt-10 space-y-4">
        <h2 className="text-xl font-bold text-[#D4AF37]">How Staking Rewards Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: 'Time-Weighted Rewards',
              desc: 'Rewards are proportional to amount × duration staked during the epoch. Stake longer, earn more.',
            },
            {
              title: '30% of Epoch Budget',
              desc: "Stakers share 30% of every epoch's total emission budget. The other 70% goes to partner vaults.",
            },
            {
              title: 'PSRE or LP Tokens',
              desc: 'Both PSRE tokens and PSRE/ETH LP tokens from the trading pool are eligible for the same staking pool.',
            },
            {
              title: 'Claim After Epoch',
              desc: 'Rewards are calculated at epoch close (every 7 days) and claimable from the staking contract immediately after.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#0d0d0d] border border-white/10 rounded-xl p-5">
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
