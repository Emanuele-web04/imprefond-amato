"use client";

import { motion } from "motion/react";
import Link from "next/link";

export function Header() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Storia", href: "/storia" },
    { name: "Progetti", href: "/progetti" },
    { name: "News", href: "/news" },
    { name: "Contatti", href: "/contatti" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6"
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link href="#home" className="bg-blue-950 absolute px-4 py-1.5 shadow-2xl">
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tighter text-white">
              Imprefond
            </h1>
          </Link>
        </motion.div>

        {/* Navbar - Right */}
        <motion.nav
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <ul className="flex items-center gap-3 md:gap-4 lg:gap-6">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="text-xs md:text-sm lg:text-base font-medium text-white hover:text-blue-200 transition-colors duration-200 drop-shadow-lg whitespace-nowrap"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
            
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
}
