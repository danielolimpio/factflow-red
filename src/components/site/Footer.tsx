import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-rule bg-surface-alt">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-2xl font-black text-ink">FATOS</span>
            <span className="font-display text-2xl font-black text-brand">POLÍTICOS</span>
            <span className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-8px] rounded-full bg-brand" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Análise factual de dados públicos. Sem viés, sem opinião — apenas fontes oficiais:
            TCU, Tesouro Nacional, TSE, Câmara, Senado e Portal da Transparência.
          </p>
          <div className="mt-5 flex items-center gap-3 text-ink-soft">
            <a href="#" aria-label="Facebook" className="hover:text-brand"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-brand"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-brand"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Youtube" className="hover:text-brand"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>
        <FootCol
          title="Links Rápidos"
          items={["Sobre Nós", "Contato", "Publicidade", "Trabalhe Conosco", "Mapa do Site"]}
        />
        <FootCol
          title="Categorias"
          items={["Transparência", "Orçamento", "Checagem", "Compliance", "Eleitoral"]}
        />
        <div>
          <FooterTitle>Newsletter</FooterTitle>
          <p className="mt-4 text-sm text-ink-soft">
            Receba as análises mais recentes diretamente no seu e-mail.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="min-w-0 flex-1 border border-rule bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
            />
            <button className="bg-brand px-4 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground hover:bg-brand-dark">
              Assinar
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-rule bg-topbar text-topbar-foreground">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-6 py-4 text-xs md:flex-row">
          <p>© {new Date().getFullYear()} Fatos Políticos. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 opacity-80">
            <a href="#" className="hover:text-brand">Termos de Uso</a>
            <a href="#" className="hover:text-brand">Política de Privacidade</a>
            <a href="#" className="hover:text-brand">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative pb-3 font-display text-lg font-bold text-ink after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-10 after:bg-brand">
      {children}
    </h4>
  );
}

function FootCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <FooterTitle>{title}</FooterTitle>
      <ul className="mt-4 space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-ink-soft transition-colors hover:text-brand">
              <span className="mr-2 text-brand">›</span>
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
