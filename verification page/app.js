const loader = document.getElementById("code");
const inputHandler = document.querySelectorAll('input[type="text"]');
const generatedCode = [];
const userInput = [];

window.addEventListener("load", () => {
  inputHandler[0].focus();
});

for (let input of inputHandler) {
  input.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      userInput.pop();
      input.previousElementSibling.focus();
    } else {
      nextInput(input, e);
    }
  });
}

const genCode = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i <= 3; i++) {
    const rand = Math.floor(Math.random() * array.length);
    generatedCode.push(rand);
  }
  loader.innerHTML = `${generatedCode.join("")}`;
};

const nextInput = (input, e) => {
  if ((input.value.length === 1) | (e.charCode === 13)) {
    userInput.push(e.key);
    if (userInput.length <= 3) {
      input.nextElementSibling.focus();
    } else {
      checker(generatedCode, userInput);
    }
  }
};

const checker = (generatedCode, userInput) => {
  if (generatedCode.join("") === userInput.join("")) {
    document.querySelector(".status").innerHTML = "VERIFIED!!!";
    userInput = [""];
    generatedCode = [""];
  } else {
    document.querySelector(".status").innerHTML = "WRONG CODE :(";
    userInput = [""];
    generatedCode = [""];
  }
  setTimeout(() => {
    document.location.reload();
  }, 2000);
};

genCode();
