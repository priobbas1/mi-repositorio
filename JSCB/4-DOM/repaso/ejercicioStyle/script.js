"use strict";

// Aplica estilos a la tabla del index.html para que las asignaturas aprobadas (5 o más) se muestren de color verde y las suspensas en rojo.

//Puedes elegir si el color se aplica al texto o al fondo.

//Pista: todas las notas son etiquetas td y no hay ningún td que no sea una nota

const notas = document.querySelectorAll("td")

//console.log(notas);

for (let i = 0; i < notas.length; i++){

    //console.log();

    if (notas[i].textContent < 5){
        notas[i].style.color = "red"
    }

    else{
        notas[i].style.color = "green"
    }

    notas[i].style.textAlign = "center"
}