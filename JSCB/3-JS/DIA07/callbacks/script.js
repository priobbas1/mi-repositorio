"use strict"

//CALLBACKS

//son funciones que se pasan como argumento de otras funciones que se pasan para usarlas dentro de estas

function sumar(numA, numB){
    return numA+numB;
}

/* console.log(suma(3,4)); */

function restar (numA, numB){
    return numA-numB
}

/* console.log(resta(8, 6)); */

function multiplicar (numA, numB){
    return numA*numB
}

/* console.log(multiplicar(4, 5)); */

function calcular(operacion, numA, numB){
    return operacion (numA, numB)
}

console.log(calcular(multiplicar, 4, 5));

console.log(sumar);

console.log(calcular(sumar, 3, 8));

function calcular4_5(operacion){
    return operacion (4, 5)
}

console.log(calcular4_5(multiplicar));
console.log(calcular4_5(sumar));
console.log(calcular4_5(restar));

function test (string, string2, string3){
    console.log(string+string2+string3);
}

calcular(test, 4, 5) //Los argumentos no cuadran con el callback --> MAL //La funcion calcular no esta devolviendo dos variables, mientras que la funcion test necesita tres parametros //Si devolvemos tres variables, por ejemplo, return operacion (numA, numB, 5), la funcion test nos concatenaria los tres numeros

