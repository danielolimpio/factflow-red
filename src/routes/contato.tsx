import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Mail, MessageSquare, Megaphone, ShieldAlert, Clock, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fatos Políticos" },
      {
        name: "description",
        content:
          "Sugira uma pauta, peça uma checagem de dados públicos ou fale com a equipe editorial do Fatos Políticos.",
      },
      { property: "og:title", content: "Contato — Fatos Políticos" },
      {
        property: "og:description",
        content: "Pautas, checagens, publicidade e parcerias.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="border-b border-rule bg-surface-alt">
        <div className="mx-auto max-w-[1280px] px-6 py-10">
          <Breadcrumbs items={[{ label: "Contato" }]} />
          <h1 className="mt-3 font-display text-4xl font-bold text-ink md:text-5xl">
            Fale com a <span className="text-brand">redação</span>.
          </h1>
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            Sugestões de pauta, pedidos de checagem, correções ou parcerias institucionais.
            Respondemos toda mensagem com dados de fontes oficiais — nunca com opinião.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-[1280px] px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">Formulário oficial</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              Envie sua mensagem
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              Para checagens, descreva a declaração exata e o link da fonte original. Quanto mais
              contexto, mais rápida a verificação.
            </p>

            <form className="mt-8 space-y-5 border border-rule bg-surface-alt p-6 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Nome completo" name="name" type="text" placeholder="Como devemos te chamar" />
                <Field label="E-mail" name="email" type="email" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                  Tipo de contato
                </label>
                <select className="mt-2 w-full border border-rule bg-background px-3 py-2.5 text-sm outline-none focus:border-brand">
                  <option>Sugestão de pauta</option>
                  <option>Pedido de checagem (fact-check)</option>
                  <option>Correção de dado publicado</option>
                  <option>Publicidade institucional</option>
                  <option>Parceria editorial</option>
                  <option>Imprensa</option>
                </select>
              </div>
              <Field label="Assunto" name="subject" type="text" placeholder="Resumo em uma linha" />
              <div>
                <label className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                  Mensagem
                </label>
                <textarea
                  rows={7}
                  placeholder="Descreva sua sugestão, declaração a verificar ou proposta. Inclua links oficiais quando possível."
                  className="mt-2 w-full border border-rule bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
                />
              </div>
              <label className="flex items-start gap-2 text-xs text-ink-soft">
                <input type="checkbox" className="mt-1 accent-[var(--brand)]" />
                Concordo que os dados enviados serão usados exclusivamente para resposta editorial,
                conforme a LGPD.
              </label>
              <button
                type="submit"
                className="bg-brand px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-foreground hover:bg-brand-dark"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <aside className="space-y-5">
            <Channel
              icon={<MessageSquare className="h-5 w-5" />}
              title="Pauta & Checagem"
              line="pauta@fatospoliticos.com.br"
              text="Sugira temas, declarações a checar ou dados públicos pouco discutidos."
            />
            <Channel
              icon={<ShieldAlert className="h-5 w-5" />}
              title="Correções"
              line="correcao@fatospoliticos.com.br"
              text="Encontrou um número impreciso? Corrigimos com transparência e nota pública."
            />
            <Channel
              icon={<Megaphone className="h-5 w-5" />}
              title="Publicidade"
              line="ads@fatospoliticos.com.br"
              text="Apenas anunciantes não-partidários. Não aceitamos publi com viés político."
            />
            <Channel
              icon={<Mail className="h-5 w-5" />}
              title="Imprensa & Parcerias"
              line="imprensa@fatospoliticos.com.br"
              text="Cessão de conteúdo, entrevistas e colaborações com veículos oficiais."
            />

            <div className="border border-rule bg-background p-5">
              <div className="flex items-center gap-2 text-brand">
                <Clock className="h-4 w-4" />
                <p className="text-[11px] font-bold uppercase tracking-[0.14em]">Tempo de resposta</p>
              </div>
              <p className="mt-2 text-sm text-ink-soft">
                Checagens: até <strong className="text-ink">72h úteis</strong>. Demais contatos: até
                <strong className="text-ink"> 5 dias úteis</strong>.
              </p>
            </div>

            <div className="border border-rule bg-background p-5">
              <div className="flex items-center gap-2 text-brand">
                <MapPin className="h-4 w-4" />
                <p className="text-[11px] font-bold uppercase tracking-[0.14em]">Atuação</p>
              </div>
              <p className="mt-2 text-sm text-ink-soft">
                Redação 100% remota com cobertura nacional. Foco em dados federais (Brasília) e
                estaduais quando há fonte oficial disponível.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border border-rule bg-background px-3 py-2.5 text-sm outline-none focus:border-brand"
      />
    </div>
  );
}

function Channel({
  icon,
  title,
  line,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  line: string;
  text: string;
}) {
  return (
    <div className="border border-rule bg-background p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center bg-brand text-brand-foreground">{icon}</div>
        <div>
          <p className="font-display text-base font-bold text-ink">{title}</p>
          <p className="text-[12px] text-brand">{line}</p>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}
