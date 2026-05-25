import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, Brain } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/como-funciona", label: "Cómo funciona" },
    { href: "/casos-de-exito", label: "Casos de éxito" },
    { href: "/precios", label: "Precios" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1e3a8a] rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-[#f97316]" />
            </div>
            <span className="text-xl font-semibold text-[#1e3a8a]">IA para PYMEs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-700 hover:text-[#f97316] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <Link
            to="/contacto"
            className="hidden lg:block px-6 py-2.5 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors"
          >
            Agenda tu diagnóstico gratis
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#f97316]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-gray-700 hover:text-[#f97316] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacto"
                className="mt-2 px-6 py-2.5 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Agenda tu diagnóstico gratis
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
