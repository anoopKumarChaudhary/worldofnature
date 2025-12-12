"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Coffee, Moon, Sun, ArrowRight, Activity } from "lucide-react";

// --- Types ---
interface RitualItem {
  step: string;
  time: string;
  phase: string;
  icon: React.ElementType;
  title: string;
  product: string;
  benefit: string;
  desc: string;
  image: string;
  link: string;
}

const RITUALS: RitualItem[] = [
  {
    step: "01",
    time: "07:00 AM",
    phase: "Awakening",
    icon: Sun,
    title: "Metabolic Start",
    product: "Raw Honey",
    benefit: "Alkalinity",
    desc: "Dissolve raw cliff honey in warm water to kickstart gut alkalinity.",
    image: "/h1.png",
    link: "/shop/honey"
  },
  {
    step: "02",
    time: "10:00 AM",
    phase: "Cognition",
    icon: Coffee,
    title: "Bulletproof Mind",
    product: "A2 Ghee",
    benefit: "Brain Fuel",
    desc: "Blend cultured ghee into coffee for jitter-free mental clarity.",
    image: "/h5.png",
    link: "/shop/ghee"
  },
  {
    step: "03",
    time: "03:00 PM",
    phase: "Sustain",
    icon: Activity,
    title: "The Uplift",
    product: "Wild Honey",
    benefit: "Antioxidant",
    desc: "Wild berry honey on oat crackers for sustained natural energy.",
    image: "/h8.png",
    link: "/shop/honey"
  },
  {
    step: "04",
    time: "09:00 PM",
    phase: "Restoration",
    icon: Moon,
    title: "Golden Sleep",
    product: "Turmeric",
    benefit: "Sedation",
    desc: "Warm milk with high-curcumin turmeric for deep cellular repair.",
    image: "/h9.png",
    link: "/shop/spices"
  },
];

const RitualCard = ({ item }: { item: RitualItem }) => {
  return (
    <Link 
      href={item.link}
      className="
        group relative flex flex-col 
        /* CARD BASE */
        bg-[#2C3326] 
        border border-[#8C9178]/30 hover:border-[#F2F3EE]/40
        rounded-sm
        hover:-translate-y-1 md:hover:-translate-y-2
        transition-all duration-500 ease-out
        h-full
      "
    >
      {/* --- TOP: IMAGE --- */}
      <div className="relative w-full h-[110px] md:h-[200px] overflow-hidden border-b border-[#8C9178]/20">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="
            object-cover 
            transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]
            scale-100 group-hover:scale-110
            opacity-90 group-hover:opacity-100
          "
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#2C3326]/30 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0" />
        
        {/* Phase Tag (Top Left) */}
        <div className="absolute top-2 left-2 md:top-3 md:left-3">
          <div className="
            inline-flex items-center gap-1.5 px-1.5 py-0.5 md:px-2 md:py-1 
            bg-[#2C3326]/90 backdrop-blur-md border border-[#F2F3EE]/10 rounded-sm
          ">
             <item.icon className="w-3 h-3 text-[#F2F3EE]" />
             <span className="font-mono text-[9px] md:text-[8px] uppercase tracking-widest text-[#F2F3EE] font-bold">
               {item.time}
             </span>
          </div>
        </div>
      </div>

      {/* --- BOTTOM: CONTENT --- */}
      <div className="flex flex-col flex-grow p-2 md:p-5 relative">
        
        {/* Step Number (Timeline marker) */}
        <div className="absolute -top-3 right-2 md:-top-4 md:right-4 bg-[#2C3326] border border-[#8C9178]/30 px-1.5 py-0.5 md:px-2 md:py-1 rounded-sm z-10">
           <span className="font-serif text-sm md:text-lg text-[#F2F3EE]">
             {item.step}
           </span>
        </div>

        {/* Title & Phase */}
        <div className="mb-2 md:mb-3 pt-1 md:pt-2">
            <h3 className="font-serif text-base md:text-xl text-[#F2F3EE] mb-1 leading-tight group-hover:text-white transition-colors line-clamp-1">
              {item.title}
            </h3>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-[#8C9178] group-hover:text-[#F2F3EE]/60 transition-colors">
              {item.phase}
            </span>
        </div>

        {/* Description */}
        <p className="font-sans text-[11px] md:text-[11px] text-[#F2F3EE]/70 leading-relaxed mb-3 border-l border-[#8C9178]/30 pl-2 md:pl-3 line-clamp-3">
          {item.desc}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-2 md:pt-3 border-t border-[#8C9178]/20 flex items-center justify-between">
           <div className="flex items-center gap-1 md:gap-1.5">
               <Activity className="w-3 h-3 text-[#8C9178]" />
               <span className="font-sans text-[9px] md:text-[9px] font-bold uppercase text-[#F2F3EE]/80">
                   {item.benefit}
               </span>
           </div>
           <ArrowRight className="w-3 h-3 text-[#8C9178] group-hover:text-[#F2F3EE] transition-colors" />
        </div>
      </div>
    </Link>
  );
};

const RitualsSection = () => {
  return (
    <section className="relative py-9 lg:py-24 bg-[#A9AB94] text-[#2C3326] overflow-hidden">
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>

      <div className="container mx-auto px-[8px] md:px-8 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 border-b border-[#2C3326]/10 pb-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
               <Sun className="w-4 h-4 text-[#F2F3EE]" />
               <span className="font-mono text-[10px] md:text-[10px] font-bold uppercase tracking-[0.25em] text-[#F2F3EE] shadow-sm">
                 Circadian Protocols
               </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#2C3326] leading-[0.9]">
              Daily <span className="italic text-[#F2F3EE]/90">Rituals.</span>
            </h2>
          </div>
          
          <div className="hidden md:block text-right">
             <span className="font-mono text-[9px] text-[#2C3326]/60 uppercase tracking-widest block mb-1">
               Timeline
             </span>
             <span className="font-heading font-bold text-lg text-[#2C3326]">
               07:00 AM — 09:00 PM
             </span>
          </div>
        </div>

        {/* === TIMELINE DECORATION (Desktop Only) === */}
        <div className="relative hidden md:block mb-8">
            <div className="absolute top-[215px] left-0 right-0 h-px bg-[#2C3326]/20 z-0"></div>
        </div>

        {/* === THE GRID === */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 relative z-10">
          {RITUALS.map((item, i) => (
            <RitualCard key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RitualsSection;