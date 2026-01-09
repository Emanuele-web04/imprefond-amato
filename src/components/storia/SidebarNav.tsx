"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

interface SidebarNavProps {
  navItems: NavItem[];
  defaultActiveId?: string;
}

export function SidebarNav({ navItems, defaultActiveId }: SidebarNavProps) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        window.location.hash.slice(1) ||
        defaultActiveId ||
        navItems[0]?.id ||
        ""
      );
    }
    return defaultActiveId || navItems[0]?.id || "";
  });

  // Scroll to section when hash changes
  useEffect(() => {
    const scrollToSection = (hash: string) => {
      if (!hash) return;

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 100; // Offset for fixed header if needed
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    };

    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1);
      setActiveId(newHash || defaultActiveId || navItems[0]?.id || "");
      scrollToSection(newHash);
    };

    // Handle initial hash on page load
    if (typeof window !== "undefined") {
      const initialHash = window.location.hash.slice(1);
      if (initialHash) {
        scrollToSection(initialHash);
      }
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [pathname, defaultActiveId, navItems]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without triggering scroll
      window.history.pushState(null, "", `#${id}`);
      setActiveId(id);
    }
  };

  return (
    <aside className="lg:col-span-1">
      <nav className="lg:sticky lg:top-24 space-y-3 sm:space-y-4 mb-8 lg:mb-0 overflow-x-auto lg:overflow-visible">
        <div className="flex lg:flex-col gap-3 sm:gap-4 lg:space-y-0 pb-4 lg:pb-0">
          {navItems.map((item, index) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="flex-shrink-0 lg:flex-shrink"
              >
                <a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`block py-1 sm:py-2 lg:py-0 px-3 lg:px-0 transition-colors lg:pl-4 cursor-pointer whitespace-nowrap lg:whitespace-normal rounded-md lg:rounded-none text-sm sm:text-base ${
                    isActive
                      ? "text-gray-700 font-medium lg:border-l-2 border-blue-950 bg-blue-50 lg:bg-transparent"
                      : "text-gray-600 hover:text-blue-950 hover:bg-gray-50 lg:hover:bg-transparent"
                  }`}
                >
                  {item.label}
                </a>
              </motion.div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
