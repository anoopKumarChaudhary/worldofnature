"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setSelectedProduct } from "../../redux/features/products/productsSlice";
import { addToCart, CartItem } from "../../redux/features/cart/cartSlice";
import { wishlistAPI, Product, Review } from "../../services/api";
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
} from "lucide-react";
import Image from "next/image";

interface ProductClientProps {
  product: Product;
  reviews: Review[];
}

export default function ProductClient({ product, reviews }: ProductClientProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct } = useSelector(
    (state: RootState) => state.products
  );
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  

  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0].value : ""
  );
  const [activeImage, setActiveImage] = useState<string>(product.imageUrl);
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  
  // Review State
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) return;
    
    setIsSubmitting(true);
    try {
      // Import reviewsAPI dynamically or use the imported one if available
      const { reviewsAPI } = await import("../../services/api");
      await reviewsAPI.create({
        productId: product._id,
        rating,
        comment,
      });
      
      // Reset form
      setRating(0);
      setComment("");
      alert("Review submitted successfully!");
      
      // Ideally trigger a refresh of reviews here
      window.location.reload(); 
    } catch (error) {
      console.error("Failed to submit review:", error);
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Initialize Redux state with server data
  useEffect(() => {
    dispatch(setSelectedProduct(product));
    setActiveImage(product.imageUrl);
    if (product.sizes && product.sizes.length > 0) {

      setSelectedSize(() => {
        // Only update if not set or different (though usually we want to reset on product change)
        // Since we initialized it, this might be redundant unless product prop changes
        return product.sizes![0].value;
      });
    }
  }, [product, dispatch]);

  // Check wishlist status
  useEffect(() => {
    if (isAuthenticated && user?.id) {
      wishlistAPI.getWishlist(user.id).then((data) => {
        const wishlistItems = data.products || [];
        const isInWishlist = wishlistItems.some((item: { _id: string }) => item._id === product._id);
        setIsWishlisted(isInWishlist);
      });
    }
  }, [isAuthenticated, user, product._id]);

  const handleWishlistToggle = async () => {
    if (!isAuthenticated || !user?.id) {
      alert("Please login to add to wishlist");
      return;
    }

    try {
      if (isWishlisted) {
        await wishlistAPI.removeFromWishlist(user.id, product._id);
        setIsWishlisted(false);
      } else {
        await wishlistAPI.addToWishlist(user.id, product._id);
        setIsWishlisted(true);
      }
    } catch (error: unknown) {
      console.error("Failed to toggle wishlist:", error);
    }
  };

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    
    setIsAdding(true);
    const cartItem: CartItem = {
      id: selectedProduct._id,
      name: selectedProduct.title,
      price: selectedProduct.price,
      image: selectedProduct.imageUrl,
      quantity: quantity,
      size: selectedSize,
    };
    dispatch(addToCart(cartItem));

    setTimeout(() => setIsAdding(false), 1500);
  };

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  // Use selectedProduct from Redux if available (for consistency), otherwise fallback to props
  const currentProduct = selectedProduct || product;

  console.log("ProductClient Render:", { 
    isAuthenticated, 
    user, 
    reviewsCount: reviews.length,
    productId: currentProduct._id 
  });

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white pb-32 lg:pb-20 overflow-x-hidden">
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
      <div className="relative pt-20 pb-6 px-4 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1A2118]/40">
          <Link href="/" className="hover:text-[#BC5633] transition-colors">
            Home
          </Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <Link href="/shop" className="hover:text-[#BC5633] transition-colors">
            Shop
          </Link>
          <ChevronLeft className="w-3 h-3 rotate-180" />
          <span className="text-[#1A2118] truncate max-w-[150px] sm:max-w-none">{currentProduct.title}</span>
        </div>
      </div>

      <div className="relative z-10 px-4 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
            {/* --- LEFT: IMMERSIVE IMAGE --- */}
            <div className="lg:col-span-7 mb-8 lg:mb-0">
              <div className="sticky top-32 space-y-6">
                {/* Main Image Card */}
                <div className="relative aspect-[4/5] lg:aspect-square w-full bg-white/60 backdrop-blur-md rounded-sm overflow-hidden shadow-2xl shadow-[#1A2118]/5 border border-white/40">
                  {/* Main Image/Video Card */}
                  {activeImage.endsWith('.mp4') || activeImage.endsWith('.webm') ? (
                     <video
                      src={activeImage}
                      controls
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover rounded-sm"
                    />
                  ) : (
                    <Image
                      src={activeImage}
                      alt={currentProduct.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover mix-blend-multiply transition-opacity duration-300"
                    />
                  )}

                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur text-[#BC5633] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-sm border border-[#BC5633]/20">
                      Premium
                    </span>
                  </div>

                  {/* Action Buttons on Image */}
                  <div className="absolute top-4 right-4 lg:top-6 lg:right-6 flex flex-col gap-3">
                    <button
                      onClick={handleWishlistToggle}
                      className={`w-10 h-10 lg:w-12 lg:h-12 rounded-sm flex items-center justify-center backdrop-blur-md transition-all shadow-sm ${
                        isWishlisted
                          ? "bg-[#BC5633] text-white"
                          : "bg-white/60 text-[#1A2118] hover:bg-white"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 lg:w-5 lg:h-5 ${
                          isWishlisted ? "fill-current" : ""
                        }`}
                      />
                    </button>
                    <button className="w-10 h-10 lg:w-12 lg:h-12 rounded-sm bg-white/60 backdrop-blur-md flex items-center justify-center text-[#1A2118] hover:bg-white transition-all shadow-sm">
                      <Share2 className="w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                  </div>
                </div>

                {/* Image & Video Gallery */}
                {(currentProduct.images && currentProduct.images.length > 0) || currentProduct.videoUrl ? (
                  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {/* Combine images and video */}
                    {[
                      currentProduct.imageUrl, 
                      ...(currentProduct.images || []),
                      ...(currentProduct.videoUrl ? [currentProduct.videoUrl] : [])
                    ]
                      .filter((url, index, self) => self.indexOf(url) === index && url)
                      .map((mediaUrl, idx) => {
                        const isVideo = mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm');
                        return (
                          <button
                            key={idx}
                            onClick={() => setActiveImage(mediaUrl)}
                            className={`relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-sm overflow-hidden border transition-all group ${
                              activeImage === mediaUrl
                                ? "border-[#BC5633] shadow-lg scale-105"
                                : "border-transparent hover:border-[#1A2118]/20"
                            }`}
                          >
                            {isVideo ? (
                              <div className="w-full h-full bg-black flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                                </div>
                              </div>
                            ) : (
                              <Image
                                src={mediaUrl}
                                alt={`${currentProduct.title} view ${idx + 1}`}
                                fill
                                className="object-cover mix-blend-multiply"
                              />
                            )}
                          </button>
                        );
                      })}
                  </div>
                ) : null}
              </div>
            </div>

            {/* --- RIGHT: PRODUCT DETAILS PANEL --- */}
            <div className="lg:col-span-5">
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-sm p-4 lg:p-8 shadow-xl">
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
                    <span className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/40 ml-2">
                      {reviews.length} Reviews
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-5xl font-serif font-medium text-[#1A2118] mb-4 leading-tight">
                    {currentProduct.title}
                  </h1>

                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-bold text-[#1A2118]">
                      ₹{currentProduct.price}
                    </span>
                    {currentProduct.originalPrice && currentProduct.originalPrice > currentProduct.price && (
                      <span className="text-xl text-[#1A2118]/30 line-through decoration-1">
                        ₹{currentProduct.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Controls */}
                <div className="space-y-8">
                  {/* Description */}
                  <p className="text-[#596157] leading-relaxed font-light text-base lg:text-lg">
                    {currentProduct.description}
                  </p>

                  {/* Size Selector */}
                  {currentProduct.sizes && currentProduct.sizes.length > 0 && (
                    <div className="space-y-3">
                      <span className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-2">
                        Select Size
                      </span>
                      <div className="flex flex-wrap gap-3">
                        {currentProduct.sizes.map((size) => (
                          <button
                            key={size.value}
                            onClick={() => setSelectedSize(size.value)}
                            className={`px-6 py-3 rounded-sm text-sm font-bold transition-all border ${
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

                  {/* &quot;I absolutely love this honey! It&apos;s become a staple in my morning routine.&quot;) */}
                  <div className="hidden lg:block pt-4 space-y-4">
                    <div className="flex gap-4">
                      {/* Quantity Pill */}
                      <div className="flex items-center bg-white rounded-sm p-1.5 h-16 shadow-sm border border-[#1A2118]/5 w-40">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-12 h-full flex items-center justify-center rounded-sm hover:bg-[#F2F0EA] transition-colors active:scale-90"
                        >
                          <Minus className="w-4 h-4 text-[#1A2118]" />
                        </button>
                        <span className="flex-1 text-center font-bold text-lg text-[#1A2118]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-12 h-full flex items-center justify-center rounded-sm hover:bg-[#F2F0EA] transition-colors active:scale-90"
                        >
                          <Plus className="w-4 h-4 text-[#1A2118]" />
                        </button>
                      </div>

                      {/* Add To Cart Button */}
                      <button
                        onClick={handleAddToCart}
                        disabled={!currentProduct.inStock || isAdding}
                        className={`flex-1 h-16 rounded-sm font-bold uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 ${
                          isAdding
                            ? "bg-[#3A4D39] text-white"
                            : !currentProduct.inStock
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
                          : currentProduct.inStock
                          ? "Add to Cart"
                          : "Out of Stock"}
                      </button>
                    </div>
                    <div className="flex items-center justify-center gap-6 text-xs font-bold uppercase tracking-widest text-[#1A2118]/40 pt-2">
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

                {/* Product Meta Details */}
                <div className="mt-8 pt-6 border-t border-[#1A2118]/10 space-y-6">
                  {/* Ingredients - Full Width */}
                  {currentProduct.ingredients && (
                    <div className="w-full">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/40 mb-2">
                        Ingredients
                      </h3>
                      <p className="text-[#596157] font-light text-sm leading-relaxed bg-white/40 p-4 rounded-sm border border-[#1A2118]/5 break-words">
                        {currentProduct.ingredients}
                      </p>
                    </div>
                  )}

                  {/* Sourcing & Taste Profile - Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    {currentProduct.sourcing && (
                      <div className="w-full flex flex-col h-full">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/40 mb-2">
                          Sourcing
                        </h3>
                        <div className="bg-white/40 p-4 rounded-sm border border-[#1A2118]/5 flex-1 w-full">
                          <p className="text-[#596157] font-light text-sm leading-relaxed break-words">
                            {currentProduct.sourcing}
                          </p>
                        </div>
                      </div>
                    )}

                    {currentProduct.tasteProfile && (
                      <div className="w-full flex flex-col h-full">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/40 mb-2">
                          Taste Profile
                        </h3>
                        <div className="bg-white/40 p-4 rounded-sm border border-[#1A2118]/5 flex-1 w-full">
                          <p className="text-[#596157] font-light text-sm leading-relaxed break-words">
                            {currentProduct.tasteProfile}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- REVIEWS SECTION --- */}
          <div className="mt-12 pt-12 border-t border-[#1A2118]/10 max-w-4xl mx-auto" id="reviews-section">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between mb-10">
              <div>
                <h2 className="text-3xl font-serif font-bold text-[#1A2118] mb-2">
                  Community Reviews
                </h2>
                {reviews.length > 0 && (
                  <span className="text-sm font-bold uppercase tracking-widest text-[#BC5633]">
                    {reviews.length} Reviews
                  </span>
                )}
              </div>
              
              <button
                onClick={() => {
                  if (!isAuthenticated) {
                    window.location.href = "/login";
                    return;
                  }
                  const form = document.getElementById("review-form");
                  form?.scrollIntoView({ behavior: "smooth" });
                  // Optional: Focus the textarea
                  const textarea = form?.querySelector("textarea");
                  textarea?.focus();
                }}
                className="w-full md:w-auto px-6 py-3 bg-[#1A2118] text-white rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-[#BC5633] transition-colors shadow-lg text-center"
              >
                Write a Review
              </button>
            </div>



              {/* Write Review Form */}
              {isMounted && isAuthenticated ? (
                <div id="review-form" className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-sm p-6 md:p-8 mb-12 shadow-sm">
                  <h3 className="text-xl font-serif font-bold text-[#1A2118] mb-6">Write a Review</h3>
                  <form onSubmit={handleReviewSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 mb-2">
                        Rating
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-8 h-8 ${
                                star <= rating
                                  ? "fill-[#BC5633] text-[#BC5633]"
                                  : "text-[#1A2118]/20 hover:text-[#BC5633]/40"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 mb-2">
                        Your Review
                      </label>
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        rows={4}
                        placeholder="Share your experience with this product..."
                        className="w-full px-6 py-4 bg-white border border-[#1A2118]/10 rounded-sm text-base text-[#1A2118] focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all placeholder-[#1A2118]/30 resize-none"
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={isSubmitting || !comment.trim() || rating === 0}
                        className={`px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-lg flex items-center gap-2 ${
                          isSubmitting || !comment.trim() || rating === 0
                            ? "bg-[#F2F0EA] text-[#1A2118]/40 cursor-not-allowed"
                            : "bg-[#1A2118] text-white hover:bg-[#BC5633]"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Review"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-[#F2F0EA]/50 rounded-sm p-6 md:p-8 mb-12 text-center border border-[#1A2118]/5">
                  <p className="text-[#596157] mb-4">Please login to write a review.</p>
                  <Link href="/login" className="inline-block px-8 py-3 bg-[#1A2118] text-white rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-[#BC5633] transition-colors shadow-lg">
                    Login
                  </Link>
                </div>
              )}

            {reviews.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-sm border border-white/40 shadow-sm hover:shadow-md transition-shadow"
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
                      &quot;{review.comment}&quot;
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-[#F2F0EA]/50 rounded-sm border border-[#1A2118]/5">
                <p className="text-[#596157] font-medium">No reviews yet. Be the first to share your thoughts!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* --- MOBILE STICKY ACTION BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-[#1A2118]/5 z-50 lg:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40">
              Total Price
            </span>
            <span className="text-xl font-bold text-[#1A2118]">
              ₹{currentProduct.price * quantity}
            </span>
          </div>
          
          {/* Quantity Stepper Mini */}
          <div className="flex items-center bg-[#F2F0EA] rounded-sm p-1 h-12">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-full flex items-center justify-center rounded-sm active:bg-white transition-colors"
            >
              <Minus className="w-3 h-3 text-[#1A2118]" />
            </button>
            <span className="w-6 text-center font-bold text-sm text-[#1A2118]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-full flex items-center justify-center rounded-sm active:bg-white transition-colors"
            >
              <Plus className="w-3 h-3 text-[#1A2118]" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!currentProduct.inStock || isAdding}
            className={`flex-1 h-12 rounded-sm font-bold uppercase tracking-widest text-sm transition-all shadow-lg flex items-center justify-center gap-2 ${
              isAdding
                ? "bg-[#3A4D39] text-white"
                : !currentProduct.inStock
                ? "bg-[#F2F0EA] text-[#1A2118]/40 cursor-not-allowed"
                : "bg-[#BC5633] text-white active:scale-95"
            }`}
          >
            {isAdding ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
