import { ArrowRight, Heart, BookOpen, Search, Activity, CheckCircle, Users } from 'lucide-react';

type JourneyStep = {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
};

const steps: JourneyStep[] = [
  {
    icon: <BookOpen className="h-8 w-8 text-red-600" />,
    title: 'Historia Clínica',
    description: 'Recopilación detallada de tu historia personal y sexual para entender tus necesidades específicas.',
  },
  {
    icon: <Search className="h-8 w-8 text-red-600" />,
    title: 'Análisis y Diagnóstico',
    description: 'Evaluación profesional para identificar patrones y áreas de oportunidad en tu bienestar sexual.',
  },
  {
    icon: <Activity className="h-8 w-8 text-red-600" />,
    title: 'Proceso Terapéutico',
    description: 'Implementación de técnicas y ejercicios personalizados para abordar tus objetivos específicos.',
  },
  {
    icon: <Heart className="h-8 w-8 text-red-600" />,
    title: 'Acompañamiento',
    description: 'Soporte continuo y seguimiento para asegurar tu progreso y bienestar a largo plazo.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-green-600" />,
    title: 'Alta Terapéutica',
    description: 'Cierre del proceso con herramientas para mantener los logros alcanzados de manera autónoma.',
    isLast: true,
  },
];

export default function CustomerJourney() {
  return (
    <section id="proceso" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            El camino hacia tu bienestar sexual
          </h2>
          <p className="text-lg text-gray-600">
            Un proceso estructurado y con cierre, diseñado para guiarte hacia una relación más saludable con tu sexualidad.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-red-500 to-green-500 md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse md:flex-row'}`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-1/2 p-6 bg-white rounded-lg shadow-sm border border-gray-100 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-50">
                      {step.icon}
                    </div>
                    <h3 className="ml-4 text-lg font-medium text-gray-900">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>

                {/* Connector for last step */}
                {!step.isLast && (
                  <div className="hidden md:flex items-center justify-center flex-shrink-0 w-12 h-12 mx-6 rounded-full bg-white border-2 border-red-100">
                    <ArrowRight className="h-6 w-6 text-red-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile progress indicator */}
          <div className="flex justify-center mt-12 md:hidden">
            <div className="flex items-center">
              {steps.map((_, index) => (
                <>
                  <div key={`dot-${index}`} className="h-3 w-3 rounded-full bg-red-600" />
                  {index < steps.length - 1 && (
                    <div key={`line-${index}`} className="h-0.5 w-8 bg-gray-300" />
                  )}
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 text-green-700">
            <Users className="h-5 w-5 mr-2" />
            <span className="font-medium">Sesiones presenciales en Quito y en línea para todo Ecuador</span>
          </div>
          
          <p className="mt-4 text-gray-600">
            La terapia tiene un principio y un fin. Juntos trabajaremos para que alcances tus objetivos
            y adquieras las herramientas necesarias para mantener tu bienestar a largo plazo.
          </p>
        </div>
      </div>
    </section>
  );
}
