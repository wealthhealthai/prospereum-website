'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const tiers = [
  {
    name: 'Bronze',
    threshold: 'sp < 0.5% of ecosystem',
    rate: '8%',
    desc: 'Default tier for all new partners. Earn 8% of your net PSRE buy volume back as protocol rewards each epoch.',
    borderColor: '#CD7F32',
  },
  {
    name: 'Silver',
    threshold: '0.5% <= sp < 2.0%',
    rate: '10%',
    desc: 'Earn 10% rewards. Achieved when your rolling contribution share reaches 0.5% of the ecosystem over 13 epochs.',
    borderColor: '#C0C0C0',
  },
  {
    name: 'Gold',
    threshold: 'sp >= 2.0%',
    rate: '12%',
    desc: 'Maximum reward tier. Achieved when your rolling contribution share reaches 2% or more of total ecosystem activity.',
    borderColor: '#D4AF37',
  },
];

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.10)',
  borderRadius: '12px',
  padding: '12px 16px',
  color: '#F2EDE8',
  fontSize: '15px',
  outline: 'none',
};

export default function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: '', email: '', volume: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: '#0C0C0E', color: '#F2EDE8' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ background: 'rgba(212,175,55,0.12)', color: '#D4AF37' }}
          >
            Partner Program
          </span>
          <h1
            className="font-extrabold mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-1.5px', color: '#ffffff' }}
          >
            Become a{' '}
            <span style={{ color: '#D4AF37' }}>Prospereum Partner</span>
          </h1>
          <p className="max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.50)', fontSize: '16px', lineHeight: '1.6' }}>
            Partners are the engine of the Prospereum protocol. By creating a PartnerVault and purchasing PSRE,
            you generate provable on-chain demand - and earn protocol rewards for doing so.
          </p>
        </div>

        {/* How it works card */}
        <div
          className="rounded-2xl p-8 mb-12"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h2
            className="font-bold mb-6"
            style={{ fontSize: '20px', fontWeight: 700, color: '#D4AF37' }}
          >
            How Partner Vaults Work
          </h2>
          <ol className="space-y-5">
            {[
              {
                n: '1',
                title: 'Deploy a PartnerVault',
                body: 'Your dedicated on-chain contract. This is your permanent identity in the protocol, linked to your organization.',
              },
              {
                n: '2',
                title: 'Buy PSRE through your vault',
                body: 'Your purchases are recorded as new net buy for the current epoch. PSRE can reward your customers, referral partners, or program participants.',
              },
              {
                n: '3',
                title: 'Earn rewards every 7 days',
                body: 'At epoch close, the protocol mints PSRE rewards proportional to your net buy, capped by the demand-bounded scarcity model.',
              },
              {
                n: '4',
                title: 'Tier up over time',
                body: 'Your contribution share is tracked via a 13-epoch rolling average. As you grow, your tier improves and your reward rate increases.',
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-4">
                <span
                  className="font-bold text-lg min-w-[2rem] shrink-0"
                  style={{ color: '#D4AF37' }}
                >
                  {step.n}.
                </span>
                <div>
                  <strong style={{ color: '#ffffff' }}>{step.title}</strong>
                  {' - '}
                  <span style={{ color: 'rgba(255,255,255,0.60)' }}>{step.body}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tier cards */}
        <div className="mb-12">
          <h2
            className="font-extrabold mb-6"
            style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.5px', color: '#ffffff' }}
          >
            Partner <span style={{ color: '#D4AF37' }}>Reward Tiers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl p-6 transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: `1px solid ${tier.borderColor}40`,
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: '#F2EDE8' }}
                >
                  {tier.name}
                </div>
                <div
                  className="text-5xl font-black mb-2"
                  style={{ color: '#D4AF37', fontWeight: 900 }}
                >
                  {tier.rate}
                </div>
                <div className="font-mono text-xs mb-4" style={{ color: 'rgba(255,255,255,0.40)' }}>
                  {tier.threshold}
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.50)', lineHeight: '1.6' }}>
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-4" style={{ color: 'rgba(255,255,255,0.30)' }}>
            Reward rates are applied to new net buy per epoch. If total demand exceeds the epoch budget,
            all rates are proportionally scaled. No partner receives more than the budget allows.
          </p>
        </div>

        {/* Connect wallet card */}
        <div
          className="rounded-2xl p-8 mb-10"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(212,175,55,0.20)' }}
        >
          <h2 className="font-bold mb-2" style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
            Connect Wallet to Deploy PartnerVault
          </h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.50)' }}>
            PartnerVault deployment goes live with mainnet launch on Base. Connect your wallet to express
            interest and be notified when onboarding opens.
          </p>
          <button
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              color: '#ffffff',
            }}
            onClick={() => alert('Wallet connection and PartnerVault deployment goes live with mainnet launch.')}
          >
            Connect Wallet
          </button>
          <div
            className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-2 rounded-lg"
            style={{
              color: 'rgba(245,180,50,0.80)',
              background: 'rgba(245,180,50,0.06)',
              border: '1px solid rgba(245,180,50,0.15)',
            }}
          >
            <span>!</span> Partner onboarding goes live with mainnet launch. No transactions will be initiated at this time.
          </div>
        </div>

        {/* Interest form */}
        <div
          className="rounded-2xl p-8"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h2 className="font-bold mb-2" style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff' }}>
            Express Partner Interest
          </h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Register your interest now and get early access to partner onboarding when mainnet launches.
          </p>

          {submitted ? (
            <div className="text-center py-10">
              <div className="text-4xl mb-4">PSRE</div>
              <h3
                className="font-bold mb-2"
                style={{ fontSize: '20px', color: '#D4AF37' }}
              >
                Interest Registered
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '14px' }}>
                We&apos;ll be in touch when partner onboarding goes live. Welcome to the Prospereum ecosystem.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'rgba(255,255,255,0.70)' }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Acme Corp"
                  style={{ ...inputStyle }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'rgba(255,255,255,0.70)' }}
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="partnerships@yourcompany.com"
                  style={{ ...inputStyle }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'rgba(255,255,255,0.70)' }}
                >
                  Expected Monthly PSRE Buy Volume (USD equivalent)
                </label>
                <select
                  required
                  value={form.volume}
                  onChange={(e) => setForm({ ...form, volume: e.target.value })}
                  style={{ ...inputStyle }}
                >
                  <option value="" style={{ background: '#1a1a1c' }}>Select a range...</option>
                  <option value="lt10k" style={{ background: '#1a1a1c' }}>&lt; $10,000/mo</option>
                  <option value="10k-50k" style={{ background: '#1a1a1c' }}>$10,000 - $50,000/mo</option>
                  <option value="50k-250k" style={{ background: '#1a1a1c' }}>$50,000 - $250,000/mo</option>
                  <option value="gt250k" style={{ background: '#1a1a1c' }}>&gt; $250,000/mo</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  background: 'rgba(212,175,55,0.12)',
                  border: '1px solid rgba(212,175,55,0.55)',
                  color: '#D4AF37',
                }}
              >
                Submit Interest &gt;
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
