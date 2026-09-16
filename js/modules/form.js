import { configurarMascara } from './masks.js';

export function iniciarFormulario() {
  const formulario = document.querySelector('#formulario-cadastro'); if (!formulario) return null;
  const alerta = document.querySelector('#alerta-validacao'); const toast = document.querySelector('#toast-sucesso'); const mensagemToast = toast?.querySelector('.toast__message'); const modal = document.querySelector('#modal-cadastro'); const fechar = modal?.querySelector('.modal__close'); let alertaTimer = 0; let toastTimer = 0; let modalTimer = 0; let focoAnterior = null;
  const mostrarAlerta = () => { if (alerta) { alerta.hidden = false; alerta.classList.add('is-visible'); } };
  const mostrarAlertaTemporario = () => { mostrarAlerta(); clearTimeout(alertaTimer); alertaTimer = setTimeout(() => { alerta?.classList.remove('is-visible'); if (alerta) alerta.hidden = true; }, 4000); };
  const mostrarToast = () => { if (!toast || !mensagemToast) return; clearTimeout(toastTimer); mensagemToast.textContent = 'Cadastro enviado com sucesso!'; toast.classList.add('is-visible'); toast.setAttribute('aria-hidden', 'false'); toastTimer = setTimeout(() => { toast.classList.remove('is-visible'); toast.setAttribute('aria-hidden', 'true'); }, 4000); };
  const abrirModal = () => { if (!modal || !fechar) return; clearTimeout(modalTimer); focoAnterior = document.activeElement; modal.hidden = false; document.body.classList.add('modal-open'); requestAnimationFrame(() => { modal.classList.add('is-visible'); requestAnimationFrame(() => fechar.focus()); }); };
  const fecharModal = () => { if (!modal) return; modal.classList.remove('is-visible'); document.body.classList.remove('modal-open'); clearTimeout(modalTimer); modalTimer = setTimeout(() => { modal.hidden = true; focoAnterior?.focus(); }, 200); };
  configurarMascara(formulario, '#cpf', 'cpf'); configurarMascara(formulario, '#telefone', 'telefone'); configurarMascara(formulario, '#cep', 'cep');
  formulario.addEventListener('invalid', (event) => { event.target.setAttribute('aria-invalid', 'true'); mostrarAlerta(); }, true);
  formulario.addEventListener('input', (event) => { if (event.target.validity?.valid) event.target.removeAttribute('aria-invalid'); }); formulario.addEventListener('change', (event) => { if (event.target.validity?.valid) event.target.removeAttribute('aria-invalid'); });
  formulario.addEventListener('submit', (event) => { event.preventDefault(); mostrarToast(); abrirModal(); formulario.reset(); });
  document.querySelector('[data-feedback="toast"]')?.addEventListener('click', mostrarToast); document.querySelector('[data-feedback="alerta"]')?.addEventListener('click', mostrarAlertaTemporario); document.querySelector('[data-feedback="modal"]')?.addEventListener('click', abrirModal); modal?.addEventListener('click', (event) => { if (event.target.matches('[data-modal-close]')) fecharModal(); });
  return { modal, fecharModal, limpar: () => { clearTimeout(alertaTimer); clearTimeout(toastTimer); clearTimeout(modalTimer); document.body.classList.remove('modal-open'); } };
}
