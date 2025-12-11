"use client";

import React from "react";
import { 
  CloudRain, Sun, Snowflake, 
  Thermometer, Droplets, Wind, Sprout, 
  Calendar, MapPin 
} from "lucide-react";

const PhenologySectionDark = () => {
  const phases = [
    { 
      id: "01",
      season: "MONSOON",
      title: "The Wet Harvest",
      dates: "JUN — SEP",
      desc: "Heavy rainfall activates bio-chemistry. We extract wild cliff honey while flora is in peak hydration.",
      icon: CloudRain,
      stats: [
        { label: "Avg Temp", value: "24°C", icon: Thermometer },
        { label: "Rainfall", value: "High", icon: Droplets },
        { label: "Soil", value: "Moist", icon: Sprout },
      ]
    },
    { 
      id: "02",
      season: "SUMMER",
      title: "Solar Curing",
      dates: "MAR — MAY",
      desc: "We utilize high-altitude UV index to naturally cure turmeric and chilies on open stone patios.",
      icon: Sun,
      stats: [
        { label: "Avg Temp", value: "32°C", icon: Thermometer },
        { label: "UV Index", value: "Extreme", icon: Sun },
        { label: "Method", value: "Air Dry", icon: Wind },
      ]
    },
    { 
      id: "03",
      season: "WINTER",
      title: "Dormancy",
      dates: "OCT — FEB",
      desc: "The valley sleeps under snow. Farming pauses to allow the soil microbiome to regenerate naturally.",
      icon: Snowflake,
      stats: [
        { label: "Avg Temp", value: "-2°C", icon: Thermometer },
        { label: "Cover", value: "Snow", icon: Snowflake },
        { label: "Status", value: "Resting", icon: Sprout },
      ]
    }
  ];

  return (
    // BG: Deep Charcoal/Green | TEXT: Off-White
    <section className="relative py-12 lg:py-24 bg-[#111210] text-[#E3E3DC] overflow-hidden">
      
      {/* Texture: Reduced opacity for dark mode subtlety */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4 border-b border-[#E3E3DC]/10 pb-6">
           <div>
             <div className="flex items-center gap-2 mb-2 lg:mb-3">
                <Calendar className="w-3 h-3 text-[#D68C72]" /> {/* Accent: Muted Clay */}
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#D68C72]">
                  Annual Almanac
                </span>
             </div>
             <h2 className="font-serif text-3xl md:text-5xl text-[#E3E3DC]">
               Production <span className="italic text-[#7A8072]">Cycles.</span>
             </h2>
           </div>
           
           <div className="hidden md:flex items-center gap-2 opacity-40">
              <MapPin className="w-4 h-4" />
              <span className="font-mono text-[10px] uppercase tracking-widest">
                 34°N / Kashmir
              </span>
           </div>
        </div>

        {/* === THE CARDS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          
          {phases.map((item, i) => (
            <div 
              key={i} 
              className="
                group relative 
                bg-[#1A1C19] /* Card BG: Slightly lighter than section BG */
                border border-[#E3E3DC]/10 
                rounded-sm
                shadow-2xl hover:shadow-lg hover:-translate-y-1 hover:border-[#D68C72]/30
                transition-all duration-500 ease-out
                flex flex-col justify-between
                h-auto lg:min-h-[420px] 
                p-5 lg:p-8
              "
            >
               {/* --- TOP SECTION --- */}
               <div>
                  <div className="flex justify-between items-start mb-4 lg:mb-8">
                      {/* Badge: Darker bg, light text */}
                      <span className="
                        inline-block px-2 py-1 rounded-sm bg-[#252924]
                        font-mono text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-[#E3E3DC]/70
                      ">
                        {item.season}
                      </span>
                      
                      {/* Icon Circle */}
                      <div className="
                        w-10 h-10 lg:w-14 lg:h-14 
                        flex items-center justify-center 
                        rounded-full border border-[#E3E3DC]/10
                        bg-[#252924] group-hover:bg-[#D68C72] 
                        transition-colors duration-500
                      ">
                         <item.icon className="w-4 h-4 lg:w-6 lg:h-6 text-[#E3E3DC] group-hover:text-[#111210] transition-colors duration-500" />
                      </div>
                  </div>

                  <h3 className="font-serif text-xl lg:text-2xl text-[#E3E3DC] mb-2 group-hover:text-[#D68C72] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs lg:text-sm text-[#E3E3DC]/60 leading-relaxed mb-6 lg:mb-8 line-clamp-3 lg:line-clamp-none">
                    {item.desc}
                  </p>
               </div>

               {/* --- BOTTOM SECTION --- */}
               <div className="mt-auto">
                  <div className="w-full h-px bg-[#E3E3DC]/10 mb-3 lg:mb-4"></div>
                  
                  <div className="grid grid-cols-3 gap-2">
                     {item.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col justify-center items-center gap-1 p-1.5 lg:p-2 rounded-sm bg-[#252924] border border-[#E3E3DC]/5 text-center group-hover:bg-[#2C302B] transition-colors">
                           <stat.icon className="w-3 h-3 opacity-40 mb-0.5 text-[#E3E3DC]" />
                           <span className="font-heading text-xs lg:text-sm font-medium text-[#E3E3DC]">
                              {stat.value}
                           </span>
                           <span className="font-mono text-[7px] lg:text-[8px] uppercase tracking-wide text-[#E3E3DC]/40">
                              {stat.label}
                           </span>
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

export default PhenologySectionDark;