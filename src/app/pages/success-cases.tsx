import { Link } from "react-router";
import { ShoppingBag, UtensilsCrossed, Stethoscope, Megaphone, Truck, ArrowRight, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

export function SuccessCases() {
  const businessTypes = [
    {
      icon: ShoppingBag,
      name: "Tiendas de ropa",
      pain: "Pierden ventas fuera de horario y no dan abasto atendiendo mensajes en Instagram",
      agents: ["Atención al cliente 24/7", "Inventario inteligente", "Contenido para redes"],
      result: "Recuperan 20+ horas mensuales y atienden clientes mientras duermen",
    },
    {
      icon: UtensilsCrossed,
      name: "Restaurantes",
      pain: "No toman reservas cuando están llenos y pierden pedidos a domicilio en horas pico",
      agents: ["Atención al cliente 24/7", "Agente de ventas proactivo"],
      result: "Aumentan ventas a domicilio 35% sin contratar más personal de caja",
    },
    {
      icon: Stethoscope,
      name: "Clínicas y consultorios",
      pain: "La secretaria pasa todo el día agendando citas y confirmando por teléfono",
      agents: ["Atención al cliente 24/7", "Cobranza amigable"],
      result: "Automatizan 70% de agendas y reducen ausentismo en consultas",
    },
    {
      icon: Megaphone,
      name: "Agencias y servicios",
      pain: "Prospectos se enfrían porque no pueden hacer seguimiento a tiempo",
      agents: ["Agente de ventas proactivo", "Co-piloto del dueño"],
      result: "Duplican tasa de cierre con seguimiento automático inteligente",
    },
    {
      icon: Truck,
      name: "Distribuidoras",
      pain: "Inventarios desbalanceados y facturas pendientes sin gestionar",
      agents: ["Inventario inteligente", "Cobranza amigable", "Facturación y compliance"],
      result: "Mejoran flujo de caja 40% y reducen quiebres de stock a casi cero",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 !font-bold">
            Casos de éxito
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Negocios reales que ya están ahorrando tiempo y aumentando ventas con IA
          </p>
        </div>
      </section>

      {/* Business Types Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a] !font-bold">
              ¿Para quién es?
            </h2>
            <p className="text-xl text-gray-600">
              Cada tipo de negocio tiene dolores específicos. Aquí te mostramos cómo ayudamos a cada uno.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessTypes.map((business, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#f97316] transition-all hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-4">
                  <business.icon className="w-7 h-7 text-[#f97316]" />
                </div>

                <h3 className="text-2xl mb-3 text-[#1e3a8a]">{business.name}</h3>

                <div className="mb-4">
                  <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Dolor típico</p>
                  <p className="text-gray-700">{business.pain}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Agentes recomendados</p>
                  <div className="flex flex-wrap gap-2">
                    {business.agents.map((agent, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-blue-100 text-[#1e3a8a] rounded"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm uppercase tracking-wide text-[#f97316] mb-2">Resultado esperado</p>
                  <p className="text-gray-700">{business.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a] !font-bold">
              Caso destacado: Leidy's Fashion
            </h2>
            <p className="text-xl text-gray-600">
              Tienda de ropa en Cúcuta — Cómo recuperó su tiempo y aumentó ventas
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1718985342149-7178154e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHN0b3JlJTIwb3duZXJ8ZW58MXx8fHwxNzc5NzQ5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Leidy - Dueña de tienda de ropa"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl mb-6 text-[#1e3a8a]">La historia de Leidy</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg text-[#f97316] mb-2">Situación inicial</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-700">
                          Pasaba 3-4 horas diarias respondiendo mensajes en Instagram y WhatsApp
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-700">
                          Perdía ventas de noche y fines de semana
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <span className="text-gray-700">
                          No sabía qué productos se vendían más
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg text-[#f97316] mb-2">Solución implementada</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Atención al cliente 24/7 en redes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Inventario inteligente con alertas de stock</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Co-piloto para entender métricas de venta</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg text-[#f97316] mb-2">Resultado en 30 días</h4>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="text-center">
                        <div className="text-3xl !font-bold text-[#f97316]">3h</div>
                        <div className="text-sm text-gray-600">ahorradas al día</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl !font-bold text-[#f97316]">+28%</div>
                        <div className="text-sm text-gray-600">más ventas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl !font-bold text-[#f97316]">0</div>
                        <div className="text-sm text-gray-600">quiebres de stock</div>
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#f97316] pl-4 italic text-gray-700">
                    "Ahora puedo irme tranquila a almorzar sabiendo que mi tienda sigue atendiendo. 
                    Incluso vendo de noche mientras duermo."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 md:py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl !font-bold mb-2">48 horas</div>
              <p className="text-blue-200">Tiempo de implementación promedio</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl !font-bold mb-2">30 horas/mes</div>
              <p className="text-blue-200">Ahorro estimado de tiempo</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl !font-bold mb-2">94%</div>
              <p className="text-blue-200">Satisfacción de clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#1e3a8a] !font-bold">
            ¿Tu negocio puede ser el próximo caso de éxito?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda un diagnóstico gratuito y descubre cómo la IA puede transformar tu operación
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors text-lg"
          >
            Quiero mi diagnóstico gratuito
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
