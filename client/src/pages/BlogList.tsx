import { usePosts } from "@/hooks/use-posts";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { SectionHeading } from "@/components/SectionHeading";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function BlogList() {
  const { data: posts, isLoading } = usePosts();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Blog & Recursos"
            description="Explora artículos sobre salud sexual, relaciones y bienestar emocional."
          />

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
              {posts?.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group cursor-pointer flex flex-col h-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-secondary mb-6 relative">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        Sin imagen
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-3">
                      {post.publishedAt ? format(new Date(post.publishedAt), "MMM d, yyyy", { locale: es }) : ""}
                    </div>
                    <h2 className="text-2xl font-bold font-display mb-3 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                      Leer artículo <span className="text-primary text-xl">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
          
          {!isLoading && posts?.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No hay artículos publicados todavía.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
