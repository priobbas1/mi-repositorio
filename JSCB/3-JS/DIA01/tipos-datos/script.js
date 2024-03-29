"use strict";


/* STRING: cadenas de texto */
/* Se escriben entre comillas ('simples' o 'dobles') */

/* No pueden tener saltos de linea (mas adelante veremos otras mas mdoernas que si) Podemos simular saltos de linea usando \n */


const miFrase = "Estoy 'escribiendo' \n una frase";

const otraFrase = 'Esta es "otra" frase';

console.log(miFrase);

//Podemos saber que tipo de dato es algo usando typeof

console.log(typeof miFrase)


/* NUMBER: numeros */
/* JavaScript no distingue entre valores enteros y de punto flotante (con decimales) */

const miNumero=4;
const miDecimal=4.4;

console.log(miNumero, miDecimal);

console.log(typeof miNumero, typeof miDecimal);

/*BOOLEAN: ocupan 1bit. Dos valores posibles (=/1, si/no, verdadero/falso) 

Van SIN comillas, son paalabras reservadas*/

const miVerdadero =true;
const miFalso =false;

console.log(miVerdadero, miFalso);
console.log(typeof miVerdadero, typeof miFalso);

/* UNDEFINED: sin valor 
Este tipo de dato NUNCA lo creamos, se genera solo cuando algo no tiene un valor asignado*/

let miUndefined;

console.log(miUndefined);
console.log(typeof miUndefined);

/* NULL: sin valor a proposito. Asignamos null cuando queremos que algo no tenga valor 

Va sin comillas*/

const variableVacia =null;

console.log(variableVacia);
console.log(typeof variableVacia);


/*________________MINI EJERCICIO_______________*/

let edad = 30;
const nombre = "Pablo";

console.log(edad, nombre);









