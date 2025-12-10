"use client";

import React from "react";
import Link from "next/link";
import { Sprout, Droplets, HeartHandshake, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const ImpactSection = () => {
  const pillars = [
    {
      id: "01",
      icon: Sprout,
      title: "Supply Chain Integrity",
      description: "Direct-trade partnerships that bypass intermediaries, ensuring verifiable living wages and regenerative agricultural practices."
    },
    {
      id: "02",
      icon: ShieldCheck,
      title: "Bio-Active Purity",
      description: "Zero tolerance for synthetic additives. Every batch undergoes rigorous third-party spectroscopy to guarantee elemental composition."
    },
    {
      id: "03",
      icon: Droplets,
      title: "Material Circularity",
      description: "Our packaging ecosystem is engineered for complete biodegradation, utilizing plant-based polymers and compostable substrates."
    },
    {
      id: "04",
      icon: HeartHandshake,
      title: "Ecological Reinvestment",
      description: "A calculated percentage of revenue is contractually allocated to the preservation of indigenous Himalayan biodiversity."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0F140E] text-[#EBE9E4] overflow-hidden">
      
      {/* 1. ATMOSPHERE (Clean, no grids) */}
      {/* Subtle Noise Texture for premium matte finish */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container-custom mx-auto relative z-10 max-w-7xl px-6 lg:px-12">
        
        {/* === HEADER: Clean & Floating === */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-2 h-2 bg-[#B56B56] rounded-full" />
               <span className="font-[family-name:var(--font-montserrat)] text-[#B56B56] font-bold tracking-[0.25em] uppercase text-[10px]">
                  Corporate Responsibility
               </span>
            </div>
            <h2 className="font-heading text-5xl lg:text-7xl leading-[0.95] font-medium text-[#EBE9E4]">
              The <span className="text-[#B56B56]">Covenant.</span>
            </h2>
          </div>
          
          <div className="max-w-md text-left lg:text-right">
             <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 bg-[#EBE9E4]/5">
                <CheckCircle2 className="w-3 h-3 text-[#B56B56]" />
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#EBE9E4]/80">ISO 9001 Compliant Process</span>
             </div>
            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#EBE9E4]/60 font-light leading-relaxed">
              Wellness cannot exist in isolation. Our operational model is designed to support the metabolic health of the planet.
            </p>
          </div>
        </div>

        {/* === THE CARDS (Floating Blocks) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              // Card Styling: Slightly lighter background than section to create depth without borders
              className="group relative p-10 lg:p-14 bg-[#141A13] rounded-sm hover:bg-[#1A2118] transition-all duration-500 hover:-translate-y-1"
            >
              {/* Large Number Background (Subtle Depth) */}
              <span className="absolute top-6 right-8 font-heading text-8xl text-[#EBE9E4]/[0.02] font-bold select-none pointer-events-none">
                {pillar.id}
              </span>

              <div className="relative z-10">
                <div className="mb-6 flex items-center gap-4">
                  {/* Clean Icon Container */}
                  <div className="w-10 h-10 rounded-full bg-[#EBE9E4]/5 flex items-center justify-center text-[#B56B56] group-hover:bg-[#B56B56] group-hover:text-[#EBE9E4] transition-colors duration-500">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-medium text-[#EBE9E4]">
                    {pillar.title}
                  </h3>
                </div>

                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#EBE9E4]/50 leading-loose max-w-md group-hover:text-[#EBE9E4]/70 transition-colors">
                  {pillar.description}
                </p>
                
                {/* Optional: Minimal accent line on hover only */}
                <div className="mt-8 h-[2px] w-0 bg-[#B56B56] group-hover:w-12 transition-all duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>

        {/* === FOOTER ACTION === */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
           <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-widest text-[#EBE9E4]/30">
               Transparency Report 2024-25
           </span>

           <Link href="/about" className="group flex items-center gap-3 text-[#EBE9E4] hover:text-[#B56B56] transition-colors">
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest">
                 Read Full Documentation
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;