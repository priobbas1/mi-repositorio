"use strict";

  const letras = 
[ "T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",   "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]

console.log(letras);

let numeros;
const documento = "47404515-C";

let documentoArr = documento.split(" ");

let documentoArrSinGuion = documento.split("-");

console.log(documentoArr);




function comprobarNumeroCaracteres (array, numero){

  console.log(array);

  let stringCaracteres = array.join("");

  console.log(stringCaracteres);

  let arrayCaracteres = stringCaracteres.split("");

  console.log(arrayCaracteres);
  
  let contador=0;

  for (let i = 0; i < arrayCaracteres.length; i++ ){
    contador++;
  }

  if (contador === numero){
    return true
  }
  return false
}

if (comprobarNumeroCaracteres (documentoArr, 10)){
  console.log("Documento valido por numero de caracteres");
}
else{
  console.log("Documento invalido por numero de caracteres");
}

if (comprobarNumeroCaracteres (documentoArrSinGuion[0].split(" "), 8)){
  console.log("Documento valido por numero de caracteres numericos");
}
else{
  console.log("Documento invalido por numero de caracteres numericos");
}

if (comprobarNumeroCaracteres (documentoArrSinGuion[1].split(" "), 1)){
  console.log("Documento valido por numero de letras");
}
else{
  console.log("Documento invalido por numero de letras");
}

function comprobarLetra (string){

  let documentoArr = documento.split("-");

  let resto = documentoArr[0]%23;

  if (letras[resto] === documentoArr[1]){
    return true;
  }
  
  return false;

}

if (comprobarLetra (documento)){
  console.log("Documento valido por comprobacion de la letra");
}

else{
  console.log("Documento invalido por comprobacion de la letra");
}
