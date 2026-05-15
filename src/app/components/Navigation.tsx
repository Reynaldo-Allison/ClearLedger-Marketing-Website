import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Download, Menu, X } from 'lucide-react';
import clearledgerlogo from './assets/clearledgerlogo.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/why-budgeting', label: 'Why Budget?' },
    { path: '/features', label: 'Features' },
    { path: '/guide', label: 'Installation' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#06111d]/86 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#7fdcc2]/35 bg-[#1a2431] shadow-[0_0_24px_rgba(127,220,194,0.18)]">
              <img src={clearledgerlogo} alt="ClearLedger Logo" className="h-7 w-7" />
            </div>
            <div>
              <span className="block text-base font-semibold leading-none text-white">ClearLedger</span>
              <span className="hidden text-xs text-white/48 sm:block">Money movement cockpit</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive(link.path)
                    ? 'bg-white/10 text-white'
                    : 'text-white/64 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com/Shemarhn/ClearLedger/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#7fdcc2] px-5 py-2.5 text-sm font-semibold text-[#06241d] shadow-[0_14px_30px_rgba(127,220,194,0.22)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 pb-2 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm transition-colors ${
                    isActive(link.path)
                      ? 'bg-white/10 text-white'
                      : 'text-white/70 hover:bg-white/[0.06] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/Shemarhn/ClearLedger/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#7fdcc2] px-6 py-3 font-semibold text-[#06241d]"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
