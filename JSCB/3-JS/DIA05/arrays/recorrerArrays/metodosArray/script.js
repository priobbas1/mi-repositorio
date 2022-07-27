"use strict"

const frutas = ["manzana", "fresa", "platano", "fresa"]

//PUSH: añadir elementos al final
//MODIFICA EL ORIGINAL

frutas.push("pera")

frutas.push("naranaja", "limon")

console.log(frutas);

//UNSHIFT: añadir elementos al principio
//MODIFICA EL ORIGINAL
frutas.unshift("mandarina", "cereza")

console.log(frutas);

//POP: elimina y devuelve el ultimo elemento
//MODIFICA EL ORIGINAL

const ultimo = frutas.pop ()

console.log(frutas);
console.log(ultimo);

console.log(frutas.pop());
console.log(frutas);

/* console.log(frutas.push(frutas.pop())); */

//SHIFT eliminar y devuelve el primer elemento
//MODIFICA EL ORIGINAL

const primero = frutas.shift();

console.log(primero);
console.log(frutas);

//INDEX OF: devuelve la primera posicion del elemento
//Si no existe, devuelve -1
//acepta un segundo paramentro "startPosition" desde el que empieza a comprobar (no comprueba los anteriores)

console.log(frutas.indexOf("fresa"));

console.log(frutas.indexOf("piña"));

console.log(frutas.indexOf("fresa", 3));

//LAST INDEX OF: Exactamente lo mismo, empezando por el final

console.log(frutas.lastIndexOf("fresa"));
console.log(frutas.lastIndexOf("piñas"));
console.log(frutas.lastIndexOf("fresa",3));

//REVERSE: le da la vuelta
//MODIFICA EL ORIFINAL

frutas.reverse();
console.log(frutas);

//SPLICE: Elimina elementos dentro del array y devuelve un nuevo array con esos elementos
//MODIFICA EL ORIGINAL
/* 
array.splice(dondeEmpieza, cuantosQuita, queAñade) 
*/

console.log(frutas.splice(2,2));
console.log(frutas);

/* console.log(frutas.splice(2,0,"melocoton")); *///no quita nada por eso array vacio
frutas.splice(2,0,"melocoton")
console.log(frutas);

//SLICE: devuelve elementos del array
//NO modifica el original
//array.slice(dondeEmpieza, dondeAcaba) Donde empieza incluido, donde acaba no.

console.log(frutas.slice(2,5));

console.log(frutas);

//JOIN: concatena todos los elementos
//Se puede pasar como parametro un separador, si no, pone comas

//NO modifica el array

console.log(frutas.join())

console.log(frutas.join(", "))

console.log(frutas.join(""))


