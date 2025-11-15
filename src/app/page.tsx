"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

// --- Icons for the "Why Us" section ---
const LeafIcon = () => (
  <svg
    className="w-12 h-12 text-[var(--color-brand-primary)] mb-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="http://www.w3.org/2000/svg"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.25 11.25l.625 6.25m0 0H8.375m3.5 0c.099 0 .198 0 .298-.01l2.25-2.25c.34-.34.34-.89 0-1.23l-3.375-3.375c-.34-.34-.89-.34-1.23 0l-2.25 2.25c-.01.099 0 .198-.01.298m3.5 0c.34 0 .68-.06 1.01-.19l2.25-2.25c.34-.34.34-.89 0-1.23l-3.375-3.375c-.34-.34-.89-.34-1.23 0L8.375 7.625c-.01.099 0 .198-.01.298m3.5 0c.34 0 .68-.06 1.01-.19l2.25-2.25c.34-.34.34-.89 0-1.23l-3.375-3.375c-.34-.34-.89-.34-1.23 0L8.375 4.025c-.01.099 0 .198-.01.298M12 12c-1.892 0-3.72.3-5.5.852"
    />
  </svg>
);
const FarmIcon = () => (
  <svg
    className="w-12 h-12 text-[var(--color-brand-primary)] mb-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="http://www.w3.org/2000/svg"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5M3.75 18h15M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.75M4.5 9.75l7.5-7.5 7.5 7.5M12 3v2.25"
    />
  </svg>
);
const PurityIcon = () => (
  <svg
    className="w-12 h-12 text-[var(--color-brand-primary)] mb-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="http://www.w3.org/2000/svg"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9.75L14.25 12L12 14.25m-2.25-4.5L7.5 12l2.25 2.25M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM6.75 12c0-1.02.3-1.95.83-2.75"
    />
  </svg>
);

// --- NEW: Icon for the Hero Section ---
const PlayIcon = () => (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="http://www.w3.org/2000/svg"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"
    />
  </svg>
);

