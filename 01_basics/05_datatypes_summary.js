// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Sumbol, BigInt

// Symbol :- Koi pan value ne unique banavva mate use thay.
// BigInt :- koi moti value ne handle karva mate.

const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId) // false

const bigNumber = 5549879448498444


// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman","Naagraj","Doga"];
let myObj = {
    name:"Harshil",
    age:"21"
}

const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof heros)


// *****************************************************************************

// Stack (Primitive), heap(Non-Primitive)

let myYoutubeName = "harshilYt"

let anotherName = myYoutubeName
anotherName = "harshilvoraYt"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email:"user@gmail.com",
    upi:"user@com"
}

let userTwo = userOne
userTwo.email = "hello@test"

console.log(userTwo.email)
console.log(userOne.email)