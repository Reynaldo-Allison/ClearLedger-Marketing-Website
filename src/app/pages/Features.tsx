import {
  BarChart3,
  Camera,
  Clock,
  DollarSign,
  FileText,
  Fingerprint,
  PieChart,
  Search,
  Shield,
  Smartphone,
  Sparkles,
  Wallet,
} from 'lucide-react';

const coreFeatures = [
  {
    icon: Camera,
    title: 'OCR Receipt Scanning',
    desc: 'Take photos of receipts or ATM slips and our advanced OCR technology automatically extracts merchant names, amounts, dates, and even card numbers. No manual typing needed.',
  },
  {
    icon: Sparkles,
    title: 'AI Transaction Classification',
    desc: 'Every transaction is automatically classified as expense, income, deposit, withdrawal, refund, or transfer with 90% accuracy. The AI learns your patterns over time.',
  },
  {
    icon: Wallet,
    title: 'Multi-Account Management',
    desc: 'Track cash, bank accounts, credit cards, and routing accounts all in one place. Link cards to accounts for complete financial visibility across all your money sources.',
  },
  {
    icon: PieChart,
    title: 'Smart Category Budgets',
    desc: 'Set spending limits for categories like Shopping, Food, Entertainment, and Transport. Track your progress in real-time with visual progress indicators and alerts.',
  },
  {
    icon: BarChart3,
    title: 'AI Spending Overview',
    desc: 'Get once-daily AI-powered analysis of your spending habits with actionable insights and recommendations to improve your financial health.',
  },
  {
    icon: Search,
    title: 'Unified Ledger Search',
    desc: 'All transactions, scanned or manual, are consolidated into one searchable ledger. Find any transaction instantly by merchant, amount, date, or category.',
  },
];

const reportFeatures = [
  {
    icon: FileText,
    title: 'Export to PDF & CSV',
    desc: 'Export your transaction history and reports in PDF or CSV format for accounting, tax preparation, or personal analysis.',
    items: ['Monthly transaction reports', 'Category spending summaries', 'Custom date range exports'],
  },
  {
    icon: DollarSign,
    title: 'Multi-Currency Support',
    desc: 'Track expenses in any currency with automatic exchange rate conversion powered by ExchangeRate-API.',
    items: ['Set preferred currency', 'Live exchange rates', 'Automatic conversion'],
  },
];

const security = [
  {
    icon: Fingerprint,
    title: 'Biometric Security',
    desc: 'Protect your financial data with fingerprint authentication when returning to the app.',
  },
  {
    icon: Shield,
    title: 'Local Data Storage',
    desc: 'Your financial records stay under your control with privacy-minded storage and access patterns.',
  },
  {
    icon: Clock,
    title: 'Privacy First',
    desc: 'Account access is designed around protecting your financial workspace. Your privacy is our priority.',
  },
];

export function Features() {
  return (
    <div className="bg-[#06111d]">
      <section className="bg-page-glow py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">
            Built for automation
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Features That Make{' '}
            <span className="bg-gradient-to-r from-[#7fdcc2] to-white bg-clip-text text-transparent">
              Tracking Effortless
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
            Comprehensive financial tracking tools powered by automation and AI.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#071521] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Core Features</h2>
            <p className="mt-4 text-lg leading-8 text-white/62">
              The core tools that remove manual work from everyday financial tracking.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="animate-card-hover rounded-lg border border-white/10 bg-[#0a2030] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#7fdcc2]/25 bg-[#173a35] text-[#7fdcc2]">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <div className="inline-flex rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-semibold text-white/70">Data & Reports</div>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Exportable records, flexible currency support
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {reportFeatures.map((feature) => (
                <div key={feature.title} className="rounded-lg border border-white/10 bg-[#0a2030] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{feature.desc}</p>
                  <ul className="mt-5 space-y-3 text-sm text-white/64">
                    {feature.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7fdcc2]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a2030] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Security & Privacy</h2>
            <p className="mt-4 text-lg leading-8 text-white/60">
              ClearLedger keeps the sensitive parts of financial tracking close to you.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {security.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#071d2b] p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg border border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg border border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]">
            <Smartphone className="h-8 w-8" />
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">Platform Support</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/62">
            ClearLedger is currently available for Android with a mobile-first design. Windows support is in development and coming soon.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 p-5">
              <div className="font-semibold text-white">Android</div>
              <div className="mt-1 text-sm text-[#c8fff1]">Available Now / Version 8.0+</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <div className="font-semibold text-white">Windows</div>
              <div className="mt-1 text-sm text-white/54">Coming Soon</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
