const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value") // This is outdated now we make use of backticks

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// This will create an object
const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('s'))


// ***IMP: In subsring we cannot use negative indexes but is slice we can ***.

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)  // slice(start, end) => Here end is till endIndex - 1 (i.e -8 till index 3)
console.log(anotherString)


// Trim (remove extra spaces)
const newStringOne = "   Sid  "
console.log(newStringOne)
console.log(newStringOne.trim())


// Replace
const url = "https://google.com/sid%20pandey"

console.log(url.replace('%20', '-'))

console.log(url.includes('sid'))


// Split (To split based on the specifier)
console.log(gameName.split('-'))