

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Star, MoveRight, Quote } from "lucide-react";
import { productsAPI, Product } from "./services/api";
import ProductCard from "./components/ProductCard";

// === DYNAMIC IMPORTS ===
// Assuming these components have been updated with the code provided in previous turns.
const HeroSection = dynamic(() => import("./components/home/HeroSection"), {
  loading: () => <div className="h-screen bg-[#0F140E]" />,
});
const PhilosophySection = dynamic(() => import("./components/home/PhilosophySection"));
const CollectionsSection = dynamic(() => import("./components/home/CollectionsSection"));
const HarvestSection = dynamic(() => import("./components/home/HarvestSection")); // Now the "Phenology" section
const ImpactSection = dynamic(() => import("./components/home/ImpactSection"));
// JournalSection is often better as a standard import if small, but dynamic is fine.
const JournalSection = dynamic(() => import("./components/home/JournalSection"));
const RitualsSection = dynamic(() => import("./components/home/RitualsSection"));

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
    // GLOBAL THEME: Warm Stone Background, Dark Text
    <div className="relative min-h-screen bg-[#EBE9E4] text-[#1A2118] font-sans selection:bg-[#B56B56] selection:text-[#EBE9E4] overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OUR PHILOSOPHY (The "Untouched" Section) */}
      <PhilosophySection />

      {/* 3. FEATURED COLLECTIONS (The "Archive" Grid) */}
      <CollectionsSection />

      {/* 4. PHENOLOGY / HARVEST (The "Almanac" Sticky Section) */}
      <HarvestSection />

      {/* 5. RITUALS (Application) */}
      <RitualsSection />

      {/* --- 6. CURATED ESSENTIALS (The Shop) --- */}
      {/* Redesigned to match the "Museum/Archive" aesthetic */}
      <section className="relative py-24 lg:py-32 bg-[#EBE9E4]">
        
        {/* Texture */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        
        <div className="container mx-auto relative z-10 max-w-7xl px-6 lg:px-12">
          
          {/* HEADER: Editorial Style */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 border-b border-[#1A2118]/10 pb-8">
            <div className="max-w-2xl">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.25em] text-[#B56B56] mb-4 block">
                Catalogue No. 02
              </span>
              <h2 className="font-heading text-5xl lg:text-7xl text-[#1A2118] leading-[0.95] font-medium">
                The <span className="italic font-serif font-light text-[#1A2118]/60">Formulations.</span>
              </h2>
            </div>
            
            <div className="hidden md:block pb-2">
               <Link 
                 href="/shop"
                 className="group inline-flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#1A2118] hover:text-[#B56B56] transition-colors"
               >
                 View Full Inventory 
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {featuredProducts.map((product: Product) => (
              <div key={product._id} className="w-full group">
                {/* NOTE: Ensure ProductCard component is updated to handle 
                   transparent backgrounds or matches the #EBE9E4 theme 
                */}
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
               className="inline-flex items-center gap-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#1A2118] border-b border-[#1A2118] pb-1"
             >
               View All Products
             </Link>
          </div>

        </div>
      </section>

      {/* 7. JOURNAL (Field Notes) */}
      <JournalSection />

      {/* 8. IMPACT STANDARDS (The "Covenant" Dark Section) */}
      <ImpactSection />

      {/* --- 7. TESTIMONIALS (Redesigned as "Field Notes") --- */}
      <section className="relative py-32 bg-[#EBE9E4] text-[#1A2118] overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
         
         {/* Subtle Border Top */}
         <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#1A2118]/10 mx-6 lg:mx-12" />

         <div className="container mx-auto relative z-10 max-w-4xl px-6 text-center">
            
            <div className="mb-12 flex justify-center">
               <div className="w-12 h-12 rounded-full bg-[#1A2118]/5 flex items-center justify-center text-[#B56B56]">
                  <Quote className="w-5 h-5 fill-current" />
               </div>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12 font-medium text-[#1A2118]">
              "It’s rare to find food that feels like it still has its <span className="text-[#B56B56] italic font-serif">soul</span>. This honey tastes like the wild forest it came from."
            </h2>
            
            <div className="flex flex-col items-center gap-2">
               <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#1A2118] text-[#1A2118]" />
                  ))}
               </div>
               <p className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[#1A2118]">
                  Elena R. — Verified Buyer
               </p>
               <span className="font-mono text-[10px] text-[#1A2118]/40 uppercase tracking-widest">
                  Purchased: Raw Wild Honey
               </span>
            </div>
         </div>
      </section>

      {/* --- 8. FOOTER CTA (The "Cinematic Outro") --- */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#B56B56] text-[#EBE9E4] overflow-hidden">
        
        {/* Deep Texture for tactile feel */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        
        {/* Noise overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl">
           <span className="block font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.4em] mb-8 text-[#EBE9E4]/80">
              The Journey Begins Here
           </span>
           
           <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl mb-12 font-bold tracking-tight text-[#EBE9E4]">
              Rewild <span className="opacity-70 italic font-serif font-light">Your</span> <br/> Pantry.
           </h2>
           
           <Link 
             href="/shop"
             className="group inline-flex items-center gap-4 px-12 py-6 bg-[#0F140E] text-[#EBE9E4] rounded-sm hover:bg-[#1A2118] transition-all duration-500 shadow-2xl hover:shadow-[#0F140E]/40"
           >
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.25em]">Start Foraging</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;