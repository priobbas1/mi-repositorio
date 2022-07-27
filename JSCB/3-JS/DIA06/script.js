"use strict"

let string = "¡Metodos con strings 😀!";

//LENGTH: tecnicamente no es un metodo sino una propiedad
//Cuantos caracteres tiene el string


console.log((string.length));

//TO LOWER CASE: pone todo en minuscula

console.log(string.toLowerCase());

console.log(string); //si hacemos console log del string vemos que no lo ha modificado

//Muy util cuando queremos comprobar dos string y nos da igual si esta en mayusculas o no

const nombre = "Zoe"

//const userInput = prompt ("Introduce tu nombre")

const userInput = "ZOE"

console.log(nombre.toLowerCase() === userInput.toLowerCase());

//TO UPPER CASE: lo mismo, pero pasando a mayusculas

console.log(string.toUpperCase());

//INDEX OF: devuelve la posicion dentro del string de un caracter o conjunto de caracteres
//SI no lo encuentra, devuelve -1

console.log(string.indexOf("o"));

console.log(string.indexOf("on"));

console.log(string.indexOf("m"));

console.log(string.toLowerCase().indexOf("m"));

//LAST INDEX OF: lo mismo pero desde el final

console.log(string.lastIndexOf("o"));

//REPEAT: repite el string el numero de veces indicado

console.log(string.repeat(2));

console.log("hola".repeat(5));

//REPLACE: sustituye un trozo de string por otro, la primera vez que aparece

console.log(string.replace("con", "de"));

console.log(string.replace("o","a"));

//REPLACE ALL: sustituye un trozo de string por otro todas las veces que aparece

console.log(string.replaceAll("o", "a"));

//SPLIT: divide el string y devuelve un array con los trozos
//Podemos añadir un parametro para indicar el separador

console.log(string.split());
console.log(string.split(" "));
console.log(string.split(""));


//SLICE: Devuelve una parte del string
//Indicamos el indice donde empieza 

console.log(string.slice(4,8));







