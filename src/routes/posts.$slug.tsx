import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Sidebar } from "@/components/site/Sidebar";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { getPost, posts, formatDate, getCategory } from "@/lib/posts";
import { Calendar, Facebook, Twitter, Linkedin, Link2 } from "lucide-react";

export const Route = createFileRoute("/posts/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Fatos Políticos` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:image", content: loaderData.post.image },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-[800px] px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Artigo não encontrado</h1>
        <Link to="/" className="mt-6 inline-block text-brand underline">
          Voltar para a home
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page banner */}
      <div className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 py-8">
          <Breadcrumbs
            items={[
              {
                label: post.category,
                to: "/categoria/$slug",
                params: { slug: getCategory(post.categorySlug)?.slug ?? post.categorySlug },
              },
              { label: post.title },
            ]}
          />
        </div>
      </div>

      <section className="mx-auto max-w-[1280px] px-6 py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <article>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-ink md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-5 border-y border-rule py-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-brand font-bold text-brand-foreground">
                  {post.author
                    .split(" ")
                    .map((s: string) => s[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-ink-soft">Por</p>
                  <p className="text-sm font-semibold text-ink">{post.author}</p>
                </div>
              </div>
              <span className="h-8 w-px bg-rule" />
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-ink-soft">
                <Calendar className="h-3.5 w-3.5 text-brand" />
                {formatDate(post.date)}
              </span>
              <span className="ml-auto flex items-center gap-2">
                <ShareBtn icon={<Facebook className="h-3.5 w-3.5" />} />
                <ShareBtn icon={<Twitter className="h-3.5 w-3.5" />} />
                <ShareBtn icon={<Linkedin className="h-3.5 w-3.5" />} />
                <ShareBtn icon={<Link2 className="h-3.5 w-3.5" />} />
              </span>
            </div>

            <div className="mt-8 overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full object-cover" />
            </div>

            {post.excerpt && (
              <p className="mt-8 border-l-4 border-brand bg-surface-alt px-5 py-4 font-display text-[20px] leading-[1.5] text-ink">
                {post.excerpt}
              </p>
            )}
            <div
              className="article-body mt-8 text-[17px] leading-[1.75] text-ink/90"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="mt-10 border-y border-rule py-5">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink">
                  Compartilhe:
                </span>
                <div className="flex gap-2">
                  <SharePill label="Facebook" />
                  <SharePill label="Twitter" />
                  <SharePill label="LinkedIn" />
                  <SharePill label="WhatsApp" />
                </div>
              </div>
            </div>

            {/* Related */}
            <div className="mt-14">
              <h3 className="section-title section-title-bar">Leia também</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.slice(0, 2).map((p) => (
                  <Link
                    key={p.slug}
                    to="/posts/$slug"
                    params={{ slug: p.slug }}
                    className="group block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 cat-tag">{p.category}</span>
                    </div>
                    <h4 className="mt-3 font-display text-lg font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-ink-soft">
                      {formatDate(p.date)}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </article>

          <Sidebar />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ShareBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="grid h-8 w-8 place-items-center border border-rule text-ink-soft transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground">
      {icon}
    </button>
  );
}

function SharePill({ label }: { label: string }) {
  return (
    <button className="bg-brand px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-foreground transition-opacity hover:opacity-90">
      {label}
    </button>
  );
}
