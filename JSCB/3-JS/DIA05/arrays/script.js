"use strict"

//ARRAYS 

//Un array es un conjunto de datos (una lista), con orden
//van entre corchetes 
//Puede tener cualquier tipo de dato, sepran con comas
//["un string", "otro string", variable, 8, ()=>{console.log("soy una funcion!")}, ["hola", 1, 2], {}]

//Como crear un array

//Vacio =

const arr1 = /* new */ Array();
const arr2 = [];

console.log(arr1, arr2);

//Array con cosas

const arrCosas = ["hola", 2, 45, "adios"];

console.log(arrCosas);

const colores = ["rojo", "azul", "amarillo"];


//Seleccionar un elemento del array
//Empezamos a contar en 0!!
//array[posicion]

console.log(colores[1]);

const arrAnidado = [["a", "b", "c"], [1, 2, 3]];

console.log(arrAnidado[0][1]);

function generateArr(){

    /* return [1, 2, 3] */ //Se puede devolver un array
    return arrAnidado[0]
}

console.log(generateArr()[2]);

//Modificar posiciones
colores[3]="verde"

colores[5]="rosa"

colores[1]="naranja"

console.log(colores);

////
//Los arrays son PUNTEROS
//Lo que guardo es una refrencia a un espacio fisicio de la memoria. Puedo modificar lo que hay en el, que la referencia sigue siendo la misma.

//Cuando copio un puntero, solo copio la referencia, el espacio es el MISMO, y las modifcaciones, se aplican a los dos

const colores2 = colores; //AQUI GUARDAMOS EN COLORES2 LA REFERENCIA (EL CODIGO) QUE TENEMOS EN COLORES

colores[4]="azul"

console.log(colores2);
console.log(colores);

console.log("hola"==="hola");

console.log(colores === colores2);

//Ademas, no podemos comprobar directamente si tienen el mismo contenido, porque dos array nunca seran iguales si no son el MISMO array

console.log([1] === [1]);

console.log([1, 2] === [1, 2]);

//¿COMO PODEMOS DUPLICAR ARRAYS?
//SPREAD (...)

//COPIA POCO PROFUNDA (SOLO COPIA EL PRIMER NIVEL)
console.log(...colores); //spread saca para fuera los datos que haya dentro //es como hacer el console log con variables string separadas por coma, con console log funciona poraque puede trabajar con varios argumentos pero podraia ser que no

const colores3 = [...colores] //meto el contenido (spread) del array original en uno nuevo

//ES UNA COPIA POCO PROFUNDA. SI tuviera dentro arrays u objetos seguiria pasando lo mismo

console.log(colores3===colores);

//Ahora si modifica la copia, no afecta al original
colores3[0]="violeta";

console.log(colores3);
console.log(colores);




