/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FotoCaroselloProps {
  images: string[];
}

export function FotoCarosello({ images }: FotoCaroselloProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[60vh] sm:h-[500px] flex items-center justify-center rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Foto ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Pulsanti sempre centrati verticalmente */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <CarouselNext className="relative right-0 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
