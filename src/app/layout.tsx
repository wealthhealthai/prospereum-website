import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Prospereum - Proof of Net Economic Contribution',
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
    <html lang="en" className={`dark ${GeistSans.variable}`}>
      <body className="bg-[#0C0C0E] text-[#F2EDE8] min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
