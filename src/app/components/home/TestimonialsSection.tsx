"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Elena R.",
    role: "Verified Buyer",
    product: "Raw Honey",
    rating: 5,
    text: "I've never tasted honey this complex before. It feels like I'm tasting the forest itself. A truly grounding experience.",
    initial: "E"
  },
  {
    id: 2,
    name: "Sarah M.",
    role: "Verified Buyer",
    product: "Saffron",
    rating: 5,
    text: "The aroma is unmistakable. You can tell this hasn't been processed or tampered with. Worth every penny for the purity.",
    initial: "S"
  },
  {
    id: 3,
    name: "David K.",
    role: "Verified Buyer",
    product: "Walnut Oil",
    rating: 5,
    text: "Using this for my salads has been a game changer. It has such a rich, nutty depth that I haven't found in store-bought oils.",
    initial: "D"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#E6E2D6]/30">
      <div className="container-custom mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#1A2118] mb-4">Stories from the Community</h2>
          <p className="text-[#596157] font-light">Real experiences from those who value purity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#F2F0EA] p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#1A2118]/5 flex flex-col">
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#BC5633] text-[#BC5633]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#1A2118] leading-relaxed mb-8 flex-1 font-medium">
                &quot;{review.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-[#1A2118]/5">
                <div className="w-10 h-10 bg-[#1A2118] rounded-full flex items-center justify-center text-[#F2F0EA] font-serif text-lg">
                  {review.initial}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#1A2118]">{review.name}</p>
                  <div className="flex items-center gap-1 text-xs text-[#596157] mt-0.5">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>{review.role} • {review.product}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
