export const CHAVE_FILTRO_PROJETOS = 'ponteDigital:filtroProjetos';

export function recuperarPreferencia(chave) {
  try { return window.localStorage.getItem(chave); } catch { return null; }
}

export function salvarPreferencia(chave, valor) {
  try { window.localStorage.setItem(chave, valor); } catch { /* armazenamento indisponível */ }
}
