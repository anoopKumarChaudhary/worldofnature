import React, { useState } from "react";
import {
  Heart,
  Star,
  ShoppingCart,
  Eye,
  Plus,
  Minus,
  Check,
} from "lucide-react";
import Link from "next/link";
import QuickViewModal from "./QuickViewModal";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  images?: string[];
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
  isBestseller?: boolean;
  isOnSale?: boolean;
  isNew?: boolean;
  onAddToCart: (title: string, quantity?: number) => void;
  onToggleWishlist: (id: string) => void;
  viewMode?: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  images,
  title,
  description,
  price,
  originalPrice,
  rating = 0,
  reviewCount = 0,
  isBestseller = false,
  isOnSale = false,
  isNew = false,
  onAddToCart,
  onToggleWishlist,
  viewMode = "grid",
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showQuickView, setShowQuickView] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onToggleWishlist(id);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    onAddToCart(title, quantity);
    setTimeout(() => setIsAdding(false), 1000); // Simulating feedback
  };

  // --- LIST VIEW COMPONENT ---
  if (viewMode === "list") {
    return (
      <div className="group relative flex flex-col md:flex-row bg-white dark:bg-neutral-900 rounded-none overflow-hidden border border-[#1A2118]/10 dark:border-[#E3E3DC]/10 hover:shadow-xl hover:-translate-y-1 hover:border-[#B56B56]/30 dark:hover:border-[#D68C72]/30 transition-all duration-500 ease-out">
        {/* Image Section */}
        <div className="relative w-full md:w-72 h-64 md:h-auto overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <Link href={`/product/${id}`} className="block w-full h-full">
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isOnSale && (
              <span className="bg-rose-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm">
                SALE
              </span>
            )}
            {isNew && (
              <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm">
                NEW
              </span>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              {/* Categories/Tags could go here */}
              <div className="flex items-center gap-2 mb-2">
                {isBestseller && (
                  <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-sm">
                    Best Seller
                  </span>
                )}
              </div>
              <button
                onClick={handleWishlistToggle}
                className="text-neutral-400 hover:text-rose-500 transition-colors"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isWishlisted ? "fill-rose-500 text-rose-500" : ""
                  }`}
                />
              </button>
            </div>

            <Link href={`/product/${id}`} className="group/title">
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover/title:text-indigo-600 transition-colors">
                {title}
              </h3>
            </Link>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating)
                        ? "fill-current"
                        : "text-neutral-300 dark:text-neutral-600"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-500 font-medium">
                ({reviewCount} reviews)
              </span>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-6 mt-2">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-neutral-900 dark:text-white">
                {price}
              </span>
              {originalPrice && (
                <span className="text-lg text-neutral-400 line-through decoration-2">
                  {originalPrice}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-sm px-1 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-white dark:hover:bg-neutral-700 shadow-sm transition-all text-neutral-600"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center text-sm font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-white dark:hover:bg-neutral-700 shadow-sm transition-all text-neutral-600"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 sm:flex-none bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-2.5 rounded-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all active:scale-95 flex items-center gap-2 justify-center"
              >
                {isAdding ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <ShoppingCart className="w-4 h-4" />
                )}
                {isAdding ? "Added" : "Add to Cart"}
              </button>

              <button
                onClick={() => setShowQuickView(true)}
                className="p-2.5 rounded-sm border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-600"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- GRID VIEW COMPONENT (Updated Aesthetics) ---
  return (
    <>
      <div
        className="group relative w-full bg-white dark:bg-neutral-900 rounded-none overflow-hidden border border-[#1A2118]/10 dark:border-[#E3E3DC]/10 hover:border-[#B56B56]/30 dark:hover:border-[#D68C72]/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
          <Link href={`/product/${id}`} className="block w-full h-full relative">
            <img
              src={imageUrl}
              alt={title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                isHovered && images && images.length > 1 ? "opacity-0" : "opacity-100 scale-100"
              } ${isHovered && (!images || images.length <= 1) ? "scale-110" : ""} ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Hover Image - Show second image if available */}
            {images && images.length > 1 && (
               <img
                src={images.find(img => img !== imageUrl) || images[1]}
                alt={`${title} - view 2`}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  isHovered ? "opacity-100 scale-110" : "opacity-0 scale-100"
                }`}
              />
            )}
          </Link>

          {/* Dark Gradient Overlay on Hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {isBestseller && (
              <span className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-amber-600 dark:text-amber-400 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-sm shadow-sm">
                Bestseller
              </span>
            )}
            {isOnSale && (
              <span className="bg-rose-500 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-sm shadow-sm">
                -20%
              </span>
            )}
            {isNew && (
              <span className="bg-indigo-500 text-white text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-sm shadow-sm">
                New
              </span>
            )}
          </div>

          {/* Wishlist - Glass Effect */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-4 right-4 p-2.5 rounded-sm backdrop-blur-md transition-all duration-300 z-10 shadow-sm ${
              isWishlisted
                ? "bg-rose-500 text-white rotate-[360deg]"
                : "bg-white/80 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-white hover:text-rose-500"
            }`}
          >
            <Heart
              className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`}
            />
          </button>

          {/* Quick Action Bar (Desktop Only) */}
          <div className="hidden lg:block absolute bottom-4 left-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                    e.preventDefault();
                    setShowQuickView(true);
                }}
                className="flex-1 bg-white/95 dark:bg-neutral-800/95 backdrop-blur text-neutral-900 dark:text-white py-3 rounded-sm text-sm font-semibold hover:bg-white shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                Quick View
              </button>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-3 md:p-5">
          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                {rating} <span className="text-neutral-300">•</span>{" "}
                {reviewCount} reviews
              </span>
            </div>
          )}

          <Link href={`/product/${id}`} className="block group/link">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-1 leading-tight group-hover/link:text-indigo-600 dark:group-hover/link:text-indigo-400 transition-colors">
              {title}
            </h3>
          </Link>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1 mb-4">
            {description}
          </p>

          {/* Footer: Price & Add Action */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex flex-col">
              <span className="text-xs text-neutral-400 font-medium uppercase tracking-wide">
                Price
              </span>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-[#1A2118]">₹{price}</span>
                {originalPrice && (
                  <span className="text-sm text-neutral-400 line-through decoration-neutral-400/50">
                    {originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Cart / Quantity Logic */}
            {/* Cart / Quantity Logic */}
            <div className="flex items-center gap-2">
              {/* Mobile: Always expanded. Desktop: Expand on hover. */}
              <div
                className={`flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-sm p-1 transition-all duration-300 w-auto lg:w-10 lg:h-10 lg:hover:w-auto group/btn overflow-hidden`}
              >
                {/* Quantity Controls: Visible on Mobile, Hidden on Desktop until hover */}
                <div className="flex items-center lg:hidden lg:group-hover/btn:flex">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setQuantity(Math.max(1, quantity - 1));
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-sm hover:bg-white dark:hover:bg-neutral-700 text-neutral-600 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-sm font-bold text-neutral-900 dark:text-white">
                      {quantity}
                    </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  className={`w-8 h-8 lg:w-full lg:h-full flex items-center justify-center rounded-sm bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-md shrink-0`}
                >
                  {isAdding ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickViewModal
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
        product={{
          id,
          imageUrl,
          title,
          description,
          price,
          originalPrice,
          rating,
          reviewCount,
          isBestseller,
          isOnSale,
          isNew,
        }}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
      />
    </>
  );
};

export default ProductCard;
