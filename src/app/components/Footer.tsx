import { Link } from 'react-router';
import { Github } from 'lucide-react';
import clearledgerlogo from './assets/clearledgerlogo.png';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050e18] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#7fdcc2]/30 bg-white/[0.06]">
                <img src={clearledgerlogo} alt="ClearLedger Logo" className="h-6 w-6" />
              </div>
              <span className="font-semibold text-white">ClearLedger</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/58">
              Money movement, neatly tracked with OCR scanning, AI classification, and unified account management.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">Product</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/62">
              <Link to="/features" className="transition-colors hover:text-white">Features</Link>
              <Link to="/why-budgeting" className="transition-colors hover:text-white">Why Budget?</Link>
              <Link to="/guide" className="transition-colors hover:text-white">Installation Guide</Link>
              <Link to="/about" className="transition-colors hover:text-white">About Us</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/40">Links</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/62">
              <a href="#" className="transition-colors hover:text-white">Privacy</a>
              <a href="#" className="transition-colors hover:text-white">Terms</a>
              <a href="#" className="transition-colors hover:text-white">Support</a>
              <a
                href="https://github.com/Shemarhn/ClearLedger"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ClearLedger. All rights reserved.</span>
          <span>Android available now. Windows coming soon.</span>
        </div>
      </div>
    </footer>
  );
}
