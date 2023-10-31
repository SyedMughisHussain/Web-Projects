let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");
let timer = document.querySelector(".timing");

let interval;
let timeRemaining = 1500;

function updateTimer() {
  let minutes = Math.floor(timeRemaining / 60);
  let seconds = timeRemaining % 60;
  let formatedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timer.innerHTML = formatedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    if (timeRemaining === 0) {
      clearInterval(interval);
      alert("Time's Up!");
      timeRemaining = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  timeRemaining = 1500;
  updateTimer();
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
