document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('btnMensaje');
  const texto = document.getElementById('textoRespuesta');

  boton.addEventListener('click', () => {
    texto.textContent = 'te odio ijadelaberga';
  });
});