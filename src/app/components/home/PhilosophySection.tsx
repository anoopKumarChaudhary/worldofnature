"use client";

import React from "react";
import { Sprout, Globe, ShieldCheck, Sun, CheckCircle2 } from "lucide-react";

const PhilosophySection = () => {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-[#E6E2D6]/30 relative overflow-hidden">
      {/* Background Blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path fill="#BC5633" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.5C59.4,45.9,47.9,55,35.3,61.8C22.7,68.6,9,73.1,-3.4,79C-15.8,84.9,-26.9,92.2,-37.6,89.5C-48.3,86.8,-58.6,74.1,-66.4,60.2C-74.2,46.3,-79.5,31.2,-81.8,15.7C-84.1,0.2,-83.4,-15.7,-76.3,-29.1C-69.2,-42.5,-55.7,-53.4,-42.3,-60.9C-28.9,-68.4,-15.6,-72.5,-0.9,-70.9C13.8,-69.3,27.6,-62,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <Sprout className="w-8 h-8 text-[#BC5633] mx-auto mb-8 animate-float" />
        <h2 className="text-3xl lg:text-5xl font-serif text-[#1A2118] mb-12 leading-tight text-balance">
          We believe that true nourishment comes from <span className="italic text-[#596157]">respecting the rhythm</span> of nature, not forcing it.
        </h2>
        <div className="grid md:grid-cols-2 gap-12 text-left text-[#4A5248] leading-relaxed font-light text-lg">
          <p>
            <span className="text-5xl float-left mr-3 mt-[-8px] font-serif text-[#BC5633]">I</span>
            n a world obsessed with speed and mass production, we choose to slow down. We partner with small-scale farmers who treat their land as a legacy, not a resource to be depleted. Every jar of honey, every spoon of ghee, and every pinch of spice tells a story of patience.
          </p>
          <p>
            Our products are never altered, never rushed, and never compromised. We act merely as custodians, bridging the gap between the wild, untouched forests and your modern pantry. This is not just food; it is a return to the source.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1A2118]/10 pt-12">
          {[
            { icon: Globe, label: "Single Origin" },
            { icon: ShieldCheck, label: "Lab Tested" },
            { icon: Sun, label: "Sun Dried" },
            { icon: CheckCircle2, label: "Zero Additives" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="p-3 rounded-full bg-[#1A2118]/5 group-hover:bg-[#BC5633] group-hover:text-[#F2F0EA] transition-colors duration-500">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
