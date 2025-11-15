"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// NEW: Import icons from lucide-react
import { BadgeCheck, Warehouse, Users } from "lucide-react";

// --- Original Hero Animations ---
const heroText = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const heroImage = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.15 },
  },
};

// --- Animation Variants for Scrolling ---

// A simple fade-in from the bottom
const fadeInOnScroll = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Parent container for staggering child animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous
    },
  },
};

// Child item animation for the staggered grid
const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// For the two-column "Process" section
const fadeInFromLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInFromRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

// --- REMOVED: Old SVG Icon Components ---

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text-primary)]">
      {/* Hero section remains the same */}
      <header className="py-16 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-6"
            variants={heroText}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] leading-tight">
              From Soil to Soul.
              <br />
              This is Our Story.
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              We believe that real food is powerful medicine—and a deeper
              connection to the world around us. World of Nature began with a
              simple desire: find the purest organic essentials and share them
              with our community.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            variants={heroImage}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/i3.png"
              alt="Sunlit organic farm landscape"
              className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </motion.div>
        </div>
      </header>

      <main>
        {/* Added motion.section wrapper for philosophy */}
        <motion.section
          className="py-16 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]"
          aria-labelledby="philosophy"
          variants={fadeInOnScroll}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is visible
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2
              id="philosophy"
              className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
            >
              Our Guiding Philosophy
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl mx-auto">
              To inspire a healthier world by connecting people to real food.
              We’re not just selling products— we’re fostering a movement back
              to nature, championing transparency, and proving that what’s good
              for you can be good for the planet.
            </p>
          </div>
        </motion.section>

        <section
          className="py-16 px-4 md:px-8 lg:px-16 bg-[var(--color-background)]"
          aria-labelledby="values"
        >
          {/* Animate the section title */}
          <motion.h2
            id="values"
            className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] text-center mb-12"
            variants={fadeInOnScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Core Values
          </motion.h2>

          {/* Animate the grid with stagger */}
          <motion.ul
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Added motion.li and variant */}
            <motion.li
              className="bg-[var(--color-surface)] p-6 rounded-lg shadow-md text-center space-y-4"
              variants={staggerItem}
            >
              {/* NEW: Replaced with lucide-react icon */}
              <BadgeCheck className="w-12 h-12 text-[var(--color-brand-primary)] mx-auto" />
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                Uncompromising Purity
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                If it isn’t 100% organic, lab-tested, and free from anything
                artificial, we don’t offer it.
              </p>
            </motion.li>

            {/* Added motion.li and variant */}
            <motion.li
              className="bg-[var(--color-surface)] p-6 rounded-lg shadow-md text-center space-y-4"
              variants={staggerItem}
            >
              {/* NEW: Replaced with lucide-react icon */}
              <Warehouse className="w-12 h-12 text-[var(--color-brand-primary)] mx-auto" />
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                Regenerative Sourcing
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We partner with farms that go beyond organic—rebuilding soil
                health and promoting biodiversity.
              </p>
            </motion.li>

            {/* Added motion.li and variant */}
            <motion.li
              className="bg-[var(--color-surface)] p-6 rounded-lg shadow-md text-center space-y-4"
              variants={staggerItem}
            >
              {/* NEW: Replaced with lucide-react icon */}
              <Users className="w-12 h-12 text-[var(--color-brand-primary)] mx-auto" />
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
                Honest Transparency
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                You deserve to know where your food comes from. Every product is
                traceable back to source.
              </p>
            </motion.li>
          </motion.ul>
        </section>

        {/* Added motion.section to animate the two columns */}
        <motion.section
          className="py-16 px-4 md:px-8 lg:px-16 bg-[var(--color-surface)]"
          aria-labelledby="process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Animate image from left */}
            <motion.div
              className="flex justify-center lg:justify-start"
              variants={fadeInFromLeft}
            >
              <img
                src="/i4.png"
                alt="Farmer’s hands holding honeycomb"
                className="w-full max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </motion.div>
            {/* Animate content from right */}
            <motion.div
              className="space-y-6 text-center lg:text-left"
              variants={fadeInFromRight}
            >
              <h2
                id="process"
                className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
              >
                The Journey to Your Table
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-[var(--color-brand-primary)]">
                We don’t just find suppliers. We build partnerships.
              </p>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                Our team travels to pristine regions to meet farmers who share
                our values. Together we ensure every batch of honey, every drop
                of oil, and every tea leaf is harvested at its peak and
                minimally processed to preserve its natural power.
              </p>
              <Link
                href="/shop"
                className="inline-block bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-text)] px-8 py-3 rounded-lg font-semibold hover:bg-[var(--color-brand-accent)] transition-colors duration-300"
                aria-label="Shop products shaped by our process"
              >
                Shop Our Process
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Animate the final CTA section */}
      <motion.section
        className="py-16 px-4 md:px-8 lg:px-16 bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-text)]"
        aria-labelledby="cta"
        variants={fadeInOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
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
            className="inline-block bg-[var(--color-brand-accent)] text-[var(--color-brand-accent-text)] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
            aria-label="Shop all products"
          >
            Shop All Products
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
