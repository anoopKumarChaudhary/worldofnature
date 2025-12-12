"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  ArrowRight,
  Clock,
  Globe,
  Send,
} from "lucide-react";
import { contactAPI } from "../../services/api";
import { useState } from "react";


const ContactPage = () => {
  // Direct WhatsApp Link Handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "919528295991"; // Replace with your actual number
    const message = "Hello! I'm interested in your organic products.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    window.open(url, "_blank");
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await contactAPI.sendMessage(formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#F2F0EA] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden pb-20">
      {/* --- STYLES & ANIMATIONS --- */}
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

      {/* --- BACKGROUND LAYERS (Cleaned up) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Noise Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient Blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#BC5633] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1A2118] rounded-full mix-blend-overlay filter blur-[120px] opacity-10 animate-blob animation-delay-2000" />
      </div>

      {/* --- HEADER --- */}
      <section className="relative pt-20 lg:pt-32 pb-16 px-4 lg:px-12 z-10">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-[#1A2118]/5">
            <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A2118]">
              Support Center
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-[#1A2118] mb-6">
            We&rsquo;re Here to Help <br />
            <span className="italic text-[#596157]">Naturally.</span>
          </h1>
          <p className="text-xl text-[#596157] max-w-2xl mx-auto font-light">
            Have a question about our organic sourcing or need help with an
            order? Reach out directly.
          </p>
        </div>
      </section>

      <div className="relative z-10 px-4 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* --- LEFT COLUMN: CONTACT CARDS --- */}
            <div className="lg:col-span-7 space-y-6 animate-fade-up">
              {/* Email Card */}
              <div className="group bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 flex items-start gap-6 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-[1.2rem] bg-[#BC5633]/10 flex items-center justify-center flex-shrink-0 text-[#BC5633] group-hover:scale-110 transition-transform duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1A2118] mb-1">
                    Email Us
                  </h3>
                  <p className="text-[#596157] text-sm mb-2">
                    For general inquiries and orders
                  </p>
                  <a
                    href="mailto:support@worldofnature.com"
                    className="text-lg font-medium text-[#1A2118] hover:text-[#BC5633] transition-colors border-b border-[#BC5633]/30 pb-0.5"
                  >
                    support@worldofnature.com
                  </a>
                </div>
              </div>

              {/* Phone Card (Highlighted Dark Style) */}
              <div className="group bg-[#1A2118] text-[#F2F0EA] rounded-[2.5rem] p-8 flex items-start gap-6 relative overflow-hidden shadow-2xl hover:-translate-y-1 transition-transform duration-300">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity" />

                <div className="w-14 h-14 rounded-[1.2rem] bg-[#F2F0EA]/10 flex items-center justify-center flex-shrink-0 text-[#BC5633] group-hover:scale-110 transition-transform duration-300 border border-[#F2F0EA]/5 relative z-10">
                  <Phone size={24} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-serif font-bold mb-1">Call Us</h3>
                  <p className="text-[#F2F0EA]/60 text-sm mb-4 flex items-center gap-2">
                    <Clock size={12} /> Mon-Fri from 9am to 6pm
                  </p>
                  <div className="flex flex-col gap-1">
                    <a
                      href="tel:+919528295991"
                      className="text-2xl font-bold text-[#F2F0EA] hover:text-[#BC5633] transition-colors"
                    >
                      +91 95282 95991
                    </a>
                    <a
                      href="tel:+23057814480"
                      className="text-lg font-medium text-[#F2F0EA]/60 hover:text-[#BC5633] transition-colors"
                    >
                      +230 5781 4480
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Card */}
              <div className="group bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 flex items-start gap-6 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 rounded-[1.2rem] bg-[#1A2118]/5 flex items-center justify-center flex-shrink-0 text-[#1A2118] group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1A2118] mb-1">
                    Farm Office
                  </h3>
                  <p className="text-[#596157] leading-relaxed">
                    123 Green Valley, Organic Farms Rd,
                    <br />
                    Nature City, India 400001
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#BC5633]">
                    <Globe size={14} /> Get Directions
                  </div>
                </div>
              </div>

              {/* Social Row */}
              <div className="pt-6 flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-14 h-14 rounded-[1.2rem] bg-white border border-[#1A2118]/10 flex items-center justify-center text-[#1A2118] hover:bg-[#1A2118] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* --- RIGHT COLUMN: WHATSAPP --- */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              {/* WhatsApp Card (Visually Stunning) */}
              <div className="relative group overflow-hidden bg-[#25D366] rounded-[3rem] p-10 text-center shadow-[0_20px_50px_-12px_rgba(37,211,102,0.3)] hover:-translate-y-2 transition-all duration-500">
                {/* Background Texture inside Card */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/noise.png')] pointer-events-none"></div>
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white rounded-full mix-blend-overlay filter blur-[60px] opacity-30 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <MessageCircle size={36} className="text-[#25D366]" />
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-[#075E54] mb-4">
                    Chat on WhatsApp
                  </h2>

                  <p className="text-[#075E54]/80 mb-8 leading-relaxed font-medium">
                    The fastest way to reach us. Ask about products, track
                    orders, or just say hello!
                  </p>

                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full h-16 bg-white text-[#075E54] rounded-[1.5rem] font-bold text-lg uppercase tracking-wide hover:bg-[#DCF8C6] transition-colors shadow-lg flex items-center justify-center gap-3"
                  >
                    Start Chat <ArrowRight size={20} />
                  </button>

                  <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-[#075E54]/60">
                    Replies typically in minutes
                  </p>
                </div>
              </div>
              </div>

              {/* Contact Form Card */}
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] p-8 lg:p-10 shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-[#1A2118] mb-6">
                  Send us a Message
                </h3>
                {submitStatus === "success" ? (
                  <div className="bg-[#3A4D39]/10 text-[#3A4D39] p-6 rounded-[1.5rem] text-center">
                    <p className="font-bold mb-2">Message Sent!</p>
                    <p className="text-sm">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-4 text-xs font-bold uppercase tracking-widest underline"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                        Name
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                        Subject
                      </label>
                      <input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-[#1A2118]/60 ml-4">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-6 py-4 bg-[#F2F0EA]/50 border border-transparent rounded-[1.5rem] text-[#1A2118] focus:bg-white focus:border-[#BC5633]/20 focus:ring-4 focus:ring-[#BC5633]/5 focus:outline-none transition-all resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#1A2118] text-white rounded-[1.5rem] font-bold text-sm uppercase tracking-widest hover:bg-[#BC5633] transition-all shadow-lg flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                    {submitStatus === "error" && (
                      <p className="text-xs text-red-500 text-center font-bold">
                        Failed to send message. Please try again.
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ContactPage;
