'use strict';

//console.log("Hello world");

console.log(`parametros pasados: ${process.argv}`);
//console.log(process.argv);
console.log(`total parametros : ${process.argv.length}`);

process.argv.forEach((entry) => {
    console.log(`Argumento: ${entry}`);
});

process.argv.forEach((entry, index) => {
    console.log(`Argumento ${index}: ${entry}`);
});

function muestraArgumento (entry, i){
    console.log(`Argumento ${i}: ${entry}`);
}

process.argv.forEach(muestraArgumento);

