"use client";

import React from "react";
import { Sprout, Droplets, HeartHandshake, ShieldCheck } from "lucide-react";

const ImpactSection = () => {
  const pillars = [
    {
      icon: Sprout,
      title: "Ethical Sourcing",
      description: "We work directly with small-scale farmers, ensuring fair wages and sustainable harvesting practices."
    },
    {
      icon: ShieldCheck,
      title: "100% Chemical Free",
      description: "Lab-tested for purity. No additives, no preservatives, just nature in its most potent form."
    },
    {
      icon: Droplets,
      title: "Zero Plastic",
      description: "Our packaging is biodegradable and plastic-free, honoring the earth that provides for us."
    },
    {
      icon: HeartHandshake,
      title: "Community First",
      description: "A portion of every sale goes back to preserving the indigenous ecosystems of Kashmir."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#1A2118] text-[#F2F0EA]">
      <div className="container-custom mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-[#B56B56] font-bold tracking-widest uppercase text-xs mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight">
              Conscious choices for a <span className="italic text-[#B56B56]">better world.</span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-[#F2F0EA]/80 font-light leading-relaxed">
              We believe that true wellness extends beyond the individual to the community and the planet. Every product you choose supports a cycle of care, respect, and regeneration.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="p-8 border border-[#F2F0EA]/10 rounded-2xl hover:bg-[#F2F0EA]/5 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-[#B56B56]/20 rounded-full flex items-center justify-center mb-6 text-[#B56B56] group-hover:scale-110 transition-transform">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif mb-3">{pillar.title}</h3>
              <p className="text-sm text-[#F2F0EA]/60 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
