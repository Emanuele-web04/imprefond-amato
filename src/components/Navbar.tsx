"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Storia", href: "/storia" },
    { name: "Expertise", href: "/expertise" },
    { name: "Progetti", href: "/progetti" },
    { name: "News", href: "/news" },
    { name: "Unisciti al Team", href: "/team" },
    { name: "Contatti", href: "/contatti" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 right-0 z-50"
    >
      <div className="px-6 md:px-12 py-6">
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Link
                href={item.href}
                className="text-sm md:text-base font-medium text-white hover:text-blue-200 transition-colors duration-200 drop-shadow-lg"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
          {/* Search Icon */}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="ml-2"
          >
            <button className="text-white hover:text-blue-200 transition-colors duration-200 drop-shadow-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}
