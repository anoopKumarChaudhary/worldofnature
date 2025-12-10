"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const CollectionsSection = () => {
  const categories = [
    {
      id: "honey",
      label: "Liquid Amber",
      sub: "Collection 01",
      tag: "Raw Apiary",
      image: "/won23.JPG",
      desc: "Unfiltered sweetness harvest from wild cliff hives.",
      link: "/shop?category=honey",
      gridClass: "md:col-span-2 md:row-span-2 min-h-[500px]", 
    },
    {
      id: "ghee",
      label: "Golden Lipids",
      sub: "Collection 02",
      tag: "Vedic Cultured",
      image: "/won32.JPG", 
      desc: "The essence of indigenous A2 milk, slow-churned.",
      link: "/shop?category=ghee",
      gridClass: "md:col-span-1 md:row-span-2 min-h-[500px]", 
    },
    {
      id: "spices",
      label: "Root & Bark",
      sub: "Collection 03",
      tag: "High Altitude",
      image: "/won8.JPG", 
      desc: "Potent aromatics from the Himalayan belt.",
      link: "/shop?category=spices",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[240px]", 
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-4 lg:px-8 bg-[#EBE9E4] text-[#1A2118] overflow-hidden">
      
      {/* 1. CLEAN ATMOSPHERE */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-0"></div>

      <div className="container-custom mx-auto relative z-10 max-w-7xl">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-16 gap-10">
          <div className="max-w-3xl relative">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.3em] text-[#B56B56] mb-5 block">
              The Archive
            </span>
            <h2 className="font-heading text-6xl lg:text-8xl text-[#1A2118] leading-[0.9] font-medium tracking-tight">
              Curated <br/>
              <span className="font-serif italic font-light text-[#1A2118]/60">Essentials.</span>
            </h2>
          </div>
          
          <div className="max-w-xs text-right hidden md:block pb-2">
             {/* Rotating Badge Removed. Just clean text now. */}
             <p className="font-[family-name:var(--font-montserrat)] text-[11px] leading-relaxed text-[#1A2118]/60 font-medium tracking-wide uppercase border-l border-[#1A2118]/10 pl-6">
                Stock is limited by <br/> nature's rhythm.
             </p>
          </div>
        </div>

        {/* === THE IMPACT GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-auto">
          
          {categories.map((cat, index) => (
            <Link 
              key={cat.id} 
              href={cat.link} 
              className={`group relative block overflow-hidden ${cat.gridClass} bg-[#1A2118] rounded-sm transition-all duration-700 hover:shadow-2xl hover:shadow-[#1A2118]/30 hover:z-10`}
            >
              {/* === IMAGE LAYER === */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-95 transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]
                             grayscale-[0.6] sepia-[0.1] scale-[1.01]
                             group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-110 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F140E] via-[#0F140E]/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              </div>
              
              {/* === CONTENT LAYER === */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                
                {/* Top Labels */}
                <div className="flex justify-between items-start w-full">
                   <div className="flex flex-col gap-1">
                      <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-[0.2em] text-[#EBE9E4]/70">
                        {cat.sub}
                      </span>
                      <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-medium uppercase tracking-[0.2em] text-[#B56B56]">
                        {cat.tag}
                      </span>
                   </div>

                   {/* Magnetic Arrow Button */}
                   <div className="w-12 h-12 rounded-full bg-[#EBE9E4]/10 backdrop-blur-md flex items-center justify-center text-[#EBE9E4] 
                                   translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>

                {/* Bottom Typography */}
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                  <h4 className="font-heading text-4xl lg:text-5xl text-[#EBE9E4] mb-4 leading-[0.9] font-medium">
                    {cat.label}
                  </h4>
                  
                  {/* Description Reveal */}
                  <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-700 delay-100">
                     <p className="font-[family-name:var(--font-montserrat)] text-[#EBE9E4]/70 font-light text-xs max-w-[260px] leading-relaxed pb-2 border-t border-[#EBE9E4]/10 pt-4">
                       {cat.desc}
                     </p>
                  </div>
                </div>
              </div>

              {/* === THE FRAME (Museum Matte Effect) === */}
              <div className="absolute inset-4 border border-[#EBE9E4]/20 opacity-0 scale-98 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 pointer-events-none rounded-sm" />
            </Link>
          ))}

          {/* === "VIEW ALL" BLOCK === */}
          <Link 
            href="/shop" 
            className="group relative overflow-hidden bg-[#1A2118] md:col-span-1 md:row-span-1 flex flex-col justify-end p-8 hover:bg-[#B56B56] transition-all duration-1000 rounded-sm hover:shadow-xl"
          >
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-overlay"></div>
             
             <div className="relative z-10 border-t border-[#EBE9E4]/30 pt-4">
                <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-[0.3em] text-[#EBE9E4]/60 mb-2 block">
                  Full Catalogue
                </span>
                <div className="flex items-center justify-between">
                   <h4 className="font-heading text-2xl text-[#EBE9E4] font-medium italic">
                      View Index
                   </h4>
                   <ArrowRight className="w-5 h-5 text-[#EBE9E4] group-hover:translate-x-2 transition-transform duration-500" />
                </div>
             </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;