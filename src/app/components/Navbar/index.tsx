"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Camera, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShowNavbar(false);
          setIsMobileMenuOpen(false);
        } else {
          // If scrolling up
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`font-sans bg-[var(--color-surface)] backdrop-blur-md shadow-sm sticky top-0 z-50 antialiased transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full mx-auto px-4 py-4 flex justify-between items-center sm:max-w-xl sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl">
        <Link
          href="/"
          className="text-3xl font-bold text-[var(--color-text-primary)] no-underline leading-9 transition-colors duration-300"
          onClick={closeMobileMenu}
        >
          World Of Nature
        </Link>

        <div className="hidden md:flex gap-6">
          <Link
            href="/shop"
            className="text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-brand-primary)] hover:-translate-y-1 no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[var(--color-brand-primary)] after:transition-all after:duration-300 hover:after:w-full"
          >
            Shop
          </Link>
          <Link
            href="/our-story"
            className="text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-brand-primary)] hover:-translate-y-1 no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[var(--color-brand-primary)] after:transition-all after:duration-300 hover:after:w-full"
          >
            Our Story
          </Link>
          <Link
            href="/blog"
            className="text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-brand-primary)] hover:-translate-y-1 no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[var(--color-brand-primary)] after:transition-all after:duration-300 hover:after:w-full"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-brand-primary)] hover:-translate-y-1 no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[var(--color-brand-primary)] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-brand-primary)] hover:scale-110 bg-transparent border-none p-0 cursor-pointer no-underline"
            aria-label="Search"
          >
            <Search size={24} strokeWidth={2} />
          </button>
          <Link
            href="/cart"
            className="text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-brand-primary)] hover:scale-110 bg-transparent border-none p-0 cursor-pointer no-underline relative"
            aria-label="View cart"
          >
            <ShoppingCart size={24} strokeWidth={2} />
            <span className="absolute -top-2 -right-2 bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-text)] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              3
            </span>
          </Link>

          <button
            id="mobile-menu-button"
            className={`bg-transparent border-none cursor-pointer p-0 w-6 h-6 flex flex-col justify-around transition-transform duration-300 hover:scale-110 ${
              isMobileMenuOpen ? "rotate-45" : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-secondary)] rounded transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-secondary)] rounded transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-secondary)] rounded transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 bg-[var(--color-surface)] backdrop-blur-md shadow-sm opacity-0 invisible -translate-y-5 transition-all duration-400 rounded-bl-lg rounded-br-lg overflow-hidden py-2 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible translate-y-0" : ""
        }`}
      >
        <Link
          href="/shop"
          className="block px-4 py-3 text-[var(--color-text-secondary)] no-underline transition-all duration-300 hover:bg-[var(--color-border)] hover:pl-6 hover:-translate-x-0 hover:opacity-100 font-medium opacity-0 -translate-x-5"
          onClick={closeMobileMenu}
        >
          Shop
        </Link>
        <Link
          href="/our-story"
          className="block px-4 py-3 text-[var(--color-text-secondary)] no-underline transition-all duration-300 hover:bg-[var(--color-border)] hover:pl-6 hover:-translate-x-0 hover:opacity-100 font-medium opacity-0 -translate-x-5"
          onClick={closeMobileMenu}
        >
          Our Story
        </Link>
        <Link
          href="/blog"
          className="block px-4 py-3 text-[var(--color-text-secondary)] no-underline transition-all duration-300 hover:bg-[var(--color-border)] hover:pl-6 hover:-translate-x-0 hover:opacity-100 font-medium opacity-0 -translate-x-5"
          onClick={closeMobileMenu}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-3 text-[var(--color-text-secondary)] no-underline transition-all duration-300 hover:bg-[var(--color-border)] hover:pl-6 hover:-translate-x-0 hover:opacity-100 font-medium opacity-0 -translate-x-5"
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
