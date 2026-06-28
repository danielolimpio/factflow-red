import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PostCard } from "@/components/site/PostCard";
import { Sidebar, NewsletterBox } from "@/components/site/Sidebar";
import {
  posts,
  featured,
  recent,
  recommended,
  highlights,
  editorsPicks,, formatDate } from "@/lib/posts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fatos Políticos — Dados públicos, análise factual do Brasil" },
      {
        name: "description",
        content:
          "Verificação independente de dados oficiais sobre orçamento, gastos parlamentares, eleições e contas públicas. Fontes: TCU, Tesouro, TSE e Portal da Transparência.",
      },
      { property: "og:title", content: "Fatos Políticos" },
      {
        property: "og:description",
        content: "Análise factual de dados públicos do Brasil.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO: featured + stories list */}
      <section className="mx-auto max-w-[1280px] px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <PostCard post={featured} variant="hero" />
            <div className="grid grid-rows-2 gap-6">
              {recent.slice(0, 2).map((p) => (
                <PostCard key={p.slug} post={p} variant="stack" />
              ))}
            </div>
          </div>

          {/* Top Stories sidebar */}
          <div>
            <h3 className="section-title section-title-bar">Top Stories</h3>
            <div className="space-y-5">
              {posts.slice(1, 6).map((p) => (
                <Link
                  key={p.slug}
                  to="/posts/$slug"
                  params={{ slug: p.slug }}
                  className="group flex items-start gap-4 border-b border-rule pb-4 last:border-0"
                >
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="cat-link">{p.category}</p>
                    <h4 className="mt-1 line-clamp-2 font-display text-[15px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-ink-soft">
                      {formatDate(p.date)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ad strip */}
      <section className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col items-center justify-between gap-4 border border-rule bg-surface-alt px-6 py-5 sm:flex-row">
          <div>
            <p className="eyebrow">Espaço Publicitário</p>
            <p className="mt-1 font-display text-xl font-bold text-ink">
              Conecte sua marca ao público que verifica os fatos.
            </p>
          </div>
          <button className="bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand-dark">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* TRANSPARÊNCIA */}
      <CategoryBlock
        title="Transparência"
        lead={posts.find((p) => p.categorySlug === "transparencia")!}
        side={posts.filter((p) => p.categorySlug === "transparencia").slice(1, 4)}
      />

      {/* TODAY'S HOT SPOT — 3 cards row */}
      <section className="mx-auto max-w-[1280px] px-6 pt-14">
        <h3 className="section-title section-title-bar">Em Destaque Hoje</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.slice(2, 5).map((p) => (
            <PostCard key={p.slug} post={p} variant="stack" />
          ))}
        </div>
      </section>

      {/* Editors' Picks band */}
      <section className="mt-16 bg-surface-alt py-14">
        <div className="mx-auto max-w-[1280px] px-6">
          <h3 className="section-title section-title-bar">Escolhas do Editor</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {editorsPicks.map((p) => (
              <PostCard key={p.slug} post={p} variant="stack" />
            ))}
          </div>
        </div>
      </section>

      {/* World Top News + Sidebar */}
      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <h3 className="section-title section-title-bar">Mais Lidas da Semana</h3>
            <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
              <PostCard post={posts[6]} variant="hero" />
              <div className="space-y-5">
                {posts.slice(7, 11).map((p) => (
                  <Link
                    key={p.slug}
                    to="/posts/$slug"
                    params={{ slug: p.slug }}
                    className="group flex items-start gap-3 border-b border-rule pb-4 last:border-0"
                  >
                    <div className="relative h-[68px] w-[88px] shrink-0 overflow-hidden">
                      <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="cat-link">{p.category}</p>
                      <h4 className="mt-1 line-clamp-2 text-[13px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </section>

      {/* Recomendados grid */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16">
        <h3 className="section-title section-title-bar">Recomendados para Você</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recommended.slice(0, 4).map((p) => (
            <PostCard key={p.slug} post={p} variant="grid" />
          ))}
        </div>
      </section>

      {/* Newsletter band */}
      <section className="bg-surface-alt py-14">
        <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-6 md:grid-cols-2">
          <div>
            <p className="eyebrow">Newsletter Semanal</p>
            <h3 className="mt-2 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
              Os dados que a imprensa
              <br />
              <span className="text-brand">não tem tempo de explicar.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Toda quinta, uma análise de dados públicos com fontes e metodologia. Sem opinião,
              sem polarização.
            </p>
          </div>
          <NewsletterBox id="newsletter" />
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CategoryBlock({
  title,
  lead,
  side,
}: {
  title: string;
  lead: import("@/lib/posts").Post;
  side: import("@/lib/posts").Post[];
}) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-14">
      <h3 className="section-title section-title-bar">{title}</h3>
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <Link to="/posts/$slug" params={{ slug: lead.slug }} className="group block">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={lead.image}
              alt={lead.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 cat-tag">{lead.category}</span>
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-ink transition-colors group-hover:text-brand">
            {lead.title}
          </h2>
          <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-ink-soft">
            {lead.date} · por {lead.author}
          </p>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">
            {lead.excerpt}
          </p>
          <span className="mt-4 inline-block border border-brand px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
            Leia mais
          </span>
        </Link>
        <div className="space-y-5">
          {side.map((p) => (
            <Link
              key={p.slug}
              to="/posts/$slug"
              params={{ slug: p.slug }}
              className="group flex gap-4 border-b border-rule pb-5 last:border-0"
            >
              <div className="relative h-[96px] w-[120px] shrink-0 overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="cat-link">{p.category}</p>
                <h4 className="mt-1.5 line-clamp-3 font-display text-[16px] font-bold leading-snug text-ink transition-colors group-hover:text-brand">
                  {p.title}
                </h4>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.1em] text-ink-soft">
                  {formatDate(p.date)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
