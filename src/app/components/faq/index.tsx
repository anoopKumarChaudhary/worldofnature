"use client";

import React from "react";

import { Plus, Minus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className={`group relative overflow-hidden transition-all duration-500 ${
        isOpen
          ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] rounded-[2rem]"
          : "bg-white/60 hover:bg-white hover:shadow-lg rounded-[1.5rem]"
      }`}
    >
      {/* Active State Border/Glow */}
      <div
        className={`absolute top-0 left-0 w-1.5 h-full bg-[#BC5633] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span
          className={`text-lg sm:text-xl font-serif font-medium transition-colors duration-300 ${
            isOpen
              ? "text-[#1A2118]"
              : "text-[#1A2118]/70 group-hover:text-[#1A2118]"
          }`}
        >
          {question}
        </span>

        {/* Animated Icon Container */}
        <div
          className={`relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${
            isOpen
              ? "bg-[#1A2118] text-white rotate-180"
              : "bg-[#F2F0EA] text-[#1A2118] group-hover:bg-[#BC5633] group-hover:text-white"
          }`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 sm:px-8 pb-8 pt-0">
          <div className="h-px w-full bg-[#1A2118]/5 mb-6" />
          <p className="text-[#596157] leading-relaxed text-lg font-light">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
