import { useEffect } from 'react';

export default function Terminos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Términos y Condiciones</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de Términos</h2>
              <p>
                Al utilizar los servicios de Sexología Pavlov, aceptas estos términos y condiciones en su totalidad. 
                Si no estás de acuerdo con alguno de estos términos, por favor no utilices nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descripción de Servicios</h2>
              <p>
                Sexología Pavlov ofrece servicios de terapia sexual profesional, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Terapia individual</li>
                <li>Terapia de pareja</li>
                <li>Consultoría sexual</li>
                <li>Educación sexual</li>
                <li>Sesiones online y presenciales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Responsabilidades del Cliente</h2>
              <p>Como cliente, te comprometes a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proporcionar información veraz y completa</li>
                <li>Asistir puntualmente a las citas programadas</li>
                <li>Cancelar con al menos 24 horas de anticipación</li>
                <li>Respetar los límites profesionales del terapeuta</li>
                <li>Seguir las recomendaciones terapéuticas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Confidencialidad</h2>
              <p>
                Toda información compartida en sesión terapéutica es estrictamente confidencial, 
                excepto en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Riesgo inminente de daño propio o ajeno</li>
                <li>Abuso de menores o personas vulnerables</li>
                <li>Requerimiento legal o judicial</li>
                <li>Consentimiento explícito del cliente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Pagos y Cancelaciones</h2>
              <p>
                Los honorarios terapéuticos deben ser pagados antes o al momento de la sesión. 
                Las cancelaciones deben realizarse con mínimo 24 horas de anticipación para evitar 
                cargos por no asistencia. Las sesiones canceladas con menos de 24 horas serán 
                cobradas al 100% del valor.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitaciones de Responsabilidad</h2>
              <p>
                La terapia sexual es un proceso colaborativo que requiere compromiso del cliente. 
                Los resultados no están garantizados y dependen de múltiples factores incluyendo 
                la participación activa del cliente en el proceso terapéutico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Emergencias</h2>
              <p>
                Los servicios terapéuticos no están diseñados para manejar crisis agudas o emergencias 
                psiquiátricas. En caso de emergencia, contacta inmediatamente con servicios de emergencia 
                o acude al centro médico más cercano.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modificaciones</h2>
              <p>
                Sexología Pavlov se reserva el derecho de modificar estos términos y condiciones en cualquier momento. 
                Las modificaciones entrarán en vigor desde su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Ley Aplicable</h2>
              <p>
                Estos términos y condiciones se rigen por las leyes de la República del Ecuador. 
                Cualquier disputa será resuelta en los tribunales competentes de Quito, Ecuador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contacto</h2>
              <p>
                Para preguntas sobre estos términos y condiciones, contáctanos en: 
                <a href="mailto:pablovsexologia@gmail.com" className="text-primary hover:underline">pablovsexologia@gmail.com</a> 
                o al +593 992523747.
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
