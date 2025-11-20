"use client";

import React from "react";
import Link from "next/link";
// Animations (framer-motion) have been removed
import { BadgeCheck, Warehouse, Users } from "lucide-react";

// All animation variants have been removed

export default function AboutPage() {
  return (
    // Base theme colors
    <div className="min-h-screen bg-[#c8cfc0] text-[#5A5750]">
      {/* --- Hero Section --- */}
      <header className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#FCFCF9]">
        {/* Professional responsiveness (md:grid-cols-2) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B2A26] leading-tight">
              From Soil to Soul.
              <br />
              This is Our Story.
            </h1>
            <p className="text-lg md:text-xl text-[#5A5750] leading-relaxed">
              We believe that real food is powerful medicine—and a deeper
              connection to the world around us. World of Nature began with a
              simple desire: find the purest organic essentials and share them
              with our community.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/won6.JPG"
              alt="Sunlit organic farm landscape"
              // UPDATED: Removed shadow-lg for a cleaner look
              className="w-full max-w-md lg:max-w-lg h-auto rounded-lg"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>
        </div>
      </header>

      <main>
        {/* --- Philosophy Section --- */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FCFCF9]"
          aria-labelledby="philosophy"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              id="philosophy"
              className="text-3xl md:text-4xl font-bold text-[#2B2A26]"
            >
              Our Guiding Philosophy
            </h2>
            <p className="text-lg md:text-xl text-[#5A5750] leading-relaxed max-w-3xl mx-auto">
              To inspire a healthier world by connecting people to real food.
              We’re not just selling products— we’re fostering a movement back
              to nature, championing transparency, and proving that what’s good
              for you can be good for the planet.
            </p>
          </div>
        </section>

        {/* --- Core Values Section --- */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#c8cfc0]" // Alternating background
          aria-labelledby="values"
        >
          <h2
            id="values"
            className="text-3xl md:text-4xl font-bold text-[#2B2A26] text-center mb-12"
          >
            Our Core Values
          </h2>

          {/* Professional responsiveness (md:grid-cols-3) */}
          <ul
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            role="list"
          >
            <li
              // UPDATED: shadow-lg to shadow-md for a cleaner UI
              className="bg-[#FCFCF9] p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <BadgeCheck className="w-12 h-12 text-[#4A5D43] mx-auto" />
              <h3 className="text-xl font-semibold text-[#2B2A26]">
                Uncompromising Purity
              </h3>
              <p className="text-[#5A5750] leading-relaxed">
                If it isn’t 100% organic, lab-tested, and free from anything
                artificial, we don’t offer it.
              </p>
            </li>

            <li
              // UPDATED: shadow-lg to shadow-md
              className="bg-[#FCFCF9] p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <Warehouse className="w-12 h-12 text-[#4A5D43] mx-auto" />
              <h3 className="text-xl font-semibold text-[#2B2A26]">
                Regenerative Sourcing
              </h3>
              <p className="text-[#5A5750] leading-relaxed">
                We partner with farms that go beyond organic—rebuilding soil
                health and promoting biodiversity.
              </p>
            </li>

            <li
              // UPDATED: shadow-lg to shadow-md
              className="bg-[#FCFCF9] p-6 rounded-lg shadow-md text-center space-y-4"
            >
              <Users className="w-12 h-12 text-[#4A5D43] mx-auto" />
              <h3 className="text-xl font-semibold text-[#2B2A26]">
                Honest Transparency
              </h3>
              <p className="text-[#5A5750] leading-relaxed">
                You deserve to know where your food comes from. Every product is
                traceable back to source.
              </p>
            </li>
          </ul>
        </section>

        {/* --- Process Section --- */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FCFCF9]"
          aria-labelledby="process"
        >
          {/* Professional responsiveness (md:grid-cols-2) */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src="/i4.png"
                alt="Farmer’s hands holding honeycomb"
                // UPDATED: Removed shadow-lg
                className="w-full max-w-md lg:max-w-lg h-auto rounded-lg"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 560px"
              />
            </div>
            <div className="space-y-6 text-center md:text-left">
              <h2
                id="process"
                className="text-3xl md:text-4xl font-bold text-[#2B2A26]"
              >
                The Journey to Your Table
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-[#4A5D43]">
                We don’t just find suppliers. We build partnerships.
              </p>
              <p className="text-lg text-[#5A5750] leading-relaxed">
                Our team travels to pristine regions to meet farmers who share
                our values. Together we ensure every batch of honey, every drop
                of oil, and every tea leaf is harvested at its peak and
                minimally processed to preserve its natural power.
              </p>
              <Link
                href="/shop"
                className="inline-block bg-[#4A5D43] text-[#FCFCF9] px-8 py-3 rounded-lg font-semibold hover:bg-[#3A4A35] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4A5D43] focus-visible:ring-offset-[#FCFCF9]"
                aria-label="Shop products shaped by our process"
              >
                Shop Our Process
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* --- Final CTA Section --- */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#2B2A26] text-[#FCFCF9]" // Dark Espresso Background
        aria-labelledby="cta"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 id="cta" className="text-3xl md:text-4xl font-bold">
            Feel the Difference
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            Start your journey back to nature. Explore our collections and taste
            the purity for yourself.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-[#4A5D43] text-[#FCFCF9] px-8 py-3 rounded-lg font-semibold hover:bg-[#3A4A35] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4A5D43] focus-visible:ring-offset-[#2B2A26]"
            aria-label="Shop all products"
          >
            Shop All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
