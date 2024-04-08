// Array specific loops

// *** for of : To get the values

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(greet)
}


// *** Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('IN', "India")
map.set('FR', "France")


console.log(map)

// *** This will not work

// for (const key of map) {
//     console.log(key)
// }

// *** To print the key value of map using for of loop we will make use of array destructuring

for (const [key, value] of map) {
    console.log(key, ':-', value)
}


// *** Iterating objects using for of

const myObject = {
    game1: 'NFS',
    game2: 'Spidermam',
    game3: "GTA",
    game4: "IGI"
}


// *** This will not work for objects

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }


// NOTE: In JavaScript, the for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. However, it does not directly work for plain objects (i.e., objects created using object literal syntax {}). For plain objects, you would typically use a for...in loop to iterate over their properties.


// *** for in loop : To get the keys

for (const key in myObject) {
    console.log(`Key is ${key} and value is ${myObject[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

// As array keys are index
for (const key in programming) {
    // console.log(key) // 0 1 2 3 4
    console.log(`${key} : ${programming[key]}`)
}


// *** NOTE: As maps are not iterable therefore we cannot use the for in loop for maps.