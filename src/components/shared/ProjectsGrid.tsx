/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FotoCarosello } from "../FotoCarosello";
import { Project } from "@/utils/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  aspectRatio?: "3/4" | "4/3";
  className?: string;
  animated?: boolean;
  isInView?: boolean;
}

export function ProjectCard({
  project,
  index,
  onClick,
  aspectRatio = "3/4",
  className = "",
  animated = false,
  isInView = true,
}: ProjectCardProps) {
  const aspectClass = aspectRatio === "3/4" ? "aspect-[3/4]" : "aspect-[4/3]";

  const cardContent = (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow ${className}`}
      onClick={onClick}
    >
      <div className={`relative ${aspectClass}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Label sempre visibile */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold text-black">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
}

interface ProjectsGridProps {
  projects: Project[];
  aspectRatio?: "3/4" | "4/3";
  cardClassName?: string;
  animated?: boolean;
  isInView?: boolean;
}

export function ProjectsGrid({
  projects,
  aspectRatio = "3/4",
  cardClassName = "",
  animated = false,
  isInView = true,
}: ProjectsGridProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            onClick={() => setSelectedProject(project)}
            aspectRatio={aspectRatio}
            className={cardClassName}
            animated={animated}
            isInView={isInView}
          />
        ))}
      </div>

      {/* Dialog con carosello foto */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-7xl w-full p-2 sm:p-4 md:p-8 border-none bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative w-full flex flex-col items-center justify-center">
            {selectedProject && (
              <FotoCarosello images={selectedProject.images} />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
