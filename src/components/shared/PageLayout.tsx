"use client";

import { Header } from "@/components/Header";
import { PageHero } from "./PageHero";
import { Breadcrumbs } from "../storia/Breadcrumbs";
import { SidebarNav, NavItem } from "../storia/SidebarNav";
import { Risultati } from "../storia/Risultati";
import { motion } from "motion/react";

interface PageLayoutProps {
  title: string;
  heroImage: string;
  breadcrumbItems?: { label: string; href?: string }[];
  navItems: NavItem[];
  defaultActiveId?: string;
  children: React.ReactNode;
  showRisultati?: boolean;
}

export function PageLayout({
  title,
  heroImage,
  breadcrumbItems = [],
  navItems,
  defaultActiveId,
  children,
  showRisultati = true,
}: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageHero title={title} image={heroImage} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* Main Content Section */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <SidebarNav navItems={navItems} defaultActiveId={defaultActiveId} />
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {showRisultati && <Risultati />}
    </main>
  );
}
