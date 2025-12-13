import { Manrope, Inter } from "next/font/google"; // Import new font
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import { ToastProvider } from "./context/ToastContext";

// Import Redux Provider
import ReduxProvider from "./redux/provider";
import { Metadata } from "next";

// Setup Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "World of Nature | Organic Essentials",
  description: "Discover the purest organic essentials sourced from pristine valleys. 100% traceable, regenerative, and natural.",
  openGraph: {
    title: "World of Nature | Organic Essentials",
    description: "Discover the purest organic essentials sourced from pristine valleys.",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply font variables to the body */}
      <body
        className={`${inter.variable} ${manrope.variable} antialiased bg-background text-text-primary`}
      >
        {/* Wrap everything in ReduxProvider */}
        <ReduxProvider>
          <ToastProvider>
            <SmoothScroll />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ToastProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
