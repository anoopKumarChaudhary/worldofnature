// ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// NEW: Using lucide-react for site-wide icon consistency
import { ShoppingBag } from "lucide-react";

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
    // UPDATED: Applied new theme colors, radius, and shadows
    <div className="bg-brand-linen border border-brand-sage-300 rounded-lg p-6 font-sans text-brand-pine-900 text-left transition-all duration-300 w-full flex flex-col hover:-translate-y-1 hover:shadow-xl shadow-lg">
      {/* Image Container */}
      <div className="bg-secondary-background rounded-lg p-4 mb-4 flex justify-center items-center w-full aspect-square">
        <Link
          href={`/product/${id}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pine-700 rounded-lg"
          aria-label={`View details for ${title}`}
        >
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
        <Link
          href={`/product/${id}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pine-700 rounded-sm"
          aria-label={`View details for ${title}`}
        >
          {/* UPDATED: Typography for title */}
          <h3 className="text-xl font-semibold font-heading text-brand-pine-900 mb-2">
            {title}
          </h3>
        </Link>
        {/* UPDATED: Typography and color for description */}
        <p className="text-sm text-text-secondary font-sans mb-6 leading-relaxed line-clamp-2 min-h-[calc(0.875rem*1.5*2)]">
          {description}
        </p>

        {/* Footer with Price and Cart Button */}
        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col items-start">
            {/* UPDATED: Color for price */}
            <span className="text-xl font-bold text-brand-pine-900">
              {price}
            </span>
            {originalPrice && (
              // UPDATED: Color for original price
              <span className="text-sm text-brand-sage-700 opacity-75 line-through">
                {originalPrice}
              </span>
            )}
          </div>
          {/* UPDATED: Button styles to match new theme */}
          <button
            className="bg-transparent border border-brand-pine-700 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-brand-pine-700 transition-all duration-300 flex-shrink-0 hover:bg-brand-pine-700 hover:text-brand-linen-100 hover:border-brand-pine-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pine-700 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-linen"
            onClick={onAddToCart}
            aria-label={`Add ${title} to cart`}
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
