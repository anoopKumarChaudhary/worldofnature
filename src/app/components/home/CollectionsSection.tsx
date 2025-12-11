"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// --- Types ---
interface CollectionItem {
  id: string;
  label: string;
  tag: string;
  image: string;
  desc: string;
  link: string;
  desktopSpan?: string;
}

// --- Data Configuration ---
const COLLECTIONS: CollectionItem[] = [
  // --- ROW 1 (4 Cols Total) ---
  {
    id: "honey",
    label: "Raw Honey",
    tag: "Kashmir",
    image: "/h1.png",
    desc: "Unfiltered wild harvest.",
    link: "/shop/honey",
    desktopSpan: "md:col-span-2", // Wide (2/4)
  },
  {
    id: "ghee",
    label: "A2 Ghee",
    tag: "Cultured",
    image: "/h5.png",
    desc: "Slow-churned bilona.",
    link: "/shop/ghee",
    desktopSpan: "md:col-span-1", // Standard (1/4)
  },
  {
    id: "spices",
    label: "Spices",
    tag: "Lakadong",
    image: "/h9.png",
    desc: "High-curcumin turmeric.",
    link: "/shop/spices",
    desktopSpan: "md:col-span-1", // Standard (1/4)
  },
  // --- ROW 2 (4 Cols Total) ---
  {
    id: "oils",
    label: "Cold Press",
    tag: "Wood Pressed",
    image: "/h3.png",
    desc: "Virgin nut extracts.",
    link: "/shop/oils",
    desktopSpan: "md:col-span-1", // Standard (1/4)
  },
  {
    id: "tea",
    label: "Estates",
    tag: "Darjeeling",
    image: "/h4.png",
    desc: "Single estate orthodox.",
    link: "/shop/tea",
    // CHANGED: Made this wider (2 columns)
    desktopSpan: "md:col-span-2", // Wide (2/4)
  },
];

// --- Card Component ---
const GridCard = ({ item }: { item: CollectionItem }) => {
  return (
    <Link
      href={item.link}
      className={`
        group relative block overflow-hidden bg-[#0F140E] rounded-sm
        /* MOBILE: Compact Height */
        h-[180px]
        /* DESKTOP: Gallery Height */
        md:h-[420px]
        /* DESKTOP SPAN: Custom layout logic */
        ${item.desktopSpan || "md:col-span-1"}
        /* SHADOW & HOVER */
        hover:shadow-2xl transition-all duration-500
      `}
    >
      {/* 1. IMAGE LAYER */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={item.image}
          alt={item.label}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="
            object-cover 
            transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]
            scale-100 group-hover:scale-110
            grayscale-[0.1] group-hover:grayscale-0
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F140E]/80 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end md:justify-between">
        
        {/* Top Right Arrow (Desktop Only) */}
        <div className="hidden md:flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
           <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-full">
             <ArrowUpRight className="w-4 h-4 text-white" />
           </div>
        </div>

        {/* Bottom Text */}
        <div className="relative z-10 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
          
          <span className="
            inline-block px-1.5 py-0.5 rounded-[2px] 
            bg-white/10 backdrop-blur-sm 
            font-mono text-[8px] md:text-[9px] uppercase tracking-[0.15em] text-[#EBE9E4] 
            mb-1.5 md:mb-2
          ">
            {item.tag}
          </span>
          
          <h3 className="
            font-heading text-lg md:text-2xl text-white 
            leading-none font-medium tracking-wide
            mb-0.5 md:mb-2
          ">
            {item.label}
          </h3>

          <p className="hidden md:block font-sans text-xs text-white/70 leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

// --- View All Card (Now standard width) ---
const ArchiveCard = () => (
  <Link
    href="/shop"
    className="
      group relative overflow-hidden bg-[#1A2118] rounded-sm
      h-[180px] md:h-[420px] 
      /* CHANGED: Removed 'md:col-span-2' so it defaults to 1 col */
      md:col-span-1
      flex flex-col justify-center items-center text-center p-6
      hover:bg-[#B56B56] transition-colors duration-500
    "
  >
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-overlay" />
    
    <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4">
       <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 group-hover:scale-110">
          <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-white group-hover:text-[#B56B56]" />
       </div>
       <div>
         <span className="font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-[0.25em] text-white/40 block mb-1 md:mb-2">
            The Archive
         </span>
         <span className="font-heading text-xl md:text-2xl text-white font-medium italic">
            View All
         </span>
       </div>
    </div>
  </Link>
);

// --- Main Section ---
const CollectionsSection = () => {
  return (
    <section className="relative py-12 lg:py-24 bg-[#F0F0EB] text-[#1A2118] overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.5] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[#1A2118]/10 pb-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[#B56B56] mb-3 block">
              Seasonal Curations
            </span>
            <h2 className="font-heading text-3xl md:text-5xl text-[#1A2118] leading-[0.95]">
              Wild <span className="font-serif italic text-[#1A2118]/50">Essentials.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <p className="font-mono text-[9px] uppercase tracking-widest text-[#1A2118]/50">
                Harvest 2024
             </p>
          </div>
        </div>

        {/* THE GRID */}
        {/* Row 1: Honey(2) + Ghee(1) + Spices(1) = 4
           Row 2: Oils(1) + Tea(2) + Archive(1) = 4
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          
          {COLLECTIONS.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
          
          <ArchiveCard />
          
        </div>

      </div>
    </section>
  );
};

export default CollectionsSection;