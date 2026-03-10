'use client';

import { useState } from 'react';

type Tab = 'psre' | 'lp';
type Action = 'stake' | 'unstake';

const cardStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
};

const inputStyle = {
  flex: 1,
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: '12px',
  padding: '12px 16px',
  color: '#F2EDE8',
  fontSize: '15px',
  outline: 'none',
  fontFamily: 'monospace',
};

export default function StakePage() {
  const [tab, setTab] = useState<Tab>('psre');
  const [action, setAction] = useState<Action>('stake');
  const [amount, setAmount] = useState('');
  const [walletConnected] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: '#0C0C0E', color: '#F2EDE8' }}>
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}
          >
            Staking
          </span>
          <h1
            className="font-extrabold mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}
          >
            Stake <span style={{ color: '#D4AF37' }}>PSRE</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '16px', lineHeight: '1.6' }}>
            Lock PSRE or LP tokens to earn your share of the 30% staker reward pool — distributed every 7-day epoch.
          </p>
        </div>

        {/* Mainnet notice */}
        <div
          className="mb-8 flex items-start gap-3 px-5 py-4 rounded-xl text-sm"
          style={{
            background: 'rgba(245,180,50,0.05)',
            border: '1px solid rgba(245,180,50,0.15)',
            color: 'rgba(245,180,50,0.85)',
          }}
        >
          <span className="text-lg shrink-0 mt-0.5">⚠</span>
          <div>
            <strong>Staking goes live on mainnet.</strong> This interface is a preview. No transactions will
            be initiated. Testnet staking is available via{' '}
            <a href="/stats" style={{ color: '#D4AF37', textDecoration: 'underline' }}>the Stats dashboard</a>.
          </div>
        </div>

        {/* Connect wallet prompt */}
        {!walletConnected && (
          <div
            className="mb-8 p-6 text-center rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.20)' }}
          >
            <div className="text-3xl mb-3">🔗</div>
            <h3 className="font-bold mb-2" style={{ fontSize: '18px', color: '#ffffff' }}>
              Connect Your Wallet
            </h3>
            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Connect to view your balances and stake PSRE or LP tokens.
            </p>
            <button
              className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#ffffff',
              }}
              onClick={() => alert('Wallet connection goes live with mainnet launch.')}
            >
              Connect Wallet
            </button>
          </div>
        )}

        {/* Balances */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Your PSRE Balance', value: '—' },
            { label: 'Your Staked Amount', value: '—' },
            { label: 'Pending Rewards', value: '—' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 text-center rounded-2xl"
              style={cardStyle}
            >
              <div className="text-xl font-bold" style={{ color: '#D4AF37' }}>{stat.value}</div>
              <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.40)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tab selector: PSRE / LP — gold underline style */}
        <div
          className="flex mb-6"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {(['psre', 'lp'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-6 py-3 text-sm font-semibold transition-all duration-200"
              style={{
                color: tab === t ? '#D4AF37' : 'rgba(255,255,255,0.50)',
                borderBottom: tab === t ? '2px solid #D4AF37' : '2px solid transparent',
                background: 'transparent',
                marginBottom: '-1px',
              }}
            >
              {t === 'psre' ? 'Stake PSRE' : 'Stake LP Tokens'}
            </button>
          ))}
        </div>

        {/* Stake / Unstake form */}
        <div
          className="p-8 rounded-2xl mb-10"
          style={cardStyle}
        >
          {/* Action toggle */}
          <div className="flex gap-3 mb-6">
            {(['stake', 'unstake'] as Action[]).map((a) => (
              <button
                key={a}
                onClick={() => setAction(a)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                style={
                  action === a
                    ? { background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.55)', color: '#D4AF37' }
                    : { background: 'transparent', border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.50)' }
                }
              >
                {a.charAt(0).toUpperCase() + a.slice(1)}
              </button>
            ))}
          </div>

          <label
            className="text-sm font-semibold block mb-2"
            style={{ color: 'rgba(255,255,255,0.60)' }}
          >
            Amount to {action} ({tab === 'psre' ? 'PSRE' : 'LP Tokens'})
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              min="0"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={inputStyle}
            />
            <button
              className="px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: 'rgba(255,255,255,0.70)',
              }}
              onClick={() => setAmount('0')}
            >
              MAX
            </button>
          </div>

          <button
            className="w-full mt-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            disabled={!walletConnected}
            style={
              !walletConnected
                ? { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.25)', cursor: 'not-allowed' }
                : { background: 'rgba(212,175,55,0.12)', border: '1px solid rgba(212,175,55,0.55)', color: '#D4AF37', cursor: 'pointer' }
            }
            onClick={() => alert('Connect wallet and wait for mainnet launch to stake.')}
          >
            {action === 'stake'
              ? `Stake ${tab === 'psre' ? 'PSRE' : 'LP Tokens'}`
              : `Unstake ${tab === 'psre' ? 'PSRE' : 'LP Tokens'}`}
          </button>

          {!walletConnected && (
            <p className="text-xs text-center mt-3" style={{ color: 'rgba(255,255,255,0.30)' }}>
              Connect wallet to enable staking
            </p>
          )}
        </div>

        {/* Staking mechanics */}
        <div>
          <h2
            className="font-bold mb-5"
            style={{ fontSize: '20px', fontWeight: 700, color: '#D4AF37' }}
          >
            How Staking Rewards Work
          </h2>
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
              <div key={item.title} className="p-5 rounded-2xl" style={cardStyle}>
                <h3 className="font-bold mb-2" style={{ fontSize: '15px', color: '#ffffff' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
