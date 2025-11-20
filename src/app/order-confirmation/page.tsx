"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Link from "next/link";

function OrderConfirmationContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") || "Unknown";
  const { items, total } = useSelector((state: RootState) => state.cart);

  const tax = total * 0.08;
  const finalTotal = total + tax;

  return (
    <div className="min-h-screen bg-bg-order-confirmation">
      <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="text-center">
          {/* Success icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-brand-success/20 mb-6">
            <svg
              className="h-8 w-8 text-brand-success"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Thank you message */}
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Thank you for your order!
          </h1>
          <p className="text-lg text-text-secondary mb-8">
            Your order has been successfully placed. We'll send you shipping
            updates at your email address.
          </p>

          {/* Order number */}
          <div className="bg-surface border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Order Confirmation
            </h2>
            <p className="text-text-secondary">
              Order Number:{" "}
              <span className="font-mono font-semibold">{orderNumber}</span>
            </p>
          </div>

          {/* Order summary */}
          <div className="bg-surface border border-border rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-foreground">{item.name}</p>
                    {item.size && (
                      <p className="text-sm text-muted">Size: {item.size}</p>
                    )}
                    <p className="text-sm text-muted">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-foreground">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-text-secondary">Subtotal</span>
                <span className="text-foreground">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Shipping</span>
                <span className="text-foreground">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Tax</span>
                <span className="text-foreground">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-border pt-2">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* What's next */}
          <div className="bg-subtle-bg border border-border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              What's Next?
            </h3>
            <ul className="text-text-primary space-y-1">
              <li>• You'll receive an email confirmation shortly</li>
              <li>
                • We'll send you tracking information once your order ships
              </li>
              <li>• Processing typically takes 1-2 business days</li>
              <li>• Delivery usually takes 3-5 business days</li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-text bg-primary-bg hover:bg-cta-hover"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-text-primary bg-surface hover:bg-card-bg"
            >
              Back to Home
            </Link>
          </div>

          {/* Customer support */}
          <div className="mt-8 text-center">
            <p className="text-text-secondary">
              Need help? Contact our customer support at{" "}
              <a
                href="mailto:support@worldofnature.com"
                className="text-primary-bg hover:text-cta-hover"
              >
                support@worldofnature.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderConfirmationContent />
    </Suspense>
  );
}
