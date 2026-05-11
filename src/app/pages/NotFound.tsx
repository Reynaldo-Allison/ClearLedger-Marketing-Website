import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10">
            <Search className="w-10 h-10 text-white/60" />
          </div>
          <h1 className="text-6xl font-bold mb-4 text-white">404</h1>
          <h2 className="text-2xl mb-4 text-white">Page Not Found</h2>
          <p className="text-white/60 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#00D9C0] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
