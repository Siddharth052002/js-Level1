const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes)


// *** IMP Spread operator -> more prefered than concat

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Here if we want to flat all the subarrays into one original array then we can use flat(x) -> where x is the degree or extent upto which we want to flat. Infinity means flat will happen automaticaaly for any number of subsets.


const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// console.log(Array.isArray("Sid"))

// console.log(Array.from("Siddharth")) // *** from() -> Convert things to array

console.log(Array.from({name: "Sid"})) // *** O/p = [] because this will not be converted to array unless keys or values are specified.


// let score1 = 100
// let score2 = 200
// let score3 = 300

// *** Array.of() -> This converts variables into array

// console.log(Array.of(score1, score2, score3))


