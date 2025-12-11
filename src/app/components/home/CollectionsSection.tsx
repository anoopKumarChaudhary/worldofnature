"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Calendar,
  Activity,
  LucideIcon,
  Droplets,
  Leaf,
  Flower2
} from "lucide-react";

// --- Types & Interfaces ---
interface CollectionItem {
  id: string;
  label: string;
  sub: string;
  tag: string;
  image: string;
  desc: string;
  origin: string;
  harvest: string;
  grade: string;
  link: string;
  gridClass: string;
}

// --- Data Configuration ---
const COLLECTIONS: CollectionItem[] = [
  // ROW 1
  {
    id: "honey",
    label: "Liquid Amber",
    sub: "Collection 01",
    tag: "Raw Apiary",
    image: "/h1.png",
    desc: "Unfiltered sweetness harvest from wild cliff hives.",
    origin: "Kashmir",
    harvest: "Aut '24",
    grade: "Grade A",
    link: "/shop?category=honey",
    // Wide but short (2 columns)
    gridClass: "md:col-span-2 md:row-span-1 min-h-[280px]",
  },
  {
    id: "ghee",
    label: "Golden Lipids",
    sub: "Collection 02",
    tag: "Cultured",
    image: "/h5.png",
    desc: "Indigenous A2 milk, slow-churned.",
    origin: "Gir Forest",
    harvest: "Monthly",
    grade: "A2",
    link: "/shop?category=ghee",
    // Square (1 column)
    gridClass: "md:col-span-1 md:row-span-1 min-h-[280px]",
  },
  {
    id: "spices",
    label: "Root & Bark",
    sub: "Collection 03",
    tag: "High Alt",
    image: "/h9.png",
    desc: "Potent aromatics from the Himalayan belt.",
    origin: "Lakadong",
    harvest: "Win '24",
    grade: "Hi-Curc",
    link: "/shop?category=spices",
    // Square (1 column)
    gridClass: "md:col-span-1 md:row-span-1 min-h-[280px]",
  },

  // ROW 2
  {
    id: "oils",
    label: "Botanical Oils",
    sub: "Collection 04",
    tag: "Cold Press",
    image: "/h3.png", // Make sure this image exists or use a placeholder
    desc: "Wood-pressed extracts of wild nuts.",
    origin: "Shimla",
    harvest: "Nov '24",
    grade: "Virgin",
    link: "/shop?category=oils",
    // Square (1 column)
    gridClass: "md:col-span-1 md:row-span-1 min-h-[280px]",
  },
  {
    id: "tea",
    label: "Highland Leaf",
    sub: "Collection 05",
    tag: "Oxidized",
    image: "/h4.png", // Make sure this image exists or use a placeholder
    desc: "Single estate orthodox black tea.",
    origin: "Darjeeling",
    harvest: "2nd Flush",
    grade: "SFTGFOP",
    link: "/shop?category=tea",
    // Wide but short (2 columns)
    gridClass: "md:col-span-2 md:row-span-1 min-h-[280px]",
  },
];

// --- Sub-Components ---

const StatItem = ({ icon: Icon, label, value }: { icon: LucideIcon, label: string, value: string }) => (
  <div className="overflow-hidden">
    <span className="flex items-center gap-1 font-[family-name:var(--font-montserrat)] text-[7px] uppercase tracking-widest text-[#EBE9E4]/50 mb-0.5">
      <Icon className="w-2 h-2" /> {label}
    </span>
    <span className="block font-heading text-[10px] text-[#EBE9E4] truncate tracking-wide">
      {value}
    </span>
  </div>
);

