"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { login, register, verifyOtp, clearError } from "../redux/features/auth/authSlice";
import { RootState } from "../redux/store";
import type { AppDispatch } from "../redux/store";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
} from "lucide-react";
import { useToast } from "../context/ToastContext";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { addToast } = useToast();

  const { isLoading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  // const [showSuccess, setShowSuccess] = useState(false); // Removed unused state
  const [showOtp, setShowOtp] = useState(false); // OTP State
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (error) {
      dispatch(clearError());
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!isLogin) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (isLogin) {
      try {
        await dispatch(login({ email: formData.email, password: formData.password })).unwrap();
        addToast("Logged in successfully", "success");
      } catch (_error) {
        addToast("Login failed. Please check your credentials.", "error");
      }
    } else {
      // Handle Registration -> Show OTP
      try {
        const result = await dispatch(
          register({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
          })
        ).unwrap();
        
        if (result) {
          setShowOtp(true);
          addToast("Registration successful. Please verify your email.", "success");
        }
      } catch {
        addToast("Registration failed. Please try again.", "error");
      }
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return;

    try {
      await dispatch(verifyOtp({ email: formData.email, otp })).unwrap();
      addToast("Email verified successfully", "success");
      // Success is handled by useEffect redirect
    } catch {
      addToast("Invalid OTP. Please try again.", "error");
    }
  };

  // Redirect only if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  // --- OTP VIEW ---
  if (showOtp) {
    return (
      <div className="min-h-screen bg-[#D9DBD5] text-[#1A2118] font-sans selection:bg-[#B56B56] selection:text-white flex items-center justify-center pt-20 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#D9DBD5]" />
        
        <div className="relative z-10 w-full max-w-lg animate-fade-up">
          <div className="bg-white/80 backdrop-blur-2xl border border-white/60 rounded-sm p-6 md:p-12 shadow-2xl shadow-[#1A2118]/10 text-center relative overflow-hidden">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#B56B56] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none" />

            <div className="w-20 h-20 bg-[#1A2118] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10">
              <Lock className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2118] mb-4 relative z-10">
              Verify Your Email
            </h2>
            
            <p className="text-[#596157] text-base mb-8 leading-relaxed relative z-10">
              We&apos;ve sent a 6-digit code to <span className="font-bold text-[#1A2118]">{formData.email}</span>. Please enter it below.
            </p>

            <form onSubmit={handleVerifyOtp} className="space-y-6 relative z-10">
              <div className="relative">
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-6 py-4 bg-white border border-[#1A2118]/10 rounded-sm text-[#1A2118] text-center text-2xl font-bold tracking-[0.5em] focus:ring-4 focus:ring-[#B56B56]/5 outline-none transition-all duration-300 placeholder-[#1A2118]/10 shadow-sm"
                  placeholder="000000"
                />
              </div>

              {error && (
                <p className="text-xs text-red-500 font-medium">{error}</p>
              )}

              <button
                type="submit"
                disabled={isLoading || otp.length !== 6}
                className="w-full h-14 bg-[#1A2118] text-white rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#B56B56] hover:shadow-lg hover:shadow-[#B56B56]/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Verify & Login
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen bg-[#D9DBD5] text-[#1A2118] font-sans selection:bg-[#B56B56] selection:text-white flex items-center justify-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* --- STYLES & ANIMATIONS --- */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animate-fade-up { animation: fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#D9DBD5]" />

      <div className="relative z-10 w-full max-w-lg animate-fade-up">


        {/* Main Card */}
        <div className="bg-white/70 backdrop-blur-2xl border border-white/40 rounded-sm p-6 md:p-12 shadow-2xl shadow-[#1A2118]/10 relative overflow-hidden">
          {/* Top Decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B56B56] rounded-full mix-blend-overlay filter blur-[50px] opacity-20 pointer-events-none" />

          <div className="text-center mb-10">
            <Link
              href="/"
              className="inline-block mb-6 hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 bg-[#1A2118] rounded-sm flex items-center justify-center shadow-lg mx-auto">
                <span className="text-2xl font-bold text-white">W</span>
              </div>
            </Link>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2118] mb-3">
              {isLogin ? "Welcome Back" : "Join the Harvest"}
            </h2>
            <p className="text-[#596157] text-sm font-medium">
              {isLogin
                ? "Sign in to continue your journey."
                : "Create an account to start foraging."}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  error={errors.firstName}
                  icon={<User className="w-5 h-5 text-[#1A2118]/40" />}
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  error={errors.lastName}
                />
              </div>
            )}

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              icon={<Mail className="w-5 h-5 text-[#1A2118]/40" />}
            />

            <Input
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              icon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[#1A2118]/40 hover:text-[#1A2118] transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              }
            />

            {!isLogin && (
              <Input
                label="Confirm Password"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={errors.confirmPassword}
                icon={<Lock className="w-5 h-5 text-[#1A2118]/40" />}
              />
            )}

            {isLogin && (
              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded-sm border-[#1A2118]/20 text-[#1A2118] focus:ring-[#B56B56]"
                  />
                  <span className="ml-2 text-xs font-bold text-[#596157]">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-bold text-[#B56B56] hover:text-[#A44626] transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
            )}

            {error && (
              <div className="text-center">
                <p className="text-xs text-red-500 font-medium">{error}</p>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="group w-full h-14 bg-[#1A2118] text-white rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#B56B56] hover:shadow-lg hover:shadow-[#B56B56]/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-[#1A2118]/10"></div>
              <span className="flex-shrink-0 mx-4 text-[#1A2118]/40 text-xs font-bold uppercase tracking-widest">
                Or continue with
              </span>
              <div className="flex-grow border-t border-[#1A2118]/10"></div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <SocialButton
                icon={
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                }
                label="Google"
              />
              <SocialButton
                icon={
                  <svg className="w-5 h-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                }
                label="Twitter"
              />
            </div>

            <p className="mt-8 text-sm text-[#596157]">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-[#1A2118] hover:text-[#B56B56] transition-colors underline underline-offset-4 decoration-[#B56B56]/30"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  icon?: React.ReactNode;
}

interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
}

// --- COMPONENTS ---

const Input = ({ label, error, icon, ...props }: InputProps) => (
  <div className="space-y-2">
    <label className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
      {label}
    </label>
    <div className="relative">
      <input
        {...props}
        className={`w-full px-6 py-4 bg-white border rounded-sm text-base text-[#1A2118] focus:ring-4 focus:ring-[#B56B56]/5 outline-none transition-all duration-300 placeholder-[#1A2118]/30 shadow-sm ${
          error
            ? "border-red-400 focus:border-red-400"
            : "border-[#1A2118]/10 focus:border-[#B56B56]/20"
        }`}
      />
      {icon && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2">{icon}</div>
      )}
    </div>
    {error && <p className="text-xs text-red-500 font-medium ml-4">{error}</p>}
  </div>
);

const SocialButton = ({ icon, label }: SocialButtonProps) => (
  <button
    type="button"
    className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-[#1A2118]/5 rounded-sm hover:bg-[#F2F0EA] hover:-translate-y-0.5 transition-all shadow-sm"
  >
    {icon}
    <span className="text-sm font-bold text-[#1A2118]">{label}</span>
  </button>
);
