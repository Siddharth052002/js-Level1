// *** Browser ke console mai scope alg hai or code environment mai alg.

var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a)
    c = 30
    console.log(c)
}

console.log("OUTER: ", a)
console.log(c)

// ++++++++++ interesting ++++++++

console.log(addone(5))
function addone(num) {
    return num + 1
}

// addTwo(5) // This is giving error as function expression are not hoisted! Will discuss later 
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5))