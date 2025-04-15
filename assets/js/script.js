document.addEventListener('DOMContentLoaded', () => {
  const ctaButton = document.querySelector('.cta-button');

  ctaButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Thanks for your interest! We’ll notify you when SubSentry launches.');
  });
});