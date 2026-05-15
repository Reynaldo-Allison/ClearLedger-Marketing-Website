import { AlertCircle, CheckCircle2, Eye, Shield, Target, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Eye,
    title: 'Financial Visibility',
    desc: 'Without tracking, money disappears into a black hole. Budgeting gives you complete visibility into where every dollar goes, helping you identify spending patterns and make informed decisions.',
  },
  {
    icon: Target,
    title: 'Goal Achievement',
    desc: "Whether you're saving for a house, paying off debt, or building an emergency fund, budgeting turns abstract goals into actionable plans with measurable progress.",
  },
  {
    icon: Shield,
    title: 'Financial Security',
    desc: "Budgeting helps you build emergency funds and avoid debt traps. When you know your spending limits, you're less likely to overspend and more prepared for unexpected expenses.",
  },
  {
    icon: TrendingUp,
    title: 'Wealth Building',
    desc: 'Consistent budgeting reveals opportunities to redirect money from wasteful spending to investments and savings, accelerating your path to financial independence.',
  },
];

const problems = [
  { title: 'Time-Consuming Manual Entry', desc: 'Manually logging every transaction takes hours each month and often leads to abandoned budgets.' },
  { title: 'Forgotten Receipts', desc: 'By the time you remember to log a purchase, the receipt is lost and details are forgotten.' },
  { title: 'Inconsistent Tracking', desc: 'Missing even a few transactions creates an incomplete picture that undermines your entire budget.' },
  { title: 'Complex Spreadsheets', desc: 'Traditional spreadsheet budgets require technical skills and constant maintenance.' },
];

const solutions = [
  { title: 'Automated Receipt Scanning', desc: 'Snap a photo and OCR extracts all details in seconds. No manual typing required.' },
  { title: 'AI-Powered Classification', desc: 'Transactions are automatically categorized, eliminating guesswork and saving time.' },
  { title: 'Real-Time Tracking', desc: 'Every transaction is logged immediately, giving you an always-up-to-date financial picture.' },
  { title: 'Simple Interface', desc: 'Mobile-first design makes tracking as easy as taking a photo - no spreadsheet skills needed.' },
  { title: 'Multi-Currency Support', desc: 'Track expenses in any currency with automatic exchange rate conversion.' },
  { title: 'Smart Budgets', desc: 'Set limits by category and get instant feedback on your spending progress.' },
];

export function WhyBudgeting() {
  return (
    <div className="bg-[#06111d]">
      <section className="bg-page-glow py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">
            Why budget?
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            The Significance of{' '}
            <span className="bg-gradient-to-r from-[#7fdcc2] to-white bg-clip-text text-transparent">
              Budgeting
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
            Understanding where your money goes isn't just about saving - it's about taking control of your financial future.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#071521] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Why Budgeting Matters</h2>
            <p className="mt-4 text-lg leading-8 text-white/62">
              Budgeting is the foundation for better visibility, clearer goals, and more confident decisions.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="animate-card-hover rounded-lg border border-white/10 bg-[#0a2030] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#7fdcc2]/25 bg-[#173a35] text-[#7fdcc2]">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="inline-flex rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm font-semibold text-white/70">
              The Traditional Budgeting Problem
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Manual tracking breaks down fast
            </h2>
          </div>

          <div className="space-y-4">
            {problems.map((problem) => (
              <div key={problem.title} className="flex gap-4 rounded-lg border border-white/10 bg-[#0a2030] p-5">
                <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#7fdcc2]" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/58">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a2030] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <div className="inline-flex rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">
              How ClearLedger Solves This
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Automation keeps the ledger current
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {solutions.map((solution) => (
              <div key={solution.title} className="rounded-lg border border-white/10 bg-[#071d2b] p-5">
                <CheckCircle2 className="h-6 w-6 text-[#7fdcc2]" />
                <h3 className="mt-4 text-lg font-semibold text-white">{solution.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58">{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#7fdcc2]/18 bg-[#071521] py-16 text-center md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Ready to Take Control?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/62">
            Stop letting manual tracking hold you back. Start budgeting the smart way with ClearLedger.
          </p>
          <a
            href="https://github.com/Shemarhn/ClearLedger/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-lg bg-[#7fdcc2] px-6 py-3 font-semibold text-[#06241d] transition-transform hover:-translate-y-0.5"
          >
            Download ClearLedger
          </a>
        </div>
      </section>
    </div>
  );
}
