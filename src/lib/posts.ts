export type Post = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  author: string;
  image: string;
  excerpt: string;
  body: string[];
};

const IMG = "https://fatospoliticos.com.br/wp-content/uploads/2026/03";

export const posts: Post[] = [
  {
    slug: "como-consultar-gastos-do-seu-deputado-no-portal-da-transparencia",
    title: "Como Consultar Gastos do Seu Deputado no Portal da Transparência",
    category: "Transparência",
    categorySlug: "transparencia",
    date: "8 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Como-Consultar-Gastos-do-Seu-Deputado-no-Portal-da-Transparencia.jpg`,
    excerpt:
      "Passo a passo oficial para acompanhar, em dados públicos, cada centavo declarado pelos deputados federais — usando apenas fontes do governo.",
    body: [
      "O Portal da Transparência do Governo Federal disponibiliza, de forma aberta e gratuita, todos os gastos declarados pelos deputados federais por meio da CEAP (Cota para Exercício da Atividade Parlamentar). Este guia mostra, passo a passo, como filtrar por parlamentar, período e categoria de despesa.",
      "Antes de começar, vale entender o que é a CEAP: trata-se de um valor mensal destinado a custear despesas exclusivamente vinculadas ao exercício do mandato — passagens aéreas, combustível, divulgação parlamentar, manutenção de escritório, entre outras. O valor varia conforme o estado de origem do deputado.",
      "Acesse portaltransparencia.gov.br, vá em 'Despesas' → 'Por Órgão' e selecione 'Câmara dos Deputados'. A partir daí, é possível baixar os dados em planilha (.csv) ou consultar diretamente pelo nome do parlamentar. Todos os números aqui apresentados são extraídos diretamente das bases SIAFI e SIOPS.",
      "Esta reportagem não emite juízo de valor sobre os gastos — apenas demonstra o caminho técnico para que qualquer cidadão verifique, por conta própria, os dados oficiais.",
    ],
  },
  {
    slug: "controle-externo-tcu-fiscalizacao-dinheiro-publico-brasil",
    title: "Controle Externo do TCU: Fiscalização do Dinheiro Público no Brasil",
    category: "Transparência",
    categorySlug: "transparencia",
    date: "16 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Controle-Externo-TCU-Fiscalizacao-Dinheiro-Publico-Brasil-730x400.jpg`,
    excerpt:
      "O TCU realiza o controle externo das contas federais. Entenda seu papel constitucional e como acessar relatórios de auditoria públicos gratuitamente.",
    body: [
      "O Tribunal de Contas da União (TCU) é o órgão responsável pelo controle externo da administração pública federal. Auxilia o Congresso Nacional no julgamento das contas dos administradores públicos que utilizam recursos da União.",
      "Todos os acórdãos do TCU são públicos e podem ser consultados gratuitamente em tcu.gov.br. A base inclui auditorias, fiscalizações de obras, contratos e convênios federais.",
      "Este conteúdo é factual e baseado exclusivamente em dados oficiais publicados pelo próprio TCU.",
    ],
  },
  {
    slug: "como-ver-os-gastos-do-cartao-corporativo-do-governo",
    title: "Como Ver os Gastos do Cartão Corporativo do Governo",
    category: "Transparência",
    categorySlug: "transparencia",
    date: "16 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Como-ver-os-gastos-do-Cartao-Corporativo-do-Governo-730x400.jpg`,
    excerpt:
      "O CPGF (Cartão de Pagamento do Governo Federal) tem dados abertos. Veja onde encontrar e como interpretar cada linha de despesa.",
    body: [
      "O Cartão de Pagamento do Governo Federal (CPGF) é uma modalidade de gasto público com regras específicas de transparência. Todos os lançamentos são publicados no Portal da Transparência.",
      "Para consultar, acesse portaltransparencia.gov.br/cartoes e filtre por órgão, portador ou período.",
    ],
  },
  {
    slug: "como-consultar-licitacoes-publicas-federais-pelo-portal-de-compras-governamentais",
    title: "Como Consultar Licitações Públicas Federais pelo Portal de Compras Governamentais",
    category: "Compliance",
    categorySlug: "compliance",
    date: "15 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Como-Consultar-Licitacoes-Publicas-Federais-Governamentais-730x400.jpg`,
    excerpt:
      "O ComprasNet centraliza editais, pregões e contratos federais. Guia objetivo para acompanhar o ciclo completo de uma licitação.",
    body: [
      "O Portal de Compras Governamentais (comprasnet.gov.br) é a plataforma oficial para consulta de licitações, pregões eletrônicos e contratos da administração pública federal.",
      "Qualquer cidadão pode acompanhar editais em aberto, propostas vencedoras e valores contratados.",
    ],
  },
  {
    slug: "subsidios-a-combustiveis-fosseis-quanto-o-governo-gasta",
    title: "Subsídios a Combustíveis Fósseis: Quanto o Governo Gasta",
    category: "Orçamento",
    categorySlug: "orcamento",
    date: "15 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Subsidios-a-Combustiveis-Fosseis-730x400.jpg`,
    excerpt:
      "Análise dos dados oficiais do Tesouro Nacional sobre desonerações tributárias e subsídios diretos ao setor de combustíveis.",
    body: [
      "Os subsídios federais a combustíveis fósseis são publicados anualmente pelo Tesouro Nacional no Demonstrativo dos Gastos Tributários.",
    ],
  },
  {
    slug: "siga-brasil-ferramenta-do-senado-para-acompanhar-orcamento-federal",
    title: "SIGA Brasil: Ferramenta do Senado para Acompanhar o Orçamento Federal",
    category: "Orçamento",
    categorySlug: "orcamento",
    date: "15 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/SIGA-Brasil-Ferramenta-do-Senado-730x400.jpg`,
    excerpt:
      "O SIGA Brasil é a base de dados oficial do Senado para consulta da execução orçamentária. Veja como utilizá-la.",
    body: [
      "O SIGA Brasil (www12.senado.leg.br/orcamento/sigabrasil) reúne, em uma única plataforma, dados detalhados sobre receitas, despesas e execução do orçamento da União.",
    ],
  },
  {
    slug: "deficit-primario-do-governo-o-que-significa-e-como-afeta-seu-bolso",
    title: "Déficit Primário do Governo: O Que Significa e Como Afeta Seu Bolso",
    category: "Orçamento",
    categorySlug: "orcamento",
    date: "9 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Deficit-Primario-do-Governo-O-Que-Significa-e-Como-Afeta-Seu-Bolso-730x400.jpeg`,
    excerpt:
      "Conceito fundamental das contas públicas explicado com dados do Tesouro Nacional, sem viés político.",
    body: [
      "Déficit primário ocorre quando as despesas do governo (excluindo juros da dívida) superam as receitas no mesmo período. Os dados oficiais são publicados mensalmente pelo Tesouro Nacional.",
    ],
  },
  {
    slug: "como-consultar-os-gastos-de-verbas-indenizatorias-dos-deputados",
    title: "Como Consultar os Gastos de Verbas Indenizatórias dos Deputados",
    category: "Checagem",
    categorySlug: "checagem",
    date: "9 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Verba-Indenizatoria-de-Deputados-O-Que-E-Valores-e-Como-Consultar-os-Gastos-730x400.jpeg`,
    excerpt:
      "A CEAP movimenta milhões por mês. Cada despesa tem registro público — veja como auditar.",
    body: [
      "A Cota para Exercício da Atividade Parlamentar (CEAP) é a chamada 'verba indenizatória' dos deputados federais. Todos os gastos são publicados em dados abertos pela Câmara.",
    ],
  },
  {
    slug: "prestacao-de-contas-eleitorais-como-acessar-dados-oficiais-do-tse-sobre-candidatos",
    title: "Prestação de Contas Eleitorais: Como Acessar Dados Oficiais do TSE sobre Candidatos",
    category: "Transparência",
    categorySlug: "transparencia",
    date: "9 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Prestacao-de-Contas-Eleitorais-Como-Acessar-Dados-Oficiais-do-TSE-sobre-Candidatos-730x400.jpeg`,
    excerpt:
      "Quem financiou a campanha do candidato que você elegeu? O TSE disponibiliza os dados — saiba como consultar.",
    body: [
      "O Tribunal Superior Eleitoral (TSE) publica, em divulgacandcontas.tse.jus.br, todas as doações declaradas e prestações de contas das campanhas eleitorais.",
    ],
  },
  {
    slug: "como-funcionam-as-emendas-parlamentares",
    title: "Como Funcionam as Emendas Parlamentares",
    category: "Transparência",
    categorySlug: "transparencia",
    date: "9 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Como-Funcionam-as-Emendas-Parlamentares-Consulta-Oficial-no-Portal-da-Transparencia-2-730x400.jpeg`,
    excerpt:
      "Tipos de emendas, regras de execução e onde encontrar o registro oficial no Portal da Transparência.",
    body: [
      "Emendas parlamentares são instrumentos pelos quais deputados e senadores destinam parte do orçamento federal a ações específicas. Há quatro tipos principais: individuais, de bancada, de comissão e de relator.",
    ],
  },
  {
    slug: "imposto-de-renda-deducoes-permitidas-com-saude-e-educacao",
    title: "Imposto de Renda: Deduções Permitidas com Saúde e Educação",
    category: "Orçamento",
    categorySlug: "orcamento",
    date: "9 de março, 2026",
    author: "Daniel Olímpio",
    image: `${IMG}/Imposto-de-Renda-2026-Deducoes-Permitidas-com-Saude-e-Educacao-sem-Limite-730x400.jpeg`,
    excerpt:
      "Regras vigentes da Receita Federal para abater despesas de saúde e educação na declaração anual.",
    body: [
      "A legislação tributária permite a dedução integral de despesas médicas comprovadas e parcial de despesas com educação, dentro dos limites publicados anualmente pela Receita Federal.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const featured = posts[0];
export const recent = posts.slice(1, 5);
export const recommended = posts.slice(2, 8);
export const highlights = posts.slice(0, 6);
export const editorsPicks = posts.slice(3, 7);
