import { Link } from "react-router";
import { ClipboardList, Lightbulb, Rocket, HeartHandshake, ArrowRight, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const phases = [
    {
      icon: ClipboardList,
      phase: "Fase 1",
      title: "Diagnóstico",
      duration: "45 minutos",
      description: "Una videollamada para conocer tu negocio a fondo",
      details: [
        "Entrevista con uno de nuestros consultores especializados",
        "Mapeo de procesos actuales y puntos de fricción",
        "Identificación de oportunidades de automatización",
        "Revisión de herramientas que ya usas",
        "Sin costo y sin compromiso",
      ],
      color: "bg-[#f97316]",
    },
    {
      icon: Lightbulb,
      phase: "Fase 2",
      title: "Propuesta personalizada",
      duration: "24 horas después",
      description: "Te presentamos el plan diseñado específicamente para tu negocio",
      details: [
        "Selección de agentes recomendados según tu diagnóstico",
        "Plan de implementación paso a paso",
        "Integración con tus sistemas actuales",
        "Presupuesto transparente sin sorpresas",
        "Expectativas claras de resultados",
      ],
      color: "bg-[#1e3a8a]",
    },
    {
      icon: Rocket,
      phase: "Fase 3",
      title: "Implementación en 48h",
      duration: "2 días hábiles",
      description: "Configuramos todo, lo integramos y lo probamos juntos",
      details: [
        "Configuración de agentes según tu marca y tono",
        "Integración con WhatsApp, Instagram, Siigo, Alegra, etc.",
        "Importación de datos relevantes (productos, clientes, etc.)",
        "Pruebas en conjunto antes de activar",
        "Capacitación básica para tu equipo",
      ],
      color: "bg-[#f97316]",
    },
    {
      icon: HeartHandshake,
      phase: "Fase 4",
      title: "Acompañamiento continuo",
      duration: "Siempre disponible",
      description: "Te apoyamos para que saques el máximo provecho",
      details: [
        "Soporte técnico prioritario vía WhatsApp",
        "Ajustes y optimizaciones según feedback",
        "Reportes mensuales de métricas y resultados",
        "Actualizaciones y mejoras incluidas",
        "Revisiones trimestrales para identificar nuevas oportunidades",
      ],
      color: "bg-[#1e3a8a]",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 !font-bold">
            Cómo funciona el proceso
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Desde la primera llamada hasta ver resultados: un proceso simple, transparente y sin vueltas
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Connector Line - only show if not last item */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute left-8 top-24 bottom-0 w-1 bg-gray-200 -mb-12" />
                )}

                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Icon and Phase Label */}
                  <div className="md:col-span-2 flex flex-col items-center md:items-start">
                    <div className={`${phase.color} w-16 h-16 rounded-xl flex items-center justify-center mb-3 relative z-10`}>
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      {phase.phase}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-10 bg-gray-50 rounded-xl p-8">
                    <div className="mb-6">
                      <div className="flex flex-wrap items-baseline gap-4 mb-2">
                        <h3 className="text-2xl text-[#1e3a8a]">{phase.title}</h3>
                        <span className="text-sm px-3 py-1 bg-[#f97316] text-white rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-xl text-gray-600">{phase.description}</p>
                    </div>

                    <ul className="space-y-3">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
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

      {/* What Happens in Diagnosis Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-[#1e3a8a] text-center !font-bold">
            ¿Qué pasa en el diagnóstico?
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-600 mb-6">
              Es una conversación relajada de 45 minutos donde te hacemos preguntas para entender cómo funciona tu negocio hoy. 
              No es una presentación de ventas — es una consultoría real.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-[#f97316] pl-4">
                <h4 className="text-lg text-[#1e3a8a] mb-1">¿Qué tipo de negocio tienes?</h4>
                <p className="text-gray-600">
                  Sector, tamaño, productos/servicios, modelo de venta
                </p>
              </div>

              <div className="border-l-4 border-[#f97316] pl-4">
                <h4 className="text-lg text-[#1e3a8a] mb-1">¿Cuáles son tus principales dolores?</h4>
                <p className="text-gray-600">
                  Ventas perdidas, tiempo invertido en tareas repetitivas, procesos manuales
                </p>
              </div>

              <div className="border-l-4 border-[#f97316] pl-4">
                <h4 className="text-lg text-[#1e3a8a] mb-1">¿Qué herramientas usas hoy?</h4>
                <p className="text-gray-600">
                  WhatsApp Business, Instagram, software de facturación, CRM, lo que sea
                </p>
              </div>

              <div className="border-l-4 border-[#f97316] pl-4">
                <h4 className="text-lg text-[#1e3a8a] mb-1">¿Qué quieres lograr?</h4>
                <p className="text-gray-600">
                  Recuperar tiempo, no perder ventas, crecer sin contratar más personal
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-[#1e3a8a] text-center">
                <strong>Al final del diagnóstico,</strong> ya sabrás si la IA puede ayudarte y cómo. 
                No hay letra chica ni compromisos ocultos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-[#1e3a8a] !font-bold">
            Quiero empezar
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Agenda tu diagnóstico gratuito y descubre cómo la IA puede transformar tu negocio
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors text-lg"
          >
            Agenda aquí
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
