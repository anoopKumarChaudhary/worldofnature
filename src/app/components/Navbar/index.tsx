"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// FIX: Removed unused 'Camera' import
import { Search, ShoppingCart } from "lucide-react";

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

  // 1. Control navbar visibility on scroll
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setShowNavbar(false);
          setIsMobileMenuOpen(false); // Close mobile menu on scroll
        } else {
          // Scrolling up
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

  // 2. NEW: Close mobile menu on window resize (robustness)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // 768px is Tailwind's default 'md' breakpoint
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3. NEW: Prevent body scroll when mobile menu is open (A11y & UX)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 4. NEW: Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      <header
        className={`font-sans bg-surface/80 backdrop-blur-md shadow-sm sticky top-0 z-50 antialiased transition-all duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="w-full mx-auto px-4 py-4 flex justify-between items-center sm:max-w-xl sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold text-text-primary no-underline leading-9 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-bg rounded-sm"
            onClick={closeMobileMenu}
          >
            World Of Nature
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            <Link
              href="/shop"
              className="text-text-secondary transition-all duration-300 hover:text-text-primary hover:-translate-y-0.5 no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-text-primary after:transition-all after:duration-300 hover:after:w-full focus-visible:text-text-primary focus-visible:after:w-full outline-none"
            >
              Shop
            </Link>
            <Link
              href="/our-story"
              className="text-text-secondary transition-all duration-300 hover:text-text-primary hover:-translate-y-0.5 no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-text-primary after:transition-all after:duration-300 hover:after:w-full focus-visible:text-text-primary focus-visible:after:w-full outline-none"
            >
              Our Story
            </Link>
            <Link
              href="/blog"
              className="text-text-secondary transition-all duration-300 hover:text-text-primary hover:-translate-y-0.5 no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-text-primary after:transition-all after:duration-300 hover:after:w-full focus-visible:text-text-primary focus-visible:after:w-full outline-none"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-text-secondary transition-all duration-300 hover:text-text-primary hover:-translate-y-0.5 no-underline relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-text-primary after:transition-all after:duration-300 hover:after:w-full focus-visible:text-text-primary focus-visible:after:w-full outline-none"
            >
              Contact
            </Link>
          </div>

          {/* Icons & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              className="text-text-secondary transition-all duration-300 hover:text-text-primary hover:scale-110 bg-transparent border-none p-0 cursor-pointer no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-bg rounded-full"
              aria-label="Search"
            >
              <Search size={24} strokeWidth={2} />
            </button>
            <Link
              href="/cart"
              className="text-text-secondary transition-all duration-300 hover:text-text-primary hover:scale-110 bg-transparent border-none p-0 cursor-pointer no-underline relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-bg rounded-full"
              aria-label="View cart (3 items)" // Improved A11y
            >
              <ShoppingCart size={24} strokeWidth={2} />
              <span className="absolute -top-2 -right-2 bg-accent-bg text-accent-text text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* 5. FIX: Hamburger button now correctly hidden on desktop */}
            <button
              id="mobile-menu-button"
              className={`bg-transparent border-none cursor-pointer p-0 w-6 h-6 flex flex-col justify-around transition-transform duration-300 hover:scale-110 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-bg rounded-sm ${
                isMobileMenuOpen ? "rotate-45" : ""
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-text-primary rounded transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`absolute left-0 right-0 bg-surface shadow-md transition-all duration-300 rounded-bl-lg rounded-br-lg overflow-hidden py-2 md:hidden ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          }`}
        >
          {/* 6. FIX & POLISH: Staggered-in animations for links */}
          <Link
            href="/shop"
            className={`block px-4 py-3 text-text-secondary no-underline transition-all duration-300 hover:bg-border hover:pl-6 font-medium ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0 delay-100"
                : "opacity-0 -translate-x-5"
            }`}
            onClick={closeMobileMenu}
          >
            Shop
          </Link>
          <Link
            href="/our-story"
            className={`block px-4 py-3 text-text-secondary no-underline transition-all duration-300 hover:bg-border hover:pl-6 font-medium ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0 delay-150"
                : "opacity-0 -translate-x-5"
            }`}
            onClick={closeMobileMenu}
          >
            Our Story
          </Link>
          <Link
            href="/blog"
            className={`block px-4 py-3 text-text-secondary no-underline transition-all duration-300 hover:bg-border hover:pl-6 font-medium ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0 delay-200"
                : "opacity-0 -translate-x-5"
            }`}
            onClick={closeMobileMenu}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`block px-4 py-3 text-text-secondary no-underline transition-all duration-300 hover:bg-border hover:pl-6 font-medium ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0 delay-250"
                : "opacity-0 -translate-x-5"
            }`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </header>
    </>
  );
};

export default Navbar;
