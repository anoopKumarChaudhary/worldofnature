"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../redux/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";

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

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Your cart is empty
          </h1>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Add some products to get started!
          </p>
          <Link
            href="/shop"
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--color-brand-primary-text)] bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent)]`}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <div className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
              Shopping Cart
            </h1>
            <button
              onClick={handleClearCart}
              className="text-red-600 hover:text-red-700 text-sm font-medium"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
          {/* Cart items */}
          <div className="lg:col-span-8">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
                >
                  <div className="flex items-center">
                    {/* Product image */}
                    <div className="flex-shrink-0 w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-center object-cover rounded-md"
                      />
                    </div>

                    {/* Product details */}
                    <div className="ml-6 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-[var(--color-text-primary)]">
                            {item.name}
                          </h3>
                          {item.size && (
                            <p className="text-sm text-[var(--color-text-secondary)]">
                              Size: {item.size}
                            </p>
                          )}
                          <p className="text-lg font-semibold text-[var(--color-text-primary)] mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center border border-[var(--color-border)] rounded-md">
                            <button
                              onClick={() =>
                                handleUpdateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border)]"
                            >
                              -
                            </button>
                            <span className="px-4 py-2 text-[var(--color-text-primary)]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleUpdateQuantity(
                                  item.id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border)]"
                            >
                              +
                            </button>
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => handleRemoveItem(item.id, item.size)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-[var(--color-text-secondary)]">
                          Subtotal:
                        </span>
                        <span className="text-lg font-semibold text-[var(--color-text-primary)]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 sticky top-6">
              <h2 className="text-lg font-medium text-[var(--color-text-primary)] mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">
                    Subtotal ({items.length} items)
                  </span>
                  <span className="text-[var(--color-text-primary)]">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">
                    Shipping
                  </span>
                  <span className="text-[var(--color-text-primary)]">Free</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[var(--color-text-secondary)]">
                    Tax
                  </span>
                  <span className="text-[var(--color-text-primary)]">
                    ${(total * 0.08).toFixed(2)}
                  </span>
                </div>

                <div className="border-t border-[var(--color-border)] pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-[var(--color-text-primary)]">
                      Total
                    </span>
                    <span className="text-[var(--color-text-primary)]">
                      ${(total + total * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <Link
                  href="/checkout"
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[var(--color-brand-primary-text)] bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent)]`}
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/shop"
                  className={`w-full flex items-center justify-center px-6 py-3 border border-[var(--color-border)] text-base font-medium rounded-md text-[var(--color-text-primary)] bg-[var(--color-surface)] hover:bg-[var(--color-border)]`}
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
