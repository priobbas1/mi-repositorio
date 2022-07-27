"use  strict"

//Vamos a tener 3 variables: 2 de números y una de operador (string)
//En base al operador haremos la operación correspondiente con los números
// suma, resta, multiplicación y división

/* let numA = 6;
let numB = 4;
let operador = "x"; */
// en este caso por consola debe salir 10 (6 * 4)
// si el operador es - saldrá 2 ( 6 - 4)
// así sucesivamente sin cambiar el codigo, solo la variable operador


let numA = prompt("Introduce el primer numero");
let operador = prompt("Introduce el signo del operador");
let numB = prompt("Introduce el segundo numero");

if (parseInt(numA)===0 && parseInt(numB)===0 && operador==="/")
    console.log("Operacion invalida");

else{
    switch (operador){
        case ("+"):
            console.log(parseInt(numA)+parseInt(numB));
            break;
        case ("-"):
            console.log(numA-numB);
            break;
        case ("*"):
            console.log(numA*numB);
            break;
        case ("/"):
            console.log(numA/numB);
            break;
        default:
            console.log("Operacion invalida");
            break;
    }
}

//Prompt permite al usuario introducir datos pero los guarda como un tipo String, por eso, en el caso de la suma concatena los dos numeros

//Con variable para resultado

let resultado;

switch (operador){
    case ("+"):
        resultado=(+numA+numB);
        break;
    case ("-"):
        resultado=numA-numB;
        break;
    case ("*"):
        resultado=numA*numB;
        break;
    case ("/"):
        resultado=numA/numB;
        break;
    default:
        resultado="Operacion invalida";
        break;
}

console.log("El resultado de " + numA +operador +numB +" es " +resultado);

