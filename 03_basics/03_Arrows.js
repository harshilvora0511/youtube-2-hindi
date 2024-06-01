const user = {
    userName : "Harshil",
    price: 555,

    welcomeMessage: function(){
        console.log(`${this.userName} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()

// function chai(){
//     const userName ="Harshil"
//     console.log(this.userName);
// }

// const chai = function () {
//     const userName ="Harshil"
//     console.log(this.userName);
// }

// chai()

// const chai = () => {
//     const userName ="Harshil"
//     console.log(this.userName);
// }

// chai()

const addTwo = (num1,num2) => {
    return num1 + num2
}

// console.log(addTwo(80,60))

const addName = (num1,num2) => {
    return ({userName : "Harshil"})
}
// console.log(addName());

// -------------------------------------------

// const myNewArr = [2,65,4,9,8,6,3,7]
// const myNew = myNewArr.forEach((el,idx) => {
//     return el
// })

// console.log(myNew);