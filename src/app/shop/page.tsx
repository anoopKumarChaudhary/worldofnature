"use client";

import React, { useState, useMemo, ChangeEvent } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard"; // Adjust path if needed
import { useDispatch } from "react-redux";
import { addToCart, CartItem } from "../redux/features/cart/cartSlice";

// --- UPDATED: Import only the icons we need ---
import { Filter, ChevronDown } from "lucide-react";

// --- Dummy Product Data ---
const allProducts = [
  {
    id: 1,
    imageUrl: "/won1.JPG",
    title: "Wild Forest Honey",
    description: "Rich, raw, and unprocessed honey from wild forests.",
    price: 18.0,
    category: "honey",
  },
  {
    id: 2,
    imageUrl: "/won2.jpg",
    title: "A2 Bilona Ghee",
    description: "Traditional Bilona method A2 Ghee for pure nourishment.",
    price: 24.5,
    category: "oils",
  },
  {
    id: 3,
    imageUrl: "/won3.JPG",
    title: "Cold-Pressed Mustard Oil",
    description: "Pure, cold-pressed mustard oil, full of natural flavor.",
    price: 12.0,
    category: "oils",
  },
  {
    id: 4,
    imageUrl: "/won4.JPG",
    title: "Assam Black Tea",
    description: "A robust and malty black tea from heritage gardens.",
    price: 15.0,
    category: "teas",
  },
  {
    id: 5,
    imageUrl: "/won5.JPG",
    title: "Roasted Flax Seeds",
    description: "Organic roasted flax seeds, rich in Omega-3.",
    price: 9.5,
    category: "seeds",
  },
  {
    id: 6,
    imageUrl: "/won6.JPG",
    title: "Himalayan Multi-Flora",
    description: "A delicate and floral honey from high-altitude blossoms.",
    price: 21.0,
    category: "honey",
  },
  {
    id: 7,
    imageUrl: "/won7.JPG",
    title: "Turmeric Latte Mix",
    description: "A warming blend of turmeric and spices.",
    price: 16.5,
    category: "seeds",
  },
  {
    id: 8,
    imageUrl: "/won8.JPG",
    title: "Green Tea Leaves",
    description: "Whole leaf green tea, rich in antioxidants.",
    price: 14.0,
    category: "teas",
  },
  {
    id: 9,
    imageUrl: "/won9.JPG",
    title: "Cold-Pressed Coconut Oil",
    description: "Virgin coconut oil, perfect for cooking or skincare.",
    price: 19.0,
    category: "oils",
  },
  {
    id: 10,
    imageUrl: "/won10.JPG",
    title: "Acacia Honey",
    description: "A light and clear honey with a mild taste.",
    price: 22.0,
    category: "honey",
  },
  {
    id: 7,
    imageUrl: "/won7.JPG",
    title: "Turmeric Latte Mix",
    description: "A warming blend of turmeric and spices.",
    price: 16.5,
    category: "seeds",
  },
  {
    id: 8,
    imageUrl: "/won8.JPG",
    title: "Green Tea Leaves",
    description: "Whole leaf green tea, rich in antioxidants.",
    price: 14.0,
    category: "teas",
  },
  {
    id: 9,
    imageUrl: "/won9.JPG",
    title: "Cold-Pressed Coconut Oil",
    description: "Virgin coconut oil, perfect for cooking or skincare.",
    price: 19.0,
    category: "oils",
  },
  {
    id: 10,
    imageUrl: "/won10.JPG",
    title: "Acacia Honey",
    description: "A light and clear honey with a mild taste.",
    price: 22.0,
    category: "honey",
  },
  {
    id: 11,
    imageUrl: "/won11.JPG",
    title: "Organic Green Tea",
    description:
      "Premium organic green tea sourced from sustainable farms in Japan.",
    price: 24.99,
    originalPrice: 29.99,
    category: "teas",
  },
  {
    id: 12,
    imageUrl: "/won12.JPG",
    title: "Wild Forest Honey",
    description: "Raw, unfiltered honey harvested from wild forest bees.",
    price: 18.99,
    category: "honey",
  },
  {
    id: 13,
    imageUrl: "/won13.JPG",
    title: "A2 Bilona Ghee",
    description: "Traditional Bilona method A2 Ghee for pure nourishment.",
    price: 24.5,
    category: "oils",
  },
  {
    id: 14,
    imageUrl: "/won14.JPG",
    title: "Cold-Pressed Mustard Oil",
    description: "Pure, cold-pressed mustard oil, full of natural flavor.",
    price: 12.0,
    category: "oils",
  },
  {
    id: 15,
    imageUrl: "/won15.JPG",
    title: "Assam Black Tea",
    description: "A robust and malty black tea from heritage gardens.",
    price: 15.0,
    category: "teas",
  },
  {
    id: 16,
    imageUrl: "/won16.JPG",
    title: "Roasted Flax Seeds",
    description: "Organic roasted flax seeds, rich in Omega-3.",
    price: 9.5,
    category: "seeds",
  },
  {
    id: 17,
    imageUrl: "/won17.JPG",
    title: "Himalayan Multi-Flora",
    description: "A delicate and floral honey from high-altitude blossoms.",
    price: 21.0,
    category: "honey",
  },
  {
    id: 18,
    imageUrl: "/won18.JPG",
    title: "Turmeric Latte Mix",
    description: "A warming blend of turmeric and spices.",
    price: 16.5,
    category: "seeds",
  },
  {
    id: 19,
    imageUrl: "/won19.JPG",
    title: "Green Tea Leaves",
    description: "Whole leaf green tea, rich in antioxidants.",
    price: 14.0,
    category: "teas",
  },
  {
    id: 20,
    imageUrl: "/won20.JPG",
    title: "Cold-Pressed Coconut Oil",
    description: "Virgin coconut oil, perfect for cooking or skincare.",
    price: 19.0,
    category: "oils",
  },
];

