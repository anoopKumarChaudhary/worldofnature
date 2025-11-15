"use client";

import React, { useState } from "react";
import styles from "./faq.module.css";
import { motion, AnimatePresence } from "framer-motion";

// --- Icon for the accordion ---
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={styles.chevronIcon}
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
    <div className={styles.faqItem}>
      <button className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.faqAnswerWrapper}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.49, 0.73, 1] }}
          >
            <p className={styles.faqAnswer}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
