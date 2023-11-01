let button = document.querySelector(".buttonPassword");
let copyButt = document.querySelector(".copyButton");

function generatePassword() {
  let input = document.querySelector(".inputPassword");
  let random = generateRandom();
  input.value = random;
}

function copyPassword() {
  var pass = document.querySelector(".inputPassword");
  pass.select();
  navigator.clipboard.writeText(pass.value);
}

function generateRandom() {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";
  let password = "";
  for (let i = 0; i < 12; i++) {
    let randChar = Math.floor(Math.random() * characters.length + 1);
    password += characters.charAt(randChar);
  }
  return password;
}

copyButt.addEventListener('click',copyPassword);
button.addEventListener("click", generatePassword);
