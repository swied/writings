document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.toggle-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      btn.textContent = expanded ? '+' : '–';
      const list = btn.parentElement.querySelector('.sidebar-articles');
      if (list) {
        if (expanded) {
          list.setAttribute('hidden', '');
        } else {
          list.removeAttribute('hidden');
        }
      }
    });
  });
});
