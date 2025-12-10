"use client";

import React from "react";
import Image from "next/image";
import { CloudRain, Sun, Wind, ArrowRight } from "lucide-react";

const HarvestSection = () => {
  const seasons = [
    { 
      id: "01",
      season: "Monsoon", 
      months: "June — September",
      title: "The Awakening", 
      desc: "As the rains wash the valley, we harvest wild honey and plant the root spices. The soil is soft, receptive, and alive.", 
      icon: CloudRain 
    },
    { 
      id: "02",
      season: "Summer", 
      months: "March — May",
      title: "The Curing", 
      desc: "The sun is our primary tool. Turmeric rhizomes and chilies are sun-dried on stone patios to lock in potent essential oils.", 
      icon: Sun 
    },
    { 
      id: "03",
      season: "Winter", 
      months: "October — February",
      title: "The Deep Rest", 
      desc: "The soil sleeps under snow. We do not disturb it. We use this time to package, plan, and respect the pause.", 
      icon: Wind 
    }
  ];

  return (
    <section className="relative py-24 lg:py-0 bg-[#1A2118] text-[#F2F0EA] overflow-hidden lg:min-h-screen lg:flex lg:items-center">
      
      {/* 1. BACKGROUND TEXTURE */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* === NEW: FULL-BLEED IMAGE CONTAINER (Right Side) === 
         - 'lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2': Positions it on the right half.
      */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2 h-full z-0">
         {/* The Image */}
         <Image 
           src="/won23.JPG" // Use a high-quality, atmospheric landscape here.
           alt="Seasonal Cycle Landscape" 
           fill
           className="object-cover grayscale-[0.2]" 
         />
         
         {/* LUXURY GRADIENT OVERLAY (Crucial for text readability) */}
         {/* Fades from solid black on the left to transparent on the right. */}
         <div className="absolute inset-0 bg-gradient-to-r from-[#1A2118] via-[#1A2118]/60 to-transparent" />

         {/* Image Caption (Bottom Right) */}
         <div className="absolute bottom-12 right-12 text-right">
             <p className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.3em] text-[#F2F0EA]/60 mb-2">
               Fig. 02 — The Valley
             </p>
             <p className="font-heading text-2xl text-[#F2F0EA]/90 font-light">
               "Nature waits for no one."
             </p>
         </div>
      </div>


      {/* 2. CONTENT CONTAINER (Left Side) */}
      <div className="container-custom mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center h-full">
          
          {/* LEFT COLUMN: The Almanac Timeline */}
          <div className="lg:py-24">
            <div className="flex items-center gap-4 mb-8">
               <span className="w-8 h-[1px] bg-[#B56B56]"></span>
               <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.3em] text-[#B56B56]">
                 The Almanac
               </span>
            </div>
            
            <h2 className="font-heading text-5xl lg:text-7xl mb-16 leading-[0.95] font-bold">
              Aligned with <br/>
              the <span className="text-[#F2F0EA]/50">seasons.</span>
            </h2>
            
            <div className="space-y-0 border-l border-[#F2F0EA]/10 ml-4">
              {seasons.map((step, i) => (
                <div key={i} className="group relative pl-16 py-10 hover:bg-[#F2F0EA]/[0.02] transition-colors duration-500 border-b border-[#F2F0EA]/5 last:border-0 cursor-default">
                  
                  {/* Timeline Dot */}
                  <div className="absolute -left-[6px] top-14 w-3 h-3 rounded-full bg-[#1A2118] border border-[#F2F0EA]/40 group-hover:border-[#B56B56] group-hover:bg-[#B56B56] transition-all duration-300" />

                  <div className="flex flex-col gap-2">
                    {/* Season Header */}
                    <div className="flex items-center gap-4 mb-1">
                       <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-[0.2em] text-[#B56B56]">
                         {step.id} • {step.months}
                       </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-heading text-3xl text-[#F2F0EA] group-hover:text-[#B56B56] transition-colors duration-300 font-semibold">
                      {step.title}
                    </h4>
                    
                    {/* Description */}
                    <p className="font-[family-name:var(--font-montserrat)] text-sm font-light leading-relaxed text-[#F2F0EA]/50 max-w-sm mt-2 group-hover:text-[#F2F0EA]/80 transition-colors">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* RIGHT COLUMN: Empty on desktop (image is absolute), shows image on mobile */}
          <div className="relative lg:hidden aspect-[4/5] rounded-lg overflow-hidden">
             <Image 
               src="/won23.JPG" 
               alt="Seasonal Cycle Landscape" 
               fill
               className="object-cover grayscale-[0.2]" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1A2118] via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="font-heading text-xl text-[#F2F0EA]/90 font-light">
                  "Nature waits for no one."
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HarvestSection;