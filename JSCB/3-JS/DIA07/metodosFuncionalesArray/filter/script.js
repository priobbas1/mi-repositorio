"use strict"

//METODO FILTER
//Devuelve un NUEVO array con los mismos o menos elementos que el original

//El callback recibe un elemento: en cada vuelta un elemento del array

//Opcionalmente tmabien recibe el indice y el propio array

//El callback debe devolver un booleano, si es true el elemento estara en nuevo array y si es false, no.

const numArr = [7, 24, 9, 36, 27, 58]

const pares = numArr.filter(num => num %2 === 0)

console.log(pares);

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


const baratos = objArr.filter(obj => obj.precio < 10)

//IMPORTANTE: si el array es de objetos, siguen siendo los mismos objetos, aunque en el array nuevo haya menos

console.log(baratos);

//LOGICA DETRAS DE FILTER
//SI NADA PASA EL FILTRO, DEVUELVE UN ARRAY VACIO

function filter (arr, callback){
    const newArr = [];

    for (const el of arr){
        if(callback(el)/* ===true */){
            newArr.push(el)
        }
    }

    return newArr
}

console.log(filter(numArr, num => num % 2 === 0));

