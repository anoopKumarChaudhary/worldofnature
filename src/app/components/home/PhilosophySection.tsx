"use client";

import React from "react";
import Image from "next/image";
import { Sprout, Globe, ShieldCheck, Sun, ArrowRight } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section className="relative py-24 lg:py-32 px-6 lg:px-12 bg-[#F2F0EA] overflow-hidden text-[#1A2118]">
      
      {/* 1. GLOBAL PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
      
      {/* 2. STRUCTURE LINES */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-6 lg:left-24 top-0 bottom-0 w-[1px] bg-[#1A2118]/15" />
        <div className="absolute right-6 lg:right-24 top-0 bottom-0 w-[1px] bg-[#1A2118]/15" />
      </div>

      <div className="container-custom mx-auto relative z-10 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
          
          {/* LEFT COLUMN: The Visual */}
          <div className="w-full lg:w-1/2 relative">
             
             {/* === THE "MIXED" IMAGE CONTAINER === 
                Added 'rounded-sm overflow-hidden' for softer corners.
             */}
             <div className="relative z-10 w-full aspect-[4/5] group rounded-sm overflow-hidden">
                
                <Image 
                  src="/bg6.png" 
                  alt="Raw honeycomb and natural ingredients close up"
                  fill
                  /* CHANGED:
                     1. Removed 'shadow-2xl' (No lifting).
                     2. Added 'opacity-90' (Lets background show through slightly).
                     3. Added 'mix-blend-multiply' (The key to the "printed" look).
                  */
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90 mix-blend-multiply"
                  priority
                />

                {/* NEW: PAPER TEXTURE OVERLAY ON IMAGE 
                    This applies the paper texture specifically ON TOP of the image area, 
                    tying it firmly to the background.
                */}
                 <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

                {/* WARM TINT (Kept from before, helps blend color) */}
                <div className="absolute inset-0 bg-[#B56B56]/10 mix-blend-multiply z-10 pointer-events-none" />
                
                {/* CHANGED: Replaced hard border with subtle inset ring (pressed look) */}
                <div className="absolute inset-0 ring-1 ring-inset ring-[#1A2118]/10 z-20 pointer-events-none rounded-sm" />
             </div>

             {/* REMOVED: The offset hard border div. It creates too much separation. */}
            
             {/* Caption */}
             <div className="absolute -bottom-10 right-0 font-[family-name:var(--font-montserrat)] text-[9px] text-[#1A2118]/60 tracking-[0.2em] uppercase font-medium">
                Fig. 01 — Raw Intelligence
             </div>
          </div>


          {/* RIGHT COLUMN: The Editorial Copy (Unchanged) */}
          <div className="w-full lg:w-1/2">
            
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-10">
               <span className="w-8 h-[1px] bg-[#B56B56]"></span>
               <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.3em] text-[#B56B56]">Our Ethos</span>
            </div>

            {/* Headline */}
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-7xl leading-[1.05] mb-8 text-[#1A2118]">
              Respecting the <br/>
              <span className="italic font-light text-[#596157]">rhythm</span> of nature.
            </h2>

            {/* Body */}
            <div className="space-y-8 font-[family-name:var(--font-montserrat)] text-base lg:text-lg font-light leading-[1.8] text-[#1A2118]/80 max-w-lg">
              <p>
                <span className="text-6xl float-left mr-4 mt-[-12px] font-[family-name:var(--font-playfair)] text-[#1A2118]">W</span>
                e believe that true nourishment cannot be synthesized. In an era of artificial optimization, we choose the path of most resistance: patience.
              </p>
              <p>
                Every jar captures the specific intelligence of the ecosystem that created it. We are not manufacturers; we are simply the messengers between the wild forest and your home.
              </p>
            </div>

            {/* Signature Block */}
            <div className="mt-14 pt-8 border-t border-[#1A2118]/10 flex flex-col sm:flex-row sm:items-center gap-8">
               <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-playfair)] italic text-2xl text-[#1A2118]">The Founders</span>
                  <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-widest text-[#1A2118]/50 mt-1 font-semibold">World of Nature</span>
               </div>
               
               <button className="group flex items-center gap-3 px-8 py-4 border border-[#1A2118]/20 rounded-full hover:bg-[#1A2118] hover:text-white transition-all ml-auto">
                  <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest">Read Standards</span>
                  <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          </div>

        </div>

        {/* 3. THE FEATURES BAR (Unchanged) */}
        <div className="mt-24 lg:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, label: "Single Origin", sub: "Traceable to source" },
              { icon: ShieldCheck, label: "Lab Tested", sub: "Rigorous purity check" },
              { icon: Sun, label: "Sun Dried", sub: "Ancient preservation" },
              { icon: Sprout, label: "Wild Crafted", sub: "Beyond organic" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-3 group border-l border-[#1A2118]/10 pl-6 hover:border-[#B56B56] transition-colors duration-500">
                <item.icon className="w-5 h-5 text-[#1A2118]/40 group-hover:text-[#B56B56] transition-colors" />
                <div>
                  <h4 className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#1A2118] mb-1">{item.label}</h4>
                  <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-medium text-[#1A2118]/50 uppercase tracking-wide">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;