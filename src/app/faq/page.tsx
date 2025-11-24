"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MessageCircle, ArrowRight, HelpCircle } from "lucide-react";
import FaqItem from "../components/faq";

// --- Data Source ---
const faqData = [
  {
    id: "organic",
    question: "Are all of your products 100% organic?",
    answer:
      "Yes. Every product we sell is 100% Certified Organic. We partner directly with farms and producers who share our values, ensuring that everything is free from pesticides, GMOs, and artificial additives. We call this our Purity Promise.",
  },
  {
    id: "source",
    question: "Where do you source your products from?",
    answer:
      "We source from a curated network of small, sustainable farms both locally and from pristine regions around the world known for their potent and pure ingredients. We believe in transparency and work to provide traceable sourcing for every item.",
  },
  {
    id: "regenerative",
    question: "What is 'regenerative agriculture'?",
    answer:
      "Regenerative agriculture is a set of farming practices that go beyond just 'sustainable.' It aims to actively heal and restore the land by rebuilding soil health, increasing biodiversity, and capturing carbon from the atmosphere.",
  },
  {
    id: "allergies",
    question: "Are your products safe for people with allergies?",
    answer:
      "Many of our products are single-ingredient and naturally allergen-free. However, our products are packed in facilities that may also handle nuts, gluten, and other allergens. Please check the label on each product page for specific allergen information.",
  },
  {
    id: "storage",
    question: "How should I store my ghee and honey?",
    answer:
      "Our A2 Ghee is shelf-stable and does not require refrigeration. Store it in a cool, dark pantry. Our raw honey may naturally crystallize; this is a sign of purity! To re-liquefy, gently place the sealed jar in a bowl of warm (not hot) water.",
  },
  {
    id: "shipping",
    question: "What is your shipping & return policy?",
    answer:
      "We ship all orders within 1-2 business days. If you are not 100% satisfied with your purchase, please contact our support team within 30 days of receiving your order for a full refund or replacement.",
  },
];

const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F2F0EA] font-sans selection:bg-[#BC5633] selection:text-white pb-20">
      {/* --- Styles for Blobs/Marquee --- */}
      <style jsx>{`
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
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Ambient Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#8DA383] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-2000" />
      </div>

      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-3xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1A2118]/10 shadow-sm mb-8 animate-fade-in-up">
            <HelpCircle className="w-4 h-4 text-[#BC5633]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]">
              Help Center
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-medium text-[#1A2118] mb-6 tracking-tight">
            How can we help?
          </h1>
          <p className="text-xl text-[#596157] max-w-xl mx-auto mb-12 font-light">
            Answers about our soil, our sourcing, and our promise to you.
          </p>

          {/* One UI Style Search Bar */}
          <div className="relative max-w-xl mx-auto group">
            {/* Glowing Effect behind search */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#BC5633] to-[#1A2118] rounded-[2rem] opacity-20 group-hover:opacity-40 blur transition duration-500" />

            <div className="relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl flex items-center p-2 transition-transform duration-300 focus-within:scale-[1.02]">
              <div className="pl-4 text-[#1A2118]/40">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Search keywords (e.g., shipping, honey)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-[#1A2118] placeholder-[#1A2118]/40 px-4 py-4 text-lg h-14"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#BC5633] hover:bg-[#BC5633]/10 rounded-full transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ CONTENT --- */}
      <section className="px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
        <div className="container mx-auto max-w-3xl">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-5">
              {filteredFaqs.map((faq, index) => (
                <FaqItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          ) : (
            // Empty State - One UI Style
            <div className="text-center py-16 px-6 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-dashed border-[#1A2118]/20">
              <div className="bg-[#F2F0EA] w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Search className="w-8 h-8 text-[#BC5633]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A2118] mb-2">
                No results found
              </h3>
              <p className="text-[#596157]">
                We couldn't find answers for "{searchQuery}".
              </p>
            </div>
          )}
        </div>
      </section>

      {/* --- STILL NEED HELP CARD --- */}
      <section className="px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-[#1A2118] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#1A2118]/20 overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[80px] opacity-20" />

            <div className="text-center md:text-left relative z-10">
              <h2 className="text-3xl font-serif text-[#F2F0EA] mb-3">
                Still have questions?
              </h2>
              <p className="text-[#F2F0EA]/70 text-lg">
                Our support team is a message away.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full md:w-auto">
              <Link
                href="/contact"
                className="h-14 px-8 bg-[#F2F0EA] text-[#1A2118] rounded-full flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
              >
                <MessageCircle className="w-5 h-5" /> Chat
              </Link>
              <Link
                href="mailto:support@worldofnature.com"
                className="h-14 px-8 bg-transparent border border-[#F2F0EA]/20 text-[#F2F0EA] rounded-full flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest hover:bg-[#F2F0EA]/10 transition-colors"
              >
                Email Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
