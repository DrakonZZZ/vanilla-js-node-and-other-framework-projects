const checkmark = Array.from(document.getElementsByClassName('checkmark'));
const stepCount = document.querySelector('.remaining-count');
const btn = document.querySelector('.btn-dark');

let width = 0;
let instruct = 5;

const percent = (mark) => {
  if (mark.classList.contains('mark')) {
    mark.classList.remove('mark');
    width -= 20;
    instruct += 1;
  } else {
    mark.classList.add('mark');
    width += 20;
    instruct -= 1;
  }

  const value = document.querySelector('.percent-value');

  value.textContent = `${width}%`;
  stepCount.innerHTML = `${instruct}`;
  document.querySelector('.progress-bar').classList.add('trans');
  document.querySelector('.progress-bar').style.width = `${width}%`;
};

for (let mark of checkmark) {
  mark.addEventListener('click', (e) => {
    percent(e.target);
  });
}
