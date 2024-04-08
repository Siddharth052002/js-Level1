// objects ko declare krne ke do tarike hai 1. Literal ki treh 2. Constructor ki treh i.e (Object.create)

// IMP *** constructor se bnega object to hmesha singleton bnega literal se singleton nhi bnega kbhi ***


const mySym = Symbol("key1")
// *** 1. Object literals ***
const JsUser = {
    name: "Sid",
    age : 18,
    [mySym] : "mykey1", // *** This is how we add symbol as a key to object
    location: "Jaipur",
    email: "sid@gmail.com",
    "lastLoggedinDays": ["Monday", "Sat"]
}

console.log(JsUser.email)
console.log(JsUser["location"])
console.log(JsUser["lastLoggedinDays"])
console.log(JsUser[mySym])

JsUser.email = "sid@abc.com"

// To freeze any object so that no changes are made.

// Object.freeze(JsUser)
JsUser.email = "pandey@gmail.com" // Now this will not work
console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js USer")
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

JsUser.greeting()
JsUser.greetingTwo()