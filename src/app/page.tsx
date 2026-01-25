// import Image from "next/image";

import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { LaFilosofia } from "@/components/LaFilosofia";
import { INumeri } from "@/components/INumeri";
import { ProgettiEvidenza } from "@/components/ProgettiEvidenza";
import { SicurezzaInnovazione } from "@/components/SicurezzaInnovazione";
import { NewsBlog } from "@/components/NewsBlog";

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4">
//       <div className="flex flex-col items-center gap-8 max-w-2xl w-full">
//         {/* Logo responsive */}
//         <div className="w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl">
//           <img
//             src="/og-imprefond.png"
//             alt="Imprefond Logo"
//             className="w-full h-auto object-contain rounded-2xl"
//           />
//         </div>

//         {/* Testo e animazione caricamento */}
//         <div className="flex flex-col items-center gap-6">
//           <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
//             In lavorazione
//           </h1>

//           {/* Loading dots animation */}
//           <div className="flex gap-2">
//             <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
//             <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
//             <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></span>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <INumeri />
      <LaFilosofia />
      <SicurezzaInnovazione />
      <NewsBlog />
      <ProgettiEvidenza />
    </main>
  );
}
