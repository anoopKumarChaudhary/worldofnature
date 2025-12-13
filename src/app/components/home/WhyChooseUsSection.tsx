"use client";

import React from "react";
import { Tractor, FlaskConical, Sun, Handshake } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Tractor,
      title: "Direct Farm Sourcing",
      desc: "Sourced directly from the earth, not factories.",
    },
    {
      icon: FlaskConical,
      title: "Small Batch Processing",
      desc: "Crafted in limited quantities for maximum quality.",
    },
    {
      icon: Sun,
      title: "Traditional Extraction",
      desc: "Ancient methods, no harsh chemicals or heat.",
    },
    {
      icon: Handshake,
      title: "No Middlemen",
      desc: "Farmers to you. 100% fair.",
    },
  ];

  return (
    <section className="py-8 md:py-24 bg-[#F8F7F5] text-[#1A2118] border-t border-[#1A2118]/5">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-serif text-2xl md:text-4xl text-[#1A2118] mb-3 md:mb-4">
            Why Choose Us
          </h2>
          <div className="w-8 md:w-12 h-0.5 bg-[#B56B56] mx-auto opacity-50" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
          {reasons.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="
                w-10 h-10 mb-3 md:w-16 md:h-16 md:mb-6 rounded-full 
                bg-white border border-[#1A2118]/10 
                flex items-center justify-center 
                text-[#B56B56] group-hover:scale-110 transition-transform duration-500
                shadow-sm
              ">
                <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-sm md:text-xl text-[#1A2118] mb-1.5 md:mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="font-sans text-[10px] md:text-sm text-[#1A2118]/70 leading-relaxed max-w-[150px] md:max-w-[250px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
