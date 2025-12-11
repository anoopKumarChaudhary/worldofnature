"use client";

import React from "react";
import { Sprout, MapPin, Microscope, Sun, ArrowUpRight, HeartHandshake, Hourglass } from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    { 
      id: "01",
      icon: MapPin, 
      label: "Geo-Traceable", 
      sub: "Origin Verified",
      desc: "Every jar is stamped with the exact coordinates of the harvest site." 
    },
    { 
      id: "02",
      icon: Microscope, 
      label: "Bio-Active", 
      sub: "Lab Tested",
      desc: "We verify live enzymes and medicinal compounds in their native state." 
    },
    { 
      id: "03",
      icon: Sun, 
      label: "Solar-Cured", 
      sub: "Ancient Method",
      desc: "Traditional sun-drying preserves volatile oils that industrial heat destroys." 
    },
    { 
      id: "04",
      icon: Sprout, 
      label: "Regenerative", 
      sub: "Eco-System First",
      desc: "Harvest schedules are dictated strictly by the seasons, not market demand." 
    },
    { 
      id: "05",
      icon: HeartHandshake, 
      label: "Ethical Trade", 
      sub: "Community First",
      desc: "Direct partnerships that ensure our farmers earn 3x the standard market rate." 
    },
    { 
      id: "06",
      icon: Hourglass, 
      label: "Slow Craft", 
      sub: "Time Honored",
      desc: "We prioritize potency over speed. Small batches, hand-processed, no shortcuts." 
    },
  ];

  return (
    <section className="relative bg-[#E2E4D8] text-[#1A2118] py-24 lg:py-32 overflow-hidden">
      
      {/* 1. TEXTURE */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      <div className="container-custom mx-auto px-6 lg:px-12 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-3xl">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.3em] text-[#B56B56] mb-6 block">
                 Core Methodology
              </span>
              <h2 className="font-heading text-5xl lg:text-7xl leading-[0.95] text-[#1A2118] font-medium">
                 Untouched by Industry. <br/>
                 <span className="italic font-serif font-light text-[#596157]">Guided by Nature.</span>
              </h2>
           </div>
           
           <div className="hidden lg:block pb-2">
              <p className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-widest text-[#1A2118]/60 text-right">
                 Establishing the new standard <br/> for organic purity.
              </p>
           </div>
        </div>

        {/* === THE 3x2 ALTERNATING GRID (REFINED) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
           {principles.map((item, index) => {
             // Logic: Every second item is inverted (Text Top, Icon Bottom)
             const isAlternate = index % 2 !== 0;

             return (
               <div 
                 key={index} 
                 // ADDED: Border for definition, Shadow tweaks for depth
                 className={`group flex flex-col h-full bg-[#F0F0EB] rounded-sm overflow-hidden border border-[#1A2118]/5 hover:border-[#1A2118]/20 hover:shadow-[0_20px_40px_-15px_rgba(26,33,24,0.15)] hover:-translate-y-1 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isAlternate ? 'flex-col-reverse' : ''}`}
               >
                  
                  {/* --- ICON FRAME (Dark Header/Footer) --- */}
                  {/* CHANGED: group-hover:bg-black for deeper contrast */}
                  <div className="relative aspect-[2/1] bg-[#1A2118] group-hover:bg-black flex items-center justify-center overflow-hidden shrink-0 transition-colors duration-700">
                     
                     {/* Background Grain */}
                     <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
                     
                     {/* The Massive Icon */}
                     <item.icon 
                        strokeWidth={0.6} // Thinner stroke for elegance
                        // CHANGED: group-hover:text-white (Pure white pops against black)
                        className="w-20 h-20 text-[#E2E4D8]/80 group-hover:scale-110 group-hover:text-white transition-all duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]" 
                     />

                     {/* Corner Number (Serif Font) */}
                     {/* CHANGED: font-serif for editorial look */}
                     <span className={`absolute font-serif text-4xl italic text-[#E2E4D8]/20 select-none group-hover:text-[#E2E4D8]/40 transition-colors ${isAlternate ? 'bottom-5 left-6' : 'top-5 left-6'}`}>
                        {item.id}
                     </span>

                     {/* Corner Arrow */}
                     <div className={`absolute text-[#B56B56] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isAlternate ? 'bottom-5 right-6' : 'top-5 right-6'}`}>
                        <ArrowUpRight className="w-5 h-5" />
                     </div>
                  </div>

                  {/* --- CONTENT FRAME (Light Body) --- */}
                  {/* ADDED: p-12 for more whitespace/luxury feel */}
                  <div className={`p-10 lg:p-12 flex flex-col justify-center flex-grow relative ${isAlternate ? 'border-b' : 'border-t'} border-[#1A2118]/5 group-hover:border-[#1A2118]/10 transition-colors`}>
                     <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-[0.2em] text-[#B56B56] mb-4">
                        {item.sub}
                     </span>
                     <h3 className="font-heading text-3xl text-[#1A2118] mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-500">
                        {item.label}
                     </h3>
                     <p className="font-[family-name:var(--font-montserrat)] text-xs leading-loose text-[#1A2118]/60 group-hover:text-[#1A2118]/80 transition-colors">
                        {item.desc}
                     </p>
                  </div>

               </div>
             );
           })}

        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;