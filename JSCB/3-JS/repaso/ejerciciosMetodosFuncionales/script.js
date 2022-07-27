"use strict"

/**
 * Utiliza los métodos funcionales de array para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 * ! A partir de aquí es útil usar find, pero se puede con filter
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

"use strict";

const persons = [
  {
    name: "Berto",
    country: "ES",
    age: 44,
    car: "LU9286V",
    pet: {
      name: "Moon",
      type: "perro",
    },
  },
  {
    name: "Jess",
    country: "UK",
    age: 29,
    car: "GB2913U",
    pet: {
      name: "Kit",
      type: "gato",
    },
  },
  {
    name: "Tom",
    country: "UK",
    age: 36,
    car: "GB8722N",
    pet: {
      name: "Rex",
      type: "perro",
    },
  },
  {
    name: "Alexandre",
    country: "FR",
    age: 19,
    car: "FT5386P",
    pet: {
      name: "Aron",
      type: "gato",
    },
  },
  {
    name: "Rebeca",
    country: "ES",
    age: 32,
    car: "MD4578T",
    pet: {
      name: "Carbón",
      type: "gato",
    },
  },
  {
    name: "Stefano",
    country: "IT",
    age: 52,
    car: "LP6572I",
    pet: {
      name: "Bimbo",
      type: "perro",
    },
  },
  {
    name: "Colette",
    country: "FR",
    age: 22,
    car: "FU8929P",
    pet: {
      name: "Amadeu",
      type: "gato",
    },
  },
];

const cars = [
  {
    id: "LU9286V",
    brand: "Citroen",
    model: "Xsara",
  },
  {
    id: "GB2913U",
    brand: "Fiat",
    model: "Punto",
  },
  {
    id: "GB8722N",
    brand: "Opel",
    model: "Astra",
  },
  {
    id: "FT5386P",
    brand: "Ford",
    model: "Focus",
  },
  {
    id: "MD4578T",
    brand: "Opel",
    model: "Corsa",
  },
  {
    id: "LP6572I",
    brand: "Ford",
    model: "Fiesta",
  },
  {
    id: "FU8929P",
    brand: "Fiat",
    model: "Uno",
  },
];

// 1. Obtén la suma total de todas las edades de las personas.

console.log(persons.reduce((acc, obj) => acc + (obj.age), 0))

// 2. Obtén la suma total de todas las edades de las personas francesas.

/* console.log((persons.filter(obj => obj.country === "FR")).reduce(((acc, obj) => acc + (obj.age)), 0)) */


//VARIANTE DE ZOE
const franceses = persons.filter(person => person.country === "FR")

const edadFranceses = franceses.reduce (((acc, current) => acc + current.age), 0)

console.log(edadFranceses);

//VARIANTE DE ZOE EN UNA LINEA

const edadFranceses2 = persons.filter(person => person.country === "FR").reduce(((acc, current) => acc + current.age), 0)



// 3. Obtén un array con el nombre de todas las mascotas.

const mascotas = persons.map(person => person.pet.name)

console.log(mascotas);

// 4. Obtén un array con las personas que tengan gato.

const personasGato = persons.filter(person => person.pet.type === "gato")

const nombresPersonasGato = personasGato.map(person => person.name)

console.log(nombresPersonasGato);

// 5. Obtén un array con los coches de los españoles.

const espanoles = persons.filter(person => person.country === "ES")

const cochesEspanoles = espanoles.map(person => person.car)

console.log(cochesEspanoles);

const modeloCochesEspanoles = cochesEspanoles.map(matricula => cars.find(car => car.id === matricula))

console.log(modeloCochesEspanoles);