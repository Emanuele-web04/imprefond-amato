export interface Project {
  image: string;
  images: string[]; // Array di immagini per il carosello
  category: string;
  title: string;
  description: string;
}

// Immagini per ogni categoria dalla cartella "foto tagliate"
export const trivellazioniImages = [
  "/foto tagliate/Milano cortina 2026/_DSC4949.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4952.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4953.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4956.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4959.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4961.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4966.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4974.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4976.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4980.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4982.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4985.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4988.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4989.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4990.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC4991.jpg",
  "/foto tagliate/Milano cortina 2026/_DSC5001.jpg",
];

export const cantieriImages = [
  "/foto tagliate/Cantieri vari/13.jpg",
  "/foto tagliate/Cantieri vari/2.jpg",
  "/foto tagliate/Cantieri vari/9.jpg",
];

export const ediliziaImages = [
  "/foto tagliate/Edilizia/20250916_101138.jpg",
  "/foto tagliate/Edilizia/20250916_101250.jpg",
  "/foto tagliate/Edilizia/20250916_101316.jpg",
  "/foto tagliate/Edilizia/20250916_101432.jpg",
];

// Crea solo 3 progetti (uno per categoria) con carosello
export const createProjects = (): Project[] => {
  return [
    {
      image: trivellazioniImages[0],
      images: trivellazioniImages,
      category: "Cortina 2026",
      title: "Cortina 2026",
      description: "",
    },
    {
      image: cantieriImages[0],
      images: cantieriImages,
      category: "Cantieri vari",
      title: "Cantieri vari",
      description: "",
    },
    {
      image: ediliziaImages[0],
      images: ediliziaImages,
      category: "Edilizia",
      title: "Edilizia",
      description: "",
    },
  ];
};
