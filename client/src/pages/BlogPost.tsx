import { useRoute } from "wouter";
import { useStaticPost } from "@/hooks/use-static-posts";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading, error } = useStaticPost(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <h1 className="text-3xl font-display font-bold mb-4">Artículo no encontrado</h1>
        <Link href="/blog" className="text-primary hover:underline">Volver al blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={18} /> Volver al blog
          </Link>

          <header className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {post.publishedAt ? format(new Date(post.publishedAt), "d 'de' MMMM, yyyy", { locale: es }) : "Fecha desconocida"}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <User size={14} />
                {post.author}
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              {post.title}
            </h1>
            
            {post.imageUrl && (
              <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-xl mb-8">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-serif italic max-w-2xl mx-auto">
              "{post.excerpt}"
            </p>
          </header>

          <div 
            className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-loose prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
