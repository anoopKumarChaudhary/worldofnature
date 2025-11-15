"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Icon for the accordion ---
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className="w-5 h-5 text-[var(--color-text-secondary)] transition-transform duration-300"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// --- Type definition for the props ---
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-surface)]">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[var(--color-border)] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-[var(--color-text-primary)]">
          {question}
        </span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="px-6 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.49, 0.73, 1] }}
          >
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
