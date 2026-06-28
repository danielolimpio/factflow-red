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

export const posts: Post[] = (raw as Post[])
  .slice()
  .sort((a, b) => (a.date < b.date ? 1 : -1));

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

export const CATEGORIES: { name: string; slug: string; description: string }[] = [
  {
    name: "Transparência",
    slug: "transparencia",
    description:
      "Como consultar dados oficiais de gastos públicos, verbas parlamentares e portais governamentais.",
  },
  {
    name: "Orçamento",
    slug: "orcamento",
    description:
      "Análises factuais do Orçamento Federal, dívida pública, déficit e despesas obrigatórias.",
  },
  {
    name: "Checagem",
    slug: "checagem",
    description:
      "Verificação de declarações políticas e fiscalização de contas públicas com base no TCU e CGU.",
  },
  {
    name: "Compliance",
    slug: "compliance",
    description:
      "Regras eleitorais, prestação de contas no TSE e compliance para candidatos e partidos.",
  },
  {
    name: "Guias",
    slug: "guias",
    description:
      "Passo a passo prático para usar SIAFI, SIGA Brasil, Portal da Transparência e outras ferramentas oficiais.",
  },
];

export const postsByCategory = (slug: string) =>
  posts.filter((p) => p.categorySlug === slug);

export const getCategory = (slug: string) =>
  CATEGORIES.find((c) => c.slug === slug);

export const featured = posts[0];
export const recent = posts.slice(1, 5);
export const recommended = posts.slice(2, 8);
export const highlights = posts.slice(0, 6);
export const editorsPicks = posts.slice(3, 7);
