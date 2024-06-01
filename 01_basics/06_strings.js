const name = "harshil";
const repoCount = 50;

console.log(`hello ${name} your repoCount is ${repoCount}`);

const gameName = new String("har-shil");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0,4)
console.log(anotherString)

const newStringOne = "     hitesh        "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://harshil.com/harshil-vora"
console.log(url.replace("-","20%"))

console.log(url.includes('Harshil'))
console.log(gameName.split("-"))