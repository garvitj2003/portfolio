"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skils" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src="/pfp.jpeg" />
              <AvatarFallback>GJ</AvatarFallback>
            </Avatar>
            <span className="text-white font-figtree font-semibold text-xl">
              Garvit Jain
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}

            {/* Contact Me Button */}
            <motion.a
              href="#contact"
              className="bg-[#1f1f1f] text-white px-6 py-2 text-sm rounded-lg hover:bg-[#2a2a2a] transition-all duration-200"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact me
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
