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
      title: "About",
      links: [
        { href: "/about", label: "Our Story" },
        { href: "/farmers", label: "Our Farmers" },
        { href: "/sustainability", label: "Sustainability" },
        { href: "/certifications", label: "Certifications" },
        { href: "/blog", label: "Blog" },
        { href: "/careers", label: "Careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/faq", label: "FAQ" },
        { href: "/shipping", label: "Shipping Info" },
        { href: "/returns", label: "Returns & Exchanges" },
        { href: "/contact", label: "Contact Us" },
        { href: "/size-guide", label: "Size Guide" },
        { href: "/track-order", label: "Track Order" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/accessibility", label: "Accessibility" },
        { href: "/cookies", label: "Cookie Policy" },
        { href: "/disclaimer", label: "Disclaimer" },
      ],
    },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: Facebook,
      label: "Follow us on Facebook",
    },
    {
      href: "https://instagram.com",
      icon: Instagram,
      label: "Follow us on Instagram",
    },
    {
      href: "https://twitter.com",
      icon: Twitter,
      label: "Follow us on Twitter",
    },
    {
      href: "https://youtube.com",
      icon: Youtube,
      label: "Subscribe to our YouTube channel",
    },
  ];

  return (
    <footer
      className="bg-brand-primary-900 text-brand-primary-100"
      role="contentinfo"
    >
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="flex items-center space-x-2"
              aria-label="World of Nature - Go to homepage"
            >
              <div className="h-16 w-auto overflow-visible">
                <img src="/image.png" alt="World of Nature Logo" className="h-full w-auto object-contain" />
              </div>
            </Link>

            <p className="text-brand-primary-200 leading-relaxed max-w-md">
              Pure, potent, and certified organic essentials from nature's
              finest. We bring you the highest quality organic products directly
              from sustainable farms.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin
                  size={18}
                  className="text-brand-accent-400 flex-shrink-0"
                />
                <span className="text-sm">
                  123 Organic Valley, Nature City, NC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone
                  size={18}
                  className="text-brand-accent-400 flex-shrink-0"
                />
                <a
                  href="tel:+1234567890"
                  className="text-sm hover:text-brand-accent-400 transition-colors duration-200"
                >
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  size={18}
                  className="text-brand-accent-400 flex-shrink-0"
                />
                <a
                  href="mailto:hello@worldofnature.com"
                  className="text-sm hover:text-brand-accent-400 transition-colors duration-200"
                >
                  hello@worldofnature.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-brand-primary-200 hover:text-brand-accent-400 hover:bg-brand-primary-800 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-brand-accent-100">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-primary-200 hover:text-brand-accent-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-brand-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-semibold text-brand-accent-100">
              Stay Connected
            </h3>
            <p className="text-brand-primary-200">
              Get exclusive offers, organic recipes, and wellness tips delivered
              to your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
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
              <label htmlFor="newsletter-email" className="sr-only">
                Enter your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="form-input flex-1 bg-brand-primary-800 border-brand-primary-700 text-brand-accent-100 placeholder-brand-primary-400 focus:border-brand-accent-500 focus:ring-brand-accent-500"
                required
                aria-describedby="newsletter-help"
              />
              <button
                type="submit"
                className="btn bg-brand-accent-500 text-brand-primary-900 hover:bg-brand-accent-400 whitespace-nowrap"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
            <p id="newsletter-help" className="text-xs text-brand-primary-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4 text-sm text-brand-primary-400">
              <span>© {currentYear} World of Nature. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>
                Made with{" "}
                <Heart size={14} className="inline text-brand-error" /> for
                nature
              </span>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-brand-primary-400 hover:text-brand-accent-400 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-brand-primary-400 hover:text-brand-accent-400 transition-colors duration-200"
              >
                Terms
              </Link>
              <Link
                href="/accessibility"
                className="text-brand-primary-400 hover:text-brand-accent-400 transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t border-brand-primary-800 bg-brand-deep-forest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-80">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary-700 rounded-full flex items-center justify-center">
                <span className="text-brand-accent-300 font-bold text-xs">
                  ✓
                </span>
              </div>
              <span className="text-xs text-brand-primary-200">
                100% Organic
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary-700 rounded-full flex items-center justify-center">
                <span className="text-brand-accent-300 font-bold text-xs">
                  🚚
                </span>
              </div>
              <span className="text-xs text-brand-primary-200">
                Free Shipping $50+
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary-700 rounded-full flex items-center justify-center">
                <span className="text-brand-accent-300 font-bold text-xs">
                  ↩
                </span>
              </div>
              <span className="text-xs text-brand-primary-200">
                30-Day Returns
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-primary-700 rounded-full flex items-center justify-center">
                <span className="text-brand-accent-300 font-bold text-xs">
                  🔒
                </span>
              </div>
              <span className="text-xs text-brand-primary-200">
                Secure Checkout
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
