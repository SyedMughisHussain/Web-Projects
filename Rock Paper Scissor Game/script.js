let userChoice = document.querySelector(".user");
let computer = document.querySelector(".computer");
let string = document.querySelector(".string");
let yourScore = document.querySelector(".your");
let comScore = document.querySelector(".computer");

function random() {
  let images = [
    "./images/rock.png",
    "./images/paper.png",
    "./images/scissors.png",
  ];
  let index = Math.floor(Math.random() * images.length);
  return [images[index], index];
}

let comp = 0;
let your = 0;

function initGame(choice) {
  if (choice === "rock") {
    userChoice.src = "./images/rock.png";
    let val = random();
    computer.src = val[0];
    if (val[1] === 0) {
      string.innerHTML = "Draw!!";
    } else if (val[1] === 1) {
      string.innerHTML = "Cpu Won!!";
      ++comp;
    } else if (val[1] === 2) {
      string.innerHTML = "User Won!!";
      ++your;
    }
  } else if (choice === "paper") {
    userChoice.src = "./images/paper.png";
    let val = random();
    computer.src = val[0];
    if (val[1] === 0) {
      string.innerHTML = "User Won!!";
      ++your;
    } else if (val[1] === 1) {
      string.innerHTML = "Draw!!";
    } else if (val[1] === 2) {
      string.innerHTML = "Cpu Won!!";
      ++comp;
    }
  } else if (choice === "scissor") {
    userChoice.src = "./images/scissors.png";
    let val = random();
    computer.src = val[0];
    if (val[1] === 0) {
      string.innerHTML = "Cpu Won!!";
      ++comp;
    } else if (val[1] === 1) {
      string.innerHTML = "User Won!!";
      ++your;
    } else if (val[1] === 2) {
      string.innerHTML = "Draw!!";
    }
  }
  yourScore.innerHTML = your;
  comScore.innerHTML = comp;
}

function resetGame(){
  yourScore.innerHTML = 0;
  comScore.innerHTML = 0;
  string.innerHTML = "Let's Play!!";
  userChoice.src = './images/rock.png';
  computer.src = './images/rock.png'
} 
