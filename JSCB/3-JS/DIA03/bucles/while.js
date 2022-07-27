"use strict"

//BUCLE WHILE

/* while(condicion){
    //codigo que se repite
} 
*/

/* IMPORTANTE:
el bucle se seguira ejecutando mientras la condicion sea true
El codigo no continuara hasta que el bucle se acabe (cuando la condiicon sea false) 

Por lo tanto, en principio para evitar que sea infinito debemos hacer que la condicion pase a false, desde DENTRO del bloque del bucle.*/

let age = 15;

while (age < 18){
    console.log("es menor");
    age++; //age = age + 1
}


let num = Math.random();
console.log(num);


//Cantidad de vueltas aleatoria
while(num < 0.8){
    num=Math.random();
    console.log(num);
}

let palabra;

while(palabra!=="STOP"){
    palabra = prompt ("Introduce STOP para parar")

    console.log("sigue");
}

//BUCLE DO... WHILE

//Se ejectura al menos una vez, aunque nunca se cumpla la condicion

/* 
do{
    //codigo que se repite
} while (condicion)
*/

age = 17;

do{
    console.log("Esto se ejecuta una vez si la condicion no se cumple. Las que haga falta si se cumple");

    age--
} while(age>=18)

age = 17;

while (age>=18){
    console.log("Se ejecuta?");

age--;
}



