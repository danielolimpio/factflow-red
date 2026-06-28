import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Sidebar } from "@/components/site/Sidebar";
import { PostCard } from "@/components/site/PostCard";
import { getCategory, postsByCategory } from "@/lib/posts";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, posts: postsByCategory(params.slug) };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            {
              title: `${loaderData.category.name} — Fatos Políticos`,
            },
            { name: "description", content: loaderData.category.description },
            {
              property: "og:title",
              content: `${loaderData.category.name} — Fatos Políticos`,
            },
            {
              property: "og:description",
              content: loaderData.category.description,
            },
          ],
        }
      : {},
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-[800px] px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Categoria não encontrada</h1>
        <Link to="/" className="mt-6 inline-block text-brand underline">
          Voltar para a home
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, posts } = Route.useLoaderData();
  const [lead, ...rest] = posts;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <nav className="flex items-center gap-2 text-xs text-ink-soft">
            <Link to="/" className="hover:text-brand">Home</Link>
            <ChevronRight className="h-3 w-3 text-brand" />
            <span className="uppercase tracking-[0.12em] text-brand">{category.name}</span>
          </nav>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {category.description}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[1280px] px-6 py-12">
        {posts.length === 0 ? (
          <p className="py-16 text-center text-ink-soft">
            Em breve novos artigos nesta categoria.
          </p>
        ) : (
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              {lead && <PostCard post={lead} variant="hero" />}
              {rest.length > 0 && (
                <div className="grid gap-8 sm:grid-cols-2">
                  {rest.map((p: import("@/lib/posts").Post) => (
                    <PostCard key={p.slug} post={p} variant="grid" />
                  ))}
                </div>
              )}
            </div>
            <Sidebar />
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
