"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isLg = useMediaQuery("(min-width: 1080px)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skils" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.div
      initial={false}
      animate={{
        width: isLg ? (scrolled ? "50%" : "80%") : scrolled ? "80%" : "100%",
      }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      className={`fixed ${
        scrolled ? "top-2" : "top-0"
      } left-1/2 transform -translate-x-1/2 z-50 ${
        scrolled
          ? "bg-[#121212] shadow-md rounded-xl px-6"
          : "px-4 sm:px-6 lg:px-8"
      }`}
      layout
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarImage src="/pfp.jpeg" />
              <AvatarFallback>GJ</AvatarFallback>
            </Avatar>

            {/* Name - always visible, no animation */}
            <span className="text-white font-figtree font-semibold text-xl tracking-tight">
              Garvit Jain
            </span>
          </div>

          {/* Navigation Items - simple transition when scrolled */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={false}
            animate={{
              opacity: scrolled ? 0 : 1,
              scale: scrolled ? 0.9 : 1,
              pointerEvents: scrolled ? "none" : "auto",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* Contact Me Button - always visible */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <motion.a
              href="#contact"
              className={`bg-[#1f1f1f] text-white text-sm rounded-lg hover:bg-[#2a2a2a] transition-all duration-200 font-semibold whitespace-nowrap ${
                scrolled ? "px-4 py-1.5" : "px-6 py-2"
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact me
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
