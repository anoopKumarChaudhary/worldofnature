import React, { useState } from "react";
import {
  Heart,
  Star,
  ShoppingCart,
  Eye,
  Plus,
  Minus,
  Check,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import QuickViewModal from "./QuickViewModal";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string | number;
  originalPrice?: string | number;
  rating?: number;
  reviewCount?: number;
  isBestseller?: boolean;
  isOnSale?: boolean;
  isNew?: boolean;
  onAddToCart: (
    product: {
      id: string;
      name: string;
      price: number;
      image: string;
    },
    quantity: number
  ) => void;
  onToggleWishlist: (id: string) => void;
  viewMode?: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
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
  const [quantity, setQuantity] = useState(1);
  const [showQuickView, setShowQuickView] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (p: string | number) => {
    if (typeof p === "number") {
      return `$${p.toFixed(2)}`;
    }
    return p;
  };

  const getPriceValue = (p: string | number) => {
    if (typeof p === "number") return p;
    return parseFloat(p.replace(/[^0-9.]/g, ""));
  };

  const displayPrice = formatPrice(price);
  const displayOriginalPrice = originalPrice ? formatPrice(originalPrice) : undefined;

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

    const priceNum = getPriceValue(price);
    onAddToCart(
      { id, name: title, price: priceNum, image: imageUrl },
      quantity
    );

    setTimeout(() => setIsAdding(false), 1500);
  };

  const handleQuantityChange = (e: React.MouseEvent, change: number) => {
    e.preventDefault();
    e.stopPropagation();
    setQuantity((prev) => Math.max(1, prev + change));
  };

  // --- ONE UI 8 BADGE COMPONENT ---
  const Badge = ({
    type,
    label,
  }: {
    type: "sale" | "new" | "best";
    label: string;
  }) => {
    const styles = {
      sale: "bg-[#BC5633] text-white",
      new: "bg-[#1A2118] text-white",
      best: "bg-white/90 text-[#BC5633] border border-[#BC5633]/20",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm backdrop-blur-md ${styles[type]}`}
      >
        {label}
      </span>
    );
  };

  // --- LIST VIEW (Horizontal Card) ---
  if (viewMode === "list") {
    return (
      // Added One UI style border: border-[#1A2118]/10
      <div className="group relative flex flex-col md:flex-row bg-white/80 backdrop-blur-xl border border-[#1A2118]/10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1">
        {/* Image Section */}
        <div className="relative w-full md:w-80 h-64 md:h-auto overflow-hidden">
          <Link href={`/product/${id}`} className="block w-full h-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1A2118]/5 group-hover:bg-transparent transition-colors duration-500" />
          </Link>

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isOnSale && <Badge type="sale" label="Sale" />}
            {isNew && <Badge type="new" label="New" />}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              {isBestseller && <Badge type="best" label="Bestseller" />}
              <button
                onClick={handleWishlistToggle}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isWishlisted
                    ? "bg-[#F2F0EA] text-[#BC5633]"
                    : "bg-transparent text-[#1A2118]/40 hover:bg-[#F2F0EA] hover:text-[#BC5633]"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
                />
              </button>
            </div>

            <Link href={`/product/${id}`}>
              <h3 className="text-2xl font-serif font-bold text-[#1A2118] mb-2 group-hover:text-[#BC5633] transition-colors">
                {title}
              </h3>
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(rating)
                        ? "fill-[#BC5633] text-[#BC5633]"
                        : "text-[#1A2118]/20"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-[#1A2118]/50 uppercase tracking-wide">
                {reviewCount} Reviews
              </span>
            </div>

            <p className="text-[#596157] leading-relaxed mb-6 line-clamp-2">
              {description}
            </p>
          </div>

          {/* Action Footer */}
          <div className="flex items-end justify-between border-t border-[#1A2118]/10 pt-6">
            <div>
              <p className="text-xs font-bold uppercase text-[#1A2118]/40 mb-1 tracking-widest">
                Price
              </p>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-serif font-bold text-[#1A2118]">
                  {displayPrice}
                </span>
                {displayOriginalPrice && (
                  <span className="text-lg text-[#1A2118]/40 line-through decoration-1">
                    {displayOriginalPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Simple Quantity */}
              <div className="flex items-center bg-[#F2F0EA] rounded-[1.2rem] p-1">
                <button
                  onClick={(e) => handleQuantityChange(e, -1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white shadow-sm text-[#1A2118] transition-all"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center font-bold text-sm">
                  {quantity}
                </span>
                <button
                  onClick={(e) => handleQuantityChange(e, 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white shadow-sm text-[#1A2118] transition-all"
                >
                  <Plus size={14} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`h-12 px-8 rounded-[1.5rem] font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg ${
                  isAdding
                    ? "bg-[#2F382A] text-white w-12 px-0 justify-center"
                    : "bg-[#1A2118] text-white hover:bg-[#BC5633] hover:shadow-[#BC5633]/30"
                }`}
              >
                {isAdding ? (
                  <Check size={20} />
                ) : (
                  <>
                    Add to Cart <ArrowRight size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- GRID VIEW (One UI Card) ---
  return (
    <>
      <div
        // Updated border to be visible (10% opacity dark green) to match One UI 8 lines
        className="group relative w-full bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-2 border border-[#1A2118]/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#F2F0EA]">
          <Link href={`/product/${id}`}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2118]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          </Link>

          {/* Top Actions */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
            <div className="flex flex-col gap-2">
              {isBestseller && <Badge type="best" label="Best" />}
              {isOnSale && <Badge type="sale" label="Sale" />}
            </div>
            <button
              onClick={handleWishlistToggle}
              className={`w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 shadow-sm ${
                isWishlisted
                  ? "bg-white text-[#BC5633] rotate-[360deg]"
                  : "bg-white/30 text-white hover:bg-white hover:text-[#BC5633]"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`}
              />
            </button>
          </div>

          {/* Floating Interactive Island (Bottom of Image) */}
          <div
            className={`absolute bottom-4 left-4 right-4 transition-all duration-500 transform ${
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-[1.8rem] p-1.5 flex items-center justify-between shadow-lg border border-white/50">
              {/* Quantity Stepper */}
              <div className="flex items-center bg-[#F2F0EA] rounded-[1.2rem] h-10">
                <button
                  onClick={(e) => handleQuantityChange(e, -1)}
                  className="w-10 h-full flex items-center justify-center hover:bg-white rounded-l-[1.2rem] transition-colors active:scale-90"
                >
                  <Minus size={14} />
                </button>
                <span className="w-6 text-center text-sm font-bold">
                  {quantity}
                </span>
                <button
                  onClick={(e) => handleQuantityChange(e, 1)}
                  className="w-10 h-full flex items-center justify-center hover:bg-white rounded-r-[1.2rem] transition-colors active:scale-90"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Quick Add Button */}
              <button
                onClick={handleAddToCart}
                className={`h-10 rounded-[1.2rem] flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  isAdding
                    ? "bg-[#2F382A] text-white w-10"
                    : "bg-[#1A2118] text-white flex-1 ml-2 hover:bg-[#BC5633]"
                }`}
              >
                {isAdding ? (
                  <Check size={16} />
                ) : (
                  <>
                    <span>Add</span>
                    <ShoppingCart size={14} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 pt-5 relative bg-white">
          {/* Quick View (Floating between image and text) */}
          <button
            onClick={() => setShowQuickView(true)}
            className="absolute -top-5 right-6 w-10 h-10 bg-[#BC5633] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#BC5633]/30 hover:scale-110 transition-transform z-20 group/btn"
          >
            <Eye
              size={18}
              className="group-hover/btn:scale-110 transition-transform"
            />
          </button>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#BC5633] text-[#BC5633]" />
              <span className="text-xs font-bold text-[#1A2118]/60">
                {rating}
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A2118]/40">
              {reviewCount} Reviews
            </span>
          </div>

          <Link href={`/product/${id}`} className="block group/title">
            <h3 className="text-xl font-serif font-bold text-[#1A2118] leading-tight mb-1 group-hover/title:text-[#BC5633] transition-colors line-clamp-1">
              {title}
            </h3>
          </Link>

          <div className="flex items-end justify-between mt-3">
            <div>
              <p className="text-xs text-[#596157] line-clamp-1 mb-1 max-w-[150px]">
                {description}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-[#1A2118]">
                  {displayPrice}
                </span>
                {displayOriginalPrice && (
                  <span className="text-xs text-[#1A2118]/40 line-through">
                    {displayOriginalPrice}
                  </span>
                )}
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
        onAddToCart={(title, qty) => {
          const priceNum = getPriceValue(price);
          onAddToCart(
            { id, name: title, price: priceNum, image: imageUrl },
            qty
          );
        }}
        onToggleWishlist={onToggleWishlist}
      />
    </>
  );
};

export default ProductCard;
