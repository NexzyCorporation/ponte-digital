# Ponte Digital

## Sobre o projeto

Projeto acadêmico da disciplina **Desenvolvimento Front-end para Web**, desenvolvido para a Experiência Prática I. A Ponte Digital é uma ONG fictícia que promove inclusão digital, educação tecnológica, reaproveitamento de equipamentos e voluntariado.

## Objetivo

Desenvolver uma plataforma web acessível para apresentar a ONG e permitir o cadastro de pessoas interessadas em participar de seus projetos.

## Páginas

- `index.html`: apresentação institucional, missão, áreas de atuação e contato.
- `projetos.html`: descrição dos quatro projetos sociais.
- `cadastro.html`: formulário de participação.

## Estrutura do projeto

```text
ponte-digital/
├── index.html
├── projetos.html
├── cadastro.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   ├── logo/
│   │   └── ponte-digital-logo.png
│   ├── hero/
│   │   ├── inclusao-digital.webp
│   │   └── inclusao-digital.jpg
│   └── projetos/
│       ├── conecta-jovem.webp
│       ├── conecta-jovem.jpg
│       ├── pc-para-todos.webp
│       ├── pc-para-todos.jpg
│       ├── mentoria-tech.webp
│       ├── mentoria-tech.jpg
│       ├── descarte-consciente.webp
│       └── descarte-consciente.jpg
└── README.md
```

## Recursos utilizados

- HTML5 semântico;
- HTML semântico com `header`, `nav`, `main`, `section`, `article`, `footer` e `address`;
- formulários HTML5;
- validação nativa do navegador;
- recursos de acessibilidade;
- CSS3 com Design System e CSS Variables;
- CSS Grid, incluindo layout estrutural de 12 colunas;
- Flexbox, responsividade e cinco breakpoints;
- JavaScript nativo;
- menu hambúrguer acessível;
- pseudo-classes, pseudo-elementos e `prefers-reduced-motion`.

## Validações

O formulário utiliza `required`, `type="email"`, `type="date"`, `type="tel"`, `minlength`, `maxlength` e `pattern`.

- CPF: formato `000.000.000-00`;
- telefone: formato `(00) 00000-0000`;
- CEP: formato `00000-000`;
- e-mail: validação do tipo de campo pelo navegador.

As máscaras são representadas por `placeholder` e `pattern`, com aplicação visual de CPF, telefone e CEP por JavaScript nativo. A validação continua sendo feita pelas regras HTML5 do navegador.

## Acessibilidade

As páginas usam textos alternativos descritivos nas imagens, `label` associado a cada campo por `for` e `id`, agrupamento com `fieldset` e `legend`, títulos em ordem lógica, links descritivos, idioma `pt-BR` e foco de teclado visível.

## Assets visuais

A logo e as cinco imagens institucionais foram incluídas no projeto. As imagens de conteúdo usam WebP como formato otimizado principal e JPG como alternativa. O elemento `picture` permite que o navegador use WebP quando houver suporte e JPG como fallback:

- `img/hero/inclusao-digital.webp`;
- `img/projetos/conecta-jovem.webp`;
- `img/projetos/pc-para-todos.webp`;
- `img/projetos/mentoria-tech.webp`;
- `img/projetos/descarte-consciente.webp`.

## Experiência Prática II

Nesta etapa, o projeto recebeu um Design System com variáveis de cor, espaçamento, raios e sombras; layout com Grid de 12 colunas; cards responsivos; Flexbox no cabeçalho, navegação, rodapé e feedback; cinco breakpoints (`480px`, `768px`, `1024px`, `1280px` e `1440px`); menu hambúrguer com `aria-expanded`; máscaras funcionais; estados de foco, hover, válido, inválido, ativo e desabilitado; toast, alerta, badges e modal acessíveis; além de suporte a `prefers-reduced-motion`.

## Evolução futura

Nas próximas experiências práticas, o projeto poderá receber melhorias de acessibilidade avançada, otimizações, CI/CD e deploy com HTTPS.

## Redesign visual — Experiência Prática II

A interface foi reorganizada com visual institucional moderno, hero em duas colunas, indicadores de impacto acadêmicos, seção sobre, missão, valores, chamadas para ação e footer com navegação, contato e newsletter. A nova página `sobre.html` mantém explícito que a ONG é fictícia e acadêmica.

O CSS usa tokens de Design System, Grid e Flexbox nativos, cinco breakpoints (480, 768, 1024, 1280 e 1440px), estados de foco/hover e `prefers-reduced-motion`. O JavaScript mantém validações, máscaras, menu acessível, filtros visuais, toast, alerta e modal.

## Arquitetura e fluxo de desenvolvimento

O JavaScript é organizado em módulos ES6: `router.js` concentra a SPA e a History API; `projects.js` renderiza os templates e filtros; `storage.js` mantém somente a preferência de filtro; `form.js` controla validação e feedback; `masks.js`, `menu.js` atendem suas responsabilidades específicas. O arquivo `js/script.js` importa e inicializa esses módulos.

O versionamento segue GitFlow: `main` representa a versão estável, `develop` integra o desenvolvimento e `feature/*` isola tarefas antes de serem revisadas por Pull Request. Para executar localmente, use um servidor estático na raiz do projeto e abra `index.html`.
