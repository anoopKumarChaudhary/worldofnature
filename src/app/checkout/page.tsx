"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { clearCart } from "../redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ordersAPI, razorpayAPI } from "../services/api";
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import {
  Check,
  Truck,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Package,
  DollarSign,
  CreditCard,
} from "lucide-react";
import VerificationModal from "../components/VerificationModal";

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
  paymentMethod: "COD" | "RAZORPAY";
}

export default function CheckoutPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { items, total } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.auth);
  const [currentStep, setCurrentStep] = useState(1);
  const { Razorpay } = useRazorpay();
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
    paymentMethod: "RAZORPAY",
  });

  const tax = 0;
  const finalTotal = total + tax;

  const [errors, setErrors] = useState<Partial<ShippingInfo>>({});

  const validateShipping = () => {
    const newErrors: Partial<ShippingInfo> = {};
    if (!shippingInfo.firstName.trim()) newErrors.firstName = "First name is required";
    if (!shippingInfo.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!shippingInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(shippingInfo.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!shippingInfo.phone.trim()) newErrors.phone = "Phone number is required";
    if (!shippingInfo.address.trim()) newErrors.address = "Address is required";
    if (!shippingInfo.city.trim()) newErrors.city = "City is required";
    if (!shippingInfo.state.trim()) newErrors.state = "State is required";
    if (!shippingInfo.zipCode.trim()) newErrors.zipCode = "ZIP code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateShipping()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRazorpayPayment = async () => {
    try {
      const order = await razorpayAPI.createOrder(finalTotal);

      const options: RazorpayOrderOptions = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
        amount: order.amount,
        currency: order.currency,
        name: "World of Nature",
        description: "Transaction",
        order_id: order.id,
        handler: async (response) => {
          try {
            await razorpayAPI.verifyPayment({
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            });
            
            // Create order in backend after successful payment
             const orderData = {
                items: items.map((item) => ({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  quantity: item.quantity,
                  size: item.size,
                })),
                shippingInfo,
                subtotal: total,
                tax: 0,
                shipping: 0,
                paymentMethod: "RAZORPAY",
                paymentId: response.razorpay_payment_id,
              };

              const newOrder = await ordersAPI.createOrder(orderData);
              dispatch(clearCart());
              router.push(`/order-confirmation?order=${newOrder.orderNumber}`);

          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("Payment verification failed");
          }
        },
        prefill: {
          name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
          email: shippingInfo.email,
          contact: shippingInfo.phone,
        },
        theme: {
          color: "#1A2118",
        },
      };

      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Razorpay Error:", error);
      alert("Something went wrong with payment initialization");
    }
  };

  const handlePlaceOrder = async () => {
    if (paymentInfo.paymentMethod === "RAZORPAY") {
      handleRazorpayPayment();
      return;
    }

    try {
      const orderData = {
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: item.quantity,
          size: item.size,
        })),
        shippingInfo,
        subtotal: total,
        tax: 0,
        shipping: 0,
        paymentMethod: "COD",
      };

      const order = await ordersAPI.createOrder(orderData);
      dispatch(clearCart());
      router.push(`/order-confirmation?order=${order.orderNumber}`);
    } catch (error) {
      console.error("Failed to place order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  // --- EMPTY CART STATE ---
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#D9DBD5] text-[#1A2118] flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 text-center p-6 bg-white/60 backdrop-blur-xl rounded-sm border border-[#1A2118]/5 shadow-2xl">
          <div className="w-24 h-24 bg-[#F2F0EA] rounded-sm flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Truck className="w-10 h-10 text-[#BC5633]" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#1A2118] mb-2">
            Your cart is empty
          </h1>
          <p className="text-[#596157] mb-8">
            Time to fill it with nature&apos;s best.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 h-14 px-8 bg-[#1A2118] text-white rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-colors shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-[60vh] lg:min-h-screen bg-[#D9DBD5] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white pb-6 overflow-x-hidden">
        {/* --- VERIFICATION CHECK (Only if logged in) --- */}
        {user && !user.isVerified && <VerificationModal />}
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
        <div className="fixed inset-0 z-0 pointer-events-none bg-[#D9DBD5]" />

        {/* --- HEADER --- */}
        <div className="relative pt-16 lg:pt-32 pb-2 px-2 lg:px-12 z-10">
          <div className="container mx-auto max-w-7xl">
            <h1 className="text-3xl md:text-6xl font-serif font-medium tracking-tight text-[#1A2118] mb-6">
              Checkout
            </h1>
            
            {!user && (
              <div className="mb-6 p-4 bg-[#BC5633]/10 rounded-sm flex items-center justify-between">
                <p className="text-[#1A2118] font-medium text-sm md:text-base">Already have an account?</p>
                <Link href="/login" className="text-[#BC5633] font-bold text-sm md:text-base hover:underline">
                  Login
                </Link>
              </div>
            )}

            {/* Stepper - Optimized text sizes for mobile */}
            <div className="inline-flex bg-white/70 backdrop-blur-xl rounded-sm p-1.5 shadow-lg border border-white/40 mb-6 w-full md:w-auto overflow-x-auto">
              {[
                { id: 1, label: "Shipping", icon: MapPin },
                { id: 2, label: "Payment", icon: DollarSign },
                { id: 3, label: "Review", icon: Check },
              ].map((step, idx) => (
                <div key={step.id} className="flex items-center flex-1 md:flex-none justify-center md:justify-start">
                  <div
                    className={`flex items-center gap-2 px-3 md:px-6 py-3 rounded-sm transition-all duration-500 whitespace-nowrap ${
                      currentStep === step.id
                        ? "bg-[#1A2118] text-white shadow-md"
                        : currentStep > step.id
                        ? "text-[#1A2118] bg-[#BC5633]/10"
                        : "text-[#1A2118]/40"
                    }`}
                  >
                    <step.icon className="w-4 h-4 md:w-5 md:h-5" />
                    {/* Increased font size for stepper */}
                    <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                      {step.label}
                    </span>
                  </div>
                  {idx < 2 && (
                    <div
                      className={`w-full md:w-8 h-0.5 mx-2 ${
                        currentStep > step.id ? "bg-[#BC5633]" : "bg-[#1A2118]/10"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 px-2 lg:px-12">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              {/* --- MAIN FORM AREA --- */}
              <div className="w-full lg:col-span-8">
                {currentStep === 1 && (
                  <div className="bg-white/80 backdrop-blur-xl border border-white rounded-sm p-5 md:p-12 shadow-2xl shadow-[#1A2118]/5">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A2118] mb-6 md:mb-8">
                      Shipping Details
                    </h2>
                    
                    <form onSubmit={handleShippingSubmit} className="space-y-5 md:space-y-6">
                      
                      {/* Name Row: Grid on Mobile (2 cols) */}
                      <div className="grid grid-cols-2 gap-4 md:gap-6">
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
                          error={errors.firstName}
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
                          error={errors.lastName}
                        />
                      </div>

                      {/* Contact Row: Stack on Mobile (Need width for email) */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
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
                          error={errors.email}
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
                          error={errors.phone}
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
                        error={errors.address}
                      />

                      {/* City/State/Zip Grid: Optimized for Mobile Height */}
                      <div className="grid grid-cols-12 gap-4 md:gap-6">
                        {/* City: Full on mobile, 1/3 on desktop */}
                        <div className="col-span-12 md:col-span-4">
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
                            error={errors.city}
                            />
                        </div>
                        
                        {/* State: Half on mobile, 1/3 on desktop */}
                        <div className="col-span-6 md:col-span-4">
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
                            error={errors.state}
                            />
                        </div>

                        {/* Zip: Half on mobile, 1/3 on desktop */}
                        <div className="col-span-6 md:col-span-4">
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
                            error={errors.zipCode}
                            />
                        </div>
                      </div>

                      <div className="flex justify-end pt-6">
                        <button
                          type="submit"
                          className="w-full md:w-auto h-14 px-8 bg-[#1A2118] text-white rounded-sm font-bold text-base uppercase tracking-widest hover:bg-[#3A4D39] transition-all shadow-lg flex items-center justify-center gap-3"
                        >
                          Continue to Payment <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="bg-white/80 backdrop-blur-xl border border-white rounded-sm p-5 md:p-12 shadow-2xl shadow-[#1A2118]/5">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A2118] mb-6 md:mb-8">
                      Payment Method
                    </h2>
                    <div className="space-y-4 md:space-y-6">
                      {/* COD Option */}
                      <div 
                        className={`rounded-sm p-5 md:p-6 border cursor-pointer transition-all ${
                          paymentInfo.paymentMethod === "COD" 
                            ? "bg-[#F2F0EA]/50 border-[#BC5633]" 
                            : "bg-white border-[#1A2118]/10 hover:border-[#BC5633]/50"
                        }`}
                        onClick={() => setPaymentInfo({ paymentMethod: "COD" })}
                      >
                        <div className="flex items-center gap-4 mb-2 md:mb-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            paymentInfo.paymentMethod === "COD" ? "bg-[#BC5633]" : "bg-[#1A2118]/10"
                          }`}>
                            <DollarSign className={`w-6 h-6 ${
                              paymentInfo.paymentMethod === "COD" ? "text-white" : "text-[#1A2118]"
                            }`} />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#1A2118] text-lg md:text-xl">
                              Cash on Delivery
                            </h3>
                            <p className="text-[#596157] text-sm md:text-base leading-tight">
                              Pay when your order arrives at your doorstep
                            </p>
                          </div>
                           {paymentInfo.paymentMethod === "COD" && (
                            <div className="ml-auto">
                              <Check className="w-6 h-6 text-[#BC5633]" />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Razorpay Option */}
                      <div 
                        className={`rounded-sm p-5 md:p-6 border cursor-pointer transition-all ${
                          paymentInfo.paymentMethod === "RAZORPAY" 
                            ? "bg-[#F2F0EA]/50 border-[#BC5633]" 
                            : "bg-white border-[#1A2118]/10 hover:border-[#BC5633]/50"
                        }`}
                        onClick={() => setPaymentInfo({ paymentMethod: "RAZORPAY" })}
                      >
                        <div className="flex items-center gap-4 mb-2 md:mb-4">
                           <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            paymentInfo.paymentMethod === "RAZORPAY" ? "bg-[#BC5633]" : "bg-[#1A2118]/10"
                          }`}>
                            <CreditCard className={`w-6 h-6 ${
                              paymentInfo.paymentMethod === "RAZORPAY" ? "text-white" : "text-[#1A2118]"
                            }`} />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#1A2118] text-lg md:text-xl">
                              Pay Online (Razorpay)
                            </h3>
                            <p className="text-[#596157] text-sm md:text-base leading-tight">
                              Secure payment via Credit/Debit Card, UPI, NetBanking
                            </p>
                          </div>
                          {paymentInfo.paymentMethod === "RAZORPAY" && (
                            <div className="ml-auto">
                              <Check className="w-6 h-6 text-[#BC5633]" />
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between pt-6 gap-3">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="flex-1 md:flex-none h-14 px-6 md:px-8 bg-white border border-[#1A2118]/10 text-[#1A2118] rounded-sm font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#F2F0EA] transition-colors flex items-center justify-center gap-3"
                        >
                          <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                        <button
                          onClick={() => setCurrentStep(3)}
                          className="flex-[2] md:flex-none h-14 px-6 md:px-8 bg-[#1A2118] text-white rounded-sm font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#3A4D39] transition-all shadow-lg flex items-center justify-center gap-3"
                        >
                          Review Order <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    {/* Items Review */}
                    <div className="bg-white/80 backdrop-blur-xl border border-white rounded-sm p-5 md:p-8 shadow-lg">
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A2118] mb-6">
                        Review Items
                      </h2>
                      <div className="space-y-4">
                        {items.map((item) => (
                          <div
                            key={`${item.id}-${item.size}`}
                            className="flex items-center gap-4 p-4 bg-[#F2F0EA]/50 rounded-sm border border-[#1A2118]/5"
                          >
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-sm overflow-hidden shadow-sm flex-shrink-0">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              {/* Increased Font Size */}
                              <h3 className="font-bold text-[#1A2118] text-base md:text-lg truncate">
                                {item.name}
                              </h3>
                              <p className="text-sm text-[#596157]">
                                Qty: {item.quantity}{" "}
                                {item.size && `• ${item.size}`}
                              </p>
                            </div>
                            <p className="font-bold text-[#1A2118] text-base md:text-lg whitespace-nowrap">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Shipping Review */}
                    <div className="bg-white/80 backdrop-blur-xl border border-white rounded-sm p-5 md:p-8 shadow-lg">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1A2118]">
                          Shipping To
                        </h3>
                        <button
                          onClick={() => setCurrentStep(1)}
                          className="text-xs md:text-sm font-bold text-[#BC5633] uppercase tracking-widest py-2"
                        >
                          Edit
                        </button>
                      </div>
                      <div className="text-[#596157] text-base leading-relaxed">
                        <p className="font-bold text-[#1A2118]">
                          {shippingInfo.firstName} {shippingInfo.lastName}
                        </p>
                        <p>{shippingInfo.address}</p>
                        <p>
                          {shippingInfo.city}, {shippingInfo.state}{" "}
                          {shippingInfo.zipCode}
                        </p>
                        <p className="mt-1">{shippingInfo.email}</p>
                      </div>
                    </div>

                    <div className="flex justify-between pt-4 gap-3">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="flex-1 md:flex-none h-14 px-6 md:px-8 bg-white border border-[#1A2118]/10 text-[#1A2118] rounded-sm font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#F2F0EA] transition-colors flex items-center justify-center gap-3"
                      >
                        <ArrowLeft className="w-5 h-5" /> Back
                      </button>
                      <button
                        onClick={handlePlaceOrder}
                        className="flex-[2] md:flex-none h-14 px-6 md:px-8 bg-[#BC5633] text-white rounded-sm font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#A34528] transition-all shadow-lg shadow-[#BC5633]/20 flex items-center justify-center gap-3"
                      >
                        {paymentInfo.paymentMethod === "RAZORPAY" ? "Pay Now" : "Place Order"} <Package className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* --- ORDER SUMMARY SIDEBAR --- */}
              <div className="w-full lg:col-span-4 mt-6 lg:mt-0">
                <div className="sticky top-32 bg-[#1A2118] text-[#F2F0EA] rounded-sm p-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[60px] opacity-40 pointer-events-none" />

                  <h2 className="text-2xl font-serif font-bold mb-6 relative z-10">
                    Order Summary
                  </h2>

                  {/* Increased Summary Font Sizes */}
                  <div className="space-y-4 text-base font-medium text-[#F2F0EA]/70 relative z-10">
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
                      <span>₹{tax.toFixed(2)}</span>
                    </div>

                    <div className="border-t border-white/10 pt-6 mt-6 pb-2">
                      <div className="flex justify-between items-end">
                        <span className="text-[#F2F0EA]/50 uppercase tracking-widest text-sm">
                          Total
                        </span>
                        <span className="text-3xl md:text-4xl font-serif font-bold text-[#F2F0EA]">
                          ₹{finalTotal.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3 justify-center text-[#F2F0EA]/40 text-xs md:text-sm uppercase tracking-widest">
                    <ShieldCheck className="w-4 h-4" /> SSL Secure Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface InputProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}

// --- REUSABLE INPUT COMPONENT (UPDATED FONTS) ---
const Input = ({ label, icon, error, ...props }: InputProps) => (
  <div className="space-y-2">
    {/* Increased Label Size */}
    <label className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-1 md:ml-4">
      {label}
    </label>
    <div className="relative">
      <input
        {...props}
        required
        // UPDATED: text-base prevents iOS zoom. 
        className={`w-full px-5 py-3.5 bg-[#F2F0EA]/50 border ${
          error ? "border-red-500" : "border-transparent"
        } rounded-sm text-base text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 placeholder-[#1A2118]/30`}
      />
      {icon && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2">{icon}</div>
      )}
    </div>
    {error && (
      <p className="text-red-500 text-sm ml-1 md:ml-4 mt-1">{error}</p>
    )}
  </div>
);