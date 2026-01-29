import { Link } from 'wouter';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold text-red-600">SEXOLOGÍA PAVLOV</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#bienvenida" className="text-sm font-medium hover:text-red-600 transition-colors">
            Inicio
          </Link>
          <Link href="/#proceso" className="text-sm font-medium hover:text-red-600 transition-colors">
            Proceso Terapéutico
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-red-600 transition-colors">
            Blog
          </Link>
          <Link href="/herramientas" className="text-sm font-medium hover:text-red-600 transition-colors">
            Herramientas
          </Link>
          <Link href="/#contacto" className="text-sm font-medium hover:text-red-600 transition-colors">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/593XXXXXXXXX?text=Hola%20Pablo,%20me%20gustaría%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700"
          >
            WhatsApp
          </a>
          <a
            href="https://calendly.com/pavlov-sexologia/consulta-inicial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700"
          >
            Agendar sesión
          </a>
        </div>
      </div>
    </header>
  );
}
