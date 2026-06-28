import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChevronRight, ShieldCheck, Scale, FileSearch, Database, BarChart3, BookOpen } from "lucide-react";
import { CATEGORIES } from "@/lib/posts";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Fatos Políticos" },
      {
        name: "description",
        content:
          "Fact-checking político e análise de dados públicos sem opinião. Referência neutra para verificar declarações, gastos públicos e votações no Congresso.",
      },
      { property: "og:title", content: "Sobre o Fatos Políticos" },
      {
        property: "og:description",
        content:
          "Quem somos, nossa metodologia, fontes oficiais e compromisso com a neutralidade.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <nav className="flex items-center gap-2 text-xs text-ink-soft">
            <Link to="/" className="hover:text-brand">Home</Link>
            <ChevronRight className="h-3 w-3 text-brand" />
            <span className="uppercase tracking-[0.12em] text-brand">Sobre</span>
          </nav>
          <h1 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
            Dados, fontes e fatos. <span className="text-brand">Sem opinião.</span>
          </h1>
          <p className="mt-4 max-w-3xl text-[16px] leading-relaxed text-ink-soft">
            O <strong className="text-ink">Fatos Políticos</strong> é um blog independente de
            fact-checking político e análise de dados públicos. Existimos para um único
            propósito: dar ao eleitor brasileiro uma referência neutra, factual e auditável
            sobre o que os políticos dizem, como o dinheiro público é gasto e como o Congresso vota.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            <Block title="Nossa missão" eyebrow="Manifesto">
              <p>
                Acreditamos que cidadãos bem informados não precisam de opinião alheia — precisam de
                <strong className="text-ink"> dados verificáveis</strong>. Nossa missão é traduzir
                relatórios do TCU, planilhas do SIAFI, prestações de contas do TSE e votações da
                Câmara e do Senado em conteúdo claro, didático e <em>linkável diretamente à fonte oficial</em>.
              </p>
              <p>
                Não escrevemos sobre quem é "bom" ou "ruim". Escrevemos sobre
                <span className="text-brand"> quanto foi gasto</span>,
                <span className="text-brand"> como foi votado</span> e
                <span className="text-brand"> de onde vieram os recursos</span>.
              </p>
            </Block>

            <div className="grid gap-4 sm:grid-cols-3">
              <Pillar
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Neutralidade"
                text="Zero filiação partidária. Zero análise opinativa. Apenas dados primários."
              />
              <Pillar
                icon={<FileSearch className="h-5 w-5" />}
                title="Rastreabilidade"
                text="Cada número leva ao documento oficial: SIAFI, TCU, TSE, Portal da Transparência."
              />
              <Pillar
                icon={<Scale className="h-5 w-5" />}
                title="Equilíbrio"
                text="Mesma régua para todos os governos, partidos e parlamentares — sem exceção."
              />
            </div>

            <Block title="O que cobrimos" eyebrow="Editorial">
              <p>Nosso foco editorial está em três eixos que afetam diretamente o bolso e a vida do cidadão:</p>
              <ul>
                <li>
                  <strong>Finanças públicas explicadas:</strong> como o Orçamento Federal 2026 afeta o
                  imposto de renda, dívida pública, déficit primário, despesas obrigatórias vs.
                  discricionárias e subsídios setoriais.
                </li>
                <li>
                  <strong>Compliance eleitoral:</strong> o que candidatos e partidos podem (e não podem)
                  receber, prestação de contas no TSE, financiamento de campanha legal e prazos do
                  calendário eleitoral.
                </li>
                <li>
                  <strong>Guias práticos de transparência:</strong> passo a passo para consultar gastos
                  de deputados, licitações federais, cartão corporativo, SIGA Brasil e SIAFI.
                </li>
              </ul>
            </Block>

            <Block title="Nossas fontes" eyebrow="Metodologia">
              <p>
                Todo dado publicado aqui é extraído diretamente de portais oficiais e órgãos de controle.
                Não usamos boatos, não usamos vazamentos, não usamos releases partidários.
              </p>
              <div className="not-prose mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  ["TCU", "Tribunal de Contas da União — auditorias e fiscalização"],
                  ["Tesouro Nacional", "Dívida pública, resultado primário, SIAFI"],
                  ["TSE", "Prestações de contas eleitorais, candidaturas e doações"],
                  ["Câmara & Senado", "Votações nominais, emendas e tramitação"],
                  ["Portal da Transparência", "CGU — gastos, convênios e cartão corporativo"],
                  ["SIGA Brasil", "Execução orçamentária em tempo real"],
                ].map(([n, d]) => (
                  <div key={n} className="border border-rule p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand">{n}</p>
                    <p className="mt-1.5 text-sm text-ink-soft">{d}</p>
                  </div>
                ))}
              </div>
            </Block>

            <Block title="O que não fazemos" eyebrow="Compromisso">
              <ul>
                <li>Não endossamos candidatos, partidos ou governos.</li>
                <li>Não publicamos análises de "intenção" ou de "caráter" de políticos.</li>
                <li>Não cobrimos polêmicas diárias de bastidor político sem dado público envolvido.</li>
                <li>Não aceitamos publi-editoriais com posicionamento ideológico.</li>
              </ul>
            </Block>

            <div className="border border-brand bg-surface-alt p-8">
              <p className="eyebrow">Próximo passo</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink">
                Tem uma dúvida sobre dados públicos?
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Sugira uma pauta ou peça uma checagem. Respondemos com dados, não com opinião.
              </p>
              <Link
                to="/contato"
                className="mt-4 inline-block bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground hover:bg-brand-dark"
              >
                Falar conosco
              </Link>
            </div>
          </article>

          <aside className="space-y-8">
            <div className="bg-topbar p-6 text-topbar-foreground">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">Em números</p>
              <h4 className="mt-2 font-display text-xl font-bold text-white">Compromisso editorial</h4>
              <ul className="mt-5 space-y-4">
                <Stat n="100%" l="dos artigos com fonte oficial linkada" />
                <Stat n="0" l="filiação partidária ou política" />
                <Stat n="6+" l="portais oficiais consultados por matéria" />
              </ul>
            </div>

            <div>
              <h3 className="section-title section-title-bar">Categorias</h3>
              <ul className="space-y-0">
                {CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to="/categoria/$slug"
                      params={{ slug: c.slug }}
                      className="group flex items-center justify-between border-b border-rule py-3 text-sm text-ink transition-colors hover:text-brand"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-brand">›</span>
                        {c.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Pillar
              icon={<Database className="h-5 w-5" />}
              title="Dados abertos"
              text="Defendemos a Lei de Acesso à Informação (12.527/2011) e o uso de dados abertos como base democrática."
            />
            <Pillar
              icon={<BarChart3 className="h-5 w-5" />}
              title="Visualização honesta"
              text="Gráficos sempre com eixo zero, escala consistente e contexto temporal claro."
            />
            <Pillar
              icon={<BookOpen className="h-5 w-5" />}
              title="Linguagem acessível"
              text="Termos técnicos sempre explicados — sem jargão jurídico ou econômico vazio."
            />
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Block({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-2 font-display text-3xl font-bold text-ink">{title}</h2>
      <div className="article-body mt-4 text-[16px] leading-[1.75] text-ink/90">{children}</div>
    </section>
  );
}

function Pillar({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-rule bg-background p-5">
      <div className="grid h-10 w-10 place-items-center bg-brand text-brand-foreground">{icon}</div>
      <h3 className="mt-3 font-display text-lg font-bold text-ink">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <li className="border-t border-white/10 pt-4 first:border-0 first:pt-0">
      <p className="font-display text-3xl font-black text-brand">{n}</p>
      <p className="mt-1 text-xs text-white/75">{l}</p>
    </li>
  );
}
