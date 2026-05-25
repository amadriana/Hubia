import { Link } from "react-router";
import { Brain, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-[#f97316]" />
              </div>
              <span className="text-lg font-semibold">IA para PYMEs</span>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Implementamos inteligencia artificial en tu empresa en menos de 48 horas, sin que necesites saber de tecnología.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-blue-200 hover:text-[#f97316] transition-colors text-sm">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="text-blue-200 hover:text-[#f97316] transition-colors text-sm">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link to="/casos-de-exito" className="text-blue-200 hover:text-[#f97316] transition-colors text-sm">
                  Casos de éxito
                </Link>
              </li>
              <li>
                <Link to="/precios" className="text-blue-200 hover:text-[#f97316] transition-colors text-sm">
                  Precios
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-blue-200">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contacto@iapymes.co</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-blue-200">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-blue-200">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Cúcuta, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-[#f97316] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-[#f97316] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-[#f97316] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200">
            © 2026 IA para PYMEs. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-sm text-blue-200 hover:text-[#f97316] transition-colors">
              Política de Privacidad
            </Link>
            <Link to="#" className="text-sm text-blue-200 hover:text-[#f97316] transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
