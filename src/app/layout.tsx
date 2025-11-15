"use client"; // This makes the layout a Client Component

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact";
import OrganicIllustrations from "./components/Leaf";
import AboutPage from "./about/page";
import FaqPage from "./faq/page";

// Import Redux Provider
import ReduxProvider from "./redux/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap everything in ReduxProvider */}
        <ReduxProvider>
          <Navbar />
          {/* <OrganicIllustrations /> */}
          {children}
          <AboutPage />
          <FaqPage />
          <ContactPage />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
