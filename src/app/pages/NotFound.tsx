import { Link } from 'react-router';
import { Home, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#06111d] px-4 py-20">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-lg border border-[#7fdcc2]/24 bg-[#173a35] text-[#7fdcc2]">
          <Search className="h-10 w-10" />
        </div>
        <h1 className="text-6xl font-semibold tracking-tight text-white">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>
        <p className="mt-4 text-white/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#7fdcc2] px-6 py-3 font-semibold text-[#06241d] transition-transform hover:-translate-y-0.5"
        >
          <Home className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
