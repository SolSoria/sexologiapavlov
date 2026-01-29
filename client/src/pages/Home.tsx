import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check, MessageCircle, Heart, Brain, Users, Fingerprint, Calendar, Clock, CreditCard } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useStaticPosts } from "@/hooks/use-static-posts";

export default function Home() {
  const { data: latestPosts } = useStaticPosts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                Tu intimidad no debería ser <span className="text-primary italic">confusa</span>.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Terapia sexual y educación desde un enfoque humano. Un espacio seguro para reconectar con tu placer, libre de juicios y culpas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendly.com/solsoria-2208/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/25 flex items-center justify-center gap-2"
                >
                  Agendar Sesión <ArrowRight size={20} />
                </a>
                <a 
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-foreground border border-border px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2"
                >
                  Hablar por WhatsApp <MessageCircle size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                {/* Hero image: Peaceful, natural light, non-clinical */}
                <img 
                  src="https://images.pexels.com/photos/11598653/pexels-photo-11598653.jpeg?auto=compress&cs=tinysrgb&w=1280&h=1920&fit=crop" 
                  alt="Mujer tranquila disfrutando luz natural"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <span className="font-bold text-foreground">Espacio Seguro</span>
                </div>
                <p className="text-sm text-muted-foreground">Tu historia importa. Aquí escuchamos sin juzgar para sanar desde la raíz.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="py-24 bg-white overflow-hidden" id="sobre-mi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-[2rem] -z-10" />
              <img 
                src="/images/about-me.jpeg" 
                alt="Retrato profesional del terapeuta"
                className="rounded-[2rem] w-full object-cover shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionHeading 
                centered={false}
                subtitle="Sobre Mí"
                title="Hola, soy Pavlov Reyes"
                description="Psicologo y Magister en sexologia"
              />
              <div className="space-y-6 mt-8 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Mi misión es democratizar el placer y humanizar la educación sexual. Creo firmemente que la sexualidad es una parte vital de nuestra salud, no un tema tabú del que avergonzarse.
                </p>
                <p>
                  He acompañado a cientos de personas a reconciliarse con su cuerpo y su deseo. Mi enfoque no es médico ni patologizante; es humano, empático y basado en la evidencia.
                </p>
                <p>
                  En mi consulta no hay juicios, solo escucha activa y herramientas prácticas para que construyas la vida sexual que deseas y mereces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICATION SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Identificación"
            title="Esto pasa más de lo que crees"
            description="No estás solo/a en esto. Muchas personas atraviesan silenciosamente estas situaciones."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              "Hay personas que odian sus genitales y sienten vergüenza profunda.",
              "Parejas que se aman profundamente pero no logran tocarse.",
              "Hombres que sienten que su valor depende de una erección.",
              "Mujeres que nunca han sentido un orgasmo y creen que algo falta en ellas.",
              "Quienes viven esperando que el encuentro termine pronto para volver a sentirse a salvo.",
              "Quienes viven la sexualidad desde el miedo y la culpa."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary/30 p-8 rounded-3xl border border-secondary hover:border-primary/20 transition-all hover:bg-white hover:shadow-lg group"
              >
                <span className="text-4xl text-primary/20 font-display group-hover:text-primary/40 transition-colors">"</span>
                <p className="text-lg font-medium text-foreground relative -top-4">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REASONS (MIND VS BODY) */}
      <section className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Brain size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-display font-bold">La Mente y el Cuerpo</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Vergüenza", desc: "Sentir que hay algo intrínsecamente malo en ti o en tus deseos." },
                  { title: "Ansiedad de Desempeño", desc: "La presión por 'cumplir' desconecta del placer." },
                  { title: "Culpa", desc: "Creencias limitantes aprendidas que impiden el disfrute." },
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                  >
                    <div className="mt-1 min-w-[24px]">
                      <Check className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Heart size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-display font-bold">El Cuerpo</h3>
              </div>
              <ul className="space-y-6">
                {[
                  { title: "Falta de Deseo", desc: "Cuando el cuerpo simplemente no responde como quisieras." },
                  { title: "Dolor (Dispareunia/Vaginismo)", desc: "El sexo no debería doler. El cuerpo habla a través del síntoma." },
                  { title: "Dificultad Orgásmica", desc: "La desconexión que impide llegar al clímax." },
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                  >
                    <div className="mt-1 min-w-[24px]">
                      <Check className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-2xl font-display italic text-foreground/80">
              "Tus miedos actuales son el eco de tu historia, no tu realidad presente."
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 bg-white" id="proceso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            subtitle="Mi Método"
            title="El camino hacia tu bienestar"
            description="Un acompañamiento con estructura y método, diseñado para avanzar al ritmo que tu proceso requiera."
          />

          <div className="mt-20 relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-secondary hidden lg:block -z-10" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Historia", desc: "Entender tu contexto vital y sexual." },
                { step: "02", title: "Análisis", desc: "Identificar patrones y bloqueos." },
                { step: "03", title: "Diagnóstico", desc: "Claridad sobre lo que está pasando." },
                { step: "04", title: "Terapia", desc: "Intervienen ejercicios y herramientas prácticas en cada sesión." },
                { step: "05", title: "Acompañamiento", desc: "Acompañamiento continuo hasta el alta para asegurar la autonomía y el cierre efectivo del proceso." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl border border-secondary shadow-sm text-center relative z-10 group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-foreground text-background" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            dark
            subtitle="Servicios"
            title="¿Cómo puedo ayudarte?"
            description="Modalidades de atención diseñadas para diferentes necesidades."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <Users className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Terapia Individual</h3>
              <p className="text-white/70 mb-6">
                Un espacio privado para explorar tu sexualidad, resolver dudas y sanar heridas personales que afectan tu placer.
              </p>
              <ul className="space-y-2 text-white/60 text-sm mb-8">
                <li>• Disfunciones sexuales</li>
                <li>• Historia de trauma</li>
                <li>• Autoconocimiento</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <Heart className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Terapia de Pareja</h3>
              <p className="text-white/70 mb-6">
                Para parejas que quieren reconectar, mejorar su comunicación erótica o superar discrepancias de deseo.
              </p>
              <ul className="space-y-2 text-white/60 text-sm mb-8">
                <li>• Falta de deseo</li>
                <li>• Rutina y aburrimiento</li>
                <li>• Apertura de la relación</li>
                <li>• Situaciones de poliamor</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
              <Fingerprint className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Identidad & Género</h3>
              <p className="text-white/70 mb-6">
                Acompañamiento afirmativo para explorar tu orientación sexual o identidad de género en un espacio seguro.
              </p>
              <ul className="space-y-2 text-white/60 text-sm mb-8">
                <li>• Exploración de identidad</li>
                <li>• Salida del closet</li>
                <li>• Transiciones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & BOOKING */}
      <section className="py-24 bg-secondary/30" id="agendar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Inicia tu proceso"
            description="Tarifas transparentes y facilidades de pago."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 mt-16">
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-muted group-hover:bg-primary transition-colors" />
              <h3 className="text-2xl font-bold mb-2 font-display">Sesión Individual</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-foreground">$35</span>
                <span className="text-muted-foreground">/ hora</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground"><Clock size={18} /> 60 minutos de duración</li>
                <li className="flex items-center gap-3 text-muted-foreground"><Calendar size={18} /> Online o Presencial (Quito)</li>
                <li className="flex items-center gap-3 text-muted-foreground"><CreditCard size={18} /> Pagos vía Transferencia/Deuna</li>
              </ul>
              <button 
                onClick={() => window.open('https://calendly.com/solsoria-2208/30min', '_blank')}
                className="w-full bg-foreground text-background py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors"
              >
                Agendar Cita
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-muted group-hover:bg-primary transition-colors" />
              <h3 className="text-2xl font-bold mb-2 font-display">Sesión de Pareja</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-foreground">$70</span>
                <span className="text-muted-foreground">/ 2 horas</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground"><Clock size={18} /> 120 minutos de duración</li>
                <li className="flex items-center gap-3 text-muted-foreground"><Calendar size={18} /> Online o Presencial (Quito)</li>
                <li className="flex items-center gap-3 text-muted-foreground"><CreditCard size={18} /> Pagos vía Transferencia/Deuna</li>
              </ul>
              <button 
                onClick={() => window.open('https://calendly.com/solsoria-2208/30min', '_blank')}
                className="w-full bg-foreground text-background py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors"
              >
                Agendar Cita
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            * Política de cancelación: 24 horas de anticipación para reagendar sin costo.
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      {latestPosts && latestPosts.length > 0 && (
        <section className="py-24 bg-white" id="blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl font-bold mb-4">Blog</h2>
                <p className="text-muted-foreground text-lg">Recursos, reflexiones y educación sexual gratuita.</p>
              </div>
              <Link href="/blog" className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline">
                Ver todos los artículos <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.slice(0, 3).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl overflow-hidden border border-secondary transition-all hover:shadow-lg h-full flex flex-col">
                    <div className="aspect-video bg-muted overflow-hidden">
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                          Sin imagen
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Artículo</span>
                      <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="text-sm font-medium underline decoration-secondary group-hover:decoration-primary underline-offset-4 transition-all">Leer más</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                Ver todos los artículos <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
