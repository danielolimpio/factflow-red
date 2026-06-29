import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Fatos Políticos" },
      {
        name: "description",
        content:
          "Política de Privacidade do Fatos Políticos em conformidade com a LGPD: quais dados coletamos, como tratamos, com quem compartilhamos e como exercer seus direitos.",
      },
      { property: "og:title", content: "Política de Privacidade — Fatos Políticos" },
      {
        property: "og:description",
        content:
          "Tratamento de dados pessoais, finalidades, base legal e direitos do titular conforme a Lei nº 13.709/2018.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Política de Privacidade"
      title={
        <>
          Privacidade e <span className="text-brand">Proteção de Dados</span>
        </>
      }
      updated="28 de junho, 2026"
      intro="Esta Política descreve, de forma transparente, como o Fatos Políticos coleta, utiliza, armazena e protege os dados pessoais dos seus visitantes, em estrita conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), o Marco Civil da Internet e demais normas aplicáveis."
    >
      <h2>1. Controlador dos dados</h2>
      <p>
        Para os efeitos do art. 5º, VI, da LGPD, o <strong>controlador</strong> dos dados
        pessoais tratados neste Site é o responsável editorial do <strong>Fatos Políticos</strong>,
        cujo canal oficial de comunicação em matéria de proteção de dados é o e-mail{" "}
        <a href="mailto:privacidade@fatospoliticos.com.br">privacidade@fatospoliticos.com.br</a>.
      </p>

      <h2>2. Princípios que orientam o tratamento</h2>
      <p>Todo tratamento de dados realizado pelo Site observa os princípios do art. 6º da LGPD, em especial:</p>
      <ul>
        <li><strong>Finalidade</strong> — apenas para propósitos legítimos, específicos e informados ao titular;</li>
        <li><strong>Necessidade</strong> — coleta limitada ao mínimo necessário;</li>
        <li><strong>Transparência</strong> — informações claras sobre o que coletamos e por quê;</li>
        <li><strong>Segurança</strong> — medidas técnicas e administrativas para proteger os dados;</li>
        <li><strong>Não discriminação</strong> — vedação ao uso para fins discriminatórios ilícitos.</li>
      </ul>

      <h2>3. Dados que coletamos</h2>

      <h3>3.1 Dados fornecidos diretamente pelo usuário</h3>
      <ul>
        <li><strong>Newsletter</strong>: nome (opcional) e endereço de e-mail;</li>
        <li><strong>Formulário de contato</strong>: nome, e-mail, assunto e mensagem;</li>
        <li><strong>Sugestão de pauta ou checagem</strong>: além dos campos acima, eventuais anexos, links ou documentos enviados voluntariamente.</li>
      </ul>

      <h3>3.2 Dados coletados automaticamente</h3>
      <ul>
        <li>Endereço IP e dados aproximados de geolocalização (cidade/estado);</li>
        <li>Tipo e versão do navegador, sistema operacional e dispositivo;</li>
        <li>Páginas visitadas, tempo de permanência, origem do acesso (referrer) e termos de busca;</li>
        <li>Identificadores de cookies e tecnologias similares (ver <a href="/politica-de-cookies">Política de Cookies</a>).</li>
      </ul>

      <h3>3.3 Dados que NÃO coletamos</h3>
      <p>
        O Fatos Políticos <strong>não coleta dados sensíveis</strong> (origem racial, convicção
        religiosa, opinião política, filiação a sindicato, saúde, vida sexual, dado genético ou
        biométrico), <strong>não solicita CPF</strong>, <strong>não pede senhas bancárias</strong>{" "}
        e <strong>não realiza profiling político</strong> dos seus leitores.
      </p>

      <h2>4. Finalidades e bases legais</h2>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Finalidade</th>
              <th>Dados utilizados</th>
              <th>Base legal (LGPD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Envio da newsletter e alertas temáticos</td>
              <td>Nome e e-mail</td>
              <td>Consentimento (art. 7º, I)</td>
            </tr>
            <tr>
              <td>Responder mensagens enviadas pelo formulário</td>
              <td>Nome, e-mail, conteúdo da mensagem</td>
              <td>Execução de procedimentos preliminares (art. 7º, V)</td>
            </tr>
            <tr>
              <td>Mensuração de audiência e melhoria do conteúdo</td>
              <td>Dados de navegação agregados</td>
              <td>Legítimo interesse (art. 7º, IX)</td>
            </tr>
            <tr>
              <td>Prevenção a fraudes e segurança da infraestrutura</td>
              <td>IP, logs de acesso</td>
              <td>Legítimo interesse e cumprimento de obrigação legal</td>
            </tr>
            <tr>
              <td>Exibição de anúncios programáticos</td>
              <td>Cookies de terceiros (mediante consentimento)</td>
              <td>Consentimento (art. 7º, I)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>5. Compartilhamento com terceiros</h2>
      <p>
        O Site <strong>não vende, aluga ou cede</strong> dados pessoais a terceiros para fins
        comerciais. O compartilhamento ocorre apenas com <strong>operadores</strong> estritamente
        necessários à entrega dos serviços, todos vinculados por contrato e obrigados a manter o
        mesmo padrão de proteção:
      </p>
      <ul>
        <li><strong>Provedor de hospedagem</strong> (infraestrutura em nuvem com certificações ISO 27001 / SOC 2);</li>
        <li><strong>Plataforma de envio de e-mail marketing</strong> (newsletter);</li>
        <li><strong>Ferramentas de analytics</strong> (Google Analytics 4 com IP anonimizado);</li>
        <li><strong>Redes de publicidade</strong> (Google AdSense), apenas após consentimento de cookies.</li>
      </ul>
      <p>
        Eventuais transferências internacionais de dados observam o art. 33 da LGPD, sempre
        para países com nível de proteção adequado ou mediante cláusulas contratuais específicas.
      </p>

      <h2>6. Tempo de armazenamento</h2>
      <ul>
        <li><strong>Newsletter</strong>: enquanto o titular não solicitar o descadastramento;</li>
        <li><strong>Mensagens de contato</strong>: até 24 meses após o último atendimento;</li>
        <li><strong>Logs de acesso</strong>: 6 meses, em cumprimento ao art. 15 do Marco Civil da Internet;</li>
        <li><strong>Dados de analytics</strong>: 14 meses, conforme configuração padrão do Google Analytics 4.</li>
      </ul>
      <p>
        Decorridos esses prazos, os dados são <strong>eliminados</strong> ou{" "}
        <strong>anonimizados</strong>, salvo obrigação legal ou regulatória de guarda diversa.
      </p>

      <h2>7. Direitos do titular</h2>
      <p>
        Nos termos do art. 18 da LGPD, você pode, a qualquer tempo e sem qualquer custo, exercer
        os seguintes direitos:
      </p>
      <ul>
        <li>Confirmação da existência de tratamento;</li>
        <li>Acesso aos seus dados;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
        <li>Portabilidade a outro fornecedor de serviço;</li>
        <li>Eliminação dos dados tratados com base em consentimento;</li>
        <li>Informação sobre entidades públicas e privadas com as quais compartilhamos dados;</li>
        <li>Revogação do consentimento, a qualquer momento, mediante manifestação expressa;</li>
        <li>Revisão de decisões tomadas unicamente com base em tratamento automatizado.</li>
      </ul>
      <p>
        Para exercer qualquer desses direitos, envie um e-mail para{" "}
        <a href="mailto:privacidade@fatospoliticos.com.br">privacidade@fatospoliticos.com.br</a>{" "}
        informando o pedido e um meio de contato. Responderemos em <strong>até 15 dias úteis</strong>.
      </p>

      <h2>8. Segurança da informação</h2>
      <p>
        Adotamos medidas técnicas e organizacionais aptas a proteger os dados pessoais contra
        acessos não autorizados, situações acidentais ou ilícitas de destruição, perda, alteração,
        comunicação ou difusão. Entre elas:
      </p>
      <ul>
        <li>Conexão criptografada via HTTPS / TLS 1.3 em todas as páginas;</li>
        <li>Controle de acesso baseado em perfis e autenticação multifator nos painéis administrativos;</li>
        <li>Backups criptografados e segregação de ambientes (produção / homologação);</li>
        <li>Monitoramento contínuo e plano de resposta a incidentes.</li>
      </ul>
      <p>
        Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos
        titulares, comunicaremos a <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>{" "}
        e os titulares afetados em prazo razoável, nos termos do art. 48 da LGPD.
      </p>

      <h2>9. Crianças e adolescentes</h2>
      <p>
        O conteúdo do Fatos Políticos é destinado ao público adulto. <strong>Não coletamos
        intencionalmente dados de menores de 18 anos.</strong> Caso identifiquemos qualquer
        cadastro nessas condições, os dados serão imediatamente excluídos. Pais ou responsáveis
        podem solicitar a exclusão por meio dos canais indicados.
      </p>

      <h2>10. Encarregado pelo Tratamento de Dados (DPO)</h2>
      <p>
        O Encarregado pelo Tratamento de Dados Pessoais pode ser contatado pelo e-mail{" "}
        <a href="mailto:dpo@fatospoliticos.com.br">dpo@fatospoliticos.com.br</a>. Caso a resposta
        recebida não seja satisfatória, o titular pode apresentar reclamação diretamente à ANPD
        em <a href="https://www.gov.br/anpd" rel="noopener">gov.br/anpd</a>.
      </p>

      <h2>11. Atualizações</h2>
      <p>
        Esta Política pode ser atualizada periodicamente para refletir mudanças legislativas,
        adoção de novas tecnologias ou ajustes editoriais. A versão vigente será sempre a
        publicada nesta página.
      </p>
    </LegalPage>
  );
}
