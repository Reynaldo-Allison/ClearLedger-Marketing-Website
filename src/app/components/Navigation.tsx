import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Download } from 'lucide-react';
import clearledgerlogo from './assets/clearledgerlogo.PNG';

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="border-b border-white/10 sticky top-0 bg-[#0A0F0D]/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#00D9C0] flex items-center justify-center">
              <img src={clearledgerlogo} alt="ClearLedger Logo" className="w-6 h-6" />
            </div>
            <span className="font-semibold text-white">ClearLedger</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? 'text-[#00D9C0]'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/Shemarhn/ClearLedger/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00D9C0] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-white/10 mt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 text-sm transition-colors ${
                    isActive(link.path)
                      ? 'text-[#00D9C0]'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/Shemarhn/ClearLedger/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00D9C0] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-2"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
