"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
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
      className={`${styles.navbar} ${showNavbar ? "" : styles.navbarHidden}`}
    >
      <nav className={styles.navContainer}>
        <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
          World Of Nature
        </Link>

        <div className={styles.desktopMenu}>
          <Link href="/shop" className={styles.navLink}>
            Shop
          </Link>
          <Link href="/our-story" className={styles.navLink}>
            Our Story
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>

        <div className={styles.iconGroup}>
          <button className={styles.iconButton} aria-label="Search">
            <Search size={48} strokeWidth={2} />
          </button>
          <Link
            href="/cart"
            className={`${styles.iconButton} ${styles.cartLink}`}
            aria-label="View cart"
          >
            <ShoppingCart size={48} strokeWidth={2} />
            <span className={styles.cartBadge}>3</span>
          </Link>

          <button
            id="mobile-menu-button"
            className={`${styles.mobileMenuButton} ${
              isMobileMenuOpen ? styles.isOpen : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className={styles.bar1}></span>
            <span className={styles.bar2}></span>
            <span className={styles.bar3}></span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <Link
          href="/shop"
          className={styles.mobileLink}
          onClick={closeMobileMenu}
        >
          Shop
        </Link>
        <Link
          href="/our-story"
          className={styles.mobileLink}
          onClick={closeMobileMenu}
        >
          Our Story
        </Link>
        <Link
          href="/blog"
          className={styles.mobileLink}
          onClick={closeMobileMenu}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className={styles.mobileLink}
          onClick={closeMobileMenu}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
