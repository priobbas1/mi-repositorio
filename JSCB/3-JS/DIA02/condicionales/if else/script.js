"use  strict"

//CONIDICIONAL IF
/* 
if (condidion){
    //codigo que se ejecuta si la condicion es true
}
*/

const mascota = "perro";

if (mascota === "gato"){
    console.log("Es un gato");
}

//IF..ELSE
/*  if(condicion){
    codigo que se ejecuta si la condicion es true
}
else{
    //codigo que se ejecuta si NO se cumple la condicion
}
*/

if(mascota ==="gato"){
    console.log("Es un gato");
}
else{
    console.log("no es un gato");
}

//IF...ELSE IF
/*  if(condicion 1){
    //codigo que se ejecuta si la condicion 1 es true
}
else if(condicion 2){
    //codigo que se ejecuta si NO se cumple la condicion 1 pero SI se cumple la 2
}
else{
    //COdigo que se ejecuta si NO se cumple NINGUNA de las condiciones
}
*/

if(mascota ==="gato"){
    console.log("Es un gato");
}
else if (mascota === "perro"){
    console.log("No es un gato, es un perro");
}
else{
    console.log("No es ni un gato ni un perro");
}


//Puedo usar cualquier condicion

let num =14;

if(num > 8 && (num%2===0)){
    console.log("El numero es mayor que 8 y par");
}
else if (num>8){
    console.log("El numero es mayor que 8, pero no es par");
}
else if(num%2===0){
    console.log("El numero es par, pero no mayor que 8");
}
else if(mascota==="perro"){
    console.log("El numero no es par ni mayor que ocho. La mascota es un perro");
}
else{
    console.log("El numero no es mayor que 8, ni par, ni la mascota es un perro");
}

if(num > 8 && (num%2===0)){
    console.log("El numero es mayor que 8 y par");
}

if(num>8){
    console.log("El numero es mayor que 8");
}

if(num%2===0){
    console.log("El numero es par");
}



console.log("fin del script");