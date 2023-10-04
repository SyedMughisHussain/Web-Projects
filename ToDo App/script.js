let inputValue = document.querySelector(".input");
let val = document.querySelector(".text");

function addTask() {
  if (inputValue.value === "") {
    alert("Please Enter task.");
  } else {
    let newTask = document.createElement("ul");
    newTask.innerHTML = `${inputValue.value}`;
    val.appendChild(newTask);
}
}
