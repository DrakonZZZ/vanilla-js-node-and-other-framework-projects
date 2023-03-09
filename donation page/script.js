const donateBtn = document.querySelectorAll('button.amount-btn');

donateBtn.forEach((data) => {
  data.addEventListener('click', (e) => {
    checker();
    data.classList.add('active');
  });
});

function checker() {
  donateBtn.forEach((ls) => {
    ls.classList.contains('active') ? ls.classList.remove('active') : null;
  });
}
