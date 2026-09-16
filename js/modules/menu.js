export function alternarMenu(aberto) {
  const botao = document.querySelector('.menu-toggle');
  const lista = document.querySelector('.nav-list');
  lista?.classList.toggle('is-open', aberto);
  botao?.setAttribute('aria-expanded', String(aberto));
  botao?.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
}

export function iniciarMenu() {
  document.querySelector('.menu-toggle')?.addEventListener('click', (event) => {
    alternarMenu(event.currentTarget.getAttribute('aria-expanded') !== 'true');
  });
}
