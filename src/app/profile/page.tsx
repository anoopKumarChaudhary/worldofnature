"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRouter } from "next/navigation";
import { ordersAPI, Order } from "../services/api";
import { User, Package, Calendar, ChevronRight, LogOut } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/auth/authSlice";
import AuthGuard from "../components/AuthGuard";

export default function ProfilePage() {
  const { user } = useSelector(
    (state: RootState) => state.auth
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user?.id) {
        try {
          const data = await ordersAPI.getOrdersByUser(user.id);
          setOrders(data);
        } catch (error) {
          console.error("Failed to fetch orders:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (user?.id) {
      fetchOrders();
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };



  return (
    <AuthGuard>
      <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white pb-20 overflow-x-hidden">
        {/* --- STYLES & ANIMATIONS --- */}
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

        <div className="relative z-10 pt-32 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A2118]">
                    My Account
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-[#1A2118]">
                  Welcome, {user?.firstName}
                </h1>
              </div>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-white/60 backdrop-blur-md border border-[#1A2118]/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1A2118] hover:text-white transition-all flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              {/* Sidebar / User Info */}
              <div className="lg:col-span-4">
                <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 shadow-lg">
                  <div className="w-20 h-20 bg-[#1A2118] rounded-[1.5rem] flex items-center justify-center mb-6 shadow-xl text-white text-2xl font-serif">
                    {user?.firstName?.charAt(0)}
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-[#1A2118] mb-1">
                    {user?.firstName} {user?.lastName}
                  </h2>
                  <p className="text-[#596157] text-sm mb-6">{user?.email}</p>
                  
                  <div className="space-y-4 pt-6 border-t border-[#1A2118]/10">
                    <div className="flex items-center gap-3 text-sm font-medium text-[#1A2118]/70">
                      <User className="w-4 h-4" /> Personal Details
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium text-[#BC5633]">
                      <Package className="w-4 h-4" /> Order History
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content / Orders */}
              <div className="lg:col-span-8">
                <h2 className="text-2xl font-serif font-bold text-[#1A2118] mb-6">
                  Order History
                </h2>

                {loading ? (
                  <div className="flex justify-center py-12">
                    <div className="w-10 h-10 border-2 border-[#BC5633] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : orders.length === 0 ? (
                  <div className="bg-white/40 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-12 text-center">
                    <div className="w-16 h-16 bg-[#F2F0EA] rounded-[1.5rem] flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-[#1A2118]/40" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A2118] mb-2">
                      No orders yet
                    </h3>
                    <p className="text-[#596157] mb-8">
                      You haven&apos;t placed any orders yet.
                    </p>
                    <Link
                      href="/shop"
                      className="inline-block px-8 py-4 bg-[#1A2118] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-colors"
                    >
                      Start Shopping
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2rem] p-6 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-[#1A2118]/5">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40 mb-1">
                              Order #{order.orderNumber}
                            </p>
                            <div className="flex items-center gap-2 text-sm font-medium text-[#596157]">
                              <Calendar className="w-4 h-4" />
                              {new Date(order.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                                order.status === "delivered"
                                  ? "bg-[#3A4D39]/10 text-[#3A4D39]"
                                  : order.status === "cancelled"
                                  ? "bg-red-100 text-red-600"
                                  : "bg-[#BC5633]/10 text-[#BC5633]"
                              }`}
                            >
                              {order.status}
                            </span>
                            <span className="text-xl font-bold text-[#1A2118]">
                              ${order.total.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {order.items.map((item) => (
                            <div
                              key={`${item.id}-${item.size}`}
                              className="flex items-center gap-4"
                            >
                              <div className="w-12 h-12 bg-white rounded-lg overflow-hidden border border-[#1A2118]/5">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                              </div>
                              <div className="flex-1">
                                <p className="font-bold text-[#1A2118] text-sm">
                                  {item.name}
                                </p>
                                <p className="text-xs text-[#596157]">
                                  Qty: {item.quantity}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-[#1A2118]/5 flex justify-end">
                          <Link
                            href={`/order-confirmation?order=${order.orderNumber}`}
                            className="text-xs font-bold uppercase tracking-widest text-[#BC5633] hover:text-[#1A2118] transition-colors flex items-center gap-1"
                          >
                            View Details <ChevronRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
