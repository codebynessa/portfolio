const langSwitcher = document.getElementById('lang-switcher');

function setLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = data[key] || el.textContent;
      });
    });
}

langSwitcher.addEventListener('change', () => {
  const selectedLang = langSwitcher.value;
  setLanguage(selectedLang);
});

window.addEventListener('DOMContentLoaded', () => {
  setLanguage(langSwitcher.value);
});
