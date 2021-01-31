(function() {
  const html = document.querySelector('html');
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const darkModeToggle = document.querySelector('#darkModeToggle');

  // Check session storage
  if (sessionStorage.getItem('theme')) {
    darkModeToggle.checked = sessionStorage.getItem('theme') === 'dark';
  } else {
    // If none, then set toggle state to OS theme
    darkModeToggle.checked = prefersDarkScheme.matches;
    sessionStorage.setItem('theme', darkModeToggle.checked ? 'dark' : 'light');
  }

  // Set theme to match toggle state
  if (darkModeToggle.checked) {
    html.classList.toggle("theme-dark");
  } else {
    html.classList.toggle("theme-light");
  }

  // Update theme on click of toggle
  darkModeToggle.addEventListener('click', () => {
    if (prefersDarkScheme.matches) {
      // If OS theme is dark
      html.classList.toggle("theme-light");
    } else {
      // If OS theme is light
      html.classList.toggle("theme-dark");
    }
    sessionStorage.setItem('theme', darkModeToggle.checked ? 'dark' : 'light');
  });
}());