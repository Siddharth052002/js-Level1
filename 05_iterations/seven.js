// *** Reduce in JS ***

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 3)

// console.log(myTotal)

const myTotal2 = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal2)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "movile dev course",
        price: 5999
    },
    {
        itemName: "python course",
        price: 9899
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay)