"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { clearCart } from "../redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Check,
  CreditCard,
  Truck,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Package,
} from "lucide-react";

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface PaymentInfo {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  nameOnCard: string;
}

export default function CheckoutPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { items, total } = useSelector((state: RootState) => state.cart);
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const tax = total * 0.08;
  const finalTotal = total + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePlaceOrder = () => {
    const orderNumber = `ORD-${Date.now()}`;
    dispatch(clearCart());
    router.push(`/order-confirmation?order=${orderNumber}`);
  };

  // --- EMPTY CART STATE ---
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 text-center p-10 bg-white/60 backdrop-blur-xl rounded-[3rem] border border-[#1A2118]/5 shadow-2xl">
          <div className="w-24 h-24 bg-[#F2F0EA] rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Truck className="w-10 h-10 text-[#BC5633]" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#1A2118] mb-2">
            Your cart is empty
          </h1>
          <p className="text-[#596157] mb-8">
            Time to fill it with nature's best.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 h-14 px-8 bg-[#1A2118] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-colors shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white pb-20 overflow-x-hidden">
      {/* --- BACKGROUND LAYERS --- */}
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

      {/* --- HEADER --- */}
      <div className="relative pt-32 pb-8 px-6 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-serif font-medium tracking-tight text-[#1A2118] mb-8">
            Checkout
          </h1>

          {/* Stepper */}
          <div className="inline-flex bg-white/70 backdrop-blur-xl rounded-full p-1.5 shadow-lg border border-white/40 mb-12">
            {[
              { id: 1, label: "Shipping", icon: MapPin },
              { id: 2, label: "Payment", icon: CreditCard },
              { id: 3, label: "Review", icon: Check },
            ].map((step, idx) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 ${
                    currentStep === step.id
                      ? "bg-[#1A2118] text-white shadow-md"
                      : currentStep > step.id
                      ? "text-[#1A2118] bg-[#BC5633]/10"
                      : "text-[#1A2118]/40"
                  }`}
                >
                  <step.icon className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">
                    {step.label}
                  </span>
                </div>
                {idx < 2 && (
                  <div
                    className={`w-8 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-[#BC5633]" : "bg-[#1A2118]/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
            {/* --- MAIN FORM AREA --- */}
            <div className="lg:col-span-8">
              {currentStep === 1 && (
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-[#1A2118]/5">
                  <h2 className="text-2xl font-serif font-bold text-[#1A2118] mb-8">
                    Shipping Details
                  </h2>
                  <form onSubmit={handleShippingSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="First Name"
                        placeholder="e.g. Jane"
                        value={shippingInfo.firstName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setShippingInfo({
                            ...shippingInfo,
                            firstName: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="Last Name"
                        placeholder="e.g. Doe"
                        value={shippingInfo.lastName}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setShippingInfo({
                            ...shippingInfo,
                            lastName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Email Address"
                        placeholder="jane@example.com"
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setShippingInfo({
                            ...shippingInfo,
                            email: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="Phone Number"
                        placeholder="+1 (555) 000-0000"
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setShippingInfo({
                            ...shippingInfo,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                    <Input
                      label="Street Address"
                      placeholder="123 Organic Way, Apt 4B"
                      value={shippingInfo.address}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setShippingInfo({
                          ...shippingInfo,
                          address: e.target.value,
                        })
                      }
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Input
                        label="City"
                        placeholder="Nature Valley"
                        value={shippingInfo.city}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setShippingInfo({
                            ...shippingInfo,
                            city: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="State"
                        placeholder="CA"
                        value={shippingInfo.state}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setShippingInfo({
                            ...shippingInfo,
                            state: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="ZIP Code"
                        placeholder="90210"
                        value={shippingInfo.zipCode}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setShippingInfo({
                            ...shippingInfo,
                            zipCode: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex justify-end pt-6">
                      <button
                        type="submit"
                        className="btn-primary h-14 px-8 bg-[#1A2118] text-white rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#3A4D39] transition-all shadow-lg flex items-center gap-3"
                      >
                        Continue to Payment <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {currentStep === 2 && (
                <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-[#1A2118]/5">
                  <h2 className="text-2xl font-serif font-bold text-[#1A2118] mb-8">
                    Payment Method
                  </h2>
                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    <Input
                      label="Name on Card"
                      placeholder="JANE DOE"
                      value={paymentInfo.nameOnCard}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          nameOnCard: e.target.value,
                        })
                      }
                    />
                    <Input
                      label="Card Number"
                      placeholder="0000 0000 0000 0000"
                      value={paymentInfo.cardNumber}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          cardNumber: e.target.value,
                        })
                      }
                      icon={
                        <CreditCard className="w-5 h-5 text-[#1A2118]/40" />
                      }
                    />
                    <div className="grid grid-cols-2 gap-6">
                      <Input
                        label="Expiry Date"
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            expiryDate: e.target.value,
                          })
                        }
                      />
                      <Input
                        label="CVV"
                        placeholder="123"
                        type="password"
                        value={paymentInfo.cvv}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cvv: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="flex justify-between pt-6">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="h-14 px-8 bg-white border border-[#1A2118]/10 text-[#1A2118] rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#F2F0EA] transition-colors flex items-center gap-3"
                      >
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button
                        type="submit"
                        className="h-14 px-8 bg-[#1A2118] text-white rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#3A4D39] transition-all shadow-lg flex items-center gap-3"
                      >
                        Review Order <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  {/* Items Review */}
                  <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-8 shadow-lg">
                    <h2 className="text-2xl font-serif font-bold text-[#1A2118] mb-6">
                      Review Items
                    </h2>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <div
                          key={`${item.id}-${item.size}`}
                          className="flex items-center gap-4 p-4 bg-[#F2F0EA]/50 rounded-[1.5rem] border border-[#1A2118]/5"
                        >
                          <div className="w-16 h-16 bg-white rounded-[1rem] overflow-hidden shadow-sm">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-[#1A2118]">
                              {item.name}
                            </h3>
                            <p className="text-sm text-[#596157]">
                              Qty: {item.quantity}{" "}
                              {item.size && `• ${item.size}`}
                            </p>
                          </div>
                          <p className="font-bold text-[#1A2118]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shipping Review */}
                  <div className="bg-white/80 backdrop-blur-xl border border-white rounded-[3rem] p-8 shadow-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-serif font-bold text-[#1A2118]">
                        Shipping To
                      </h3>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="text-xs font-bold text-[#BC5633] uppercase tracking-widest"
                      >
                        Edit
                      </button>
                    </div>
                    <div className="text-[#596157] leading-relaxed">
                      <p className="font-bold text-[#1A2118]">
                        {shippingInfo.firstName} {shippingInfo.lastName}
                      </p>
                      <p>{shippingInfo.address}</p>
                      <p>
                        {shippingInfo.city}, {shippingInfo.state}{" "}
                        {shippingInfo.zipCode}
                      </p>
                      <p className="mt-2">{shippingInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="h-14 px-8 bg-white border border-[#1A2118]/10 text-[#1A2118] rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#F2F0EA] transition-colors flex items-center gap-3"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="h-14 px-8 bg-[#BC5633] text-white rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#A34528] transition-all shadow-lg shadow-[#BC5633]/20 flex items-center gap-3"
                    >
                      Place Order <Package className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* --- ORDER SUMMARY SIDEBAR --- */}
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <div className="sticky top-32 bg-[#1A2118] text-[#F2F0EA] rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[60px] opacity-40 pointer-events-none" />

                <h2 className="text-2xl font-serif font-bold mb-8 relative z-10">
                  Order Summary
                </h2>

                <div className="space-y-4 text-sm font-medium text-[#F2F0EA]/70 relative z-10">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-[#F2F0EA]">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-[#BC5633]">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (Est.)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-white/10 pt-6 mt-6 pb-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[#F2F0EA]/50 uppercase tracking-widest text-xs">
                        Total
                      </span>
                      <span className="text-3xl font-serif font-bold text-[#F2F0EA]">
                        ${finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3 justify-center text-[#F2F0EA]/40 text-xs uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" /> SSL Secure Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface InputProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

// --- REUSABLE INPUT COMPONENT ---
const Input = ({ label, icon, ...props }: InputProps) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
      {label}
    </label>
    <div className="relative">
      <input
        {...props}
        required
        className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 placeholder-[#1A2118]/30"
      />
      {icon && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2">{icon}</div>
      )}
    </div>
  </div>
);
