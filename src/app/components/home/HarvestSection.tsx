"use client";

import React from "react";
import Image from "next/image";
import { CloudRain, Sun, Wind } from "lucide-react";

const HarvestSection = () => {
  return (
    <section className="py-24 bg-[#1A2118] text-[#F2F0EA] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#BC5633] mb-6">The Cycle</h2>
            <h3 className="text-4xl lg:text-6xl font-serif mb-12">Aligned with the Seasons.</h3>
            
            <div className="space-y-12 relative">
              {/* Connecting Line */}
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-[#F2F0EA]/10" />

              {[
                { title: "Monsoon Harvest", desc: "Wild honey collection and spice planting.", icon: CloudRain },
                { title: "Summer Curing", desc: "Sun-drying turmeric and chilies.", icon: Sun },
                { title: "Winter Resting", desc: "The soil sleeps. We plan and prepare.", icon: Wind }
              ].map((step, i) => (
                <div key={i} className="relative flex gap-8 group">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#1A2118] border border-[#F2F0EA]/20 flex items-center justify-center shrink-0 group-hover:border-[#BC5633] group-hover:bg-[#BC5633] transition-all duration-500">
                    <step.icon className="w-5 h-5 text-[#F2F0EA]/60 group-hover:text-[#F2F0EA] transition-colors" />
                  </div>
                  <div className="pt-2">
                    <h4 className="text-2xl font-serif mb-2 text-[#F2F0EA] group-hover:text-[#BC5633] transition-colors">{step.title}</h4>
                    <p className="text-[#F2F0EA]/40 text-sm font-light leading-relaxed max-w-sm group-hover:text-[#F2F0EA]/80 transition-colors">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-full overflow-hidden border border-[#F2F0EA]/5 p-12 relative">
              <div className="absolute inset-0 border-[1px] border-[#F2F0EA]/5 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#BC5633] rounded-full shadow-[0_0_20px_#BC5633]" />
              </div>
              <div className="w-full h-full rounded-full overflow-hidden relative group">
                 <Image 
                   src="/won23.JPG" 
                   alt="Seasonal Cycle" 
                   fill
                   sizes="(max-width: 768px) 100vw, 50vw"
                   className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-[2s]" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#1A2118] to-transparent opacity-40" />
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8 backdrop-blur-sm bg-black/20 rounded-full border border-white/10">
                      <p className="font-serif text-3xl italic text-[#F2F0EA]">Nature Waits <br/> for No One.</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HarvestSection;
