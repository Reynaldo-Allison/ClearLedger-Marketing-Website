import {
  Camera,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  Github,
  Settings,
  Smartphone,
} from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Visit the GitHub Repository',
    desc: 'Navigate to https://github.com/Shemarhn/ClearLedger or click the button above.',
  },
  {
    step: 2,
    title: 'Go to Releases',
    desc: 'On the right sidebar, click on "Releases" to see all available versions of ClearLedger.',
  },
  {
    step: 3,
    title: 'Download the Latest APK',
    desc: 'Under the latest release, find the Assets section and download the .apk file (e.g., ClearLedger-v1.0.0.apk).',
  },
  {
    step: 4,
    title: 'Enable Unknown Sources',
    desc: 'Go to Settings > Security > Unknown Sources on your Android device and enable installation from unknown sources. (You can disable this after installation for security).',
  },
  {
    step: 5,
    title: 'Install the APK',
    desc: 'Open your file manager or downloads folder, locate the APK file you just downloaded, and tap to install.',
  },
  {
    step: 6,
    title: 'Grant Permissions',
    desc: 'When prompted, grant camera and storage permissions. These are required for receipt scanning functionality.',
  },
  {
    step: 7,
    title: 'Launch ClearLedger',
    desc: 'Once installed, open the app from your app drawer and start tracking your finances!',
  },
];

const setupItems = [
  'Set your preferred currency in Settings',
  'Create accounts for your cash, banks, and cards',
  'Set up budgets for spending categories',
  'Enable biometric unlock for security',
];

const transactionItems = [
  'Tap the + button to add a movement',
  'Choose "Photo" to scan a receipt or "Text" for manual entry',
  'Review the AI-detected details and adjust if needed',
  'Save to add to your ledger automatically',
];

const tips = [
  'Take clear, well-lit photos of receipts for best OCR accuracy',
  'Review detected transactions before saving to ensure accuracy',
  'Link cards to accounts for complete financial tracking',
  'Set realistic budget limits based on your actual spending',
  'Check the AI Overview daily for spending insights',
  'Export reports monthly to track your financial progress',
];

const troubleshooting = [
  {
    title: 'Installation blocked by Play Protect?',
    desc: 'Since ClearLedger is installed from outside the Play Store, you may see a Play Protect warning. Tap "More details" and then "Install anyway" to proceed. This is normal for apps installed from GitHub.',
  },
  {
    title: "App won't install?",
    desc: "Make sure you've enabled \"Unknown Sources\" in your security settings and that you're running Android 8.0 or higher. If you have an old version installed, uninstall it first before installing the new version.",
  },
  {
    title: 'Camera not working for receipt scanning?',
    desc: 'Go to Settings > Apps > ClearLedger > Permissions and ensure Camera and Storage permissions are granted. You may need to restart the app after granting permissions.',
  },
  {
    title: 'How do I update to a new version?',
    desc: "Visit the GitHub releases page and download the latest APK. Install it over your existing version (your data will be preserved). You don't need to uninstall the old version first.",
  },
];

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm text-white/60">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#7fdcc2]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Guide() {
  return (
    <div className="bg-[#06111d]">
      <section className="bg-page-glow py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#7fdcc2]/28 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">
            <Smartphone className="h-4 w-4" />
            Android installation
          </div>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Installation{' '}
            <span className="bg-gradient-to-r from-[#7fdcc2] to-white bg-clip-text text-transparent">
              Guide
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
            Get started with ClearLedger in minutes. Follow our step-by-step guide to download and install from GitHub.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#071521] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <div className="inline-flex rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">
                Official GitHub Repository
              </div>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Download the latest Android APK
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/62">
                ClearLedger is open source and available on GitHub. Download the latest release directly from the repository.
              </p>
              <a
                href="https://github.com/Shemarhn/ClearLedger"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#7fdcc2] px-6 py-3 font-semibold text-[#06241d] transition-transform hover:-translate-y-0.5"
              >
                <Github className="h-5 w-5" />
                View on GitHub
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-3">
              {steps.map((item) => (
                <div key={item.step} className="grid gap-4 rounded-lg border border-white/10 bg-[#0a2030] p-5 sm:grid-cols-[auto_1fr]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7fdcc2] font-semibold text-[#06241d]">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 p-5 text-[#c8fff1]">
              <p className="text-sm">
                <strong>System Requirements:</strong> Android 8.0 (Oreo) or higher
              </p>
            </div>
            <div className="rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 p-5 text-[#c8fff1]">
              <p className="text-sm">
                <strong>Security Tip:</strong> Always download from the official GitHub repository to ensure you're getting the genuine app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Getting Started</h2>
            <p className="mt-4 text-lg leading-8 text-white/62">
              Set up the app once, then use scanning and review flows for daily tracking.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-[#0a2030] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Initial Setup</h3>
              <div className="mt-5">
                <Checklist items={setupItems} />
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0a2030] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Adding Transactions</h3>
              <div className="mt-5">
                <Checklist items={transactionItems} />
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-white/10 bg-[#071d2b] p-6">
            <h3 className="flex items-center gap-2 text-xl font-semibold text-white">
              <CheckCircle2 className="h-6 w-6 text-[#7fdcc2]" />
              Quick Tips for Best Results
            </h3>
            <ul className="mt-6 grid gap-4 text-sm text-white/66 md:grid-cols-2">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#7fdcc2]" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a2030] py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Troubleshooting</h2>
            <p className="mt-4 text-lg leading-8 text-white/62">
              Common Android install and permission questions.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {troubleshooting.map((item) => (
              <details key={item.title} className="rounded-lg border border-white/10 bg-[#071d2b] p-5">
                <summary className="cursor-pointer font-semibold text-white">{item.title}</summary>
                <p className="mt-3 text-sm leading-6 text-white/58">{item.desc}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Need Help?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/62">
            Have questions or running into issues? We're here to help.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://github.com/Shemarhn/ClearLedger/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7fdcc2] px-6 py-3 font-semibold text-[#06241d] transition-transform hover:-translate-y-0.5"
            >
              <Github className="h-5 w-5" />
              Report an Issue
            </a>
            <a
              href="https://github.com/Shemarhn/ClearLedger"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/14 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/[0.06]"
            >
              View Documentation
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
