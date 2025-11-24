"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setSelectedProduct } from "../../redux/features/products/productsSlice";
import { addToCart, CartItem } from "../../redux/features/cart/cartSlice";
import Link from "next/link";
import {
  Star,
  Heart,
  ShoppingCart,
  ChevronLeft,
  Plus,
  Minus,
  Check,
  Share2,
  ShieldCheck,
  Leaf,
  Truck,
  ArrowRight,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { products, selectedProduct } = useSelector(
    (state: RootState) => state.products
  );
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const productId = params.id as string;

  useEffect(() => {
    const product = products.find((p) => p.id === productId);
    dispatch(setSelectedProduct(product || null));
    if (product && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].value);
    }
  }, [productId, products, dispatch]);

  // --- EMPTY STATE ---
  if (!selectedProduct) {
    return (
      <div className="min-h-screen bg-[#F2F0EA] flex items-center justify-center px-6 text-center">
        <div className="max-w-md">
          <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-sm">
            <ShoppingCart className="w-10 h-10 text-[#1A2118]/20" />
          </div>
          <h1 className="text-3xl font-serif font-bold text-[#1A2118] mb-2">
            Product Not Found
          </h1>
          <p className="text-[#596157] mb-8">
            The item you are looking for has been moved or harvested.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A2118] text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAdding(true);
    const cartItem: CartItem = {
      id: selectedProduct.id,
      name: selectedProduct.name,
      price: selectedProduct.price,
      image: selectedProduct.images[0],
      quantity: quantity,
      size: selectedSize,
    };
    dispatch(addToCart(cartItem));

    setTimeout(() => setIsAdding(false), 1500);
  };

  const averageRating =
    selectedProduct.reviews.length > 0
      ? selectedProduct.reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        ) / selectedProduct.reviews.length
      : 0;

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white pb-20 overflow-x-hidden">
      {/* --- BACKGROUND & STYLES --- */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
      `}</style>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A2118] rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-blob" />
      </div>

      {/* --- BREADCRUMB NAV --- */}
      <div className="relative pt-28 pb-6 px-6 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A2118]/40">
          <Link href="/" className="hover:text-[#BC5633] transition-colors">
            Home
          </Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <Link href="/shop" className="hover:text-[#BC5633] transition-colors">
            Shop
          </Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <span className="text-[#1A2118]">{selectedProduct.name}</span>
        </div>
      </div>

      <div className="relative z-10 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
            {/* --- LEFT: IMMERSIVE IMAGE (Single Image Only) --- */}
            <div className="lg:col-span-7 mb-12 lg:mb-0">
              <div className="sticky top-32 space-y-6">
                {/* Main Image Card */}
                <div className="relative aspect-square w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-[#1A2118]/5 border border-white">
                  <img
                    src={selectedProduct.images[0]} // Only showing the first image
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover mix-blend-multiply"
                  />

                  {/* Floating Badges */}
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur text-[#BC5633] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm border border-[#BC5633]/20">
                      Premium
                    </span>
                  </div>

                  {/* Action Buttons on Image */}
                  <div className="absolute top-6 right-6 flex flex-col gap-3">
                    <button
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-sm ${
                        isWishlisted
                          ? "bg-[#BC5633] text-white"
                          : "bg-white/60 text-[#1A2118] hover:bg-white"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isWishlisted ? "fill-current" : ""
                        }`}
                      />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-[#1A2118] hover:bg-white transition-all shadow-sm">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Thumbnails have been removed */}
              </div>
            </div>

            {/* --- RIGHT: PRODUCT DETAILS PANEL --- */}
            <div className="lg:col-span-5">
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[3rem] p-8 lg:p-10 shadow-xl">
                {/* Header Info */}
                <div className="mb-8 border-b border-[#1A2118]/10 pb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-[#BC5633]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(averageRating)
                              ? "fill-current"
                              : "text-[#1A2118]/20"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40 ml-2">
                      {selectedProduct.reviews.length} Reviews
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-serif font-medium text-[#1A2118] mb-4 leading-tight">
                    {selectedProduct.name}
                  </h1>

                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-bold text-[#1A2118]">
                      ${selectedProduct.price}
                    </span>
                    {selectedProduct.originalPrice && (
                      <span className="text-xl text-[#1A2118]/30 line-through decoration-1">
                        ${selectedProduct.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Controls */}
                <div className="space-y-8">
                  {/* Description */}
                  <p className="text-[#596157] leading-relaxed font-light text-lg">
                    {selectedProduct.description}
                  </p>

                  {/* Size Selector */}
                  {selectedProduct.sizes.length > 0 && (
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-2">
                        Select Size
                      </span>
                      <div className="flex flex-wrap gap-3">
                        {selectedProduct.sizes.map((size) => (
                          <button
                            key={size.value}
                            onClick={() => setSelectedSize(size.value)}
                            className={`px-6 py-3 rounded-[1rem] text-sm font-bold transition-all border ${
                              selectedSize === size.value
                                ? "bg-[#1A2118] text-white border-[#1A2118] shadow-lg"
                                : "bg-white text-[#596157] border-transparent hover:border-[#1A2118]/20"
                            }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Row */}
                  <div className="pt-4 space-y-4">
                    <div className="flex gap-4">
                      {/* Quantity Pill */}
                      <div className="flex items-center bg-white rounded-[1.5rem] p-1.5 h-16 shadow-sm border border-[#1A2118]/5 w-40">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-12 h-full flex items-center justify-center rounded-full hover:bg-[#F2F0EA] transition-colors active:scale-90"
                        >
                          <Minus className="w-4 h-4 text-[#1A2118]" />
                        </button>
                        <span className="flex-1 text-center font-bold text-lg text-[#1A2118]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-12 h-full flex items-center justify-center rounded-full hover:bg-[#F2F0EA] transition-colors active:scale-90"
                        >
                          <Plus className="w-4 h-4 text-[#1A2118]" />
                        </button>
                      </div>

                      {/* Add To Cart Button */}
                      <button
                        onClick={handleAddToCart}
                        disabled={!selectedProduct.inStock || isAdding}
                        className={`flex-1 h-16 rounded-[1.5rem] font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 ${
                          isAdding
                            ? "bg-[#3A4D39] text-white"
                            : !selectedProduct.inStock
                            ? "bg-[#F2F0EA] text-[#1A2118]/40 cursor-not-allowed"
                            : "bg-[#BC5633] text-white hover:bg-[#A44626] hover:-translate-y-1"
                        }`}
                      >
                        {isAdding ? (
                          <Check className="w-5 h-5 animate-bounce" />
                        ) : (
                          <ShoppingCart className="w-5 h-5" />
                        )}
                        {isAdding
                          ? "Added"
                          : selectedProduct.inStock
                          ? "Add to Cart"
                          : "Out of Stock"}
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#1A2118]/40 pt-2">
                      <span className="flex items-center gap-2">
                        <Truck className="w-3 h-3" /> Free Shipping
                      </span>
                      <span className="flex items-center gap-2">
                        <ShieldCheck className="w-3 h-3" /> Secure Payment
                      </span>
                      <span className="flex items-center gap-2">
                        <Leaf className="w-3 h-3" /> Organic
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Meta Accordions (Simplified for visuals) */}
                <div className="mt-10 pt-8 border-t border-[#1A2118]/10 space-y-6">
                  {[
                    {
                      title: "Ingredients",
                      content: selectedProduct.ingredients,
                    },
                    { title: "Sourcing", content: selectedProduct.sourcing },
                    {
                      title: "Taste Profile",
                      content: selectedProduct.tasteProfile,
                    },
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <h3 className="text-lg font-serif font-bold text-[#1A2118] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#596157] font-light text-sm leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* --- REVIEWS SECTION --- */}
          {selectedProduct.reviews.length > 0 && (
            <div className="mt-24 max-w-4xl mx-auto">
              <div className="flex items-end justify-between mb-10">
                <h2 className="text-3xl font-serif font-bold text-[#1A2118]">
                  Community Reviews
                </h2>
                <button className="text-sm font-bold uppercase tracking-widest text-[#BC5633] hover:text-[#1A2118] transition-colors">
                  View All
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {selectedProduct.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#F2F0EA] flex items-center justify-center font-bold text-[#1A2118] border border-[#1A2118]/5">
                          {review.userName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-[#1A2118] text-sm">
                            {review.userName}
                          </p>
                          <p className="text-xs text-[#1A2118]/40">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < review.rating
                                ? "fill-[#BC5633] text-[#BC5633]"
                                : "text-[#1A2118]/10"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#596157] text-sm leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
