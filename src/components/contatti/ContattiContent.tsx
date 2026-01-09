import { ContentSection } from "../shared/ContentSection";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export function ContattiContent() {
  return (
    <>
      <ContentSection
        id="informazioni"
        title="Contattaci"
        content={
          <>
            <p>
              Siamo a tua disposizione per rispondere a qualsiasi domanda o
              richiesta di informazioni. Contattaci per discutere del tuo
              progetto o per ricevere un preventivo personalizzato.
            </p>
          </>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
              <FaPhone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-1">Telefono</h3>
              <p className="text-gray-600 font-geist-sans">+39 02 1234567</p>
              <p className="text-gray-600 font-geist-sans">+39 02 7654321</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
              <FaEnvelope className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-1">Email</h3>
              <p className="text-gray-600 font-geist-sans">info@imprefond.it</p>
              <p className="text-gray-600 font-geist-sans">
                commerciale@imprefond.it
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
              <FaMapMarkerAlt className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-1">Sede Legale</h3>
              <p className="text-gray-600 font-geist-sans">
                Via delle Fondazioni, 123
                <br />
                20100 Milano (MI)
                <br />
                Italia
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
              <FaClock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-black mb-1">
                Orari di Apertura
              </h3>
              <p className="text-gray-600 font-geist-sans">
                Lunedì - Venerdì: 8:00 - 18:00
                <br />
                Sabato: 9:00 - 13:00
                <br />
                Domenica: Chiuso
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-2xl font-bold text-black mb-6">
            Richiedi Informazioni
          </h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome e Cognome
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Mario Rossi"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="mario.rossi@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Telefono
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="+39 123 456 7890"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Messaggio
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-transparent"
                placeholder="Descrivi brevemente la tua richiesta..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-950 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors"
            >
              Invia Richiesta
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
