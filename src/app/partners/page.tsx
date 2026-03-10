'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const tiers = [
  {
    name: '🥉 Bronze',
    threshold: 'sₚ < 0.5% of ecosystem',
    rate: '8%',
    desc: 'Default tier for all new partners. Earn 8% of your net PSRE buy volume back as protocol rewards each epoch.',
  },
  {
    name: '🥈 Silver',
    threshold: '0.5% ≤ sₚ < 2.0%',
    rate: '10%',
    desc: 'Earn 10% rewards. Achieved when your rolling contribution share reaches 0.5% of the ecosystem over 13 epochs.',
  },
  {
    name: '🥇 Gold',
    threshold: 'sₚ ≥ 2.0%',
    rate: '12%',
    desc: 'Maximum reward tier. Achieved when your rolling contribution share reaches 2% or more of total ecosystem activity.',
  },
];

export default function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: '', email: '', volume: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-white">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Become a <span className="text-[#D4AF37]">Prospereum Partner</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Partners are the engine of the Prospereum protocol. By creating a PartnerVault and purchasing PSRE,
          you generate provable on-chain demand — and earn protocol rewards for doing so.
        </p>
      </div>

      {/* How it works */}
      <div className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-xl p-8 mb-12">
        <h2 className="text-xl font-bold text-[#D4AF37] mb-6">How Partner Vaults Work</h2>
        <ol className="space-y-4 text-gray-300">
          <li className="flex gap-4">
            <span className="text-[#D4AF37] font-bold text-lg min-w-[2rem]">1.</span>
            <div>
              <strong className="text-white">Deploy a PartnerVault</strong> — your dedicated on-chain contract. This is your permanent identity in the protocol, linked to your organization.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[#D4AF37] font-bold text-lg min-w-[2rem]">2.</span>
            <div>
              <strong className="text-white">Buy PSRE through your vault</strong> — your purchases are recorded as <em>new net buy</em> for the current epoch. PSRE can be used to reward your customers, referral partners, or distributed to program participants.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[#D4AF37] font-bold text-lg min-w-[2rem]">3.</span>
            <div>
              <strong className="text-white">Earn rewards every 7 days</strong> — at epoch close, the protocol mints PSRE rewards proportional to your net buy, capped by the demand-bounded scarcity model, and sends them to your PartnerVault.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-[#D4AF37] font-bold text-lg min-w-[2rem]">4.</span>
            <div>
              <strong className="text-white">Tier up over time</strong> — your contribution share is tracked via a 13-epoch (quarterly) rolling average. As you grow, your tier improves and your reward rate increases.
            </div>
          </li>
        </ol>
      </div>

      {/* Tier table */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Partner <span className="text-[#D4AF37]">Reward Tiers</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all"
            >
              <div className="text-2xl font-bold mb-1">{tier.name}</div>
              <div className="text-4xl font-black text-[#D4AF37] mb-2">{tier.rate}</div>
              <div className="text-xs text-gray-500 font-mono mb-4">{tier.threshold}</div>
              <p className="text-sm text-gray-400">{tier.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          Reward rates are applied to new net buy per epoch. If total demand exceeds the epoch budget, all rates
          are proportionally scaled. No partner receives more than the budget allows.
        </p>
      </div>

      {/* Connect wallet area */}
      <div className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-xl p-8 mb-12">
        <h2 className="text-xl font-bold mb-2">Connect Wallet to Deploy PartnerVault</h2>
        <p className="text-gray-400 text-sm mb-6">
          PartnerVault deployment goes live with mainnet launch on Base. Connect your wallet to express interest
          and be notified when onboarding opens.
        </p>
        <button
          className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] font-bold rounded hover:bg-[#D4AF37]/10 transition-colors"
          onClick={() => alert('Wallet connection and PartnerVault deployment goes live with mainnet launch.')}
        >
          Connect Wallet
        </button>
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-amber-500/80 bg-amber-500/5 border border-amber-500/20 rounded px-3 py-2">
          <span>⚠</span> Partner onboarding goes live with mainnet launch. No transactions will be initiated at this time.
        </div>
      </div>

      {/* Interest form */}
      <div className="bg-[#0d0d0d] border border-[#D4AF37]/20 rounded-xl p-8">
        <h2 className="text-xl font-bold mb-2">Express Partner Interest</h2>
        <p className="text-gray-400 text-sm mb-6">
          Register your interest now and get early access to partner onboarding when mainnet launches.
        </p>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🐟</div>
            <h3 className="text-xl font-bold text-[#D4AF37] mb-2">Interest Registered</h3>
            <p className="text-gray-400 text-sm">
              We&apos;ll be in touch when partner onboarding goes live. Welcome to the Prospereum ecosystem.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Company Name</label>
              <input
                type="text"
                required
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Acme Corp"
                className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Contact Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="partnerships@yourcompany.com"
                className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Expected Monthly PSRE Buy Volume (USD equivalent)
              </label>
              <select
                required
                value={form.volume}
                onChange={(e) => setForm({ ...form, volume: e.target.value })}
                className="w-full bg-black border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
              >
                <option value="">Select a range…</option>
                <option value="lt10k">&lt; $10,000/mo</option>
                <option value="10k-50k">$10,000 – $50,000/mo</option>
                <option value="50k-250k">$50,000 – $250,000/mo</option>
                <option value="gt250k">&gt; $250,000/mo</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#D4AF37] text-black font-bold rounded hover:bg-[#b8962e] transition-colors"
            >
              Submit Interest →
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
