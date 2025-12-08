"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Mail, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001"}/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong");
      }

      setIsSuccess(true);
      // Redirect to reset password page after a short delay or let user click
      setTimeout(() => {
        router.push(`/reset-password?email=${encodeURIComponent(email)}`);
      }, 2000);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#F2F0EA]" />
        
        <div className="relative z-10 w-full max-w-lg animate-fade-up">
          <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-[#1A2118]/10 text-center relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none" />

            <div className="w-20 h-20 bg-[#1A2118] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2118] mb-4 relative z-10">
              Check Your Email
            </h2>
            
            <p className="text-[#596157] text-base mb-8 leading-relaxed relative z-10">
              We&apos;ve sent a password reset code to <span className="font-bold text-[#1A2118]">{email}</span>. Redirecting you...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <style jsx>{`
        .animate-fade-up { animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="fixed inset-0 z-0 pointer-events-none bg-[#F2F0EA]" />

      <div className="relative z-10 w-full max-w-lg animate-fade-up">
        <div className="absolute -top-16 left-0">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 hover:text-[#BC5633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Login
          </Link>
        </div>

        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-[#1A2118]/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[50px] opacity-20 pointer-events-none" />

          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-[#1A2118] rounded-[1.2rem] flex items-center justify-center shadow-lg mx-auto mb-6">
              <span className="text-2xl font-bold text-white">?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2118] mb-3">
              Forgot Password
            </h2>
            <p className="text-[#596157] text-sm font-medium">
              Enter your email and we&apos;ll send you a code to reset your password.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-white border border-[#1A2118]/10 rounded-[1.5rem] text-[#1A2118] focus:ring-4 focus:ring-[#BC5633]/5 outline-none transition-all duration-300 placeholder-[#1A2118]/30 shadow-sm focus:border-[#BC5633]/20"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5 text-[#1A2118]/40" />
                </div>
              </div>
            </div>

            {error && (
              <div className="text-center">
                <p className="text-xs text-red-500 font-medium">{error}</p>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full h-14 bg-[#1A2118] text-white rounded-[1.5rem] font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] hover:shadow-lg hover:shadow-[#BC5633]/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Reset Code
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
