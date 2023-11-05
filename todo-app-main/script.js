let addButton = document.querySelector(".add");
let inputValue = document.querySelector(".newtodo");
// let deleteButton = document.querySelector('.delete');
let itemsCon = document.querySelector('.items');

function addToDo() {
  if (inputValue.value === "") {
    alert("Enter the text first!");
  } else {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="check">
          <div class="inputBox">
            <p>${inputValue.value}</p>
          </div>
          <button class="delete">Delete</button>
        </div>
      `;
      itemsCon.appendChild(div);
    document.querySelector(".newtodo").value = '';
    div.querySelector('.delete').addEventListener('click',removeTask)
    function removeTask(){
        div.remove();
    }
  }
}


addButton.addEventListener('click',addToDo);
