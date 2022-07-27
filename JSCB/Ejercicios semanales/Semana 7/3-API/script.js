"use strict"

async function getData(url){
    const res = await fetch(url)
    const data = await res.json()

    return data
}

    const usuarios = getData("https://randomuser.me/api/?results=5")

    let genero = ""

    console.log(usuarios);

    usuarios.then(data => genero = data.results[0].gender)

    /* console.log(genero);

    const div = document.querySelector("div")

    console.log(usuarios.results[0]);

    div.textContent = usuarios.results */
    
   /*  usuarios.then(data => div.textContent = data.results[0].gender) */

    console.log(Object.values(usuarios)y)
