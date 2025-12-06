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
import { newsletterAPI } from "../../services/api";

const Footer = () => {
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
    <footer className="bg-brand-primary-900 text-brand-primary-100 pt-20 pb-10 border-t border-brand-primary-800" role="contentinfo">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-3 space-y-8">
            <Link href="/" className="inline-block" aria-label="World of Nature">
              <div className="h-16 w-auto overflow-visible">
                 <img src="/image.png" alt="World of Nature Logo" className="h-full w-auto object-contain brightness-0 invert opacity-90" />
              </div>
            </Link>
            <p className="text-brand-primary-200 leading-relaxed max-w-sm text-lg font-light">
              Curating the finest organic essentials from sustainable farms. 
              Pure, potent, and ethically sourced for your well-being.
            </p>
            
            <div className="space-y-4 pt-2">
               <div className="flex items-start gap-3 text-brand-primary-300">
                  <MapPin size={18} className="mt-1 shrink-0 text-brand-accent-400" />
                  <span className="text-sm leading-relaxed">123 Organic Valley, Nature City, NC 12345</span>
               </div>
               <div className="flex items-center gap-3 text-brand-primary-300">
                  <Mail size={18} className="shrink-0 text-brand-accent-400" />
                  <a href="mailto:hello@worldofnature.com" className="text-sm hover:text-brand-accent-100 transition-colors">hello@worldofnature.com</a>
               </div>
               <div className="flex items-center gap-3 text-brand-primary-300">
                  <Phone size={18} className="shrink-0 text-brand-accent-400" />
                  <a href="tel:+1234567890" className="text-sm hover:text-brand-accent-100 transition-colors">+1 (123) 456-7890</a>
               </div>
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-primary-800 hover:bg-brand-primary-700 text-brand-primary-300 hover:text-brand-accent-100 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-primary-400 border-b border-brand-primary-800 pb-2 inline-block">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-brand-primary-200 hover:text-brand-accent-100 transition-colors duration-200 text-[15px] font-medium block py-0.5"
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
                <h3 className="text-xl font-medium text-brand-primary-50 mb-3">Stay Connected</h3>
                <p className="text-brand-primary-200 text-sm leading-relaxed mb-6">
                Join our community for exclusive offers, wellness tips, and new arrival updates.
                </p>
                <form
                className="space-y-3"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const email = (e.currentTarget.elements.namedItem("newsletter-email") as HTMLInputElement).value;
                    try {
                    await newsletterAPI.subscribe(email);
                    alert("Subscribed successfully!");
                    (e.target as HTMLFormElement).reset();
                    } catch (error) {
                    console.error("Failed to subscribe:", error);
                    alert("Failed to subscribe. Please try again.");
                    }
                }}
                >
                <div className="relative">
                    <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent border border-brand-primary-600 rounded-lg px-4 py-3 text-brand-primary-100 placeholder-brand-primary-400 focus:outline-none focus:border-brand-accent-500 focus:ring-1 focus:ring-brand-accent-500 transition-all"
                    required
                    />
                    <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-primary-400 hover:text-brand-accent-100 transition-colors"
                    aria-label="Subscribe"
                    >
                    <ChevronRight size={20} />
                    </button>
                </div>
                <p className="text-xs text-brand-primary-400">
                    By subscribing, you agree to our Privacy Policy.
                </p>
                </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-primary-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-brand-primary-400">
            <span>&copy; {currentYear} World of Nature. All rights reserved.</span>
            <span className="hidden md:inline text-brand-primary-600">|</span>
            <div className="flex items-center gap-1">
              <span>Crafted with</span>
              <Heart size={12} className="text-rose-500 fill-rose-500" />
              <span>for the planet</span>
            </div>
          </div>

          {/* Payment Methods & Trust */}
          <div className="flex flex-wrap items-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-xs text-brand-primary-400 border border-brand-primary-800 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Secure SSL Encryption
             </div>
             <div className="flex gap-2">
                {/* Simulated Payment Icons */}
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-white/50">VISA</div>
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-white/50">MC</div>
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-white/50">AMEX</div>
                <div className="h-6 w-10 bg-white/10 rounded flex items-center justify-center text-[10px] font-bold text-white/50">PAYPAL</div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
