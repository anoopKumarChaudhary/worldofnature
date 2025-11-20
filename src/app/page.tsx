"use client";

import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { Leaf, Home, Sparkles, Play } from "lucide-react";

// --- Classy Organic Green Color Palette Definition ---
const colors = {
  primaryBackground: "#849e69ff", // Very Light Minty-Grey (fresh, airy base)
  secondaryBackground: "#50593fff", // Muted Sage Green (calming, natural section bg)
  primaryText: "#2C3E2D", // Deep Forest Green (rich, earthy headings)
  secondaryText: "#5A6B5C", // Muted Olive Green (softer paragraph text)
  accentColor: "#7D9B7B", // Soft Moss Green (sophisticated organic accent)
  accentHover: "#6A8768", // Slightly darker Moss for hover
  darkSectionBg: "#2C3E2D", // Deep Forest Green (consistent with primary text, luxurious footer)
  darkSectionText: "#F5F7F3", // Very Light Minty-Grey (high contrast on dark bg)
  darkSectionAccent: "#AFCCA8", // Lightened Moss Green (bright accent on dark bg)
};

const HomePage = () => {
  const handleAddToCart = (title: string) => {
    console.log(`Added ${title} to cart`);
  };

  return (
    <div
      className="w-full overflow-x-hidden font-sans"
      style={{
        backgroundColor: colors.primaryBackground,
        color: colors.secondaryText,
      }}
    >
      {/* --- 1. Hero Section --- */}
      <section
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.secondaryBackground }} // Muted Sage Green
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Column 1: Text Content */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-heading leading-tight"
              style={{ color: colors.primaryText }} // Deep Forest Green
            >
              Pure, Potent & Certified Organic
            </h1>
            <p
              className="text-base md:text-lg lg:text-xl font-sans leading-relaxed max-w-lg mx-auto md:mx-0"
              style={{ color: colors.secondaryText }} // Muted Olive Green
            >
              Rediscover the true taste of nature. We deliver pure, unprocessed,
              and sustainably-sourced organic essentials directly from our
              partner farms to your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              {/* CTA Button: Soft Moss Green */}
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 border border-transparent text-sm md:text-base font-medium rounded-lg text-white shadow-lg hover:shadow-xl transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  backgroundColor: colors.accentColor,
                  color: colors.primaryBackground, // Use light minty-grey for text on accent button
                  "&:hover": { backgroundColor: colors.accentHover },
                  "&:focus-visible": {
                    borderColor: colors.accentColor,
                    outlineColor: colors.accentColor,
                    ringColor: colors.accentColor,
                    ringOffsetColor: colors.secondaryBackground,
                  },
                }}
              >
                Shop The Collection
              </Link>
              {/* Secondary Button: Outline with Soft Moss Green text */}
              <Link
                href="/our-story"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 border text-sm md:text-base font-medium rounded-lg bg-transparent transition-colors duration-300 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{
                  borderColor: colors.accentColor,
                  color: colors.accentColor,
                  "&:hover": {
                    backgroundColor: `${colors.accentColor}1A`, // 10% opacity for subtle hover
                    borderColor: "transparent",
                  },
                  "&:focus-visible": {
                    borderColor: colors.accentColor,
                    outlineColor: colors.accentColor,
                    ringColor: colors.accentColor,
                    ringOffsetColor: colors.secondaryBackground,
                  },
                }}
              >
                <Play className="w-6 h-6" />
                <span>Our Story</span>
              </Link>
            </div>
          </div>
          {/* Column 2: Image Content */}
          <div className="flex justify-center lg:justify-end order-1 md:order-2">
            <img
              src="/won17.JPG"
              alt="A beautiful display of organic food products like honey, ghee, and spices"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* --- 2. "Why Us" Trust Section --- */}
      <section
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.primaryBackground }} // Very Light Minty-Grey
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Leaf
                className="w-12 h-12"
                style={{ color: colors.accentColor }}
              />{" "}
              {/* Soft Moss Green icon */}
            </div>
            <h3
              className="text-lg md:text-xl font-semibold font-heading mb-3"
              style={{ color: colors.primaryText }}
            >
              100% Certified Organic
            </h3>
            <p
              className="text-sm md:text-base font-sans leading-relaxed"
              style={{ color: colors.secondaryText }}
            >
              Free from pesticides, GMOs, and artificial additives. Just pure,
              natural goodness.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Home
                className="w-12 h-12"
                style={{ color: colors.accentColor }}
              />{" "}
              {/* Soft Moss Green icon */}
            </div>
            <h3
              className="text-lg md:text-xl font-semibold font-heading mb-3"
              style={{ color: colors.primaryText }}
            >
              Sustainably Sourced
            </h3>
            <p
              className="text-sm md:text-base font-sans leading-relaxed"
              style={{ color: colors.secondaryText }}
            >
              We partner with small farms that practice regenerative agriculture
              to heal the earth.
            </p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Sparkles
                className="w-12 h-12"
                style={{ color: colors.accentColor }}
              />{" "}
              {/* Soft Moss Green icon */}
            </div>
            <h3
              className="text-lg md:text-xl font-semibold font-heading mb-3"
              style={{ color: colors.primaryText }}
            >
              Unprocessed Purity
            </h3>
            <p
              className="text-sm md:text-base font-sans leading-relaxed"
              style={{ color: colors.secondaryText }}
            >
              Our products are minimally processed to retain their full potency
              and nutritional value.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. Category Section --- */}
      <section
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.secondaryBackground }} // Muted Sage Green
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-4"
              style={{ color: colors.primaryText }}
            >
              Explore Our Collections
            </h2>
            <p
              className="text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed"
              style={{ color: colors.secondaryText }}
            >
              Curated essentials for a conscious lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Category Cards */}
            {["/won18.JPG", "/won19.JPG", "/won20.JPG", "/won21.JPG"].map(
              (src, index) => (
                <Link
                  key={index}
                  href={`/shop/${["oils", "honey", "teas", "seeds"][index]}`}
                  className="group relative rounded-lg overflow-hidden block shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    "&:focus-visible": {
                      ringColor: colors.accentColor,
                      ringOffsetColor: colors.secondaryBackground,
                    },
                  }}
                >
                  <img
                    src={src}
                    alt={
                      [
                        "A bottle of organic ghee and cooking oils",
                        "A jar of raw wild honey",
                        "A cup of artisanal herbal tea",
                        "A bowl of organic seeds and spices",
                      ][index]
                    }
                    className="w-full h-48 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="text-lg md:text-xl font-semibold font-heading mb-1">
                      {
                        [
                          "Ghee & Oils",
                          "Raw Honey",
                          "Artisanal Teas",
                          "Seeds & Spices",
                        ][index]
                      }
                    </h3>
                    <span
                      className="font-medium"
                      style={{ color: colors.darkSectionAccent }}
                    >
                      Shop Now
                    </span>{" "}
                    {/* Lightened Moss Green for contrast */}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* --- 4. "Inspire" Section --- */}
      <section
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.primaryBackground }} // Very Light Minty-Grey
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/won22.JPG"
                alt="Farmer holding fresh vegetables"
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-4 md:mb-6"
              style={{ color: colors.primaryText }}
            >
              The Purity Promise
            </h2>
            <p
              className="text-xl md:text-2xl font-semibold leading-relaxed font-sans mb-4 md:mb-6"
              style={{ color: colors.accentColor }} // Soft Moss Green accent text
            >
              It's more than a label—it's a way of life.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed font-sans mb-6 md:mb-8"
              style={{ color: colors.secondaryText }}
            >
              Choosing organic means choosing food that is real, nourishing, and
              free from the chemicals that harm our bodies and our planet. From
              the soil to your table, every step is guided by respect for
              nature. This means richer flavors, higher nutrient density, and
              the peace of mind that comes from knowing exactly what you're
              eating.
            </p>
            {/* Secondary outline button: Soft Moss Green */}
            <Link
              href="/our-story"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 border-2 text-sm md:text-base font-medium rounded-lg bg-transparent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                borderColor: colors.accentColor,
                color: colors.accentColor,
                "&:hover": {
                  borderColor: colors.accentHover,
                  color: colors.accentHover,
                },
                "&:focus-visible": {
                  ringColor: colors.accentColor,
                  ringOffsetColor: colors.primaryBackground,
                },
              }}
            >
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* --- 5. Featured Products --- */}
      <section
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: colors.secondaryBackground }} // Muted Sage Green
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-4"
              style={{ color: colors.primaryText }}
            >
              Most-Loved Essentials
            </h2>
            <p
              className="text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed"
              style={{ color: colors.secondaryText }}
            >
              Our community's favorite picks for daily wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ProductCard
              id="1x1"
              imageUrl="/won23.JPG"
              title="Wild Forest Honey"
              description="Rich, raw, and unprocessed honey from wild forests."
              price="$18.00"
              onAddToCart={() => handleAddToCart("Wild Forest Honey")}
              // Pass colors to ProductCard
              textColor={colors.primaryText}
              descriptionColor={colors.secondaryText}
              buttonBgColor={colors.accentColor}
              buttonTextColor={colors.primaryBackground}
              buttonHoverColor={colors.accentHover}
            />
            <ProductCard
              id="1x2"
              imageUrl="/won24.JPG"
              title="A2 Bilona Ghee"
              description="Traditional Bilona method A2 Ghee for pure nourishment."
              price="$24.50"
              onAddToCart={() => handleAddToCart("A2 Bilona Ghee")}
              textColor={colors.primaryText}
              descriptionColor={colors.secondaryText}
              buttonBgColor={colors.accentColor}
              buttonTextColor={colors.primaryBackground}
              buttonHoverColor={colors.accentHover}
            />
            <ProductCard
              id="1x3"
              imageUrl="/won25.JPG"
              title="Cold-Pressed Mustard Oil"
              description="Pure, cold-pressed mustard oil, full of natural flavor."
              price="$12.00"
              onAddToCart={() => handleAddToCart("Cold-Pressed Mustard Oil")}
              textColor={colors.primaryText}
              descriptionColor={colors.secondaryText}
              buttonBgColor={colors.accentColor}
              buttonTextColor={colors.primaryBackground}
              buttonHoverColor={colors.accentHover}
            />
          </div>
        </div>
      </section>

      {/* --- 6. Testimonials Section (Deep Forest Green Background) --- */}
      <section
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundColor: colors.darkSectionBg,
          color: colors.darkSectionText,
        }} // Deep Forest Green
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-4"
              style={{ color: colors.darkSectionText }}
            >
              From Our Community
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial Cards */}
            {["Sarah K.", "Michael B.", "Emily T."].map((name, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-lg border-l-4 shadow-sm"
                style={{
                  backgroundColor: `${colors.darkSectionBg}D0`, // Slightly lighter variant of dark bg
                  borderColor: colors.darkSectionAccent, // Lightened Moss Green border
                }}
              >
                <p
                  className="text-sm md:text-base lg:text-lg font-light font-sans leading-relaxed italic mb-4"
                  style={{ color: colors.darkSectionText }}
                >
                  {
                    [
                      '"The quality is unmatched. You can taste the difference. The ghee is liquid gold!"',
                      '"I finally feel good about the products I\'m giving my family. Thank you, World of Nature."',
                      '"My morning routine has been transformed by the herbal teas. So pure and calming."',
                    ][index]
                  }
                </p>
                <span
                  className="text-sm md:text-base font-semibold font-sans"
                  style={{ color: colors.darkSectionText }}
                >
                  - {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
