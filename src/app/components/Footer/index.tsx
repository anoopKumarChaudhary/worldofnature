"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { newsletterAPI } from "../../services/api";
import { useToast } from "../../context/ToastContext";

const Footer = () => {
  const { addToast } = useToast();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Shop",
      links: [
        { href: "/shop", label: "All Products" },
        { href: "/shop/oils", label: "Ghee & Oils" },
        { href: "/shop/honey", label: "Raw Honey" },
        { href: "/shop/teas", label: "Artisanal Teas" },
        { href: "/shop/seeds", label: "Seeds & Spices" },
        { href: "/shop/bundles", label: "Gift Bundles" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "Our Story" },
        { href: "/farmers", label: "Our Farmers" },
        { href: "/sustainability", label: "Sustainability" },
        { href: "/blog", label: "Journal" },
        { href: "/recipes", label: "Organic Recipes" },
        { href: "/careers", label: "Careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/faq", label: "FAQ" },
        { href: "/shipping", label: "Shipping & Delivery" },
        { href: "/returns", label: "Returns Policy" },
        { href: "/track-order", label: "Track Order" },
        { href: "/contact", label: "Contact Us" },
        { href: "/privacy", label: "Privacy Policy" },
      ],
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
  ];

  return (
    // CHANGED: z-40 -> z-10 (Lower z-index prevents it from covering fixed/sticky filters)
    <footer className="relative z-10 bg-[#1A2118] text-[#F2F0EA] pt-16 md:pt-24 pb-12 border-t border-[#F2F0EA]/10" role="contentinfo">
      <div className="container-custom mx-auto">
        {/* Top Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block" aria-label="World of Nature">
              <div className="relative h-12 w-40 md:h-16 md:w-48 overflow-visible">
                 <Image 
                   src="/image.png" 
                   alt="World of Nature Logo" 
                   fill
                   className="object-contain brightness-0 invert opacity-90" 
                   sizes="(max-width: 768px) 150px, 200px"
                 />
              </div>
            </Link>
            <p className="text-[#F2F0EA]/70 leading-relaxed max-w-sm text-base md:text-lg font-light">
              Curating the finest organic essentials from sustainable farms. 
              Pure, potent, and ethically sourced for your well-being.
            </p>
            
            <div className="space-y-4 pt-2">
               <div className="flex items-start gap-3 text-[#F2F0EA]/60">
                  <MapPin size={18} className="mt-1 shrink-0 text-[#BC5633]" />
                  <span className="text-sm leading-relaxed">123 Organic Valley, Nature City, NC 12345</span>
               </div>
               <div className="flex items-center gap-3 text-[#F2F0EA]/60">
                  <Mail size={18} className="shrink-0 text-[#BC5633]" />
                  <a href="mailto:hello@worldofnature.com" className="text-sm hover:text-[#F2F0EA] transition-colors">hello@worldofnature.com</a>
               </div>
               <div className="flex items-center gap-3 text-[#F2F0EA]/60">
                  <Phone size={18} className="shrink-0 text-[#BC5633]" />
                  <a href="tel:+1234567890" className="text-sm hover:text-[#F2F0EA] transition-colors">+1 (123) 456-7890</a>
               </div>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F2F0EA]/5 hover:bg-[#BC5633] text-[#F2F0EA]/60 hover:text-[#F2F0EA] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 md:gap-12">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#BC5633] mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#F2F0EA]/60 hover:text-[#F2F0EA] transition-colors duration-200 text-sm font-medium block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <div>
                <h3 className="text-xl font-serif text-[#F2F0EA] mb-4">Stay Connected</h3>
                <p className="text-[#F2F0EA]/60 text-sm leading-relaxed mb-6">
                Join our community for exclusive offers, wellness tips, and new arrival updates.
                </p>
                <form
                className="space-y-3"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const email = (e.currentTarget.elements.namedItem("newsletter-email") as HTMLInputElement).value;
                    try {
                    await newsletterAPI.subscribe(email);
                    addToast("Subscribed successfully!", "success");
                    (e.target as HTMLFormElement).reset();
                    } catch (error) {
                    console.error("Failed to subscribe:", error);
                    addToast("Failed to subscribe. Please try again.", "error");
                    }
                }}
                >
                <div className="relative">
                    <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent border border-[#F2F0EA]/10 rounded-lg px-4 py-3 text-[#F2F0EA] placeholder-[#F2F0EA]/30 focus:outline-none focus:border-[#BC5633] focus:ring-1 focus:ring-[#BC5633] transition-all text-sm"
                    required
                    />
                    <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#F2F0EA]/60 hover:text-[#BC5633] transition-colors"
                    aria-label="Subscribe"
                    >
                    <ChevronRight size={18} />
                    </button>
                </div>
                <p className="text-[10px] text-[#F2F0EA]/30 uppercase tracking-wider">
                    By subscribing, you agree to our Privacy Policy.
                </p>
                </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F2F0EA]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-[#F2F0EA]/30 uppercase tracking-wider">
            <span>&copy; {currentYear} World of Nature. All rights reserved.</span>
            <span className="hidden md:inline opacity-50">|</span>
            <div className="flex items-center gap-1">
              <span>Crafted with</span>
              <Heart size={10} className="text-rose-500 fill-rose-500" />
              <span>for the planet</span>
            </div>
          </div>

          {/* Payment Methods & Trust */}
          <div className="flex flex-wrap items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#F2F0EA]/60 border border-[#F2F0EA]/10 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Secure SSL
             </div>
             <div className="flex gap-2">
                {/* Simulated Payment Icons */}
                <div className="h-5 w-8 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">VISA</div>
                <div className="h-5 w-8 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">MC</div>
                <div className="h-5 w-8 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">AMEX</div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;