import { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Link } from "@tanstack/react-router";
import { FileText, ShieldCheck, Cookie, Mail } from "lucide-react";

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <Breadcrumbs items={[{ label: eyebrow }]} />
          <p className="mt-4 eyebrow">{eyebrow}</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-ink md:text-5xl">{title}</h1>
          <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            Última atualização: {updated}
          </p>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-ink-soft">{intro}</p>
        </div>
      </div>

      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          <article className="article-body max-w-none text-[16px] leading-[1.78] text-ink/90">
            {children}
          </article>
          <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            <div className="border border-rule bg-surface p-5">
              <h3 className="border-b border-rule pb-2 font-display text-base font-bold text-ink">
                Documentos legais
              </h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                <LegalLink to="/termos-de-uso" icon={<FileText className="h-3.5 w-3.5" />}>
                  Termos de Uso
                </LegalLink>
                <LegalLink
                  to="/politica-de-privacidade"
                  icon={<ShieldCheck className="h-3.5 w-3.5" />}
                >
                  Política de Privacidade
                </LegalLink>
                <LegalLink to="/politica-de-cookies" icon={<Cookie className="h-3.5 w-3.5" />}>
                  Política de Cookies
                </LegalLink>
              </ul>
            </div>
            <div className="border-l-4 border-brand bg-surface-alt p-5">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand">
                <Mail className="h-3.5 w-3.5" /> Dúvidas legais
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                Para questões jurídicas, exercício de direitos LGPD ou solicitações de remoção,
                escreva para{" "}
                <a
                  href="mailto:juridico@fatospoliticos.com.br"
                  className="font-semibold text-brand underline"
                >
                  juridico@fatospoliticos.com.br
                </a>
                .
              </p>
              <Link
                to="/contato"
                className="mt-3 inline-block text-xs font-bold uppercase tracking-[0.14em] text-brand hover:text-brand-dark"
              >
                Fale conosco →
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function LegalLink({
  to,
  icon,
  children,
}: {
  to: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        to={to as never}
        className="flex items-center gap-2 text-ink-soft transition-colors hover:text-brand"
      >
        <span className="text-brand">{icon}</span>
        {children}
      </Link>
    </li>
  );
}
