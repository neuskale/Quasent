"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Engineering", href: "/engineering" },
  { label: "IT", href: "/technology" },
  { label: "Clients", href: "/clients" },
  { label: "Candidates", href: "/candidates" },
  { label: "Insights", href: "#insights" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(156,39,176,0.06)] border-b border-purple-50"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-[72px] px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <img src="/quasent_logo.png" alt="Quasent" className="h-10" />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="px-4 py-2 text-[14px] font-medium text-gray-600 hover:text-purple-700 rounded-lg hover:bg-purple-50/50 transition-all duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg btn-brand shadow-sm"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-purple-700 transition"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars className="text-xl" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-gray-100">
              <img src="/quasent_logo.png" alt="Quasent" className="h-9" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-purple-700"
                aria-label="Close menu"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            <nav className="px-6 py-6 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-[15px] font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50/50 rounded-lg transition-all"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-6 border-t border-gray-100 mt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white rounded-lg btn-brand"
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
