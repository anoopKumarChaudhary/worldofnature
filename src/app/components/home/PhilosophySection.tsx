"use client";

import React from "react";
import { 
  Sprout, MapPin, Microscope, Sun, 
  HeartHandshake, Hourglass, Activity 
} from "lucide-react";

const PhilosophySection = () => {
  const principles = [
    { 
      id: "01", 
      icon: MapPin, 
      label: "Traceability", 
      sub: "GEO-TAGGED",
      desc: "Serialized with GPS coordinates of the specific harvest lot.",
      stats: [
        { label: "Ref", value: "GPS-01" },
        { label: "Status", value: "Live" },
        { label: "Audit", value: "Yrly" },
      ]
    },
    { 
      id: "02", 
      icon: Microscope, 
      label: "Potency", 
      sub: "LAB-ASSAYED",
      desc: "Verified for active compound density & strict purity.",
      stats: [
        { label: "Purity", value: "99.8%" },
        { label: "Test", value: "HPLC" },
        { label: "Grade", value: "Rx" },
      ]
    },
    { 
      id: "03", 
      icon: Sun, 
      label: "Curing", 
      sub: "ENZYMATIC",
      desc: "Low-temp drying preserves heat-sensitive volatile oils.",
      stats: [
        { label: "Temp", value: "<35°C" },
        { label: "Time", value: "Slow" },
        { label: "Method", value: "Air" },
      ]
    },
    { 
      id: "04", 
      icon: Sprout, 
      label: "Harvest", 
      sub: "BIO-RHYTHM",
      desc: "Extraction during peak alkaloid production cycles.",
      stats: [
        { label: "Phase", value: "Full" },
        { label: "Cycle", value: "Yrly" },
        { label: "Yield", value: "Low" },
      ]
    },
    { 
      id: "05", 
      icon: HeartHandshake, 
      label: "Equity", 
      sub: "INTEGRITY",
      desc: "Producers retain 100% of market value. No middlemen.",
      stats: [
        { label: "Cut", value: "0%" },
        { label: "Model", value: "D2C" },
        { label: "Impact", value: "High" },
      ]
    },
    { 
      id: "06", 
      icon: Hourglass, 
      label: "Micro-Batch", 
      sub: "CONTROL",
      desc: "Limited runs of 50 units for absolute consistency.",
      stats: [
        { label: "Batch", value: "50u" },
        { label: "QC", value: "100%" },
        { label: "Stock", value: "Low" },
      ]
    },
  ];

  return (
    // BG: #A9AB94 (Dry Sage / Khaki) - A shift from Brown to Green-Brown
    <section className="relative py-12 lg:py-20 bg-[#A9AB94] text-[#2C3326] overflow-hidden">
      
      {/* Texture: Organic noise */}
      <div className="absolute inset-0 opacity-[0.1] bg-[url('https://www.transparenttextures.com/patterns/dust.png')] mix-blend-multiply"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col items-start justify-between mb-8 gap-2 border-b border-[#8C9178] pb-4">
           <div className="flex items-center gap-2">
             <Activity className="w-4 h-4 text-[#F2F3EE]" /> 
             <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#F2F3EE] opacity-90 shadow-sm">
               System Protocols
             </span>
           </div>
           {/* Text is Dark Olive, "Methodology" is Pale Sage */}
           <h2 className="font-serif text-2xl md:text-4xl text-[#2C3326] tracking-tight">
             Core <span className="italic text-[#F2F3EE] opacity-90">Methodology</span>
           </h2>
        </div>

        {/* === THE CARDS === */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          
          {principles.map((item, i) => (
            <div 
              key={i} 
              className="
                group relative 
                
                /* CARD BG: #F2F3EE (Pale Olive Mist) - Blends with the khaki BG */
                bg-[#F2F3EE] 
                hover:bg-[#FFFFFF]
                
                /* Border: Muted Green-Grey */
                border border-[#D1D4C2] 
                hover:border-[#6B7556]
                
                /* Shadow: Deep Greenish shadow */
                shadow-[2px_2px_0px_rgba(44,51,38,0.05)] 
                hover:shadow-[4px_4px_0px_rgba(44,51,38,0.15)] 
                hover:-translate-y-1
                
                rounded-sm
                transition-all duration-300 ease-out
                
                flex flex-col justify-between
                
                h-full min-h-[210px] md:min-h-[240px]
                p-4 md:p-6
              "
            >
               {/* Top Section */}
               <div>
                 {/* Header: Icon + Title Inline */}
                 <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <div className="
                      w-fit p-1.5 rounded-sm
                      /* Icon BG: Khaki Green */
                      bg-[#E2E6D6] text-[#6B7556]
                      group-hover:bg-[#2C3326] group-hover:text-[#F2F3EE]
                      transition-colors duration-300
                    ">
                      <item.icon size={16} className="md:w-5 md:h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-base md:text-xl text-[#2C3326]">
                      {item.label}
                    </h3>
                 </div>

                 {/* Subtag */}
                 <div className="mb-2">
                   <span className="text-[10px] md:text-[11px] font-mono text-[#8C9178] uppercase tracking-wider font-bold">
                     {item.sub}
                   </span>
                 </div>

                 {/* Description */}
                 <p className="font-sans text-xs md:text-sm text-[#555C4D] leading-relaxed mb-4 line-clamp-4 md:line-clamp-none">
                   {item.desc}
                 </p>
               </div>

               {/* Bottom Section: Stats */}
               <div className="mt-auto pt-3 border-t border-[#E2E6D6] group-hover:border-[#D1D4C2] transition-colors">
                  <div className="grid grid-cols-3 gap-1 divide-x divide-[#E2E6D6]">
                     {item.stats.map((stat, idx) => (
                        <div key={idx} className="text-center px-1">
                           <div className="text-xs md:text-sm font-bold text-[#2C3326]">
                             {stat.value}
                           </div>
                           <div className="text-[9px] md:text-[10px] uppercase text-[#8C9178] font-mono tracking-tight">
                             {stat.label}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;