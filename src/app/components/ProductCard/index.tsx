// ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// You can place this icon component in a separate file or keep it here
const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

// Define the props interface for type-safety
interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  title,
  description,
  price,
  originalPrice,
  onAddToCart,
}) => {
  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 font-sans text-[var(--color-text-primary)] text-left transition-all duration-300 w-full flex flex-col hover:-translate-y-1 hover:shadow-2xl">
      {/* Image Container */}
      <div className="bg-[var(--color-background)] rounded-2xl p-4 mb-4 flex justify-center items-center w-full aspect-square">
        <Link href={`/product/${id}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
        </Link>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow">
        <Link href={`/product/${id}`}>
          <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-2">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed line-clamp-2 min-h-[calc(0.875rem*1.5*2)]">
          {description}
        </p>

        {/* Footer with Price and Cart Button */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold text-[var(--color-text-primary)]">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-[var(--color-text-secondary)] line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <button
            className="bg-transparent border border-[var(--color-brand-primary)] rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-[var(--color-brand-primary)] transition-all duration-300 flex-shrink-0 hover:bg-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary-text)]"
            onClick={onAddToCart}
            aria-label="Add to cart"
          >
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
