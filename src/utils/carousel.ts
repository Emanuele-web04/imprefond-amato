// Lista di tutte le immagini disponibili
export const CAROUSEL_IMAGES = [
  "_DSC4941-min.jpg",
  "_DSC4942-min.jpg",
  "_DSC4956-min.jpg",
  "_DSC4977-min.jpg",
  "_DSC4978-min.jpg",
  "_DSC4979-min.jpg",
  "_DSC4980-min.jpg",
  "_DSC4981-min.jpg",
  "_DSC4982-min.jpg",
  "_DSC4983-min.jpg",
  "_DSC4984-min.jpg",
  "_DSC4985-min.jpg",
  "_DSC4986-min.jpg",
  "_DSC4988-min.jpg",
  "_DSC4990-min.jpg",
  "_DSC4991-min.jpg",
  "_DSC4993-min.jpg",
  "_DSC4994-min.jpg",
  "_DSC4995-min.jpg",
  "_DSC4998-min.jpg",
  "_DSC5011-min.jpg",
] as const;

// Configurazione del carosello
export const CAROUSEL_CONFIG = {
  imageCount: 5,
  scrollDuration: 2, // secondi per scrollare
  pauseDuration: 3, // secondi di pausa
  imagePath: "/compressjpeg0-imprefond",
} as const;

export interface CarouselAnimation {
  keyframes: string[];
  times: number[];
  totalDuration: number;
  infiniteImages: string[];
  imageWidthPercent: number;
}

/**
 * Seleziona N immagini casuali dalla lista
 */
export function getRandomImages(
  images: readonly string[],
  count: number
): string[] {
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

/**
 * Crea le immagini duplicate per l'effetto infinito
 */
export function createInfiniteImages(images: string[]): string[] {
  return [...images, ...images];
}

/**
 * Calcola i keyframes e i tempi per l'animazione scroll + pause
 */
export function calculateCarouselAnimation(
  selectedImages: string[],
  infiniteImages: string[]
): CarouselAnimation {
  const imageWidthPercent = 100 / infiniteImages.length;
  const { scrollDuration, pauseDuration } = CAROUSEL_CONFIG;
  const totalDuration =
    selectedImages.length * (scrollDuration + pauseDuration);

  const keyframes: string[] = ["0%"];
  const times: number[] = [0];

  for (let i = 0; i < selectedImages.length; i++) {
    const currentPos = -(i + 1) * imageWidthPercent;
    const timeAtEndOfScroll =
      ((i + 1) * scrollDuration + i * pauseDuration) / totalDuration;
    const timeAtEndOfPause =
      ((i + 1) * (scrollDuration + pauseDuration)) / totalDuration;

    // Fine dello scroll
    keyframes.push(`${currentPos}%`);
    times.push(timeAtEndOfScroll);

    // Fine della pausa (stessa posizione)
    if (i < selectedImages.length - 1) {
      keyframes.push(`${currentPos}%`);
      times.push(timeAtEndOfPause);
    }
  }

  return {
    keyframes,
    times,
    totalDuration,
    infiniteImages,
    imageWidthPercent,
  };
}

/**
 * Genera la configurazione completa del carosello
 */
export function generateCarouselConfig(): CarouselAnimation {
  const selectedImages = getRandomImages(
    CAROUSEL_IMAGES,
    CAROUSEL_CONFIG.imageCount
  );
  const infiniteImages = createInfiniteImages(selectedImages);
  return calculateCarouselAnimation(selectedImages, infiniteImages);
}
