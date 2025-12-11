"use client";

import React from "react";
import { 
  Sprout, MapPin, Microscope, Sun, ArrowRight, HeartHandshake, Hourglass 
} from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    { 
      id: "01", 
      icon: MapPin, 
      label: "Source Transparency", // Professional
      sub: "GEO-TAGGED ORIGINS",    // Technical
      desc: "Every unit is serialized with the precise GPS coordinates of the harvest site." // Clear & Factual
    },
    { 
      id: "02", 
      icon: Microscope, 
      label: "Clinical Potency", 
      sub: "THIRD-PARTY ASSAYED",
      desc: "Lab-verified for active compound density and purity before bottling." 
    },
    { 
      id: "03", 
      icon: Sun, 
      label: "Ambient Curing", 
      sub: "ENZYMATIC PRESERVATION",
      desc: "Low-temperature drying preserves heat-sensitive volatile oils." 
    },
    { 
      id: "04", 
      icon: Sprout, 
      label: "Peak Harvest", 
      sub: "BIO-RHYTHM ALIGNED",
      desc: "Extraction occurs only during peak alkaloid production cycles." 
    },
    { 
      id: "05", 
      icon: HeartHandshake, 
      label: "Direct Equity", 
      sub: "SUPPLY CHAIN INTEGRITY",
      desc: "We bypass middlemen to ensure producers retain 100% of market value." 
    },
    { 
      id: "06", 
      icon: Hourglass, 
      label: "Micro-Batching", 
      sub: "QUALITY CONTROL",
      desc: "Processed in limited runs of 50 units to ensure absolute consistency." 
    },
  ];

  return (
    <section className="relative bg-[#D4D8CC] text-[#1E281F] py-16 lg:py-24 overflow-hidden selection:bg-[#D67C58] selection:text-white">
      
      {/* === ATMOSPHERE & TEXTURE === */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      
      {/* Subtle background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white opacity-20 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#1E281F] opacity-5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-16 gap-6">
           <div className="max-w-2xl relative">
              <div className="w-12 h-0.5 bg-[#D67C58] mb-4"></div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#D67C58] block mb-2">
                 Core Methodology
              </span>
              <h2 className="font-sans text-3xl md:text-5xl lg:text-7xl leading-[0.9] tracking-tighter text-[#1E281F] font-medium">
                 Rooted in Earth. <br/> 
                 <span className="font-serif italic text-[#6B705C] pl-2">Validated by Data.</span>
              </h2>
           </div>
        </div>

        {/* === THE TIGHT GRID (Gap-2 Mobile / Gap-4 Desktop) === */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4">
           
           {principles.map((item, index) => (
             <div 
               key={index} 
               className="
                 group relative 
                 flex flex-col 
                 rounded-xl 
                 bg-[#F2F2EE] /* Bone White */
                 border border-white/60 
                 shadow-[0_2px_8px_-4px_rgba(30,40,31,0.05)]
                 hover:shadow-[0_20px_40px_-10px_rgba(30,40,31,0.25)]
                 hover:-translate-y-1 
                 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                 overflow-hidden
               "
             >
                {/* Dark Hover Background */}
                <div className="absolute inset-0 bg-[#1E281F] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Texture Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] transition-opacity duration-700"></div>

                {/* === CARD CONTENT === */}
                <div className="relative z-10 p-3 lg:p-6 h-full min-h-[160px] lg:min-h-[260px] flex flex-col justify-between">
                   
                   {/* Top: Icon + Number */}
                   <div className="flex justify-between items-start">
                      
                      {/* Icon Vessel */}
                      <div className="
                        relative flex items-center justify-center 
                        w-12 h-12 lg:w-20 lg:h-20 
                        rounded-full 
                        bg-[#E6E8E0] border border-white
                        group-hover:bg-[#D67C58] group-hover:border-[#D67C58]
                        transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                        shadow-inner
                      ">
                        <item.icon 
                            strokeWidth={0.8}
                            className="
                              w-6 h-6 lg:w-10 lg:h-10 
                              text-[#1E281F] group-hover:text-white 
                              transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                            " 
                        />
                      </div>
                      
                      {/* ID Number */}
                      <span className="font-serif italic text-xl lg:text-4xl text-[#1E281F]/10 group-hover:text-white/10 transition-colors duration-500">
                        {item.id}
                      </span>
                   </div>

                   {/* Bottom: Text Details */}
                   <div className="mt-3 lg:mt-6 pl-1">
                      
                      {/* Sub-label (Technical) */}
                      <span className="block font-mono text-[8px] lg:text-[10px] uppercase tracking-[0.2em] text-[#D67C58] mb-1 group-hover:text-[#E8A689] transition-colors duration-500">
                        {item.sub}
                      </span>
                      
                      {/* Headline (Professional) */}
                      <div className="flex items-center justify-between">
                         <h3 className="font-sans text-sm md:text-base lg:text-2xl text-[#1E281F] group-hover:text-white transition-colors duration-500 font-medium tracking-tight truncate pr-2">
                            {item.label}
                         </h3>
                         
                         <ArrowRight className="hidden lg:block w-5 h-5 text-[#D67C58] opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                      </div>

                      {/* Description (Clear/Factual) */}
                      <p className="mt-1.5 font-sans text-[10px] leading-[1.4] lg:text-sm lg:leading-relaxed text-[#1E281F]/70 group-hover:text-white/80 transition-colors duration-500 line-clamp-3 lg:line-clamp-2">
                         {item.desc}
                      </p>
                   </div>

                </div>
             </div>
           ))}

        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center opacity-40">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#1E281F]">Standard Operating Procedure v2.4</span>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;