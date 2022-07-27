"use  strict"

//CONDICIONAL SWITCH

/* 
switch (variableAComparar){
    case posibleValor1:
        //codigo que se ejectura si
        variable = valor1
    break;
    case posibleValor2:
        //codigo que se ejectura si
        variable = valor2
    break;
    default:
        //codigo que se ejectura si no coincide con ningun valor
    break;
} */

const mascota = "gato";

switch (mascota){

    case "gato":
        console.log("Es un gato");
        break;

    case "perro":
        console.log("Es un perro");
        break;

    case "loro":
        console.log("Es un perro");
        break;

    default:
        console.log("Desconocido");
        break
}

//Podemos agrupar varios case

switch (mascota){
    case "gato":
    case "perro":
        console.log("Tiene 4 patas");
    break;
    case "loro":
        console.log("Tiene 2 patas");
    break;
    case "pez":
        console.log("Tiene aletas");
    break;

    default:
        "Desconocido"
    break;
}

//Podemos encadenar resutlados si no ponemos el break