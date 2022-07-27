"use strict"

const user = {
    name: "Zoe"
}

//Modificar propiedad de un objeto

user.name = "Maria";

console.log(user);

//Crear una nueva entrada

user.edad = 28

console.log(user);

//Eliminar una entrada

user.edad = null; //realmente no elimina

console.log(user);

delete user.edad;//esto si elimina

console.log(user);

//Comprobar si el objeto tiene propiedad

//Si tiene valor
//Sacamos el valor booleano

console.log(!!user.name);

console.log(!!user.edad);

if (user.name){
    console.log("el objeto tiene names");
}

//COMPROBAR SI TIENE LA CLAVE
user.age=null;

console.log(!!user.age);

const claves = Object.keys(user);

console.log(claves.includes("age"));

//Si selecciono una clave que no existe, da undefined

console.log(user.mascota);

//Si intento seleccionar una clave de algo que no es un objeto (ej:undefined) DA ERROR

/* console.log(user.mascota.name); */

//Solucion
/* console.log(user.mascota?.name); */

/* user.mascota = {name: "Nymeria"} */

console.log(user.mascota?.name);

console.log(user.mascota?.age);

