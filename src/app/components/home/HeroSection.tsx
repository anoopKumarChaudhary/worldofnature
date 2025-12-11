"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Sprout } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      
      {/* 1. BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <Image
          src="/bg5.png"
          alt="Lush nature landscape"
          fill
          className="object-cover hidden md:block"
          priority
          quality={100}
        />
        {/* Mobile Background */}
        <Image
          src="/bg13.png"
          alt="Lush nature landscape mobile"
          fill
          className="object-cover block md:hidden"
          priority
          quality={100}
        />
        {/* Darker Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-[1px]" />
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="container-custom mx-auto relative z-10 text-center">
        
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-12 animate-reveal-up text-white/90">
          <span className="w-1.5 h-1.5 bg-[#B56B56] rounded-full animate-pulse" />
          Est. 2025 • World of Nature
        </div>
        
        {/* === TYPOGRAPHY UPDATE === */}
        {/* Using "Scale Contrast": Small Italic vs. Massive Bold */}
        <h1 className="flex flex-col items-center justify-center mb-10 text-white leading-none">
          
          {/* Line 1: Elegant Italic Serif */}
          <span className="block font-serif italic text-3xl md:text-5xl lg:text-6xl text-white/90 mb-[-10px] md:mb-[-20px] z-10 animate-reveal-up" style={{ animationDelay: '0.1s' }}>
            The Earth&rsquo;s
          </span>
          
          {/* Line 2: Massive Sans/Serif Hybrid (The Impact) */}
          <span className="block font-serif font-black text-[15vw] lg:text-[11rem] uppercase tracking-tighter text-white mix-blend-overlay opacity-90 animate-reveal-up" style={{ animationDelay: '0.2s' }}>
            ORIGINAL
          </span>
          
          {/* Line 3: Spaced Out Sans */}
          <span className="block font-sans font-light text-sm md:text-xl lg:text-2xl tracking-[0.4em] uppercase text-white/80 mt-[-10px] md:mt-[-20px] animate-reveal-up" style={{ animationDelay: '0.3s' }}>
            Technology
          </span>
        </h1>
        
        {/* Subtext */}
        <p className="text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-xl mx-auto mb-12 animate-reveal-up text-balance text-white/80 font-serif italic" style={{ animationDelay: '0.4s' }}>
          &ldquo;We don&rsquo;t manufacture essentials. <br className="hidden md:block"/> We simply harvest them.&rdquo;
        </p>

       <div className="flex flex-col sm:flex-row justify-center items-center gap-5 animate-reveal-up" style={{ animationDelay: '0.5s' }}>
          <Link
            href="/shop"
            className="h-14 px-10 bg-[#F2F0EA] text-[#1A2118] rounded-full flex items-center gap-3 font-bold text-xs uppercase tracking-widest hover:bg-[#B56B56] hover:text-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 group"
          >
            {/* CHANGED TEXT HERE */}
            Shop the Harvest 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/about"
            className="h-14 px-10 border border-white/30 rounded-full flex items-center gap-3 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#1A2118] transition-all text-white backdrop-blur-sm"
          >
            Our Philosophy
          </Link>
        </div>
        
        {/* Watch Film Link */}
        {/* <div className="mt-10 animate-reveal-up" style={{ animationDelay: '0.6s' }}>
          <button className="group flex items-center gap-3 text-white/70 hover:text-[#B56B56] transition-colors">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#B56B56] group-hover:scale-110 transition-all backdrop-blur-sm">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-current border-b-[5px] border-b-transparent ml-1" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[#B56B56]">Watch the Film</span>
          </button>
        </div> */}

        {/* Trust Bar */}
        <div className="mt-16 animate-reveal-up opacity-60" style={{ animationDelay: '0.7s' }}>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] mb-6 text-white/50">As seen in</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center grayscale hover:grayscale-0 transition-all duration-500 text-white/80">
             <span className="font-serif text-lg italic">Vogue</span>
             <span className="w-1 h-1 bg-white/20 rounded-full" />
             <span className="font-serif text-lg italic">Kinfolk</span>
             <span className="w-1 h-1 bg-white/20 rounded-full" />
             <span className="font-serif text-lg italic">Goop</span>
          </div>
        </div>
      </div>

      {/* Foreground Effects */}
      <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-20 overflow-hidden">
         <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#1A2118]/30 rounded-full blur-3xl animate-float" style={{ animationDuration: '15s' }} />
         <Leaf className="absolute bottom-[-20px] left-[-20px] w-48 h-48 text-black/20 rotate-45 blur-[2px] animate-float" style={{ animationDuration: '10s' }} />
         <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-[#B56B56]/20 rounded-full blur-3xl animate-float" style={{ animationDuration: '18s', animationDelay: '1s' }} />
         <Sprout className="absolute bottom-[-30px] right-[-10px] w-56 h-56 text-black/20 -rotate-12 blur-[3px] animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }} />
      </div>

    </section>
  );
};

export default HeroSection;