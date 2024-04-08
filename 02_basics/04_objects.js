// Objects using constructor

const tinderUser = new Object() // *** This is a singleton object.
// console.log(tinderUser)

const tinderUser2 = {} // *** This is not a singleton object
// console.log(tinderUser2)

tinderUser.id = "123abc"
tinderUser.name = "Sami"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sid",
            lastname: "pandey"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)
// *** There is a thing called optional chaining. Will discuss later!


// *** To merge objects

// *** 1. Object.assign
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = Object.assign({}, obj1, obj2, obj4)

// console.log(obj3)

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

// console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget === target);
// Expected output: true



// *** 2. Spread operator (90% of the time we will use this only)
const obj5 = {...obj1, ...obj2, ...obj4}
// console.log(obj5)


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "s@gmail.com"
    }
]

// console.log(users[1].email)


// console.log(tinderUser)

// console.log(Object.keys(tinderUser))

// console.log(Object.values(tinderUser))

// console.log(Object.entries(tinderUser)); // return key value of object in the form of array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



// Objects Destructuring in JS

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.corseInstructor

// Object destructuring syntax
// const {kya extract krna hai: uska short name -> optional hai} = kaha se extract krna hai
const {courseInstructor: instructor} = course

// console.log(instructor)

// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")


// In JSON format key and value are in the form of string

// {
//     "name": "Sid",
//     "courseName": "CSE",
//     "price": "NA"
// }

