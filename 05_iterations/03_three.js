// for of

// ["","",""]
// [{},{},{}]

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

for (const arr of array) {
    // console.log(arr);
}

const greetings = "Hello world!"
for (const iterator of greetings) {
    // console.log(`Each char is ${iterator}`);
}


// Maps

const newMap = new Map()
newMap.set("IN", "India")
newMap.set("USA", "United State of America")
newMap.set("FR", "France")

// console.log(newMap);

for (const key of newMap) {
    // for (const [key, value] of newMap) {
    // console.log(key , ":-", value);
    console.log(key);
}