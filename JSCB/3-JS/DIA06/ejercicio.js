"use strict"

//Crea una funcion que reciba un string y devuelva TRUE si es palindromo y false si no

//Un string es palindromo cuando se lee igual al derecho y al reves

//Podemos asumir que no va a haber signos de puntuacion ni acentos, pero si puede haber mayusculas y espacios en distintos sitios

const ejString1 = "Arriba la birra"
const ejString2 = "Dabale arroz a la zorra el abad"

//console.log(ejString1SinEspacios);

/* console.log(((ejString1SinEspacios.slice(0, Math.round(ejString1SinEspacios.length/2))).split("")).reverse()); */

/* console.log(ejString1SinEspacios.slice(ejString1SinEspacios.length/2, ejString1SinEspacios.length)); */

function quitarEspacios (string){
    
    return string.replaceAll(" ","").toLowerCase();
}

function devolverPrimeraMitad (string){

    return string.slice(0, Math.floor(string.length/2)).split("")
}

function devolverSegundaMitad (string){

    return string.slice(Math.round(string.length/2),string.length).split("");
}

function esPalindromo (array1, array2){

    for(let i=0; i<array1.length; i++){
        if (array1[i]!==array2[i]){
            return false;
        }
    }
    return true;
}

console.log(devolverPrimeraMitad(quitarEspacios(ejString2)));

console.log(devolverSegundaMitad(quitarEspacios(ejString2)));

console.log(esPalindromo(devolverPrimeraMitad(quitarEspacios(ejString1)), devolverSegundaMitad(quitarEspacios(ejString1)).reverse()));

//VARIANTE ZOE

