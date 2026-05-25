import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    ciudad: "",
    sector: "",
    empleados: "",
    problema: "",
    contacto: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío del formulario
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
  };

  const sectores = [
    "Tienda de ropa / Moda",
    "Restaurante / Comida",
    "Clínica / Salud",
    "Agencia / Servicios profesionales",
    "Distribuidora / Comercio",
    "Otro",
  ];

  const empleadosOptions = [
    "Solo yo",
    "2-5 empleados",
    "6-10 empleados",
    "11-25 empleados",
    "Más de 25 empleados",
  ];

  if (submitted) {
    return (
      <div className="bg-white min-h-[80vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl mb-6 text-[#1e3a8a] !font-bold">
            ¡Gracias por tu interés!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Recibimos tu solicitud de diagnóstico. Un consultor te contactará en menos de 24 horas 
            al contacto que nos proporcionaste.
          </p>
          <p className="text-lg text-gray-500">
            Mientras tanto, si tienes alguna pregunta urgente, escríbenos por WhatsApp.
          </p>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 !font-bold">
            El primer paso es gratis — cuéntanos de tu negocio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Agenda tu diagnóstico sin costo y sin compromiso. Te contactamos en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl mb-6 text-[#1e3a8a]">
                  Información de contacto
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Correo electrónico</p>
                      <a href="mailto:contacto@iapymes.co" className="text-gray-900 hover:text-[#f97316]">
                        contacto@iapymes.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                      <a href="tel:+573001234567" className="text-gray-900 hover:text-[#f97316]">
                        +57 300 123 4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Ubicación</p>
                      <p className="text-gray-900">
                        Cúcuta, Colombia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                      <a 
                        href="https://wa.me/573001234567" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-[#25D366]"
                      >
                        Escríbenos directamente
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#25D366] text-white p-6 rounded-xl">
                <h3 className="text-xl mb-3">¿Prefieres WhatsApp?</h3>
                <p className="mb-4 text-green-50">
                  Si prefieres una conversación más directa, escríbenos por WhatsApp. 
                  Te respondemos en minutos.
                </p>
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#25D366] rounded-lg hover:bg-green-50 transition-colors w-full justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Abrir WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl mb-6 text-[#1e3a8a]">
                  Completa el formulario
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nombre" className="block text-gray-700 mb-2">
                        Tu nombre *
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                        placeholder="Ej: Juan Rodríguez"
                      />
                    </div>

                    <div>
                      <label htmlFor="empresa" className="block text-gray-700 mb-2">
                        Nombre de tu empresa *
                      </label>
                      <input
                        type="text"
                        id="empresa"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                        placeholder="Ej: Tienda La Elegancia"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="ciudad" className="block text-gray-700 mb-2">
                        Ciudad *
                      </label>
                      <input
                        type="text"
                        id="ciudad"
                        name="ciudad"
                        value={formData.ciudad}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                        placeholder="Ej: Cúcuta"
                      />
                    </div>

                    <div>
                      <label htmlFor="sector" className="block text-gray-700 mb-2">
                        Sector de tu negocio *
                      </label>
                      <select
                        id="sector"
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                      >
                        <option value="">Selecciona un sector</option>
                        {sectores.map((sector) => (
                          <option key={sector} value={sector}>
                            {sector}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="empleados" className="block text-gray-700 mb-2">
                      Número de empleados *
                    </label>
                    <select
                      id="empleados"
                      name="empleados"
                      value={formData.empleados}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                    >
                      <option value="">Selecciona una opción</option>
                      {empleadosOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="problema" className="block text-gray-700 mb-2">
                      ¿Cuál es tu principal problema o necesidad? *
                    </label>
                    <textarea
                      id="problema"
                      name="problema"
                      value={formData.problema}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent resize-none"
                      placeholder="Ej: Pierdo ventas de noche porque no puedo responder mensajes..."
                    />
                  </div>

                  <div>
                    <label htmlFor="contacto" className="block text-gray-700 mb-2">
                      WhatsApp o correo de contacto *
                    </label>
                    <input
                      type="text"
                      id="contacto"
                      name="contacto"
                      value={formData.contacto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                      placeholder="Ej: +57 300 123 4567 o correo@ejemplo.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors text-lg"
                  >
                    <Send className="w-5 h-5" />
                    Enviar solicitud
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Al enviar este formulario, aceptas que un consultor se ponga en contacto contigo. 
                    No compartimos tu información con terceros.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl mb-4 text-[#1e3a8a]">
              ¿Qué pasa después de enviar el formulario?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="w-12 h-12 bg-[#f97316] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl !font-bold">
                  1
                </div>
                <p className="text-gray-700">
                  Un consultor revisa tu solicitud en menos de 24 horas
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#f97316] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl !font-bold">
                  2
                </div>
                <p className="text-gray-700">
                  Te contactamos para agendar tu diagnóstico gratuito
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#f97316] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl !font-bold">
                  3
                </div>
                <p className="text-gray-700">
                  Conversamos sobre tu negocio y cómo podemos ayudarte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
