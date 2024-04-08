// *** IMP: Truthy and falsy value in JS ***

const userEmail = "p@gmail.com"

if(userEmail) {
    console.log("Got user email")
}
else {
    console.log("Don't have")
}


// Falsy Values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// Truthy Values: All that are not falsy are truthy

// Example that may surprise you:
// "0", 'false', " ", [], {}, function(){}


// To check whether array is empty or not
const Arr = []

if(Arr.length === 0) {
    console.log("Array is empty")
}

// To check whether object is empty or not
const myObj = {}

if(Object.keys(myObj).length === 0) {
    console.log("Object is empty");
}

console.log(false == 0) // true
console.log(false == '') //true
console.log(0 == '') // true


// ** Nullish Coalescing Operator (??): null undefined

// This is used when we have to deal with null or undefined. i.e When we have to deal with handling errors

let val;

// val = 5 ?? 10  // 5
// val = null ?? 3 // 3
// val = undefined ?? 1 // 1
// val = null ?? 8 ?? 2 // 8

// console.log(val )


// *** Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Greater than 80") : console.log("Less than 80")