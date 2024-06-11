document.querySelectorAll('button[header-link-with-child="true"]').forEach((button) => {
  button.addEventListener('click', () => {
    button.nextElementSibling.classList.toggle('hidden');
  });
});
