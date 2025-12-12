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
  className?: string; // For grid positioning
}

// --- Data Configuration ---
const COLLECTIONS: CollectionItem[] = [
  // --- ROW 1 & 2 START ---
  {
    id: "honey",
    label: "Raw Honey",
    tag: "Signature",
    image: "/h1.png",
    desc: "Unfiltered wild harvest from Kashmir valley.",
    link: "/shop/honey",
    // THE ANCHOR: Large 2x2 Box
    className: "md:col-span-2 md:row-span-2", 
  },
  {
    id: "ghee",
    label: "A2 Ghee",
    tag: "Cultured",
    image: "/h5.png",
    desc: "Slow-churned bilona.",
    link: "/shop/ghee",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "spices",
    label: "Spices",
    tag: "Lakadong",
    image: "/h9.png",
    desc: "High-curcumin turmeric.",
    link: "/shop/spices",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "oils",
    label: "Cold Press",
    tag: "Wood Pressed",
    image: "/h3.png",
    desc: "Virgin nut extracts.",
    link: "/shop/oils",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "tea",
    label: "Tea Estates",
    tag: "Darjeeling",
    image: "/h4.png",
    desc: "Single estate orthodox.",
    link: "/shop/tea",
    className: "md:col-span-1 md:row-span-1",
  },
  // --- ROW 3 START ---
  {
    id: "saffron",
    label: "Kesar Saffron",
    tag: "Grade A1",
    image: "/h6.png",
    desc: "Hand-picked Mongra strands from Pampore.",
    link: "/shop/saffron",
    // THE BANNER: Wide 2x1 Box
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "walnuts",
    label: "Walnuts",
    tag: "Kagzi",
    image: "/h7.png",
    desc: "Soft shell organic.",
    link: "/shop/nuts",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "shilajit",
    label: "Shilajit",
    tag: "Resin",
    image: "/h8.png",
    desc: "Himalayan purified.",
    link: "/shop/wellness",
    className: "md:col-span-1 md:row-span-1",
  },
  // --- ROW 4 START ---
  {
    id: "amla",
    label: "Amla",
    tag: "Preserve",
    image: "/h2.png",
    desc: "Sun-dried gooseberry.",
    link: "/shop/amla",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "moringa",
    label: "Moringa",
    tag: "Superfood",
    image: "/h3.png",
    desc: "Leaf powder.",
    link: "/shop/moringa",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "mustard",
    label: "Mustard Oil",
    tag: "Kachi Ghani",
    image: "/h4.png",
    desc: "Cold pressed.",
    link: "/shop/mustard",
    className: "md:col-span-1 md:row-span-1",
  },
];

// --- Card Component ---
const GridCard = ({ item }: { item: CollectionItem }) => {
  return (
    <Link
      href={item.link}
      className={`
        group relative block overflow-hidden 
        /* BORDERS: Clean lines */
        border border-[#8C9178]/40
        
        /* GRID LOGIC */
        w-full
        /* Mobile: Fixed height */
        h-[150px] 
        /* Desktop: Fill the assigned grid cell */
        md:h-auto
        ${item.className || "md:col-span-1 md:row-span-1"}
        
        /* SHARP CORNERS for strict box look (rounded-sm) */
        rounded-sm
        
        /* INTERACTIONS */
        bg-[#2C3326]
        shadow-[0px_0px_0px_rgba(0,0,0,0)]
        hover:shadow-[8px_8px_0px_rgba(44,51,38,0.15)]
        hover:-translate-y-1 hover:-translate-x-1
        transition-all duration-300 ease-out
        z-0 hover:z-10 hover:border-[#F2F3EE]/50
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
            transition-transform duration-[1s] ease-[cubic-bezier(0.25,1,0.5,1)]
            scale-100 group-hover:scale-110
            opacity-90 group-hover:opacity-100
          "
        />
        {/* Overlay: Deep Olive Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C3326] via-[#2C3326]/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end">
        
        {/* Arrow Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <ArrowUpRight className="w-5 h-5 text-[#F2F3EE]" />
        </div>

        <div className="relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          
          <span className="
            inline-block px-1.5 py-0.5 mb-2
            border border-[#F2F3EE]/20 rounded-sm
            font-mono text-[9px] uppercase tracking-[0.15em] text-[#F2F3EE]/80
          ">
            {item.tag}
          </span>
          
          <h3 className="
            font-serif text-xl md:text-2xl text-[#F2F3EE] 
            leading-none tracking-tight mb-1
          ">
            {item.label}
          </h3>

          <p className="
            font-sans text-[11px] text-[#F2F3EE]/70 
            leading-relaxed max-w-[95%] 
            h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 
            transition-all duration-300 delay-75
          ">
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

// --- Archive Card ---
const ArchiveCard = () => (
  <Link
    href="/shop"
    className="
      group relative overflow-hidden rounded-sm
      /* Matches Standard Item Size */
      w-full h-[150px] md:h-auto
      md:col-span-1 md:row-span-1
      
      bg-[#D1D4C2] /* Slightly darker sage for contrast */
      border border-[#8C9178]/40
      hover:bg-[#2C3326] hover:border-[#2C3326]
      
      flex flex-col justify-center items-center text-center p-4
      
      shadow-[0px_0px_0px_rgba(0,0,0,0)]
      hover:shadow-[8px_8px_0px_rgba(44,51,38,0.15)]
      hover:-translate-y-1 hover:-translate-x-1
      transition-all duration-300 ease-out
    "
  >
    <div className="relative z-10 flex flex-col items-center gap-3">
       <div className="
         w-12 h-12 rounded-full 
         bg-[#F2F3EE] border border-[#8C9178]
         flex items-center justify-center 
         group-hover:bg-[#F2F3EE] group-hover:scale-110
         transition-all duration-300
       ">
          <ArrowRight className="w-5 h-5 text-[#2C3326]" />
       </div>
       <div>
         <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#2C3326]/60 group-hover:text-[#F2F3EE]/60 block mb-1">
            Catalogue
         </span>
         <span className="font-serif text-xl text-[#2C3326] group-hover:text-[#F2F3EE] italic">
            View All
         </span>
       </div>
    </div>
  </Link>
);

// --- Main Section ---
const CollectionsSection = () => {
  return (
    // BG: Sage/Khaki (#A9AB94)
    <section className="relative py-9 lg:py-24 bg-[#A9AB94] text-[#2C3326] overflow-hidden">
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/dust.png')]" />

      <div className="container mx-auto px-[8px] md:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[#2C3326]/10 pb-6">
          <div className="max-w-xl">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#F2F3EE] drop-shadow-sm mb-2 block">
              Curated Harvest
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-[#2C3326] leading-[0.9]">
              Wild <span className="italic text-[#F2F3EE]">Essentials.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <p className="font-mono text-[10px] uppercase tracking-widest text-[#2C3326]">
                Collection 2024
             </p>
          </div>
        </div>

        {/* THE GRID:
           - grid-cols-2 (Mobile)
           - grid-cols-4 (Desktop)
           - auto-rows-[240px] (This defines the height unit for the Bento grid)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[280px] gap-1 md:gap-3">
          
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