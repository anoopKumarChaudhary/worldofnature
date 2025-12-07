import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { productsAPI, Product } from "./services/api";
import ProductCard from "./components/ProductCard";

// Dynamic Imports
const HeroSection = dynamic(() => import("./components/home/HeroSection"), {
  loading: () => <div className="h-screen bg-[#F2F0EA]" />,
});
const PhilosophySection = dynamic(() => import("./components/home/PhilosophySection"));
const CollectionsSection = dynamic(() => import("./components/home/CollectionsSection"));
const HarvestSection = dynamic(() => import("./components/home/HarvestSection"));
const JournalSection = dynamic(() => import("./components/home/JournalSection"));
const TestimonialsSection = dynamic(() => import("./components/home/TestimonialsSection"));
const CTASection = dynamic(() => import("./components/home/CTASection"));

const HomePage = async () => {
  // Server-side data fetching
  let featuredProducts: Product[] = [];
  try {
    const products = await productsAPI.getProducts({ isBestseller: true });
    featuredProducts = products.slice(0, 4);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <div className="relative min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden">
      {/* --- CSS Styles moved to globals.css --- */}



      {/* --- 1. HERO SECTION --- */}
      <HeroSection />



      {/* --- 2. OUR PHILOSOPHY --- */}
      <PhilosophySection />

      {/* --- 3. FEATURED COLLECTIONS --- */}
      <CollectionsSection />

      {/* --- 4. THE HARVEST CYCLE --- */}
      <HarvestSection />

      {/* --- 5. CURATED ESSENTIALS (Product Grid) --- */}
      <section className="py-24 px-0 bg-[#F2F0EA]">
        <div className="container-custom mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1A2118] mb-4">Curated Essentials</h2>
            <p className="text-[#596157] font-light">Small batch releases from our latest harvest.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {featuredProducts.map((product: Product) => (
              <div key={product._id} className="w-full">
                <ProductCard
                  id={product._id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  isBestseller={product.isBestseller}
                  isOnSale={product.isOnSale}
                  isNew={product.isNew}
                  // onAddToCart and onToggleWishlist are handled internally by ProductCard or not passed
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              href="/shop"
              className="inline-block px-10 py-4 border border-[#1A2118] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#1A2118] hover:text-[#F2F0EA] transition-all"
            >
              Shop All Products
            </Link>
          </div>
        </div>
      </section>

      {/* --- 6. JOURNAL --- */}
      <JournalSection />

      {/* --- 7. TESTIMONIALS --- */}
      <TestimonialsSection />

      {/* --- 8. FOOTER CTA --- */}
      <CTASection />
    </div>
  );
};

export default HomePage;
