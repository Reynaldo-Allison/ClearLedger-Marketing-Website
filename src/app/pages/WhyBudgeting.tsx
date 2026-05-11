import { TrendingUp, Shield, Target, Eye, CheckCircle2, AlertCircle } from 'lucide-react';

export function WhyBudgeting() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-white">
            The Significance of{' '}
            <span className="bg-gradient-to-r from-[#00D9C0] to-[#00A88F] bg-clip-text text-transparent">
              Budgeting
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Understanding where your money goes isn't just about saving—it's about taking control of your financial future.
          </p>
        </div>
      </section>

      {/* Why Budget Section */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">Why Budgeting Matters</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-[#00D9C0]" />
                </div>
                <h3 className="mb-3 text-white">Financial Visibility</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Without tracking, money disappears into a black hole. Budgeting gives you complete visibility into where every dollar goes, helping you identify spending patterns and make informed decisions.
                </p>
              </div>

              <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#00D9C0]" />
                </div>
                <h3 className="mb-3 text-white">Goal Achievement</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Whether you're saving for a house, paying off debt, or building an emergency fund, budgeting turns abstract goals into actionable plans with measurable progress.
                </p>
              </div>

              <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#00D9C0]" />
                </div>
                <h3 className="mb-3 text-white">Financial Security</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Budgeting helps you build emergency funds and avoid debt traps. When you know your spending limits, you're less likely to overspend and more prepared for unexpected expenses.
                </p>
              </div>

              <div className="bg-[#0A0F0D] rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[#00D9C0]" />
                </div>
                <h3 className="mb-3 text-white">Wealth Building</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Consistent budgeting reveals opportunities to redirect money from wasteful spending to investments and savings, accelerating your path to financial independence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">The Traditional Budgeting Problem</h2>

            <div className="space-y-6 mb-12">
              {[
                { title: 'Time-Consuming Manual Entry', desc: 'Manually logging every transaction takes hours each month and often leads to abandoned budgets.' },
                { title: 'Forgotten Receipts', desc: 'By the time you remember to log a purchase, the receipt is lost and details are forgotten.' },
                { title: 'Inconsistent Tracking', desc: 'Missing even a few transactions creates an incomplete picture that undermines your entire budget.' },
                { title: 'Complex Spreadsheets', desc: 'Traditional spreadsheet budgets require technical skills and constant maintenance.' },
              ].map((problem, i) => (
                <div key={i} className="flex gap-4 bg-white/5 rounded-xl p-6 border border-white/10">
                  <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-white">{problem.title}</h3>
                    <p className="text-white/60 text-sm">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">How ClearLedger Solves This</h2>

            <div className="space-y-6">
              {[
                { title: 'Automated Receipt Scanning', desc: 'Snap a photo and OCR extracts all details in seconds. No manual typing required.' },
                { title: 'AI-Powered Classification', desc: 'Transactions are automatically categorized, eliminating guesswork and saving time.' },
                { title: 'Real-Time Tracking', desc: 'Every transaction is logged immediately, giving you an always-up-to-date financial picture.' },
                { title: 'Simple Interface', desc: 'Mobile-first design makes tracking as easy as taking a photo—no spreadsheet skills needed.' },
                { title: 'Multi-Currency Support', desc: 'Track expenses in any currency with automatic exchange rate conversion.' },
                { title: 'Smart Budgets', desc: 'Set limits by category and get instant feedback on your spending progress.' },
              ].map((solution, i) => (
                <div key={i} className="flex gap-4 bg-[#0A0F0D] rounded-xl p-6 border border-[#00D9C0]/20">
                  <CheckCircle2 className="w-6 h-6 text-[#00D9C0] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="mb-2 text-white">{solution.title}</h3>
                    <p className="text-white/60 text-sm">{solution.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#00D9C0]/10 to-white/5 rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl mb-4 text-white">Ready to Take Control?</h2>
            <p className="text-white/70 mb-8">
              Stop letting manual tracking hold you back. Start budgeting the smart way with ClearLedger.
            </p>
            <a
              href="https://github.com/Shemarhn/ClearLedger/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00D9C0] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              Download ClearLedger
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
