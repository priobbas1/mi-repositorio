"use strict"



const titulo = document.querySelector("h1")

const ul = document.querySelector("ul")


setInterval(randomColor, 1000)

function randomColor(){
    titulo.style.backgroundColor = "rgb("+randomNumber()+", "+randomNumber()+", "+randomNumber()+")";
}


function randomNumber(){
    let num=Math.floor(Math.random()*257)

    return num;
}


let li = document.querySelectorAll("li")

console.log(li);

setInterval(randomColor2, 1000)



function randomColor2(){
    for (let i = 0; i< li.length; i++){

        li[i].style.backgroundColor = "rgb("+randomNumber()+", "+randomNumber()+", "+randomNumber()+")";
    }
}

function addSquare(){

    ul.append(document.createElement("li"))

    li = document.querySelectorAll("li")
}

console.log(ul);

const button = document.querySelector("button")

button.addEventListener("click", (e)=>{addSquare()})