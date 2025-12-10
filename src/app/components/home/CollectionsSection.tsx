"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const CollectionsSection = () => {
  const categories = [
    {
      id: "honey",
      label: "Raw Honey",
      sub: "Wild Harvest",
      image: "/won23.JPG", // Ensure this path is correct
      desc: "Unfiltered sweetness from wild hives.",
      link: "/shop?category=honey",
      gridClass: "md:col-span-2 md:row-span-2", // Big Feature
    },
    {
      id: "ghee",
      label: "Vedic Ghee",
      sub: "Cultured Gold",
      image: "/won32.JPG", // Ensure this path is correct
      desc: "Traditionally churned from indigenous cows.",
      link: "/shop?category=ghee",
      gridClass: "md:col-span-1 md:row-span-2", // Tall Vertical
    },
    {
      id: "spices",
      label: "Heirloom Spices",
      sub: "Ancient Potency",
      image: "/won8.JPG", // Ensure this path is correct
      desc: "Potent aromas from high-altitude soils.",
      link: "/shop?category=spices",
      gridClass: "md:col-span-1 md:row-span-1", // Compact Box
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-[#F2F0EA] text-[#1A2118] overflow-hidden">
      
      {/* 1. TEXTURE & LINES (Consistent Brand DNA) */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      <div className="absolute left-6 lg:left-12 top-0 bottom-0 w-[1px] bg-[#1A2118]/10 pointer-events-none" />
      <div className="absolute right-6 lg:right-12 top-0 bottom-0 w-[1px] bg-[#1A2118]/10 pointer-events-none" />

      <div className="container-custom mx-auto relative z-10 max-w-7xl">
        
        {/* HEADER: Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-[#1A2118]/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-6 h-[1px] bg-[#B56B56]"></span>
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.3em] text-[#B56B56]">
                Collection No. 01
              </span>
            </div>
            <h2 className="font-heading text-5xl lg:text-7xl text-[#1A2118] leading-[0.9] font-bold">
              The Pantry <br/>
              <span className="font-light text-[#596157]">Essentials.</span>
            </h2>
          </div>
          
          <div className="hidden md:block max-w-xs text-right">
             <p className="font-[family-name:var(--font-montserrat)] text-xs leading-relaxed text-[#1A2118]/60 font-medium tracking-wide">
                Small-batch releases curating the finest ingredients from the wild. Stock is limited by nature&apos;s rhythm.
             </p>
          </div>
        </div>

        {/* THE GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          
          {categories.map((cat, index) => (
            <Link 
              key={cat.id} 
              href={cat.link} 
              className={`group relative block overflow-hidden rounded-sm ${cat.gridClass}`}
            >
              {/* IMAGE CONTAINER */}
              <div className="absolute inset-0 w-full h-full bg-[#1A2118]">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  /* EFFECT: Sepia & Grayscale by default. 
                     On Hover: Full Color & Scale. 
                     This mimics a photo developing in a darkroom.
                  */
                  className="object-cover opacity-90 transition-all duration-[0.8s] ease-[cubic-bezier(0.25,1,0.5,1)] 
                             grayscale-[0.3] sepia-[0.2] scale-100
                             group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105 group-hover:opacity-100"
                />
                
                {/* Overlay Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60" />
              </div>
              
              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                
                {/* Top Label (Number) */}
                <div className="flex justify-between items-start">
                   <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 border border-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                      0{index + 1}
                   </span>
                   
                   {/* Arrow Icon */}
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform -translate-y-4 translate-x-4 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>

                {/* Bottom Text */}
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="block font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-[0.3em] text-[#B56B56] mb-2">
                    {cat.sub}
                  </span>
                  <h4 className="font-heading text-3xl lg:text-4xl text-white mb-2 leading-none font-semibold">
                    {cat.label}
                  </h4>
                  <p className="font-[family-name:var(--font-montserrat)] text-white/80 font-light text-xs max-w-[200px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none m-2" />
            </Link>
          ))}

          {/* "VIEW ALL" TYPOGRAPHIC CARD */}
          <Link 
            href="/shop" 
            className="group relative overflow-hidden rounded-sm bg-[#B56B56] md:col-span-1 md:row-span-1 flex flex-col justify-between p-6 hover:bg-[#A35A45] transition-colors duration-500"
          >
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply"></div>
             
             <div className="relative z-10">
                <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  Directory
                </span>
             </div>

             <div className="relative z-10">
                <h4 className="font-heading text-3xl text-white mb-1 font-semibold">
                   View All
                </h4>
                <div className="h-[1px] w-full bg-white/30 my-3 group-hover:w-1/2 transition-all duration-500" />
                <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-widest">
                   Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
             </div>
          </Link>

        </div>
        
        {/* Mobile Footer Link (Optional fallback) */}
        <div className="mt-12 lg:hidden text-center">
          <Link href="/shop" className="inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#1A2118] hover:text-[#B56B56] transition-colors">
            Full Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CollectionsSection;