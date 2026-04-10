"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Engineering", href: "/engineering" },
  { label: "IT", href: "/technology" },
  { label: "Clients", href: "/clients" },
  { label: "Candidates", href: "/candidates" },
  { label: "Insights", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-sm border-b border-gray-100/80"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto h-[68px] px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Link href="/" className="shrink-0">
            <img src="/quasent_logo.png" alt="Quasent" className="h-9" />
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="hidden lg:flex items-center gap-0.5"
        >
          {navLinks.map((item, i) => {
            const active = isActive(item.href);
            return (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-[13.5px] font-medium rounded-lg transition-colors duration-200 group flex items-center gap-1.5 ${
                    active
                      ? "text-purple-700"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.label}

                  {/* Active dot */}
                  {active && (
                    <motion.span
                      layoutId="active-dot"
                      className="w-1 h-1 rounded-full bg-purple-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Hover / active underline */}
                  {active ? (
                    <motion.span
                      layoutId="active-underline"
                      className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-gradient-to-r from-pink-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* DESKTOP CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden lg:flex items-center"
        >
          <Link
            href="/contact"
            className="px-5 py-2 text-[13px] font-medium text-white rounded-lg btn-brand shadow-sm"
          >
            Get Started
          </Link>
        </motion.div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-gray-500 hover:text-gray-900 transition"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars className="text-[18px]" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[9999] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/15 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-white/95 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 h-[68px] border-b border-gray-100">
                <img src="/quasent_logo.png" alt="Quasent" className="h-8" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-700 transition"
                  aria-label="Close menu"
                >
                  <FaTimes className="text-[16px]" />
                </button>
              </div>

              <nav className="px-4 py-8 space-y-0.5">
                {navLinks.map((item, i) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 text-[14px] font-medium rounded-xl transition-all duration-200 ${
                          active
                            ? "text-purple-700 bg-purple-50"
                            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                        {active && (
                          <motion.span
                            layoutId="mobile-active-dot"
                            className="w-1.5 h-1.5 rounded-full bg-purple-500"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navLinks.length * 0.05 }}
                  className="pt-6 mt-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-white rounded-xl btn-brand"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
