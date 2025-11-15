"use client"; // This page uses FaqItem, which is a client component

import React from "react";
import Link from "next/link";
import styles from "./faq.module.css";
import FaqItem from "../components/faq";

// --- FAQ Content ---
const faqs = [
  {
    question: "Are all of your products 100% organic?",
    answer:
      "Yes. Every product we sell is 100% Certified Organic. We partner directly with farms and producers who share our values, ensuring that everything is free from pesticides, GMOs, and artificial additives. We call this our Purity Promise.",
  },
  {
    question: "Where do you source your products from?",
    answer:
      "We source from a curated network of small, sustainable farms both locally and from pristine regions around the world known for their potent and pure ingredients. We believe in transparency and work to provide traceable sourcing for every item.",
  },
  {
    question: "What is 'regenerative agriculture'?",
    answer:
      "Regenerative agriculture is a set of farming practices that go beyond just 'sustainable.' It aims to actively heal and restore the land by rebuilding soil health, increasing biodiversity, and capturing carbon from the atmosphere. We prioritize partners who use these methods.",
  },
  {
    question: "How should I store my ghee and honey?",
    answer:
      "Our A2 Ghee is shelf-stable and does not require refrigeration. Store it in a cool, dark pantry. Our raw honey may naturally crystallize; this is a sign of purity! To re-liquefy, gently place the sealed jar in a bowl of warm (not hot) water.",
  },
  {
    question: "What is your shipping & return policy?",
    answer:
      "We ship all orders within 1-2 business days. If you are not 100% satisfied with your purchase, please contact us within 30 days for a full refund or replacement. Your happiness is our top priority.",
  },
];

const FaqPage = () => {
  return (
    // This page wrapper is on the LIGHT theme
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* --- 1. Header --- */}

        <header className={styles.header}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>
            Your most common questions about our products, sourcing, and
            philosophy.
          </p>
        </header>

        {/* --- 2. FAQ List --- */}

        <main className={styles.faqList}>
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </main>
      </div>{" "}
      {/* End .container */}
      {/* --- 3. Final CTA (Dark Section) --- */}
      {/* This section matches your footer, creating a seamless transition */}
      <section className={styles.ctaSection}>
        <div className={`${styles.container} ${styles.ctaContainer}`}>
          <h2 className={styles.sectionTitleLight}>Still have questions?</h2>
          <p className={styles.subtitleLight}>
            We are here to help. Get in touch with our team directly for any
            question, big or small.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Contact Our Team
          </Link>
        </div>
      </section>
    </div> // End .pageWrapper
  );
};

export default FaqPage;
