import { Download, Smartphone, Camera, Settings, CheckCircle2, ChevronRight, Github, ExternalLink } from 'lucide-react';

export function Guide() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-white">
            Installation{' '}
            <span className="bg-gradient-to-r from-[#00D9C0] to-[#00A88F] bg-clip-text text-transparent">
              Guide
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8">
            Get started with ClearLedger in minutes. Follow our step-by-step guide to download and install from GitHub.
          </p>
        </div>
      </section>

      {/* Installation Section */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">Android Installation</h2>

            {/* GitHub Link Card */}
            <div className="mb-12 bg-gradient-to-br from-[#00D9C0]/10 to-white/5 rounded-2xl p-8 border border-[#00D9C0]/20">
              <div className="flex items-center gap-3 mb-4">
                <Github className="w-8 h-8 text-[#00D9C0]" />
                <h3 className="text-xl text-white">Official GitHub Repository</h3>
              </div>
              <p className="text-white/70 mb-6">
                ClearLedger is open source and available on GitHub. Download the latest release directly from the repository.
              </p>
              <a
                href="https://github.com/Shemarhn/ClearLedger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00D9C0] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Installation Steps */}
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: 'Visit the GitHub Repository',
                  desc: 'Navigate to https://github.com/Shemarhn/ClearLedger or click the button above.'
                },
                {
                  step: 2,
                  title: 'Go to Releases',
                  desc: 'On the right sidebar, click on "Releases" to see all available versions of ClearLedger.'
                },
                {
                  step: 3,
                  title: 'Download the Latest APK',
                  desc: 'Under the latest release, find the Assets section and download the .apk file (e.g., ClearLedger-v1.0.0.apk).'
                },
                {
                  step: 4,
                  title: 'Enable Unknown Sources',
                  desc: 'Go to Settings > Security > Unknown Sources on your Android device and enable installation from unknown sources. (You can disable this after installation for security).'
                },
                {
                  step: 5,
                  title: 'Install the APK',
                  desc: 'Open your file manager or downloads folder, locate the APK file you just downloaded, and tap to install.'
                },
                {
                  step: 6,
                  title: 'Grant Permissions',
                  desc: 'When prompted, grant camera and storage permissions. These are required for receipt scanning functionality.'
                },
                {
                  step: 7,
                  title: 'Launch ClearLedger',
                  desc: 'Once installed, open the app from your app drawer and start tracking your finances!'
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-[#0A0F0D] rounded-xl p-6 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#00D9C0] text-white flex items-center justify-center flex-shrink-0 font-medium">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="mb-1 text-white font-medium">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                <p className="text-sm text-blue-300">
                  <strong>System Requirements:</strong> Android 8.0 (Oreo) or higher
                </p>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                <p className="text-sm text-amber-300">
                  <strong>Security Tip:</strong> Always download from the official GitHub repository to ensure you're getting the genuine app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">Getting Started</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-[#00D9C0]" />
                </div>
                <h3 className="mb-3 text-white">Initial Setup</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                    <span>Set your preferred currency in Settings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                    <span>Create accounts for your cash, banks, and cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                    <span>Set up budgets for spending categories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                    <span>Enable biometric unlock for security</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-[#00D9C0]/10 flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-[#00D9C0]" />
                </div>
                <h3 className="mb-3 text-white">Adding Transactions</h3>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                    <span>Tap the + button to add a movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                    <span>Choose "Photo" to scan a receipt or "Text" for manual entry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                    <span>Review the AI-detected details and adjust if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#00D9C0] mt-0.5 flex-shrink-0" />
                    <span>Save to add to your ledger automatically</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-[#00D9C0]/10 to-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl mb-6 text-white flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#00D9C0]" />
                Quick Tips for Best Results
              </h3>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0] mt-2 flex-shrink-0"></div>
                  <span>Take clear, well-lit photos of receipts for best OCR accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0] mt-2 flex-shrink-0"></div>
                  <span>Review detected transactions before saving to ensure accuracy</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0] mt-2 flex-shrink-0"></div>
                  <span>Link cards to accounts for complete financial tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0] mt-2 flex-shrink-0"></div>
                  <span>Set realistic budget limits based on your actual spending</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0] mt-2 flex-shrink-0"></div>
                  <span>Check the AI Overview daily for spending insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D9C0] mt-2 flex-shrink-0"></div>
                  <span>Export reports monthly to track your financial progress</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="bg-white/5 py-16 md:py-24 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl mb-12 text-white text-center">Troubleshooting</h2>

            <div className="space-y-4">
              <details className="bg-[#0A0F0D] rounded-xl p-6 border border-white/10">
                <summary className="text-white font-medium cursor-pointer">Installation blocked by Play Protect?</summary>
                <p className="text-white/60 text-sm mt-3">
                  Since ClearLedger is installed from outside the Play Store, you may see a Play Protect warning. Tap "More details" and then "Install anyway" to proceed. This is normal for apps installed from GitHub.
                </p>
              </details>

              <details className="bg-[#0A0F0D] rounded-xl p-6 border border-white/10">
                <summary className="text-white font-medium cursor-pointer">App won't install?</summary>
                <p className="text-white/60 text-sm mt-3">
                  Make sure you've enabled "Unknown Sources" in your security settings and that you're running Android 8.0 or higher. If you have an old version installed, uninstall it first before installing the new version.
                </p>
              </details>

              <details className="bg-[#0A0F0D] rounded-xl p-6 border border-white/10">
                <summary className="text-white font-medium cursor-pointer">Camera not working for receipt scanning?</summary>
                <p className="text-white/60 text-sm mt-3">
                  Go to Settings &gt; Apps &gt; ClearLedger &gt; Permissions and ensure Camera and Storage permissions are granted. You may need to restart the app after granting permissions.
                </p>
              </details>

              <details className="bg-[#0A0F0D] rounded-xl p-6 border border-white/10">
                <summary className="text-white font-medium cursor-pointer">How do I update to a new version?</summary>
                <p className="text-white/60 text-sm mt-3">
                  Visit the GitHub releases page and download the latest APK. Install it over your existing version (your data will be preserved). You don't need to uninstall the old version first.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl mb-4 text-white">Need Help?</h2>
            <p className="text-white/70 mb-8">
              Have questions or running into issues? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Shemarhn/ClearLedger/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00D9C0] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <Github className="w-5 h-5" />
                Report an Issue
              </a>
              <a
                href="https://github.com/Shemarhn/ClearLedger"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 px-8 py-3 rounded-lg hover:bg-white/5 transition-colors text-white inline-flex items-center justify-center gap-2"
              >
                View Documentation
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
