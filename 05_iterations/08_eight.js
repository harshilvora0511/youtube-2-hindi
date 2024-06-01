const myNumberArr = [1,8,9]

const addAllNumbers = myNumberArr.reduce(function (acc,currval) {
    return currval + acc
})
// console.log(addAllNumbers);


const shopping = [
    {
        itemName:"apple",
        price:100
    },
    {
        itemName:"apple",
        price:109
    },
    {
        itemName:"apple",
        price:500
    },
    {
        itemName:"apple",
        price:1000
    }
]

const newArr = shopping.reduce((a,b) => a + b.price , 0)
console.log(newArr);