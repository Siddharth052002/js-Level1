// Immediately Invoked Function Expression (IIFE)

// *** IMP Why we use IIFE??
// global scope ke pollution se dikkt hoti hai kai bar to usko resolve krne ke lie use krte hai IIFE

(function chai() {
    console.log("DB Connected")
})()