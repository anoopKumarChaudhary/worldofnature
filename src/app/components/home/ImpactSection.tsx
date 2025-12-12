"use client";

import React from "react";
import Link from "next/link";
import { Sprout, ShieldCheck, ArrowRight, CheckCircle2, Recycle, Heart } from "lucide-react";

const ImpactSection = () => {
  const pillars = [
    {
      id: "01",
      icon: Sprout,
      title: "Honest Trade",
      // Old: Supply Chain Integrity / Intermediaries...
      // New: Simple, human explanation.
      description: "We work directly with farmers. No middlemen. This ensures they get paid fairly for their hard work, keeping the community thriving."
    },
    {
      id: "02",
      icon: ShieldCheck,
      title: "Lab Verified",
      // Old: Bio-Active Purity / Spectroscopy...
      description: "Zero fake stuff. Every single batch is tested in a lab to guarantee it is 100% pure, safe, and potent before it reaches you."
    },
    {
      id: "03",
      icon: Recycle,
      title: "Zero Waste",
      // Old: Material Circularity / Polymers...
      description: "Our packaging loves the earth. It is designed to break down naturally (biodegradable), leaving no plastic waste behind."
    },
    {
      id: "04",
      icon: Heart,
      title: "Giving Back",
      // Old: Ecological Reinvestment / Allocation...
      description: "We don't just take; we give back. A portion of every sale goes directly to planting trees and protecting Himalayan nature."
    }
  ];

  return (
    // BG: Dark Olive (#2C3326) - The "Dark Mode" of your theme
    <section className="relative py-9 lg:py-32 bg-[#2C3326] text-[#F2F3EE] overflow-hidden">
      
      {/* Texture: Subtle Dust */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>

      <div className="container mx-auto px-[8px] md:px-8 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-8 md:mb-16 gap-8 border-b border-[#8C9178]/30 pb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
               <CheckCircle2 className="w-4 h-4 text-[#A9AB94]" />
               <span className="font-mono text-[10px] md:text-[11px] text-[#A9AB94] font-bold tracking-[0.2em] uppercase">
                  Ethical Standards
               </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-6xl leading-[0.95] text-[#F2F3EE]">
              Our <span className="italic text-[#8C9178]">Promise.</span>
            </h2>
          </div>
          
          <div className="max-w-md text-left lg:text-right">
            <p className="font-sans text-sm text-[#F2F3EE]/70 leading-relaxed">
              Wellness cannot exist in isolation. Our model is designed to support your health and the health of the planet simultaneously.
            </p>
          </div>
        </div>

        {/* === THE CARDS === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="
                group relative 
                p-4 md:p-10 
                /* Card BG: Slightly lighter than section BG for depth */
                bg-[#343D2D] 
                border border-[#8C9178]/20
                rounded-sm 
                hover:border-[#F2F3EE]/30
                transition-all duration-500 hover:-translate-y-1
              "
            >
              {/* Large Number Background */}
              <span className="absolute top-4 right-6 font-serif text-6xl md:text-8xl text-[#F2F3EE]/[0.03] font-bold select-none pointer-events-none group-hover:text-[#F2F3EE]/[0.05] transition-colors">
                {pillar.id}
              </span>

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  {/* Icon Container */}
                  <div className="
                    w-10 h-10 md:w-12 md:h-12 rounded-full 
                    bg-[#2C3326] border border-[#8C9178]/30
                    flex items-center justify-center 
                    text-[#A9AB94] 
                    group-hover:bg-[#F2F3EE] group-hover:text-[#2C3326] 
                    transition-all duration-500
                  ">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl md:text-3xl text-[#F2F3EE]">
                    {pillar.title}
                  </h3>
                </div>

                <p className="font-sans text-xs md:text-sm text-[#F2F3EE]/60 leading-7 max-w-md group-hover:text-[#F2F3EE]/80 transition-colors">
                  {pillar.description}
                </p>
                
                {/* Accent Line */}
                <div className="mt-4 md:mt-8 h-px w-12 bg-[#8C9178]/50 group-hover:w-full group-hover:bg-[#F2F3EE]/50 transition-all duration-700 ease-out" />
              </div>
            </div>
          ))}
        </div>

        {/* === FOOTER ACTION === */}
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-[#8C9178]/20">
           <span className="font-mono text-[10px] uppercase tracking-widest text-[#F2F3EE]/40">
               Transparency Report 2024
           </span>

           <Link href="/about" className="group flex items-center gap-3 text-[#F2F3EE] hover:text-[#A9AB94] transition-colors">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                 Read Our Full Story
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;