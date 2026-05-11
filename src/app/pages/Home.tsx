import { Link } from 'react-router';
import { Smartphone, Download, Camera, Sparkles, Wallet, PieChart, BarChart3, FileText } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 text-white/80 px-4 py-2 rounded-full mb-6 border border-white/10">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm">Available on Android • Windows Coming Soon</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Smart Financial Tracking{' '}
            <span className="bg-gradient-to-r from-[#00D9C0] to-[#00A88F] bg-clip-text text-transparent">
              by Automation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Money movement, neatly tracked. Scan receipts with OCR, let AI classify your transactions, and manage all your accounts in one unified ledger.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://github.com/Shemarhn/ClearLedger/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00D9C0] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download for Android
            </a>
            <button className="border border-white/20 px-8 py-3 rounded-lg hover:bg-white/5 transition-colors text-white opacity-60 cursor-not-allowed" disabled>
              Windows Coming Soon
            </button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-gradient-to-br from-[#00D9C0]/10 to-white/5 rounded-3xl p-8 shadow-lg border border-white/10">
              <div className="bg-[#0A0F0D] rounded-2xl p-6 shadow-xl border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm text-white/60 mb-1">Net worth</div>
                    <div className="text-3xl text-white">JMD 0.00</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="text-xs text-white/60 mb-1">Inflow</div>
                    <div className="text-[#00D9C0]">+JMD 0</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                    <div className="text-xs text-white/60 mb-1">Spent</div>
                    <div className="text-red-400">-JMD 0</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-medium mb-2 text-white">Recent activity</div>
                  {[
                    { name: 'Playstation', amount: 'JMD 31000.00', category: 'Entertainment', icon: '🎮' },
                    { name: 'Courts', amount: 'JMD 20000.00', category: 'Shopping', icon: '🛍️' },
                    { name: 'Kfc', amount: 'JMD 10000.00', category: 'Food', icon: '🍔' }
                  ].map((tx, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg border border-white/10">
                          {tx.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{tx.name}</div>
                          <div className="text-xs text-white/60">{tx.category}</div>
                        </div>
                      </div>
                      <span className="text-sm text-white">{tx.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Powerful features, zero manual work
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              ClearLedger combines OCR, AI classification, and smart account management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Camera, title: 'OCR Receipt Scanning', desc: 'Snap a photo of receipts or ATM slips. Our OCR extracts details automatically.' },
              { icon: Sparkles, title: 'AI Classification', desc: 'Transactions auto-classified as expense, income, deposit, withdrawal, or transfer.' },
              { icon: Wallet, title: 'Multi-Account Tracking', desc: 'Track cash, banks, cards, and routing in one place.' },
              { icon: PieChart, title: 'Smart Budgets', desc: 'Set category limits and track progress in real-time.' },
              { icon: BarChart3, title: 'AI Overview', desc: 'Get once-daily AI-powered spending analysis and insights.' },
              { icon: FileText, title: 'Export & Reports', desc: 'Export your financial data as PDF or CSV reports.' },
            ].map((feature, i) => (
              <div key={i} className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#00D9C0]" />
                </div>
                <h3 className="mb-2 text-white">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-block bg-white/10 text-white px-8 py-3 rounded-lg hover:bg-white/15 transition-colors border border-white/20"
            >
              View All Features
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#00D9C0] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            Start tracking smarter today
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Join users who have automated their financial tracking with OCR scanning, AI classification, and unified account management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Shemarhn/ClearLedger/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#00D9C0] px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium"
            >
              <Download className="w-5 h-5" />
              Download ClearLedger
            </a>
            <Link
              to="/guide"
              className="border-2 border-white/30 px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Installation Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
