import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-4 shadow-xl border-border/50">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-display font-bold text-foreground">Página no encontrada</h1>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          
          <div className="mt-8">
            <Link href="/" className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Volver al inicio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
