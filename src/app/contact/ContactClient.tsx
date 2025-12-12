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
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-24 h-24 bg-[#E6F4EA] rounded-full flex items-center justify-center mb-6 animate-blob">
          <CheckCircle2 className="w-12 h-12 text-[#1A2118]" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-[#1A2118] mb-2">
          Message Received
        </h3>
        <p className="text-[#596157] max-w-xs mx-auto text-lg">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Input
          label="Full Name"
          name="name"
          placeholder="e.g. Jane Doe"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@example.com"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
          Subject
        </label>
        <div className="relative">
          <select
            name="subject"
            required
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-base text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
          >
            <option value="">Select a topic...</option>
            <option value="general">General Inquiry</option>
            <option value="products">Product Questions</option>
            <option value="orders">Order Support</option>
            <option value="wholesale">Wholesale / Partnerships</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
          Your Message
        </label>
        <textarea
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-base text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 resize-none placeholder-[#1A2118]/30"
          placeholder="How can we help you today?"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 bg-[#1A2118] text-white rounded-[2rem] font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] hover:shadow-xl hover:shadow-[#BC5633]/20 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
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
  <div className="space-y-2">
    <label className="text-sm font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
      {label}
    </label>
    <input
      required
      className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-base text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 placeholder-[#1A2118]/30"
      {...props}
    />
  </div>
);
