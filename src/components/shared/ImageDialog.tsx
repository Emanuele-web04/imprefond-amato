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

export function ImageDialog({
  src,
  alt,
  className,
  containerClassName,
}: ImageDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`cursor-pointer ${containerClassName || ""}`}
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <img src={src} alt={alt} className={className || "w-full h-auto"} />
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[98vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-[85vw] xl:max-w-7xl w-full p-2 sm:p-4 md:p-8 border-none bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl">
          <div className="relative w-full flex items-center justify-center">
            <div className="w-full h-[85vh] sm:h-[80vh] md:h-85% flex items-center justify-center">
              <img
                src={src}
                alt={alt}
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
