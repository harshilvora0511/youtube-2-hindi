// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const jsUser = {
    name:"Harshil",
    "full Name" : "Harshil Vora",
    [mySym]:"myKey1",
    age:55,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.age)
// console.log(jsUser["age"])
// console.log(jsUser["full Name"])
// console.log(jsUser[mySym])

// value overwrite karva
jsUser.age = 15
// Object.freeze(jsUser)
jsUser.age = 18
// console.log(jsUser)

jsUser.greeting = function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())