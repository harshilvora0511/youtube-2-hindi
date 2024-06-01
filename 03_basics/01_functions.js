// function addTwoParameters(number1,number2){
//     console.log(number1+number2);
// }

// function addTwoParameters(number1,number2){
//     if(number1,number2){
//         return number1+number2
//     }
// }
// const result = addTwoParameters(5,2)
// console.log(result)

// function addTwoParameters(number1 = "sam"){
//     if(number1){
//         return number1
//     }
// }
// const result = addTwoParameters()
// console.log(result)

function calculateCartPrice(val1,...num1){
    return num1
}

// console.log(calculateCartPrice(200,500,600));

const user = {
    userName : "Harshil",
    price: 199
}

function handleObject(anyObj){
    console.log(`Username is ${anyObj.userName} and price is ${anyObj.price}`);
}
// handleObject(user)
handleObject({
    userName:"sam",
    price: 55
})

const myNewArray = [200,500,700,9200]

function returnSecondValue(getArr){
    return getArr[2]
}
console.log(returnSecondValue([500,700,9200]))