const HomePage = () => {
  // Dummy function for the card's prop
  const handleAddToCart = (title: string) => {
    console.log(`Added ${title} to cart`);
    // In a real app, you'd update state or call an API here
  };

  return (
    // This wrapper assumes your globals.css sets the body
    // to var(--brand-dark), our dark green.
    <div className="w-full overflow-x-hidden">
      {/* --- 1. Hero Section (UPDATED) --- */}
      {/* We reuse .lightSection for the background and .container for padding */}
      <section className="bg-[var(--color-background)] text-[var(--color-text-primary)] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-16">
          {/* Column 1: Text Content */}
          <div className="flex flex-col justify-center text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
              Pure, Potent & Certified Organic
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] mb-10 leading-relaxed max-w-lg">
              Rediscover the true taste of nature. We deliver pure, unprocessed,
              and sustainably-sourced organic essentials directly from our
              partner farms to your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="font-semibold text-base text-[var(--color-brand-primary-text)] bg-[var(--color-brand-primary)] px-8 py-3 rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:bg-[var(--color-text-primary)] hover:-translate-y-1 hover:shadow-xl"
              >
                Shop The Collection
              </Link>
              <Link
                href="/our-story"
                className="font-semibold text-base text-[var(--color-text-primary)] bg-transparent border-none cursor-pointer transition-all duration-300 flex items-center gap-2 hover:text-[var(--color-brand-accent)]"
              >
                <PlayIcon />
                <span>Our Story</span>
              </Link>
            </div>
          </div>
          {/* Column 2: Image Content */}
          <div className="flex items-center justify-center">
            <img
              src="/won17.JPG" // Update this src to your actual image
              alt="A beautiful display of organic food products like honey, ghee, and spices"
              className="w-full max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* --- 2. "Why Us" Trust Section (On Dark BG) --- */}

      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="text-center">
          <LeafIcon />
          <h3 className="text-xl font-semibold text-[var(--color-brand-primary-text)] mb-2">
            100% Certified Organic
          </h3>
          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
            Free from pesticides, GMOs, and artificial additives. Just pure,
            natural goodness.
          </p>
        </div>
        <div className="text-center">
          <FarmIcon />
          <h3 className="text-xl font-semibold text-[var(--color-brand-primary-text)] mb-2">
            Sustainably Sourced
          </h3>
          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
            We partner with small farms that practice regenerative agriculture
            to heal the earth.
          </p>
        </div>
        <div className="text-center">
          <PurityIcon />
          <h3 className="text-xl font-semibold text-[var(--color-brand-primary-text)] mb-2">
            Unprocessed Purity
          </h3>
          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed">
            Our products are minimally processed to retain their full potency
            and nutritional value.
          </p>
        </div>
      </section>

      {/* --- 3. Category Section (Light Cards) --- */}
      <section className="bg-[var(--color-background)] text-[var(--color-text-primary)] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4 text-center">
            Explore Our Collections
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            Curated essentials for a conscious lifestyle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/shop/oils"
              className="relative rounded-xl overflow-hidden block shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src="/won18.JPG"
                alt="Organic Ghee & Oils"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-semibold mb-1">Ghee & Oils</h3>
                <span className="font-medium text-[var(--color-brand-accent)]">
                  Shop Now
                </span>
              </div>
            </Link>

            <Link
              href="/shop/honey"
              className="relative rounded-xl overflow-hidden block shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src="/won19.JPG"
                alt="Raw Wild Honey"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-semibold mb-1">Raw Honey</h3>
                <span className="font-medium text-[var(--color-brand-accent)]">
                  Shop Now
                </span>
              </div>
            </Link>

            <Link
              href="/shop/teas"
              className="relative rounded-xl overflow-hidden block shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src="/won20.JPG"
                alt="Artisanal Teas"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-semibold mb-1">Artisanal Teas</h3>
                <span className="font-medium text-[var(--color-brand-accent)]">
                  Shop Now
                </span>
              </div>
            </Link>

            <Link
              href="/shop/seeds"
              className="relative rounded-xl overflow-hidden block shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src="/won21.JPG"
                alt="Organic Seeds"
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-semibold mb-1">Seeds & Spices</h3>
                <span className="font-medium text-[var(--color-brand-accent)]">
                  Shop Now
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 4. "Inspire" Section (On Dark BG) --- */}

      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden">
          <img
            src="/won22.JPG"
            alt="Farmer holding fresh vegetables"
            className="w-full h-auto"
          />
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-bold text-[var(--color-brand-primary-text)] mb-6">
            The Purity Promise
          </h2>
          <p className="text-xl font-normal leading-relaxed text-[var(--color-brand-primary-text)] mb-6">
            It's more than a label—it's a way of life. Choosing organic means
            choosing food that is real, nourishing, and free from the chemicals
            that harm our bodies and our planet.
          </p>
          <p className="text-base text-[var(--color-text-secondary)] font-light leading-relaxed mb-8">
            From the soil to your table, every step is guided by respect for
            nature. This means richer flavors, higher nutrient density, and the
            peace of mind that comes from knowing exactly what you're eating.
          </p>
          <Link
            href="/our-story"
            className="font-semibold text-base text-[var(--color-brand-primary-text)] bg-transparent border-2 border-[var(--color-text-secondary)] px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 hover:border-[var(--color-brand-accent)] hover:text-[var(--color-brand-accent)]"
          >
            Learn Our Story
          </Link>
        </div>
      </section>

      {/* --- 5. Featured Products (Light Cards) --- */}
      <section className="bg-[var(--color-background)] text-[var(--color-text-primary)] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4 text-center">
            Most-Loved Essentials
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-12 text-center leading-relaxed">
            Our community's favorite picks for daily wellness.
          </p>

          {/* UPDATED: Using the new ProductCard component and responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              id="1x1"
              imageUrl="/won23.JPG"
              title="Wild Forest Honey"
              description="Rich, raw, and unprocessed honey from wild forests."
              price="$18.00"
              onAddToCart={() => handleAddToCart("Wild Forest Honey")}
            />
            <ProductCard
              id="1x2"
              imageUrl="/won24.JPG"
              title="A2 Bilona Ghee"
              description="Traditional Bilona method A2 Ghee for pure nourishment."
              price="$24.50"
              onAddToCart={() => handleAddToCart("A2 Bilona Ghee")}
            />
            <ProductCard
              id="1x3"
              imageUrl="/won25.JPG"
              title="Cold-Pressed Mustard Oil"
              description="Pure, cold-pressed mustard oil, full of natural flavor."
              price="$12.00"
              onAddToCart={() => handleAddToCart("Cold-Pressed Mustard Oil")}
            />
          </div>
        </div>
      </section>

      {/* --- 6. Testimonials Section (On Dark BG) --- */}

      <section className="bg-[var(--color-text-primary)] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-brand-primary-text)] mb-12 text-center">
            From Our Community
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-brand-primary)] p-8 rounded-xl border-l-4 border-[var(--color-brand-accent)]">
              <p className="text-lg font-light text-[var(--color-brand-primary-text)] leading-relaxed italic mb-4">
                "The quality is unmatched. You can taste the difference. The
                ghee is liquid gold!"
              </p>
              <span className="text-base font-semibold text-[var(--color-brand-primary)]">
                - Sarah K.
              </span>
            </div>
            <div className="bg-[var(--color-brand-primary)] p-8 rounded-xl border-l-4 border-[var(--color-brand-accent)]">
              <p className="text-lg font-light text-[var(--color-brand-primary-text)] leading-relaxed italic mb-4">
                "I finally feel good about the products I'm giving my family.
                Thank you, World of Nature."
              </p>
              <span className="text-base font-semibold text-[var(--color-brand-primary)]">
                - Michael B.
              </span>
            </div>
            <div className="bg-[var(--color-brand-primary)] p-8 rounded-xl border-l-4 border-[var(--color-brand-accent)]">
              <p className="text-lg font-light text-[var(--color-brand-primary-text)] leading-relaxed italic mb-4">
                "My morning routine has been transformed by the herbal teas. So
                pure and calming."
              </p>
              <span className="text-base font-semibold text-[var(--color-brand-primary)]">
                - Emily T.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
