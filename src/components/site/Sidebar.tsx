import { PostCard } from "./PostCard";
import { posts } from "@/lib/posts";
import { Link } from "@tanstack/react-router";

const categories = [
  { name: "Transparência", count: 14 },
  { name: "Orçamento", count: 9 },
  { name: "Checagem", count: 7 },
  { name: "Compliance", count: 5 },
  { name: "Eleitoral", count: 4 },
];

export function Sidebar() {
  return (
    <aside className="space-y-10">
      <AdBox />

      <div>
        <h3 className="section-title section-title-bar">Mais Lidas</h3>
        <div className="space-y-4">
          {posts.slice(0, 4).map((p) => (
            <PostCard key={p.slug} post={p} variant="list" />
          ))}
        </div>
      </div>

      <div>
        <h3 className="section-title section-title-bar">Categorias</h3>
        <ul className="space-y-0">
          {categories.map((c) => (
            <li key={c.name}>
              <Link
                to="/"
                className="group flex items-center justify-between border-b border-rule py-3 text-sm text-ink transition-colors hover:text-brand"
              >
                <span className="flex items-center gap-2">
                  <span className="text-brand">›</span>
                  {c.name}
                </span>
                <span className="text-xs text-ink-soft group-hover:text-brand">({c.count})</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <NewsletterBox />

      <div>
        <h3 className="section-title section-title-bar">Top Ranking</h3>
        <div className="space-y-3">
          {posts.slice(6, 11).map((p, i) => (
            <Link
              key={p.slug}
              to="/posts/$slug"
              params={{ slug: p.slug }}
              className="group flex items-start gap-4 border-b border-rule pb-3 last:border-0"
            >
              <span className="font-display text-3xl font-black leading-none text-brand/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="line-clamp-2 text-[13px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                  {p.title}
                </h4>
                <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-ink-soft">{formatDate(p.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function NewsletterBox({ id }: { id?: string }) {
  return (
    <div id={id} className="bg-topbar p-6 text-topbar-foreground">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Assine</p>
      <h4 className="mt-2 font-display text-xl font-bold text-white">
        Receba os fatos no seu e-mail
      </h4>
      <p className="mt-2 text-xs leading-relaxed text-topbar-foreground/80">
        Análises factuais de dados públicos toda semana. Zero opinião, zero spam.
      </p>
      <form className="mt-4 space-y-2">
        <input
          type="email"
          required
          placeholder="Seu melhor e-mail"
          className="w-full border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:border-brand"
        />
        <button
          type="submit"
          className="w-full bg-brand py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground transition-colors hover:bg-brand-dark"
        >
          Assinar Newsletter
        </button>
      </form>
    </div>
  );
}

function AdBox() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-topbar to-brand-dark">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative flex h-full flex-col justify-between p-6 text-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">Publicidade</p>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-foreground/90">
            Anuncie aqui
          </p>
          <h4 className="mt-2 font-display text-2xl font-bold leading-tight">
            Sua marca para o público que decide.
          </h4>
          <p className="mt-2 text-xs text-white/75">Espaço 300×400</p>
          <button className="mt-4 bg-brand px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em]">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
}
