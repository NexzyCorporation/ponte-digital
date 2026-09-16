export function formatarMascara(valor, tipo) {
  const digitos = valor.replace(/\D/g, '');
  if (tipo === 'cpf') return digitos.slice(0, 11).replace(/^(\d{3})(\d)/, '$1.$2').replace(/^(\d{3}\.\d{3})(\d)/, '$1.$2').replace(/(\d{3}\.\d{3}\.\d{3})(\d)/, '$1-$2');
  if (tipo === 'telefone') return digitos.slice(0, 11).replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
  if (tipo === 'cep') return digitos.slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2');
  return valor;
}

export function configurarMascara(formulario, seletor, tipo) {
  const campo = formulario?.querySelector(seletor);
  if (!campo) return;
  campo.addEventListener('input', () => { campo.value = formatarMascara(campo.value, tipo); });
  campo.addEventListener('paste', (event) => {
    if (!event.clipboardData) return;
    event.preventDefault();
    campo.value = formatarMascara(event.clipboardData.getData('text'), tipo);
    campo.dispatchEvent(new Event('input', { bubbles: true }));
  });
}
