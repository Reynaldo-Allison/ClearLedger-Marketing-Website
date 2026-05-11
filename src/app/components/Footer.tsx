import { Link } from 'react-router';
import clearledgerlogo from './assets/clearledgerlogo.png';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 bg-[#0A0F0D]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#00D9C0] flex items-center justify-center">
              <img src={clearledgerlogo} alt="ClearLedger Logo" className="w-4 h-4" />
            </div>
            <span className="font-semibold text-white">ClearLedger</span>
          </div>
          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <Link to="/guide" className="hover:text-white transition-colors">Guide</Link>
          </div>
          <div className="text-sm text-white/60">
            © 2026 ClearLedger. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
