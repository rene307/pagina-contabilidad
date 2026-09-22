const WHATSAPP_NUMBER = '56982235581';

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

document.querySelectorAll('.wa-link').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const plan = link.dataset.plan;
    const message = plan
      ? `Hola SOLCONT, quiero cotizar el ${plan}. ¿Me pueden orientar con requisitos y valor?`
      : (link.dataset.msg || 'Hola SOLCONT, quisiera información sobre sus servicios.');
    openWhatsApp(message);
  });
});

const EMAIL_DESTINO = 'raul@solcont.cl';
const form = document.getElementById('emailForm');
form.addEventListener('submit', event => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const servicio = document.getElementById('servicio').value;
  const mensaje = document.getElementById('mensaje').value.trim();

  const asunto = `Consulta SOLCONT - ${servicio}${nombre ? ` - ${nombre}` : ''}`;
  const cuerpo = [
    'Hola SOLCONT, quisiera solicitar una orientación.',
    '',
    `Nombre: ${nombre}`,
    empresa ? `Empresa: ${empresa}` : '',
    `Teléfono: ${telefono}`,
    correo ? `Correo: ${correo}` : '',
    `Servicio de interés: ${servicio}`,
    '',
    mensaje ? `Consulta: ${mensaje}` : 'Consulta: Sin mensaje adicional.'
  ].filter(line => line !== '').join('\n');

  const mailto = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
  window.location.href = mailto;
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
