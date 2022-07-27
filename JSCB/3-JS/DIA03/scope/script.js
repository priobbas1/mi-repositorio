"use strict"

//SCOPE: ambito de alcance de las variables

/* 

Donde podemos usar una variable y cual es su valor, dependera de donda la definimos

*/

//SCOPE GLOBAL

console.log("////GLOBAL////");
const variableGlobal = "global";

console.log("global", variableGlobal);

const variable = "global";

console.log("var", variable);

if(true){
    console.log("/// LOCAL 1 ///");
    console.log("Gglobal: ", variableGlobal);

    const variable = "local 1"
    console.log("var:", variable);

    const local1 = "local 1"
    console.log("local1: ", local1);

    if(true){

        console.log("/// LOCAL 2 /// ");
        console.log("global: ", variableGlobal);

        console.log("local1:", local1);

        const variable = "local2"
        console.log("var: ", variable);

        const local2 = "local2"
        console.log("local2: ", local2);
    }

    console.log(" ");
        console.log("////LOCAL 1 ////");

        console.log("var: ", variable);

        //console.log("local2", local2); //error no existe
}

console.log("var:", variable);
//console.log("local1", local1); //no existe
//console.log("local2", local2); //no existe


/* let resultado;

switch(algo){
    resultado= "algo"
}

console.log(resultado); */


/* Si voy a tener un valor dentro de un bloque, pero qiuero usarlo fuera, tendre que definirlo fuera y modificarlo dentro */

/* let esPar;
let num=4;
if(!(num%2)){
    esPar="si"
} */

let edad;

if(edad>=18){
    console.log("mayor de edad");
}
else{
    console.log("menor de edad");
}

let frase;

if(edad>=18){
    frase="mayor de edad";
}
else{
    frase="menor de edad";
}

console.log(frase);

let num =6;
let palabra;

if(num>8){
    palabra="hola";
    console.log(palabra);
}
else if (num>2){
    palabra = "adios";
    console.log(palabra);
}
else {
    palabra = "muy buenas"
    console.log(palabra);
}



