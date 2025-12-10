

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Star, MoveRight } from "lucide-react"; // Added icons
import { productsAPI, Product } from "./services/api";
import ProductCard from "./components/ProductCard";

// Dynamic Imports
const HeroSection = dynamic(() => import("./components/home/HeroSection"), {
  loading: () => <div className="h-screen bg-[#1A2118]" />,
});
const PhilosophySection = dynamic(() => import("./components/home/PhilosophySection"));
const CollectionsSection = dynamic(() => import("./components/home/CollectionsSection"));
const HarvestSection = dynamic(() => import("./components/home/HarvestSection"));
const JournalSection = dynamic(() => import("./components/home/JournalSection"));
const TestimonialsSection = dynamic(() => import("./components/home/TestimonialsSection"));
const ImpactSection = dynamic(() => import("./components/home/ImpactSection"));
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
    <div className="relative min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#B56B56] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OUR PHILOSOPHY */}
      <PhilosophySection />

      {/* 3. FEATURED COLLECTIONS */}
      <CollectionsSection />

      {/* 3.5 IMPACT / WHY CHOOSE US */}
      <ImpactSection />

      {/* 4. THE HARVEST CYCLE */}
      <HarvestSection />

      {/* --- 5. CURATED ESSENTIALS (UPGRADED) --- */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-[#F2F0EA]">
        {/* Texture & Structure */}
        <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-[1px] bg-[#1A2118]/5 pointer-events-none" />
        <div className="absolute right-6 lg:right-12 top-0 bottom-0 w-[1px] bg-[#1A2118]/5 pointer-events-none" />

        <div className="container-custom mx-auto relative z-10 max-w-7xl">
          
          {/* Section Header: Architectural Style */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-8 border-b border-[#1A2118]/10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                 <span className="w-6 h-[1px] bg-[#B56B56]"></span>
                 <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.3em] text-[#B56B56]">
                   The Apothecary
                 </span>
              </div>
              <h2 className="font-heading text-5xl lg:text-7xl text-[#1A2118] leading-[0.9] font-bold">
                Curated <br/>
                <span className="font-light text-[#596157]">Essentials.</span>
              </h2>
            </div>
            
            <div className="mt-8 md:mt-0">
               <Link 
                 href="/shop"
                 className="group inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#1A2118] hover:text-[#B56B56] transition-colors"
               >
                 View Full Shop <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featuredProducts.map((product: Product) => (
              <div key={product._id} className="w-full group">
                {/* We wrap the card to add hover lifts or specific interaction styles */}
                <div className="transition-transform duration-500 hover:-translate-y-2">
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
        </div>
      </section>

      {/* --- 6. JOURNAL (UPGRADED: "Field Notes") --- */}
      {/* Replaced generic JournalSection with inline polished version or keep import if component is updated */}
      <JournalSection />

      {/* --- 7. TESTIMONIALS (UPGRADED: "Voices") --- */}
      <section className="py-24 bg-[#1A2118] text-[#F2F0EA] relative overflow-hidden">
         <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         
         <div className="container-custom mx-auto relative z-10 max-w-4xl text-center">
            <div className="inline-flex items-center gap-3 mb-8 opacity-60">
               <Star className="w-4 h-4 fill-[#B56B56] text-[#B56B56]" />
               <Star className="w-4 h-4 fill-[#B56B56] text-[#B56B56]" />
               <Star className="w-4 h-4 fill-[#B56B56] text-[#B56B56]" />
               <Star className="w-4 h-4 fill-[#B56B56] text-[#B56B56]" />
               <Star className="w-4 h-4 fill-[#B56B56] text-[#B56B56]" />
            </div>
            
            <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-12 font-semibold">
              &quot;It’s rare to find food that feels like it still has its <span className="text-[#B56B56]">soul</span>. This honey tastes like the wild forest it came from.&quot;
            </h2>
            
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-full bg-[#F2F0EA]/10 mb-4 overflow-hidden relative">
                  {/* Placeholder for user avatar or initial */}
                  <div className="absolute inset-0 flex items-center justify-center font-heading text-2xl font-bold">E</div>
               </div>
               <p className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-[#B56B56]">Elena R.</p>
               <p className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-widest opacity-50 mt-1">Verified Buyer • Raw Honey</p>
            </div>
         </div>
      </section>

      {/* --- 8. FOOTER CTA (UPGRADED: "Cinematic Outro") --- */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[#B56B56] text-[#F2F0EA] overflow-hidden">
        {/* Moving Grain */}
        <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
        
        <div className="relative z-10 text-center px-6">
           <span className="block font-[family-name:var(--font-montserrat)] text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-6 opacity-80">
              Join the Movement
           </span>
           <h2 className="font-heading text-6xl md:text-8xl lg:text-9xl mb-12 font-bold">
              Rewild <span className="opacity-80">Your</span> <br/> Pantry.
           </h2>
           
           <Link 
             href="/shop"
             className="inline-flex items-center gap-4 px-10 py-5 bg-[#1A2118] text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl"
           >
              <span className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-widest">Start Foraging</span>
              <MoveRight className="w-4 h-4" />
           </Link>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;