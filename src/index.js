const themeToggle = document.querySelector('#js-themeToggle');
const html = document.querySelector('html');

let theme = 'light';
html.dataset.theme = theme;

themeToggle.addEventListener('click', () => {
  theme === 'light' ? theme = 'dark' : theme = 'light';
  html.dataset.theme = theme;
});