"use strict";

const numA = 4;
const numB =5;

//CONCATENACION O SUMA (+)
const suma = numA+numB;

console.log("suma: ", suma);


//Concatenacion (sumar strings)

const str1 = "Hola";
const str2 = "mundo";

const frase = str1 + " " +str2;

console.log(frase);

console.log("4" - 2);

console.log("4" + 2);

console.log(2 + "2" + 2);

console.log(2 + 2 + "2" + 2);

/* Sacar por consola la frase "Soy _nombre_ y tengo _edad_ años" */

let edad = 30;
const nombre = "Pablo";

let frase2 = "Soy " + nombre + " y tengo " +edad +" años";

console.log(frase2);

console.log ("Soy", nombre, "y tengo", edad, "años"); 
console.log ("Soy " + nombre + " y tengo " + edad + " años");


//RESTA (-)
console.log("resta:", numA-numB);

console.log("8" - numA);

//MULTIPLICACION (*)
console.log("multiplicacion:", numA*numB);

//DIVISION (/)
console.log("division:", numB/numA);

//MODULO (%)
//Devuelve el resto de la division
console.log("modulo", numB%numA);

//POTENCIA (**)
console.log("potencia:",numA**numB);

//////////////////////////////////////////

//AUTO ASIGNACION
let puntos = 5;

//// Unarios

///Incremento
puntos++; // puntos = puntos +1
puntos++;

console.log("incremento", puntos);

///Decremento
puntos--; //puntos = puntos - 1

console.log("decremento", puntos);

////Binarios
////SUMA
puntos +=4; // puntos = puntos + 4;
console.log("suma", puntos);

//RESTA
puntos -=3 //puntos = puntos - 3
console.log("resta", puntos);

//MULTIPLICACION
puntos *=2 //puntos = puntos * 2

console.log("multiplicacion:", puntos);

//DIVISION
puntos /=7 //puntos = puntos /7

console.log("division:", puntos);

//MODULO
puntos%=3; // puntos = puntos %2
console.log("modulo:", puntos);

//POTENCIA
puntos**=2 // puntos =puntos **2

console.log("potencia:", puntos);

////////////////////
/* Cuando hacemos operacions con strings (excepto concatenacion), si puede convierte el string a numero y hace la operacion sin problema */

console.log("4" / "2"); //2


/* Si no puede convertirlo, da NaN (Not a Number) */

console.log("aa" / 2);  //NaN


//////////////////////////////////

//ORDEN DE PRIORIDAD
/* JavaScript sigue el orden de prioridad matematico, potencias > multiplicaciones/divisiones > sumas/restas*/


console.log(4+2*3); // 4 + 6 = 10

/* Se puede dar prioridad con parentesis */

console.log((4+2)*3); // =6 *3 = 18






