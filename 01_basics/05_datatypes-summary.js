/* In javascript the categorization of datatypes mainly take place on basis of 1. How data is stored and 2. How data is accessed */

// On the basis of this data types are primarily divided into 2 categories: Primitive and Non-primitive

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol(used to specify something unique. Used in react mostly), BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // This is by default undefined

// Symbol return the datatypes which is also a symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // As the symbol are uique therefore this will be false

// const bigNumber = 243334534534534534n




// Reference (Non primitive)

// Array, Objects, Functions

// *** All the Non-primitive return type is object (i.e when we check with type of)

// Arrays

const heros = ["shaktiman", "naagraj"]

// Objects

let myObj = {
    name: "Sid",
    age : 21,
}

// Functions

const myFunction = function() {
    console.log("Hello World!")
}

console.log(typeof heros)
console.log(typeof myFunction) // This is giving function but actually it is an object function.
console.log(typeof myObj)


// *** IMP *** (Is Javascript dynamically typed or statically typed language?)

// Ans. Dynamically typed languages are those in which type checking takes place at the runtime or execution time. And this is done in JS. Therefore, JavaScript is a dynamically typed language.