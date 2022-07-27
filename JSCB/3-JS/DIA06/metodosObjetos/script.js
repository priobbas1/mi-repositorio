"use strict"

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

//OBJECT KEYS: devuelve un array con las claves del objeto en el orden en el que se escribio

console.log(Object.keys(mascota));

//OBJECT VALUES: devuleve un array con los valores del obejeto en el orden en el que se escribio

console.log(Object.values(mascota));

//OBJECT ENTRIES: devuelve un array de arrays de dos posiciones cada uno (pareja clave-valor) en el orden en el que se escribio

console.log(Object.entries(mascota));

