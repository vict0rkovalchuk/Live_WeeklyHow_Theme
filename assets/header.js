document.querySelector('button.hamburger').addEventListener('click', () => {
  document.querySelector('.side-menu').classList.remove('hidden');
});

document.querySelector('button.close-side-menu ').addEventListener('click', () => {
  document.querySelector('.side-menu').classList.add('hidden');
});
