import { CHAVE_FILTRO_PROJETOS, recuperarPreferencia, salvarPreferencia } from './storage.js';

const FILTRO_PADRAO = 'Todos';
const PROJETOS = [
  { categoria: 'Educação', classeBadge: 'badge--education', titulo: 'Conecta Jovem', descricao: 'Oficinas gratuitas de informática, internet segura, programação básica e competências digitais.', imagemWebp: 'img/projetos/conecta-jovem.webp', imagemJpg: 'img/projetos/conecta-jovem.jpg', alt: 'Jovens participando de oficina de tecnologia e inclusão digital do projeto Conecta Jovem' },
  { categoria: 'Inclusão', classeBadge: 'badge--inclusion', titulo: 'PC para Todos', descricao: 'Arrecadamos, recuperamos e doamos computadores para estudantes e famílias.', imagemWebp: 'img/projetos/pc-para-todos.webp', imagemJpg: 'img/projetos/pc-para-todos.jpg', alt: 'Voluntários preparando computadores recondicionados para doação no projeto PC para Todos' },
  { categoria: 'Tecnologia', classeBadge: 'badge--technology', titulo: 'Mentoria Tech', descricao: 'Profissionais voluntários orientam jovens sobre carreira, currículo e entrada no mercado.', imagemWebp: 'img/projetos/mentoria-tech.webp', imagemJpg: 'img/projetos/mentoria-tech.jpg', alt: 'Mentor orientando jovens sobre tecnologia no projeto Mentoria Tech' },
  { categoria: 'Sustentabilidade', classeBadge: 'badge--sustainability', titulo: 'Descarte Consciente', descricao: 'Recebemos equipamentos para reaproveitamento, reciclagem ou descarte responsável.', imagemWebp: 'img/projetos/descarte-consciente.webp', imagemJpg: 'img/projetos/descarte-consciente.jpg', alt: 'Voluntários separando equipamentos eletrônicos para reciclagem responsável' }
];

function filtroValido(filtro) { return filtro === FILTRO_PADRAO || PROJETOS.some((projeto) => projeto.categoria === filtro); }
function criarCard(projeto) {
  const artigo = document.createElement('article'); artigo.className = 'card';
  const picture = document.createElement('picture'); const source = document.createElement('source'); source.srcset = projeto.imagemWebp; source.type = 'image/webp';
  const imagem = document.createElement('img'); imagem.src = projeto.imagemJpg; imagem.alt = projeto.alt; imagem.width = 1536; imagem.height = 1024;
  const corpo = document.createElement('div'); corpo.className = 'card__body'; const categoria = document.createElement('p'); const badge = document.createElement('span'); badge.className = `badge ${projeto.classeBadge}`; badge.textContent = projeto.categoria;
  const titulo = document.createElement('h3'); titulo.textContent = projeto.titulo; const descricao = document.createElement('p'); descricao.textContent = projeto.descricao;
  const link = document.createElement('a'); link.className = 'text-link'; link.href = 'cadastro.html'; link.append('Saiba mais '); const seta = document.createElement('span'); seta.setAttribute('aria-hidden', 'true'); seta.textContent = '→';
  picture.append(source, imagem); categoria.append(badge); link.append(seta); corpo.append(categoria, titulo, descricao, link); artigo.append(picture, corpo); return artigo;
}
export function renderizarProjetos(filtro = FILTRO_PADRAO) {
  const grade = document.querySelector('[data-project-grid]'); if (!grade) return;
  const fragmento = document.createDocumentFragment(); PROJETOS.filter((projeto) => filtro === FILTRO_PADRAO || projeto.categoria === filtro).forEach((projeto) => fragmento.append(criarCard(projeto))); grade.replaceChildren(fragmento);
}
export function iniciarProjetos() {
  const filtros = [...document.querySelectorAll('.filter-chip')]; if (!filtros.length) return;
  const aplicar = (filtro) => { const atual = filtroValido(filtro) ? filtro : FILTRO_PADRAO; filtros.forEach((chip) => chip.setAttribute('aria-pressed', String(chip.textContent.trim() === atual))); renderizarProjetos(atual); };
  aplicar(recuperarPreferencia(CHAVE_FILTRO_PROJETOS));
  filtros.forEach((chip) => chip.addEventListener('click', () => { const filtro = chip.textContent.trim(); if (!filtroValido(filtro)) return; salvarPreferencia(CHAVE_FILTRO_PROJETOS, filtro); aplicar(filtro); }));
}