const CollectionCard = ({ item, index }: { item: CollectionItem; index: number }) => {
  return (
    <Link
      href={item.link}
      className={`group relative block overflow-hidden ${item.gridClass} bg-[#0F140E] rounded-sm`}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={item.image}
          alt={item.label}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-all duration-[1.2s] ease-out
                     grayscale-[0.2] sepia-[0.1] scale-100 opacity-80
                     group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100"
        />
        {/* Darker gradient for better text readability on small cards */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F140E] via-[#0F140E]/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col justify-between p-5">
        {/* Header */}
        <div className="flex justify-between items-start border-b border-[#EBE9E4]/15 pb-2">
          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-[7px] text-[#EBE9E4]/60 uppercase tracking-widest">
              REF. {index + 101}
            </span>
            <span className="font-[family-name:var(--font-montserrat)] text-[8px] font-bold uppercase tracking-[0.2em] text-[#B56B56]">
              {item.tag}
            </span>
          </div>
          <div className="text-[#EBE9E4]/40 group-hover:text-[#EBE9E4] transition-colors">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Footer Info */}
        <div className="relative">
          {/* Main Title - Slides up on hover */}
          <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-2">
            <h4 className="font-heading text-2xl text-[#EBE9E4] mb-1 leading-none font-light tracking-wide">
              {item.label}
            </h4>
            <p className="font-[family-name:var(--font-montserrat)] text-[#EBE9E4]/70 font-light text-[9px] leading-relaxed max-w-[95%] line-clamp-2">
              {item.desc}
            </p>
          </div>

          {/* Hidden Specs - Fades in on hover */}
          <div className="absolute top-full left-0 right-0 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 border-t border-[#EBE9E4]/10 mt-2">
            <div className="grid grid-cols-3 gap-1">
              <StatItem icon={MapPin} label="Org" value={item.origin} />
              <StatItem icon={Calendar} label="Hrv" value={item.harvest} />
              <StatItem icon={Activity} label="Grd" value={item.grade} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Border */}
      <div className="absolute inset-0 border border-[#EBE9E4]/10 rounded-sm pointer-events-none group-hover:border-[#EBE9E4]/25 transition-colors duration-500" />
    </Link>
  );
};

const ViewAllCard = () => (
  <Link
    href="/shop"
    // Fits the last slot in the grid (Row 2, last column)
    className="group relative overflow-hidden bg-[#1A2118] md:col-span-1 md:row-span-1 min-h-[280px] flex flex-col justify-end p-5 hover:bg-[#B56B56] transition-colors duration-500 rounded-sm"
  >
    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-overlay" />
    <div className="relative z-10 border-t border-[#EBE9E4]/30 pt-3">
      <span className="font-[family-name:var(--font-montserrat)] text-[8px] font-bold uppercase tracking-[0.3em] text-[#EBE9E4]/60 mb-2 block">
        Archive
      </span>
      <div className="flex items-center justify-between">
        <h4 className="font-heading text-xl text-[#EBE9E4] font-medium italic">
          View Index
        </h4>
        <ArrowRight className="w-4 h-4 text-[#EBE9E4] group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </Link>
);

// --- Main Component ---

const CollectionsSection = () => {
  return (
    <section className="relative py-20 lg:py-24 px-4 lg:px-8 bg-[#F0F0EB] text-[#1A2118] overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-0" />

      <div className="container-custom mx-auto relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6 border-b border-[#1A2118]/10 pb-6">
          <div className="relative">
            <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-[0.3em] text-[#B56B56] mb-3 block">
              The Archive
            </span>
            <h2 className="font-heading text-4xl lg:text-5xl text-[#1A2118] leading-tight font-normal tracking-tight">
              Curated{" "}
              <span className="font-serif italic font-light text-[#1A2118]/60">
                Essentials.
              </span>
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden md:flex group items-center gap-2 text-[#1A2118] hover:text-[#B56B56] transition-colors pb-1"
          >
            <span className="font-[family-name:var(--font-montserrat)] text-[9px] font-bold uppercase tracking-widest">
              Full Index
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid Layout - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 auto-rows-auto">
          {COLLECTIONS.map((item, index) => (
            <CollectionCard key={item.id} item={item} index={index} />
          ))}
          <ViewAllCard />
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;