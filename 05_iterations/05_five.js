const coding = ["js","ruby","java","python","cpp"]

coding.forEach(function (ele) {
    // console.log(ele);
})

// ===================================
// function printVal(ele){
//     console.log(ele);
// }
// coding.forEach(printVal)

// ===================================
coding.forEach((item,idx,arr) => {
    // console.log(item,idx,arr);
})

// ===================================
const myNewCoding = [
    {
        languageName: "Javascript",
        languageFileName: "Js"
    },
    {
        languageName: "Ruby",
        languageFileName: "R"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
    {
        languageName: "Cpp",
        languageFileName: "C"
    },
]

myNewCoding.forEach((item) => {
    console.log(item.languageName);
})