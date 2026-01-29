import { staticPosts } from "@/data/static-posts";
import type { Post } from "@shared/schema";

export function useStaticPosts() {
  return {
    data: staticPosts as Post[],
    isLoading: false,
    error: null,
  };
}

export function useStaticPost(slug: string) {
  return {
    data: staticPosts.find(post => post.slug === slug) as Post | undefined,
    isLoading: false,
    error: null,
  };
}
