document.querySelector(".totalScorelevel").innerHTML = 5;
document.querySelector(".scrambleListWord").innerHTML = "aplep";

let right = 0;
let wrong = 0;

function checkWord() {
  let inputWord = document.querySelector(".input");
  if (inputWord.value === "") {
    alert("Enter a valid word.");
  } else if (inputWord.value === "apple") {
    document.querySelector(".yourRight").innerHTML = ++right;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "tnahpele";
  } else if (inputWord.value !== "apple") {
    document.querySelector(".yourWrong").innerHTML = ++wrong;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "tnahpele";
  } else if (inputWord.value === "elephant") {
    document.querySelector(".yourRight").innerHTML = ++right;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "ogd";
  } else if (inputWord.value !== "elephant") {
    document.querySelector(".yourWrong").innerHTML = ++wrong;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "ogd";
  } else if (inputWord.value === "dog") {
    document.querySelector(".yourRight").innerHTML = ++right;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "tac";
  } else if (inputWord.value !== "dog") {
    document.querySelector(".yourWrong").innerHTML = ++wrong;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "tac";
  } else if (inputWord.value === "cat") {
    document.querySelector(".yourRight").innerHTML = ++right;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "wemo";
  } else if (inputWord.value !== "cat") {
    document.querySelector(".yourWrong").innerHTML = ++wrong;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "elephant";
  } else if (inputWord.value === "meow") {
    document.querySelector(".yourRight").innerHTML = ++right;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "End";
  } else if (inputWord.value !== "meow") {
    document.querySelector(".yourRight").innerHTML = ++wrong;
    inputWord.value = "";
    document.querySelector(".scrambleListWord").innerHTML = "elephant";
  } else {
    alert("Wrong");
  }
}
