// Immediately Invoked Function Expression (IIFE)

// *** IMP Why we use IIFE??
// global scope ke pollution se dikkt hoti hai kai bar to usko resolve krne ke lie use krte hai IIFE

// IIFEs are commonly used to create private scope in JavaScript, allowing variables and functions to be encapsulated and inaccessible from outside the function.

(function chai() {
    // named IIFE
    console.log("DB Connected")
})();

// NOTE: (semicolon ; is imp if two or more IIFE are there in order to end one)

((name) => {
    // Simple IIFE
    console.log(`DB connected again ${name}`)
})("Sid")

// var counter = (function() {
//     var count = 0;
 
//     return {
//         increment: function() {
//             count++;
//         },
//         decrement: function() {
//             count--;
//         },
//         getCount: function() {
//             return count;
//         }
//     };
// })();
 
// // Increment the counter
// counter.increment();
// counter.increment();
// counter.increment();
 
// console.log(counter.getCount()); // Output: 3
 
// // Trying to access the private count variable directly
// console.log(counter.count); // Output: undefined (cannot access private variable)