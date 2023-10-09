
let afterButtons = document.querySelector('.cont');
let result = document.querySelector('.result');

let yourScore = 0;
let computerScore = 0;

function rock(){
    let arr  = ['ROCK','PAPER','SCISSOR'];
    let index = Math.floor(Math.random() * arr.length);
    let val = arr[index];
    let YourChoose = document.createElement('div');
    YourChoose.innerHTML = `<p>You choose <b>ROCK</b></p>`;
    afterButtons.appendChild(YourChoose);
    let compChoose = document.createElement('div');
    compChoose.innerHTML = `<p>Com choose <b>${val}</b></p>`;
    afterButtons.appendChild(compChoose);
    if(val === 'ROCK'){
        let ele = document.createElement('p');
        ele.innerHTML = `Draw`;
        result.appendChild(ele);
    }   

}