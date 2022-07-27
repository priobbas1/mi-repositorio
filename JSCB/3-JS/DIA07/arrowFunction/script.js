"use strict"

//ARROW FUNCTIONS
//Una sintaxis mas sencilla para declarar funciones
//Son funciones ANONIMAS: si las queremos volver a usar, debemos guardarlas en una variable

/* (parametro1, parametro2...) => resultado  //return implicito, no puede ejecutar varias lineas */

/* () => resultado //aunque no hay parametros, tiene que estar los parentesis */

/* () => {
    //codigo
    return resultado
} //si tiene llaves, el return tiene que ser explicito*/

function funcionSuma(numA, numB){
    return numA+numB;
}

console.log(funcionSuma(4,5));

const arrowSuma = (numA, numB) => numA + numB;

console.log(arrowSuma(4,5));


//Funcion flecha con return explicito
const arrowSumaLlaves = (numA, numB) => {
    return numA + numB
}

console.log(arrowSumaLlaves(4,5));

// ARROW FUNCTION COMO CALLBACK

function calcular(callback, numA, numB){
    return callback(numA, numB)
}

//Puedo crear funciones flecha para pasar como callback en la propia llamada a la funcion que necesita dicho callback
console.log(calcular (((a,b) => a + b), 3, 5));

console.log(calcular ((num1,num2) => num1 * num2, 3, 6));

//console.log(calcular("hola", 5, 3));
//error: callback is not a function

