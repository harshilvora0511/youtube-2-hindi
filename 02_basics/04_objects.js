// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = 125
tinderUser.name = "Harshil"
tinderUser.email = "harshil@gmail.com"

// console.log(tinderUser);

const regularUser = {
    email: "harshil@",
    fullName: {
        userFullName: {
            firstName: "Harshil",
            lastName: "vora"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstName)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 3: "d" }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "harshil@test.com"
    },
    {
        id: 2,
        email: "harshil2@test.com"
    },
    {
        id: 3,
        email: "harshil3@test.com"
    },
]

// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// property check karva mate
// console.log(tinderUser.hasOwnProperty("email"));

// ---------------------------------------------------------------------------------------------

const course = {
    id: 125,
    name: 'Harshil',
    email: 'harshil@gmail.com'
}

const {id,name:newName,email:k} = course
console.log(id);
console.log(newName);
console.log(k);

// Object JSON formet maj mokalvama ave che