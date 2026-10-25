// Demo académica: se muestra retroalimentación, sin procesar ni guardar datos.
const toast = document.getElementById('toast');
let hideTimer;
document.querySelectorAll('.demo-button').forEach(button => {
  button.addEventListener('click', () => {
    clearTimeout(hideTimer);
    toast.classList.add('visible');
    hideTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
  });
});
