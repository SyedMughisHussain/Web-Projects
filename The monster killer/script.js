const attack_btn = document.getElementById("attack-btn");
const strong_attack_btn = document.getElementById("strong-attack-btn");
const heal_btn = document.getElementById("heal-btn");
const log_btn = document.getElementById("log-btn");

const monster_health = document.getElementById("monster-health");
const player_health = document.getElementById("player-health");

function attack() {
  const randomValueMonster = Math.floor(Math.random() * 10 + 1);
  const randomValuePlayer = Math.floor(Math.random() * 10 + 1);
  monster_health.value -= randomValueMonster;
  player_health.value -= randomValuePlayer;
  alertButton();
}

function strongAttack() {
  const randomValueMonster = Math.floor(Math.random() * 20 + 1);
  const randomValuePlayer = Math.floor(Math.random() * 20 + 1);
  monster_health.value -= randomValueMonster;
  player_health.value -= randomValuePlayer;
  alertButton();
}

function alertButton() {
  if (player_health.value <= 0 && monster_health.value > 0) {
    alert("You lose ☠️");
    restartGame();
  }
  if (monster_health.value <= 0 && player_health.value > 0) {
    alert("You Won 😲.");
    restartGame();
  }
  if(player_health.value <= 0 && monster_health.value <= 0){
    alert("You have a draw 😏.");
    restartGame();
  }
}

function heal() {
  if ( player_health.value >= 80) {
    alert("You can't heal to more than your max initial life!");
  }
  else{
    player_health.value += 25;
  }
}

function restartGame() {
  monster_health.value = 100;
  player_health.value = 100;
}

attack_btn.addEventListener("click", attack);
strong_attack_btn.addEventListener("click", strongAttack);
heal_btn.addEventListener('click', heal);
log_btn.addEventListener('click', function () {
    alert('Open console to see Battle log!')
});
