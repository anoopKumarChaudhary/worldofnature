"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../redux/features/cart/cartSlice";
import Link from "next/link";
import {
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

export default function CartPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const handleUpdateQuantity = (
    id: string,
    size: string | undefined,
    quantity: number
  ) => {
    dispatch(updateQuantity({ id, size, quantity }));
  };

  const handleRemoveItem = (id: string, size: string | undefined) => {
    dispatch(removeFromCart({ id, size }));
  };

  const handleClearCart = () => {
    if (confirm("Are you sure you want to clear your cart?")) {
      dispatch(clearCart());
    }
  };

  // --- EMPTY STATE ---
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#D9DBD5] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div
          className="absolute inset-0 z-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob" />

        <div className="relative z-10 text-center p-8 bg-white/60 backdrop-blur-xl rounded-sm border border-[#1A2118]/5 shadow-2xl max-w-lg mx-2">
          <div className="w-24 h-24 bg-[#F2F0EA] rounded-sm flex items-center justify-center mx-auto mb-6 shadow-inner">
            <ShoppingBag className="w-10 h-10 text-[#BC5633]" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#1A2118] mb-2">
            Your cart is empty
          </h1>
          <p className="text-[#596157] mb-8">
            Looks like you haven&apos;t made your choices yet.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 h-14 px-8 bg-[#1A2118] text-white rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-all shadow-lg hover:shadow-[#BC5633]/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Start Foraging
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] lg:min-h-screen bg-[#D9DBD5] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white pb-8 overflow-x-hidden">
      {/* --- STYLES & BACKGROUND --- */}
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
      `}</style>
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#D9DBD5]" />

      {/* --- HEADER --- */}
      <div className="relative pt-16 lg:pt-32 pb-0 px-2 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl flex items-end justify-between border-b border-[#1A2118]/10 pb-4 mb-4 lg:pb-6 lg:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#1A2118]">
                Checkout
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-[#1A2118]">
              Your Harvest
            </h1>
          </div>
          <button
            onClick={handleClearCart}
            className="group flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#1A2118]/40 hover:text-[#BC5633] transition-colors pb-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Clear Cart</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 px-2 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-12 items-start">
            
            {/* --- CART ITEMS LIST --- */}
            <div className="w-full lg:col-span-8 space-y-3 lg:space-y-4">
              {items.map((item) => (
                // === PROFESSIONAL ITEM CARD ===
                <div
                  key={`${item.id}-${item.size}`}
                  className="group relative bg-white border border-[#1A2118]/5 rounded-sm p-3 sm:p-5 flex gap-4 sm:gap-6 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#BC5633]/30"
                >
                  {/* Left: Image */}
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-[#F2F0EA] rounded-sm overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    {/* Top Row: Title & Price */}
                    <div className="flex justify-between items-start gap-3">
                      <div className="space-y-1">
                         {/* Status Badge (Optional Professional Touch) */}
                         <div className="hidden sm:flex items-center gap-1.5 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A2118]/40">In Stock</span>
                         </div>
                        
                        <h3 className="font-serif text-lg sm:text-2xl text-[#1A2118] leading-[1.1] hover:text-[#BC5633] transition-colors cursor-pointer">
                          <Link href={`/product/${item.id}`}>{item.name}</Link>
                        </h3>
                        
                        {item.size && (
                          <p className="text-xs sm:text-sm font-medium text-[#596157] font-mono">
                            Volume: {item.size}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-[#1A2118] text-base sm:text-lg">
                          ₹{item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row: Controls */}
                    <div className="flex items-end justify-between mt-3 sm:mt-0">
                      {/* Premium Quantity Stepper */}
                      <div className="flex items-center border border-[#1A2118]/10 rounded-sm bg-white hover:border-[#1A2118]/30 transition-colors h-8 sm:h-9">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-8 h-full flex items-center justify-center text-[#1A2118]/60 hover:text-[#BC5633] hover:bg-[#F2F0EA] transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-[#1A2118] font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleUpdateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-full flex items-center justify-center text-[#1A2118]/60 hover:text-[#BC5633] hover:bg-[#F2F0EA] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.id, item.size)}
                        className="group/trash flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1A2118]/30 hover:text-rose-500 transition-colors py-2 pl-2"
                      >
                        <span className="hidden sm:inline">Remove</span>
                        <Trash2 className="w-4 h-4 transition-transform group-hover/trash:scale-110" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 text-[#596157] hover:text-[#1A2118] font-medium transition-colors mt-2 ml-1 text-sm group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Continue Shopping
              </Link>
            </div>

            {/* --- ORDER SUMMARY --- */}
            <div className="w-full lg:col-span-4 mt-4 lg:mt-0">
              <div className="sticky top-32">
                <div className="bg-[#1A2118] text-[#F2F0EA] rounded-sm p-5 lg:p-8 shadow-2xl relative overflow-hidden">
                  {/* Decorative Blob */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[60px] opacity-40 pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-2 mb-6 opacity-60">
                     <PackageCheck className="w-4 h-4" />
                     <span className="text-xs font-bold uppercase tracking-widest">Order Details</span>
                  </div>

                  <div className="space-y-4 text-sm font-medium text-[#F2F0EA]/70 relative z-10 font-mono">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="text-[#F2F0EA]">₹{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-[#BC5633]">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (Est.)</span>
                      <span>₹0.00</span>
                    </div>

                    <div className="border-t border-white/10 pt-6 mt-6 pb-2">
                      <div className="flex justify-between items-end">
                        <span className="text-[#F2F0EA]/50 uppercase tracking-widest text-xs font-sans font-bold">Total</span>
                        <span className="text-3xl font-serif text-[#F2F0EA]">
                          ₹{total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="group w-full h-14 mt-8 bg-[#F2F0EA] text-[#1A2118] rounded-sm flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg relative z-10"
                  >
                    Checkout <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="mt-4 flex items-center justify-center gap-2 text-[#F2F0EA]/30 text-[10px] uppercase tracking-widest relative z-10">
                    <ShieldCheck className="w-3 h-3" /> Secure Transaction • SSL Encrypted
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}