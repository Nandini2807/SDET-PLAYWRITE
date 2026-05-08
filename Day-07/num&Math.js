//1. Generate a random number between 1 and 100.

let randomNumber = Math.floor(Math.random() *100) +1;
console.log ("random number =", randomNumber);

//2. Check whether a number is prime.

let num = 11;

if (num <= 1) {
    console.log("Not a Prime Number");
} else {

    let count = 0;

    for (let i = 1; i <= num; i++) {

        if (num % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log("Prime Number");
    } else {
        console.log("Not a Prime Number");
    }
}

//3. Find factorial of a number using loops.

let num1 =5;
let factorial = 1;

for (let i = 1; i <=num ; i++){
    factorial = factorial *i;
}
console.log("factorial =",factorial);

//4. Find Fibonacci series up to n numbers.

let n = 10;
let a= 0;
let b= 1;
console.log(a);
console.log(b);
for(let i = 3; i<=n; i++){
    let c = a+b;
    console.log(c);
    a=b;
    b=c;
}
//5. Check whether a number is Armstrong number

let num2 = 153;
let original = num2;
let sum = 0;

while (num2 > 0) {
    let digit = num2 % 10;
    sum = sum + (digit * digit * digit);
    num2 = Math.floor(num2/ 10);
}

if (sum === original) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}