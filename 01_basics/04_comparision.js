// console.log("2" > 1) // true
// console.log("02" > 1) // true


/*

*** The reason is that an equality check == and comparisions > < >= <= work differently.
Comparisions covert null to a number, treating it as 0.
That's why null >= 0 is true and null > 0 is false. ***

*/

// console.log(null > 0) //false
// console.log(null == 0) // false
// console.log(null >= 0) // true


// console.log(undefined == 0);
// console.log(undefined >= 0);
// console.log(undefined < 0);



// === (Strict Check)

console.log("2" == 2) // true -> as coversion is done here
console.log("2" === 2) // false -> as coversion not done