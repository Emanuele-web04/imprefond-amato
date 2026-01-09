"use client";

import Link from "next/link";
import { TbChevronRight } from "react-icons/tb";
import { motion } from "motion/react";

interface BreadcrumbsProps {
  items?: { label: string; href?: string }[];
}

export function Breadcrumbs({ items = [] }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <motion.div
      className="max-w-7xl mt-12 mx-auto px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="text-sm flex items-center gap-2 text-gray-600">
        {allItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
          >
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-black">{item.label}</span>
            )}
            {index < allItems.length - 1 && (
              <TbChevronRight className="text-blue-800" />
            )}
          </motion.div>
        ))}
      </nav>
    </motion.div>
  );
}
