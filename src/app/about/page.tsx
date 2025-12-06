"use client";

import React from "react";
import Link from "next/link";
import {
  BadgeCheck,
  Warehouse,
  Users,
  ArrowRight,
  Leaf,
  Sprout,
} from "lucide-react";

export default function AboutPage() {
  const backgroundImage = "/d1.png";

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden pb-20">
      {/* --- STYLES & ANIMATIONS --- */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#F2F0EA]" />

      {/* --- HERO SECTION --- */}
      <header className="relative pt-32 pb-16 px-6 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="lg:w-1/2 animate-fade-up">
              <div className="inline-flex items-center gap-3 mb-6 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-[#1A2118]/5">
                <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A2118]">
                  Our Story
                </span>
              </div>

              <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-[#1A2118] mb-8 leading-[0.9]">
                From Soil <br /> to{" "}
                <span className="italic text-[#596157]">Soul.</span>
              </h1>

              <p className="text-xl text-[#596157] max-w-xl leading-relaxed font-light mb-10 border-l border-[#1A2118]/20 pl-6">
                We believe that real food is powerful medicine—and a deeper
                connection to the world around us. World of Nature began with a
                simple desire: find the purest organic essentials.
              </p>

              <div className="flex gap-6">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-serif font-bold text-[#1A2118]">
                    2025
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40">
                    Established
                  </span>
                </div>
                <div className="w-px h-12 bg-[#1A2118]/10"></div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-serif font-bold text-[#1A2118]">
                    100%
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/40">
                    Traceable
                  </span>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div
              className="lg:w-1/2 relative animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative aspect-[4/3] bg-[#E8E6DF] rounded-[3rem] overflow-hidden shadow-2xl shadow-[#1A2118]/10 border-[8px] border-white">
                <img
                  src="/won6.JPG"
                  alt="Organic Farm"
                  className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-[#1A2118]/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#1A2118] text-[#F2F0EA] p-6 rounded-[2rem] shadow-xl hidden md:block">
                <Leaf className="w-8 h-8 text-[#BC5633] mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">
                  Sourced from
                </p>
                <p className="font-serif text-xl">Pristine Valleys</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="relative py-24 px-6 lg:px-12 z-10">
        <div className="container mx-auto max-w-4xl text-center">
          <Sprout className="w-12 h-12 text-[#1A2118]/20 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1A2118] mb-8 leading-tight">
            "To inspire a healthier world by connecting people to real food.
            We’re fostering a movement back to nature."
          </h2>
          <div className="h-px w-24 bg-[#BC5633] mx-auto mb-8"></div>
          <p className="text-[#596157]">The World of Nature Manifesto</p>
        </div>
      </section>

      {/* --- CORE VALUES (One UI Cards) --- */}
      <section className="relative py-16 px-6 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[2.5rem] hover:bg-white hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl group">
              <div className="w-16 h-16 bg-[#F2F0EA] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#1A2118] transition-colors duration-500">
                <BadgeCheck className="w-8 h-8 text-[#1A2118] group-hover:text-[#BC5633] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1A2118] mb-4">
                Uncompromising Purity
              </h3>
              <p className="text-[#596157] leading-relaxed">
                If it isn’t 100% organic, lab-tested, and free from anything
                artificial, we don’t offer it.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[2.5rem] hover:bg-white hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl group">
              <div className="w-16 h-16 bg-[#F2F0EA] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#1A2118] transition-colors duration-500">
                <Warehouse className="w-8 h-8 text-[#1A2118] group-hover:text-[#BC5633] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1A2118] mb-4">
                Regenerative Sourcing
              </h3>
              <p className="text-[#596157] leading-relaxed">
                We partner with farms that go beyond organic—rebuilding soil
                health and promoting biodiversity.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-10 rounded-[2.5rem] hover:bg-white hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl group">
              <div className="w-16 h-16 bg-[#F2F0EA] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#1A2118] transition-colors duration-500">
                <Users className="w-8 h-8 text-[#1A2118] group-hover:text-[#BC5633] transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1A2118] mb-4">
                Honest Transparency
              </h3>
              <p className="text-[#596157] leading-relaxed">
                You deserve to know where your food comes from. Every product is
                traceable back to source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="relative py-24 px-6 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-[#1A2118] text-[#F2F0EA] rounded-[3rem] p-8 lg:p-16 overflow-hidden relative shadow-2xl">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[120px] opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden border border-white/10">
                  <img
                    src="/i4.png"
                    alt="Process"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border border-white/5 rounded-[3rem] pointer-events-none" />
              </div>

              <div className="space-y-8">
                <h2 className="text-4xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
                  The Journey to <br />
                  <span className="text-[#BC5633] italic">Your Table.</span>
                </h2>

                <p className="text-lg text-[#F2F0EA]/70 leading-relaxed font-light">
                  Our team travels to pristine regions to meet farmers who share
                  our values. Together we ensure every batch of honey, every
                  drop of oil, and every tea leaf is harvested at its peak and
                  minimally processed.
                </p>

                <div className="pt-4">
                  <Link
                    href="/shop"
                    className="inline-flex h-16 px-10 items-center gap-3 bg-[#F2F0EA] text-[#1A2118] rounded-[2rem] font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
                  >
                    Shop Our Process <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
