"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";

const JournalSection = () => {
  // We use state to track which article is being hovered
  const [activeStory, setActiveStory] = useState(0);

  const journalEntries = [
    {
      id: 0,
      title: "The Art of Slow Beekeeping",
      category: "Apiary",
      date: "Oct 12",
      readTime: "5 min read",
      excerpt: "Why we wait for the bees to finish their work before we begin ours. A lesson in patience.",
      image: "/won11.JPG", // Ensure these paths exist
    },
    {
      id: 1,
      title: "Soil Health & Human Gut",
      category: "Science",
      date: "Sep 28",
      readTime: "8 min read",
      excerpt: "Exploring the invisible microbial connection between the earth's soil and our internal biology.",
      image: "/won2.jpg",
    },
    {
      id: 2,
      title: "A Morning in the Ghats",
      category: "Travel",
      date: "Sep 15",
      readTime: "6 min read",
      excerpt: "Harvesting wild pepper in the mist-covered hills of Kerala alongside indigenous farmers.",
      image: "/won19.JPG",
    },
    {
      id: 3,
      title: "The Language of Roots",
      category: "Botany",
      date: "Aug 04",
      readTime: "4 min read",
      excerpt: "Understanding how trees communicate underground and what it means for our harvest.",
      image: "/won8.JPG", // Using an existing image as placeholder
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#F2F0EA] text-[#1A2118] overflow-hidden">
      
      {/* 1. BACKGROUND TEXTURE (Brand Consistency) */}
      <div className="absolute inset-0 opacity-[0.3] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

      <div className="container-custom mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-[#1A2118]/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
               <span className="w-6 h-[1px] bg-[#B56B56]"></span>
               <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.3em] text-[#B56B56]">
                 The Journal
               </span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-7xl leading-[0.9]">
              Field <span className="italic font-light text-[#596157]">Notes.</span>
            </h2>
          </div>
          
          <div className="hidden md:block">
             <Link href="/blog" className="group inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#1A2118] hover:text-[#B56B56] transition-colors">
               View Archives <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        {/* 2. THE INTERACTIVE SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: THE STICKY IMAGE (Changes on Hover) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24">
            <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden">
              
              {/* Image Layering Logic */}
              {journalEntries.map((entry, index) => (
                <div 
                  key={entry.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeStory === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <Image 
                    src={entry.image} 
                    alt={entry.title} 
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Luxury Overlay */}
                  <div className="absolute inset-0 bg-[#1A2118]/10 mix-blend-multiply" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                     <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-bold uppercase tracking-widest text-white">
                       {entry.category}
                     </span>
                  </div>
                </div>
              ))}

              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none" />
            </div>

            {/* Caption under image */}
            <div className="mt-4 flex justify-between items-center text-[#1A2118]/60">
               <span className="font-[family-name:var(--font-montserrat)] text-[10px] uppercase tracking-widest">
                  Issue No. 0{activeStory + 1}
               </span>
               <span className="font-[family-name:var(--font-playfair)] italic text-sm">
                  {journalEntries[activeStory].readTime}
               </span>
            </div>
          </div>

          {/* RIGHT: THE ARTICLE LIST */}
          <div className="lg:col-span-7 flex flex-col">
            {journalEntries.map((entry, index) => (
              <Link 
                key={entry.id} 
                href={`/blog/${entry.id}`}
                onMouseEnter={() => setActiveStory(index)}
                className="group relative border-t border-[#1A2118]/10 py-10 transition-all duration-500 hover:pl-8"
              >
                {/* Mobile Image (Only shows on mobile) */}
                <div className="lg:hidden w-full aspect-video relative mb-6 rounded-sm overflow-hidden">
                   <Image src={entry.image} alt={entry.title} fill className="object-cover" />
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-4">
                  <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-widest text-[#B56B56]">
                    {entry.date}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#1A2118] group-hover:italic transition-all duration-300">
                    {entry.title}
                  </h3>
                </div>

                <p className="font-[family-name:var(--font-montserrat)] text-sm font-light text-[#1A2118]/60 leading-relaxed max-w-lg mb-6 pl-0 md:pl-20 group-hover:text-[#1A2118]/90 transition-colors">
                  {entry.excerpt}
                </p>

                <div className="pl-0 md:pl-20 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 text-[#B56B56]">
                   Read Story <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Hover Background Accent */}
                <div className="absolute inset-0 bg-[#B56B56]/[0.02] scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 -z-10" />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default JournalSection;