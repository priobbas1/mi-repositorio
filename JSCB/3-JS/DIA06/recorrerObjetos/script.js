"use strict"

//RECORRER OBJETOS

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

//RECORRER OBJETOS

//Bucle for

/* for(let i= 0; i< Object.keys(mascota).length; i++){

} */

const keysArr = Object.keys(mascota);

for(let i= 0; i< keysArr.length; i++){
    const key = keysArr[i]
    console.log(mascota[key]);
}
console.log("///////////////////");

//Bucle for... in

for(const clave in mascota){
    //console.log(clave);
    console.log(mascota[clave]);
}

//EJERCICIO
//CREA UNA FUNCION QUE RECIBA DOS OBJETOS Y DEVUELVA TRUE SI SON IGUALES Y FALSE SI NO. (EN LOS OBJETOS EL ORDEN NO IMPORTA)
//EN LOS EJEMPLOS, SON IGUALES LOS DOS PRIMEROS

const obj1 = {
    key1: "a",
    key2: "b",
}

const obj2 = {
    key1: "b",
    key2: "a"
}

const obj3 = {
    key1: "a",
    key2: "c"
}

const obj4 = {
    key1: "a",
    key2: "b",
    key3: "c"
}


function sonIguales (objA, objB){

    if(Object.keys(objA).length !== Object.keys(objB).length){
        return false
    }

    for ( const key in objA){
        console.log(key);
        console.log("objA", objA[key]);
        console.log("objB", objB[key]);
        if (objA[key] !== objB[key]){
            return false
        }
    }

    return true;
}

console.log(sonIguales(obj1, obj2));
//console.log(sonIguales(obj1, obj3));