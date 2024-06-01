const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

const newArr = myNumbers
.map((num) => num * 2)
.map((ele) => ele + 2)
// .filter((item) => item > 10)

console.log(newArr);