
import React, { useEffect, useState } from "react";
import {
  X,
  Star,
  Heart,
  Plus,
  Minus,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

interface QuickViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
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
  };
  onAddToCart: (title: string, quantity: number) => void;
  onToggleWishlist: (id: string) => void;
}

// Badge Component
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
      className={`px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest shadow-sm backdrop-blur-md ${styles[type]}`}
    >
      {label}
    </span>
  );
};

const QuickViewModal: React.FC<QuickViewModalProps> = ({
  isOpen,
  onClose,
  product,
  onAddToCart,
  onToggleWishlist,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const formatPrice = (p: string | number) => {
    if (typeof p === "number") {
      return `$${p.toFixed(2)}`;
    }
    return p;
  };

  const displayPrice = formatPrice(product.price);
  const displayOriginalPrice = product.originalPrice ? formatPrice(product.originalPrice) : undefined;

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset state only if needed
      // setQuantity((prev) => (prev !== 1 ? 1 : prev));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setImageLoaded(false);
      setIsAdding(false);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product.title, quantity);
    setTimeout(() => setIsAdding(false), 1000);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    onToggleWishlist(product.id);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Deep Blur Backdrop */}
      <div
        className="absolute inset-0 bg-[#1A2118]/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container (Squircle) */}
      <div
        className="relative w-full max-w-5xl bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-300 border border-white/20"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-sm bg-white/80 backdrop-blur-md text-[#1A2118] hover:bg-[#1A2118] hover:text-white transition-all shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT: Image Section (Alabaster Background) */}
        <div className="w-full md:w-1/2 bg-[#F2F0EA] relative flex items-center justify-center overflow-hidden">
          {/* Noise Texture */}
          <div
            className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative w-full h-[400px] md:h-full p-4 md:p-12">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.imageUrl}
              alt={product.title}
              className={`w-full h-full object-contain drop-shadow-xl transition-all duration-700 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Badges */}
          <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
            {product.isBestseller && <Badge type="best" label="Bestseller" />}
            {product.isOnSale && <Badge type="sale" label="Sale" />}
            {product.isNew && <Badge type="new" label="New" />}
          </div>
        </div>

        {/* RIGHT: Details Section */}
        <div className="w-full md:w-1/2 flex flex-col bg-white relative">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-12 scrollbar-hide">
            {/* Rating */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 bg-[#F2F0EA] px-3 py-1.5 rounded-sm">
                <Star className="w-3.5 h-3.5 fill-[#BC5633] text-[#BC5633]" />
                <span className="text-xs font-bold text-[#1A2118]">
                  {product.rating || 4.8}
                </span>
                <span className="text-xs text-[#1A2118]/40">
                  • {product.reviewCount || 0} Reviews
                </span>
              </div>

              {/* Mobile Wishlist */}
              <button
                onClick={handleWishlistToggle}
                className="md:hidden text-[#1A2118]/40 hover:text-[#BC5633]"
              >
                <Heart
                  className={`w-6 h-6 ${
                    isWishlisted ? "fill-[#BC5633] text-[#BC5633]" : ""
                  }`}
                />
              </button>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1A2118] mb-4 leading-tight tracking-tight">
              {product.title}
            </h2>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-2xl font-bold text-[#1A2118]">
                {displayPrice}
              </span>
              {displayOriginalPrice && (
                <span className="text-lg text-[#1A2118]/30 line-through decoration-1">
                  {displayOriginalPrice}
                </span>
              )}
            </div>

            <div className="prose prose-neutral">
              <p className="text-[#596157] leading-relaxed text-lg font-light">
                {product.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-sm border border-[#1A2118]/5 bg-[#F2F0EA]/30">
                  <ShieldCheck className="w-5 h-5 text-[#BC5633]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A2118]/60">
                    Certified Organic
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-sm border border-[#1A2118]/5 bg-[#F2F0EA]/30">
                  <Check className="w-5 h-5 text-[#BC5633]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A2118]/60">
                    Ethically Sourced
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Footer Actions */}
          <div className="p-4 md:p-8 border-t border-[#1A2118]/5 bg-white z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
            <div className="flex gap-4">
              {/* Quantity Capsule */}
              <div className="flex items-center bg-[#F2F0EA] rounded-sm p-1.5 h-16 shadow-inner">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-full flex items-center justify-center rounded-sm hover:bg-white text-[#1A2118] transition-all shadow-sm"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-bold text-lg text-[#1A2118]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-full flex items-center justify-center rounded-sm hover:bg-white text-[#1A2118] transition-all shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`flex-1 h-16 rounded-sm font-bold text-sm uppercase tracking-widest transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl ${
                  isAdding
                    ? "bg-[#3A4D39] text-white"
                    : "bg-[#1A2118] text-white hover:bg-[#BC5633]"
                }`}
              >
                {isAdding ? (
                  <>
                    <Check className="w-5 h-5" /> Added
                  </>
                ) : (
                  <>
                    Add to Cart <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Desktop Wishlist */}
              <button
                onClick={handleWishlistToggle}
                className={`hidden md:flex items-center justify-center w-16 h-16 rounded-sm border transition-all duration-300 ${
                  isWishlisted
                    ? "bg-[#BC5633] border-[#BC5633] text-white shadow-lg shadow-[#BC5633]/20"
                    : "border-[#1A2118]/10 text-[#1A2118]/40 hover:border-[#BC5633] hover:text-[#BC5633]"
                }`}
              >
                <Heart
                  className={`w-6 h-6 ${isWishlisted ? "fill-current" : ""}`}
                />
              </button>
            </div>

            <div className="mt-4 text-center">
              <Link
                href={`/product/${product.id}`}
                className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40 hover:text-[#BC5633] transition-colors border-b border-transparent hover:border-[#BC5633]"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
