"use client";

import { motion } from "motion/react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFileInvoice, FaEnvelopeOpenText } from "react-icons/fa";

export function Footer() {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Via+Nazionale+221%2FV,+54011+Aulla+MS,+Italy";
  const fullAddress = "VIA NAZIONALE 221/V PRESSO CONDOMINIO LA PIRAMIDE, 54011 AULLA (MS)";

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Nome Azienda */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">IMPREFOND</h2>
          <p className="text-gray-300 font-geist-sans mt-2">F.LLI AMATO SRL</p>
        </motion.div>

        {/* Informazioni in riga */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12"
        >
          {/* Sede */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white text-left">Sede</h3>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-gray-300 font-geist-sans text-sm md:text-base hover:text-blue-200 transition-colors"
            >
              <FaMapMarkerAlt className="w-4 h-4 text-blue-200 flex-shrink-0" />
              <span>VIA NAZIONALE 221/V PRESSO CONDOMINIO LA PIRAMIDE, 54011 AULLA (MS)</span>
            </a>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white text-left">Contatti</h3>
            <div className="flex flex-col gap-2 text-gray-300 font-geist-sans text-sm md:text-base">
              <a href="tel:+393510566935" className="hover:text-blue-200 transition-colors flex items-center gap-2">
                <FaPhone className="w-4 h-4 text-blue-200 flex-shrink-0" />
                +39 351 056 6935
              </a>
              <a href="mailto:imprefondamato@gmail.com" className="hover:text-blue-200 transition-colors flex items-center gap-2">
                <FaEnvelope className="w-4 h-4 text-blue-200 flex-shrink-0" />
                imprefondamato@gmail.com
              </a>
            </div>
          </div>

          {/* Dati Fiscali */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white text-left">Dati Fiscali</h3>
            <div className="flex items-center gap-2 text-gray-300 font-geist-sans text-sm md:text-base">
              <FaFileInvoice className="w-4 h-4 text-blue-200 flex-shrink-0" />
              <span>P.IVA E C.F. 09562981218</span>
            </div>
          </div>

          {/* PEC */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white text-left">PEC</h3>
            <a href="mailto:imprefond@pec.it" className="hover:text-blue-200 transition-colors flex items-center gap-2 text-gray-300 font-geist-sans text-sm md:text-base">
              <FaEnvelopeOpenText className="w-4 h-4 text-blue-200 flex-shrink-0" />
              imprefond@pec.it
            </a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-12 pt-8 border-t border-blue-200/10 text-center text-gray-300 text-sm font-geist-sans space-y-2"
        >
          <p>&copy; {new Date().getFullYear()} IMPREFOND F.LLI AMATO SRL. Tutti i diritti riservati.</p>
          <p className="text-xs text-gray-400">
            Website made by{" "}
            <a
              href="https://emanueledipietro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              Emanuele Di Pietro
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
