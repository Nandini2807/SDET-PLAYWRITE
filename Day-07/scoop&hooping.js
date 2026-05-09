// 1. Predict output of variable hoisting examples.

console.log(a);
var a = 10;

// 2. Create examples showing block scope using let.
{
let message = "hello";
console.log(message);
}
//console.log (message);

// 3. Write a program demonstrating closure behavior.

function outerFunction() {

    let count = 0;

    function innerFunction() {

        count++;

        console.log(count);
    }

    return innerFunction;
}

let result = outerFunction();

result();
result();
result();

// 4. Create nested functions and access outer variables.

function outer() {

    let name = "Nandini";

    function inner() {

        console.log("Hello " + name);
    }

    inner();
}

outer();

// 5. Debug a program with incorrect variable scoping.
if (true) {

    var num = 100;
}

console.log(num);