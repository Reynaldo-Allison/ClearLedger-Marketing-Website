import { Camera, Sparkles, Wallet, PieChart, BarChart3, FileText, Shield, Smartphone, DollarSign, Fingerprint, Search, Clock } from 'lucide-react';

export function Features() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-white">
            Features That Make{' '}
            <span className="bg-gradient-to-r from-[#00D9C0] to-[#00A88F] bg-clip-text text-transparent">
              Tracking Effortless
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Comprehensive financial tracking tools powered by automation and AI
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">Core Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10 hover:border-[#00D9C0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="mb-3 text-white">OCR Receipt Scanning</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Take photos of receipts or ATM slips and our advanced OCR technology automatically extracts merchant names, amounts, dates, and even card numbers. No manual typing needed.
              </p>
            </div>

            <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10 hover:border-[#00D9C0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="mb-3 text-white">AI Transaction Classification</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Every transaction is automatically classified as expense, income, deposit, withdrawal, refund, or transfer with 90% accuracy. The AI learns your patterns over time.
              </p>
            </div>

            <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10 hover:border-[#00D9C0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                <Wallet className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="mb-3 text-white">Multi-Account Management</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Track cash, bank accounts, credit cards, and routing accounts all in one place. Link cards to accounts for complete financial visibility across all your money sources.
              </p>
            </div>

            <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10 hover:border-[#00D9C0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="mb-3 text-white">Smart Category Budgets</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Set spending limits for categories like Shopping, Food, Entertainment, and Transport. Track your progress in real-time with visual progress indicators and alerts.
              </p>
            </div>

            <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10 hover:border-[#00D9C0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="mb-3 text-white">AI Spending Overview</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Get once-daily AI-powered analysis of your spending habits with actionable insights and recommendations to improve your financial health.
              </p>
            </div>

            <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10 hover:border-[#00D9C0]/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="mb-3 text-white">Unified Ledger Search</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                All transactions—scanned or manual—are consolidated into one searchable ledger. Find any transaction instantly by merchant, amount, date, or category.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Reports */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">Data & Reports</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="mb-3 text-white">Export to PDF & CSV</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Export your transaction history and reports in PDF or CSV format for accounting, tax preparation, or personal analysis.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0]"></div>
                  Monthly transaction reports
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0]"></div>
                  Category spending summaries
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0]"></div>
                  Custom date range exports
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-[#00D9C0]" />
              </div>
              <h3 className="mb-3 text-white">Multi-Currency Support</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Track expenses in any currency with automatic exchange rate conversion powered by ExchangeRate-API.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0]"></div>
                  Set preferred currency
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0]"></div>
                  Live exchange rates
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0]"></div>
                  Automatic conversion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">Security & Privacy</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#00D9C0]/10 flex items-center justify-center mx-auto mb-4 border border-[#00D9C0]/20">
                <Fingerprint className="w-8 h-8 text-[#00D9C0]" />
              </div>
              <h3 className="mb-2 text-white">Biometric Security</h3>
              <p className="text-sm text-white/60">
                Protect your financial data with fingerprint authentication when returning to the app.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#00D9C0]/10 flex items-center justify-center mx-auto mb-4 border border-[#00D9C0]/20">
                <Shield className="w-8 h-8 text-[#00D9C0]" />
              </div>
              <h3 className="mb-2 text-white">Local Data Storage</h3>
              <p className="text-sm text-white/60">
                All your financial data stays on your device. We don't collect or store your information on servers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#00D9C0]/10 flex items-center justify-center mx-auto mb-4 border border-[#00D9C0]/20">
                <Clock className="w-8 h-8 text-[#00D9C0]" />
              </div>
              <h3 className="mb-2 text-white">Privacy First</h3>
              <p className="text-sm text-white/60">
                No account required. No personal information collected. Your privacy is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-[#00D9C0]/10 flex items-center justify-center mx-auto mb-6 border border-[#00D9C0]/20">
              <Smartphone className="w-8 h-8 text-[#00D9C0]" />
            </div>
            <h2 className="text-3xl md:text-4xl mb-4 text-white">Platform Support</h2>
            <p className="text-white/70 mb-8">
              ClearLedger is currently available for Android with a mobile-first design. Windows support is in development and coming soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white/5 rounded-lg p-4 border border-[#00D9C0]/20">
                <div className="font-medium text-white mb-1">Android</div>
                <div className="text-sm text-[#00D9C0]">Available Now • Version 8.0+</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 opacity-60">
                <div className="font-medium text-white mb-1">Windows</div>
                <div className="text-sm text-white/60">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
