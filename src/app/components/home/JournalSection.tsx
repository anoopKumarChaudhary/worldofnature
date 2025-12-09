"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const JournalSection = () => {
  const journalEntries = [
    {
      id: 1,
      title: "The Art of Slow Beekeeping",
      date: "October 12, 2025",
      excerpt: "Why we wait for the bees to finish their work before we begin ours.",
      image: "/won11.JPG",
    },
    {
      id: 2,
      title: "Soil Health & Human Health",
      date: "September 28, 2025",
      excerpt: "Exploring the microbial connection between the earth and our gut.",
      image: "/won2.jpg",
    },
    {
      id: 3,
      title: "A Morning in the Ghats",
      date: "September 15, 2025",
      excerpt: "Harvesting wild pepper in the mist-covered hills of Kerala.",
      image: "/won19.JPG",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 border-t border-[#1A2118]/10">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl lg:text-5xl font-serif text-[#1A2118]">The Journal</h2>
          <Link href="/blog" className="hidden lg:block text-sm font-bold uppercase tracking-widest hover:text-[#BC5633] transition-colors">
            Read All Stories
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {journalEntries.map((entry) => (
            <article key={entry.id} className="group cursor-pointer">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl mb-6 relative">
                <Image 
                  src={entry.image} 
                  alt={entry.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#BC5633] mb-3">
                <span>{entry.date}</span>
                <span className="w-1 h-1 bg-[#1A2118]/20 rounded-full" />
                <span>Editorial</span>
              </div>
              <h3 className="text-2xl font-serif text-[#1A2118] mb-3 leading-tight group-hover:text-[#BC5633] transition-colors duration-300">
                {entry.title}
              </h3>
              <p className="text-[#596157] font-light leading-relaxed mb-4 line-clamp-2">
                {entry.excerpt}
              </p>
              <span className="inline-block text-xs font-bold uppercase tracking-widest border-b border-[#1A2118]/20 pb-1 group-hover:border-[#BC5633] transition-colors">Read Story</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
