import { Facebook, Twitter, Instagram, Youtube, Clock } from "lucide-react";

export function TopBar() {
  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="bg-topbar text-topbar-foreground text-xs">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-2 opacity-90">
          <Clock className="h-3.5 w-3.5" />
          <span className="capitalize">{today}</span>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          <a href="/sobre" className="hover:text-brand transition-colors">Sobre</a>
          <span className="opacity-30">/</span>
          <a href="/contato" className="hover:text-brand transition-colors">Contato</a>
          <span className="opacity-30">/</span>
          <a href="/publicidade" className="hover:text-brand transition-colors">Publicidade</a>
          <a
            href="#newsletter"
            className="ml-3 bg-brand px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-brand-foreground"
          >
            ASSINAR NEWSLETTER
          </a>
        </div>
      </div>
    </div>
  );
}
