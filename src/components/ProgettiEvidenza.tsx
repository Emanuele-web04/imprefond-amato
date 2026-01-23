"use client";

import { motion } from "motion/react";
import { useRef, useMemo } from "react";
import { useInView } from "motion/react";
import { createProjects } from "@/utils/projects";
import { ProjectsGrid } from "./shared/ProjectsGrid";

export function ProgettiEvidenza() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Crea solo 3 progetti (uno per categoria) con carosello
  const projects = useMemo(() => createProjects(), []);

  return (
    <section
      ref={ref}
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16"
        >
          <h2 className="text-section-title-large mb-3 sm:mb-4 px-4">
            Progetti in Evidenza
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-geist-sans px-4">
            I nostri progetti più iconici che testimoniano la nostra esperienza
            e competenza
          </p>
        </motion.div>

        <ProjectsGrid 
          projects={projects} 
          aspectRatio="3/4"
          animated={true}
          isInView={isInView}
        />
      </div>
    </section>
  );
}
