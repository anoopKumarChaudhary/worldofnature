"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ArrowDown,
  Clock,
  Globe,
} from "lucide-react";

export default function ContactPage() {
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
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const backgroundImage = "/d1.png";

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden pb-20">
      {/* --- ANIMATIONS & STYLES --- */}
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
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Texture Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover grayscale opacity-[0.12] mix-blend-multiply"
          />
        </div>
        {/* Ambient Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A2118] rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-blob animation-delay-2000" />
      </div>

      {/* --- HEADER SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-[#1A2118]/10 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A2118]">
                  Support & Inquiries
                </span>
              </div>
              <h1 className="text-6xl lg:text-8xl font-serif font-medium tracking-tight text-[#1A2118]">
                Get in <span className="italic text-[#596157]">Touch.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-2 text-right md:items-end">
              <p className="text-lg text-[#596157] max-w-sm font-light">
                Questions about our soil, our harvest, or just want to say
                hello?
              </p>
              <div className="flex items-center justify-end gap-6 mt-2 text-[#1A2118]/60 text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2">
                  <Clock className="w-3 h-3" /> Mon-Fri 9-6 EST
                </span>
                <span className="flex items-center gap-2">
                  <Globe className="w-3 h-3" /> Global Support
                </span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* --- LEFT COLUMN: CONTACT CARDS --- */}
            <div className="lg:col-span-5 space-y-6 animate-fade-up">
              {/* Main Primary Card */}
              <div className="bg-[#1A2118] text-[#F2F0EA] rounded-[2.5rem] p-8 relative overflow-hidden shadow-2xl group">
                {/* Internal Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

                <h3 className="text-2xl font-serif mb-8 relative z-10">
                  Direct Lines
                </h3>

                <div className="space-y-8 relative z-10">
                  <div className="flex items-start gap-5 group/item cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F0EA]/10 flex items-center justify-center border border-[#F2F0EA]/5 group-hover/item:bg-[#BC5633] transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">
                        Email Us
                      </p>
                      <a
                        href="mailto:hello@worldofnature.com"
                        className="text-lg font-medium hover:text-[#BC5633] transition-colors"
                      >
                        hello@worldofnature.com
                      </a>
                      <p className="text-sm opacity-50 mt-1 font-light">
                        Responds within 24h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 group/item cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-[#F2F0EA]/10 flex items-center justify-center border border-[#F2F0EA]/5 group-hover/item:bg-[#BC5633] transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">
                        Call Us
                      </p>
                      <a
                        href="tel:+15550000000"
                        className="text-lg font-medium hover:text-[#BC5633] transition-colors"
                      >
                        +1 (555) NATURE
                      </a>
                      <p className="text-sm opacity-50 mt-1 font-light">
                        Toll-free support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Info Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Location Card */}
                <div className="bg-white/60 backdrop-blur-md border border-white/40 p-8 rounded-[2.5rem] hover:bg-white transition-colors duration-300 flex flex-col justify-between min-h-[200px]">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#BC5633]/10 flex items-center justify-center text-[#BC5633] mb-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-[#1A2118] mb-2">
                      Visit HQ
                    </h4>
                    <p className="text-[#596157] text-sm leading-relaxed">
                      123 Organic Way
                      <br />
                      Nature Valley, CA
                      <br />
                      90210
                    </p>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <Link
                  href="https://wa.me/15550000000"
                  className="group bg-white/60 backdrop-blur-md border border-white/40 p-8 rounded-[2.5rem] hover:bg-[#25D366] transition-colors duration-500 flex flex-col justify-between relative overflow-hidden min-h-[200px]"
                >
                  {/* Green Reveal Background */}
                  <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#1A2118]/5 flex items-center justify-center text-[#1A2118] mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif text-xl text-[#1A2118] mb-2 group-hover:text-white transition-colors">
                      WhatsApp
                    </h4>
                    <p className="text-[#596157] text-sm group-hover:text-white/90 transition-colors">
                      Chat instantly.
                    </p>
                  </div>

                  <div className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A2118] mt-4 group-hover:text-white transition-colors">
                    Start Chat{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>

            {/* --- RIGHT COLUMN: THE FORM --- */}
            <div
              className="lg:col-span-7 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(26,33,24,0.1)] border border-white relative">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-serif text-[#1A2118] mb-3">
                    Send a Message
                  </h2>
                  <p className="text-[#596157]">
                    Fill out the form below and we'll get back to you.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-24 h-24 bg-[#E6F4EA] rounded-full flex items-center justify-center mb-6 animate-blob">
                      <CheckCircle2 className="w-12 h-12 text-[#1A2118]" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-[#1A2118] mb-2">
                      Message Received
                    </h3>
                    <p className="text-[#596157] max-w-xs mx-auto text-lg">
                      Thank you for reaching out. Our team will get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
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
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                        Subject
                      </label>
                      <div className="relative">
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                        >
                          <option value="">Select a topic...</option>
                          <option value="general">General Inquiry</option>
                          <option value="products">Product Questions</option>
                          <option value="orders">Order Support</option>
                          <option value="wholesale">
                            Wholesale / Partnerships
                          </option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                          <ArrowDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 resize-none placeholder-[#1A2118]/30"
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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

// --- REUSABLE INPUT COMPONENT FOR CLEANER JSX ---
const Input = ({ label, ...props }: ContactInputProps) => (
  <div className="space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
      {label}
    </label>
    <input
      required
      className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all duration-300 placeholder-[#1A2118]/30"
      {...props}
    />
  </div>
);
