"use strict"

let secondsCounter = 0;

const botonStart = document.querySelector(".start")

const botonStop = document.querySelector(".stop")

const botonPause = document.querySelector(".pause")

const div = document.querySelector("div")

let secondInterval = 0

let printInterval = 0

function printTime(){
    console.log(`${secondsCounter} segundos`);
}

function buttonClickHandler(){

    secondInterval = setInterval(() => secondsCounter++
    , 1000)

    printInterval = setInterval(printTime, 1000)
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
    
    botonStart.addEventListener("click", buttonClickHandler) 

    botonStop.addEventListener("click", buttonClickHandlerStop) 

    botonPause.addEventListener("click", buttonClickHandlerPause) 






