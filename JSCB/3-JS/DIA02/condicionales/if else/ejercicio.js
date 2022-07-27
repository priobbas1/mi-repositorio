"use  strict"

/* 
Crea una variable hora (number). Escribe un codigo que saque por consola "Buenos dias" entre las 6 y las 14, "Buenas tardes" entre las 14 y las 22 y "Buenas noches" entre las 22 y las 6
*/

/* const hora = prompt("Introduce la hora");  */

let hora = 22;

hora = new Date().getHours()
console.log(hora);

if (hora >= 6 && hora < 14 ){
    console.log("Buenos dias");
}

else if (hora >= 14 && hora < 22){
    console.log("Buenas tardes");
}

else if ((hora >= 22 && hora <24) || (hora >= 0 && hora <6)){
    console.log("Buenas noches");
}
//VARIANTE ZOE
/* else if(hora >= 22 || hora <6){
    console.log("Buenas noches");
} */

//SEGUNDA VARIANTE ZOE
/* else{
    console.log("Buenas noches");
}*/

else{
    console.log("No existe esa hora");
}