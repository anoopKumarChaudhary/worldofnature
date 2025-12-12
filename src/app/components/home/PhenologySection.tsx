"use client";

import React from "react";
import Image from "next/image";
import { 
  CloudRain, Sun, Snowflake, Calendar, 
  Thermometer, Sprout, Wind 
} from "lucide-react";

// --- Data ---
const SEASONS = [
  { 
    id: "01",
    name: "Monsoon", 
    dates: "JUN — SEP", 
    icon: CloudRain, 
    title: "Rain & Harvest",
    // Simple English
    desc: "The valley drinks the rain. Flowers bloom, and we hike the cliffs to collect fresh wild honey.",
    temp: "24°C",
    status: "Peak Harvest",
    image: "/season-monsoon.jpg",
    // Dark Green tint
    gradient: "from-[#0F1410] via-[#0F1410]/60 to-transparent"
  },
  { 
    id: "02",
    name: "Summer", 
    dates: "MAR — MAY", 
    icon: Sun, 
    title: "Sun Drying",
    desc: "The sun is our machine. We spread turmeric and spices on stone patios to dry naturally.",
    temp: "32°C",
    status: "Solar Curing",
    image: "/season-summer.jpg",
    // Dark Amber tint
    gradient: "from-[#14100F] via-[#14100F]/60 to-transparent"
  },
  { 
    id: "03",
    name: "Winter", 
    dates: "OCT — FEB", 
    icon: Snowflake, 
    title: "Deep Rest",
    desc: "Snow covers the farms. We let the soil sleep and heal so it is ready for next spring.",
    temp: "-2°C",
    status: "Dormant",
    image: "/season-winter.jpg",
    // Dark Blue tint
    gradient: "from-[#0F1115] via-[#0F1115]/60 to-transparent"
  },
];

export default function PhenologySection() {
  return (
    // BG: Deep Charcoal (#0F1110)
    <section className="relative py-12 md:py-28 bg-[#0F1110] text-[#E3E3DC] overflow-hidden">
      
      {/* Texture: Star Dust */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* Container: 8px Mobile Padding */}
      <div className="container mx-auto px-[8px] md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 border-b border-[#E3E3DC]/10 pb-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
               <Calendar className="w-4 h-4 text-[#BC5633]" />
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#BC5633]">
                 The Calendar
               </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#E3E3DC] leading-none">
              Seasonal <span className="italic text-[#7A8072]">Cycles.</span>
            </h2>
          </div>
          
          {/* Badge */}
          <div className="hidden md:block">
             <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-[#E3E3DC]/20 bg-[#E3E3DC]/5 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BC5633] animate-pulse"></span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E3E3DC]/80">
                  Live from Kashmir
                </span>
             </div>
          </div>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
          {SEASONS.map((s, i) => (
            <div 
              key={i} 
              className="
                group relative 
                h-[240px] md:h-[480px] 
                overflow-hidden rounded-sm
                bg-[#1A1C19] border border-white/5 hover:border-[#BC5633]/30
                transition-colors duration-500
              "
            >
              {/* 1. BACKGROUND IMAGE */}
              <div className="absolute inset-0 z-0">
                 {/* Replace this div with <Image /> */}
                 <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70"
                    style={{ backgroundImage: `url(${s.image})` }} 
                 />
                 {/* Strong Gradient Overlay for Text Readability */}
                 <div className={`absolute inset-0 bg-gradient-to-t ${s.gradient}`} />
              </div>

              {/* 2. CONTENT */}
              <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between z-10">
                
                {/* TOP: Date & Icon */}
                <div className="flex justify-between items-start">
                   <span className="
                     inline-block px-2 py-1 rounded-[2px] 
                     bg-black/30 backdrop-blur-md border border-white/10
                     font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#E3E3DC]
                   ">
                     {s.dates}
                   </span>
                   
                   <s.icon className="w-5 h-5 md:w-6 md:h-6 text-[#E3E3DC]/80 group-hover:text-[#BC5633] transition-colors duration-300" />
                </div>

                {/* BOTTOM: Info (Always Visible) */}
                <div>
                  
                  {/* Season Name */}
                  <h3 className="font-serif text-3xl md:text-4xl text-[#E3E3DC] mb-1 md:mb-2 leading-none">
                    {s.name}
                  </h3>

                  {/* Title */}
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-[#BC5633] mb-3 md:mb-4">
                    {s.title}
                  </span>

                  {/* Description - Always Visible */}
                  <p className="
                    font-sans text-[11px] md:text-sm text-[#E3E3DC]/80 
                    leading-relaxed md:leading-7 
                    mb-4 md:mb-6 
                    line-clamp-2 md:line-clamp-none
                  ">
                    {s.desc}
                  </p>

                  {/* Stats Pill */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                     <div className="flex items-center gap-1.5">
                        <Thermometer className="w-3 h-3 text-[#E3E3DC]/50" />
                        <span className="font-mono text-[10px] text-[#E3E3DC]">{s.temp}</span>
                     </div>
                     <div className="flex items-center gap-1.5">
                        <Sprout className="w-3 h-3 text-[#E3E3DC]/50" />
                        <span className="font-mono text-[10px] text-[#E3E3DC]">{s.status}</span>
                     </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}