"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import FaqItem from "../components/faq";

interface FaqClientProps {
  faqData: {
    id: string;
    question: string;
    answer: string;
  }[];
}

export default function FaqClient({ faqData }: FaqClientProps) {
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
    <>
      {/* --- HEADER SECTION (Search) --- */}
      <section className="relative pt-20 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="container mx-auto max-w-3xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#1A2118]/10 shadow-sm mb-8 animate-fade-in-up">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1A2118]">
              Help Center
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-serif font-medium text-[#1A2118] mb-6 tracking-tight">
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
            <div className="text-center py-12 lg:py-16 px-6 bg-white/50 backdrop-blur-md rounded-[2.5rem] border border-dashed border-[#1A2118]/20">
              <div className="bg-[#F2F0EA] w-20 h-20 rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Search className="w-8 h-8 text-[#BC5633]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1A2118] mb-2">
                No results found
              </h3>
              <p className="text-[#596157]">
                We couldn&apos;t find answers for &quot;{searchQuery}&quot;.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
