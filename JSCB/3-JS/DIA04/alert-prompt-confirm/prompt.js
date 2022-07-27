"use strict";

//Muesta una ventana emergente con un mensaje y un input
//Bloquea la pagina
//Su valor es lo que el usuario introduzca en el input (SIEMPRE STRING)

let nombre = prompt("Introduce tu nombre: ");



console.log(nombre);

if(!nombre){
    console.log("no hay nombre");
}

else{
    console.log(nombre);
}

let edad =prompt("introduce tu edad");

console.log(`dentro de un año tendras ${+edad+1} años`);

//OTRAS FORMAS DE CONVERSION 
// De strings a numeros

console.log(Number("3"));
console.log(parseInt("3"));
console.log(parseInt("3.5")); //solo para enteros
console.log(parseFloat("3"));
console.log(parseFloat("3.5"));