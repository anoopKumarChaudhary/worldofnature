"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Coffee, Moon, Sun, ArrowRight, Activity, Clock } from "lucide-react";

interface RitualItem {
  step: string;
  time: string;
  phase: string;
  icon: React.ElementType;
  title: string;
  product: string;
  desc: string;
  image: string;
  link: string;
}

const RITUALS: RitualItem[] = [
  {
    step: "01",
    time: "07:00 AM",
    phase: "Awaken",
    icon: Sun,
    title: "Morning Kickstart",
    product: "Raw Honey",
    desc: "Warm water and wild honey to wake up your digestion gently.",
    image: "/h1.png",
    link: "/shop/honey"
  },
  {
    step: "02",
    time: "10:00 AM",
    phase: "Focus",
    icon: Coffee,
    title: "Brain Fuel",
    product: "A2 Ghee",
    desc: "A teaspoon of cultured ghee in coffee for sustained mental clarity.",
    image: "/h5.png",
    link: "/shop/ghee"
  },
  {
    step: "03",
    time: "03:00 PM",
    phase: "Recharge",
    icon: Activity,
    title: "Afternoon Lift",
    product: "Wild Honey",
    desc: "A natural sugar boost from berry honey to beat the midday slump.",
    image: "/h8.png",
    link: "/shop/honey"
  },
  {
    step: "04",
    time: "09:00 PM",
    phase: "Rest",
    icon: Moon,
    title: "Deep Sleep",
    product: "Turmeric",
    desc: "Golden milk with high-curcumin turmeric for cellular repair.",
    image: "/h9.png",
    link: "/shop/spices"
  },
];

export default function RitualsSection() {
  return (
    <section className="relative py-12 md:py-32 bg-[#EBECE8] text-[#1A2118] overflow-hidden">
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      <div className="container mx-auto px-[8px] md:px-12 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-20 gap-6 border-b border-[#1A2118]/10 pb-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
               <Clock className="w-4 h-4 text-[#BC5633]" />
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#BC5633]">
                 Circadian Rhythm
               </span>
            </div>
            <h2 className="font-serif text-3xl md:text-6xl text-[#1A2118] leading-[0.9] tracking-tight">
              A Day in <span className="italic text-[#BC5633]">Balance.</span>
            </h2>
          </div>
          
          <div className="hidden md:block text-right">
             <span className="font-mono text-[10px] uppercase tracking-widest text-[#1A2118]/60 block mb-1">
               Timeline
             </span>
             <span className="font-serif text-xl italic text-[#1A2118]">
               Morning — Night
             </span>
          </div>
        </div>

        {/* === THE TIMELINE === */}
        
        {/* 1. The Line (Desktop Only visual connector) */}
        <div className="hidden md:block absolute left-0 right-0 h-px bg-[#1A2118]/10 top-[52%] z-0" />

        {/* 2. The Scroll Container */}
        <div className="
          flex overflow-x-auto snap-x snap-mandatory 
          gap-4 md:gap-0 
          pb-8 -mx-[8px] px-[8px] md:mx-0 md:px-0 
          scrollbar-hide
          md:grid md:grid-cols-4 
        ">
          {RITUALS.map((item, i) => (
            <Link 
              key={i} 
              href={item.link}
              className="
                group relative 
                snap-center 
                /* Width maintained to ensure nice scroll spacing */
                min-w-[260px] w-[75vw] md:w-auto md:min-w-0 
                flex-shrink-0 
                flex flex-col md:block
                md:px-4
              "
            >
              {/* --- TIMELINE NODE (Desktop) --- */}
              <div className="hidden md:flex justify-center items-center mb-8 relative z-10">
                <div className="
                  w-3 h-3 rounded-full bg-[#1A2118] 
                  group-hover:scale-150 group-hover:bg-[#BC5633] 
                  transition-all duration-500 ease-out
                  shadow-[0_0_0_4px_#EBECE8]
                "/>
              </div>

              {/* --- IMAGE CARD --- */}
              {/* UPDATED: h-[220px] gives a portrait look, more immersive but balanced */}
              <div className="relative h-[220px] md:h-auto md:aspect-[3/4] w-full overflow-hidden rounded-sm mb-4 md:mb-6 bg-[#1A2118]">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Floating Time Badge */}
                <div className="absolute top-2 left-2 md:top-3 md:left-3">
                  <span className="
                    inline-flex items-center gap-1.5 
                    px-2 py-1 bg-white/90 backdrop-blur-md 
                    font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-[#1A2118]
                    rounded-sm
                  ">
                    <item.icon className="w-3 h-3" />
                    {item.time}
                  </span>
                </div>

                {/* Mobile Step Number (Inside Image) */}
                <span className="md:hidden absolute bottom-2 right-2 font-serif text-3xl text-white/30 font-bold">
                  {item.step}
                </span>
              </div>

              {/* --- CONTENT --- */}
              <div className="relative pl-1 md:pl-0 md:text-center">
                {/* Desktop Step Number (Behind Text) */}
                <span className="
                  hidden md:block 
                  font-serif text-[8rem] leading-[0.8] 
                  text-[#1A2118]/5 
                  absolute -top-10 left-1/2 -translate-x-1/2 -z-10
                  group-hover:text-[#BC5633]/10 transition-colors duration-500
                ">
                  {item.step}
                </span>

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#BC5633] block mb-1.5">
                  {item.phase}
                </span>
                
                <h3 className="font-serif text-xl md:text-3xl text-[#1A2118] mb-2 group-hover:text-[#BC5633] transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs md:text-sm text-[#555C4D] leading-relaxed md:max-w-[240px] md:mx-auto">
                  {item.desc}
                </p>

                <div className="mt-3 md:mt-6 inline-flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1A2118] group-hover:gap-3 transition-all">
                  Shop Ritual <ArrowRight className="w-3 h-3" />
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}