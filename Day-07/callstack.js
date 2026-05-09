// 1. Trace execution order of nested function calls.
function frist (){
    console.log("first function");
    second ();
}
function second(){
    console.log ("second function");
    third();
}
function third(){
    console.log ("third function");
}
frist();
// 2. Create recursive factorial function.

function factorial(num){
    if (num === 1){
        return 1;
    }
    return num * factorial(num-1);
}
console.log(factorial(5));

// 3. Build recursive Fibonacci function.

function Fibonacci(num){
    if (num <=1){
        return num;
    }
    return Fibonacci(num -1) + Fibonacci (num-2);
}
console.log (Fibonacci(6));

// 4. Simulate stack overflow with recursion.

function infiniteRecursion() {

    console.log("Running...");

    infiniteRecursion();
}

infiniteRecursion();

// 5. Draw call stack flow for nested functions.

function one1() {

    two2();
}

function two2() {

    three3();
}

function three3() {

    console.log("Inside Three");
}

one1();