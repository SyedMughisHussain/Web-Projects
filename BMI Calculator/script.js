function resetValue() {
  const weightInput = document.querySelector(".weight");
  const heightInput = document.querySelector(".height");
  const bmiValue = document.querySelector(".bmi-container");
  weightInput.value = 0;
  heightInput.value = 0;
  bmiValue.innerHTML = 0;
  document.querySelector(".bmi-container").style.color = "black";
}

function calculateBmi() {
  const NumberweightInput = document.querySelector(".weight");
  const heightInput = document.querySelector(".height");
  const bmiValue = document.querySelector(".bmi-container");

  const noWeight = Number(NumberweightInput.value);
  const noHeight = Number(heightInput.value);
  if (noWeight <= 0 || noHeight <= 0) {
    alert("Please enter both values correctly.");
  } else {
    let valueOfHeight = Math.pow(noHeight, 2);
    let result = (noWeight / valueOfHeight) * 10000;
    bmiValue.innerHTML = result.toFixed(2);
    identifyBmi(result);
    console.log(result);
  }
}

function identifyBmi(bmiVal) {
  const health = document.querySelector(".rateOfHealth");
  if (bmiVal < 18.5) {
    health.innerHTML = `You are <b>UnderWeight</b>`;
    document.querySelector(".bmi-container").style.color = "yellow";
  } else if (bmiVal < 25) {
    health.innerHTML = `You are <b>Healthy</b>`;
    document.querySelector(".bmi-container").style.color = "green";
  } else if (bmiVal < 30) {
    health.innerHTML = `You are <b>OverWeight</b>`;
    document.querySelector(".bmi-container").style.color = "orange";
  } else {
    health.innerHTML = `You are <b>Obese</b>`;
    document.querySelector(".bmi-container").style.color = "red";
  }
}
