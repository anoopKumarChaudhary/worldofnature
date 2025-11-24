"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/features/cart/cartSlice";
import {
  ArrowRight,
  Star,
  Plus,
  MoveRight,
  CheckCircle2,
  Sprout,
  Droplets,
  ArrowDown,
  Globe,
  ShieldCheck,
} from "lucide-react";

const HomePage = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState("honey");

  const handleAddToCart = (product: any) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const categories = [
    {
      id: "honey",
      label: "Raw Honey",
      image: "/won23.JPG",
      desc: "Unfiltered sweetness.",
    },
    {
      id: "ghee",
      label: "Vedic Ghee",
      image: "/won32.JPG",
      desc: "Golden nourishment.",
    },
    {
      id: "spices",
      label: "Heirloom Spices",
      image: "/won8.JPG",
      desc: "Potent aromas.",
    },
  ];

  // The requested background image
  const backgroundImage = "/d1.png";

  return (
    <div className="relative min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden">
      {/* --- CSS Styles --- */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
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
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* --- NOISE TEXTURE OVERLAY --- */}
      <div
        className="fixed inset-0 z-50 pointer-events-none opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-0 lg:min-h-[95vh] flex flex-col justify-between px-6 lg:px-12 border-b border-[#1A2118]/10 overflow-hidden">
        {/* --- BACKGROUND LAYERS --- */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Background Texture"
            className="w-full h-full object-cover grayscale opacity-[0.15] mix-blend-multiply"
          />
        </div>
        <div className="absolute top-0 -left-4 w-96 h-96 bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-blob z-0" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#8DA383] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000 z-0" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#E6E2D6] rounded-full mix-blend-overlay filter blur-[100px] opacity-60 animate-blob animation-delay-4000 z-0" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#F2F0EA] via-transparent to-transparent opacity-90"></div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="container mx-auto h-full flex flex-col relative z-20 justify-between">
          {/* TOP ROW: HEADER INFO */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-b border-[#1A2118]/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A2118]">
                World of Nature ®
              </span>
            </div>
            <div className="flex items-center gap-8 text-[#596157]">
              <div className="flex items-center gap-2 text-xs font-medium tracking-wide">
                <Globe className="w-3 h-3" /> Global Shipping
              </div>
              <div className="hidden md:block h-px w-12 bg-[#1A2118]/20"></div>
              <div className="flex items-center gap-2 text-xs font-medium tracking-wide">
                <ShieldCheck className="w-3 h-3" /> Quality Guaranteed
              </div>
            </div>
          </div>

          {/* CENTER: SPLIT EDITORIAL LAYOUT */}
          <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
            {/* Left: Primary Headline */}
            <div className="lg:col-span-7">
              <h1 className="text-6xl lg:text-[7rem] leading-[0.9] font-serif font-medium tracking-tighter text-[#1A2118] mb-8">
                Cultivating <br />
                The Earth's <br />
                <span className="italic text-[#596157] font-light">
                  Intelligence.
                </span>
              </h1>
            </div>

            {/* Right: Dense Information Block */}
            <div className="lg:col-span-5 flex flex-col gap-8 border-l border-[#1A2118]/20 pl-8 lg:mb-4">
              {/* Manifesto Text */}
              <p className="text-lg lg:text-xl leading-relaxed text-[#4A5248] font-light">
                We exist at the intersection of ancestral wisdom and modern
                transparency. Our products are not made; they are harvested.
                <strong className="text-[#1A2118] font-medium">
                  {" "}
                  Pure, wild-crafted essentials designed to reconnect you with
                  the source.
                </strong>
              </p>

              {/* Value Props List */}
              <div className="flex flex-wrap gap-4">
                {[
                  "Single Origin",
                  "Raw & Unprocessed",
                  "Ethically Sourced",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-[#1A2118]/20 text-xs font-bold uppercase tracking-wider text-[#1A2118]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="/shop"
                  className="h-14 px-8 bg-[#1A2118] text-[#F2F0EA] rounded-full flex items-center gap-3 font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-all shadow-xl"
                >
                  Start Foraging <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="text-xs font-bold uppercase tracking-widest underline decoration-[#1A2118]/30 underline-offset-4 hover:text-[#BC5633] transition-colors">
                  View Our Story
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM: DATA GRID (Integrated) */}
        </div>

        <div className="relative z-20 grid grid-cols-2 lg:grid-cols-4 border-t border-[#1A2118]/20 divide-x divide-[#1A2118]/20 backdrop-blur-sm bg-[#F2F0EA]/40">
          {/* Stat 1 */}
          <div className="py-10 px-8 group hover:bg-[#1A2118] hover:text-[#F2F0EA] transition-colors duration-500 cursor-default flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100">
                Purity
              </p>
              <Star className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#BC5633]" />
            </div>
            <h3 className="text-6xl font-serif group-hover:text-[#BC5633] transition-colors">
              100%
            </h3>
          </div>
          {/* Stat 2 */}
          <div className="py-10 px-8 group hover:bg-[#1A2118] hover:text-[#F2F0EA] transition-colors duration-500 cursor-default flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100">
                Additives
              </p>
              <Star className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#BC5633]" />
            </div>
            <h3 className="text-6xl font-serif group-hover:text-[#BC5633] transition-colors">
              0%
            </h3>
          </div>
          {/* Stat 3 */}
          <div className="py-10 px-8 group hover:bg-[#1A2118] hover:text-[#F2F0EA] transition-colors duration-500 cursor-default flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 group-hover:opacity-100">
                Freshness
              </p>
              <Star className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#BC5633]" />
            </div>
            <h3 className="text-6xl font-serif group-hover:text-[#BC5633] transition-colors">
              24hr
            </h3>
          </div>
          {/* Stat 4 (Interactive Sticker) */}
          <div className="relative flex items-center justify-center overflow-hidden bg-[#E6E2D6]/50 h-40 border-l border-[#1A2118]/20">
            <div className="absolute inset-0 animate-spin-slow">
              <svg
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
                className="fill-[#1A2118] opacity-30"
              >
                <path
                  id="curve"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text
                  width="500"
                  className="text-[13px] font-bold uppercase tracking-widest fill-current"
                >
                  <textPath xlinkHref="#curve">
                    • Certified Organic • Est 2025 •
                  </textPath>
                </text>
              </svg>
            </div>
            <Sprout className="w-10 h-10 text-[#BC5633] relative z-10" />
          </div>
        </div>
      </section>

      {/* --- 2. MARQUEE --- */}
      <section className="py-6 bg-[#1A2118] text-[#E8E6DF] overflow-hidden border-b border-[#F2F0EA]/10 relative z-20">
        <div className="whitespace-nowrap flex w-max animate-marquee group">
          {[...Array(2)].map((_, wrapperIndex) => (
            <div key={wrapperIndex} className="flex items-center">
              {[
                "Ethically Sourced",
                "USDA Certified",
                "Regenerative Farming",
                "Zero Additives",
                "Single Origin",
                "Plastic Neutral",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="w-2 h-2 rotate-45 bg-[#BC5633] mr-8 shadow-[0_0_10px_#BC5633]"></div>
                  <div className="flex flex-col leading-none">
                    <span className="text-3xl lg:text-4xl font-serif tracking-tight">
                      {text.split(" ")[0]}{" "}
                      <span className="font-sans font-bold uppercase text-xs tracking-[0.3em] ml-3 opacity-60">
                        {text.split(" ")[1]}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. CATEGORIES (Unchanged) --- */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#BC5633] mb-8">
                  The Pantry
                </h2>
                <div className="space-y-6">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className="cursor-pointer group"
                      onMouseEnter={() => setActiveCategory(cat.id)}
                    >
                      <h3
                        className={`text-4xl lg:text-5xl font-serif transition-colors duration-300 ${
                          activeCategory === cat.id
                            ? "text-[#1A2118] italic"
                            : "text-[#1A2118]/20 hover:text-[#1A2118]/60"
                        }`}
                      >
                        {cat.label}
                      </h3>
                      <div
                        className={`h-px bg-[#1A2118] mt-4 transition-all duration-500 ease-out ${
                          activeCategory === cat.id ? "w-16" : "w-0"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link
                    href="/shop"
                    className="text-sm font-bold border-b border-[#1A2118] pb-1 hover:text-[#BC5633] hover:border-[#BC5633] transition-colors"
                  >
                    View All Categories
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 h-[600px] relative rounded-[2rem] overflow-hidden bg-[#DEDBD4] shadow-xl">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    activeCategory === cat.id
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-10 left-10 z-20 text-white">
                    <p className="text-lg font-medium opacity-90 mb-2">
                      {cat.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold border border-white/30 rounded-full px-3 py-1 w-fit backdrop-blur-sm">
                      Shop {cat.label} <MoveRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. FEATURED PRODUCT (Unchanged) --- */}
      <section className="py-20 bg-[#1A2118] text-[#F2F0EA] relative rounded-t-[3rem]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif italic mb-4">
              Curated Essentials
            </h2>
            <p className="text-[#F2F0EA]/60 max-w-lg font-light">
              Hand-picked products that define our commitment to purity.
            </p>
          </div>
          <div className="flex overflow-x-auto gap-8 pb-12 snap-x scrollbar-hide">
            {/* Card 1 */}
            <div className="min-w-[300px] md:min-w-[400px] snap-center bg-[#252E22] rounded-[2rem] p-6 hover:bg-[#323A31] transition-colors group cursor-pointer border border-[#F2F0EA]/5">
              <div className="h-[350px] w-full bg-[#1A2118] rounded-[1.5rem] overflow-hidden mb-6 relative">
                <img
                  src="/won23.JPG"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#BC5633] text-white text-[10px] font-bold uppercase px-2 py-1 rounded">
                  Bestseller
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1">Forest Honey</h3>
                  <p className="text-sm text-[#F2F0EA]/50">Raw, Unprocessed</p>
                </div>
                <span className="text-lg font-bold">$18.00</span>
              </div>
              <div className="mt-6 pt-6 border-t border-[#F2F0EA]/10 flex justify-between items-center">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#BC5633] text-[#BC5633]"
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: "1",
                      title: "Honey",
                      price: 18,
                      image: "/won23.JPG",
                    })
                  }
                  className="text-xs font-bold uppercase tracking-widest hover:text-[#BC5633] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Card 2 */}
            <div className="min-w-[300px] md:min-w-[400px] snap-center bg-[#F2F0EA] rounded-[2rem] p-6 text-[#1A2118] group cursor-pointer relative">
              <div className="h-[350px] w-full bg-[#E6E2D6] rounded-[1.5rem] overflow-hidden mb-6 relative">
                <img
                  src="/won32.JPG"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1">A2 Bilona Ghee</h3>
                  <p className="text-sm text-[#1A2118]/60">Traditional Vedic</p>
                </div>
                <span className="text-lg font-bold">$24.50</span>
              </div>
              <div className="mt-6 pt-6 border-t border-[#1A2118]/10 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-[#BC5633]">
                  New Arrival
                </span>
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: "2",
                      title: "Ghee",
                      price: 24.5,
                      image: "/won32.JPG",
                    })
                  }
                  className="w-10 h-10 bg-[#1A2118] rounded-full flex items-center justify-center text-white hover:bg-[#BC5633] transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Card 3 */}
            <div className="min-w-[300px] md:min-w-[400px] snap-center bg-[#252E22] rounded-[2rem] p-6 hover:bg-[#323A31] transition-colors group cursor-pointer border border-[#F2F0EA]/5">
              <div className="h-[350px] w-full bg-[#1A2118] rounded-[1.5rem] overflow-hidden mb-6 relative">
                <img
                  src="/won25.JPG"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif mb-1">
                    Lakadong Turmeric
                  </h3>
                  <p className="text-sm text-[#F2F0EA]/50">High Curcumin</p>
                </div>
                <span className="text-lg font-bold">$14.00</span>
              </div>
              <div className="mt-6 pt-6 border-t border-[#F2F0EA]/10 flex justify-between items-center">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#BC5633] text-[#BC5633]"
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: "3",
                      title: "Turmeric",
                      price: 14,
                      image: "/won25.JPG",
                    })
                  }
                  className="text-xs font-bold uppercase tracking-widest hover:text-[#BC5633] transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. VALUES --- */}
      <section className="py-24 px-6 bg-[#F2F0EA]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 border-t border-[#1A2118]/10 pt-12">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#E6E2D6] rounded-full flex items-center justify-center mb-2">
                <Sprout className="w-6 h-6 text-[#1A2118]" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Regenerative Farming
              </h3>
              <p className="text-[#596157] leading-relaxed">
                We work directly with farmers who heal the soil. No chemicals,
                just nature doing its work.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#E6E2D6] rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-6 h-6 text-[#1A2118]" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Lab Certified
              </h3>
              <p className="text-[#596157] leading-relaxed">
                Every batch is tested for heavy metals and purity. Transparency
                is our ingredient.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#E6E2D6] rounded-full flex items-center justify-center mb-2">
                <Droplets className="w-6 h-6 text-[#1A2118]" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wide">
                Small Batch
              </h3>
              <p className="text-[#596157] leading-relaxed">
                We prioritize quality over quantity. When it's gone, it's gone
                until next harvest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. FOOTER CTA --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#BC5633] text-[#F2F0EA]">
        <div className="absolute inset-0 opacity-20 mix-blend-multiply">
          <img
            src="/won19.JPG"
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h2 className="text-6xl lg:text-9xl font-serif tracking-tighter mb-6">
            Taste the <br /> Difference.
          </h2>
          <Link
            href="/shop"
            className="inline-block px-12 py-5 bg-[#F2F0EA] text-[#BC5633] text-lg font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
