"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, resendOtp } from "../redux/features/auth/authSlice";
import { AppDispatch, RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, AlertCircle } from "lucide-react";

export default function VerificationModal() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { user, isLoading, error } = useSelector((state: RootState) => state.auth);
  const [otp, setOtp] = useState("");
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6 || !user?.email) return;

    try {
      await dispatch(verifyOtp({ email: user.email, otp })).unwrap();
      window.location.reload();
    } catch (err) {
      console.error("Verification failed:", err);
    }
  };

  const handleResendOtp = async () => {
    if (!user?.email) return;
    setResendStatus("Sending...");
    try {
      await dispatch(resendOtp(user.email)).unwrap();
      setResendStatus("OTP Resent!");
      setTimeout(() => setResendStatus(null), 3000);
    } catch {
      setResendStatus("Failed to resend");
      setTimeout(() => setResendStatus(null), 3000);
    }
  };

  if (!user || user.isVerified) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A2118]/80 backdrop-blur-sm">
      <div className="bg-[#F2F0EA] rounded-sm w-full max-w-md overflow-hidden shadow-2xl relative animate-fade-up">
        {/* Decorative Header */}
        <div className="bg-[#1A2118] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[40px] opacity-40 pointer-events-none" />
          <div className="w-16 h-16 bg-[#F2F0EA]/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-white/10">
            <Lock className="w-8 h-8 text-[#F2F0EA]" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#F2F0EA]">
            Verification Required
          </h2>
          <p className="text-[#F2F0EA]/60 text-sm mt-2">
            Please verify your email to place an order.
          </p>
        </div>

        <div className="p-8">
          <div className="text-center mb-6">
            <p className="text-[#596157] text-sm">
              We&apos;ve sent a code to <span className="font-bold text-[#1A2118]">{user.email}</span>
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="w-full px-6 py-4 bg-white border border-[#1A2118]/10 rounded-sm text-[#1A2118] text-center text-2xl font-bold tracking-[0.5em] focus:ring-4 focus:ring-[#BC5633]/5 outline-none transition-all duration-300 placeholder-[#1A2118]/10 shadow-sm"
                placeholder="000000"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 text-xs font-medium justify-center bg-red-50 p-3 rounded-sm">
                <AlertCircle className="w-4 h-4" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || otp.length !== 6}
              className="w-full h-14 bg-[#1A2118] text-white rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] hover:shadow-lg hover:shadow-[#BC5633]/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Verify & Continue
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-6 flex flex-col items-center gap-3">
             <button 
                onClick={handleResendOtp}
                disabled={resendStatus === "Sending..."}
                className="text-xs font-bold text-[#BC5633] hover:text-[#A44626] uppercase tracking-widest transition-colors disabled:opacity-50"
             >
                {resendStatus || "Resend OTP"}
             </button>

             <button 
                onClick={() => router.push('/contact')}
                className="text-xs font-bold text-[#1A2118]/40 hover:text-[#BC5633] uppercase tracking-widest transition-colors"
             >
                Need help? Contact Support
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
