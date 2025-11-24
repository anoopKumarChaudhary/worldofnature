// src/app/layout.tsx
"use client"; // This makes the layout a Client Component

import { Manrope, Inter } from "next/font/google"; // Import new font
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Redux Provider
import ReduxProvider from "./redux/provider";
import FaqPage from "./faq/page";
import ContactPage from "./components/Contact";

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
          <main>{children}</main>
          <FaqPage />
          <ContactPage />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
