const crossIcon = document.querySelector('.xross');
const container = document.querySelector('.main-container');

crossIcon.addEventListener('click', () => {
  container.classList.toggle('hidden');
  crossIcon.classList.toggle('xross-rotate');
});
