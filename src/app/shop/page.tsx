"use client";

import React, { useState, useMemo, ChangeEvent } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard"; // Adjust path if needed
import { useDispatch } from "react-redux";
import { addToCart, CartItem } from "../redux/features/cart/cartSlice";
import styles from "./shop.module.css";

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
    <section className="bg-[var(--shop-bg)] text-[var(--shop-text)] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* --- 1. Shop Header --- */}
        <div className={styles.shopHeader}>
          <h1 className={styles.shopTitle}>Shop All Products</h1>
          <p className={styles.shopSubtitle}>
            Browse our full collection of organic, sustainably-sourced goods.
          </p>
        </div>

        {/* --- 2. Search Bar --- */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
        </div>

        {/* --- 3. Main Shop Layout (Sidebar + Grid) --- */}
        <div className={styles.shopLayout}>
          {/* --- 3a. Sidebar --- */}
          <aside
            className={`${styles.sidebar} ${styles.sticky} ${
              isFilterOpen ? "" : "hidden lg:block"
            }`}
          >
            {/* --- Filter Toggle (Mobile) --- */}
            <div
              className={`${styles.filterToggle} lg:hidden`}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className="flex items-center gap-3">
                <FilterIcon />
                <span className={styles.text}>Filters & Sort</span>
              </div>
              <DisclosureIcon />
            </div>

            {/* --- Filter Groups --- */}
            <div className="space-y-6">
              {/* --- Categories --- */}
              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>
                  <span className={styles.indicator}></span>
                  Categories
                </h3>
                <ul className={styles.filterList}>
                  <li className={styles.filterItem}>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        id="cat-honey"
                        value="honey"
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes("honey")}
                        className={styles.filterCheckbox}
                      />
                      <span className={styles.filterLabel}>Raw Honey</span>
                    </label>
                  </li>
                  <li className={styles.filterItem}>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        id="cat-oils"
                        value="oils"
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes("oils")}
                        className={styles.filterCheckbox}
                      />
                      <span className={styles.filterLabel}>Ghee & Oils</span>
                    </label>
                  </li>
                  <li className={styles.filterItem}>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        id="cat-teas"
                        value="teas"
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes("teas")}
                        className={styles.filterCheckbox}
                      />
                      <span className={styles.filterLabel}>Artisanal Teas</span>
                    </label>
                  </li>
                  <li className={styles.filterItem}>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="checkbox"
                        id="cat-seeds"
                        value="seeds"
                        onChange={handleCategoryChange}
                        checked={selectedCategories.includes("seeds")}
                        className={styles.filterCheckbox}
                      />
                      <span className={styles.filterLabel}>Seeds & Spices</span>
                    </label>
                  </li>
                </ul>
              </div>

              {/* --- Price --- */}
              <div className={styles.filterGroup}>
                <h3 className={styles.filterTitle}>
                  <span className={styles.indicator}></span>
                  Price Range
                </h3>
                <ul className={styles.filterList}>
                  <li className={styles.filterItem}>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        id="price-all"
                        name="price"
                        value="all"
                        onChange={handlePriceChange}
                        checked={selectedPrice === "all"}
                        className={styles.filterCheckbox}
                      />
                      <span className={styles.filterLabel}>All Prices</span>
                    </label>
                  </li>
                  <li className={styles.filterItem}>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        id="price-1"
                        name="price"
                        value="0-15"
                        onChange={handlePriceChange}
                        checked={selectedPrice === "0-15"}
                        className={styles.filterCheckbox}
                      />
                      <span className={styles.filterLabel}>$0 - $15</span>
                    </label>
                  </li>
                  <li className={styles.filterItem}>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        id="price-2"
                        name="price"
                        value="15-25"
                        onChange={handlePriceChange}
                        checked={selectedPrice === "15-25"}
                        className={styles.filterCheckbox}
                      />
                      <span className={styles.filterLabel}>$15 - $25</span>
                    </label>
                  </li>
                  <li className={styles.filterItem}>
                    <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        id="price-3"
                        name="price"
                        value="25+"
                        onChange={handlePriceChange}
                        checked={selectedPrice === "25+"}
                        className={styles.filterCheckbox}
                      />
                      <span className={styles.filterLabel}>$25+</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* --- 3b. Main Content --- */}
          <main>
            {/* --- Sort Controls --- */}
            <div className={styles.sortControls}>
              <div className={styles.sortSelectContainer}>
                <label htmlFor="sort-by" className={styles.sortLabel}>
                  Sort by:
                </label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={handleSortChange}
                  className={styles.sortSelect}
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
            <div className={styles.productGrid}>
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
                <p className={styles.noProducts}>
                  No products found matching your criteria.
                </p>
              )}
            </div>

            {/* --- Pagination --- */}
            {totalPages > 1 && (
              <nav className={styles.pagination}>
                <button
                  className={styles.pageButton}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &larr;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`${styles.pageButton} ${
                        currentPage === page ? styles.active : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className={styles.pageButton}
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
