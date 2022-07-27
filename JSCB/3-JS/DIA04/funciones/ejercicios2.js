"use strict"

// 1- Crea la funcion isEven. Recibira un numero y devolvera true si el numero es par, y false si es impar()

/* function isEven(numero){

    if(numero%2===0)
        return true;
    else{
        return false;
    }
} */


//VARIANTE ZOE SIN EL RETURN DENTRO DEL ELSE

function isEven(numero){

    if(numero%2===0){
        return true;
    }
    return false;
}


//console.log(isEven(3));


// 2- Crea la funcion isDivisible. Recibe dos numeros y devuelve true si el primero es divisible entre el segundo, y false si no.

/* function isDivisible(numero1, numero2){

    if(numero1%numero2===0)
        return true;
    else{
        return false;
    }
} */

//VARIANTE ZOE
function isDivisible(numero1, numero2){

    if(numero1%numero2===0){
        return true;
    }        
    return false;
}

//console.log(isDivisible(3, 5));

// 3- Crea la funcion isPrime. Recibe un numero y devuelve true si es primo y false si no
//(Un numero es primo cuando no es divisible entre ningun numero entre el 1 y el mismo, no incluidos)

/* function isPrime(numero){

    for(let i = 2; i<numero; i++)
    {
        if(numero%i===0)
            return false;
    }
    return true;
} */

//VARIANTE ZOE
function isPrime(numero){

    for(let i = 2; i<numero; i++)
    {
        if(isDivisible(numero, i)){
            return false;
        }
    }
    return true;
}

console.log(isPrime(4));


//VARIANTE ZOE


//console.log(isPrime(17));

// 4- Crea una funcion que reciba un numero y saque por consola todos los primos desde 2 hasta ese numero

function showPrimes(numero){
    
    /* if(numero <2){ //A MAYORES
        console.log("Numero demasiado bajo");
    } */

    for(let i=2; i<=numero; i++){
        if (isPrime(i)){
            console.log(i);
        }
    }
}

showPrimes(1);

