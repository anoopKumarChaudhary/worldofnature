// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Make your CSS variables available to Tailwind
      colors: {
        // Semantic Colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        border: "var(--border)",

        // Text Colors
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",

        // Button/Action Colors
        "primary-bg": "var(--primary-bg)",
        "primary-text": "var(--primary-text)",
        "accent-bg": "var(--accent-bg)",
        "accent-text": "var(--accent-text)",
        "accent-hover-bg": "var(--accent-hover-bg)",

        // Brand Colors (for one-off use)
        "brand-light": "var(--brand-light)",
        "brand-dark": "var(--brand-dark)",
        "brand-green": "var(--brand-green)",
        "brand-accent": "var(--brand-accent)",
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
export default config;
