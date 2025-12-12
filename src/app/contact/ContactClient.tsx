"use client";

import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { contactAPI } from "../services/api";
import { useToast } from "../context/ToastContext";

export default function ContactClient() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactAPI.sendMessage(formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      addToast("Message sent successfully", "success");
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Failed to send message:", error);
      addToast("Failed to send message. Please try again.", "error");
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-[#E6F4EA] rounded-full flex items-center justify-center mb-6 animate-blob">
          <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-[#1A2118]" />
        </div>
        <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1A2118] mb-2">
          Message Received
        </h3>
        <p className="text-[#596157] max-w-xs mx-auto text-base md:text-lg">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    // Reduced space-y for mobile to save vertical height
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
      
      {/* GRID: Forced 2 columns on mobile to reduce height */}
      <div className="grid grid-cols-2 gap-3 md:gap-8">
        <Input
          label="Full Name"
          name="name"
          placeholder="e.g. Jane"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          label="Email" // Shortened label for mobile
          name="email"
          type="email"
          placeholder="jane@ex.com"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-1.5 md:space-y-2">
        <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-2 md:ml-4">
          Subject
        </label>
        <div className="relative">
          <select
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            // Adjusted padding for mobile (px-4 py-3) vs desktop (px-6 py-4)
            className="w-full px-4 py-3 md:px-6 md:py-4 bg-[#F2F0EA]/50 border border-transparent rounded-sm text-base text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
          >
            <option value="">Select a topic...</option>
            <option value="general">General Inquiry</option>
            <option value="products">Product Questions</option>
            <option value="orders">Order Support</option>
            <option value="wholesale">Wholesale / Partnerships</option>
          </select>
          {/* Custom Arrow for better styling consistency */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
             <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#1A2118" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
          </div>
        </div>
      </div>

      <div className="space-y-1.5 md:space-y-2">
        <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-2 md:ml-4">
          Your Message
        </label>
        <textarea
          name="message"
          required
          // Reduced rows on mobile to 4
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 md:px-6 md:py-4 md:min-h-[160px] bg-[#F2F0EA]/50 border border-transparent rounded-sm text-base text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 resize-none placeholder-[#1A2118]/30"
          placeholder="How can we help you today?"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 md:py-5 bg-[#1A2118] text-white rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] hover:shadow-xl hover:shadow-[#BC5633]/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing...
            </>
          ) : (
            <>
              Send Message{" "}
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

interface ContactInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const Input = ({ label, ...props }: ContactInputProps) => (
  <div className="space-y-1.5 md:space-y-2">
    <label className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-2 md:ml-4 truncate">
      {label}
    </label>
    <input
      required
      // Optimized padding: px-4 py-3 on mobile, larger on desktop
      className="w-full px-4 py-3 md:px-6 md:py-4 bg-[#F2F0EA]/50 border border-transparent rounded-sm text-base text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 placeholder-[#1A2118]/30"
      {...props}
    />
  </div>
);  