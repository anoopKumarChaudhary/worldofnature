"use client";

import React, { useState, useMemo, ChangeEvent } from "react";
import Link from "next/link";
import ProductCard from "../components/ProductCard"; // Adjust path if needed
import { useDispatch } from "react-redux";
import { addToCart, CartItem } from "../redux/features/cart/cartSlice";

// --- ONLY import shop.module.css ---
import shopStyles from "./shop.module.css";
// --- UPDATED: Import only the icons we need ---
import { Filter, ChevronDown } from "lucide-react";

// --- Dummy Product Data ---
const allProducts = [
  {
    id: 1,
    imageUrl: "/wonh5.jpeg",
    title: "Wild Forest Honey",
    description: "Rich, raw, and unprocessed honey from wild forests.",
    price: 18.0,
    category: "honey",
  },
  {
    id: 2,
    imageUrl: "/wonf1.JPG",
    title: "A2 Bilona Ghee",
    description: "Traditional Bilona method A2 Ghee for pure nourishment.",
    price: 24.5,
    category: "oils",
  },
  {
    id: 3,
    imageUrl: "/woni2.png",
    title: "Cold-Pressed Mustard Oil",
    description: "Pure, cold-pressed mustard oil, full of natural flavor.",
    price: 12.0,
    category: "oils",
  },
  {
    id: 4,
    imageUrl: "/wono1.jpeg",
    title: "Assam Black Tea",
    description: "A robust and malty black tea from heritage gardens.",
    price: 15.0,
    category: "teas",
  },
  {
    id: 5,
    imageUrl: "/woni2.png",
    title: "Roasted Flax Seeds",
    description: "Organic roasted flax seeds, rich in Omega-3.",
    price: 9.5,
    category: "seeds",
  },
  {
    id: 6,
    imageUrl: "/woni2.png",
    title: "Himalayan Multi-Flora",
    description: "A delicate and floral honey from high-altitude blossoms.",
    price: 21.0,
    category: "honey",
  },
  {
    id: 7,
    imageUrl: "/woni2.png",
    title: "Turmeric Latte Mix",
    description: "A warming blend of turmeric and spices.",
    price: 16.5,
    category: "seeds",
  },
  {
    id: 8,
    imageUrl: "/woni2.png",
    title: "Green Tea Leaves",
    description: "Whole leaf green tea, rich in antioxidants.",
    price: 14.0,
    category: "teas",
  },
  {
    id: 9,
    imageUrl: "/c4.png",
    title: "Cold-Pressed Coconut Oil",
    description: "Virgin coconut oil, perfect for cooking or skincare.",
    price: 19.0,
    category: "oils",
  },
  {
    id: 10,
    imageUrl: "/woni2.png",
    title: "Acacia Honey",
    description: "A light and clear honey with a mild taste.",
    price: 22.0,
    category: "honey",
  },
];

const PRODUCTS_PER_PAGE = 6;

// --- Icons ---
// UPDATED: Added className for styling
const FilterIcon = () => <Filter className={shopStyles.filterIcon} />;

// UPDATED: Replaced Droplet with ChevronDown
const ChevronDownIcon = () => <ChevronDown className={shopStyles.sortIcon} />;

// UPDATED: Replaced inline SVG with ChevronDown
const DisclosureIcon = () => (
  <ChevronDown className={shopStyles.disclosureIcon} />
);

