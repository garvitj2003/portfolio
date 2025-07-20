"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#portfolio" },
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/garvitj2003",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/garvitj2003",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/garvitj2003",
      label: "X (Twitter)",
    },
  ];

  const bottomLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookies Settings", href: "#cookies" },
  ];

  return (
    <footer className="bg-[#0d0d0d] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Avatar>
                <AvatarImage src="/pfp.jpeg" />
                <AvatarFallback>GJ</AvatarFallback>
              </Avatar>
              <span className="text-white font-jetbrains-mono font-semibold text-lg">
                Garvit Jain
              </span>
            </div>
            <p className="text-[#888888] text-sm leading-relaxed max-w-sm">
              Full-stack developer passionate about building clean, efficient,
              and scalable web applications. Your go-to engineer for Next.js
              projects.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 font-jetbrains-mono">
              Navigation
            </h3>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[#888888] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold text-lg mb-6 font-jetbrains-mono">
              Connect
            </h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#2a2a2a] transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-[#888888] hover:text-white transition-colors duration-200" />
                  </motion.a>
                );
              })}
            </div>
            <p className="text-[#888888] text-sm">
              Let&apos;s connect and build something amazing together!
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1a1a1a] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="flex items-center space-x-2 text-[#888888] text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span>© 2024 Garvit Jain. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and lots of ☕</span>
            </motion.div>

            {/* Bottom Links */}
            <motion.div
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {bottomLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#888888] hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#top"
            className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-[#888888] hover:text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <span className="text-sm font-medium">Back to top</span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
