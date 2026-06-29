import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CATEGORIES, posts, postsByCategory, formatDate } from "@/lib/posts";
import { FileText, Folder, BookOpen, Scale } from "lucide-react";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "Mapa do Site — Fatos Políticos" },
      {
        name: "description",
        content:
          "Índice completo do Fatos Políticos: páginas institucionais, categorias editoriais e todos os artigos publicados.",
      },
      { property: "og:title", content: "Mapa do Site — Fatos Políticos" },
      {
        property: "og:description",
        content: "Navegue por toda a estrutura do blog em uma única página.",
      },
    ],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <Breadcrumbs items={[{ label: "Mapa do Site" }]} />
          <h1 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
            Mapa do <span className="text-brand">Site</span>
          </h1>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            Visão completa de todas as páginas, categorias e artigos publicados no Fatos Políticos.
            Use este índice para encontrar rapidamente qualquer conteúdo do blog.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <Block icon={<BookOpen className="h-4 w-4" />} title="Institucional">
            <LinkRow to="/" label="Home" />
            <LinkRow to="/sobre" label="Sobre Nós" />
            <LinkRow to="/contato" label="Contato" />
            <LinkRow to="/sitemap" label="Mapa do Site" />
          </Block>

          <Block icon={<Scale className="h-4 w-4" />} title="Políticas e Termos">
            <LinkRow to="/termos-de-uso" label="Termos de Uso" />
            <LinkRow to="/politica-de-privacidade" label="Política de Privacidade" />
            <LinkRow to="/politica-de-cookies" label="Política de Cookies" />
          </Block>
        </div>

        <div className="mt-14">
          <h2 className="section-title section-title-bar">Categorias</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => {
              const list = postsByCategory(c.slug);
              return (
                <div key={c.slug} className="border border-rule bg-surface p-5">
                  <div className="flex items-center justify-between border-b border-rule pb-3">
                    <Link
                      to="/categoria/$slug"
                      params={{ slug: c.slug }}
                      className="flex items-center gap-2 font-display text-lg font-bold text-ink hover:text-brand"
                    >
                      <Folder className="h-4 w-4 text-brand" />
                      {c.name}
                    </Link>
                    <span className="cat-tag">{list.length}</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">{c.description}</p>
                  <ul className="mt-4 space-y-2">
                    {list.map((p) => (
                      <li key={p.slug} className="flex items-start gap-2 text-sm">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rotate-45 bg-brand" />
                        <Link
                          to="/posts/$slug"
                          params={{ slug: p.slug }}
                          className="leading-snug text-ink transition-colors hover:text-brand"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14">
          <h2 className="section-title section-title-bar">Todos os artigos ({posts.length})</h2>
          <div className="divide-y divide-rule border-y border-rule">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/posts/$slug"
                params={{ slug: p.slug }}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 px-2 py-3 transition-colors hover:bg-surface-alt"
              >
                <FileText className="h-3.5 w-3.5 text-brand" />
                <span className="font-medium text-ink group-hover:text-brand">{p.title}</span>
                <span className="hidden text-[11px] uppercase tracking-[0.12em] text-ink-soft sm:inline">
                  {p.category} · {formatDate(p.date)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-rule bg-surface p-6">
      <h2 className="flex items-center gap-2 border-b border-rule pb-3 font-display text-xl font-bold text-ink">
        <span className="grid h-7 w-7 place-items-center bg-brand text-brand-foreground">
          {icon}
        </span>
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function LinkRow({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link to={to as never} className="flex items-center gap-2 text-[15px] text-ink hover:text-brand">
        <span className="text-brand">›</span> {label}
      </Link>
    </li>
  );
}
