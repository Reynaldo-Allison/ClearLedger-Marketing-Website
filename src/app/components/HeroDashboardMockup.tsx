import {
  ArrowDownRight,
  Banknote,
  Camera,
  Home,
  ListChecks,
  Plus,
  Settings,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import clearledgerlogo from './assets/clearledgerlogo.png';

const activity = [
  { name: 'PriceSmart', meta: 'Expense - Shopping - May 15', amount: '-JMD 12379', Icon: ArrowDownRight, tone: 'negative' },
  { name: 'Income', meta: 'Income - Other - May 12', amount: '+JMD 20000', Icon: TrendingUp, tone: 'positive' },
];

const accounts = [
  { title: 'Cash Wallet', amount: 'JMD 20000', Icon: Banknote, tone: 'positive' },
  { title: 'Testing', amount: 'JMD -12379', Icon: Home, tone: 'negative' },
];

export function HeroDashboardMockup() {
  return (
    <div className="animate-rise-delay-2 relative mx-auto w-full max-w-[370px]" aria-hidden="true">
      <div className="app-shape animate-float-soft absolute -left-10 top-20 h-28 w-44 rotate-[28deg] rounded-lg bg-[#8b97a7]/14" />
      <div className="app-shape animate-float-soft-delay absolute -right-8 top-2 h-36 w-56 rotate-[-28deg] rounded-lg bg-[#7fdcc2]/18" />

      <div className="relative rounded-[2rem] border border-white/12 bg-[#071521] p-3 shadow-[0_34px_80px_rgba(0,0,0,0.46)] transition-transform duration-500 hover:-translate-y-2">
        <div className="rounded-[1.6rem] border border-[#173044] bg-[#081927] p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#7fdcc2]/45 bg-white/[0.06]">
                <img src={clearledgerlogo} alt="" className="h-7 w-7" />
              </div>
              <div>
                <div className="text-lg font-semibold leading-none text-white">ClearLedger</div>
                <div className="mt-1 text-xs text-white/50">Money movement cockpit</div>
              </div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#245145] text-[#7fdcc2]">
              <Settings className="h-5 w-5" />
            </div>
          </div>

          <div className="rounded-lg border border-[#1b3a51] bg-[#0a2030] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-white/62">Net worth</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-white">JMD 7621.28</div>
              </div>
              <div className="animate-pulse-soft flex h-14 w-14 items-center justify-center rounded-lg bg-[#7fdcc2] text-[#06241d]">
                <TrendingUp className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 h-28">
              <svg viewBox="0 0 300 100" className="h-full w-full overflow-visible">
                <path className="animate-chart-draw" d="M0 76 H154 C177 76 183 76 199 76 C217 75 213 34 229 33 L269 33 C284 32 287 7 300 5" fill="none" stroke="#7fdcc2" strokeWidth="4" strokeLinecap="round" />
                <path d="M0 92 H300" stroke="rgba(255,255,255,0.08)" />
                <path d="M0 64 H300" stroke="rgba(255,255,255,0.08)" />
                <path d="M0 36 H300" stroke="rgba(255,255,255,0.08)" />
                <path d="M0 76 H154 C177 76 183 76 199 76 C217 75 213 34 229 33 L269 33 C284 32 287 7 300 5 V100 H0 Z" fill="rgba(127,220,194,0.12)" />
              </svg>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <div className="text-xs text-white/52">Inflow</div>
                <div className="mt-1 font-semibold text-[#7fdcc2]">+JMD 20000</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <div className="text-xs text-white/52">Spent</div>
                <div className="mt-1 font-semibold text-[#f59aa5]">-JMD 12379</div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            {accounts.map(({ title, amount, Icon, tone }) => (
              <div key={title} className="rounded-lg border border-[#193247] bg-[#071d2b] p-3">
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-white/48">JMD</span>
                </div>
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className={`mt-1 text-lg font-semibold ${tone === 'positive' ? 'text-[#7fdcc2]' : 'text-[#f59aa5]'}`}>{amount}</div>
                <div className="mt-3 h-1 rounded-full bg-white/[0.08]">
                  <div className="h-full w-10 rounded-full bg-[#7fdcc2]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Recent activity</h3>
            <span className="text-sm text-white/50">2 items</span>
          </div>

          <div className="mt-3 space-y-3">
            {activity.map(({ name, meta, amount, Icon, tone }) => (
              <div key={name} className="flex items-center justify-between gap-4 rounded-lg border border-[#193247] bg-[#071d2b] p-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${tone === 'positive' ? 'border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]' : 'border-[#f59aa5]/24 bg-[#3a1f29] text-[#f59aa5]'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-white">{name}</div>
                    <div className="truncate text-xs text-white/50">{meta}</div>
                  </div>
                </div>
                <div className={`shrink-0 text-right text-sm font-semibold ${tone === 'positive' ? 'text-[#7fdcc2]' : 'text-[#f59aa5]'}`}>{amount}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2 border-t border-white/10 pt-4 text-[#c8fff1]">
            {[Home, ListChecks, Plus, SlidersHorizontal].map((Icon, index) => (
              <div key={index} className={`mx-auto flex h-9 w-11 items-center justify-center rounded-lg ${index === 0 ? 'bg-[#254d45] text-[#7fdcc2]' : ''}`}>
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-float-soft absolute -left-8 bottom-20 hidden rounded-lg border border-white/12 bg-[#0c2230]/90 p-3 shadow-2xl backdrop-blur md:block">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7fdcc2] text-[#06241d]">
            <Camera className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs text-white/52">OCR scan</div>
            <div className="text-sm font-semibold text-white">Receipt ready</div>
          </div>
        </div>
      </div>

      <div className="animate-float-soft-delay absolute -right-6 top-28 hidden rounded-lg border border-[#7fdcc2]/22 bg-[#0c2230]/90 p-3 shadow-2xl backdrop-blur md:block">
        <div className="flex items-center gap-2 text-sm font-semibold text-[#c8fff1]">
          <Sparkles className="h-4 w-4" />
          90% confident
        </div>
      </div>
    </div>
  );
}
