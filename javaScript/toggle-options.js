const optionToggle = document.getElementById('options-toggle');
const nav = document.querySelector('nav'); 

optionToggle.addEventListener('click', () => {
  nav.classList.toggle('show-options');
});

document.querySelectorAll('nav ul li a').forEach(function(link) {
  link.addEventListener('click', () => {
      nav.classList.remove('show-options');
  });
});