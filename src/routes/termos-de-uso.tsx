import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Fatos Políticos" },
      {
        name: "description",
        content:
          "Termos e Condições de Uso do Fatos Políticos: regras, responsabilidades, propriedade intelectual e limitações de responsabilidade.",
      },
      { property: "og:title", content: "Termos de Uso — Fatos Políticos" },
      {
        property: "og:description",
        content:
          "Leia os Termos de Uso que regem o acesso e a utilização do blog Fatos Políticos.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Termos de Uso"
      title={
        <>
          Termos e Condições <span className="text-brand">de Uso</span>
        </>
      }
      updated="28 de junho, 2026"
      intro="Este documento estabelece as regras que regem o acesso, a navegação e a utilização do blog Fatos Políticos. Ao acessar qualquer página deste site, você declara ter lido, compreendido e concordado integralmente com as condições abaixo."
    >
      <h2>1. Aceitação dos Termos</h2>
      <p>
        O uso do site <strong>fatospoliticos.com.br</strong> (doravante "Site", "Blog" ou
        "Fatos Políticos") está condicionado à aceitação integral e sem reservas dos presentes
        Termos de Uso, da Política de Privacidade e da Política de Cookies. Caso você não
        concorde com qualquer disposição aqui prevista, deverá interromper imediatamente o
        acesso ao Site.
      </p>
      <p>
        A continuidade da navegação após a publicação de eventuais atualizações destes Termos
        implica concordância tácita com a nova versão. Recomenda-se a consulta periódica a esta
        página, em especial à data indicada como "Última atualização".
      </p>

      <h2>2. Natureza editorial e finalidade do conteúdo</h2>
      <p>
        O Fatos Políticos é um blog independente dedicado ao <strong>fact-checking político
        e à análise de dados públicos</strong>, com foco em finanças públicas, transparência
        governamental, compliance eleitoral e fiscalização do Tribunal de Contas da União (TCU),
        Tribunal Superior Eleitoral (TSE), Controladoria-Geral da União (CGU) e demais órgãos
        oficiais de controle.
      </p>
      <p>
        Todo o conteúdo publicado tem caráter <strong>estritamente informativo e educacional</strong>,
        baseado em fontes públicas, oficiais e auditáveis. O Site <strong>não emite opinião
        partidária</strong>, não realiza campanha eleitoral, não recomenda voto e não substitui
        consultoria jurídica, contábil, financeira ou tributária especializada.
      </p>

      <h3>2.1 Limites do fact-checking</h3>
      <p>
        Embora nossa metodologia priorize fontes primárias (SIAFI, SIGA Brasil, Portal da
        Transparência, Diário Oficial, acórdãos do TCU, prestações de contas do TSE), o usuário
        reconhece que:
      </p>
      <ul>
        <li>Dados públicos podem ser atualizados, retificados ou removidos pelos órgãos oficiais após a publicação dos artigos;</li>
        <li>Interpretações técnicas podem evoluir conforme novas auditorias e decisões judiciais sejam publicadas;</li>
        <li>O Site não se responsabiliza por decisões tomadas com base exclusiva no conteúdo aqui publicado.</li>
      </ul>

      <h2>3. Cadastro, newsletter e contato</h2>
      <p>
        Algumas funcionalidades — como a newsletter, o formulário de contato e alertas
        temáticos — exigem o fornecimento de dados pessoais como nome e endereço de e-mail. Ao
        fornecê-los, o usuário declara que:
      </p>
      <ul>
        <li>As informações são verdadeiras, atuais e de sua titularidade;</li>
        <li>Possui plena capacidade civil (ou autorização do responsável legal, se menor de 18 anos);</li>
        <li>Autoriza o tratamento dos dados conforme a <a href="/politica-de-privacidade">Política de Privacidade</a>;</li>
        <li>Pode solicitar o descadastramento a qualquer momento, sem qualquer ônus.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo original do Fatos Políticos — incluindo textos, infográficos, tabelas
        comparativas, análises, marca, logotipo, layout, código-fonte, identidade visual e
        elementos gráficos — é protegido pela <strong>Lei nº 9.610/1998 (Lei de Direitos
        Autorais)</strong> e pela <strong>Lei nº 9.279/1996 (Lei de Propriedade Industrial)</strong>.
      </p>
      <p>
        É <strong>permitido</strong>, sem necessidade de autorização prévia:
      </p>
      <ul>
        <li>Compartilhar links diretos para os artigos em redes sociais, mensageiros e e-mails;</li>
        <li>Citar trechos curtos com indicação expressa da fonte e link para o artigo original;</li>
        <li>Utilizar dados oficiais reproduzidos no Site, desde que reportados à fonte primária (TCU, TSE, SIAFI etc.).</li>
      </ul>
      <p>É <strong>vedado</strong>, sob pena das sanções civis e penais cabíveis:</p>
      <ul>
        <li>Reproduzir artigos na íntegra em outros sites, blogs, agregadores ou aplicativos sem autorização escrita;</li>
        <li>Utilizar o conteúdo para fins comerciais, publicitários ou de treinamento de modelos de IA generativa sem licença específica;</li>
        <li>Remover marcas d'água, créditos autorais ou metadados das publicações;</li>
        <li>Criar obras derivadas que possam confundir o público quanto à autoria.</li>
      </ul>

      <h2>5. Conduta do usuário</h2>
      <p>
        Ao interagir com o Site (comentários, formulários, sugestão de pauta, e-mails), o
        usuário compromete-se a não:
      </p>
      <ul>
        <li>Publicar conteúdo ilegal, difamatório, calunioso, injurioso, racista, discriminatório ou que incite violência;</li>
        <li>Divulgar dados pessoais de terceiros sem consentimento (doxxing);</li>
        <li>Praticar spam, phishing, engenharia social ou qualquer forma de fraude;</li>
        <li>Utilizar bots, scrapers automatizados ou ferramentas que sobrecarreguem a infraestrutura;</li>
        <li>Tentar acessar áreas restritas, manipular o banco de dados ou explorar vulnerabilidades.</li>
      </ul>
      <p>
        Reservamo-nos o direito de moderar, remover ou denunciar às autoridades qualquer
        conteúdo ou comportamento que viole estas regras, independentemente de notificação prévia.
      </p>

      <h2>6. Links externos e conteúdo de terceiros</h2>
      <p>
        O Site contém, com frequência, links para fontes oficiais (gov.br, tcu.gov.br, tse.jus.br,
        camara.leg.br, senado.leg.br, portaltransparencia.gov.br, entre outros) e eventualmente
        para veículos de imprensa e estudos acadêmicos. <strong>O Fatos Políticos não controla,
        endossa nem se responsabiliza</strong> pelo conteúdo, pelas políticas de privacidade ou
        pela disponibilidade desses sites de terceiros. A navegação por esses links ocorre por
        conta e risco exclusivo do usuário.
      </p>

      <h2>7. Publicidade e parcerias comerciais</h2>
      <p>
        O Site pode exibir anúncios programáticos (Google AdSense, redes display) e conteúdos
        patrocinados claramente identificados. Toda parceria comercial respeita os princípios
        editoriais do blog: <strong>nenhum anunciante interfere na linha editorial, na escolha
        de pautas ou no resultado das checagens</strong>. Conteúdo patrocinado é sempre marcado
        com o selo "Publicidade", "Patrocinado" ou "Conteúdo de marca".
      </p>

      <h2>8. Limitação de responsabilidade</h2>
      <p>
        Na máxima extensão permitida pela legislação brasileira, o Fatos Políticos, seus
        autores, colaboradores e responsáveis técnicos <strong>não respondem</strong> por:
      </p>
      <ul>
        <li>Indisponibilidades temporárias do Site decorrentes de manutenção, falhas de hospedagem ou ataques cibernéticos;</li>
        <li>Decisões financeiras, jurídicas, eleitorais ou políticas tomadas pelo usuário com base no conteúdo publicado;</li>
        <li>Danos indiretos, lucros cessantes ou perdas patrimoniais derivadas do uso do Site;</li>
        <li>Conteúdo gerado por usuários em comentários ou redes sociais vinculadas ao blog.</li>
      </ul>

      <h2>9. Alterações dos Termos</h2>
      <p>
        Estes Termos podem ser revisados a qualquer tempo, especialmente em razão de mudanças
        legislativas, adoção de novas tecnologias ou ajustes editoriais. A versão vigente será
        sempre a publicada nesta página, identificada pela data de "Última atualização" no
        cabeçalho.
      </p>

      <h2>10. Legislação aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil, em especial pelo
        <strong> Marco Civil da Internet (Lei nº 12.965/2014)</strong>, pela <strong>Lei Geral
        de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</strong> e pelo <strong>Código de
        Defesa do Consumidor (Lei nº 8.078/1990)</strong>, no que couber. Fica eleito o foro da
        Comarca da sede do responsável pelo Site para dirimir quaisquer controvérsias, com
        renúncia expressa a qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>11. Contato</h2>
      <p>
        Dúvidas, sugestões ou solicitações relativas a estes Termos podem ser encaminhadas
        para <a href="mailto:juridico@fatospoliticos.com.br">juridico@fatospoliticos.com.br</a>{" "}
        ou pelo formulário disponível em <a href="/contato">/contato</a>.
      </p>
    </LegalPage>
  );
}
