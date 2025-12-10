"use client";

import React from "react";
import Link from "next/link";
import { Sprout, Droplets, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

const ImpactSection = () => {
  const pillars = [
    {
      id: "01",
      icon: Sprout,
      title: "Ethical Sourcing",
      description: "We bypass middlemen to work directly with small-scale farmers, ensuring wages that dignify their labor and regenerate their land."
    },
    {
      id: "02",
      icon: ShieldCheck,
      title: "100% Chemical Free",
      description: "Rigorous lab-testing guarantees purity. We refuse additives, binders, and preservatives. Just nature in its most potent, unadulterated form."
    },
    {
      id: "03",
      icon: Droplets,
      title: "Zero Plastic",
      description: "Our commitment extends to the packaging. Biodegradable, compostable, and plastic-free materials that honor the earth that provides for us."
    },
    {
      id: "04",
      icon: HeartHandshake,
      title: "Community First",
      description: "A portion of every sale goes back to preserving the indigenous ecosystems of Kashmir, ensuring the rhythm of nature continues."
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#1A2118] text-[#F2F0EA] overflow-hidden">
      
      {/* 1. BACKGROUND TEXTURE (Premium Matte Feel) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      
      {/* 2. DECORATIVE GRADIENT GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B56B56] rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="container-custom mx-auto relative z-10 max-w-7xl">
        
        {/* HEADER: Editorial Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-16 border-b border-[#F2F0EA]/5 pb-12">
          <div className="max-w-2xl">
            <span className="font-[family-name:var(--font-montserrat)] text-[#B56B56] font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              The Standard
            </span>
            <h2 className="font-heading text-5xl lg:text-7xl leading-[0.95] font-bold">
              Conscious choices for <br/>
              a <span className="text-[#B56B56] opacity-90">better world.</span>
            </h2>
          </div>
          <div className="max-w-md text-left lg:text-right">
            <p className="font-[family-name:var(--font-montserrat)] text-sm lg:text-base text-[#F2F0EA]/70 font-light leading-relaxed">
              True wellness extends beyond the individual. Every product you choose supports a cycle of care, respect, and regeneration.
            </p>
          </div>
        </div>

        {/* THE MANIFESTO GRID (Architectural Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`
                group relative p-10 lg:p-14 border-[#F2F0EA]/5 hover:bg-[#F2F0EA]/[0.02] transition-colors duration-500
                ${index % 2 === 0 ? 'md:border-r' : ''} 
                ${index < 2 ? 'border-b' : ''}
                ${index !== pillars.length - 1 ? 'border-b md:border-b-0' : ''}
                /* Mobile: all have bottom border except last */
                ${index < 3 ? 'max-md:border-b' : ''}
                /* Tablet+: Top 2 have bottom border */
                ${index < 2 ? 'md:border-b' : ''}
              `}
            >
              
              {/* Header: Number & Icon */}
              <div className="flex justify-between items-start mb-8">
                <span className="font-[family-name:var(--font-montserrat)] text-4xl lg:text-5xl font-bold text-[#F2F0EA]/10 group-hover:text-[#B56B56] transition-colors duration-500">
                  {pillar.id}
                </span>
                <div className="w-14 h-14 rounded-full border border-[#F2F0EA]/20 flex items-center justify-center text-[#F2F0EA]/60 group-hover:border-[#B56B56] group-hover:text-[#B56B56] group-hover:scale-110 transition-all duration-500">
                  <pillar.icon className="w-5 h-5" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl lg:text-3xl mb-4 group-hover:translate-x-2 transition-transform duration-500 font-semibold">
                {pillar.title}
              </h3>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#F2F0EA]/60 leading-relaxed max-w-sm group-hover:text-[#F2F0EA]/80 transition-colors">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-16 flex justify-center lg:justify-start">
           <Link href="/about" className="group flex items-center gap-4 text-[#F2F0EA]">
              <div className="w-12 h-12 rounded-full border border-[#F2F0EA]/20 flex items-center justify-center group-hover:bg-[#B56B56] group-hover:border-[#B56B56] transition-all duration-300">
                 <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
              </div>
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest group-hover:text-[#B56B56] transition-colors">
                 Read Our Full Impact Report
              </span>
           </Link>
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;