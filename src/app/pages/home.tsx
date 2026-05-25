import { Link } from "react-router";
import { 
  Clock, 
  TrendingUp, 
  Shield, 
  MessageCircle, 
  Package, 
  Share2, 
  Zap, 
  Brain, 
  FileText, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export function Home() {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorra tiempo",
      description: "Recupera hasta 30 horas al mes automatizando tareas repetitivas",
    },
    {
      icon: TrendingUp,
      title: "No pierdas ventas",
      description: "Tu negocio responde 24/7, incluso cuando descansas",
    },
    {
      icon: Shield,
      title: "Implementación rápida",
      description: "Todo listo en 48 horas, sin complicaciones técnicas",
    },
  ];

  const agents = [
    {
      icon: MessageCircle,
      name: "Atención al cliente 24/7",
      description: "Responde preguntas frecuentes, toma pedidos y agenda citas en WhatsApp e Instagram",
    },
    {
      icon: Package,
      name: "Inventario inteligente",
      description: "Monitorea stock, genera alertas de reposición y optimiza compras",
    },
    {
      icon: Share2,
      name: "Contenido para redes",
      description: "Crea publicaciones, historias y promociones para tus redes sociales",
    },
    {
      icon: Zap,
      name: "Agente de ventas proactivo",
      description: "Identifica oportunidades, hace seguimiento y cierra ventas",
    },
    {
      icon: Brain,
      name: "Co-piloto del dueño",
      description: "Análisis de métricas, insights del negocio y recomendaciones estratégicas",
    },
    {
      icon: FileText,
      name: "Facturación y compliance",
      description: "Genera facturas electrónicas, reportes tributarios y cumplimiento DIAN",
    },
  ];

  const integrations = [
    "WhatsApp",
    "Instagram",
    "Siigo",
    "Alegra",
    "Wompi",
    "Nequi",
    "DIAN",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 !font-bold">
                HUB<span className="text-[#f97316]">IA</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Implementamos inteligencia artificial en tu empresa en menos de 48 horas, sin que necesites saber de tecnología.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors text-lg"
              >
                Agenda tu diagnóstico gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJ1c2luZXNzJTIwb3duZXJ8ZW58MXx8fHwxNzc5NzQ5ODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Dueño de negocio feliz"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why PYMEs Need AI */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a] !font-bold">
              ¿Por qué una PYME necesita IA hoy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La tecnología ya no es solo para grandes empresas. Hoy, cualquier negocio puede competir mejor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#f97316] rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-3 text-[#1e3a8a]">{benefit.title}</h3>
                <p className="text-gray-600 text-lg">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a] !font-bold">
              Agentes que implementamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada agente trabaja para ti de forma autónoma, integrándose con las herramientas que ya usas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 p-6 rounded-xl hover:border-[#f97316] transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-4">
                  <agent.icon className="w-6 h-6 text-[#f97316]" />
                </div>
                <h3 className="text-xl mb-2 text-[#1e3a8a]">{agent.name}</h3>
                <p className="text-gray-600">{agent.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-[#1e3a8a] !font-bold">
              Se integra con las herramientas que ya usas
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-lg text-gray-700">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1718985342149-7178154e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMHN0b3JlJTIwb3duZXJ8ZW58MXx8fHwxNzc5NzQ5ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Leidy - Tienda de ropa"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-[#f97316]"
              />
            </div>
            <blockquote className="text-2xl md:text-3xl mb-6 !font-normal">
              "Recuperé 3 horas diarias y dejé de perder ventas de noche. Ahora mi tienda responde en Instagram y WhatsApp aunque yo esté durmiendo."
            </blockquote>
            <p className="text-xl text-blue-200">
              <strong className="text-[#f97316]">Leidy Rodríguez</strong> — Tienda de ropa en Cúcuta
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#1e3a8a] !font-bold">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Hablemos — el diagnóstico es completamente gratis y sin compromiso
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
