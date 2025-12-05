"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F2F0EA] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[2.5rem] shadow-xl">
        <div className="w-20 h-20 bg-red-100 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </div>

        <h2 className="text-2xl font-serif font-bold text-[#1A2118] mb-4">
          Something went wrong!
        </h2>

        <p className="text-[#596157] mb-8 text-sm">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>

        <button
          onClick={reset}
          className="w-full py-4 bg-[#1A2118] text-white rounded-[1.5rem] font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-colors flex items-center justify-center gap-3 shadow-lg"
        >
          <RefreshCw className="w-4 h-4" /> Try again
        </button>
      </div>
    </div>
  );
}
