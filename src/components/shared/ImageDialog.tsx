"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "motion/react";

interface ImageDialogProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

export function ImageDialog({ src, alt, className, containerClassName }: ImageDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`cursor-pointer ${containerClassName || ""}`}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={src}
          alt={alt}
          className={className || "w-full h-auto"}
        />
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-7xl max-h-[98vh] sm:max-h-[95vh] w-auto h-auto p-0 border-none bg-transparent shadow-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto max-h-[98vh] sm:max-h-[95vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
