let socket = io();

const form = document.querySelector('#form');
const input = document.querySelector('#input');
const messages = document.querySelector('#root');

const addMessages = (msg) => {
  let messageQue = document.createElement('li');
  messageQue.innerText = msg;
  messages.appendChild(messageQue);
  window.scrollTo(0, document.body.scrollHeight);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('user message', input.value);
    input.value = '';
  }
});

socket.on('user message', (message) => {
  addMessages(message);
});

socket.on('user connected', (message) => {
  addMessages(message);
});

socket.on('user disconnected', () => addMessages('user disconnected...'));
