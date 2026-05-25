import { Link } from "react-router";
import { CheckCircle2, X, ArrowRight, Shield } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Para empezar a automatizar tu negocio",
      setupFee: "890.000",
      monthlyPrice: "349.000",
      features: [
        "Hasta 2 agentes a elegir",
        "1 integración (WhatsApp o Instagram)",
        "Soporte por correo y WhatsApp",
        "Reportes mensuales básicos",
        "Actualizaciones incluidas",
      ],
      notIncluded: [
        "Co-piloto del dueño",
        "Integraciones contables",
        "Soporte prioritario",
      ],
      recommended: false,
      cta: "Comenzar con Starter",
    },
    {
      name: "Pro",
      description: "La opción más popular para PYMEs",
      setupFee: "1.490.000",
      monthlyPrice: "649.000",
      features: [
        "Todos los agentes disponibles",
        "Integraciones ilimitadas",
        "Co-piloto del dueño incluido",
        "Soporte prioritario vía WhatsApp",
        "Reportes semanales detallados",
        "Actualizaciones y mejoras continuas",
        "Revisión trimestral de optimización",
      ],
      notIncluded: [],
      recommended: true,
      cta: "Elegir Plan Pro",
    },
    {
      name: "Empresarial",
      description: "Para negocios con necesidades específicas",
      setupFee: "Personalizado",
      monthlyPrice: "Desde 1.290.000",
      features: [
        "Todo lo del Plan Pro incluido",
        "Agentes personalizados a medida",
        "Memoria organizacional avanzada",
        "Implementación multi-sucursal",
        "Gerente de cuenta dedicado",
        "Integración con sistemas propietarios",
        "SLA garantizado",
      ],
      notIncluded: [],
      recommended: false,
      cta: "Contactar para cotización",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6 !font-bold">
            Precios transparentes, sin sorpresas
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Inversión única de implementación + suscripción mensual. Así de simple.
          </p>
        </div>
      </section>

      {/* Pricing Model Explanation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl mb-6 text-[#1e3a8a] text-center">
              ¿Cómo funciona el modelo de precios?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-[#f97316] rounded-lg p-6">
                <h3 className="text-lg text-[#f97316] mb-3">Fee de implementación (pago único)</h3>
                <p className="text-gray-700">
                  Cubre el diagnóstico, configuración personalizada, integración con tus sistemas, 
                  pruebas y capacitación inicial. Se paga una sola vez al inicio.
                </p>
              </div>

              <div className="border-2 border-[#1e3a8a] rounded-lg p-6">
                <h3 className="text-lg text-[#1e3a8a] mb-3">Suscripción mensual</h3>
                <p className="text-gray-700">
                  Cubre el uso de los agentes, actualizaciones continuas, soporte técnico, 
                  reportes y acompañamiento. Sin contratos de permanencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.recommended ? 'ring-4 ring-[#f97316] scale-105' : 'border-2 border-gray-200'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-[#f97316] text-white px-4 py-1 text-sm font-semibold">
                    Más popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-3xl mb-2 text-[#1e3a8a]">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-1">Implementación inicial</p>
                      <p className="text-2xl text-gray-900">
                        ${plan.setupFee} <span className="text-sm text-gray-500">COP</span>
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Suscripción mensual</p>
                      <p className="text-4xl !font-bold text-[#1e3a8a]">
                        ${plan.monthlyPrice}
                      </p>
                      <p className="text-sm text-gray-500">COP/mes</p>
                    </div>
                  </div>

                  <Link
                    to="/contacto"
                    className={`block w-full text-center px-6 py-3 rounded-lg transition-colors mb-6 ${
                      plan.recommended
                        ? 'bg-[#f97316] text-white hover:bg-[#ea580c]'
                        : 'bg-gray-100 text-[#1e3a8a] hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-900 mb-3">Incluye:</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#f97316] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded.length > 0 && (
                      <>
                        <p className="text-sm font-semibold text-gray-500 mt-6 mb-3">No incluye:</p>
                        {plan.notIncluded.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-500">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white rounded-2xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl mb-4 !font-bold">
              Garantía de resultados
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Si en los primeros 30 días no ves resultados medibles en ahorro de tiempo o aumento de ventas, 
              te devolvemos el 100% de tu inversión. Sin preguntas.
            </p>
            <p className="text-lg text-blue-200">
              Estamos tan seguros de que la IA va a ayudarte, que asumimos todo el riesgo.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-[#1e3a8a] text-center !font-bold">
            Preguntas frecuentes sobre precios
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#f97316] transition-colors">
              <h3 className="text-xl text-[#1e3a8a] mb-3">
                ¿Puedo cambiar de plan después?
              </h3>
              <p className="text-gray-700">
                Sí, puedes hacer upgrade o downgrade cuando quieras. Si subes de plan, solo pagas la diferencia. 
                Sin permanencias ni multas.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#f97316] transition-colors">
              <h3 className="text-xl text-[#1e3a8a] mb-3">
                ¿Hay costos ocultos o adicionales?
              </h3>
              <p className="text-gray-700">
                No. Lo que ves es lo que pagas. Las actualizaciones, mejoras y soporte están incluidos en la 
                suscripción mensual. Solo pagarías adicional si pides agentes completamente personalizados 
                fuera de los estándar.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#f97316] transition-colors">
              <h3 className="text-xl text-[#1e3a8a] mb-3">
                ¿Qué pasa si quiero cancelar?
              </h3>
              <p className="text-gray-700">
                Puedes cancelar tu suscripción en cualquier momento, sin penalidades. Si cancelas antes de los 
                30 días y no viste resultados, te devolvemos tu inversión completa.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#f97316] transition-colors">
              <h3 className="text-xl text-[#1e3a8a] mb-3">
                ¿Ofrecen financiación?
              </h3>
              <p className="text-gray-700">
                Sí, ofrecemos planes de pago para el fee de implementación. Puedes dividirlo en hasta 3 cuotas. 
                Pregunta en tu diagnóstico gratuito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#1e3a8a] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 !font-bold">
            ¿No estás seguro qué plan elegir?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Hablemos. En el diagnóstico gratuito te ayudamos a elegir el plan correcto para tu negocio.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f97316] text-white rounded-lg hover:bg-[#ea580c] transition-colors text-lg"
          >
            Habla con un consultor
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
