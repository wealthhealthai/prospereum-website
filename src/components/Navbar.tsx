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
    <nav className="sticky top-0 z-50 bg-black border-b border-[#D4AF37]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-[#D4AF37] font-bold text-xl hover:opacity-80 transition-opacity">
            <span className="text-2xl">🐟</span>
            <span>PSRE</span>
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-[#D4AF37]'
                    : 'text-gray-400 hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Connect Wallet stub */}
          <button
            className="px-4 py-2 border border-[#D4AF37] text-[#D4AF37] text-sm font-semibold rounded hover:bg-[#D4AF37] hover:text-black transition-all"
            onClick={() => alert('Wallet connection goes live with mainnet launch.')}
          >
            Connect Wallet
          </button>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex gap-4 pb-3 overflow-x-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm whitespace-nowrap transition-colors ${
                pathname === link.href
                  ? 'text-[#D4AF37]'
                  : 'text-gray-400 hover:text-[#D4AF37]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
