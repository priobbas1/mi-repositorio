"use strict"

// Convierte el código de la calculadora en una función
//https://gitlab.com/blueoceanstart/hack-a-boss/jsb12co/3-javascript/-/blob/master/dia02/condicionales/switch/ejercicio.js

function calculadora(numA, numB, operador){

    let resultado;

    switch(operador){
    case "+":
        resultado = (Number(numA)+ Number(numB));
        break;

    case "-":
        resultado = (numA - numB);
        break;

    case "x":
        resultado = (numA * numB);
        break;

    case "/":
        resultado = (numA / numB);
        break

    default:
        resultado = ("operacion no reconocida")
    }

    return resultado;
}

/* console.log(calculadora(prompt("Numero 1"), prompt("Numero 2"), prompt("Operador"))); */

/* let numero1 = prompt("Introduce un numero");
let operador = prompt("Introduce el operador (+, -, x, /)"); 
let numero2 = prompt("Introduce el segundo numero");

console.log("el resultado de " +numero1 +operador +numero2 + " es " +calculadora(numero1, numero2, operador)); */

function calculadora2(numA, numB, operador){

    switch(operador){
    case "+":
        return (Number(numA)+ Number(numB));
        break;

    case "-":
        return (numA - numB);
        break;

    case "x":
        return (numA * numB);
        break;

    case "/":
        return (numA / numB);
        break

    default:
        return "operacion no reconocida";
    }
}

let userNumero1 = prompt("Introduce un numero");
let userOperador = prompt("Introduce el operador (+, -, x, /)"); 
let userNumero2 = prompt("Introduce el segundo numero");

console.log("el resultado de " +userNumero1 +userOperador +userNumero2 + " es " +calculadora2(userNumero1, userNumero2, userOperador)); 



