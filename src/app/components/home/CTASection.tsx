"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#BC5633] text-[#F2F0EA]">
      <div className="absolute inset-0 opacity-30 mix-blend-multiply">
        <Image
          src="/won19.JPG"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover grayscale"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-6xl lg:text-9xl font-serif tracking-tighter mb-8 leading-none">
          Taste the <br /> Difference.
        </h2>
        <p className="text-xl font-light mb-10 opacity-90">
          Join the movement towards conscious consumption.
        </p>
        <Link
          href="/shop"
          className="inline-block px-12 py-5 bg-[#F2F0EA] text-[#BC5633] text-lg font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl"
        >
          Shop The Harvest
        </Link>
      </div>
    </section>
  );
};

export default CTASection;