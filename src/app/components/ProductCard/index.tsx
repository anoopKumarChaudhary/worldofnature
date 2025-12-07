"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Plus,
  Check,
} from "lucide-react";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/cartSlice";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isOnSale?: boolean;
  isNew?: boolean;
  originalPrice?: number;
  onAddToCart?: (
    product: { id: string; name: string; price: number; image: string },
    quantity: number
  ) => void;
  onToggleWishlist?: (id: string) => void;
  isWishlisted?: boolean;
  viewMode?: "grid" | "list";
}

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`px-2 py-0.5 md:px-3 md:py-1 rounded-none text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] backdrop-blur-sm border ${className}`}
  >
    {children}
  </span>
);

const ProductCard = ({
  id,
  imageUrl,
  title,
  description,
  price,
  // rating,
  // reviewCount,
  isBestseller,
  isOnSale,
  isNew,
  originalPrice,
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false,
  viewMode = "grid",
}: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [quantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    if (onAddToCart) {
      onAddToCart(
        { id, name: title, price, image: imageUrl },
        quantity
      );
    } else {
      dispatch(
        addToCart({
          id,
          name: title,
          price,
          image: imageUrl,
          quantity,
          size: "Regular", 
        })
      );
    }
    setTimeout(() => setIsAdding(false), 1500);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(id);
    }
  };

  // --- LIST VIEW ---
  if (viewMode === "list") {
    return (
      <div className="group flex gap-6 bg-white p-4 border-b border-[#1A2118]/5 hover:bg-[#F9F8F6] transition-all duration-500">
        {/* Image */}
        <div className="relative w-32 md:w-48 aspect-square overflow-hidden bg-[#F9F8F6]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 150px, 200px"
            className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center py-2">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-lg md:text-xl text-[#1A2118] group-hover:text-[#BC5633] transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-[#596157] text-sm mb-4 line-clamp-2 max-w-lg font-light">
            {description}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-baseline gap-3">
              <span className="text-lg font-medium text-[#1A2118]">
                ₹{price}
              </span>
              {isOnSale && originalPrice && (
                <span className="text-xs text-[#1A2118]/40 line-through decoration-1">
                  ₹{originalPrice}
                </span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="text-xs font-bold uppercase tracking-widest text-[#1A2118] hover:text-[#BC5633] transition-colors border-b border-[#1A2118] hover:border-[#BC5633] pb-0.5"
            >
              {isAdding ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- GRID VIEW (Professional Polish) ---
  return (
    <div
      className="group relative flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-[#1A2118]/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >


      {/* --- IMAGE SECTION --- */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F9F8F6]">
        <Link href={`/product/${id}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover mix-blend-multiply transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#1A2118]/0 group-hover:bg-[#1A2118]/2 transition-colors duration-500" />
        </Link>

        {/* Wishlist Button (Minimal) */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-3 right-3 z-20 transition-all duration-300 ${
            isWishlisted
              ? "text-[#BC5633] scale-110"
              : "text-[#1A2118]/40 hover:text-[#1A2118] hover:scale-110"
          }`}
        >
          <Heart
            className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
            strokeWidth={1.5}
          />
        </button>

        {/* --- BADGES (Minimal) --- */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {isBestseller && (
            <Badge className="bg-white/90 text-[#1A2118] border-transparent">
              Best
            </Badge>
          )}
          {isNew && (
            <Badge className="bg-[#1A2118] text-white border-transparent">
              New
            </Badge>
          )}
          {(isOnSale || (originalPrice && originalPrice > price)) && (
            <Badge className="bg-[#BC5633] text-white border-transparent shadow-sm">
              {originalPrice && originalPrice > price
                ? `${Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF`
                : "SALE"}
            </Badge>
          )}
        </div>

        {/* --- DESKTOP HOVER ACTIONS --- */}
        <div
          className={`hidden md:flex absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#1A2118]/5 p-4 transition-all duration-500 transform ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart();
            }}
            className="w-full text-xs font-bold uppercase tracking-[0.2em] text-[#1A2118] hover:text-[#BC5633] transition-colors flex items-center justify-center gap-2"
          >
            {isAdding ? (
              <>
                <Check className="w-4 h-4" /> Added
              </>
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="flex flex-col flex-grow relative z-10 p-4 md:p-5">
        <div className="flex justify-between items-start gap-4 mb-2">
          <Link href={`/product/${id}`} className="block group-hover:opacity-70 transition-opacity">
            <h3 className="font-serif font-semibold text-[#1A2118] text-lg leading-snug tracking-tight">
              {title}
            </h3>
          </Link>
          
          <div className="flex flex-col items-end shrink-0">
            {(isOnSale || (originalPrice && originalPrice > price)) && (
              <span className="text-[10px] text-[#1A2118]/40 line-through decoration-1 font-medium mb-0.5">
                ₹{originalPrice}
              </span>
            )}
            <span className="font-serif font-semibold text-[#1A2118] text-lg tracking-tight">
              ₹{price}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#1A2118]/60 text-sm leading-relaxed mb-4 line-clamp-2 font-normal">
          {description}
        </p>

        {/* Mobile Action (Hidden on Desktop) */}
        <div className="mt-auto md:hidden pt-4 border-t border-[#1A2118]/5">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart();
            }}
            className="w-full h-11 rounded-xl bg-[#1A2118] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            {isAdding ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {isAdding ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;
