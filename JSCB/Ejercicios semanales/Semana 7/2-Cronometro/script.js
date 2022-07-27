"use strict"

let secondsCounter = 0;

const botonStart = document.querySelector(".start")

const botonStop = document.querySelector(".stop")

const botonPause = document.querySelector(".pause")


function buttonClickHandler(){
    const secondInterval = setInterval(() => secondsCounter++
    , 1000)

    function printTime(){
        console.log(`${secondsCounter} segundos`);
    }

    const printInterval = setInterval(printTime, 1000)
}

function buttonClickHandlerStop(){
    secondsCounter=0;

    clearInterval(secondInterval)
}
    
    
    botonStart.addEventListener("click", buttonClickHandler) 

    botonStop.addEventListener("click", buttonClickHandlerStop) 






