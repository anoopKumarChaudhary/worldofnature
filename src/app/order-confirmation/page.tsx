"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Link from "next/link";
import {
  Check,
  Package,
  Truck,
  Home,
  ShoppingBag,
  Mail,
  ArrowRight,
} from "lucide-react";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") || "Unknown";
  const { items, total } = useSelector((state: RootState) => state.cart);

  const tax = total * 0.08;
  const finalTotal = total + tax;

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white pb-20 overflow-x-hidden">
      {/* --- STYLES & ANIMATION --- */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleCheck {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-check {
          animation: scaleCheck 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards;
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A2118] rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-blob" />
      </div>

      <div className="relative z-10 pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          {/* --- SUCCESS HEADER --- */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="w-24 h-24 bg-[#3A4D39] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-[#3A4D39]/30 animate-scale-check">
              <Check className="w-10 h-10 text-white" strokeWidth={3} />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-medium text-[#1A2118] mb-4 tracking-tight">
              Order Confirmed!
            </h1>
            <p className="text-xl text-[#596157] max-w-lg mx-auto leading-relaxed">
              Thank you for choosing nature. We've received your order and are
              getting it ready for the journey home.
            </p>
          </div>

          {/* --- ORDER DETAILS CARD --- */}
          <div
            className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[3rem] shadow-2xl overflow-hidden animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Header Bar */}
            <div className="bg-[#1A2118] text-[#F2F0EA] p-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-1">
                  Order Number
                </p>
                <p className="text-2xl font-mono">{orderNumber}</p>
              </div>
              <div className="px-4 py-2 bg-[#F2F0EA]/10 rounded-full border border-[#F2F0EA]/20">
                <span className="text-xs font-bold uppercase tracking-widest">
                  Processing
                </span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {/* Items List */}
              <div className="space-y-6 mb-10">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40 mb-4">
                  Items Ordered
                </h3>
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex items-center gap-5"
                  >
                    <div className="w-16 h-16 bg-white rounded-[1rem] overflow-hidden border border-[#1A2118]/5 shadow-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#1A2118]">{item.name}</h4>
                      <p className="text-sm text-[#596157]">
                        Qty: {item.quantity} {item.size && `• ${item.size}`}
                      </p>
                    </div>
                    <p className="font-bold text-[#1A2118]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-[#1A2118]/10 mb-8" />

              {/* Totals */}
              <div className="space-y-3 text-sm font-medium text-[#596157]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-[#BC5633]">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-[#1A2118] pt-4 mt-4 border-t border-[#1A2118]/10">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- TIMELINE SECTION --- */}
          <div
            className="mt-12 grid md:grid-cols-2 gap-8 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {/* What's Next */}
            <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-8">
              <h3 className="text-xl font-serif font-bold text-[#1A2118] mb-6">
                What's Next?
              </h3>
              <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-[#1A2118]/10" />

                <div className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-[#BC5633] border-4 border-[#F2F0EA] z-10 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-[#1A2118]">
                      Order Confirmed
                    </p>
                    <p className="text-xs text-[#596157]">
                      We've received your order.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-[#1A2118]/20 border-4 border-[#F2F0EA] z-10 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-[#1A2118]/60">
                      Processing
                    </p>
                    <p className="text-xs text-[#596157]">
                      We're packing your goods.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="w-6 h-6 rounded-full bg-[#1A2118]/20 border-4 border-[#F2F0EA] z-10 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-[#1A2118]/60">
                      Shipped
                    </p>
                    <p className="text-xs text-[#596157]">On its way to you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Need Help? */}
            <div className="bg-[#1A2118] text-[#F2F0EA] rounded-[2.5rem] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">
                  Need Help?
                </h3>
                <p className="text-sm opacity-70 mb-6">
                  If you have any questions about your order, our support team
                  is ready to assist.
                </p>
              </div>
              <a
                href="mailto:support@worldofnature.com"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#BC5633] transition-colors"
              >
                Contact Support <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* --- ACTION BUTTONS --- */}
          <div
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Link
              href="/shop"
              className="h-14 px-8 bg-[#1A2118] text-white rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-colors shadow-lg flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-5 h-5" /> Continue Shopping
            </Link>
            <Link
              href="/"
              className="h-14 px-8 bg-white border border-[#1A2118]/10 text-[#1A2118] rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#F2F0EA] transition-colors flex items-center justify-center gap-3"
            >
              <Home className="w-5 h-5" /> Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F2F0EA] flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#1A2118]/10 border-t-[#1A2118] rounded-full animate-spin"></div>
        </div>
      }
    >
      <OrderConfirmationContent />
    </Suspense>
  );
}
