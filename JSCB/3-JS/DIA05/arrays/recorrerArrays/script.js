"use strict"

const miArray = ["a", "b", 1, 2]

console.log(miArray);

//PROPIEDAD LENGTH
//array.length
//Indica la cantidad de elementos que hay en el arrau
// Siempre es 1 mas que l aultima posicion

console.log(miArray.length);

//RECORRER CON FOR

for (let i=0; i<miArray.length; i++){
    console.log(miArray[i]);
}

//Funcion que recibe un array de numeros y devuelve la media de esos numeros

//La media se calcula sumando todos los numeros y dividiendo el resultado por la cantidad de numeros

const arrNotas = [2, 5, 7];

function calcularMedia (notas){

    let media = 0;

    for(let i=0; i<notas.length; i++)
    {
        media+=notas[i]
    }
    media/=notas.length;

    return Math.round(media*100)/100;
}

console.log(calcularMedia(arrNotas));


//RECORRER CON FOR:: OF
console.log("///////////////////");

/* 
 */


const colores = ["rojo", "azul", "amarillo"];

for (const color of colores){
    console.log(color);
}

function calcularMedia2(numArr){
    let suma=0;
    for(const num of numArr){
        suma+= num;
    }

    return suma / numArr.length
}

console.log(calcularMedia2(arrNotas));


