"use client";

import React from "react";
import Link from "next/link";
import styles from "./about.module.css";
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
    <div className={styles.pageWrapper}>
      {/* Hero section remains the same */}
      <header className={styles.hero}>
        <div className={styles.heroGrid}>
          <motion.div
            className={styles.heroContent}
            variants={heroText}
            initial="hidden"
            animate="visible"
          >
            <h1 className={styles.heroTitle}>
              From Soil to Soul.
              <br />
              This is Our Story.
            </h1>
            <p className={styles.heroSubtitle}>
              We believe that real food is powerful medicine—and a deeper
              connection to the world around us. World of Nature began with a
              simple desire: find the purest organic essentials and share them
              with our community.
            </p>
          </motion.div>

          <motion.div
            className={styles.heroImageWrapper}
            variants={heroImage}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/i3.png"
              alt="Sunlit organic farm landscape"
              className={styles.heroImage}
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
          className={styles.whiteSection}
          aria-labelledby="philosophy"
          variants={fadeInOnScroll}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is visible
        >
          <div className={`${styles.container} ${styles.missionSection}`}>
            <h2 id="philosophy" className={styles.sectionTitle}>
              Our Guiding Philosophy
            </h2>
            <p className={styles.lede}>
              To inspire a healthier world by connecting people to real food.
              We’re not just selling products— we’re fostering a movement back
              to nature, championing transparency, and proving that what’s good
              for you can be good for the planet.
            </p>
          </div>
        </motion.section>

        <section
          className={`${styles.container} ${styles.valuesSection}`}
          aria-labelledby="values"
        >
          {/* Animate the section title */}
          <motion.h2
            id="values"
            className={styles.sectionTitle}
            variants={fadeInOnScroll}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            Our Core Values
          </motion.h2>

          {/* Animate the grid with stagger */}
          <motion.ul
            className={styles.valuesGrid}
            role="list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Added motion.li and variant */}
            <motion.li className={styles.valueItem} variants={staggerItem}>
              {/* NEW: Replaced with lucide-react icon */}
              <BadgeCheck className={styles.icon} />
              <h3 className={styles.valueTitle}>Uncompromising Purity</h3>
              <p className={styles.valueText}>
                If it isn’t 100% organic, lab-tested, and free from anything
                artificial, we don’t offer it.
              </p>
            </motion.li>

            {/* Added motion.li and variant */}
            <motion.li className={styles.valueItem} variants={staggerItem}>
              {/* NEW: Replaced with lucide-react icon */}
              <Warehouse className={styles.icon} />
              <h3 className={styles.valueTitle}>Regenerative Sourcing</h3>
              <p className={styles.valueText}>
                We partner with farms that go beyond organic—rebuilding soil
                health and promoting biodiversity.
              </p>
            </motion.li>

            {/* Added motion.li and variant */}
            <motion.li className={styles.valueItem} variants={staggerItem}>
              {/* NEW: Replaced with lucide-react icon */}
              <Users className={styles.icon} />
              <h3 className={styles.valueTitle}>Honest Transparency</h3>
              <p className={styles.valueText}>
                You deserve to know where your food comes from. Every product is
                traceable back to source.
              </p>
            </motion.li>
          </motion.ul>
        </section>

        {/* Added motion.section to animate the two columns */}
        <motion.section
          className={`${styles.container} ${styles.twoColumnSection}`}
          aria-labelledby="process"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Animate image from left */}
          <motion.div
            className={styles.twoColumnImage}
            variants={fadeInFromLeft}
          >
            <img
              src="/i4.png"
              alt="Farmer’s hands holding honeycomb"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </motion.div>
          {/* Animate content from right */}
          <motion.div
            className={styles.twoColumnContent}
            variants={fadeInFromRight}
          >
            <h2 id="process" className={styles.sectionTitle}>
              The Journey to Your Table
            </h2>
            <p className={styles.twoColumnLargeText}>
              We don’t just find suppliers. We build partnerships.
            </p>
            <p className={styles.infoText}>
              Our team travels to pristine regions to meet farmers who share our
              values. Together we ensure every batch of honey, every drop of
              oil, and every tea leaf is harvested at its peak and minimally
              processed to preserve its natural power.
            </p>
            <Link
              href="/shop"
              className={styles.secondaryButtonDark}
              aria-label="Shop products shaped by our process"
            >
              Shop Our Process
            </Link>
          </motion.div>
        </motion.section>
      </main>

      {/* Animate the final CTA section */}
      <motion.section
        className={styles.ctaSection}
        aria-labelledby="cta"
        variants={fadeInOnScroll}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={`${styles.container} ${styles.ctaContainer}`}>
          <h2 id="cta" className={styles.sectionTitleLight}>
            Feel the Difference
          </h2>
          <p className={styles.subtitleLight}>
            Start your journey back to nature. Explore our collections and taste
            the purity for yourself.
          </p>
          <Link
            href="/shop"
            className={styles.ctaButton}
            aria-label="Shop all products"
          >
            Shop All Products
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
