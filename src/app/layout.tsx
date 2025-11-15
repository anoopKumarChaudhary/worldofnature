// "use client"; // This makes the layout a Client Component

// import type { Metadata } from "next";
// import { Geist, Geist_Mono, Manrope, Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import ContactPage from "./components/Contact";
// import OrganicIllustrations from "./components/Leaf";
// import AboutPage from "./about/page";
// import FaqPage from "./faq/page";

// // Import Redux Provider
// import ReduxProvider from "./redux/provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

// const manrope = Manrope({
//   subsets: ["latin"],
//   variable: "--font-heading",
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${manrope.variable} antialiased`}>
//         {/* Wrap everything in ReduxProvider */}
//         <ReduxProvider>
//           <Navbar />
//           {/* <OrganicIllustrations /> */}
//           {children}
//           <AboutPage />
//           <FaqPage />
//           <ContactPage />
//           <Footer />
//         </ReduxProvider>
//       </body>
//     </html>
//   );
// }

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
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        {/* Wrap everything in ReduxProvider */}
        <ReduxProvider>
          <Navbar />
          {/* 'children' is the magic prop that renders 
            the current page (e.g., page.tsx, about/page.tsx, etc.)
          */}
          <main>{children}</main>

          <AboutPage />
          <FaqPage />
          <ContactPage />

          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
