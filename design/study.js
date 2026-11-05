const preview = document.querySelector('.tool-preview');
const themeButtons = document.querySelectorAll('[data-theme]');
for (const button of themeButtons) {
  button.addEventListener('click', () => {
    preview.dataset.previewTheme = button.dataset.theme;
    for (const option of themeButtons) option.setAttribute('aria-pressed', String(option === button));
  });
}
