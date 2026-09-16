import { iniciarFormulario } from './modules/form.js';
import { iniciarMenu } from './modules/menu.js';
import { iniciarProjetos } from './modules/projects.js';
import { atualizarNavegacaoAtiva, iniciarRouter } from './modules/router.js';

let controleFormulario = null;
function iniciarTelaAtual() { controleFormulario?.limpar(); controleFormulario = iniciarFormulario(); iniciarProjetos(); }
function iniciarAplicacao() {
  iniciarMenu(); atualizarNavegacaoAtiva(new URL(window.location.href)); iniciarTelaAtual();
  iniciarRouter({ iniciarTela: iniciarTelaAtual, limparTela: () => controleFormulario?.limpar(), obterFormulario: () => controleFormulario });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciarAplicacao, { once: true });
else iniciarAplicacao();
