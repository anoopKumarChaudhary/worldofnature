"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/features/cart/cartSlice";
import { productsAPI, Product } from "./services/api";
import ProductCard from "./components/ProductCard";
import {
  ArrowRight,
  Star,
  MoveRight,
  CheckCircle2,
  Sprout,
  Droplets,
  Globe,
  ShieldCheck,
  Sun,
  Wind,
  CloudRain,
  Leaf,
  Quote,
} from "lucide-react";

const HomePage = () => {
  const dispatch = useDispatch();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await productsAPI.getProducts({ isBestseller: true });
        setFeaturedProducts(products.slice(0, 4)); // Limit to 4 for the grid
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (product: { id: string; name: string; price: number; image: string }, quantity: number) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        size: "Standard", // Default size
      })
    );
  };

  const handleToggleWishlist = (id: string) => {
    console.log("Toggle wishlist for:", id);
  };

  const categories = [
    {
      id: "honey",
      label: "Raw Honey",
      image: "/won23.JPG",
      desc: "Unfiltered sweetness from wild hives.",
      link: "/shop?category=honey",
    },
    {
      id: "ghee",
      label: "Vedic Ghee",
      image: "/won32.JPG",
      desc: "Golden nourishment, traditionally churned.",
      link: "/shop?category=ghee",
    },
    {
      id: "spices",
      label: "Heirloom Spices",
      image: "/won8.JPG",
      desc: "Potent aromas from ancient soils.",
      link: "/shop?category=spices",
    },
  ];

  const journalEntries = [
    {
      id: 1,
      title: "The Art of Slow Beekeeping",
      date: "October 12, 2025",
      excerpt: "Why we wait for the bees to finish their work before we begin ours.",
      image: "/won11.JPG",
    },
    {
      id: 2,
      title: "Soil Health & Human Health",
      date: "September 28, 2025",
      excerpt: "Exploring the microbial connection between the earth and our gut.",
      image: "/won2.JPG",
    },
    {
      id: 3,
      title: "A Morning in the Ghats",
      date: "September 15, 2025",
      excerpt: "Harvesting wild pepper in the mist-covered hills of Kerala.",
      image: "/won19.JPG",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden">
      {/* --- CSS Styles --- */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}</style>

      {/* --- NOISE TEXTURE OVERLAY --- */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- 1. HERO SECTION (Cinematic Nature) --- */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-[#F2F0EA] text-[#1A2118]">
        
        {/* CLEAN BACKGROUND (No Overlays) */}

        {/* --- CENTERED CONTENT --- */}
        <div className="container mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1A2118]/5 border border-[#1A2118]/10 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] mb-12 animate-reveal-up">
            <span className="w-2 h-2 bg-[#BC5633] rounded-full animate-pulse" />
            Est. 2025 • World of Nature
          </div>
          
          <h1 className="text-6xl lg:text-[9rem] leading-[0.85] font-serif font-bold tracking-tight mb-12 drop-shadow-sm text-[#1A2118]">
            <span className="block animate-reveal-up" style={{ animationDelay: '0.1s' }}>Nature’s</span>
            <span className="block animate-reveal-up" style={{ animationDelay: '0.2s' }}>Unfiltered</span>
            <span className="block animate-reveal-up text-[#BC5633]" style={{ animationDelay: '0.3s' }}>Intelligence.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl leading-relaxed font-light max-w-2xl mx-auto mb-16 animate-reveal-up text-balance text-[#4A5248]" style={{ animationDelay: '0.4s' }}>
            We curate essentials that are not made, but harvested. Pure, wild-crafted, and deeply connected to the source.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-reveal-up" style={{ animationDelay: '0.5s' }}>
            <Link
              href="/shop"
              className="h-16 px-12 bg-[#1A2118] text-[#F2F0EA] rounded-full flex items-center gap-3 font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
            >
              Start Foraging <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="h-16 px-12 border border-[#1A2118]/20 rounded-full flex items-center gap-3 font-bold text-sm uppercase tracking-widest hover:bg-[#1A2118] hover:text-[#F2F0EA] transition-all text-[#1A2118]"
            >
              Our Philosophy
            </Link>
          </div>
          
          {/* Watch Film Link */}
          <div className="mt-8 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
            <button className="group flex items-center gap-3 text-[#1A2118] hover:text-[#BC5633] transition-colors">
              <div className="w-10 h-10 rounded-full border border-[#1A2118]/20 flex items-center justify-center group-hover:border-[#BC5633] group-hover:scale-110 transition-all">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-current border-b-[5px] border-b-transparent ml-1" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[#BC5633]">Watch the Film</span>
            </button>
          </div>

          {/* --- PROFESSIONAL TOUCHES: TRUST BAR --- */}
          <div className="mt-16 animate-reveal-up opacity-60" style={{ animationDelay: '0.7s' }}>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-[#1A2118]/60">Trusted by Nature's Best</p>
            <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
               {/* Simple Text Logos for "Professional" Vibe */}
               <span className="font-serif text-xl italic text-[#1A2118]">Vogue Living</span>
               <span className="w-1 h-1 bg-[#1A2118]/20 rounded-full" />
               <span className="font-serif text-xl italic text-[#1A2118]">Kinfolk</span>
               <span className="w-1 h-1 bg-[#1A2118]/20 rounded-full" />
               <span className="font-serif text-xl italic text-[#1A2118]">Goop</span>
               <span className="w-1 h-1 bg-[#1A2118]/20 rounded-full" />
               <span className="font-serif text-xl italic text-[#1A2118]">Monocle</span>
            </div>
          </div>
        </div>

        {/* --- FOREGROUND FOLIAGE (Immersive Depth) --- */}
        <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-20 overflow-hidden">
           {/* Left Bush */}
           <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1A2118]/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s' }} />
           <Leaf className="absolute bottom-[-20px] left-[-20px] w-48 h-48 text-[#1A2118]/10 rotate-45 blur-[2px] animate-float" style={{ animationDuration: '10s' }} />
           
           {/* Right Bush */}
           <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#BC5633]/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '1s' }} />
           <Sprout className="absolute bottom-[-30px] right-[-10px] w-56 h-56 text-[#1A2118]/10 -rotate-12 blur-[3px] animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }} />
        </div>

        {/* --- SCROLL INDICATOR --- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow opacity-60 mix-blend-multiply z-30">
           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A2118]">Scroll</span>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#1A2118] to-transparent" />
        </div>
      </section>

      {/* --- INFINITE MARQUEE --- */}
      <div className="py-6 bg-[#1A2118] text-[#F2F0EA] overflow-hidden border-y border-[#F2F0EA]/10 relative z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              <span className="text-sm font-bold uppercase tracking-[0.3em]">100% Organic</span>
              <span className="w-2 h-2 bg-[#BC5633] rounded-full" />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Ethically Harvested</span>
              <span className="w-2 h-2 bg-[#BC5633] rounded-full" />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Ancient Wisdom</span>
              <span className="w-2 h-2 bg-[#BC5633] rounded-full" />
              <span className="text-sm font-bold uppercase tracking-[0.3em]">Modern Science</span>
              <span className="w-2 h-2 bg-[#BC5633] rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* --- 2. OUR PHILOSOPHY (Text Heavy) --- */}
      <section className="py-24 px-6 lg:px-12 bg-[#E6E2D6]/30 relative overflow-hidden">
        {/* Background Blob */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path fill="#BC5633" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.5C59.4,45.9,47.9,55,35.3,61.8C22.7,68.6,9,73.1,-3.4,79C-15.8,84.9,-26.9,92.2,-37.6,89.5C-48.3,86.8,-58.6,74.1,-66.4,60.2C-74.2,46.3,-79.5,31.2,-81.8,15.7C-84.1,0.2,-83.4,-15.7,-76.3,-29.1C-69.2,-42.5,-55.7,-53.4,-42.3,-60.9C-28.9,-68.4,-15.6,-72.5,-0.9,-70.9C13.8,-69.3,27.6,-62,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
        </div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Sprout className="w-8 h-8 text-[#BC5633] mx-auto mb-8 animate-float" />
          <h2 className="text-3xl lg:text-5xl font-serif text-[#1A2118] mb-12 leading-tight text-balance">
            We believe that true nourishment comes from <span className="italic text-[#596157]">respecting the rhythm</span> of nature, not forcing it.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left text-[#4A5248] leading-relaxed font-light text-lg">
            <p>
              <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-[#BC5633]">I</span>
              n a world obsessed with speed and mass production, we choose to slow down. We partner with small-scale farmers who treat their land as a legacy, not a resource to be depleted. Every jar of honey, every spoon of ghee, and every pinch of spice tells a story of patience.
            </p>
            <p>
              Our products are never altered, never rushed, and never compromised. We act merely as custodians, bridging the gap between the wild, untouched forests and your modern pantry. This is not just food; it is a return to the source.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1A2118]/10 pt-12">
            {[
              { icon: Globe, label: "Single Origin" },
              { icon: ShieldCheck, label: "Lab Tested" },
              { icon: Sun, label: "Sun Dried" },
              { icon: CheckCircle2, label: "Zero Additives" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="p-3 rounded-full bg-[#1A2118]/5 group-hover:bg-[#BC5633] group-hover:text-[#F2F0EA] transition-colors duration-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. FEATURED COLLECTIONS --- */}
      <section className="py-24 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#BC5633] mb-4">The Pantry</h2>
              <h3 className="text-4xl lg:text-5xl font-serif text-[#1A2118]">Essential Collections</h3>
            </div>
            <Link href="/shop" className="hidden lg:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#BC5633] transition-colors group">
              View All <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-4 lg:gap-8 auto-rows-[400px]">
            {categories.map((cat, index) => (
              <Link 
                key={cat.id} 
                href={cat.link} 
                className={`group relative overflow-hidden rounded-3xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'} ${index === 1 ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-3xl font-serif text-[#F2F0EA] mb-2">{cat.label}</h4>
                    <p className="text-[#F2F0EA]/80 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">{cat.desc}</p>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-10 h-10 bg-[#F2F0EA] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                    <ArrowRight className="w-5 h-5 text-[#1A2118]" />
                  </div>
                </div>
              </Link>
            ))}
            {/* Add a 4th item to fill the grid if needed, or adjust styling */}
             <Link href="/shop" className="group relative overflow-hidden rounded-3xl bg-[#BC5633] flex items-center justify-center text-[#F2F0EA] md:col-span-1">
                <div className="text-center">
                  <span className="block text-4xl font-serif mb-2 group-hover:scale-110 transition-transform">View All</span>
                  <span className="text-xs uppercase tracking-widest opacity-60">The Full Pantry</span>
                </div>
             </Link>
          </div>
          
          <div className="mt-12 lg:hidden text-center">
            <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#BC5633] transition-colors">
              View All Collections <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- 4. THE HARVEST CYCLE (Seasonal Storytelling) --- */}
      <section className="py-24 bg-[#1A2118] text-[#F2F0EA] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#BC5633] mb-6">The Cycle</h2>
              <h3 className="text-4xl lg:text-6xl font-serif mb-12">Aligned with the Seasons.</h3>
              
              <div className="space-y-12 relative">
                {/* Connecting Line */}
                <div className="absolute left-[23px] top-4 bottom-4 w-px bg-[#F2F0EA]/10" />

                {[
                  { title: "Monsoon Harvest", desc: "Wild honey collection and spice planting.", icon: CloudRain },
                  { title: "Summer Curing", desc: "Sun-drying turmeric and chilies.", icon: Sun },
                  { title: "Winter Resting", desc: "The soil sleeps. We plan and prepare.", icon: Wind }
                ].map((step, i) => (
                  <div key={i} className="relative flex gap-8 group">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#1A2118] border border-[#F2F0EA]/20 flex items-center justify-center shrink-0 group-hover:border-[#BC5633] group-hover:bg-[#BC5633] transition-all duration-500">
                      <step.icon className="w-5 h-5 text-[#F2F0EA]/60 group-hover:text-[#F2F0EA] transition-colors" />
                    </div>
                    <div className="pt-2">
                      <h4 className="text-2xl font-serif mb-2 text-[#F2F0EA] group-hover:text-[#BC5633] transition-colors">{step.title}</h4>
                      <p className="text-[#F2F0EA]/40 text-sm font-light leading-relaxed max-w-sm group-hover:text-[#F2F0EA]/80 transition-colors">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square rounded-full overflow-hidden border border-[#F2F0EA]/5 p-12 relative">
                <div className="absolute inset-0 border-[1px] border-[#F2F0EA]/5 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#BC5633] rounded-full shadow-[0_0_20px_#BC5633]" />
                </div>
                <div className="w-full h-full rounded-full overflow-hidden relative group">
                   <img src="/won23.JPG" alt="Seasonal Cycle" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-[2s]" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#1A2118] to-transparent opacity-40" />
                   
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8 backdrop-blur-sm bg-black/20 rounded-full border border-white/10">
                        <p className="font-serif text-3xl italic text-[#F2F0EA]">Nature Waits <br/> for No One.</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CURATED ESSENTIALS (Product Grid) --- */}
      <section className="py-24 px-6 lg:px-12 bg-[#F2F0EA]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1A2118] mb-4">Curated Essentials</h2>
            <p className="text-[#596157] font-light">Small batch releases from our latest harvest.</p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-2 border-[#BC5633] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
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
                    onAddToCart={handleAddToCart}
                    onToggleWishlist={handleToggleWishlist}
                  />
                </div>
              ))}
            </div>
          )}
          
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

      {/* --- 6. JOURNAL (Editorial Preview) --- */}
      <section className="py-24 px-6 lg:px-12 border-t border-[#1A2118]/10">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif text-[#1A2118]">The Journal</h2>
            <Link href="/blog" className="hidden lg:block text-sm font-bold uppercase tracking-widest hover:text-[#BC5633] transition-colors">
              Read All Stories
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {journalEntries.map((entry) => (
              <article key={entry.id} className="group cursor-pointer">
                <div className="aspect-[3/2] overflow-hidden rounded-2xl mb-6 relative">
                  <img src={entry.image} alt={entry.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#BC5633] mb-3">
                  <span>{entry.date}</span>
                  <span className="w-1 h-1 bg-[#1A2118]/20 rounded-full" />
                  <span>Editorial</span>
                </div>
                <h3 className="text-2xl font-serif text-[#1A2118] mb-3 leading-tight group-hover:text-[#BC5633] transition-colors duration-300">
                  {entry.title}
                </h3>
                <p className="text-[#596157] font-light leading-relaxed mb-4 line-clamp-2">
                  {entry.excerpt}
                </p>
                <span className="inline-block text-xs font-bold uppercase tracking-widest border-b border-[#1A2118]/20 pb-1 group-hover:border-[#BC5633] transition-colors">Read Story</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* --- 7. TESTIMONIALS (Social Proof) --- */}
      <section className="py-24 bg-[#E6E2D6]/50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <Quote className="w-10 h-10 text-[#BC5633] mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl lg:text-5xl font-serif text-[#1A2118] mb-16 max-w-4xl mx-auto leading-tight">
            "I've never tasted honey this complex before. It feels like I'm tasting the forest itself. A truly grounding experience."
          </h2>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-[#1A2118] rounded-full flex items-center justify-center text-[#F2F0EA] font-serif text-xl">
              E
            </div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#1A2118]">Elena R.</p>
            <p className="text-xs text-[#596157]">Verified Buyer • Raw Honey</p>
          </div>
        </div>
      </section>

      {/* --- 8. FOOTER CTA --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#BC5633] text-[#F2F0EA]">
        <div className="absolute inset-0 opacity-30 mix-blend-multiply">
          <img
            src="/won19.JPG"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="text-6xl lg:text-9xl font-serif tracking-tighter mb-8 leading-none">
            Taste the <br /> Difference.
          </h2>
          <p className="text-xl font-light mb-10 opacity-90">
            Join the movement towards conscious consumption.
          </p>
          <Link
            href="/shop"
            className="inline-block px-12 py-5 bg-[#F2F0EA] text-[#BC5633] text-lg font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            Shop The Harvest
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
