"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/auth/authSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { AnimatePresence, motion } from "framer-motion";
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
  Leaf,
} from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

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

    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedDarkMode === "false") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 opacity-0">
      </header>
    );
  }


  return (
    <>
      {/* NAVBAR CONTAINER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-200 ${
          isScrolled ? "pt-2" : "pt-4"
        }`}
      >
        <nav
          className={`
            relative flex items-center justify-between 
            transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]
            ${
              isScrolled
                ? "w-[95%] md:w-[85%] rounded-full py-2 px-5 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl shadow-sm border border-white/20 dark:border-white/5 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0a0a0a]/60"
                : "w-full md:w-[92%] py-4 px-6 bg-transparent"
            }
          `}
        >
          {/* --- LOGO --- */}
          <Link
            href="/"
            className="flex items-center gap-3 z-10"
            onClick={closeMobileMenu}
          >
            <div className="relative h-10 w-auto overflow-visible">
               <img src="/image.png" alt="World of Nature Logo" className="h-full w-auto object-contain" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* --- ICONS ACTIONS --- */}
          <div className="flex items-center gap-1 z-10">
            <IconButton icon={<Search size={18} />} label="Search" />

            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="hidden sm:flex items-center gap-1">
              <IconButton
                icon={<Heart size={18} />}
                href="/wishlist"
                label="Wishlist"
              />
              {isAuthenticated ? (
                <div className="flex items-center gap-2 ml-1">
                  <Link href="/profile" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#BC5633] transition-colors">
                    {user?.firstName}
                  </Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
                    aria-label="Logout"
                  >
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <IconButton
                  icon={<User size={18} />}
                  href="/login"
                  label="Profile"
                />
              )}
            </div>

            {/* Cart with Badge */}
            <Link
              href="/cart"
              className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
            >
              <ShoppingCart
                size={18}
                className="text-gray-800 dark:text-white"
              />
              {cartItemsCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#BC5633] text-white text-[9px] font-bold flex items-center justify-center rounded-full ring-1 ring-white dark:ring-black">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white ml-1 transition-colors duration-200"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU - CLEAN OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-[#121212] flex flex-col"
          >
            {/* Header inside Overlay */}
            <div className="px-4 py-4 flex items-center justify-between border-b border-gray-100 dark:border-white/5">
              <div className="h-10 w-auto overflow-visible">
                 <img src="/image.png" alt="World of Nature Logo" className="h-full w-auto object-contain" />
              </div>
              <button
                onClick={closeMobileMenu}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col p-6 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <item.icon size={20} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.label}
                  </span>
                </Link>
              ))}

              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-white/5 grid grid-cols-2 gap-4">
                 <Link
                  href="/wishlist"
                  onClick={closeMobileMenu}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <Heart size={20} className="text-rose-500 mb-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Wishlist</span>
                </Link>
                {isAuthenticated ? (
                   <button
                    onClick={() => {
                      dispatch(logout());
                      closeMobileMenu();
                    }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <LogOut size={20} className="text-red-500 mb-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Logout</span>
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={closeMobileMenu}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                  >
                    <User size={20} className="text-blue-500 mb-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Login</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
  label: string;
}

const IconButton = ({ icon, onClick, href, label }: IconButtonProps) => {
  const content = (
    <div className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200 cursor-pointer">
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
