"use client";

import { useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Link from "next/link";

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") || "Unknown";
  const { items, total } = useSelector((state: RootState) => state.cart);

  const tax = total * 0.08;
  const finalTotal = total + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Success icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <svg
              className="h-8 w-8 text-green-600"
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank you for your order!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your order has been successfully placed. We'll send you shipping
            updates at your email address.
          </p>

          {/* Order number */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Order Confirmation
            </h2>
            <p className="text-gray-600">
              Order Number:{" "}
              <span className="font-mono font-semibold">{orderNumber}</span>
            </p>
          </div>

          {/* Order summary */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Order Summary
            </h3>

            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    {item.size && (
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    )}
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-900">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-900">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="text-gray-900">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* What's next */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              What's Next?
            </h3>
            <ul className="text-blue-800 space-y-1">
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
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Back to Home
            </Link>
          </div>

          {/* Customer support */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need help? Contact our customer support at{" "}
              <a
                href="mailto:support@worldofnature.com"
                className="text-green-600 hover:text-green-700"
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
