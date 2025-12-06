"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Leaf, Sprout } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-[#F2F0EA] text-[#1A2118]">
      
      {/* CLEAN BACKGROUND (No Overlays) */}

      {/* --- CENTERED CONTENT --- */}
      <div className="container mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-[#1A2118]/5 border border-[#1A2118]/10 backdrop-blur-md text-xs font-bold uppercase tracking-[0.2em] mb-12 animate-reveal-up">
          <span className="w-2 h-2 bg-[#BC5633] rounded-full animate-pulse" />
          Est. 2025 • World of Nature
        </div>
        
        <h1 className="text-6xl lg:text-[9rem] leading-[0.85] font-serif font-bold tracking-tight mb-12 drop-shadow-sm text-[#1A2118]">
          <span className="block animate-reveal-up" style={{ animationDelay: '0.1s' }}>Nature&rsquo;s</span>
          <span className="block animate-reveal-up" style={{ animationDelay: '0.2s' }}>Unfiltered</span>
          <span className="block animate-reveal-up text-[#BC5633]" style={{ animationDelay: '0.3s' }}>Intelligence.</span>
        </h1>
        
        <p className="text-xl lg:text-2xl leading-relaxed font-light max-w-2xl mx-auto mb-16 animate-reveal-up text-balance text-[#4A5248]" style={{ animationDelay: '0.4s' }}>
          We curate essentials that are not made, but harvested. Pure, wild-crafted, and deeply connected to the source.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-reveal-up" style={{ animationDelay: '0.5s' }}>
          <Link
            href="/shop"
            className="h-16 px-12 bg-[#1A2118] text-[#F2F0EA] rounded-full flex items-center gap-3 font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
          >
            Start Foraging <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="h-16 px-12 border border-[#1A2118]/20 rounded-full flex items-center gap-3 font-bold text-sm uppercase tracking-widest hover:bg-[#1A2118] hover:text-[#F2F0EA] transition-all text-[#1A2118]"
          >
            Our Philosophy
          </Link>
        </div>
        
        {/* Watch Film Link */}
        <div className="mt-8 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
          <button className="group flex items-center gap-3 text-[#1A2118] hover:text-[#BC5633] transition-colors">
            <div className="w-10 h-10 rounded-full border border-[#1A2118]/20 flex items-center justify-center group-hover:border-[#BC5633] group-hover:scale-110 transition-all">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-current border-b-[5px] border-b-transparent ml-1" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[#BC5633]">Watch the Film</span>
          </button>
        </div>

        {/* --- PROFESSIONAL TOUCHES: TRUST BAR --- */}
        <div className="mt-16 animate-reveal-up opacity-60" style={{ animationDelay: '0.7s' }}>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-[#1A2118]/60">Trusted by Nature&rsquo;s Best</p>
          <div className="flex flex-wrap justify-center gap-12 items-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {/* Simple Text Logos for "Professional" Vibe */}
             <span className="font-serif text-xl italic text-[#1A2118]">Vogue Living</span>
             <span className="w-1 h-1 bg-[#1A2118]/20 rounded-full" />
             <span className="font-serif text-xl italic text-[#1A2118]">Kinfolk</span>
             <span className="w-1 h-1 bg-[#1A2118]/20 rounded-full" />
             <span className="font-serif text-xl italic text-[#1A2118]">Goop</span>
             <span className="w-1 h-1 bg-[#1A2118]/20 rounded-full" />
             <span className="font-serif text-xl italic text-[#1A2118]">Monocle</span>
          </div>
        </div>
      </div>

      {/* --- FOREGROUND FOLIAGE (Immersive Depth) --- */}
      <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-20 overflow-hidden">
         {/* Left Bush */}
         <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1A2118]/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s' }} />
         <Leaf className="absolute bottom-[-20px] left-[-20px] w-48 h-48 text-[#1A2118]/10 rotate-45 blur-[2px] animate-float" style={{ animationDuration: '10s' }} />
         
         {/* Right Bush */}
         <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#BC5633]/5 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '1s' }} />
         <Sprout className="absolute bottom-[-30px] right-[-10px] w-56 h-56 text-[#1A2118]/10 -rotate-12 blur-[3px] animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow opacity-60 mix-blend-multiply z-30">
         <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A2118]">Scroll</span>
         <div className="w-[1px] h-12 bg-gradient-to-b from-[#1A2118] to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
