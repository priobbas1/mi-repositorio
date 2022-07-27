"use strict"



//OBJETOS
//Son conjuntos de datos con NOMBRE. No tienen orden
/* 
{
    key1:value1, //clave1:valor1,
    key2:value2, //clave2:valor2,
    key3:value3, //clave3.valor3,
} 
*/

//Los valores pueden ser cualquier cosa (string, numeros, arrays, objetos, funciones...)

//SON PUNTEROS

//Objeto vacio

const miObj = {};

//Objeto con contenido

const mascota = {
    especie: "gato",
    nombre: "Nymeria",
    edad: 3,
    patas: 4,
    vacunado: true,
    
    //una funcion dentro de un objeto se llama metodo
    hablar: function(){
        console.log("miau");
    },
    dueno: {
        nombre: "Zoe",
        edad: 28
    }
}

console.log(mascota);

//SELECCIONAR ELEMENTOS DEL OBJETO

//Sintaxis de punto
//Tenemos que escribir la clave tal cual

console.log(mascota.especie);

console.log(mascota.dueno);

console.log(mascota.dueno.nombre);


//Para ejecutar un metodo, lo seleccionamos y le ponemos los parentesis de la llamada
mascota.hablar();


//Sintaxis de corchetes
//Evalua lo que hay en los corchetes y busca la clave que coincida con el resultado

//console.log(mascota[edad]); //Si lo paso sin comillas, asume que es una varible
console.log(mascota["edad"]);

let clave = "nombre"

console.log(mascota[clave]);

console.log(mascota["pa" + "tas"]);

//LOS OBJETOS SON PUNTERO...
//Para clonarlos ... spread (poco profunda)

const mascotaCopia = mascota;

// ¡ES EL MISMO!
console.log(mascotaCopia === mascota);
mascotaCopia.edad = 4;

//Para clonarlo bien:
const mascotaClon = {...mascota}
console.log(mascotaClon === mascota);

//Es una copia POCO PROFUNDA. El dueño sigue siendo el mismo objeto

mascotaClon.dueno.nombre= "Maria";

console.log(mascota);
