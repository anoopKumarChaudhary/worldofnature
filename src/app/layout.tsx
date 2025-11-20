// src/app/layout.tsx
"use client"; // This makes the layout a Client Component

import { Manrope, Inter } from "next/font/google"; // Import new font
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// We no longer import static pages here

// Import Redux Provider
import ReduxProvider from "./redux/provider";
import AboutPage from "./about/page";
import FaqPage from "./faq/page";
import ContactPage from "./components/Contact";
// import AboutPage from "./about/page";
// import FaqPage from "./faq/page";
// import ContactPage from "./components/Contact";

// Setup Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply font variables to the body */}
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-background text-text-primary`}
      >
        {/* Wrap everything in ReduxProvider */}
        <ReduxProvider>
          <Navbar />
          {/* 'children' is the magic prop that renders
            the current page (e.g., page.tsx, about/page.tsx, etc.)
          */}
          <main>{children}</main>

          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
