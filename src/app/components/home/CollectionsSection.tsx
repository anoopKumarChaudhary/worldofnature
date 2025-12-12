"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Grid3X3 } from "lucide-react";

// --- Types ---
interface CollectionItem {
  id: string;
  label: string;
  tag: string;
  image: string;
  desc: string;
  link: string;
  className?: string;
}

// --- Data Configuration ---
const COLLECTIONS: CollectionItem[] = [
  {
    id: "honey",
    label: "Raw Honey",
    tag: "SIGNATURE",
    image: "/h1.png",
    desc: "Unfiltered wild harvest from Kashmir.",
    link: "/shop/honey",
    className: "md:col-span-2 md:row-span-2", 
  },
  {
    id: "ghee",
    label: "A2 Ghee",
    tag: "CULTURED",
    image: "/h5.png",
    desc: "Slow-churned bilona method.",
    link: "/shop/ghee",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "spices",
    label: "Spices",
    tag: "POTENT",
    image: "/h9.png",
    desc: "High-curcumin Lakadong turmeric.",
    link: "/shop/spices",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "oils",
    label: "Cold Press",
    tag: "VIRGIN",
    image: "/h3.png",
    desc: "Wood-pressed nut extracts.",
    link: "/shop/oils",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "tea",
    label: "Estates",
    tag: "ORTHODOX",
    image: "/h4.png",
    desc: "Single origin loose leaf.",
    link: "/shop/tea",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "saffron",
    label: "Saffron",
    tag: "GRADE A1",
    image: "/h6.png",
    desc: "Hand-picked Mongra strands.",
    link: "/shop/saffron",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    id: "walnuts",
    label: "Walnuts",
    tag: "KAGZI",
    image: "/h7.png",
    desc: "Omega-rich soft shell.",
    link: "/shop/nuts",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "shilajit",
    label: "Shilajit",
    tag: "RESIN",
    image: "/h8.png",
    desc: "Purified Himalayan mineral.",
    link: "/shop/wellness",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "amla",
    label: "Amla",
    tag: "PRESERVE",
    image: "/h2.png",
    desc: "Sun-dried wild gooseberry.",
    link: "/shop/amla",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "moringa",
    label: "Moringa",
    tag: "SUPERFOOD",
    image: "/h3.png",
    desc: "Nutrient-dense leaf powder.",
    link: "/shop/moringa",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    id: "mustard",
    label: "Mustard",
    tag: "RAW OIL",
    image: "/h4.png",
    desc: "Cold pressed Kachi Ghani.",
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
        /* GRID & SIZING */
        w-full
        h-[160px] md:h-auto
        ${item.className || "md:col-span-1 md:row-span-1"}
        
        /* SHAPE & BORDER */
        rounded-none
        
        /* BASE COLOR */
        bg-[#1A2118]
        
        /* HOVER EFFECTS */
        hover:z-10
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
            transition-transform duration-[0.8s] ease-out
            scale-100 group-hover:scale-110
            opacity-90 group-hover:opacity-100
          "
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F140E]/90 via-[#0F140E]/20 to-transparent transition-opacity duration-500" />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end">
        
        {/* Floating Arrow (Desktop) */}
        <div className="absolute top-4 right-4 translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out hidden md:block">
           <ArrowUpRight className="w-5 h-5 text-white" />
        </div>

        <div className="relative z-10 translate-y-1 md:translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          
          {/* Tag - Clean Monospace Pill */}
          <span className="
            inline-block px-1.5 py-[2px] mb-2
            bg-white/10 backdrop-blur-sm border border-white/10
            font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-[0.1em] text-white/90
          ">
            {item.tag}
          </span>
          
          {/* Title - Elegant Serif */}
          <h3 className="
            font-serif text-[1.1rem] md:text-2xl text-[#F8F7F5] 
            leading-none tracking-tight mb-1
          ">
            {item.label}
          </h3>

          {/* Description - Desktop Only Reveal */}
          <p className="
            hidden md:block 
            font-sans text-[11px] text-[#A9AB94]
            leading-relaxed max-w-[95%] 
            h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 
            transition-all duration-500 delay-75
          ">
            {item.desc}
          </p>
        </div>
      </div>
    </Link>
  );
};

// --- Archive Card (The "More" Button) ---
const ArchiveCard = () => (
  <Link
    href="/shop"
    className="
      group relative overflow-hidden rounded-none
      w-full h-[160px] md:h-auto
      md:col-span-1 md:row-span-1
      
      /* Editorial Styling */
      bg-[#EBECE8] /* Light Grey-Green */
      hover:bg-[#1A2118] /* Invert on hover */
      
      flex flex-col justify-center items-center text-center p-4
      transition-colors duration-500 ease-out
    "
  >
    <div className="relative z-10 flex flex-col items-center gap-4">
       <div className="
         w-12 h-12 rounded-full 
         border border-[#1A2118]/20 group-hover:border-white/20
         flex items-center justify-center 
         bg-white group-hover:bg-[#1A2118]
         transition-all duration-500
       ">
          <ArrowRight className="w-5 h-5 text-[#1A2118] group-hover:text-white transition-colors" />
       </div>
       <div>
         <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#1A2118]/60 group-hover:text-white/60 block mb-1 transition-colors">
            Full Catalogue
         </span>
         <span className="font-serif text-xl text-[#1A2118] group-hover:text-white italic transition-colors">
            View All
         </span>
       </div>
    </div>
  </Link>
);

// --- Main Section ---
export default function CollectionsSection() {
  return (
    // BG: Warm Cream / Off-White (#F9F8F6)
    // REDUCED PADDING: py-8 on mobile (was py-16)
    <section className="relative py-8 md:py-28 bg-[#F9F8F6] text-[#1A2118] overflow-hidden">
      
      {/* Texture: Subtle Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-darken bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>

      {/* Container: 8px padding on mobile */}
      <div className="container mx-auto px-[8px] md:px-12 relative z-10">
        
        {/* HEADER: Tighter Margins on Mobile */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 md:mb-12 gap-4 border-b border-[#1A2118]/10 pb-3 md:pb-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2 md:mb-3">
               <Grid3X3 className="w-4 h-4 text-[#4A7C59]" />
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A7C59]">
                 The Inventory
               </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A2118] leading-[0.9] tracking-tight">
              Wild <span className="italic text-[#4A7C59]">Essentials.</span>
            </h2>
          </div>
          <div className="hidden md:block text-right">
             <span className="font-mono text-[10px] uppercase tracking-widest text-[#1A2118]/60 block mb-1">
               Series 2025
             </span>
             <span className="font-serif text-lg italic text-[#1A2118]">
               Curated Harvest
             </span>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[280px] gap-1.5 md:gap-3">
          {COLLECTIONS.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
          <ArchiveCard />
        </div>

      </div>
    </section>
  );
}