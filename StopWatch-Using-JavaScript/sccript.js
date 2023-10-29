let timer = document.querySelector('.stopWatchTime');


function first(){
let current = new Date('August 19, 1975 00:00:00');
    let hours = current.getHours();
    let minutes = current.getMinutes();
    let seconds = current.getSeconds();
    timer.innerHTML = `${hours}:${minutes}:${seconds}`
}
