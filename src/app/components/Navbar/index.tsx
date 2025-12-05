"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { RootState, AppDispatch } from "../../redux/store";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  User,
  Heart,
  Sun,
  Moon,
  ChevronRight,
  Home,
  ShoppingBag,
  Info,
  HelpCircle,
  LogOut,
} from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false); // Essential for hydration fix

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", newMode.toString());
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    // Check local storage on mount
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedDarkMode === "false") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // Optional: Respect system preference if no local storage found
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/shop", label: "Shop", icon: ShoppingBag },
    { href: "/about", label: "About", icon: Info },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
  ];

  // Prevent hydration mismatch for theme icon
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 opacity-0">
        {/* Return invisible header to prevent layout shift during hydration */}
      </header>
    );
  }

  return (
    <>
      {/* One UI Mobile Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px] transition-opacity duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      />

      {/* NAVBAR CONTAINER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled ? "pt-2" : "pt-0 md:pt-6"
        }`}
      >
        <nav
          className={`
            relative flex items-center justify-between 
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isScrolled
                ? "w-[96%] md:w-[90%] rounded-[2rem] py-3 px-6 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-white/20 dark:border-white/5"
                : "w-full md:w-[95%] py-5 px-6 bg-transparent"
            }
          `}
        >
          {/* --- LOGO --- */}
          <Link
            href="/"
            className="flex items-center gap-3 group z-10"
            onClick={closeMobileMenu}
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-[14px] shadow-lg group-hover:scale-105 transition-transform duration-300 bg-white">
              <img
                src="/wonlogo.jpg"
                alt="World of Nature Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`font-bold text-xl tracking-tight transition-colors ${
                isScrolled
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              World of Nature
            </span>
          </Link>

          {/* --- DESKTOP NAVIGATION (Pill Shape) --- */}
          <div className="hidden md:flex items-center bg-gray-100/50 dark:bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/20 dark:border-white/5 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-6 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white/10 hover:text-brand-primary-600 dark:hover:text-brand-primary-400 hover:shadow-sm transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* --- ICONS ACTIONS --- */}
          <div className="flex items-center gap-1 sm:gap-2 z-10">
            <IconButton icon={<Search size={20} />} label="Search" />

            {/* Theme Toggle (Client-only rendering safe) */}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 active:scale-90 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="hidden sm:flex items-center gap-1">
              <IconButton
                icon={<Heart size={20} />}
                href="/wishlist"
                label="Wishlist"
              />
              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <Link href="/profile" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#BC5633] transition-colors">
                    {user?.firstName}
                  </Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 active:scale-90 transition-all duration-300"
                    aria-label="Logout"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <IconButton
                  icon={<User size={20} />}
                  href="/login"
                  label="Profile"
                />
              )}
            </div>

            {/* Cart with Badge */}
            <Link
              href="/cart"
              className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all"
            >
              <ShoppingCart
                size={20}
                className="text-gray-800 dark:text-white"
              />
              <span className="absolute top-1.5 right-1 w-4 h-4 bg-brand-secondary-600 text-white text-[9px] font-bold flex items-center justify-center rounded-full ring-2 ring-white dark:ring-black">
                3
              </span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white ml-1"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU - BOTTOM SHEET */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 z-[70] 
          bg-[#F8F9FA] dark:bg-[#121212] 
          rounded-t-[2.5rem] 
          shadow-[0_-10px_40px_rgba(0,0,0,0.1)]
          transform transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1)
          md:hidden overflow-hidden
          ${isMobileMenuOpen ? "translate-y-0" : "translate-y-full"}
        `}
        style={{ maxHeight: "85vh" }}
      >
        {/* Drag Handle */}
        <div
          className="w-full flex justify-center pt-4 pb-2"
          onClick={closeMobileMenu}
        >
          <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>

        {/* Header inside Sheet */}
        <div className="px-8 py-4 flex items-center justify-between border-b border-gray-100 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 overflow-hidden rounded-[10px] shadow-sm bg-white">
              <img
                src="/wonlogo.jpg"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Menu
            </span>
          </div>
          <button
            onClick={closeMobileMenu}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 pb-10 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className="flex items-center justify-between p-5 rounded-[1.5rem] bg-white dark:bg-[#1E1E1E] active:scale-[0.98] transition-transform duration-200 shadow-sm border border-gray-50 dark:border-white/5"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-primary-50 dark:bg-brand-primary-500/10 flex items-center justify-center text-brand-primary-600 dark:text-brand-primary-400">
                  <item.icon size={20} />
                </div>
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.label}
                </span>
              </div>
              <ChevronRight size={20} className="text-gray-400" />
            </Link>
          ))}

          {/* Mobile Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-3 mt-6 pt-4">
            <Link
              href="/wishlist"
              className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] bg-white dark:bg-[#1E1E1E] border border-gray-50 dark:border-white/5 shadow-sm"
            >
              <Heart size={24} className="text-rose-500 mb-2" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Wishlist
              </span>
            </Link>
            {isAuthenticated ? (
              <Link
                href="#"
                onClick={() => dispatch(logout())}
                className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] bg-white dark:bg-[#1E1E1E] border border-gray-50 dark:border-white/5 shadow-sm"
              >
                <LogOut size={24} className="text-red-500 mb-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Logout
                </span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex flex-col items-center justify-center p-4 rounded-[1.5rem] bg-white dark:bg-[#1E1E1E] border border-gray-50 dark:border-white/5 shadow-sm"
              >
                <User size={24} className="text-blue-500 mb-2" />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Account
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-24" />
    </>
  );
};

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
  label: string;
}

// Reusable Icon Button Component
const IconButton = ({ icon, onClick, href, label }: IconButtonProps) => {
  const content = (
    <div className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/10 active:scale-90 transition-all duration-300 cursor-pointer">
      {icon}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={label}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} aria-label={label}>
      {content}
    </button>
  );
};

export default Navbar;
