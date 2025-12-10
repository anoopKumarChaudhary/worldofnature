"use client";

import { useState } from "react";
import { Search, Package, AlertCircle, ArrowRight } from "lucide-react";
import { ordersAPI, Order, OrderItem } from "../services/api";
import Image from "next/image";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<Order | null>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber || !email) return;

    setIsLoading(true);
    setError(null);
    setOrder(null);

    try {
      const result = await ordersAPI.trackOrder(orderNumber, email);
      setOrder(result);
    } catch {
      setError("Order not found or details do not match.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-[#1A2118] mb-6">
            Track Your Order
          </h1>
          <p className="text-[#596157] text-lg max-w-2xl mx-auto">
            Enter your order number and email address to check the status of your shipment.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-[#1A2118]/5 mb-12">
          <form onSubmit={handleTrack} className="space-y-6 max-w-xl mx-auto">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                Order Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g. ORD-1733650000000"
                  className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 placeholder-[#1A2118]/30"
                  required
                />
                <Package className="absolute right-6 top-1/2 -translate-y-1/2 text-[#1A2118]/30 w-5 h-5" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. jane@example.com"
                  className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 placeholder-[#1A2118]/30"
                  required
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-[#1A2118]/30 w-5 h-5" />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-500 text-sm font-medium justify-center bg-red-50 p-4 rounded-2xl">
                <AlertCircle className="w-5 h-5" />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-[#1A2118] text-white rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#3A4D39] transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Track Order <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {order && (
          <div className="bg-[#1A2118] text-[#F2F0EA] rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden animate-fade-up">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[80px] opacity-20 pointer-events-none" />
             
             <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                   <div>
                      <h2 className="text-3xl font-serif font-bold mb-2">Order Status</h2>
                      <p className="text-[#F2F0EA]/60">Order #{order.orderNumber}</p>
                   </div>
                   <div className="px-6 py-3 bg-[#BC5633] rounded-full font-bold uppercase tracking-widest text-sm shadow-lg shadow-[#BC5633]/20">
                      {order.status}
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                   <div>
                      <h3 className="text-[#F2F0EA]/40 uppercase tracking-widest text-xs font-bold mb-4">Date Placed</h3>
                      <p className="text-xl font-serif">{new Date(order.createdAt).toLocaleDateString()}</p>
                   </div>
                   <div>
                      <h3 className="text-[#F2F0EA]/40 uppercase tracking-widest text-xs font-bold mb-4">Total Amount</h3>
                      <p className="text-xl font-serif">₹{order.total.toFixed(2)}</p>
                   </div>
                   <div>
                      <h3 className="text-[#F2F0EA]/40 uppercase tracking-widest text-xs font-bold mb-4">Payment Method</h3>
                      <p className="text-xl font-serif">{order.paymentMethod}</p>
                   </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10">
                   <h3 className="text-[#F2F0EA]/40 uppercase tracking-widest text-xs font-bold mb-6">Items Ordered</h3>
                   <div className="space-y-4">
                      {order.items.map((item: OrderItem) => (
                         <div key={item.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-4">
                               <div className="relative w-12 h-12 bg-white/10 rounded-xl overflow-hidden">
                                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="48px" />
                               </div>
                               <div>
                                  <p className="font-bold">{item.name}</p>
                                  <p className="text-sm text-[#F2F0EA]/60">Qty: {item.quantity}</p>
                               </div>
                            </div>
                            <p className="font-serif">₹{(item.price * item.quantity).toFixed(2)}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
