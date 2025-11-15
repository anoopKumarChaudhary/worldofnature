"use client";

import React from "react";
import Link from "next/link";
import styles from "./home.module.css";
import ProductCard from "./components/ProductCard";

// --- Icons for the "Why Us" section ---
const LeafIcon = () => (
  <svg
    className={styles.icon}
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
    className={styles.icon}
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
    className={styles.icon}
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
    className={styles.playIcon}
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
    <div className={styles.pageWrapper}>
      {/* --- 1. Hero Section (UPDATED) --- */}
      {/* We reuse .lightSection for the background and .container for padding */}
      <section className={styles.lightSection}>
        <div className={`${styles.container} ${styles.hero}`}>
          {/* Column 1: Text Content */}
          <div className={styles.heroTextContent}>
            <h1 className={styles.heroTitle}>
              Pure, Potent & Certified Organic
            </h1>
            <p className={styles.heroParagraph}>
              Rediscover the true taste of nature. We deliver pure, unprocessed,
              and sustainably-sourced organic essentials directly from our
              partner farms to your family.
            </p>
            _
            <div className={styles.heroButtons}>
              <Link href="/shop" className={styles.primaryButtonDark}>
                Shop The Collection
              </Link>
              <Link href="/our-story" className={styles.playButton}>
                <PlayIcon />
                <span>Our Story</span>
              </Link>
            </div>
          </div>
          {/* Column 2: Image Content */}
          <div className={styles.heroImageContent}>
            <img
              src="woni2.png" // Update this src to your actual image
              alt="A beautiful display of organic food products like honey, ghee, and spices"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* --- 2. "Why Us" Trust Section (On Dark BG) --- */}

      <section className={`${styles.container} ${styles.whyUsSection}`}>
        <div className={styles.whyUsItem}>
          <LeafIcon />
          <h3 className={styles.whyUsTitle}>100% Certified Organic</h3>
          <p className={styles.whyUsText}>
            Free from pesticides, GMOs, and artificial additives. Just pure,
            natural goodness.
          </p>
        </div>
        <div className={styles.whyUsItem}>
          <FarmIcon />
          <h3 className={styles.whyUsTitle}>Sustainably Sourced</h3>
          <p className={styles.whyUsText}>
            We partner with small farms that practice regenerative agriculture
            to heal the earth.
          </p>
        </div>
        <div className={styles.whyUsItem}>
          <PurityIcon />
          <h3 className={styles.whyUsTitle}>Unprocessed Purity</h3>
          <p className={styles.whyUsText}>
            Our products are minimally processed to retain their full potency
            and nutritional value.
          </p>
        </div>
      </section>

      {/* --- 3. Category Section (Light Cards) --- */}
      <section className={styles.lightSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Explore Our Collections</h2>
          <p className={styles.sectionSubtitle}>
            Curated essentials for a conscious lifestyle.
          </p>

          <div className={styles.categoryGrid}>
            <Link href="/shop/oils" className={styles.categoryCard}>
              <img
                src="woni2.png"
                alt="Organic Ghee & Oils"
                className={styles.categoryImage}
              />
              <div className={styles.categoryContent}>
                <h3>Ghee & Oils</h3>
                <span>Shop Now</span>
              </div>
            </Link>

            <Link href="/shop/honey" className={styles.categoryCard}>
              <img
                src="woni2.png"
                alt="Raw Wild Honey"
                className={styles.categoryImage}
              />
              <div className={styles.categoryContent}>
                <h3>Raw Honey</h3>
                <span>Shop Now</span>
              </div>
            </Link>

            <Link href="/shop/teas" className={styles.categoryCard}>
              <img
                src="woni2.png"
                alt="Artisanal Teas"
                className={styles.categoryImage}
              />
              <div className={styles.categoryContent}>
                <h3>Artisanal Teas</h3>
                <span>Shop Now</span>
              </div>
            </Link>

            <Link href="/shop/seeds" className={styles.categoryCard}>
              <img
                src="woni2.png"
                alt="Organic Seeds"
                className={styles.categoryImage}
              />
              <div className={styles.categoryContent}>
                <h3>Seeds & Spices</h3>
                <span>Shop Now</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 4. "Inspire" Section (On Dark BG) --- */}

      <section className={`${styles.container} ${styles.twoColumnSection}`}>
        <div className={styles.twoColumnImage}>
          <img src="woni2.png" alt="Farmer holding fresh vegetables" />
        </div>
        <div className={styles.twoColumnContent}>
          <h2 className={styles.sectionTitle}>The Purity Promise</h2>
          <p className={styles.largeText}>
            It's more than a label—it's a way of life. Choosing organic means
            choosing food that is real, nourishing, and free from the chemicals
            that harm our bodies and our planet.
          </p>
          <p className={styles.infoText}>
            From the soil to your table, every step is guided by respect for
            nature. This means richer flavors, higher nutrient density, and the
            peace of mind that comes from knowing exactly what you're eating.
          </p>
          <Link href="/our-story" className={styles.secondaryButton}>
            Learn Our Story
          </Link>
        </div>
      </section>

      {/* --- 5. Featured Products (Light Cards) --- */}
      <section className={styles.lightSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Most-Loved Essentials</h2>
          <p className={styles.sectionSubtitle}>
            Our community's favorite picks for daily wellness.
          </p>

          {/* UPDATED: Using the new ProductCard component and responsive grid */}
          <div className={styles.productGrid}>
            <ProductCard
              id="1x1"
              imageUrl="/woni2.png"
              title="Wild Forest Honey"
              description="Rich, raw, and unprocessed honey from wild forests."
              price="$18.00"
              onAddToCart={() => handleAddToCart("Wild Forest Honey")}
            />
            <ProductCard
              id="1x2"
              imageUrl="/c4.png"
              title="A2 Bilona Ghee"
              description="Traditional Bilona method A2 Ghee for pure nourishment."
              price="$24.50"
              onAddToCart={() => handleAddToCart("A2 Bilona Ghee")}
            />
            <ProductCard
              id="1x3"
              imageUrl="/wonh1.JPG"
              title="Cold-Pressed Mustard Oil"
              description="Pure, cold-pressed mustard oil, full of natural flavor."
              price="$12.00"
              onAddToCart={() => handleAddToCart("Cold-Pressed Mustard Oil")}
            />
          </div>
        </div>
      </section>

      {/* --- 6. Testimonials Section (On Dark BG) --- */}

      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>From Our Community</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "The quality is unmatched. You can taste the difference. The
                ghee is liquid gold!"
              </p>
              <span className={styles.testimonialAuthor}>- Sarah K.</span>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "I finally feel good about the products I'm giving my family.
                Thank you, World of Nature."
              </p>
              <span className={styles.testimonialAuthor}>- Michael B.</span>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>
                "My morning routine has been transformed by the herbal teas. So
                pure and calming."
              </p>
              <span className={styles.testimonialAuthor}>- Emily T.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
