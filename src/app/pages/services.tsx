import { Link } from "react-router";
import { 
  MessageCircle, 
  Package, 
  Share2, 
  Zap, 
  Brain, 
  FileText,
  DollarSign,
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: MessageCircle,
      name: "Atención al cliente 24/7",
      description: "Tu agente virtual atiende consultas, toma pedidos y agenda citas sin importar la hora",
      problem: "¿Pierdes ventas porque no puedes responder de noche o los fines de semana?",
      bestFor: "Tiendas, restaurantes, clínicas y negocios con atención directa al público",
      features: [
        "Respuestas automáticas en WhatsApp e Instagram",
        "Toma de pedidos y reservas",
        "Transferencia a humano cuando es necesario",
        "Historial completo de conversaciones",
      ],
    },
    {
      icon: Package,
      name: "Inventario inteligente",
      description: "Monitorea tu stock en tiempo real, genera alertas y optimiza tus compras",
      problem: "¿Te quedas sin productos estrella o acumulas inventario que no se vende?",
      bestFor: "Tiendas de ropa, distribuidoras, farmacias y cualquier negocio con inventario físico",
      features: [
        "Alertas de productos próximos a agotarse",
        "Predicción de demanda por temporada",
        "Recomendaciones de reposición",
        "Integración con sistemas de facturación",
      ],
    },
    {
      icon: Share2,
      name: "Contenido para redes sociales",
      description: "Tu agente crea publicaciones, historias y promociones adaptadas a tu marca",
      problem: "¿No tienes tiempo para mantener activas tus redes y atraer clientes?",
      bestFor: "Cualquier negocio que quiera presencia digital sin contratar un community manager",
      features: [
        "Generación de textos y conceptos creativos",
        "Calendario de publicaciones",
        "Publicaciones adaptadas a cada red social",
        "Análisis de engagement",
      ],
    },
    {
      icon: Zap,
      name: "Agente de ventas proactivo",
      description: "Hace seguimiento a prospectos, recupera carritos abandonados y cierra ventas",
      problem: "¿Tienes clientes interesados que nunca concretan la compra?",
      bestFor: "E-commerce, agencias, servicios profesionales y negocios con ciclos de venta largos",
      features: [
        "Seguimiento automático a prospectos",
        "Recordatorios de carritos abandonados",
        "Ofertas personalizadas según comportamiento",
        "Reportes de pipeline de ventas",
      ],
    },
    {
      icon: Brain,
      name: "Co-piloto del dueño",
      description: "Analiza métricas, identifica oportunidades y te recomienda qué hacer",
      problem: "¿Tienes los datos pero no sabes qué decisiones tomar?",
      bestFor: "Cualquier dueño que quiera entender mejor su negocio y tomar mejores decisiones",
      features: [
        "Dashboard personalizado con métricas clave",
        "Alertas de anomalías y oportunidades",
        "Recomendaciones estratégicas semanales",
        "Comparación con meses anteriores",
      ],
    },
    {
      icon: DollarSign,
      name: "Cobranza amigable",
      description: "Envía recordatorios automáticos de pago sin incomodar a tus clientes",
      problem: "¿Tienes facturas pendientes pero te da pena cobrar?",
      bestFor: "Servicios profesionales, distribuidoras y negocios con ventas a crédito",
      features: [
        "Recordatorios automáticos escalonados",
        "Tono amigable y profesional",
        "Opciones de pago fáciles",
        "Registro de gestiones de cobranza",
      ],
    },
    {
      icon: FileText,
      name: "Facturación y compliance",
      description: "Genera facturas electrónicas, lleva reportes tributarios y cumple con DIAN",
      problem: "¿Pasas horas en facturación y reportes que podrían ser automáticos?",
      bestFor: "Cualquier negocio formal que necesite cumplir con obligaciones tributarias",
      features: [
        "Generación automática de facturas electrónicas",
        "Reportes mensuales de IVA y retención",
        "Integración con plataformas contables",
        "Alertas de vencimientos tributarios",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 !font-bold">
            No vendemos software. Implementamos soluciones.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Cada agente está diseñado para resolver un problema específico de tu negocio. 
            Te acompañamos desde el diagnóstico hasta ver los resultados.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-[#f97316] transition-all hover:shadow-xl"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Left: Icon and Name */}
                  <div>
                    <div className="w-16 h-16 bg-[#1e3a8a] rounded-xl flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-[#f97316]" />
                    </div>
                    <h3 className="text-2xl mb-3 text-[#1e3a8a]">{service.name}</h3>
                    <p className="text-gray-600 text-lg mb-4">{service.description}</p>
                  </div>

                  {/* Middle: Problem & Best For */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-[#f97316] mb-2">
                        ¿Qué problema resuelve?
                      </h4>
                      <p className="text-gray-700">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-[#f97316] mb-2">
                        ¿Para qué negocio es ideal?
                      </h4>
                      <p className="text-gray-700">{service.bestFor}</p>
                    </div>
                  </div>

                  {/* Right: Features */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wide text-[#f97316] mb-3">
                      Qué incluye
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-6 text-[#1e3a8a] !font-bold">
              ¿Cómo se adapta a mi empresa?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              No hay dos negocios iguales. Por eso, cada implementación comienza con un diagnóstico 
              gratuito donde mapeamos tus procesos, identificamos dolores y seleccionamos los agentes 
              que realmente te van a ayudar.
            </p>
            <p className="text-xl text-gray-600">
              No pagas por funciones que no usarás. Solo implementamos lo que tu negocio necesita, 
              integrado con las herramientas que ya tienes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl !font-bold text-[#f97316] mb-2">48h</div>
                <p className="text-gray-600">Tiempo de implementación promedio</p>
              </div>
              <div>
                <div className="text-4xl !font-bold text-[#f97316] mb-2">0</div>
                <p className="text-gray-600">Conocimiento técnico requerido</p>
              </div>
              <div>
                <div className="text-4xl !font-bold text-[#f97316] mb-2">100%</div>
                <p className="text-gray-600">Personalizado a tu negocio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#1e3a8a] !font-bold">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda tu diagnóstico gratuito y descubre qué agentes le vienen mejor a tu negocio
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors text-lg"
          >
            Agenda tu diagnóstico gratuito
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
