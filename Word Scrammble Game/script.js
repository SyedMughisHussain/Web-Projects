

function getSeconds(){
    let date = new Date();
    let val =  date.getSeconds();
    console.log(date.toLocaleTimeString());
}

setInterval(getSeconds, 1000);



 

