"use client";

import React from "react";
import Image from "next/image";
import { Sprout, MapPin, Microscope, Sun, ArrowRight, Star } from "lucide-react";

const PhilosophySection = () => {
  // Color Palette:
  // Background: #E2E4D8 (Light Olive)
  // Text: #1A2118 (Forest Green / Nearly Black)
  // Accent: #B56B56 (Terracotta)

  const features = [
    { 
      icon: MapPin, 
      label: "Geo-Traceable Sourcing", 
      desc: "Verified origin, farm-to-jar transparency." 
    },
    { 
      icon: Microscope, 
      label: "Bio-Active Purity", 
      desc: "Rigorous testing for zero contaminants." 
    },
    { 
      icon: Sun, 
      label: "Ancient Preservation", 
      desc: "Slow-cured using elemental methods." 
    },
    { 
      icon: Sprout, 
      label: "Ethically Foraged", 
      desc: "Sustainable harvest from wild ecosystems." 
    },
  ];

  return (
    <section className="relative bg-[#E2E4D8] text-[#1A2118] py-24 lg:py-32 overflow-hidden">
      
      {/* 1. GLOBAL TEXTURE 
         This puts a paper grain over the WHOLE section, including the image. 
         This is key to making the image look like it's "printed" on the page.
      */}
      <div className="absolute inset-0 opacity-[0.35] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-10"></div>

      <div className="container-custom mx-auto px-6 lg:px-12 relative z-10">
        
        {/* === HEADER === */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-4xl">
            {/* Label: Technical/Medical luxury feel */}
            <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-[0.25em] text-[#B56B56] mb-6 block">
              Our Methodology
            </span>
            
            {/* Headline: Medium weight is more elegant than Bold */}
            <h2 className="font-heading text-5xl lg:text-7xl leading-[1.05] font-medium text-[#1A2118]">
              Untouched by Industry. <br/>
              <span className="italic font-serif font-light text-[#596157]">Guided by Nature.</span>
            </h2>
          </div>
        </div>

        {/* === MAIN CONTENT === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Text Content */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative z-20">
             <div className="lg:pr-4">
                
                {/* Lead Paragraph: Larger text bridges the gap */}
                <p className="font-[family-name:var(--font-montserrat)] text-xl lg:text-2xl font-light leading-relaxed text-[#1A2118] mb-8">
                  In an era of artificial optimization, our process is radical simplicity: we find earth's most potent botanicals and <span className="italic font-medium text-[#B56B56]">step out of the way.</span>
                </p>
                
                {/* Secondary Body */}
                <p className="font-[family-name:var(--font-montserrat)] text-base lg:text-lg font-light leading-loose text-[#1A2118]/80 mb-12">
                  We don't synthesize active ingredients; we protect them. Every jar is a direct transfer of raw intelligence from the wild ecosystem to your home.
                </p>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
                  <button className="group flex items-center gap-4 px-8 py-4 bg-[#1A2118] text-[#E2E4D8] hover:bg-[#B56B56] transition-all duration-500 rounded-sm shadow-lg shadow-[#1A2118]/10">
                    <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-[0.2em]">View The Standards</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex items-center gap-3 text-[#1A2118]/70">
                     <Star className="w-4 h-4 text-[#B56B56] fill-current" />
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-montserrat)]">Certified Raw Grade</span>
                  </div>
                </div>
             </div>
          </div>

          {/* RIGHT: BLENDED IMAGE (The "Mixed" Look) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 flex justify-center lg:justify-end">
             
             {/* 2. BACKLIGHT GLOW 
                This adds a "halo" behind the image, making it look angelic/pure.
             */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#B56B56]/20 blur-[90px] rounded-full pointer-events-none" />

             <div className="relative w-full max-w-lg aspect-[4/5] select-none pointer-events-none">
               <Image 
                 src="/bg6.png" 
                 alt="Raw unprocessed ingredients"
                 fill
                 // mix-blend-multiply ensures white parts of the image turn transparent and dark parts soak into the background color
                 className="object-cover mix-blend-multiply opacity-100"
                 style={{
                   // 3. THE SOFT MASK
                   // 'black 40%' means the center 40% is fully visible
                   // 'transparent 70%' means it fades out completely by 70%
                   maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                   WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
                 }}
               />
               
               {/* 4. COLOR HARMONIZER 
                  This overlay forces the image to adopt the olive tones of the background slightly,
                  preventing it from looking like a "sticker".
               */}
               <div className="absolute inset-0 bg-[#E2E4D8]/10 mix-blend-color pointer-events-none" 
                 style={{
                   maskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)',
                   WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 70%)'
                 }}
               />
            </div>
          </div>
        </div>

        {/* === FEATURE GRID === */}
        <div className="mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, i) => (
              <div key={i} className="group border border-[#1A2118]/5 hover:border-[#B56B56]/30 p-6 transition-all duration-500 bg-[#E2E4D8] hover:bg-[#E2E4D8]/50 rounded-sm">
                <div className="flex flex-col items-start gap-4">
                  <item.icon className="w-6 h-6 text-[#1A2118]/80 group-hover:text-[#B56B56] transition-colors mb-2" />
                  <div>
                    {/* Feature Title */}
                    <h4 className="font-heading text-lg font-bold text-[#1A2118] mb-2 leading-tight">
                      {item.label}
                    </h4>
                    {/* Feature Desc */}
                    <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#1A2118]/60 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
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