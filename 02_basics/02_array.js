const heros = [1,6,25]
const heros2 = [9,8,7]

// heros.push(heros2)
// console.log(heros)

// const margeArray = heros.concat(heros2)
// console.log(margeArray)

const allArrays = [...heros,...heros2]
// console.log(allArrays)

const realArr = [1,2,3,[8,6,7],5,3,5,[7,2,9]]
const realMargeArr = realArr.flat(Infinity)
// console.log(realMargeArr);


// console.log(Array.isArray("Harshil"));
// console.log(Array.from("Harshil"));
// console.log(Array.from({name:"Harshil"}));

const score = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score,score2,score3))