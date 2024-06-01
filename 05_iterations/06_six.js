const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

const myNewArr = []

myArr.filter((ele, idx) => {
    if (ele > 10) {
        myNewArr.push(ele)
    }
})

console.log(myNewArr);
