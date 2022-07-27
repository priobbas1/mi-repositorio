"use strict"


const numArr = [5, 8, 15, 57, 24, 32]

const par = numArr.find (num => num%2 === 0)

console.log(par);

const people = [
    {name: "Maria",
    age: 15
    },
    {name: "Pepe",
    age: 25
    },
    {
    name: "Laura",
    age:27
    }
]

const adult = people.find(person => person.age >= 18)

console.log(adult);

const laura