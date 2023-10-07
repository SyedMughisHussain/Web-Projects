let inputValue = document.querySelector(".input");
let val = document.querySelector(".text");

function addTask() {
  if (inputValue.value === "") {
    alert("Please Enter task.");
  } else {
    let newTask = document.createElement("ul");
    newTask.innerHTML = `${inputValue.value} <button>Delete</button>`;
    val.appendChild(newTask);
    setTask();
    newTask.querySelector('button').addEventListener('click', removeTask);
    setTask();
    function removeTask(){
      newTask.remove();
    }
}
setTask();
}
setTask()
function setTask()
{
  localStorage.setItem('data',addTask);
}

function getTask(){
  localStorage.getItem('data');
}
getTask();

