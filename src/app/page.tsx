

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
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

      {/* --- 8. TESTIMONIALS (Field Notes) --- */}
      {/* BACKGROUND: Sage (#A9AB94) to bridge Dark Impact and Footer */}
      <section className="relative py-24 lg:py-32 bg-[#A9AB94] text-[#2C3326] overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>
         
         <div className="container mx-auto relative z-10 max-w-4xl px-4 md:px-6 text-center">
            
            <div className="mb-10 flex justify-center">
               <div className="w-12 h-12 rounded-full border border-[#2C3326]/20 bg-[#F2F3EE]/20 flex items-center justify-center text-[#2C3326]">
                  <Quote className="w-5 h-5 fill-current" />
               </div>
            </div>

            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-10 text-[#2C3326]">
              &quot;It’s rare to find food that feels like it still has its <span className="text-[#F2F3EE] italic">soul</span>. This honey tastes like the wild forest it came from.&quot;
            </h2>
            
            <div className="flex flex-col items-center gap-2">
               <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#2C3326] text-[#2C3326]" />
                  ))}
               </div>
               <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#2C3326]">
                  Elena R. — Verified Buyer
               </p>
               <span className="font-sans text-[10px] text-[#2C3326]/60 uppercase tracking-widest font-bold">
                  Purchased: Raw Wild Honey
               </span>
            </div>
         </div>
      </section>

      {/* --- 9. CONTACT SECTION --- */}
      {/* Passed 'bg-[#F2F3EE]' to keep it light before the dark footer */}
      <ContactSection className="bg-[#F2F3EE]" />

      {/* --- 10. FOOTER CTA (Cinematic Outro) --- */}
      {/* BACKGROUND: Dark Olive (#2C3326) */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#2C3326] text-[#F2F3EE] overflow-hidden">
        
        {/* Deep Texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        
        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F140E]/80"></div>
        
        <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl">
           <span className="block font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 text-[#8C9178]">
              The Journey Begins Here
           </span>
           
           <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl mb-12 text-[#F2F3EE] leading-none">
              Rewild <span className="opacity-50 italic font-light text-[#8C9178]">Your</span> <br/> Pantry.
           </h2>
           
           <Link 
             href="/shop"
             className="
               group inline-flex items-center gap-4 px-10 py-5 
               bg-[#F2F3EE] text-[#2C3326] 
               rounded-sm 
               hover:bg-[#8C9178] hover:text-[#F2F3EE] 
               transition-all duration-500 
               shadow-2xl hover:shadow-[#000]/20
             "
           >
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em]">Start Foraging</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;