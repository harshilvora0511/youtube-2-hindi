const myObj = {
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} shortcus is for ${myObj[key]}`);
}

const programming = ["js","rb","py","java","cpp"];
for(const key in programming){
    // console.log(programming[key]);
}

const newMap = new Map()
newMap.set("IN", "India")
newMap.set("USA", "United State of America")
newMap.set("FR", "France")

for (const key in newMap) {
    console.log(key);
}