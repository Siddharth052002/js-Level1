/*

const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2)) // This is to show 2 decimal places after (.)


// *** IMP: toPrecision() returns a string and it takes values from 1 to 21. It convert the number to the specified precision value by rounding off them.
const otherNum = 28.8966
console.log(otherNum.toPrecision(2))
console.log(otherNum.toPrecision(3))
console.log(otherNum.toPrecision(1))


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // 10,00,000 -> en-IN converted to indian standard representation

*/


// +++++++ Maths ++++++++++

// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(4.4))
// console.log(Math.ceil(6.1))
// console.log(Math.floor(6.9))
// console.log(Math.min(4, 3, 5,8))
// console.log(Math.max(4, 3, 5,8))



// *** Random function ***

console.log(Math.random()) // *** values b/w 0 and 1 always

console.log(Math.floor((Math.random()*10)) + 1) // To get random numbers b/w 1 and 10

const min = 10
const max = 20

// *** IMP: Trick ***
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // Now we will get the numbers b/w min and max always