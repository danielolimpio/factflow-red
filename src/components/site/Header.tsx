import { Link } from "@tanstack/react-router";
import { Search, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { TopBar } from "./TopBar";

const nav = [
  { label: "Home", to: "/" },
  { label: "Transparência", to: "/" },
  { label: "Orçamento", to: "/" },
  { label: "Checagem", to: "/" },
  { label: "Compliance", to: "/" },
  { label: "Guias", to: "/" },
];

export function Header() {
  return (
    <header className="border-b border-rule bg-background">
      <TopBar />
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-6 py-6">
        <Link to="/" className="flex items-baseline gap-1">
          <span className="font-display text-[34px] font-black leading-none tracking-tight text-ink">
            FATOS
          </span>
          <span className="font-display text-[34px] font-black leading-none tracking-tight text-brand">
            POLÍTICOS
          </span>
          <span className="ml-1 inline-block h-2 w-2 translate-y-[-12px] rounded-full bg-brand" />
        </Link>
        <div className="hidden flex-1 items-center justify-end gap-6 lg:flex">
          <div className="flex items-center gap-3 text-ink-soft">
            <a href="#" aria-label="Facebook" className="hover:text-brand"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-brand"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-brand"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Youtube" className="hover:text-brand"><Youtube className="h-4 w-4" /></a>
          </div>
          <span className="h-5 w-px bg-rule" />
          <button aria-label="Buscar" className="text-ink-soft hover:text-brand">
            <Search className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
      <nav className="border-y border-rule bg-background">
        <div className="mx-auto flex max-w-[1280px] items-center gap-1 px-6">
          {nav.map((item, idx) => (
            <Link
              key={item.label}
              to={item.to}
              className={`px-4 py-4 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors hover:text-brand ${
                idx === 0 ? "text-brand" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-auto hidden items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-ink-soft md:flex">
            <span className="cat-tag">Última hora</span>
            <span className="truncate text-ink">
              Como Consultar Gastos do Seu Deputado no Portal da Transparência
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
