function sayHi() {
    console.log("Hi")
}
// sayHi()

function addTwoNumbers(number1, number2) {
    console.log(number1+number2)
}
addTwoNumbers(3,4)
addTwoNumbers("3",4)


// *** When number of values that is to be passed to the function is not fixed. In this case we make use of rest operator.


function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(200, 400, 5000))


// Passing objects to function
const user = {
    username: "Siddharth",
    price: 352
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username: "pandey",
    price: 999
})


// Passing array to function
const myArr = [200,100,355,400]
function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myArr))