"use client";

import React from "react";
import { MoveRight, Sun, CloudRain, Snowflake, Thermometer, Droplets, Wind } from "lucide-react";

const PhenologySection = () => {
  // Theme: 
  // Section Background: #E0DED7 (Taupe / Earthy Grey)
  // Card Background: #F2F0EA (Bone White)
  // Text: #1A2118 (Dark Forest Green)
  
  const phases = [
    { 
      id: "01",
      phase: "Phase I",
      name: "The Wet Harvest",
      dates: "JUN — SEP",
      scientific: "Hydration",
      soil: "High Moisture",
      desc: "The monsoon alters valley bio-chemistry. We harvest wild cliff honey and plant ginger rhizomes as the flora drinks.",
      icon: CloudRain,
      subIcon: Droplets
    },
    { 
      id: "02",
      phase: "Phase II",
      name: "Solar Curing",
      dates: "MAR — MAY",
      scientific: "Desiccation",
      soil: "Arid / Cured",
      desc: "Intense Himalayan UV index is used as preservation technology. Turmeric and chilies cure on stone patios.",
      icon: Sun,
      subIcon: Thermometer
    },
    { 
      id: "03",
      phase: "Phase III",
      name: "The Dormancy",
      dates: "OCT — FEB",
      scientific: "Restoration",
      soil: "Frozen / Resting",
      desc: "The valley sleeps under snow. No extraction occurs. We package reserves and analyze soil health.",
      icon: Snowflake,
      subIcon: Wind
    }
  ];

  return (
    // CHANGED: Background to #E0DED7 (Taupe) for slight contrast
    <section className="relative py-24 lg:py-32 bg-[#E0DED7] text-[#1A2118] overflow-hidden">
      
      {/* 1. TEXTURE (Subtle Grain) */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      
      <div className="container-custom mx-auto relative z-10 max-w-7xl px-6 lg:px-12">
        
        {/* === HEADER === */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
           <div className="max-w-3xl">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 bg-[#B56B56] rounded-full" />
               <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.25em] text-[#B56B56]">
                 Seasonal Rhythm
               </span>
             </div>
             <h2 className="font-heading text-5xl lg:text-7xl leading-[0.95] font-medium text-[#1A2118]">
               The <span className="italic font-serif font-light text-[#1A2118]/60">Almanac.</span>
             </h2>
           </div>
           
           <div className="max-w-xs text-right hidden lg:block pb-2">
              <span className="font-mono text-[10px] text-[#1A2118]/40 uppercase tracking-widest block mb-1">
                 Coordinates
              </span>
              <span className="font-heading text-xl text-[#1A2118]">34°05'N / 74°47'E</span>
           </div>
        </div>

        {/* === THE CARDS (No Grid Lines, Just Gaps) === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {phases.map((item, i) => (
            <div 
              key={i} 
              // Card Styling: #F2F0EA Background, Rounded Corners, Shadow
              className="group relative bg-[#F2F0EA] p-8 lg:p-10 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            >
               {/* Hover Texture (Subtle) */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] transition-opacity duration-700 rounded-sm"></div>

               {/* Top Meta Data */}
               <div className="flex justify-between items-start mb-10">
                  <span className="font-mono text-[10px] uppercase tracking-widest bg-[#1A2118]/5 border border-[#1A2118]/10 px-2 py-1 rounded-sm text-[#1A2118]/60">
                    {item.dates}
                  </span>
                  <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#B56B56]">
                    {item.id}
                  </span>
               </div>

               {/* HERO ICON CENTERPIECE */}
               <div className="mb-10 flex justify-center">
                  <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-[#E0DED7]/50 group-hover:bg-[#1A2118] transition-colors duration-700">
                     
                     {/* Outer Ring Animation (Subtle on light card) */}
                     <div className="absolute inset-0 rounded-full border border-dashed border-[#1A2118]/20 group-hover:border-[#F2F0EA]/20 animate-[spin_12s_linear_infinite]" />
                     
                     {/* The Icon */}
                     <item.icon className="w-10 h-10 text-[#1A2118] group-hover:text-[#F2F0EA] transition-colors duration-500 stroke-[1.5]" />
                     
                     {/* Sub-Icon Badge */}
                     <div className="absolute -bottom-2 bg-[#F2F0EA] border border-[#1A2118]/10 p-1.5 rounded-full z-10">
                        <item.subIcon className="w-3 h-3 text-[#B56B56]" />
                     </div>
                  </div>
               </div>

               {/* Text Content */}
               <div className="relative z-10 text-center">
                  <h3 className="font-heading text-3xl text-[#1A2118] mb-6">
                    {item.name}
                  </h3>
                  
                  {/* Data Points Box */}
                  <div className="grid grid-cols-2 gap-4 mb-6 bg-[#1A2118]/[0.03] p-4 rounded-sm">
                     <div className="border-r border-[#1A2118]/10">
                        <span className="block font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-widest text-[#1A2118]/40 mb-1">
                           Process
                        </span>
                        <span className="block font-heading text-sm text-[#1A2118]">
                           {item.scientific}
                        </span>
                     </div>
                     <div>
                        <span className="block font-[family-name:var(--font-montserrat)] text-[9px] uppercase tracking-widest text-[#1A2118]/40 mb-1">
                           Soil State
                        </span>
                        <span className="block font-heading text-sm text-[#1A2118]">
                           {item.soil}
                        </span>
                     </div>
                  </div>

                  <p className="font-[family-name:var(--font-montserrat)] text-xs leading-relaxed text-[#1A2118]/60 mx-auto max-w-[260px]">
                    {item.desc}
                  </p>
               </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 flex items-center justify-center lg:justify-start gap-4 opacity-50">
           <MoveRight className="w-4 h-4 text-[#1A2118]" />
           <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-widest text-[#1A2118]">
              Fig. 04 — Annual Production Cycle
           </span>
        </div>

      </div>
    </section>
  );
};

export default PhenologySection;