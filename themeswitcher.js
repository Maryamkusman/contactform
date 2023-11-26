const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});