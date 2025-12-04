"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // --- LOAD MORE STATE ---
  const ITEMS_PER_PAGE = 6;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleAddToCart = (
    product: { id: string; name: string; price: number; image: string },
    quantity: number = 1
  ) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const handleToggleWishlist = (id: string) => {
    console.log(`Toggled wishlist for ${id}`);
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

  const products = [
    {
      id: "1",
      imageUrl: "/won8.JPG",
      title: "Organic Coconut Oil",
      description:
        "Cold-Pressed from fresh, handpicked coconuts. Rich in MCTs for energy & immunity.",
      price: "₹349.00",
      originalPrice: "₹450.00",
      rating: 4.8,
      reviewCount: 124,
      isBestseller: true,
      category: "oils",
    },
    {
      id: "2",
      imageUrl: "/won32.JPG",
      title: "Pure A2 Cow Ghee",
      description:
        "Handmade from Desi Cow Milk using the traditional Bilona method.",
      price: "₹1,250.00",
      rating: 4.9,
      reviewCount: 89,
      isNew: true,
      category: "ghee",
    },
    {
      id: "3",
      imageUrl: "/won5.JPG",
      title: "Organic Black Mustard Oil",
      description: "Cold-pressed goodness packed with natural heat & flavor.",
      price: "₹220.00",
      rating: 4.7,
      reviewCount: 45,
      category: "oils",
    },
    {
      id: "4",
      imageUrl: "/won19.JPG",
      title: "Organic Yellow Mustard Oil",
      description:
        "Mild & aromatic cold-pressed oil. Boosts immunity and supports digestion.",
      price: "₹240.00",
      rating: 4.6,
      reviewCount: 32,
      category: "oils",
    },
    {
      id: "5",
      imageUrl: "/won13.JPG",
      title: "Organic Black Sesame Oil",
      description:
        "Ancient Ayurvedic elixir. Deeply nourishes skin, hair, and joints.",
      price: "₹499.00",
      rating: 4.8,
      reviewCount: 67,
      category: "oils",
    },
    {
      id: "6",
      imageUrl: "/won23.JPG",
      title: "Pure Multifloral Honey",
      description:
        "Collected from diverse wildflowers. Rich in enzymes & antioxidants.",
      price: "₹550.00",
      rating: 4.9,
      reviewCount: 210,
      isBestseller: true,
      category: "honey",
    },
    {
      id: "7",
      imageUrl: "/won61.JPG",
      title: "Chamomile Flower Tea",
      description:
        "Calming floral infusion for deep relaxation. Naturally caffeine-free.",
      price: "₹399.00",
      rating: 4.7,
      reviewCount: 56,
      category: "teas",
    },
    {
      id: "8",
      imageUrl: "/won17.JPG",
      title: "Rosemary Herbal Tea",
      description:
        "Aromatic brew that awakens mind and body. Rich in antioxidants.",
      price: "₹349.00",
      rating: 4.5,
      reviewCount: 42,
      category: "teas",
    },
    {
      id: "9",
      imageUrl: "/won15.JPG",
      title: "Peppermint Herbal Tea",
      description:
        "Refreshing mint infusion for instant calm. Supports digestion.",
      price: "₹299.00",
      rating: 4.6,
      reviewCount: 88,
      category: "teas",
    },
    {
      id: "10",
      imageUrl: "/won53.JPG",
      title: "Hibiscus Flower Herbal Tea",
      description:
        "Vibrant crimson brew with a tangy taste. Packed with Vitamin C.",
      price: "₹349.00",
      rating: 4.8,
      reviewCount: 112,
      isOnSale: true,
      category: "teas",
    },
    {
      id: "11",
      imageUrl: "/won34.JPG",
      title: "Premium Pumpkin Seeds",
      description:
        "Crunchy powerhouse packed with Protein & Zinc. Boosts immunity.",
      price: "₹280.00",
      rating: 4.7,
      reviewCount: 95,
      category: "seeds",
    },
    {
      id: "12",
      imageUrl: "/won60.JPG",
      title: "Premium Basil Seeds",
      description:
        "Cooling superfood rich in Fiber & Omega-3. Supports digestion.",
      price: "₹199.00",
      rating: 4.6,
      reviewCount: 76,
      category: "seeds",
    },
    {
      id: "13",
      imageUrl: "/won51.JPG",
      title: "White Quinoa Seeds",
      description:
        "Complete plant-based protein with all 9 amino acids. Gluten-free.",
      price: "₹320.00",
      rating: 4.7,
      reviewCount: 64,
      category: "seeds",
    },
    {
      id: "14",
      imageUrl: "/won58.JPG",
      title: "Premium Flax Seeds",
      description:
        "Rich source of Omega-3, Fiber & Plant Protein. Promotes heart health.",
      price: "₹149.00",
      rating: 4.5,
      reviewCount: 130,
      category: "seeds",
    },
    {
      id: "15",
      imageUrl: "/won47.JPG",
      title: "Premium Sunflower Seeds",
      description:
        "Light, crunchy & rich in Vitamin E. Boosts heart health and skin glow.",
      price: "₹249.00",
      rating: 4.6,
      reviewCount: 82,
      category: "seeds",
    },
    {
      id: "16",
      imageUrl: "/won18.JPG",
      title: "Mix Fruit Cocktail",
      description:
        "Vibrant blend of berries, papaya, mango & kiwi. Naturally sweet.",
      price: "₹450.00",
      rating: 4.8,
      reviewCount: 54,
      category: "seeds",
    },
    {
      id: "17",
      imageUrl: "/won43.JPG",
      title: "Dried Papaya Cubes",
      description:
        "Naturally sweet tropical treat. Rich in Vitamin A, C & enzymes.",
      price: "₹399.00",
      rating: 4.7,
      reviewCount: 41,
      category: "seeds",
    },
    {
      id: "18",
      imageUrl: "/won37.JPG",
      title: "Gond Katira",
      description:
        "Ancient Ayurvedic herb for cooling. Supports skin health and immunity.",
      price: "₹299.00",
      rating: 4.6,
      reviewCount: 38,
      category: "wellness",
    },
    {
      id: "19",
      imageUrl: "/won35.JPG",
      title: "Charcoal Toothpaste",
      description:
        "Infused with activated charcoal for natural whitening. Fluoride-free.",
      price: "₹249.00",
      rating: 4.5,
      reviewCount: 150,
      category: "wellness",
    },
  ];

  // Filter Logic
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, ""));
    const matchesPrice =
      numericPrice >= priceRange[0] && numericPrice <= priceRange[1];
    const matchesRating =
      selectedRating === null || product.rating >= selectedRating;
    return matchesSearch && matchesCategory && matchesPrice && matchesRating;
  });

  // Sort Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ""));
    const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ""));
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

      {/* ... Background ... */}
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

      {/* ... Header ... */}
      <section className="relative pt-32 pb-8 px-6 lg:px-12 z-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A2118]">
              The Pantry
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight text-[#1A2118]">
            Harvest <span className="italic text-[#596157]">Collection.</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* ... Control Bar ... */}
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
                className="lg:hidden px-4 py-3 bg-[#1A2118] text-white rounded-full flex items-center gap-2 text-sm font-bold"
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
          {/* ... Sidebar Filters ... */}
          <aside
            className={`fixed lg:sticky top-0 lg:top-40 left-0 h-full lg:h-auto w-full lg:w-80 bg-white/95 lg:bg-white/60 backdrop-blur-2xl lg:backdrop-blur-xl z-40 lg:z-0 p-8 lg:p-8 lg:rounded-[2.5rem] lg:border lg:border-white/50 lg:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] transition-transform duration-300 lg:transform-none ${
              isFilterOpen
                ? "translate-x-0"
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
                className="lg:hidden p-2 bg-[#F2F0EA] rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
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

            {sortedProducts.length > 0 ? (
              <>
                <div
                  className={`grid gap-6 ${
                    viewMode === "grid"
                      ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {sortedProducts.slice(0, visibleCount).map((product, idx) => (
                    <div
                      key={product.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <ProductCard
                        {...product}
                        onAddToCart={handleAddToCart}
                        onToggleWishlist={handleToggleWishlist}
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
