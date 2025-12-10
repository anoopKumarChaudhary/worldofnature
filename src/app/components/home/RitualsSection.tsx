"use client";

import React from "react";
import Image from "next/image";
import { Coffee, Moon, Sun, ArrowRight, Activity, Plus } from "lucide-react";

const RitualsSection = () => {
  const rituals = [
    {
      step: "01",
      time: "07:00 AM",
      phase: "Awakening",
      icon: Sun,
      title: "The Metabolic Start",
      product: "Raw Honey",
      benefit: "Alkalinity & Enzyme Activation",
      desc: "Dissolve one tablespoon of raw cliff honey in warm water. Kickstarts metabolism and preps the gut.",
      image: "/won8.JPG" 
    },
    {
      step: "02",
      time: "10:00 AM",
      phase: "Focus",
      icon: Coffee,
      title: "The Bulletproof Mind",
      product: "Vedic Ghee",
      benefit: "Cognitive Fuel & Gut Lining",
      desc: "Blend a teaspoon of cultured A2 Ghee into coffee. Healthy fats provide jitter-free clarity.",
      image: "/won32.JPG"
    },
    {
      step: "03",
      time: "03:00 PM",
      phase: "Sustain",
      icon: Activity,
      title: "The Afternoon Uplift",
      product: "Wild Berry Honey",
      benefit: "Antioxidant Boost",
      desc: "A teaspoon of wild berry honey on oat crackers provides natural energy without the crash.",
      image: "/won23.JPG"
    },
    {
      step: "04",
      time: "09:00 PM",
      phase: "Restoration",
      icon: Moon,
      title: "The Golden Sleep",
      product: "Lakadong Turmeric",
      benefit: "Anti-Inflammatory Sedation",
      desc: "Warm milk infused with high-curcumin turmeric. An ayurvedic sedative for deep restoration.",
      image: "/won23.JPG"
    }
  ];

  return (
    // Background: Light Sage/Olive (#E6E8E3)
    <section className="relative py-24 bg-[#E6E8E3] text-[#1A2118] overflow-hidden">
      
      {/* 1. ATMOSPHERE */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      
      {/* 2. CONNECTING LINE (Static, precise) */}
      <div className="hidden md:block absolute top-[40%] left-0 right-0 h-[1px] bg-[#1A2118]/10 z-0" />

      <div className="container-custom mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-2xl">
             <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 bg-[#B56B56] rounded-full" />
               <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.25em] text-[#B56B56]">
                 Application Guide
               </span>
             </div>
             <h2 className="font-heading text-5xl lg:text-6xl leading-[0.95] font-medium text-[#1A2118]">
               Daily <span className="italic font-serif font-light text-[#1A2118]/60">Rituals.</span>
             </h2>
           </div>
           
           <div className="max-w-xs text-right hidden md:block pb-2">
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] text-[#1A2118]/40 uppercase tracking-widest block mb-1">
                 Total Cycle
              </span>
              <span className="font-heading text-xl text-[#1A2118]">14 Hours</span>
           </div>
        </div>

        {/* === THE RITUAL GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rituals.map((item, i) => (
            // CARD CONTAINER
            // No shadow, no translate. Just a clean border transition.
            <div 
              key={i} 
              className="group relative flex flex-col bg-[#F2F0EA] border border-[#1A2118]/5 hover:border-[#B56B56]/40 transition-colors duration-700 z-0"
            >
              
              {/* --- TOP: IMAGE (Taller Aspect Ratio 2/1) --- */}
              <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#1A2118]">
                 
                 {/* Image */}
                 <Image 
                   src={item.image} 
                   alt={item.title} 
                   fill
                   className="object-cover opacity-90 grayscale-[0.2] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1s] ease-linear"
                 />
                 
                 {/* Inner Fine Border Overlay */}
                 <div className="absolute inset-0 border-b border-[#1A2118]/10 pointer-events-none" />
                 
                 {/* Step Number Badge */}
                 <div className="absolute top-0 right-0 bg-[#F2F0EA] pl-4 pb-4 pt-0 pr-0 border-b border-l border-[#1A2118]/5">
                    <div className="flex items-center gap-3 px-3 py-1.5">
                       <span className="font-mono text-[10px] text-[#1A2118]/50 uppercase tracking-widest">
                         {item.time}
                       </span>
                       <span className="font-heading text-lg text-[#1A2118] font-bold border-l border-[#1A2118]/10 pl-3">
                          {item.step}
                       </span>
                    </div>
                 </div>
              </div>

              {/* --- BOTTOM: CONTENT (Taller Padding) --- */}
              <div className="relative px-8 py-12 bg-[#F2F0EA] flex-grow">
                 
                 {/* Connector Icon (Static, technical) */}
                 <div className="hidden md:flex absolute -top-[20px] left-8 w-10 h-10 bg-[#F2F0EA] border border-[#1A2118]/10 items-center justify-center rounded-full z-20">
                    <item.icon className="w-4 h-4 text-[#B56B56]" />
                 </div>

                 {/* Plus Icon (Decoration for 'Medical/Lab' feel) */}
                 <div className="absolute top-4 right-4 text-[#1A2118]/10 group-hover:text-[#B56B56]/40 transition-colors duration-500">
                    <Plus className="w-4 h-4" />
                 </div>

                 <div className="flex flex-col lg:flex-row gap-8 items-start h-full pt-2">
                    
                    {/* Left: Title & Benefit */}
                    <div className="flex-1 flex flex-col justify-center">
                       <span className="block font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-[0.2em] text-[#B56B56] mb-2">
                         {item.phase}
                       </span>
                       <h3 className="font-heading text-2xl text-[#1A2118] mb-3 leading-tight">
                         {item.title}
                       </h3>
                       <div className="inline-flex items-center gap-1.5">
                          <Activity className="w-3 h-3 text-[#1A2118]/40" />
                          <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-wider text-[#1A2118]/70">
                            {item.benefit}
                          </span>
                       </div>
                    </div>

                    {/* Right: Desc & Action */}
                    <div className="flex-1 lg:border-l lg:border-[#1A2118]/5 lg:pl-8 flex flex-col justify-center">
                       <p className="font-[family-name:var(--font-montserrat)] text-xs font-medium leading-relaxed text-[#1A2118]/60 mb-5 line-clamp-3">
                         {item.desc}
                       </p>
                       
                       <div className="inline-flex items-center gap-2 group/btn cursor-pointer">
                          <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-[0.15em] text-[#1A2118] border-b border-[#1A2118]/20 pb-0.5 group-hover/btn:border-[#B56B56] group-hover/btn:text-[#B56B56] transition-colors">
                            Initialize Ritual
                          </span>
                          <ArrowRight className="w-3 h-3 text-[#1A2118]/40 group-hover/btn:text-[#B56B56] group-hover/btn:translate-x-1 transition-all" />
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
};

export default RitualsSection;