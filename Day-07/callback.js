//1. Create a delayed greeting message using setTimeout.

setTimeout(function(){

    console.log ("hello nandini");

}, 3000);

// 2. Build a countdown timer.

let count = 5;
let timer = setInterval(function(){
    console.log(count);
    count--;
    if (count < 0){
        clearInterval(timer);
        console.log("time up!");
    }
}, 1000);

// 3. Create a callback-based calculator.

function calculator(a, b, operation) {

    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculator(10, 5, add));

console.log(calculator(10, 5, multiply));

// 4. Simulate food ordering system using callbacks.

function placeOrder(callback) {

    console.log("Order Placed");

    callback();
}

function prepareFood() {

    console.log("Food is Preparing...");
}

placeOrder(prepareFood);

// 5. Execute functions sequentially using callbacks.

function step1(callback) {

    console.log("Step 1 Completed");

    callback();
}

function step2(callback) {

    console.log("Step 2 Completed");

    callback();
}

function step3() {

    console.log("Step 3 Completed");
}

step1(function() {

    step2(function() {

        step3();
    });
});