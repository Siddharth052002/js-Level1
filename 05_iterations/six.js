const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map( (num) => num + 10 )
// console.log(newNums)

const getNewArr = []
myNumbers.forEach( (val) => {
    getNewArr.push(val+10)
} )
// console.log(getNewArr)


// *** IMP: Chaining of methods in JS

const newNums2 = myNumbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40 )

// console.log(newNums2)


// NOTE: Filter or map alg hai. Filter mai true or false condition wali game hai i.e condition ke based pr return hoti hai values. But map ke case mai hm jo likhte hai wo hr ek elements pr apply hoti hai without any condition.


