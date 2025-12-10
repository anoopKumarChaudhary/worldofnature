"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, BookOpen } from "lucide-react";

const JournalSection = () => {
  // Theme: Paper White / Light Grey
  const articles = [
    {
      id: "001",
      category: "Sourcing",
      title: "Why we wait until the first frost to harvest turmeric.",
      excerpt: "The chemical composition of the rhizome changes dramatically when ground temperature drops below freezing. We explore curcumin density.",
      readTime: "5 min",
      image: "/won8.JPG" 
    },
    {
      id: "002",
      category: "Analysis",
      title: "Decoding 'Active' Honey.",
      readTime: "3 min",
      image: "/won23.JPG"
    },
    {
      id: "003",
      category: "Heritage",
      title: "Heirloom Spices of Kashmir.",
      readTime: "4 min",
      image: "/won32.JPG"
    }
  ];

  return (
    // BACKGROUND: #F2F0EA (Bone White) - Very clean, high contrast with black text
    <section className="relative py-24 lg:py-32 bg-[#F2F0EA] text-[#1A2118] border-t border-[#1A2118]/10">
      
      {/* 1. TEXTURE */}
      <div className="absolute inset-0 opacity-[0.5] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      <div className="container-custom mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        
        {/* === HEADER (Grid Aligned) === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#1A2118]/10 pb-8 mb-0">
           <div className="lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B56B56] mb-2 block">
                Volume 01 — Field Notes
              </span>
              <h2 className="font-heading text-5xl lg:text-6xl text-[#1A2118] font-medium tracking-tight">
                The Research <span className="italic font-serif font-light text-[#1A2118]/50">Log.</span>
              </h2>
           </div>
           <div className="lg:col-span-4 flex items-end justify-start lg:justify-end mt-6 lg:mt-0">
              <Link href="/journal" className="group inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#1A2118] hover:text-[#B56B56] transition-colors">
                 Full Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
        </div>

        {/* === THE SWISS GRID === */}
        {/* A rigid grid with borders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-l border-[#1A2118]/10 border-b border-[#1A2118]/10">
           
           {/* --- LEFT COLUMN: FEATURED STORY (Spans 7) --- */}
           <div className="lg:col-span-7 border-r border-[#1A2118]/10 p-8 lg:p-12 relative group cursor-pointer hover:bg-[#1A2118]/[0.01] transition-colors">
              <Link href="#" className="block h-full flex flex-col justify-between">
                 
                 {/* Top: Meta */}
                 <div className="flex justify-between items-start mb-12">
                    <span className="font-mono text-[10px] text-[#1A2118]/40 border border-[#1A2118]/10 px-2 py-1 rounded-sm">
                       No. {articles[0].id}
                    </span>
                    <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-[0.2em] text-[#B56B56]">
                       {articles[0].category}
                    </span>
                 </div>

                 {/* Middle: Title & Excerpt */}
                 <div className="mb-12">
                    <h3 className="font-heading text-4xl lg:text-6xl leading-[0.95] text-[#1A2118] mb-6 group-hover:text-[#B56B56] transition-colors duration-500">
                      {articles[0].title}
                    </h3>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm font-light leading-loose text-[#1A2118]/60 max-w-md border-l-2 border-[#1A2118]/10 pl-6">
                      {articles[0].excerpt}
                    </p>
                 </div>

                 {/* Bottom: Image Strip */}
                 <div className="mt-auto relative w-full aspect-[21/9] overflow-hidden bg-[#1A2118]">
                    <Image 
                      src={articles[0].image} 
                      alt={articles[0].title} 
                      fill
                      className="object-cover opacity-90 grayscale-[1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />
                    
                    {/* Hover Action Overlay */}
                    <div className="absolute inset-0 bg-[#B56B56]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                       <span className="font-[family-name:var(--font-montserrat)] text-xs text-[#F2F0EA] font-bold uppercase tracking-widest flex items-center gap-2">
                         Read Article <ArrowUpRight className="w-4 h-4" />
                       </span>
                    </div>
                 </div>

              </Link>
           </div>


           {/* --- RIGHT COLUMN: LIST & NEWSLETTER (Spans 5) --- */}
           <div className="lg:col-span-5 flex flex-col border-r border-[#1A2118]/10">
              
              {/* Secondary Articles List */}
              {articles.slice(1).map((article, i) => (
                <Link key={i} href="#" className="group flex gap-6 p-8 border-b border-[#1A2118]/10 hover:bg-[#1A2118]/[0.02] transition-colors">
                   
                   {/* Thumbnail (Square) */}
                   <div className="relative w-24 h-24 flex-shrink-0 bg-[#1A2118] border border-[#1A2118]/10">
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                   </div>

                   {/* Content */}
                   <div className="flex flex-col justify-between py-1">
                      <div className="flex items-center gap-3">
                         <span className="font-mono text-[9px] text-[#1A2118]/40">
                           No. {article.id}
                         </span>
                         <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-wider text-[#B56B56]">
                           {article.category}
                         </span>
                      </div>
                      
                      <h4 className="font-heading text-xl text-[#1A2118] leading-tight group-hover:underline decoration-[#B56B56] decoration-1 underline-offset-4">
                        {article.title}
                      </h4>

                      <div className="flex items-center gap-2 text-[#1A2118]/40">
                         <BookOpen className="w-3 h-3" />
                         <span className="font-mono text-[9px] uppercase tracking-wide">
                           {article.readTime} Read
                         </span>
                      </div>
                   </div>
                </Link>
              ))}

              {/* Newsletter Block (Fills remaining space) */}
              <div className="flex-grow p-8 flex flex-col justify-center bg-[#1A2118] text-[#F2F0EA] relative group overflow-hidden">
                 {/* Texture */}
                 <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                 
                 <div className="relative z-10">
                    <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-[0.25em] text-[#B56B56] mb-4 block">
                      Dispatch
                    </span>
                    <h4 className="font-heading text-3xl mb-2">
                      Join the Inner Circle.
                    </h4>
                    <p className="font-[family-name:var(--font-montserrat)] text-[10px] leading-relaxed text-[#F2F0EA]/50 mb-8 uppercase tracking-wide max-w-xs">
                      Receive seasonal harvest alerts and research notes directly to your inbox.
                    </p>
                    
                    <div className="flex border-b border-[#F2F0EA]/20 pb-2 group-hover:border-[#B56B56] transition-colors">
                       <input 
                         type="email" 
                         placeholder="Email Address" 
                         className="bg-transparent w-full outline-none text-xs font-mono text-[#F2F0EA] placeholder:text-[#F2F0EA]/20 uppercase"
                       />
                       <button className="text-[#F2F0EA] hover:text-[#B56B56] transition-colors">
                          <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
              </div>

           </div>

        </div>
      </div>
    </section>
  );
};

export default JournalSection;