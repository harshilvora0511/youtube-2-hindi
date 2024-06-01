// Immediately Invoke Function Expressions(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

(function accord (name) {
    console.log(`DB CONNECTED TWO ${name}`);
})("harshil")