"use strict"

//METODO MAP
//Devuelve un nuevo array con la misma cantidad de elemtos que el original

//En cada vuelta coge un elemento del array (el callback recibe un argumento)

//opcionalmente puede recibir el indice y el propio array

//En cada posicion del nuevo array mete lo que devuelva el callback para esa posicion del original

const numArr = [6, 8, 25, 1, 32]

const dobles = numArr.map(el => el *2)

console.log(dobles);

const pares = numArr.map(el => el%2 === 0)

console.log(pares);

const aleatorios = numArr.map (el => Math.round(Math.random()*10))

console.log(aleatorios);

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

//Hay que tener en cuenta que el elemento es el mismo objeto
//Si lo modifico, lo modifico en el original

const objMap = objArr.map(el => {el.like = true; return {precio: el.precio}
})

console.log(objMap);
console.log(objArr);


//Si queremos que en el array nuevo lo que haya sean copias de los objetos, por cada objeto devolvemos un objeto nuevo que contenga el spread (contenido) del original

const objMap2 = objArr.map(el =>{ return {...el, stock: 0}
})

console.log(objArr);
console.log(objMap2);

//LOGICA DETRAS DE MAP

function map (arr, callback){
    const newArr = [];
for(const el of arr){
    const newEl = callback (el)
    newArr.push(newEl)
}

return newArr
}

const dobles2 = map(numArr, el => el*2)

console.log(dobles2);

