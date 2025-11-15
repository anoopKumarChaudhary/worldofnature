// components/Footer.js
import React from "react";
import Link from "next/link";
import { Facebook, FacebookIcon, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[var(--footer-white)] text-[var(--footer-grey)] font-sans antialiased">
      <div className="w-full mx-auto px-4 sm:max-w-xl sm:px-6 lg:max-w-4xl lg:px-8 xl:max-w-6xl">
        {/* Newsletter Section */}
        <div className="text-center py-12 border-b border-[var(--footer-border)]">
          <h3 className="text-3xl font-bold text-[var(--footer-white)] mb-2">
            Join Our Fresh List
          </h3>
          <p className="text-[var(--footer-tagline)] mb-6 text-lg font-light">
            Get 10% off your first order, plus exclusive offers and farm-fresh
            recipes.
          </p>
          <form className="flex max-w-md mx-auto shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l-md outline-none bg-[var(--footer-white)] text-[var(--footer-grey)] text-base placeholder-[var(--footer-placeholder)]"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-brand-accent)] text-[var(--color-brand-accent-text)] font-bold rounded-r-md cursor-pointer transition-colors duration-300 hover:bg-[var(--brand-accent-hover)] text-base"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Column 1: Brand */}
          <div className="col-span-full sm:col-span-1">
            <Link
              href="/"
              className="text-3xl font-bold text-[var(--footer-white)] mb-4 block no-underline leading-9 transition-colors duration-300"
            >
              World Of Nature
            </Link>
            <p className="text-[var(--footer-tagline)] font-light">
              Good for you, good for the planet.
            </p>
            <div className="flex gap-5 mt-6">
              <Link
                href="#"
                className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={24} strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:scale-110 hover:-translate-y-1"
                aria-label="Pinterest"
              >
                <Twitter size={24} strokeWidth={2} />
              </Link>
            </div>
          </div>

          {/* Column 2: Our Products */}
          <div>
            <h4 className="text-xl font-bold text-[var(--footer-white)] mb-5">
              Our Products
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <Link
                  href="/shop/ghee-oils"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Ghee & Oils
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/honey"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Honey & Sweeteners
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/teas"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Organic Teas
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/seeds"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Seeds & Grains
                </Link>
              </li>
              <li>
                <Link
                  href="/shop/mustard-spices"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Spices & Mustards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Shop Collections */}
          <div>
            <h4 className="text-xl font-bold text-[var(--footer-white)] mb-5">
              Shop Collections
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <Link
                  href="/collections/pantry"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Pantry Staples
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/wellness"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/best-sellers"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/new"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/bundles"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Bundles & Sets
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Company */}
          <div>
            <h4 className="text-xl font-bold text-[var(--footer-white)] mb-5">
              Our Company
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <Link
                  href="/our-story"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/farms"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Our Farms
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Customer Service */}
          <div>
            <h4 className="text-xl font-bold text-[var(--footer-white)] mb-5">
              Customer Service
            </h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--footer-grey)] transition-all duration-300 hover:text-[var(--footer-white)] hover:translate-x-1 no-underline font-light"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 mt-4 pt-8 border-t border-[var(--footer-border)]">
          <p className="text-[var(--footer-copyright)] text-sm text-center">
            &copy; {new Date().getFullYear()} World Of Nature. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-3 text-[var(--footer-grey)]">
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
