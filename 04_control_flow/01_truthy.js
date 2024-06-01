// falsy values
// false, 0, -0, BigInt On, "", null, undefined, NaN 

// Truthy values
// "0", "false", " ", [], {}, function(){}

const userEmail = []
if(userEmail.length === 0){
    console.log("Array is empty");
}

const userObj = {}
if(Object.keys(userObj).length === 0){
    console.log("userObj is empty");
}

false == 0  // true
false == ''  // true
0 == ''  // true

// Nullish Coalescing Operator (??): null undefined
let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);