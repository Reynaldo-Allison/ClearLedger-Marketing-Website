import { Link } from 'react-router';
import {
  ArrowRight,
  Download,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import { HeroDashboardMockup } from '../components/HeroDashboardMockup';
import { AppFeatureCarousel, ReceiptCardPreview, ReceiptFlowMockup } from '../components/MarketingVisuals';

export function Home() {
  return (
    <div className="bg-[#06111d]">
      <section className="relative bg-page-glow">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7fdcc2]/35 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="animate-rise inline-flex items-center gap-2 rounded-lg border border-[#7fdcc2]/28 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-medium text-[#c8fff1]">
              <Smartphone className="h-4 w-4" />
              <span>Available on Android / Windows Coming Soon</span>
            </div>

            <h1 className="animate-rise-delay-1 mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
              Smart Financial Tracking{' '}
              <span className="bg-gradient-to-r from-[#7fdcc2] via-[#c8fff1] to-white bg-clip-text text-transparent">
                by Automation
              </span>
            </h1>

            <p className="animate-rise-delay-2 mt-6 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              Money movement, neatly tracked. Scan receipts with OCR, let AI classify your transactions, and manage all your accounts in one unified ledger.
            </p>

            <div className="animate-rise-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/Shemarhn/ClearLedger/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7fdcc2] px-6 py-3 font-semibold text-[#06241d] shadow-[0_18px_40px_rgba(127,220,194,0.22)] transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-5 w-5" />
                Download for Android (APK)
              </a>
              <button className="inline-flex cursor-not-allowed items-center justify-center rounded-lg border border-white/14 px-6 py-3 font-semibold text-white/58">
                Windows Coming Soon
              </button>
            </div>
          </div>

          <div className="relative">
            <HeroDashboardMockup />
          </div>
        </div>
      </section>

      <section id="features-showcase" className="border-y border-white/10 bg-[#071521] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="animate-rise inline-flex rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">All-in-one</div>
              <h2 className="animate-rise-delay-1 mt-5 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                Powerful features, zero manual work
              </h2>
            </div>
            <p className="animate-rise-delay-2 max-w-2xl text-lg leading-8 text-white/62">
              ClearLedger combines OCR, AI classification, and smart account management.
            </p>
          </div>

          <div className="mt-12">
            <AppFeatureCarousel />
          </div>

          <div className="mt-12">
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2] px-6 py-3 font-semibold text-[#06241d] transition-transform hover:-translate-y-0.5"
            >
              View All Features
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#06111d] py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="animate-rise inline-flex items-center gap-2 rounded-lg border border-[#7fdcc2]/24 bg-[#7fdcc2]/10 px-3 py-2 text-sm font-semibold text-[#c8fff1]">
              <ShieldCheck className="h-4 w-4" />
              Review before saving
            </div>
            <h2 className="animate-rise-delay-1 mt-5 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              From receipt to ledger in a simple flow
            </h2>
            <p className="animate-rise-delay-2 mt-5 max-w-xl text-lg leading-8 text-white/62">
              Snap a receipt or ATM slip, review the AI-detected details, and save the movement to your unified ledger.
            </p>
          </div>

          <div className="space-y-4">
            <ReceiptCardPreview />
            <ReceiptFlowMockup />
          </div>
        </div>
      </section>

      <section className="border-t border-[#7fdcc2]/18 bg-[#071521] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-lg border border-[#7fdcc2]/22 bg-[#0a2030] px-6 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:px-10 md:py-14">
            <h2 className="animate-rise text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Start tracking smarter today
            </h2>
            <p className="animate-rise-delay-1 mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/62">
              Join users who have automated their financial tracking with OCR scanning, AI classification, and unified account management.
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="https://github.com/Shemarhn/ClearLedger/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#7fdcc2] px-6 py-3 font-semibold text-[#06241d] transition-transform hover:-translate-y-0.5"
              >
                <Download className="h-5 w-5" />
                Download ClearLedger
              </a>
              <Link
                to="/guide"
                className="inline-flex items-center justify-center rounded-lg border border-white/14 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/[0.06]"
              >
                Installation Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
