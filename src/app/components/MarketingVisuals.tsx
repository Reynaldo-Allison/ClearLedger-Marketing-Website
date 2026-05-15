import {
  Banknote,
  Camera,
  Check,
  Home,
  ListChecks,
  ReceiptText,
  Sparkles,
} from 'lucide-react';
import clearledgerlogo from './assets/clearledgerlogo.png';

const featureFloatCards = [
  {
    title: 'OCR Receipt Scanning',
    desc: 'Snap a photo of receipts or ATM slips. Our OCR extracts details automatically.',
    kind: 'ocr',
    className: 'feature-float-card--ocr',
  },
  {
    title: 'Multi-Account Tracking',
    desc: 'Track cash, banks, cards, and routing in one place.',
    kind: 'accounts',
    className: 'feature-float-card--accounts',
  },
  {
    title: 'Smart Budgets',
    desc: 'Set category limits and track progress in real-time.',
    kind: 'budgets',
    className: 'feature-float-card--budgets',
  },
  {
    title: 'AI Overview',
    desc: 'Get once-daily AI-powered spending analysis and insights.',
    kind: 'ai',
    className: 'feature-float-card--ai',
  },
  {
    title: 'Export & Reports',
    desc: 'Export your financial data as PDF or CSV reports.',
    kind: 'exports',
    className: 'feature-float-card--exports',
  },
] as const;

type FeatureGraphicKind = (typeof featureFloatCards)[number]['kind'];

function FeatureGraphic({ kind }: { kind: FeatureGraphicKind }) {
  if (kind === 'ocr') {
    return (
      <div className="feature-mini-ocr">
        <div className="flex items-center justify-between gap-3">
          <div className="feature-mini-icon">
            <Camera className="h-4 w-4" />
          </div>
          <span className="rounded-full bg-[#7fdcc2]/14 px-2 py-1 text-[10px] font-semibold text-[#c8fff1]">90% confident</span>
        </div>
        <div className="feature-mini-receipt mt-4">
          <div className="feature-float-scan-line" />
          <div className="mx-auto mb-3 h-2 w-16 rounded-full bg-white/18" />
          <div className="space-y-2">
            {[70, 94, 56, 82].map((width) => (
              <span key={width} className="block h-1.5 rounded-full bg-white/18" style={{ width: `${width}%` }} />
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-[10px] text-white/45">
            <span>Card ****6387</span>
            <span>JMD</span>
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'accounts') {
    return (
      <div className="space-y-3">
        {[
          { label: 'Cash Wallet', value: 'JMD 20000', Icon: Banknote },
          { label: 'Testing', value: 'JMD 0', Icon: Home },
        ].map(({ label, value, Icon }) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="feature-mini-icon">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold text-white">{label}</span>
              </div>
              <span className="text-[10px] text-[#c8fff1]">{value}</span>
            </div>
            <div className="mt-3 flex gap-2 text-[10px] font-semibold text-[#7fdcc2]">
              <span>Edit</span>
              <span>Link</span>
              <span>Cards</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === 'budgets') {
    return (
      <div>
        <div className="flex items-center justify-between">
          <div className="feature-mini-icon">
            <ListChecks className="h-4 w-4" />
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7fdcc2] text-xl font-medium text-[#06241d]">+</div>
        </div>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white">Entertainment</div>
            <div className="mt-1 text-[11px] text-white/45">JMD 0.00 / 7885.97</div>
          </div>
          <span className="text-xs font-semibold text-white/55">0.0%</span>
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/10">
          <div className="h-full w-8 rounded-full bg-[#7fdcc2]" />
        </div>
      </div>
    );
  }

  if (kind === 'ai') {
    return (
      <div>
        <div className="flex items-center gap-3">
          <div className="feature-mini-icon">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">10 left today</div>
            <div className="text-[11px] text-white/45">Fresh reads on habits</div>
          </div>
        </div>
        <div className="mt-4 space-y-3 text-[11px] leading-5 text-white/56">
          {['Spending categorized as Other', 'One card match found', 'Net movement summarized'].map((item) => (
            <div key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7fdcc2]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="feature-mini-export-row">
        <div className="feature-mini-icon">
          <Check className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Export PDF</div>
          <div className="text-[11px] text-white/46">This month</div>
        </div>
      </div>
      <div className="my-3 h-px bg-white/10" />
      <div className="feature-mini-export-row">
        <div className="feature-mini-icon">
          <ReceiptText className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Export CSV</div>
          <div className="text-[11px] text-white/46">This month</div>
        </div>
      </div>
    </div>
  );
}

export function AppFeatureCarousel() {
  return (
    <div className="feature-float-scene" aria-label="ClearLedger feature graphics">
      <div className="feature-float-core" aria-hidden="true">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#7fdcc2]/34 bg-[#7fdcc2]/10">
          <img src={clearledgerlogo} alt="" className="h-9 w-9" />
        </div>
      </div>

      {featureFloatCards.map((feature, index) => (
        <article
          key={feature.title}
          className={`feature-float-card ${feature.className}`}
          style={{ animationDelay: `${index * -1.2}s` }}
        >
          <div className="feature-float-card-inner">
            <FeatureGraphic kind={feature.kind} />
            <div className="mt-5">
              <div className="mb-3 h-1.5 w-10 rounded-full bg-[#7fdcc2]" />
              <h3 className="text-lg font-semibold leading-tight text-white">{feature.title}</h3>
              <p className="mt-2 text-xs leading-5 text-white/58">{feature.desc}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ReceiptFlowMockup() {
  return (
    <div className="grid gap-4 sm:grid-cols-3" aria-hidden="true">
      {[
        { title: 'Scan', desc: 'Read receipt or ATM slip', Icon: Camera },
        { title: 'Classify', desc: 'Expense classified with 90% confidence', Icon: Sparkles },
        { title: 'Save', desc: 'Movement added to ledger', Icon: Check },
      ].map(({ title, desc, Icon }, index) => (
        <div key={title} className="animate-card-hover rounded-lg border border-white/10 bg-[#0a2030] p-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#7fdcc2]/25 bg-[#173a35] text-[#7fdcc2]">
            <Icon className="h-5 w-5" />
          </div>
          <div className="mt-5 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7fdcc2]">0{index + 1}</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/58">{desc}</p>
        </div>
      ))}
    </div>
  );
}

export function ReceiptCardPreview() {
  return (
    <div className="animate-rise rounded-lg border border-white/10 bg-[#071d2b] p-5" aria-hidden="true">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#7fdcc2]/28 bg-[#173a35] text-[#7fdcc2]">
            <ReceiptText className="h-6 w-6" />
          </div>
          <div>
            <div className="text-lg font-semibold text-white">Expense detected</div>
            <div className="text-sm text-white/52">Card ****6387 found on receipt</div>
          </div>
        </div>
        <span className="rounded-lg bg-[#7fdcc2]/14 px-3 py-1 text-sm font-semibold text-[#7fdcc2]">90%</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
        {['Expense', 'Income', 'Withdrawal', 'Deposit', 'Transfer', 'Refund'].map((item, index) => (
          <div key={item} className={`rounded-lg border px-3 py-2 font-semibold ${index === 0 ? 'border-[#7fdcc2]/28 bg-[#254d45] text-white' : 'border-white/10 bg-[#10283a] text-white/78'}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
