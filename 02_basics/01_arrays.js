// array

const myArr = [2,1,2,3]
const myHeros = ["Shaktiman","naagraj"]

const myArr2 = new Array(1,5,6,3,74,9)
// console.log(myArr2[4])

// Array methods

myArr.push(6)
myArr.push(4)
myArr.pop()
// console.log(myArr)

myArr.unshift(5)
myArr.shift()
// console.log(myArr)

const newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)

// slice & splice

console.log("A",myArr)

const myn1 = myArr.slice(1,4)
console.log(myn1)
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("c",myArr)