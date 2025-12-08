"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MoveRight, ArrowRight } from "lucide-react";

const CollectionsSection = () => {
  const categories = [
    {
      id: "honey",
      label: "Raw Honey",
      image: "/won23.JPG",
      desc: "Unfiltered sweetness from wild hives.",
      link: "/shop?category=honey",
    },
    {
      id: "ghee",
      label: "Vedic Ghee",
      image: "/won32.JPG",
      desc: "Golden nourishment, traditionally churned.",
      link: "/shop?category=ghee",
    },
    {
      id: "spices",
      label: "Heirloom Spices",
      image: "/won8.JPG",
      desc: "Potent aromas from ancient soils.",
      link: "/shop?category=spices",
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#B56B56] mb-4">The Pantry</h2>
            <h3 className="text-4xl lg:text-5xl font-serif text-[#1A2118]">Essential Collections</h3>
          </div>
          <Link href="/shop" className="hidden lg:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#B56B56] transition-colors group">
            View All <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 auto-rows-[200px] md:auto-rows-[400px]">
          {categories.map((cat, index) => (
            <Link 
              key={cat.id} 
              href={cat.link} 
              className={`group relative overflow-hidden rounded-3xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'} ${index === 1 ? 'md:col-span-2' : ''}`}
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-3xl font-serif text-[#F2F0EA] mb-2">{cat.label}</h4>
                  <p className="text-[#F2F0EA]/80 font-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-xs">{cat.desc}</p>
                </div>
                
                <div className="absolute top-6 right-6 w-10 h-10 bg-[#F2F0EA] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110">
                  <ArrowRight className="w-5 h-5 text-[#1A2118]" />
                </div>
              </div>
            </Link>
          ))}
          {/* Add a 4th item to fill the grid if needed, or adjust styling */}
           <Link href="/shop" className="group relative overflow-hidden rounded-3xl bg-[#B56B56] flex items-center justify-center text-[#F2F0EA] md:col-span-1">
              <div className="text-center">
                <span className="block text-4xl font-serif mb-2 group-hover:scale-110 transition-transform">View All</span>
                <span className="text-xs uppercase tracking-widest opacity-60">The Full Pantry</span>
              </div>
           </Link>
        </div>
        
        <div className="mt-12 lg:hidden text-center">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[#B56B56] transition-colors">
            View All Collections <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
