"use client"; // This page uses FaqItem, which is a client component

import React from "react";
import Link from "next/link";
import FaqItem from "../components/faq"; // Make sure this path is correct

// --- Expanded FAQ Content ---
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
    question: "Are your products safe for people with allergies?",
    answer:
      "Many of our products are single-ingredient and naturally allergen-free. However, our products are packed in facilities that may also handle nuts, gluten, and other allergens. Please check the label on each product page for specific allergen information.",
  },
  {
    question: "How should I store my ghee and honey?",
    answer:
      "Our A2 Ghee is shelf-stable and does not require refrigeration. Store it in a cool, dark pantry. Our raw honey may naturally crystallize; this is a sign of purity! To re-liquefy, gently place the sealed jar in a bowl of warm (not hot) water.",
  },
  {
    question: "What's the difference between 'cold-pressed' and regular oil?",
    answer:
      "Cold-pressing is a mechanical method of extracting oil without using any heat or chemicals. This gentle process retains all the natural flavor, aroma, and nutritional value (like antioxidants and healthy fats) that are often lost in conventional high-heat refining.",
  },
  {
    question: "Do you offer subscriptions or bulk discounts?",
    answer:
      "Yes! We offer a 'Subscribe & Save' 10% discount on many of our popular essentials. We also provide bulk pricing for wholesale and food service inquiries. Please visit our 'Contact' page for more details.",
  },
  {
    question: "What is your shipping & return policy?",
    answer:
      "We ship all orders within 1-2 business days. If you are not 100% satisfied with your purchase, please contact our support team within 30 days of receiving your order for a full refund or replacement. Your happiness is our top priority.",
  },
];

const FaqPage = () => {
  // --- UPDATED: Local Theme (Light Mint, Cream & Earthy Black/Moss) ---
  const style = {
    "--color-background": "#d9edd9", // Your new light mint green
    "--color-surface": "#FCFCF9", // Creamy, warm white for the FAQ card
    "--color-text-primary": "#2B2A26", // Warm "Espresso" black
    "--color-text-secondary": "#5A5750", // Warm "Gray-brown"
    "--color-border": "#DEDCD5", // Warm, light gray border
    "--color-brand-secondary": "#4A5D43", // Moss Green (for icons)

    // Dark CTA Section Theme
    "--color-cta-bg": "#2B2A26", // UPDATED: Replaced purplish-gray with cohesive Espresso black
    "--color-cta-text": "#FCFCF9", // Creamy white text
    "--color-cta-accent-bg": "#4A5D43", // Moss Green button
    "--color-cta-accent-text": "#FCFCF9", // Creamy text on button
  } as React.CSSProperties;

  return (
    <div style={style} className="min-h-screen bg-[var(--color-background)]">
      {/* Container with professional responsive padding */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* --- 1. Header --- */}
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Your most common questions about our products, sourcing, and
            philosophy.
          </p>
        </header>

        {/* --- 2. FAQ List --- */}
        <main className="mb-12 md:mb-16 lg:py-20">
          {/* This "card" wrapper is key for the clean UI */}
          <div className="bg-[var(--color-surface)] rounded-lg shadow-sm border border-[var(--color-border)]">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </main>
      </div>{" "}
      {/* End .container */}
      {/* --- 3. Final CTA (Dark Section) --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--color-cta-bg)] text-[var(--color-cta-text)]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Still have questions?
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            We are here to help. Get in touch with our team directly for any
            question, big or small.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[var(--color-cta-accent-bg)] text-[var(--color-cta-accent-text)] px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta-accent-bg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cta-bg)]"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div> // End .pageWrapper
  );
};

export default FaqPage;
