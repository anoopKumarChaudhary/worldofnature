// components/faq.tsx (or FaqItem.tsx)
"use client";

import React, { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// --- Type definition for the props ---
interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerId = useId();

  return (
    <div className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-surface)]">
      {/* --- Question Button --- */}
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[var(--color-border)]/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-secondary)] focus-visible:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="text-lg font-medium text-[var(--color-text-primary)]">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[var(--color-text-secondary)] transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* --- Animated Answer Section --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={answerId}
            className="overflow-hidden" // Padding is now inside the motion div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            // "Smoothest" spring animation for a natural feel
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          >
            {/* "Extra line" + content wrapper for clean padding */}
            <div className="px-6 pb-5">
              <hr className="border-[var(--color-border)]" />
              <p className="pt-4 text-[var(--color-text-secondary)] leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
