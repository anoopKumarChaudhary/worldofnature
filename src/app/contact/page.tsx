import React from "react";
import ContactSection from "../components/home/ContactSection";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F2F3EE] text-[#1A2118] font-sans selection:bg-[#BC5633] selection:text-white overflow-x-hidden pb-20">
      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#F2F3EE]" />

      <ContactSection />
    </div>
  );
}
