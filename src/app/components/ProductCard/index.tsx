"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Plus, Check, Star, ShoppingBag } from "lucide-react";
import { useToast } from "../../context/ToastContext";
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

const ProductCard = ({
  id,
  imageUrl,
  title,
  description,
  price,
  rating,
  reviewCount,
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
  const { addToast } = useToast();
  const [quantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  // --- LOGIC ---
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    if (onAddToCart) {
      onAddToCart({ id, name: title, price, image: imageUrl }, quantity);
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
    addToast(`Added ${title}`, "success");
    setTimeout(() => setIsAdding(false), 1500);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist(id);
    }
  };

  // --- LIST VIEW (Kept simple and clean) ---
  if (viewMode === "list") {
    return (
      <div className="group relative flex gap-6 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md transition-all duration-300">
        {/* Image */}
        <div className="relative w-40 aspect-[4/3] bg-gray-50 rounded-lg overflow-hidden shrink-0">
          <Link href={`/product/${id}`}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover opacity-95 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </Link>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between py-1">
          <div>
            <div className="flex justify-between items-start mb-2">
               <Link href={`/product/${id}`}>
                 <h3 className="font-heading text-xl text-[#1A2118] group-hover:text-[#B56B56] transition-colors">
                   {title}
                 </h3>
               </Link>
               <span className="font-medium text-lg text-[#1A2118]">
                 ₹{price}
               </span>
            </div>
            <p className="font-sans text-sm text-gray-500 line-clamp-2 mb-4">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between">
             {/* Rating */}
             <div className="flex items-center gap-1 text-sm text-gray-600">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
                <span className="text-gray-400">({reviewCount})</span>
             </div>

             {/* Action */}
             <button
               onClick={handleAddToCart}
               className="flex items-center gap-2 px-4 py-2 bg-[#1A2118] text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#B56B56] transition-colors"
             >
               {isAdding ? "Added" : "Add to Cart"}
             </button>
          </div>
        </div>
      </div>
    );
  }

  // --- GRID VIEW (Clean & User-Friendly) ---
  return (
    // Changed: Rounded corners, white bg, soft shadow for friendliness
    <div className="group relative flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      
      {/* 1. IMAGE SECTION (Reduced Height) */}
      {/* Changed: aspect-[3/4] -> aspect-[4/3] for shorter height */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
        <Link href={`/product/${id}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            // Changed: Removed mix-blend-multiply for cleaner product view
            className="object-cover opacity-[0.98] group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
        </Link>

        {/* Wishlist (Top Right - Clean Bubble) */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white text-[#1A2118] transition-all scale-95 md:scale-100 opacity-0 group-hover:opacity-100"
        >
          <Heart
            className={`w-5 h-5 ${isWishlisted ? "fill-[#B56B56] text-[#B56B56]" : "text-[#1A2118]"}`}
          />
        </button>

        {/* Tags (Top Left - Clean Pills) */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {isNew && (
            <span className="inline-block px-3 py-1 bg-[#1A2118] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
              New
            </span>
          )}
          {(isOnSale || (originalPrice && originalPrice > price)) && (
            <span className="inline-block px-3 py-1 bg-[#B56B56] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
              Sale
            </span>
          )}
        </div>

        {/* Hover Action: Slide-up Bar (Desktop) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out hidden md:block bg-gradient-to-t from-black/40 to-transparent">
           <button
             onClick={handleAddToCart}
             className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#1A2118] hover:bg-[#1A2118] hover:text-white rounded-xl shadow-lg transition-colors font-bold uppercase tracking-widest text-xs"
           >
              {isAdding ? (
                 <>
                   <Check className="w-4 h-4" /> Added
                 </>
              ) : (
                 <>
                   <ShoppingBag className="w-4 h-4" /> Add to Cart
                 </>
              )}
           </button>
        </div>
      </div>

      {/* 2. CONTENT SECTION (Simplified & Clean) */}
      <div className="flex flex-col flex-grow p-5 relative">
        
        {/* Title */}
        <Link href={`/product/${id}`} className="block mb-1">
          <h3 className="font-heading text-lg text-[#1A2118] leading-tight group-hover:text-[#B56B56] transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2 min-h-[2.5em]">
          {description}
        </p>

        {/* Price & Rating Row */}
        <div className="mt-auto flex items-end justify-between">
           <div className="flex flex-col">
              {isOnSale && originalPrice && (
                <span className="text-xs text-gray-400 line-through mb-0.5">
                  ₹{originalPrice}
                </span>
              )}
              <span className="font-heading text-lg font-bold text-[#1A2118]">
                ₹{price}
              </span>
           </div>
           
           {/* Rating (Clean & integrated) */}
           <div className="flex items-center gap-1 text-sm mb-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium text-[#1A2118]">{rating}</span>
           </div>
        </div>

        {/* Mobile-Only Add Button */}
        <button 
          onClick={handleAddToCart}
          className="md:hidden absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-[#1A2118] text-white rounded-full shadow-md active:scale-95 transition-transform"
        >
           {isAdding ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>
        
      </div>
    </div>
  );
};

export default ProductCard;