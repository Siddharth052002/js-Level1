// *** In JS arrays are resizable

const myArr = [0, 1, 2, 3, 4]
const myHeroes = ["sd", "dd"]

const myArr2 = new Array(1,2,3,4)

// *** JS array copy is shallow copy (i.e copy of references is done only)


// Array methods
myArr.push(7)
myArr.push(6)
myArr.pop()

console.log(myArr);

myArr.unshift(9) // To add elements to the front of array
console.log(myArr);

myArr.shift() // To remove elements from the front of array
console.log(myArr);

console.log(myArr.includes(9))
console.log(myArr.indexOf(10))

// join() converts the array into string
const newArr = myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)


// *** IMP: slice, splice ***
