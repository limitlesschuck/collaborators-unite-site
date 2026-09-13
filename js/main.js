/* ── FAQ ACCORDION ─────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.faq-btn');
  btns.forEach((btn, i) => {
    const body = btn.nextElementSibling;
    const sign = btn.querySelector('.faq-sign');
    // Open first by default
    if (i === 0) { body.classList.add('open'); sign.textContent = '–'; }
    btn.addEventListener('click', () => {
      const isOpen = body.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.faq-sign').forEach(s => s.textContent = '+');
      // Open clicked if it was closed
      if (!isOpen) { body.classList.add('open'); sign.textContent = '–'; }
    });
  });
});
