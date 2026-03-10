import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Prospereum — Proof of Net Economic Contribution',
  description:
    'Prospereum (PSRE) is a decentralized behavioral mining protocol on Base. Token issuance unlocked only when provable on-chain demand is generated.',
  keywords: ['Prospereum', 'PSRE', 'behavioral mining', 'Base', 'DeFi', 'token'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <footer className="border-t border-[#D4AF37]/20 mt-24 py-8 text-center text-gray-500 text-sm">
          <p>© 2026 WealthHealth AI · Prospereum Protocol (PSRE) · Built on Base</p>
          <p className="mt-1 text-xs">No pre-sale · No ICO · No private token sale · Demand-bounded emission</p>
        </footer>
      </body>
    </html>
  );
}
