"use strict"

//FUNCIONES
//Las funciones nos permiten crear bloques de codigo reutilizables

/* 
//declaracion

function nombbre (parametro1, parametro2, parametro3...){
    //Codigo
    //Deberia utilizar los parametros que para eso estan
}

*/

//Llamada (se ejecuta)
/* nombre (argumento1, argumento2, argumento3...)

PARAMETRO: variable que solo existe dentro de la funcion y sirve para definir lo que va a cambiar en cada llamada


ARGUMENTO = el valor deifnido que pasamos a la funcion para que trabaje con el

Al llamar a la funcion, los parametro se igualan a los argumentos segun su orden
*/



let persona1 = 15;

/* if (persona1 >=18){
    console.log("es mayor de edad");
}
else{
    console.log("es menor de edad");
} */

let persona2 = 30

/* if (persona2>=18){
    console.log("es mayor de edad");
}
else{
    console.log("es menor de edad");
} */

//DRY = DON'T REPEAT YOURSELF
//WET = WE ENJOY TYPING

function isAdult (person){
    if (person>=18){
        console.log("es mayor de edad");
    }
    else{
        console.log("es menor de edad");
    }
}


isAdult(persona1);
isAdult(persona2);
isAdult(20);

function funcion(parametro1, parametro2, parametro3){
    console.log("paramtro1 = ", parametro1);
    console.log("paramtro2 = ", parametro2);
    console.log("paramtro3= ", parametro3);
}

funcion ("argumento1", "argumento3", "argumento2");

//RETURN

//Define lo que devuelve la funcion

function isAdultReturn(age){
    if (age >= 18){
        return true;
    }
    else{
        return false;
    }
}

let esAdulto = isAdultReturn(20);
console.log(esAdulto);


function getRandom(min, max){
   /*  let randomNumber = Math.round((Math.random() * (max-min)) + min); */ //Con el Math.round los extremos tienen la mitad de posibilidades de salir que el resto de numeros
    let randomNumber = Math.floor((Math.random() * (max+1-min)) + min);

    return randomNumber;
}

console.log(getRandom(5, 15));

//Return para la funcion
function bucle(num){
    for(let i=0; i< num; i++){
        console.log(i);
        if(i == 5){
            return 
        }
    }
    console.log("esto nunca se ejecuta");
}

bucle(10);


//Una funcion no tiene por que tener parametros

function sayHi(){
    console.log("Hola");
}

sayHi();
sayHi();
sayHi();

//Las funciones pueden llamar a otras funciones

function random255(){
    return getRandom(0,255);
}

console.log(random255());


//FUNCIONES PURAS VS IMPURAS
//Las funciones puras dan siempre el mismo resultado para la misma entrada, no deberian modificar valores de fuera


//Dan resultado diferentes con la misma entrada

//Debemos intentar que las funciones sean puras (no siemore se puede, cualquiera que incluya componentes aleatorios, será impura)

let num = 2;//Variable

function dobleImpura(){
    num *=2;//modifico la variable num
    //num *=2;
    return num;
}

console.log(dobleImpura());
console.log(dobleImpura());

num = 2; //reseteo la variable

function doblePura(num){//parametro
        num *=2;//modifico el parametro (solo existe dentro de la funcion)
        //num *=2;
    return num;
}

console.log(doblePura(num));
console.log(doblePura(num));
console.log(doblePura(5));

console.log(`numero aleatorio de 0 a 255: ${random255()}`);

console.log(`rgb(${random255()}, ${random255()}, ${random255()})`);

const randomNum = random255();

console.log(randomNum);

