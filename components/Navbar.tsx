"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0F]/90 backdrop-blur-md border-b border-[#1E1E2E]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-mono text-[#4F8EF7] hover:text-white transition-colors duration-200"
        >
          adriangvc<span className="text-[#8888A0]">.com</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv-adrian-gomez-valades.pdf"
            download
            className="text-sm px-4 py-1.5 rounded-md border border-[#1E1E2E] text-[#8888A0] hover:border-[#4F8EF740] hover:text-[#F0F0F5] transition-all duration-200"
          >
            {"CV ↓"}
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-1.5 rounded-md border border-[#4F8EF7] text-[#4F8EF7] hover:bg-[#4F8EF7] hover:text-white transition-all duration-200"
          >
            LinkedIn
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-[#F0F0F5] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#F0F0F5] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-[#F0F0F5] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0A0A0F]/95 backdrop-blur-md border-b border-[#1E1E2E]"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors duration-200 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv-adrian-gomez-valades.pdf"
                download
                className="text-sm px-4 py-2 rounded-md border border-[#1E1E2E] text-[#8888A0] text-center hover:border-[#4F8EF740] hover:text-[#F0F0F5] transition-all duration-200"
              >
                {"Download CV"}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 rounded-md border border-[#4F8EF7] text-[#4F8EF7] text-center hover:bg-[#4F8EF7] hover:text-white transition-all duration-200"
              >
                LinkedIn
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
