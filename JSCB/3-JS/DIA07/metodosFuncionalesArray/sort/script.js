"use strict"

//METODO SORT
//Ordena el array segun el resultado del callback
//MODIFICA EL ORIGINAL


//El callback recibe dos argumentos: dos elementos del array (empezando por el 0 y el 1, luego el 1 y el 2, el 2 y el 3...)

//El callback tiene que devolver un numero positivo, negativo o cero (decimales tambien) la funcion lo que va a mirar es si el numero es mayor o menor que cero

//Si el numero es mayor que 0, el primer elemento se coloca despues del segundo

//Si el numero es menor que cero, el primer elemento se coloca antes que el segundo

//Si el numero es igual a 0, se quedan como estan

/* sort (callback, arr){
    callback(arr[0], arr1[1])
} */

const numArr = [8, 25, 3, 87, 1, 0, 16]

//PARA ORDENAR DE MENOR A MAYOR a - b 
//numArr.sort((a, b) => a - b);

//PARA ORDENAR DE MAYOR A MENOR b - a
numArr.sort((a, b) => b - a);

console.log(numArr);

const stringArr = ["Caracol", "Zapato", "Berenjena", "lago", "Limon", "Amapola", "Bota","Casa"]

//las minusuculas se ordenan al final por orden alfabetico

//stringArr.sort();

//Para ordenar alfabeticamente al reves
stringArr.sort().reverse();

console.log(stringArr);

const objArr = [
    {
        objeto: "camiseta",
        precio: 15
    },
    {
        objeto: "pantalon",
        precio: 30
    },
    {
        objeto: "calcetines",
        precio: 5
    }
]

objArr.sort((a, b) => a.precio - b.precio)

console.log(objArr);

/* for(const objeto of objArr){
    objeto.precio.sort(a, b => a-b)
} */
