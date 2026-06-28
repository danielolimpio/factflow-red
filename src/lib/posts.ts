import raw from "@/data/posts.json";

export type Post = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  image: string;
  excerpt: string;
  html: string;
  body?: string[];
};

export const posts: Post[] = raw as Post[];

export const formatDate = (iso: string) => {
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} de ${months[m - 1]}, ${y}`;
};

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const featured = posts[0];
export const recent = posts.slice(1, 5);
export const recommended = posts.slice(2, 8);
export const highlights = posts.slice(0, 6);
export const editorsPicks = posts.slice(3, 7);
