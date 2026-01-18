import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingPosts = await storage.getPosts();
  if (existingPosts.length === 0) {
    const seedPosts = [
      {
        title: "No todo es adicción al sexo",
        slug: "no-todo-es-adiccion-al-sexo",
        excerpt: "Muchas veces confundimos ansiedad o patrones de comportamiento con una adicción real. Entiende la diferencia.",
        content: "El término 'adicción al sexo' se usa popularmente para describir conductas sexuales que se sienten fuera de control. Sin embargo, en la sexología moderna y la psicología basada en evidencia, a menudo miramos más allá de la etiqueta de adicción. Frecuentemente, lo que encontramos es un manejo ineficaz de la ansiedad, el estrés o el trauma a través de la sexualidad. No se trata de demonizar el deseo, sino de entender qué función está cumpliendo ese comportamiento en tu vida. ¿Es una fuga? ¿Es una forma de sentir algo cuando te sientes vacío? Abordar esto desde la compasión y no desde la patología es el primer paso para sanar.",
        author: "Terapeuta Sexual",
        imageUrl: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Pornografía y distorsión corporal",
        slug: "pornografia-y-distorsion-corporal",
        excerpt: "Cómo el consumo temprano y excesivo puede afectar la percepción de nuestros propios cuerpos y el de nuestras parejas.",
        content: "La pornografía mainstream a menudo presenta una gama muy limitada de cuerpos y actos sexuales, creando un estándar poco realista de lo que es 'normal'. Cuando nuestra educación sexual proviene principalmente de estas imágenes, es fácil desarrollar inseguridades sobre el tamaño, la forma, el color o la función de nuestros genitales y cuerpos. En terapia, trabajamos para desconectar esa programación visual y reconectar con la realidad de la diversidad humana. Tu cuerpo no está mal; simplemente no se parece a una producción de fantasía industrializada, y eso es perfectamente normal y saludable.",
        author: "Terapeuta Sexual",
        imageUrl: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Por qué el deseo no se obliga",
        slug: "por-que-el-deseo-no-se-obliga",
        excerpt: "El deseo sexual espontáneo no es la única forma de deseo. Aprende sobre el deseo reactivo y cómo quitar presión.",
        content: "Vivimos en una cultura que nos dice que siempre deberíamos estar listos para el sexo, especialmente al inicio de una relación. Pero el deseo es complejo y fluctúa. Muchas personas experimentan lo que llamamos 'deseo reactivo', que surge en respuesta a la estimulación y la conexión, no de la nada. Forzarte a tener ganas cuando no las tienes genera aversión y más bloqueo. La clave no es obligarse, sino crear las condiciones (contexto, seguridad, juego) donde el deseo pueda florecer naturalmente.",
        author: "Terapeuta Sexual",
        imageUrl: "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ];

    for (const post of seedPosts) {
      await storage.createPost(post);
    }
    console.log("Database seeded with initial blog posts");
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data on startup
  seedDatabase().catch(console.error);

  app.get(api.posts.list.path, async (req, res) => {
    const posts = await storage.getPosts();
    res.json(posts);
  });

  app.get(api.posts.get.path, async (req, res) => {
    const post = await storage.getPost(req.params.slug);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  });

  app.post(api.posts.create.path, async (req, res) => {
    try {
      const input = api.posts.create.input.parse(req.body);
      const post = await storage.createPost(input);
      res.status(201).json(post);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
