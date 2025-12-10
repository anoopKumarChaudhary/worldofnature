"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  Home,
  ShoppingBag,
  Package,
  Info,
  HelpCircle,
  LogOut,

} from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Determine text color based on route and scroll state
  // If not home page OR if scrolled, use dark text. Otherwise (Home + Top), use white.
  const isDarkText = !isHomePage || isScrolled;
  
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
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled (for style change)
      setIsScrolled(currentScrollY > 20);

      // Determine visibility (Hide on down, Show on up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN and past 100px -> Hide
        setIsVisible(false);
      } else {
        // Scrolling UP or at top -> Show
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
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
    { href: "/track-order", label: "Track Order", icon: Package },
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
        className={`fixed top-0 left-0 right-0 z-[100] flex justify-center transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          className={`relative flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] w-full py-2 px-6 md:px-10 ${
            isScrolled ? "bg-white/10 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
        >
            {/* --- LOGO --- */}
          <Link
            href="/"
            className="flex items-center gap-3 z-10"
            onClick={closeMobileMenu}
          >
            <div className={`relative h-8 md:h-11 w-auto overflow-visible transition-all duration-300 opacity-90 hover:opacity-100 ${!isDarkText ? "brightness-0 invert" : ""}`}>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="/image.png" alt="World of Nature Logo" className="h-full w-auto object-contain" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 relative group ${!isDarkText ? "text-white hover:text-[#E8D4A2]" : "text-[#1A2118] hover:text-[#B56B56]"}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-1/2 w-0 h-[1px] transition-all duration-300 group-hover:w-full group-hover:left-0 ${!isDarkText ? "bg-[#E8D4A2]" : "bg-[#B56B56]"}`} />
              </Link>
            ))}
          </div>

          {/* --- ICONS ACTIONS --- */}
          <div className="flex items-center gap-1 z-10">
            <IconButton 
              icon={<Search size={18} />} 
              label="Search" 
              className={!isDarkText ? "text-white/80 hover:bg-white/10" : "text-[#1A2118]/80 hover:bg-[#1A2118]/5"}
            />

            <button
              onClick={toggleDarkMode}
              className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200 ${!isDarkText ? "text-white/80 hover:bg-white/10" : "text-[#1A2118]/80 hover:bg-[#1A2118]/5"}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <div className="hidden sm:flex items-center gap-1">
              <IconButton
                icon={<Heart size={18} />}
                href="/wishlist"
                label="Wishlist"
                className={!isDarkText ? "text-white/80 hover:bg-white/10" : "text-[#1A2118]/80 hover:bg-[#1A2118]/5"}
              />
              {isAuthenticated ? (
                <div className="flex items-center gap-2 ml-1">
                  <Link href="/profile" className={`text-sm font-medium transition-colors ${!isDarkText ? "text-white hover:text-[#E8D4A2]" : "text-[#1A2118] hover:text-[#B56B56]"}`}>
                    {user?.firstName}
                  </Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200 ${!isDarkText ? "text-white/80 hover:bg-white/10" : "text-[#1A2118]/80 hover:bg-[#1A2118]/5"}`}
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
                  className={!isDarkText ? "text-white/80 hover:bg-white/10" : "text-[#1A2118]/80 hover:bg-[#1A2118]/5"}
                />
              )}
            </div>

            {/* Cart with Badge */}
            <Link
              href="/cart"
              className={`relative w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200 ${!isDarkText ? "hover:bg-white/10" : "hover:bg-[#1A2118]/5"}`}
            >
              <ShoppingCart
                size={18}
                className={!isDarkText ? "text-white" : "text-[#1A2118]"}
              />
              {cartItemsCount > 0 && (
                <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-[#B56B56] text-[#F2F0EA] text-[9px] font-bold flex items-center justify-center rounded-full ring-1 ring-[#F2F0EA]">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden w-9 h-9 flex items-center justify-center rounded-full ml-1 transition-colors duration-200 ${!isDarkText ? "text-white hover:bg-white/10" : "text-[#1A2118] hover:bg-[#1A2118]/5"}`}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU - CLEAN & SOLID */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#1A2118] flex flex-col overflow-hidden">
          {/* Header inside Overlay */}
          <div className="relative z-10 px-6 py-6 flex items-center justify-between border-b border-white/5">
            <div className="h-10 w-auto overflow-visible opacity-90 invert brightness-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/image.png" alt="World of Nature Logo" className="h-full w-auto object-contain" />
            </div>
            <button
              onClick={closeMobileMenu}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-[#F2F0EA] hover:bg-white/20 transition-all"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-8 relative z-10">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="group flex items-center justify-between text-[#F2F0EA] hover:text-[#B56B56] transition-colors"
                  >
                    <span className="font-heading text-3xl md:text-4xl font-light tracking-wide group-hover:translate-x-2 transition-transform duration-500">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#B56B56]">
                      Explore
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Actions */}
          <div className="relative z-10 p-8 border-t border-white/5 grid grid-cols-2 gap-4 bg-[#1A2118]">
              <Link
              href="/wishlist"
              onClick={closeMobileMenu}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group"
            >
              <Heart size={24} className="text-[#F2F0EA] group-hover:text-[#B56B56] mb-3 transition-colors" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-widest text-[#F2F0EA]/60 group-hover:text-[#F2F0EA] transition-colors">Wishlist</span>
            </Link>
            
            {isAuthenticated ? (
                <button
                onClick={() => {
                  dispatch(logout());
                  closeMobileMenu();
                }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-[#B56B56] transition-all group"
              >
                <LogOut size={24} className="text-[#F2F0EA] mb-3" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-widest text-[#F2F0EA]/60 group-hover:text-[#F2F0EA] transition-colors">Logout</span>
              </button>
            ) : (
              <Link
                href="/login"
                onClick={closeMobileMenu}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group"
              >
                <User size={24} className="text-[#F2F0EA] group-hover:text-[#B56B56] mb-3 transition-colors" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-widest text-[#F2F0EA]/60 group-hover:text-[#F2F0EA] transition-colors">Login</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
};

interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  href?: string;
  label: string;
  className?: string;
}

const IconButton = ({ icon, onClick, href, label, className }: IconButtonProps) => {
  const content = (
    <div className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer ${className || "text-[#1A2118]/70 hover:bg-[#1A2118]/5"}`}>
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