const PRODUCTS_PER_PAGE = 6;

// --- Icons ---
// UPDATED: Removed className since we're using Tailwind
const FilterIcon = () => (
  <Filter className="w-5 h-5 text-[var(--shop-grey)] flex-shrink-0" />
);

// UPDATED: Replaced Droplet with ChevronDown
const ChevronDownIcon = () => (
  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--shop-grey)] pointer-events-none" />
);

// UPDATED: Replaced inline SVG with ChevronDown
const DisclosureIcon = () => (
  <ChevronDown className="w-5 h-5 text-[var(--shop-grey)] flex-shrink-0 transition-transform duration-200" />
);

const ShopPage = () => {
  const dispatch = useDispatch();
  // --- All state and logic remains identical ---
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
    setCurrentPage(1);
  };
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice(e.target.value);
    setCurrentPage(1);
  };
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];
    if (searchTerm) {
      products = products.filter(
        (product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategories.length > 0) {
      products = products.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    if (selectedPrice !== "all") {
      products = products.filter((product) => {
        if (selectedPrice === "0-15")
          return product.price >= 0 && product.price <= 15;
        if (selectedPrice === "15-25")
          return product.price > 15 && product.price <= 25;
        if (selectedPrice === "25+") return product.price > 25;
        return true;
      });
    }
    return products;
  }, [searchTerm, selectedCategories, selectedPrice]);

  const sortedProducts = useMemo(() => {
    let products = [...filteredProducts];
    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - b.price);
        break;
      case "title-asc":
        products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        products.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    return products;
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const displayedProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  const handleAddToCart = (product: any) => {
    const cartItem: CartItem = {
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      image: product.imageUrl,
      quantity: 1,
      size: undefined,
    };
    dispatch(addToCart(cartItem));
    alert("Added to cart!");
  };

  return (
    <section className="bg-shop text-text-primary py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* --- 1. Shop Header --- */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Shop All Products
          </h1>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Browse our full collection of organic, sustainably-sourced goods.
          </p>
        </div>

        {/* --- 2. Search Bar --- */}
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] bg-[var(--color-surface)] text-[var(--color-text-primary)]"
          />
        </div>

        {/* --- 3. Main Shop Layout (Sidebar + Grid) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* --- 3a. Sidebar --- */}
          <aside
            className={`lg:col-span-1 ${isFilterOpen ? "" : "hidden lg:block"}`}
          >
            {/* --- Filter Toggle (Mobile) --- */}
            <div
              className="lg:hidden bg-[var(--color-surface)] p-4 rounded-lg border border-[var(--color-border)] mb-6 cursor-pointer"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FilterIcon />
                  <span className="text-[var(--color-text-primary)] font-medium">
                    Filters & Sort
                  </span>
                </div>
                <DisclosureIcon />
              </div>
            </div>

            {/* --- Filter Groups --- */}
            <div className="space-y-6">
              {/* --- Categories --- */}
              <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border)]">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full"></span>
                  Categories
                </h3>
                <ul className="space-y-3">
                  <li>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-border)] cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        id="cat-honey"
                        value="honey"
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes("honey")}
                        className="w-4 h-4 text-[var(--color-brand-primary)] bg-[var(--color-surface)] border-[var(--color-border)] rounded focus:ring-[var(--color-brand-primary)] focus:ring-2"
                      />
                      <span className="text-[var(--color-text-primary)]">
                        Raw Honey
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-border)] cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        id="cat-oils"
                        value="oils"
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes("oils")}
                        className="w-4 h-4 text-[var(--color-brand-primary)] bg-[var(--color-surface)] border-[var(--color-border)] rounded focus:ring-[var(--color-brand-primary)] focus:ring-2"
                      />
                      <span className="text-[var(--color-text-primary)]">
                        Ghee & Oils
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-border)] cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        id="cat-teas"
                        value="teas"
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes("teas")}
                        className="w-4 h-4 text-[var(--color-brand-primary)] bg-[var(--color-surface)] border-[var(--color-border)] rounded focus:ring-[var(--color-brand-primary)] focus:ring-2"
                      />
                      <span className="text-[var(--color-text-primary)]">
                        Artisanal Teas
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-border)] cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        id="cat-seeds"
                        value="seeds"
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes("seeds")}
                        className="w-4 h-4 text-[var(--color-brand-primary)] bg-[var(--color-surface)] border-[var(--color-border)] rounded focus:ring-[var(--color-brand-primary)] focus:ring-2"
                      />
                      <span className="text-[var(--color-text-primary)]">
                        Seeds & Spices
                      </span>
                    </label>
                  </li>
                </ul>
              </div>

              {/* --- Price --- */}
              <div className="bg-[var(--color-surface)] p-6 rounded-lg border border-[var(--color-border)]">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-brand-primary)] rounded-full"></span>
                  Price Range
                </h3>
                <ul className="space-y-3">
                  <li>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-border)] cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        id="price-all"
                        name="price"
                        value="all"
                        onChange={handlePriceChange}
                        checked={selectedPrice === "all"}
                        className="w-4 h-4 text-[var(--color-brand-primary)] bg-[var(--color-surface)] border-[var(--color-border)] focus:ring-[var(--color-brand-primary)] focus:ring-2"
                      />
                      <span className="text-[var(--color-text-primary)]">
                        All Prices
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-border)] cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        id="price-1"
                        name="price"
                        value="0-15"
                        onChange={handlePriceChange}
                        checked={selectedPrice === "0-15"}
                        className="w-4 h-4 text-[var(--color-brand-primary)] bg-[var(--color-surface)] border-[var(--color-border)] focus:ring-[var(--color-brand-primary)] focus:ring-2"
                      />
                      <span className="text-[var(--color-text-primary)]">
                        $0 - $15
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-border)] cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        id="price-2"
                        name="price"
                        value="15-25"
                        onChange={handlePriceChange}
                        checked={selectedPrice === "15-25"}
                        className="w-4 h-4 text-[var(--color-brand-primary)] bg-[var(--color-surface)] border-[var(--color-border)] focus:ring-[var(--color-brand-primary)] focus:ring-2"
                      />
                      <span className="text-[var(--color-text-primary)]">
                        $15 - $25
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--color-border)] cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        id="price-3"
                        name="price"
                        value="25+"
                        onChange={handlePriceChange}
                        checked={selectedPrice === "25+"}
                        className="w-4 h-4 text-[var(--color-brand-primary)] bg-[var(--color-surface)] border-[var(--color-border)] focus:ring-[var(--color-brand-primary)] focus:ring-2"
                      />
                      <span className="text-[var(--color-text-primary)]">
                        $25+
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* --- 3b. Main Content --- */}
          <main className="lg:col-span-3">
            {/* --- Sort Controls --- */}
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <label
                  htmlFor="sort-by"
                  className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                >
                  Sort by:
                </label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={handleSortChange}
                  className="appearance-none bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-4 py-2 pr-8 text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)]"
                >
                  <option value="default">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="title-asc">Alphabetically, A-Z</option>
                  <option value="title-desc">Alphabetically, Z-A</option>
                </select>
                <ChevronDownIcon />
              </div>
            </div>

            {/* --- Product Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id.toString()}
                    imageUrl={product.imageUrl}
                    title={product.title}
                    description={product.description}
                    price={`$${product.price.toFixed(2)}`}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                ))
              ) : (
                <p className="text-center text-[var(--color-text-secondary)] py-12 col-span-full">
                  No products found matching your criteria.
                </p>
              )}
            </div>

            {/* --- Pagination --- */}
            {totalPages > 1 && (
              <nav className="flex justify-center items-center gap-2 mt-8">
                <button
                  className="px-4 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &larr;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`px-4 py-2 border border-[var(--color-border)] rounded-lg transition-colors duration-200 ${
                        currentPage === page
                          ? "bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-text)] border-[var(--color-brand-primary)]"
                          : "bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)]"
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className="px-4 py-2 border border-[var(--color-border)] rounded-lg bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:bg-[var(--color-border)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  &rarr;
                </button>
              </nav>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
