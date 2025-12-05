import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F2F0EA] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full">
        <div className="w-24 h-24 bg-[#BC5633]/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 animate-pulse">
          <Search className="w-10 h-10 text-[#BC5633]" />
        </div>
        
        <h1 className="text-6xl font-serif font-bold text-[#1A2118] mb-4">404</h1>
        <h2 className="text-2xl font-serif text-[#1A2118] mb-6">Page Not Found</h2>
        
        <p className="text-[#596157] mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="w-full py-4 bg-[#1A2118] text-white rounded-[1.5rem] font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-colors flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
        >
          <Home className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
