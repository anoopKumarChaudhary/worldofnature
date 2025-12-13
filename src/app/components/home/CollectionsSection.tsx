"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Grid3X3, Sparkles } from "lucide-react";

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
        w-full
        /* Mobile Aspect Ratio */
        aspect-[4/5] md:aspect-auto md:h-full
        ${item.className || "md:col-span-1 md:row-span-1"}
        
        bg-[#1A2118]
        rounded-sm
      `}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.label}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="
            object-cover 
            transition-transform duration-[0.8s] ease-[cubic-bezier(0.25,1,0.5,1)]
            group-hover:scale-110
            opacity-90 group-hover:opacity-100
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F140E]/95 via-[#0F140E]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
        <div className="flex justify-end">
          <div className="
            w-8 h-8 rounded-full bg-white/10 backdrop-blur-md 
            flex items-center justify-center
            translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-300 ease-out
          ">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="
            inline-block px-2 py-1 mb-3
            bg-white/10 backdrop-blur-md border border-white/10 rounded-sm
            font-mono text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-[#E0E0E0]
          ">
            {item.tag}
          </span>
          
          <h3 className="
            font-serif text-xl md:text-3xl text-[#F8F7F5] 
            leading-tight tracking-tight mb-2
          ">
            {item.label}
          </h3>

          <div className="
            grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out
          ">
             <div className="overflow-hidden">
                <p className="
                  font-sans text-[11px] md:text-xs text-[#A9AB94]
                  leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100
                ">
                  {item.desc}
                </p>
             </div>
          </div>
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
      group relative overflow-hidden
      w-full aspect-[4/5] md:aspect-auto md:h-full
      md:col-span-1 md:row-span-1
      
      bg-[#E5E7EB] hover:bg-[#4A7C59]
      rounded-sm
      
      flex flex-col justify-center items-center text-center p-4
      transition-colors duration-500 ease-out
    "
  >
    <div className="relative z-10 flex flex-col items-center gap-5">
       <div className="
         w-14 h-14 rounded-full 
         border border-black/10 group-hover:border-white/20
         flex items-center justify-center 
         bg-white group-hover:bg-white/10
         transition-all duration-500
         group-hover:scale-110
       ">
          <ArrowRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
       </div>
       <div>
         <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-black/40 group-hover:text-white/60 block mb-2 transition-colors">
            Catalogue
         </span>
         <span className="font-serif text-2xl text-black group-hover:text-white italic transition-colors">
            View All
         </span>
       </div>
    </div>
  </Link>
);

// --- Main Section ---
export default function CollectionsSection() {
  return (
    <section className="relative bg-[#F4F4F0] min-h-screen py-10 md:py-24">
      
      {/* CONTAINER UPDATE:
         px-[8px] = 8px padding on left/right for mobile.
         md:px-8 = Normal padding for desktop.
      */}
      <div className="container mx-auto px-[8px] md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14 gap-6 border-b border-[#1A2118]/10 pb-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
               <Grid3X3 className="w-4 h-4 text-[#4A7C59]" />
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A7C59]">
                 The Inventory
               </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-[#1A2118] leading-[0.9] tracking-tight">
              Wild <span className="italic font-light text-[#4A7C59]">Essentials.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 text-[#1A2118]/60">
             <div className="hidden md:flex items-center gap-2 text-xs font-mono tracking-widest uppercase border border-[#1A2118]/10 px-3 py-1 rounded-full">
               <Sparkles className="w-3 h-3" />
               New Harvest 2025
             </div>
          </div>
        </div>

        {/* GRID */}
        <div className="
          grid grid-cols-2 md:grid-cols-4 
          auto-rows-auto md:auto-rows-[280px] 
          gap-1.5 md:gap-2
        ">
          {COLLECTIONS.map((item) => (
            <GridCard key={item.id} item={item} />
          ))}
          <ArchiveCard />
        </div>
        
        {/* Footer Note */}
        <div className="mt-6 flex justify-between items-center opacity-40">
           <p className="font-mono text-[9px] uppercase tracking-widest">
             © 2025 Nature World
           </p>
           <p className="font-mono text-[9px] uppercase tracking-widest">
             Scroll to explore
           </p>
        </div>

      </div>
    </section>
  );
}