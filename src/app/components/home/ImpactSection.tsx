"use client";

import React from "react";
import Link from "next/link";
import { Sprout, ShieldCheck, ArrowRight, Recycle, Heart, Scale } from "lucide-react";

export default function ImpactSection() {
  const pillars = [
    {
      id: "01",
      icon: Scale,
      title: "Fair Pay",
      tag: "DIRECT TRADE",
      // Simple: No middlemen.
      desc: "We buy directly from the farmers. They keep 100% of the profit. No middlemen."
    },
    {
      id: "02",
      icon: ShieldCheck,
      title: "Real & Safe",
      tag: "LAB TESTED",
      // Simple: Verified.
      desc: "No fake stuff. We test every single batch in a lab to make sure it is pure."
    },
    {
      id: "03",
      icon: Recycle,
      title: "No Plastic",
      tag: "EARTH FRIENDLY",
      // Simple: Biodegradable.
      desc: "Our packaging is made from plants. It returns to the earth without harming it."
    },
    {
      id: "04",
      icon: Heart,
      title: "We Give Back",
      tag: "FOR NATURE",
      // Simple: Trees.
      desc: "We don't just take. A part of every sale goes to planting trees in the mountains."
    }
  ];

  return (
    // BG: Deepest Forest Green (#1A2118) - Serious, Premium, Grounded
    <section className="relative py-16 md:py-32 bg-[#1A2118] text-[#F2F3EE] overflow-hidden">
      
      {/* Texture: Fine Grain */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-[8px] md:px-12 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-[#BC5633] block mb-4">
               Our Ethics
            </span>
            <h2 className="font-serif text-4xl md:text-7xl leading-[0.9] text-[#F2F3EE]">
              The <span className="italic text-[#596157]">Promise.</span>
            </h2>
          </div>
          
          <div className="hidden md:block max-w-xs text-right pb-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#F2F3EE]/40 leading-relaxed">
              Good for you.<br/>
              Good for the planet.
            </p>
          </div>
        </div>

        {/* === THE ARCHITECTURAL GRID === */}
        {/* Using Borders instead of Cards for a cleaner, high-end look */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#F2F3EE]/10">
          
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`
                group relative 
                p-6 md:p-12 
                border-b border-[#F2F3EE]/10
                /* Add right border to odd items on desktop */
                ${index % 2 === 0 ? 'md:border-r' : ''}
                hover:bg-[#F2F3EE]/[0.02]
                transition-colors duration-500
              `}
            >
              <div className="flex flex-col gap-6 md:gap-8">
                
                {/* Top Row: Icon & Tag */}
                <div className="flex justify-between items-start">
                  <div className="
                    w-10 h-10 md:w-12 md:h-12 
                    flex items-center justify-center 
                    bg-[#BC5633]/10 text-[#BC5633] rounded-full
                    group-hover:bg-[#BC5633] group-hover:text-white 
                    transition-all duration-500
                  ">
                    <pillar.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#F2F3EE]/30 group-hover:text-[#BC5633] transition-colors">
                    {pillar.tag}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-2xl md:text-4xl text-[#F2F3EE] mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-500 ease-out">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-[#F2F3EE]/60 leading-relaxed max-w-sm group-hover:text-[#F2F3EE]/80 transition-colors">
                    {pillar.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* === FOOTER ACTION === */}
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
           <span className="font-mono text-[9px] uppercase tracking-widest text-[#F2F3EE]/20">
               Verified Impact 2025
           </span>

           <Link href="/about" className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#F2F3EE]/20 hover:bg-[#F2F3EE] hover:text-[#1A2118] transition-all duration-300">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                 Read Our Full Story
              </span>
              <ArrowRight className="w-4 h-4" />
           </Link>
        </div>

      </div>
    </section>
  );
};