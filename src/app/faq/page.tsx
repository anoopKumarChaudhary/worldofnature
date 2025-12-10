import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import FaqClient from "./FaqClient";

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

export default function FaqPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#BC5633] selection:text-white pb-20">
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

      <FaqClient faqData={faqData} />

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
}