const ShopPage = () => {
  const dispatch = useDispatch();
  // --- All state and logic remains identical ---
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

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
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const filteredProducts = useMemo(() => {
    let products = [...allProducts];
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
  }, [selectedCategories, selectedPrice]);

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
    <section className={shopStyles.lightSection}>
      <div className={shopStyles.container}>
        {/* --- 1. Shop Header --- */}
        <div className={shopStyles.shopHeader}>
          <h1 className={shopStyles.sectionTitle}>Shop All Products</h1>
          <p className={shopStyles.sectionSubtitle}>
            Browse our full collection of organic, sustainably-sourced goods.
          </p>
        </div>

        {/* --- 2. Main Shop Layout (Sidebar + Grid) --- */}
        <div className={shopStyles.shopLayout}>
          {/* --- 2a. Sidebar --- */}
          <aside
            className={`${shopStyles.shopSidebar} ${
              isFilterOpen ? shopStyles.sidebarActive : ""
            }`}
          >
            <div
              className={shopStyles.filterToggle}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className={shopStyles.filterToggleLeft}>
                <FilterIcon />
                <span>Filter & Sort</span>
              </div>
              <DisclosureIcon />
            </div>

            <div className={shopStyles.filterGroups}>
              <div className={shopStyles.filterGroup}>
                <h3 className={shopStyles.filterTitle}>Categories</h3>
                <ul className={shopStyles.filterList}>
                  <li className={shopStyles.filterItem}>
                    <input
                      type="checkbox"
                      id="cat-honey"
                      value="honey"
                      onChange={handleCategoryChange}
                      checked={selectedCategories.includes("honey")}
                    />
                    <label htmlFor="cat-honey">Raw Honey</label>
                  </li>
                  <li className={shopStyles.filterItem}>
                    <input
                      type="checkbox"
                      id="cat-oils"
                      value="oils"
                      onChange={handleCategoryChange}
                      checked={selectedCategories.includes("oils")}
                    />
                    <label htmlFor="cat-oils">Ghee & Oils</label>
                  </li>
                  <li className={shopStyles.filterItem}>
                    <input
                      type="checkbox"
                      id="cat-teas"
                      value="teas"
                      onChange={handleCategoryChange}
                      checked={selectedCategories.includes("teas")}
                    />
                    <label htmlFor="cat-teas">Artisanal Teas</label>
                  </li>
                  <li className={shopStyles.filterItem}>
                    <input
                      type="checkbox"
                      id="cat-seeds"
                      value="seeds"
                      onChange={handleCategoryChange}
                      checked={selectedCategories.includes("seeds")}
                    />
                    <label htmlFor="cat-seeds">Seeds & Spices</label>
                  </li>
                </ul>
              </div>

              <div className={shopStyles.filterGroup}>
                <h3 className={shopStyles.filterTitle}>Price</h3>
                <ul className={shopStyles.filterList}>
                  <li className={shopStyles.filterItem}>
                    <input
                      type="radio"
                      id="price-all"
                      name="price"
                      value="all"
                      onChange={handlePriceChange}
                      checked={selectedPrice === "all"}
                    />
                    <label htmlFor="price-all">All</label>
                  </li>
                  <li className={shopStyles.filterItem}>
                    <input
                      type="radio"
                      id="price-1"
                      name="price"
                      value="0-15"
                      onChange={handlePriceChange}
                      checked={selectedPrice === "0-15"}
                    />
                    <label htmlFor="price-1">$0 - $15</label>
                  </li>
                  <li className={shopStyles.filterItem}>
                    <input
                      type="radio"
                      id="price-2"
                      name="price"
                      value="15-25"
                      onChange={handlePriceChange}
                      checked={selectedPrice === "15-25"}
                    />
                    <label htmlFor="price-2">$15 - $25</label>
                  </li>
                  <li className={shopStyles.filterItem}>
                    <input
                      type="radio"
                      id="price-3"
                      name="price"
                      value="25+"
                      onChange={handlePriceChange}
                      checked={selectedPrice === "25+"}
                    />
                    <label htmlFor="price-3">$25+</label>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          {/* --- 2b. Main Product Area --- */}
          <main className={shopStyles.shopMain}>
            {/* --- Sort Dropdown --- */}
            <div className={shopStyles.sortControls}>
              <div className={shopStyles.sortWrapper}>
                <label htmlFor="sort-by">Sort by:</label>
                <select
                  id="sort-by"
                  className={shopStyles.sortDropdown}
                  value={sortBy}
                  onChange={handleSortChange}
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
            <div className={shopStyles.productGrid}>
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
                <p className={shopStyles.noProducts}>
                  No products found matching your criteria.
                </p>
              )}
            </div>

            {/* --- Pagination --- */}
            {totalPages > 1 && (
              <nav className={shopStyles.paginationControls}>
                <button
                  className={shopStyles.paginationButton}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &larr;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`${shopStyles.paginationButton} ${
                        currentPage === page ? shopStyles.paginationActive : ""
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  className={shopStyles.paginationButton}
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
