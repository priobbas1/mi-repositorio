"use strict"

//TRUTHY Y FALSY

/* En JS TODO es o truthy (evalua a true) o falsy (evalua a false) */

//FALSY
//Basicamente todo lo que no tenga valor

/* Puedo usar la doble negacion para ver a que evalua algo (true o false) */

//0
console.log(!!0);

//"" string VACIO
console.log(!!"");

//undefined
console.log(!!undefined);

//null
console.log(!!null);

//Esta doble negacion evalua 0 y NaN como falsos los dos, por lo que puede dar lugar a confusiones

//NaN
console.log(!!NaN);

console.log("///////");

//TRUTHY
//Todo lo demas

// " ", "hola" strings con contenido
console.log(!!" ");
console.log(!!"hola");

//Nunmeros distintos de 0
console.log(!!4);
console.log(!!-4);

//Arrays, vacios o no
//console.log(!!);
//console.log(!!);

//Objetos, vacios o no
console.log(!!{});
console.log(!!{key: "value"});

//Funciones
console.log(!!(()=>0));

//...

console.log("////");


let user1;

/* user = "Zoe"; */

if (user1){
    console.log("el usuario existe");
}
else{ 
    console.log("el usuario no existe");
}

if(!user1/* user===undefined */){
    console.error("ERROR: el usuario no existe");
}

if(num%2){/* si hay resto... */
    console.log("impar");
}

let stock = 0;

if(stock){ /* if(stock > 0) */
console.log("hay stock");
}
else{
    console.log("agotado");
}

