"use client";

import React from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#E6E2D6]/50">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <Quote className="w-10 h-10 text-[#BC5633] mx-auto mb-8 opacity-50" />
        <h2 className="text-3xl lg:text-5xl font-serif text-[#1A2118] mb-16 max-w-4xl mx-auto leading-tight">
          &quot;I&apos;ve never tasted honey this complex before. It feels like I&apos;m tasting the forest itself. A truly grounding experience.&quot;
        </h2>
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-[#1A2118] rounded-full flex items-center justify-center text-[#F2F0EA] font-serif text-xl">
            E
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#1A2118]">Elena R.</p>
          <p className="text-xs text-[#596157]">Verified Buyer • Raw Honey</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
