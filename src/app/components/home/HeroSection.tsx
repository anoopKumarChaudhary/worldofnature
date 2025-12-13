"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Sprout, FlaskConical } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg5.png"
          alt="Nature background"
          fill
          priority
          quality={90}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="hidden md:block object-cover"
        />
        <Image
          src="/bg13.png"
          alt="Nature background mobile"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="block md:hidden object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/65" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

        {/* TAG */}
        <div className="
          inline-flex items-center gap-3 px-6 py-2 mb-8 md:mb-12
          bg-gradient-to-b from-white/25 to-white/10
          border border-white/25
          backdrop-blur-xl md:backdrop-blur-2xl
          shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_16px_40px_rgba(0,0,0,0.25)]
          text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] text-white
        ">
          <span className="w-1.5 h-1.5 bg-[#B56B56] rounded-full animate-pulse" />
          Est. 2025 • World of Nature
        </div>

        {/* HEADLINE */}
        <h1 className="mb-6 md:mb-8 leading-[0.95] text-white">
          <span
            className="block font-serif italic text-balance animate-reveal-up"
            style={{ fontSize: "clamp(2.6rem, 6.5vw, 6.5rem)", animationDelay: "0.1s" }}
          >
            Pure by Nature.
          </span>

          <span
            className="block font-sans font-bold uppercase tracking-tight text-balance animate-reveal-up text-white/95"
            style={{ fontSize: "clamp(1.8rem, 5.2vw, 5.5rem)", animationDelay: "0.2s" }}
          >
            Powerful by Design.
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          className="max-w-3xl mx-auto mb-10 md:mb-14 font-serif italic text-white/90 animate-reveal-up"
          style={{ fontSize: "clamp(1.05rem, 2.4vw, 1.6rem)", animationDelay: "0.35s" }}
        >
          100% natural, ethically sourced oils, seeds, teas & shilajit.
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 animate-reveal-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Link
            href="/shop"
            className="
              h-14 px-10
              bg-[#F2F0EA] text-[#1A2118]
              font-bold uppercase tracking-widest text-sm
              flex items-center justify-center gap-3
              shadow-xl hover:bg-[#B56B56] hover:text-white
              transition-all active:scale-95
            "
          >
            Shop Now
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="
              h-14 px-10
              bg-gradient-to-b from-white/18 to-white/8
              border border-white/25
              backdrop-blur-xl md:backdrop-blur-2xl
              shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_14px_35px_rgba(0,0,0,0.3)]
              text-white/90 font-bold uppercase tracking-widest text-sm
              flex items-center justify-center
              hover:bg-white hover:text-[#1A2118]
              transition-all active:scale-95
            "
          >
            Our Philosophy
          </Link>
        </div>

        {/* CERTIFICATIONS */}
        <div
          className="mt-12 md:mt-20 animate-reveal-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="
            flex flex-wrap justify-center gap-6 md:gap-8
            px-6 md:px-8 py-5 md:py-6
            bg-gradient-to-b from-white/22 to-white/10
            border border-white/25
            backdrop-blur-xl md:backdrop-blur-2xl
            shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_22px_60px_rgba(0,0,0,0.38)]
          ">
            <Cert icon={<Leaf />} label="Organic" />
            <Divider />
            <Cert icon={<Sprout />} label="Non-GMO" />
            <Divider />
            <Cert icon={<FlaskConical />} label="Lab Tested" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Cert = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex flex-col items-center gap-2 text-white">
    <div className="text-[#B56B56]">{icon}</div>
    <span className="text-[10px] font-bold uppercase tracking-widest">
      {label}
    </span>
  </div>
);

const Divider = () => (
  <span className="hidden sm:block w-px h-8 bg-white/30" />
);

export default HeroSection;
