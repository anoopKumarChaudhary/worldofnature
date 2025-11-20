/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Make your CSS variables available to Tailwind
      colors: {
        // Semantic Colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "card-bg": "var(--card-bg)",
        "subtle-bg": "var(--subtle-bg)",
        border: "var(--border)",

        // Page-specific Backgrounds
        "bg-home": "var(--bg-home)",
        "bg-shop": "var(--bg-shop)",
        "bg-about": "var(--bg-about)",
        "bg-faq": "var(--bg-utility)",
        "bg-login": "var(--bg-utility)",
        "bg-cart": "var(--bg-cart)",
        "bg-checkout": "var(--bg-checkout)",
        "bg-product": "var(--bg-product)",
        "bg-order-confirmation": "var(--bg-order-confirmation)",

        // Section Backgrounds
        "bg-hero": "var(--bg-hero)",
        "bg-testimonials": "var(--bg-testimonials)",
        "bg-cta": "var(--bg-cta)",
        "bg-footer": "var(--bg-footer)",

        // Text Colors
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        muted: "var(--muted)",

        // Button/Action Colors
        "primary-bg": "var(--primary-bg)",
        "primary-text": "var(--primary-text)",
        "accent-bg": "var(--accent-bg)",
        "accent-text": "var(--accent-text)",
        "cta-hover": "var(--cta-hover)",
        "accent-hover": "var(--accent-hover)",

        // Expanded Brand Colors
        "brand-mint-50": "var(--brand-mint-50)",
        "brand-mint-100": "var(--brand-mint-100)",
        "brand-mint-200": "var(--brand-mint-200)",
        "brand-mint-300": "var(--brand-mint-300)",
        "brand-mint-400": "var(--brand-mint-400)",
        "brand-mint-500": "var(--brand-mint-500)",
        "brand-sage-200": "var(--brand-sage-200)",
        "brand-sage-300": "var(--brand-sage-300)",
        "brand-sage-400": "var(--brand-sage-400)",
        "brand-sage-500": "var(--brand-sage-500)",
        "brand-sage-600": "var(--brand-sage-600)",
        "brand-sage-700": "var(--brand-sage-700)",
        "brand-sage-800": "var(--brand-sage-800)",
        "brand-pine-600": "var(--brand-pine-600)",
        "brand-pine-700": "var(--brand-pine-700)",
        "brand-pine-800": "var(--brand-pine-800)",
        "brand-pine-900": "var(--brand-pine-900)",
        "brand-eggshell": "var(--brand-eggshell)",
        "brand-linen": "var(--brand-linen)",
        "brand-linen-100": "var(--brand-linen-100)",
        "brand-linen-200": "var(--brand-linen-200)",
        "brand-linen-300": "var(--brand-linen-300)",
        "brand-stone": "var(--brand-stone)",
        "brand-stone-100": "var(--brand-stone-100)",
        "brand-stone-200": "var(--brand-stone-200)",
        "brand-stone-300": "var(--brand-stone-300)",
        "brand-stone-500": "var(--brand-stone-500)",
        "brand-stone-600": "var(--brand-stone-600)",
        "brand-ash": "var(--brand-ash)",
        "brand-ash-100": "var(--brand-ash-100)",
        "brand-ash-200": "var(--brand-ash-200)",
        "brand-peach-200": "var(--brand-peach-200)",
        "brand-peach-300": "var(--brand-peach-300)",
        "brand-peach-400": "var(--brand-peach-400)",
        "brand-peach-500": "var(--brand-peach-500)",
        "brand-peach-600": "var(--brand-peach-600)",
        "brand-peach-700": "var(--brand-peach-700)",
        "brand-lavender-100": "var(--brand-lavender-100)",
        "brand-lavender-200": "var(--brand-lavender-200)",
        "brand-lavender-300": "var(--brand-lavender-300)",
        "brand-cream": "var(--brand-cream)",
        "brand-cream-100": "var(--brand-cream-100)",
        "brand-cream-200": "var(--brand-cream-200)",
        "brand-warm-gray-100": "var(--brand-warm-gray-100)",
        "brand-warm-gray-200": "var(--brand-warm-gray-200)",
        "brand-warm-gray-300": "var(--brand-warm-gray-300)",
        "brand-success": "var(--brand-success)",
        "brand-success-hover": "var(--brand-success-hover)",
      },
      // Make your CSS font variables available to Tailwind
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },
    },
  },
  plugins: [],
};
