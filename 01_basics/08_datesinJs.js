// Date in JS are represented in miliseconds by default counted from Jan 1 1970. But by using functions we can convert them to a specified format.


// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());


let mySpecificDate = new Date("2023-01-14")
// let mySpecificDate2 = new Date("01-14-2023")
// console.log(mySpecificDate.toDateString());
// console.log(mySpecificDate2.toDateString());


let myTimeStamp = Date.now()

// By this way we can compare times

// console.log(myTimeStamp);
// console.log(mySpecificDate.getTime())


// To convert the milisecond to second

console.log(Date.now()/1000)

// To remove the decimal
console.log(Math.floor(Date.now()/1000))


let nDate = new Date()
console.log(nDate)
console.log(nDate.getMonth())
console.log(nDate.getDay())

// ***** IMP

// newDate.toLocaleString('default', {
//     weekday: "long"
// })