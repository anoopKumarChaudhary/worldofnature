"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { clearCart } from "../redux/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
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
    country: "United States",
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  const tax = total * 0.08;
  const finalTotal = total + tax;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const handlePlaceOrder = () => {
    // Simulate order placement
    const orderNumber = `ORD-${Date.now()}`;
    dispatch(clearCart());
    router.push(`/order-confirmation?order=${orderNumber}`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-checkout flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">
            Your cart is empty
          </h1>
          <Link href="/shop" className="text-primary-bg hover:text-accent-bg">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-checkout">
      {/* Header */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-text-primary">
            Checkout
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div
              className={`flex items-center ${
                currentStep >= 1 ? "text-primary-bg" : "text-text-secondary"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 1
                    ? "border-primary-bg bg-primary-bg text-primary-text"
                    : "border-border"
                }`}
              >
                1
              </div>
              <span className="ml-2 text-sm font-medium">Shipping</span>
            </div>
            <div
              className={`w-12 h-0.5 mx-4 ${
                currentStep >= 2 ? "bg-primary-bg" : "bg-border"
              }`}
            ></div>
            <div
              className={`flex items-center ${
                currentStep >= 2 ? "text-primary-bg" : "text-text-secondary"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 2
                    ? "border-primary-bg bg-primary-bg text-primary-text"
                    : "border-border"
                }`}
              >
                2
              </div>
              <span className="ml-2 text-sm font-medium">Payment</span>
            </div>
            <div
              className={`w-12 h-0.5 mx-4 ${
                currentStep >= 3 ? "bg-primary-bg" : "bg-border"
              }`}
            ></div>
            <div
              className={`flex items-center ${
                currentStep >= 3 ? "text-primary-bg" : "text-text-secondary"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                  currentStep >= 3
                    ? "border-primary-bg bg-primary-bg text-primary-text"
                    : "border-border"
                }`}
              >
                3
              </div>
              <span className="ml-2 text-sm font-medium">Review</span>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          {/* Main content */}
          <div className="lg:col-span-8">
            {currentStep === 1 && (
              <div className="bg-surface border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  Shipping Information
                </h2>
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-text-primary"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            firstName: e.target.value,
                          })
                        }
                        className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-text-primary"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            lastName: e.target.value,
                          })
                        }
                        className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={shippingInfo.email}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          email: e.target.value,
                        })
                      }
                      className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-primary"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={shippingInfo.phone}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          phone: e.target.value,
                        })
                      }
                      className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-text-primary"
                    >
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      required
                      value={shippingInfo.address}
                      onChange={(e) =>
                        setShippingInfo({
                          ...shippingInfo,
                          address: e.target.value,
                        })
                      }
                      className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-text-primary"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        required
                        value={shippingInfo.city}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            city: e.target.value,
                          })
                        }
                        className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-text-primary"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        required
                        value={shippingInfo.state}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            state: e.target.value,
                          })
                        }
                        className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block text-sm font-medium text-text-primary"
                      >
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        required
                        value={shippingInfo.zipCode}
                        onChange={(e) =>
                          setShippingInfo({
                            ...shippingInfo,
                            zipCode: e.target.value,
                          })
                        }
                        className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary-bg text-primary-text rounded-md hover:bg-accent-bg"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-surface border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-text-primary mb-6">
                  Payment Information
                </h2>
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="nameOnCard"
                      className="block text-sm font-medium text-text-primary"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="nameOnCard"
                      required
                      value={paymentInfo.nameOnCard}
                      onChange={(e) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          nameOnCard: e.target.value,
                        })
                      }
                      className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cardNumber"
                      className="block text-sm font-medium text-text-primary"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      required
                      placeholder="1234 5678 9012 3456"
                      value={paymentInfo.cardNumber}
                      onChange={(e) =>
                        setPaymentInfo({
                          ...paymentInfo,
                          cardNumber: e.target.value,
                        })
                      }
                      className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="expiryDate"
                        className="block text-sm font-medium text-text-primary"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        id="expiryDate"
                        required
                        placeholder="MM/YY"
                        value={paymentInfo.expiryDate}
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            expiryDate: e.target.value,
                          })
                        }
                        className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cvv"
                        className="block text-sm font-medium text-text-primary"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        required
                        placeholder="123"
                        value={paymentInfo.cvv}
                        onChange={(e) =>
                          setPaymentInfo({
                            ...paymentInfo,
                            cvv: e.target.value,
                          })
                        }
                        className="mt-1 block w-full border-border rounded-md shadow-sm focus:ring-primary-bg focus:border-primary-bg"
                      />
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="billingSame"
                      type="checkbox"
                      checked={billingSameAsShipping}
                      onChange={(e) =>
                        setBillingSameAsShipping(e.target.checked)
                      }
                      className="h-4 w-4 text-primary-bg focus:ring-primary-bg border-border rounded"
                    />
                    <label
                      htmlFor="billingSame"
                      className="ml-2 text-sm text-text-primary"
                    >
                      Billing address is the same as shipping address
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-3 border border-border text-text-primary rounded-md hover:bg-border"
                    >
                      Back to Shipping
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary-bg text-primary-text rounded-md hover:bg-accent-bg"
                    >
                      Review Order
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                {/* Order review */}
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-text-primary mb-6">
                    Review Your Order
                  </h2>

                  <div className="space-y-4">
                    {items.map((item) => (
                      <div
                        key={`${item.id}-${item.size}`}
                        className="flex items-center space-x-4"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="rounded-md"
                        />
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-text-primary">
                            {item.name}
                          </h3>
                          {item.size && (
                            <p className="text-sm text-text-secondary">
                              Size: {item.size}
                            </p>
                          )}
                          <p className="text-sm text-text-secondary">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping info */}
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-text-primary mb-4">
                    Shipping Address
                  </h3>
                  <p className="text-text-primary">
                    {shippingInfo.firstName} {shippingInfo.lastName}
                    <br />
                    {shippingInfo.address}
                    <br />
                    {shippingInfo.city}, {shippingInfo.state}{" "}
                    {shippingInfo.zipCode}
                    <br />
                    {shippingInfo.email}
                    <br />
                    {shippingInfo.phone}
                  </p>
                </div>

                {/* Payment info */}
                <div className="bg-surface border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-text-primary mb-4">
                    Payment Method
                  </h3>
                  <p className="text-text-primary">
                    **** **** **** {paymentInfo.cardNumber.slice(-4)}
                    <br />
                    Expires {paymentInfo.expiryDate}
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 border border-border text-text-primary rounded-md hover:bg-border"
                  >
                    Back to Payment
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="px-6 py-3 bg-primary-bg text-primary-text rounded-md hover:bg-accent-bg"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-surface border border-border rounded-lg p-6 sticky top-6">
              <h2 className="text-lg font-medium text-text-primary mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-text-secondary">
                      {item.name} {item.size && `(${item.size})`} ×{" "}
                      {item.quantity}
                    </span>
                    <span className="text-text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="text-text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Shipping</span>
                    <span className="text-text-primary">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Tax</span>
                    <span className="text-text-primary">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-text-primary">Total</span>
                    <span className="text-text-primary">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Security badges */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🔒</div>
                    <p className="text-xs text-text-secondary">
                      Secured by Stripe
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">💳</div>
                    <p className="text-xs text-text-secondary">SSL Encrypted</p>
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
