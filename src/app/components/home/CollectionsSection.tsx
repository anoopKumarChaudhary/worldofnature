"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, MapPin, Calendar, Activity } from "lucide-react";

const CollectionsSection = () => {
  const categories = [
    {
      id: "honey",
      label: "Liquid Amber",
      sub: "Collection 01",
      tag: "Raw Apiary",
      image: "/won23.JPG",
      desc: "Unfiltered sweetness harvest from wild cliff hives.",
      origin: "Kashmir Valley, 6000ft",
      harvest: "Autumn 2024",
      grade: "Grade A Raw",
      link: "/shop?category=honey",
      gridClass: "md:col-span-2 md:row-span-2 min-h-[550px]", 
    },
    {
      id: "ghee",
      label: "Golden Lipids",
      sub: "Collection 02",
      tag: "Vedic Cultured",
      image: "/won32.JPG", 
      desc: "The essence of indigenous A2 milk, slow-churned.",
      origin: "Gir Forest Region",
      harvest: "Monthly Batch",
      grade: "Cultured A2",
      link: "/shop?category=ghee",
      gridClass: "md:col-span-1 md:row-span-2 min-h-[550px]", 
    },
    {
      id: "spices",
      label: "Root & Bark",
      sub: "Collection 03",
      tag: "High Altitude",
      image: "/won8.JPG", 
      desc: "Potent aromatics from the Himalayan belt.",
      origin: "Lakadong",
      harvest: "Winter 2024",
      grade: "High Curcumin",
      link: "/shop?category=spices",
      gridClass: "md:col-span-1 md:row-span-1 min-h-[260px]", 
    },
  ];

  return (
    // Background: Crisp Gallery White (#F0F0EB)
    <section className="relative py-24 lg:py-32 px-4 lg:px-8 bg-[#F0F0EB] text-[#1A2118] overflow-hidden">
      
      {/* 1. ATMOSPHERE */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-0"></div>

      <div className="container-custom mx-auto relative z-10 max-w-7xl">
        
        {/* === HEADER (ONE LINE LAYOUT) === */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10 border-b border-[#1A2118]/10 pb-8">
          <div className="max-w-4xl relative">
            <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.3em] text-[#B56B56] mb-5 block">
              The Archive
            </span>
            {/* CHANGED: Removed <br/> and adjusted sizes for single-line flow */}
            <h2 className="font-heading text-5xl lg:text-7xl text-[#1A2118] leading-tight font-normal tracking-tight">
              Curated <span className="font-serif italic font-light text-[#1A2118]/60">Essentials.</span>
            </h2>
          </div>
          
          <div className="hidden md:block pb-2">
             <Link href="/shop" className="group flex items-center gap-3 text-[#1A2118] hover:text-[#B56B56] transition-colors">
                <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-widest">
                   View Full Index
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        {/* === THE ARCHITECTURAL GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto">
          
          {categories.map((cat, index) => (
            <Link 
              key={cat.id} 
              href={cat.link} 
              className={`group relative block overflow-hidden ${cat.gridClass} bg-[#0F140E] rounded-sm transition-all duration-700`}
            >
              {/* === IMAGE LAYER === */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-80 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]
                             grayscale-[0.3] sepia-[0.1] scale-[1.01]
                             group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
                />
                
                {/* Gradient: Stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F140E] via-[#0F140E]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
              </div>
              
              {/* === CONTENT LAYER === */}
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                
                {/* Top: Technical Header */}
                <div className="flex justify-between items-start w-full border-b border-[#EBE9E4]/10 pb-4">
                   <div className="flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-[#EBE9E4]/60 uppercase tracking-widest">
                        REF. {index + 101}
                      </span>
                      <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#B56B56]">
                        {cat.tag}
                      </span>
                   </div>

                   <div className="w-8 h-8 flex items-center justify-center text-[#EBE9E4]/40 group-hover:text-[#EBE9E4] transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>

                {/* Bottom: Typography & Data Specs */}
                <div className="relative">
                  <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-6">
                    <h4 className="font-heading text-4xl lg:text-5xl text-[#EBE9E4] mb-2 leading-[0.9] font-light">
                      {cat.label}
                    </h4>
                    <p className="font-[family-name:var(--font-montserrat)] text-[#EBE9E4]/70 font-light text-xs max-w-[260px] leading-relaxed">
                       {cat.desc}
                    </p>
                  </div>

                  {/* THE SPEC SHEET (Slides up on hover) */}
                  <div className="absolute top-full left-0 right-0 pt-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-700 delay-100 border-t border-[#EBE9E4]/10 mt-4">
                     <div className="grid grid-cols-3 gap-2">
                        <div>
                           <span className="block font-[family-name:var(--font-montserrat)] text-[8px] uppercase tracking-widest text-[#EBE9E4]/40 mb-1 flex items-center gap-1">
                              <MapPin className="w-2 h-2" /> Origin
                           </span>
                           <span className="block font-heading text-xs text-[#EBE9E4] truncate">
                              {cat.origin}
                           </span>
                        </div>
                        <div>
                           <span className="block font-[family-name:var(--font-montserrat)] text-[8px] uppercase tracking-widest text-[#EBE9E4]/40 mb-1 flex items-center gap-1">
                              <Calendar className="w-2 h-2" /> Harvest
                           </span>
                           <span className="block font-heading text-xs text-[#EBE9E4] truncate">
                              {cat.harvest}
                           </span>
                        </div>
                        <div>
                           <span className="block font-[family-name:var(--font-montserrat)] text-[8px] uppercase tracking-widest text-[#EBE9E4]/40 mb-1 flex items-center gap-1">
                              <Activity className="w-2 h-2" /> Grade
                           </span>
                           <span className="block font-heading text-xs text-[#EBE9E4] truncate">
                              {cat.grade}
                           </span>
                        </div>
                     </div>
                  </div>
                </div>
              </div>

              {/* === BORDER === */}
              <div className="absolute inset-0 border border-[#EBE9E4]/10 pointer-events-none rounded-sm group-hover:border-[#EBE9E4]/20 transition-colors duration-700" />
            </Link>
          ))}

          {/* === "VIEW ALL" BLOCK === */}
          <Link 
            href="/shop" 
            className="group relative overflow-hidden bg-[#1A2118] md:col-span-1 md:row-span-1 flex flex-col justify-end p-8 hover:bg-[#B56B56] transition-all duration-1000 rounded-sm"
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