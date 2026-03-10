'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/whitepaper', label: 'Whitepaper' },
  { href: '/partners', label: 'Partners' },
  { href: '/stake', label: 'Stake' },
  { href: '/stats', label: 'Stats' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(12,12,14,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl transition-opacity hover:opacity-80"
            style={{ color: '#D4AF37' }}
          >
            <span className="text-2xl">PSRE</span>
            <span>PROSPEREUM</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-all duration-200"
                style={{
                  color: pathname === link.href ? '#D4AF37' : 'rgba(255,255,255,0.60)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = pathname === link.href ? '#D4AF37' : 'rgba(255,255,255,0.60)'; }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect Wallet - secondary button style */}
          <button
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.10)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.06)'; }}
            onClick={() => alert('Wallet connection goes live with mainnet launch.')}
          >
            Connect Wallet
          </button>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex gap-5 pb-3 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm whitespace-nowrap transition-all duration-200"
              style={{ color: pathname === link.href ? '#D4AF37' : 'rgba(255,255,255,0.60)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
