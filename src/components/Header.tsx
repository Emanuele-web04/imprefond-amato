"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Storia", href: "/storia" },
    { name: "Progetti", href: "/progetti" },
    { name: "Noleggio", href: "/noleggio" },
    { name: "News", href: "/news" },
    { name: "Certificazioni", href: "/certificazioni" },
  ];

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6"
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Link href="/" className="bg-blue-950 p-0.5 shadow-2xl block">
              <img
                src="/imprefond-logo.png"
                alt="Imprefond F.lli Amato SRL"
                className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <ul className="flex items-center gap-4 xl:gap-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                >
                  <Link
                    href={item.href}
                    className="text-sm lg:text-base font-medium text-white hover:text-blue-200 transition-colors duration-200 drop-shadow-lg whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 z-50 relative ${
              mobileMenuOpen ? "text-white" : "text-blue-950 md:text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiOutlineX className="w-7 h-7" />
            ) : (
              <HiOutlineMenuAlt3 className="w-7 h-7" />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-blue-950 z-40 lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col items-center gap-8 sm:gap-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-2xl sm:text-3xl font-medium text-white hover:text-blue-200 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
