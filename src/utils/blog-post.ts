import { blogPosts } from "@/lib/blog-post-data";
import { BlogPost } from "@/lib/types";

// Get all blog posts
export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
    // todo: backend API
    return blogPosts;
  };
  
  // Get a single blog post by slug
  export const getBlogPostBySlug = async (
    slug: string
  ): Promise<BlogPost | null> => {
    // todo: backend API
    return blogPosts.find((post) => post.slug === slug) || null;
  };
  
  // Get recent blog posts
  export const getRecentBlogPosts = async (
    count: number = 3
  ): Promise<BlogPost[]> => {
    // todo: backend API, sort by date
    return blogPosts.slice(0, count);
  };