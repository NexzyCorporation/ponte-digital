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
- CSS mínimo com variáveis da identidade visual.

## Validações

O formulário utiliza `required`, `type="email"`, `type="date"`, `type="tel"`, `minlength`, `maxlength` e `pattern`.

- CPF: formato `000.000.000-00`;
- telefone: formato `(00) 00000-0000`;
- CEP: formato `00000-000`;
- e-mail: validação do tipo de campo pelo navegador.

As máscaras são representadas por `placeholder` e `pattern`, conforme a etapa acadêmica. Não há JavaScript para validação.

## Acessibilidade

As páginas usam textos alternativos descritivos nas imagens, `label` associado a cada campo por `for` e `id`, agrupamento com `fieldset` e `legend`, títulos em ordem lógica, links descritivos, idioma `pt-BR` e foco de teclado visível.

## Assets visuais

A logo e as cinco imagens institucionais foram incluídas no projeto. As imagens de conteúdo usam WebP como formato otimizado principal e JPG como alternativa. O elemento `picture` permite que o navegador use WebP quando houver suporte e JPG como fallback:

- `img/hero/inclusao-digital.webp`;
- `img/projetos/conecta-jovem.webp`;
- `img/projetos/pc-para-todos.webp`;
- `img/projetos/mentoria-tech.webp`;
- `img/projetos/descarte-consciente.webp`.

## Evolução futura

Nas próximas experiências práticas, o projeto poderá receber CSS3 com layout responsivo, JavaScript para interações, Git/GitHub, otimizações, CI/CD e deploy com HTTPS.
