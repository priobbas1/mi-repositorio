"use strict"

let secondsCounter = 0;

const botonStart = document.querySelector(".start")

const botonStop = document.querySelector(".stop")

const botonPause = document.querySelector(".pause")

const div = document.querySelector("div")

let secondInterval = 0

let printInterval = 0

function printTime(){
    /* console.log(`${secondsCounter} segundos`); */
    div.textContent =  (`${secondsCounter/100} segundos`);
}

function buttonClickHandlerStart(){

    div.textContent =  secondsCounter

    secondInterval = setInterval(() => secondsCounter++
    , 10)

    /* printInterval = setInterval(printTime, 1000) */

    printInterval = setInterval(printTime, 10)
}

function buttonClickHandlerStop(){
    
    secondsCounter = 0;

    clearInterval(secondInterval)

    clearInterval(printInterval)
}

function buttonClickHandlerPause(){

    clearInterval(secondInterval)

    clearInterval(printInterval)
}
    
    botonStart.addEventListener("click", buttonClickHandlerStart) 

    botonStop.addEventListener("click", buttonClickHandlerStop) 

    botonPause.addEventListener("click", buttonClickHandlerPause) 






