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
    <div className="relative w-full">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="flex items-center justify-center p-1 sm:p-2 md:p-4">
                <div className="relative w-full h-[50vh] flex items-center justify-center">
                  <img
                    src={image}
                    alt={`Foto ${index + 1}`}
                    className="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-4 my-4">
          <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0" />
          <CarouselNext className="relative right-0 translate-x-0 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
