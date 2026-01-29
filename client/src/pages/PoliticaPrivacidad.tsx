import { useEffect } from 'react';

export default function PoliticaPrivacidad() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Información que Recopilamos</h2>
              <p>
                En Sexología Pavlov, nos comprometemos a proteger tu privacidad. Recopilamos información personal únicamente 
                cuando nos la proporcionas voluntariamente a través de nuestros formularios de contacto, citas o comunicaciones.
              </p>
              <p>La información que podemos recopilar incluye:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y datos de contacto</li>
                <li>Información relevante para fines terapéuticos</li>
                <li>Historial de citas y comunicaciones</li>
                <li>Información de pago procesada de forma segura</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uso de la Información</h2>
              <p>
                Tu información se utiliza exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar servicios terapéuticos profesionales</li>
                <li>Coordinar citas y seguimiento</li>
                <li>Mejorar nuestros servicios</li>
                <li>Comunicación relevante sobre nuestros servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Confidencialidad</h2>
              <p>
                Toda la información compartida en el contexto terapéutico está protegida por el secreto profesional 
                y las leyes de confidencialidad aplicables en Ecuador. No compartimos tu información personal con 
                terceros sin tu consentimiento explícito, excepto cuando sea requerido por ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Seguridad</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información 
                contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Derechos del Usuario</h2>
              <p>
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Acceder a tu información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar eliminación de tu información</li>
                <li>Limitar el procesamiento de tus datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contacto</h2>
              <p>
                Para ejercer tus derechos o tener preguntas sobre esta política de privacidad, 
                contáctanos en: <a href="mailto:pablovsexologia@gmail.com" className="text-primary hover:underline">pablovsexologia@gmail.com</a>
              </p>
            </section>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">
                Última actualización: {new Date().toLocaleDateString('es-EC')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
