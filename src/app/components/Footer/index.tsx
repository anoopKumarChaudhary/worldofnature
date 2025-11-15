// components/Footer.js
import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import { Facebook, FacebookIcon, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter Section */}
        <div className={styles.footerNewsletter}>
          <h3 className={styles.newsletterTitle}>Join Our Fresh List</h3>
          <p className={styles.newsletterTagline}>
            Get 10% off your first order, plus exclusive offers and farm-fresh
            recipes.
          </p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              className={styles.newsletterInput}
              required
            />
            <button type="submit" className={styles.newsletterButton}>
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Grid */}
        <div className={styles.gridContainer}>
          {/* Column 1: Brand */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              World Of Nature
            </Link>
            <p className={styles.tagline}>Good for you, good for the planet.</p>
            <div className={styles.socialIcons}>
              <Link
                href="#"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <Facebook size={48} strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <Instagram size={48} strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className={styles.socialLink}
                aria-label="Pinterest"
              >
                <Twitter size={48} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Column 2: Our Products */}
          <div>
            <h4 className={styles.columnTitle}>Our Products</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/shop/ghee-oils" className={styles.link}>
                  Ghee & Oils
                </Link>
              </li>
              <li>
                <Link href="/shop/honey" className={styles.link}>
                  Honey & Sweeteners
                </Link>
              </li>
              <li>
                <Link href="/shop/teas" className={styles.link}>
                  Organic Teas
                </Link>
              </li>
              <li>
                <Link href="/shop/seeds" className={styles.link}>
                  Seeds & Grains
                </Link>
              </li>
              <li>
                <Link href="/shop/mustard-spices" className={styles.link}>
                  Spices & Mustards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Shop Collections */}
          <div>
            <h4 className={styles.columnTitle}>Shop Collections</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/collections/pantry" className={styles.link}>
                  Pantry Staples
                </Link>
              </li>
              <li>
                <Link href="/collections/wellness" className={styles.link}>
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link href="/collections/best-sellers" className={styles.link}>
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link href="/collections/new" className={styles.link}>
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections/bundles" className={styles.link}>
                  Bundles & Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Company */}
          <div>
            <h4 className={styles.columnTitle}>Our Company</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/our-story" className={styles.link}>
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/farms" className={styles.link}>
                  Our Farms
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className={styles.link}>
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.link}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className={styles.link}>
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Customer Service */}
          <div>
            <h4 className={styles.columnTitle}>Customer Service</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/account" className={styles.link}>
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/shipping" className={styles.link}>
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} World Of Nature. All Rights
            Reserved.
          </p>
          <div className={styles.paymentIcons}>
            <svg
              fill="currentColor"
              viewBox="0 0 60 38"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
            >
              <path d="M57.6,1.8H2.4C1.1,1.8,0,2.9,0,4.2v29.6c0,1.3,1.1,2.4,2.4,2.4h55.3c1.3,0,2.4-1.1,2.4-2.4V4.2 C60,2.9,58.9,1.8,57.6,1.8z M48.8,26.4c0,0.6-0.5,1-1,1H12.2c-0.6,0-1-0.5-1-1v-4.3c0-0.6,0.5-1,1-1h35.5c0.6,0,1,0.5,1,1V26.4z M48.8,17c0,0.6-0.5,1-1,1H12.2c-0.6,0-1-0.5-1-1v-4.3c0-0.6,0.5-1,1-1h35.5c0.6,0,1,0.5,1,1V17z" />
            </svg>
            <svg
              fill="currentColor"
              viewBox="0 0 60 38"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
            >
              <path d="M30,1.8C14.5,1.8,1.8,14.5,1.8,30c0,15.5,12.8,28.2,28.2,28.2S58.2,45.5,58.2,30C58.2,14.5,45.5,1.8,30,1.8z M30,49.5 c-10.8,0-19.5-8.8-19.5-19.5S19.2,10.5,30,10.5S49.5,19.2,49.5,30S40.8,49.5,30,49.5z" />{" "}
              <path d="M30,13.8c-8.9,0-16.2,7.3-16.2,16.2c0,8.9,7.3,16.2,16.2,16.2c8.9,0,16.2-7.3,16.2-16.2C46.2,21.1,38.9,13.8,30,13.8z M30,40.2c-5.6,0-10.2-4.6-10.2-10.2s4.6-10.2,10.2-10.2s10.2,4.6,10.2,10.2S35.6,40.2,30,40.2z" />{" "}
              <path d="M22.1,30c0-4.3,3.5-7.9,7.9-7.9c1.7,0,3.3,0.6,4.6,1.5c-0.5-1.1-1.4-1.9-2.5-2.5c-1.4-0.7-3-1-4.6-1 C23,20.1,18,24.5,18,30s5,9.9,10.5,9.9c1.6,0,3.1-0.3,4.6-1c-1.1-0.6-2-1.4-2.5-2.5C25.4,35.7,22.1,33.2,22.1,30z" />
            </svg>
            <svg
              fill="currentColor"
              viewBox="0 0 60 38"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
            >
              <path d="M57.6,1.8H2.4C1.1,1.8,0,2.9,0,4.2v29.6c0,1.3,1.1,2.4,2.4,2.4h55.3c1.3,0,2.4-1.1,2.4-2.4V4.2 C60,2.9,58.9,1.8,57.6,1.8z M19.8,30.5c-1.8,0-3.2-0.6-4.2-1.7c-1-1.1-1.5-2.7-1.5-4.7c0-1.9,0.5-3.4,1.4-4.5 c1-1.1,2.3-1.6,4.1-1.6c1.8,0,3.2,0.5,4.1,1.5c0.9,1,1.4,2.5,1.4,4.6c0,2.2-0.5,3.7-1.5,4.8C23,29.9,21.6,30.5,19.8,30.5z M45.1,30.5c-1.8,0-3.2-0.6-4.2-1.7c-1-1.1-1.5-2.7-1.5-4.7c0-1.9,0.5-3.4,1.4-4.5c1-1.1,2.3-1.6,4.1-1.6 c1.8,0,3.2,0.5,4.1,1.5c0.9,1,1.4,2.5,1.4,4.6c0,2.2-0.5,3.7-1.5,4.8C48.3,29.9,46.9,30.5,45.1,30.5z M32.5,30.1 c-1.3,0-2.3-0.5-3-1.4l-0.2-0.9h-0.1c-0.2,0.7-0.5,1.2-0.9,1.6c-0.4,0.4-0.9,0.6-1.6,0.6c-0.9,0-1.6-0.3-2.1-0.8 c-0.5-0.5-0.8-1.2-0.8-2v-7.8h2.9v7.1c0,0.6,0.2,1,0.5,1.2c0.3,0.2,0.7,0.3,1.1,0.3c0.6,0,1-0.2,1.3-0.5 c0.3-0.3,0.5-0.7,0.5-1.3v-6.8h2.9V30.1z M53,22.1c0,1.3-0.3,2.3-0.9,3c-0.6,0.7-1.4,1.1-2.4,1.1c-0.6,0-1.1-0.2-1.5-0.5 c-0.4-0.3-0.7-0.7-0.8-1.2l0.2-0.8h-2.8v4.8c0,1.3-0.3,2.3-0.9,3c-0.6,0.7-1.4,1.1-2.4,1.1c-0.6,0-1.1-0.2-1.5-0.5 c-0.4-0.3-0.7-0.7-0.8-1.2l0.2-0.8h-2.8v4.8h-2.9V18.3h5.7c1.3,0,2.3,0.5,3,1.4c0.8,0.9,1.1,2.1,1.1,3.4H53z M50.1,22.1 c0-0.6-0.2-1-0.5-1.2c-0.3-0.2-0.7-0.3-1.1-0.3h-2.8v3.1h2.8c0.4,0,0.8-0.1,1.1-0.3c0.3-0.2,0.5-0.6,0.5-1.2V22.1z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
