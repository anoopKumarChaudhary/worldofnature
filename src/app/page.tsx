

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Star, MoveRight, Quote, Sprout } from "lucide-react";
import { productsAPI, Product } from "./services/api";
import ProductCard from "./components/ProductCard";

// === DYNAMIC IMPORTS ===
// Loading states matched to the Dark Olive theme
const HeroSection = dynamic(() => import("./components/home/HeroSection"), {
  loading: () => <div className="h-screen bg-[#2C3326]" />,
});
const PhilosophySection = dynamic(() => import("./components/home/PhilosophySection"));
const CollectionsSection = dynamic(() => import("./components/home/CollectionsSection"));
const HarvestSection = dynamic(() => import("./components/home/HarvestSection")); 
const ImpactSection = dynamic(() => import("./components/home/ImpactSection"));
const RitualsSection = dynamic(() => import("./components/home/RitualsSection"));
const ContactSection = dynamic(() => import("./components/home/ContactSection"));

const HomePage = async () => {
  // === DATA FETCHING ===
  let featuredProducts: Product[] = [];
  try {
    const products = await productsAPI.getProducts({ isBestseller: true });
    featuredProducts = products.slice(0, 4);
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    // GLOBAL THEME: Dark Olive Text on Sage/Mist Backgrounds
    <div className="relative min-h-screen text-[#2C3326] font-sans selection:bg-[#8C9178] selection:text-[#F2F3EE] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. PHILOSOPHY (Sage BG) */}
      <PhilosophySection />

      {/* 3. COLLECTIONS (Sage BG - Seamless Flow) */}
      <CollectionsSection />

      {/* 4. RITUALS (Sage BG - Timeline) */}
      <RitualsSection />

      {/* 5. PHENOLOGY / HARVEST (Sticky Section) */}
      <HarvestSection />

      {/* --- 6. CURATED ESSENTIALS (Shop) --- */}
      {/* BACKGROUND: Pale Mist (#F2F3EE) for contrast against Sage/Olive */}
      <section className="relative py-24 lg:py-32 bg-[#F2F3EE]">
        
        {/* Texture: Organic Dust */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        
        <div className="container mx-auto relative z-10 max-w-7xl px-4 md:px-6 lg:px-12">
          
          {/* HEADER: Editorial Style */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-[#2C3326]/10 pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                 <Sprout className="w-4 h-4 text-[#8C9178]" />
                 <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C9178]">
                   Catalogue No. 02
                 </span>
              </div>
              <h2 className="font-serif text-5xl lg:text-7xl text-[#2C3326] leading-[0.95]">
                The <span className="italic text-[#8C9178] font-light">Formulations.</span>
              </h2>
            </div>
            
            <div className="hidden md:block pb-2">
               <Link 
                 href="/shop"
                 className="group inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest text-[#2C3326] hover:text-[#8C9178] transition-colors"
               >
                 View Full Inventory 
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
            {featuredProducts.map((product: Product) => (
              <div key={product._id} className="w-full group">
                <div className="transition-all duration-700 hover:-translate-y-2">
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
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile "View All" Button */}
          <div className="mt-12 md:hidden flex justify-center">
             <Link 
               href="/shop"
               className="inline-flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-widest text-[#2C3326] border-b border-[#2C3326] pb-1"
             >
               View All Products
             </Link>
          </div>

        </div>
      </section>

      {/* 7. IMPACT STANDARDS (Dark Olive BG - High Contrast) */}
      <ImpactSection />

      {/* --- 9. CONTACT SECTION --- */}
      {/* Passed 'bg-[#F2F3EE]' to keep it light before the dark footer */}
      <ContactSection className="bg-[#F2F3EE]" />
      
    </div>
  );
};

export default HomePage;