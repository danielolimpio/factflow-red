import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Fatos Políticos" },
      {
        name: "description",
        content:
          "Política de Cookies do Fatos Políticos: tipos de cookies utilizados, finalidades, prazos e como gerenciar suas preferências no navegador.",
      },
      { property: "og:title", content: "Política de Cookies — Fatos Políticos" },
      {
        property: "og:description",
        content:
          "Saiba quais cookies usamos, por que usamos e como você pode controlar ou desativar cada categoria.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Política de Cookies"
      title={
        <>
          Como usamos <span className="text-brand">cookies</span>
        </>
      }
      updated="28 de junho, 2026"
      intro="Esta Política explica o que são cookies, quais utilizamos no Fatos Políticos, com que finalidade e como você pode aceitá-los, recusá-los ou removê-los a qualquer momento."
    >
      <h2>1. O que são cookies</h2>
      <p>
        <strong>Cookies</strong> são pequenos arquivos de texto armazenados no seu dispositivo
        (computador, tablet ou smartphone) quando você acessa um site. Eles permitem reconhecer
        o navegador entre visitas, lembrar preferências, medir audiência e habilitar
        funcionalidades essenciais.
      </p>
      <p>
        Além dos cookies tradicionais, o Site pode utilizar tecnologias similares — como{" "}
        <em>localStorage</em>, <em>sessionStorage</em>, <em>pixels</em> de rastreamento e{" "}
        <em>tags</em> JavaScript — que cumprem funções análogas e estão igualmente cobertas por
        esta Política.
      </p>

      <h2>2. Categorias de cookies utilizadas</h2>

      <h3>2.1 Estritamente necessários</h3>
      <p>
        Indispensáveis ao funcionamento básico do Site. Sem eles, recursos como navegação entre
        páginas, envio de formulários e armazenamento das suas preferências de privacidade não
        funcionariam.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Finalidade</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>fp_session</code></td>
              <td>Manter a sessão do visitante durante a navegação</td>
              <td>Sessão</td>
            </tr>
            <tr>
              <td><code>fp_consent</code></td>
              <td>Armazenar suas preferências de consentimento</td>
              <td>12 meses</td>
            </tr>
            <tr>
              <td><code>fp_csrf</code></td>
              <td>Proteção contra ataques CSRF nos formulários</td>
              <td>Sessão</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Base legal:</strong> legítimo interesse — dispensam consentimento prévio (art. 7º, IX, da LGPD).</p>

      <h3>2.2 Desempenho e analytics</h3>
      <p>
        Coletam informações agregadas e anônimas sobre como os visitantes utilizam o Site —
        páginas mais lidas, tempo de permanência, fluxos de navegação — para que possamos
        aprimorar a experiência editorial.
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provedor</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>_ga</code>, <code>_ga_*</code></td>
              <td>Google Analytics 4 (IP anonimizado)</td>
              <td>14 meses</td>
            </tr>
            <tr>
              <td><code>_gid</code></td>
              <td>Google Analytics</td>
              <td>24 horas</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Base legal:</strong> consentimento (art. 7º, I, da LGPD).</p>

      <h3>2.3 Publicidade</h3>
      <p>
        Permitem a exibição de anúncios programáticos relevantes via Google AdSense e parceiros
        autorizados, além da medição de eficácia das campanhas. <strong>Só são ativados após
        consentimento explícito.</strong>
      </p>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Provedor</th>
              <th>Duração</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>__gads</code>, <code>__gpi</code></td>
              <td>Google AdSense</td>
              <td>13 meses</td>
            </tr>
            <tr>
              <td><code>IDE</code></td>
              <td>DoubleClick (Google)</td>
              <td>13 meses</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><strong>Base legal:</strong> consentimento (art. 7º, I, da LGPD).</p>

      <h3>2.4 Redes sociais</h3>
      <p>
        Quando você utiliza botões de compartilhamento (Facebook, X/Twitter, LinkedIn, WhatsApp)
        ou incorpora postagens dessas redes, elas podem definir seus próprios cookies, sujeitos
        às respectivas políticas de privacidade.
      </p>

      <h2>3. Como gerenciar suas preferências</h2>

      <h3>3.1 No banner de consentimento</h3>
      <p>
        Ao acessar o Site pela primeira vez, você visualiza um banner com as opções{" "}
        <strong>Aceitar todos</strong>, <strong>Apenas necessários</strong> e{" "}
        <strong>Personalizar</strong>. Sua escolha fica registrada por 12 meses ou até que você a revise.
      </p>

      <h3>3.2 Diretamente no navegador</h3>
      <p>
        Todos os navegadores modernos permitem bloquear, excluir ou ser notificado sobre o envio
        de cookies. Consulte as instruções oficiais:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" rel="noopener">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/pt-BR/kb/cookies-informacoes-sites-armazenam-no-computador" rel="noopener">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/pt-br/guide/safari/sfri11471/mac" rel="noopener">Safari (macOS)</a></li>
        <li><a href="https://support.microsoft.com/pt-br/microsoft-edge" rel="noopener">Microsoft Edge</a></li>
        <li><a href="https://help.opera.com/pt-br/latest/web-preferences/" rel="noopener">Opera</a></li>
      </ul>

      <h3>3.3 Em dispositivos móveis</h3>
      <p>
        Em smartphones e tablets, além das configurações do navegador, você pode redefinir o{" "}
        <strong>Identificador de Publicidade</strong> nas configurações do sistema (Android e iOS).
      </p>

      <h2>4. Consequências da recusa</h2>
      <p>
        A recusa de cookies <strong>não impede o acesso</strong> ao conteúdo editorial do Site.
        Contudo, algumas funcionalidades podem ficar limitadas — por exemplo: lembrança de
        preferências, métricas de leitura e exibição de anúncios personalizados.
      </p>

      <h2>5. Cookies de terceiros</h2>
      <p>
        Alguns cookies são definidos por domínios distintos de fatospoliticos.com.br
        (Google, plataformas de mídia social, redes de publicidade). Não temos controle sobre o
        armazenamento ou o acesso a esses cookies. Recomendamos a leitura das políticas dos
        respectivos terceiros para mais detalhes.
      </p>

      <h2>6. Atualizações desta Política</h2>
      <p>
        Esta Política pode ser revisada para refletir mudanças nos cookies utilizados, na
        legislação aplicável ou em novas funcionalidades. Sempre que houver alteração relevante,
        o banner de consentimento será reapresentado para nova manifestação do usuário.
      </p>

      <h2>7. Contato</h2>
      <p>
        Dúvidas sobre cookies ou sobre o tratamento dos seus dados podem ser encaminhadas para{" "}
        <a href="mailto:privacidade@fatospoliticos.com.br">privacidade@fatospoliticos.com.br</a>.
      </p>
    </LegalPage>
  );
}
