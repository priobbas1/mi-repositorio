"use strict"

//METODO SOME

//Devuelve un booleano: true si el callback devuelve true para ALGUN elemento, false si no


//El callback recibe cada uno de los elementos y opcionalmente el indice y el array

//El callback debe devolver un booleano

const nums = [2, 8, 6, 7, 24]

const algunImpar = nums.some(num => num % 2 /* !== 0 */)

console.log(algunImpar);

const people = [
    {name: "Maria",
    age: 15
    },
    {name: "Pepe",
    age: 25
    },
    {
    name: "Laura",
    age:27
    }
]





