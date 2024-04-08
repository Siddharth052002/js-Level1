const user = {
    username: "Sid",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }
}

user.welcomeMsg()
user.username = "pandey"
user.welcomeMsg()

console.log(this) // {} // *** Note: In node environment we are getting empty object i.e {}. In case of browser console we will get windows object.


// function chai() {
//     let username = "Sid"
//     console.log(this)
//     console.log(this.username) // This will give undefined.
// }
// chai()


// *** Arrow function

// const chai = () => {
//     let username = "Sid"
//     console.log(this)
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// *** Implicit return arrow function

// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(1,4))

// NOTE: {} agr likha to return likhna hi hoga. () ye likha to nhi likhna fr

// *** Returning object from arrow function

// const addTwo = (num1, num2) => ({username: "Sidhu"})

// console.log(addTwo(9,7))