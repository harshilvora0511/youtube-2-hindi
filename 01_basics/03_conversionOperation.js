let score = "33"
let score2 = "33vvg"
let score3 = null
let score4 = undefined
let score5 = true

let valueInNumber = Number(score)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)

// console.log(typeof valueInNumber);
// console.log(valueInNumber2);
// console.log(valueInNumber3);
// console.log(valueInNumber4);
// console.log(valueInNumber5);

// "33" => 33
// "33sdg" => NaN
// true => 1; false => 0

// ------------------------------------------------

let isLoggedIn = "Harshil"
let isLoggedIn2 = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
// console.log(booleanIsLoggedIn);
// console.log(booleanIsLoggedIn2);

// 1 => true; 0 => false
// "" => false
// "harshil" => true

// -----------------------------------------------

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ****************************** Operations ******************************
// link Ecmascript :- https://ecma-international.org/publications-and-standards/standards/ecma-262/

let value = 25
let negVal = -value
// console.log(negVal)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log((2 + 2) * 2 % 3);

// console.log(+true)
// console.log(+"")

//==================prefix and postfix is mdn
// link :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)