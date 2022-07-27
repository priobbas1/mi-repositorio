"use strict"

//METODO REDUCE
//Reduce el array a un unico elemento*

//*ese "unico" elemento puede ser cualquier cosa: un numero, un string, un booleano, un objeto, un array

//El elemento resultante sera lo que quede en el acumulador cuando acabe de recorrer el array

//El callback recibe dos valores: acumulador y valorActual (cada uno de los elementos del array)

//En cada vuelta guarda en el acumulador lo que devuelva el return

//El metodo pude recibir un segundo parametro: el inicializador.

//Si se pasa, el acumulador se inicia con ese valor. SI no, coge el valor del primer elemento y se salta la primera vuelta.

const numArr = [6, 8, 7, 25, 6]

const total = numArr.reduce((acc, current) => acc + current)

console.log(total);

//Tiene mas sentido map, pero SE PUEDE usar reduce
const test = numArr.reduce((acc, current) => {
    acc.push(current * 2)
    return acc
}, [])

console.log(test);

const test2 = numArr.reduce(((acc, current, i)) => {
    acc[´claves${i}´] = current
}
