"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";
import { productsAPI, Product, wishlistAPI } from "../services/api";
import {
  Filter,
  Grid3X3,
  List,
  SlidersHorizontal,
  Search,
  X,
  ChevronDown,
  Star,
  Heart,
  ShoppingCart,
  ArrowRight,
  Check,
  RefreshCcw,
} from "lucide-react";

const ShopPage = () => {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // --- LOAD MORE STATE ---
  const ITEMS_PER_PAGE = 100; // Show all items by default as requested
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsAPI.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (isAuthenticated && user?.id) {
      wishlistAPI.getWishlist(user.id).then((items) => {
        setWishlistIds(items.map((item: any) => item._id));
      });
    }
  }, [isAuthenticated, user]);

  const handleAddToCart = (
    product: { id: string; name: string; price: number; image: string },
    quantity: number = 1
  ) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleToggleWishlist = async (id: string) => {
    if (!isAuthenticated || !user?.id) {
      alert("Please login to add to wishlist");
      return;
    }
    try {
      if (wishlistIds.includes(id)) {
        await wishlistAPI.removeFromWishlist(user.id, id);
        setWishlistIds((prev) => prev.filter((wid) => wid !== id));
      } else {
        await wishlistAPI.addToWishlist(user.id, id);
        setWishlistIds((prev) => [...prev, id]);
      }
    } catch (error) {
      console.error("Failed to toggle wishlist:", error);
    }
  };

  const categories = [
    { id: "oils", name: "Cold Pressed Oils", count: 4 },
    { id: "ghee", name: "A2 Ghee", count: 1 },
    { id: "honey", name: "Raw Honey", count: 1 },
    { id: "teas", name: "Herbal Teas", count: 4 },
    { id: "seeds", name: "Seeds & Superfoods", count: 5 },
    { id: "wellness", name: "Wellness", count: 1 },
  ];

  const sortOptions = [
    { value: "featured", label: "Featured" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const numericPrice = product.price;
    const matchesPrice =
      numericPrice >= priceRange[0] && numericPrice <= priceRange[1];
    const matchesRating =
      selectedRating === null || product.rating >= selectedRating;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  // Sort Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.price;
    const priceB = b.price;
    switch (sortBy) {
      case "price-low":
        return priceA - priceB;
      case "price-high":
        return priceB - priceA;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // --- RESET PAGINATION WHEN FILTERS CHANGE ---
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [searchQuery, selectedCategories, priceRange, selectedRating, sortBy]);

  // --- LOAD MORE HANDLER ---
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  // Price Handler
  const handlePriceChange = (index: 0 | 1, value: string) => {
    const newVal = parseInt(value) || 0;
    const newRange = [...priceRange] as [number, number];
    newRange[index] = newVal;
    if (index === 0 && newVal > priceRange[1]) newRange[0] = priceRange[1];
    if (index === 1 && newVal < priceRange[0]) newRange[1] = priceRange[0];
    setPriceRange(newRange);
  };

  return (
    <div className="relative min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden pb-20">
      {/* --- STYLES & ANIMATIONS --- */}
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
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Dual Range Slider CSS Magic */
        .range-slider {
          position: relative;
          width: 100%;
          height: 20px;
        }
        .range-slider input[type="range"] {
          position: absolute;
          pointer-events: none;
          -webkit-appearance: none;
          z-index: 2;
          height: 20px;
          width: 100%;
          opacity: 0;
          cursor: pointer;
        }
        .range-slider input[type="range"]::-webkit-slider-thumb {
          pointer-events: all;
          width: 20px;
          height: 20px;
          -webkit-appearance: none;
          cursor: pointer;
          background: red;
          border-radius: 50%;
        }
        .slider-track {
          position: absolute;
          width: 100%;
          height: 4px;
          background: #e5e7eb;
          border-radius: 2px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
        .slider-range {
          position: absolute;
          height: 4px;
          background: #bc5633;
          border-radius: 2px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
        }
        .slider-thumb {
          position: absolute;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #bc5633;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          pointer-events: none;
          box-shadow: 0 0 0 4px white, 0 2px 5px rgba(0, 0, 0, 0.2);
          transition: transform 0.1s;
        }
      `}</style>

      {/* --- Background --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 -right-20 w-[800px] h-[800px] bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 -left-20 w-[600px] h-[600px] bg-[#1A2118] rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-blob" />
      </div>

      {/* --- Header --- */}
      <section className="relative pt-32 pb-8 px-6 lg:px-12 z-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A2118]">
              The Pantry
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-serif font-medium tracking-tight text-[#1A2118]">
            Harvest <span className="italic text-[#596157]">Collection.</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* --- Control Bar --- */}
        <div className="sticky top-24 z-30 mb-8 transition-all duration-300">
          <div className="bg-white/70 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/40 p-2 flex flex-col lg:flex-row gap-3 items-center justify-between">
            <div className="relative w-full lg:w-96 group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1A2118]/40 w-5 h-5 group-focus-within:text-[#BC5633] transition-colors" />
              <input
                type="text"
                placeholder="Search essentials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F2F0EA]/50 hover:bg-[#F2F0EA] focus:bg-white border-none rounded-full py-3 pl-12 pr-4 text-[#1A2118] placeholder-[#1A2118]/40 focus:ring-2 focus:ring-[#BC5633]/20 transition-all outline-none"
              />
            </div>
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden px-4 py-3 bg-[#1A2118] text-white rounded-full flex items-center gap-2 text-sm font-bold shadow-lg active:scale-95 transition-all"
              >
                <SlidersHorizontal className="w-4 h-4" /> Filter
              </button>
              <div className="relative group hidden lg:block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-[#F2F0EA]/50 hover:bg-[#F2F0EA] px-6 py-3 pr-10 rounded-full text-sm font-bold text-[#1A2118] cursor-pointer outline-none focus:ring-2 focus:ring-[#BC5633]/20 transition-all"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A2118]/50 pointer-events-none" />
              </div>
              <div className="hidden lg:flex bg-[#F2F0EA]/50 rounded-full p-1 border border-[#1A2118]/5">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2.5 rounded-full transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-white shadow-md text-[#BC5633]"
                      : "text-[#1A2118]/40 hover:text-[#1A2118]"
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2.5 rounded-full transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-white shadow-md text-[#BC5633]"
                      : "text-[#1A2118]/40 hover:text-[#1A2118]"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 items-start">
          {/* --- Sidebar Filters --- */}
          {/* Mobile Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
              isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsFilterOpen(false)}
          />
          
          <aside
            className={`fixed lg:sticky top-0 lg:top-40 left-0 h-full lg:h-auto w-[85vw] lg:w-80 bg-[#F2F0EA] lg:bg-white/60 backdrop-blur-2xl lg:backdrop-blur-xl z-50 lg:z-0 p-6 lg:p-8 lg:rounded-[2.5rem] lg:border lg:border-white/50 lg:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] transition-transform duration-300 lg:transform-none overflow-y-auto ${
              isFilterOpen
                ? "translate-x-0 shadow-2xl"
                : "-translate-x-full lg:translate-x-0"
            }`}
          >
            {/* Header & Reset */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#1A2118] rounded-[12px] text-white">
                  <Filter className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-[#1A2118]">Filters</h2>
              </div>
              <div className="flex items-center gap-4">
                {(selectedCategories.length > 0 ||
                  selectedRating ||
                  priceRange[0] > 0) && (
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedRating(null);
                      setPriceRange([0, 2000]);
                      setSearchQuery("");
                    }}
                    className="text-[10px] font-bold uppercase tracking-widest text-[#BC5633] hover:text-[#1A2118] transition-colors flex items-center gap-1"
                  >
                    <RefreshCcw className="w-3 h-3" /> Reset
                  </button>
                )}
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="lg:hidden p-2 bg-white rounded-full shadow-md text-[#1A2118]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-white/50 rounded-[1.5rem] p-4 border border-white/40">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40 mb-4 ml-2">
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className={`flex items-center justify-between cursor-pointer group p-3 rounded-[1rem] transition-all duration-200 ${
                        selectedCategories.includes(category.id)
                          ? "bg-[#1A2118] text-white shadow-lg shadow-[#1A2118]/20"
                          : "hover:bg-[#F2F0EA]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={selectedCategories.includes(category.id)}
                          onChange={(e) => {
                            if (e.target.checked)
                              setSelectedCategories([
                                ...selectedCategories,
                                category.id,
                              ]);
                            else
                              setSelectedCategories(
                                selectedCategories.filter(
                                  (id) => id !== category.id
                                )
                              );
                          }}
                        />
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                      </div>
                      {selectedCategories.includes(category.id) ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <span className="text-xs font-bold opacity-30">
                          {category.count}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white/50 rounded-[1.5rem] p-6 border border-white/40">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40">
                    Price Range
                  </h3>
                  <span className="text-xs font-bold text-[#BC5633]">
                    ₹{priceRange[0]} - ₹{priceRange[1]}
                  </span>
                </div>
                <div className="range-slider mb-8">
                  <div className="slider-track"></div>
                  <div
                    className="slider-range"
                    style={{
                      left: `${(priceRange[0] / 2000) * 100}%`,
                      right: `${100 - (priceRange[1] / 2000) * 100}%`,
                    }}
                  ></div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="10"
                    value={priceRange[0]}
                    onChange={(e) => handlePriceChange(0, e.target.value)}
                  />
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(1, e.target.value)}
                  />
                  <div
                    className="slider-thumb"
                    style={{ left: `${(priceRange[0] / 2000) * 100}%` }}
                  ></div>
                  <div
                    className="slider-thumb"
                    style={{ left: `${(priceRange[1] / 2000) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Rating */}
              <div className="bg-white/50 rounded-[1.5rem] p-4 border border-white/40">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40 mb-4 ml-2">
                  Rating
                </h3>
                <div className="flex flex-col gap-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      onClick={() =>
                        setSelectedRating(
                          selectedRating === rating ? null : rating
                        )
                      }
                      className={`flex items-center justify-between p-3 rounded-[1rem] transition-all duration-200 border ${
                        selectedRating === rating
                          ? "bg-white border-[#BC5633] shadow-md shadow-[#BC5633]/10"
                          : "border-transparent hover:bg-[#F2F0EA]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-sm font-bold ${
                            selectedRating === rating
                              ? "text-[#BC5633]"
                              : "text-[#1A2118]"
                          }`}
                        >
                          {rating}+ Stars
                        </span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < rating
                                  ? "fill-[#BC5633] text-[#BC5633]"
                                  : "text-[#1A2118]/10"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      {selectedRating === rating && (
                        <div className="w-2 h-2 rounded-full bg-[#BC5633]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* --- PRODUCT GRID WITH LOAD MORE --- */}
          <main className="flex-1 min-h-[60vh]">
            <div className="flex items-center justify-between mb-6 px-2">
              <p className="text-sm text-[#1A2118]/50">
                Showing{" "}
                <span className="text-[#1A2118] font-bold">
                  {Math.min(visibleCount, sortedProducts.length)}
                </span>{" "}
                of {sortedProducts.length} results
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-24">
                <div className="w-10 h-10 border-2 border-[#BC5633] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : sortedProducts.length > 0 ? (
              <>
                <div
                  className={`grid gap-3 sm:gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-2 sm:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {sortedProducts.slice(0, visibleCount).map((product, idx) => (
                    <div
                      key={product._id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <ProductCard
                        id={product._id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        imageUrl={product.imageUrl}
                        rating={product.rating}
                        reviewCount={product.reviewCount}
                        isBestseller={product.isBestseller}
                        isNew={product.isNew}
                        isOnSale={product.isOnSale}
                        originalPrice={product.originalPrice}
                        onAddToCart={(productData, qty) =>
                          handleAddToCart(productData, qty)
                        }
                        onToggleWishlist={handleToggleWishlist}
                        isWishlisted={wishlistIds.includes(product._id)}
                        viewMode={viewMode}
                      />
                    </div>
                  ))}
                </div>

                {/* Load More Button */}
                {visibleCount < sortedProducts.length && (
                  <div className="mt-16 flex justify-center">
                    <button
                      onClick={handleLoadMore}
                      className="px-10 py-4 bg-white border border-[#1A2118]/10 rounded-full text-sm font-bold uppercase tracking-widest text-[#1A2118] hover:bg-[#1A2118] hover:text-white transition-all shadow-sm hover:shadow-lg"
                    >
                      Load More Products ({sortedProducts.length - visibleCount}{" "}
                      left)
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-[#1A2118]/5 text-center">
                <div className="w-20 h-20 bg-[#F2F0EA] rounded-[1.5rem] flex items-center justify-center mb-6 shadow-inner">
                  <Search className="w-8 h-8 text-[#BC5633]" />
                </div>
                <h3 className="text-2xl font-serif text-[#1A2118] mb-2">
                  No matches found
                </h3>
                <p className="text-[#596157] mb-8">
                  Try adjusting your filters or search for something else.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                    setSelectedRating(null);
                    setPriceRange([0, 2000]);
                  }}
                  className="px-8 py-3 bg-[#1A2118] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#BC5633] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
