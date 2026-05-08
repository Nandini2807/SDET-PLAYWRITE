//A. Variables & Data Types

//1. Create a program that swaps two numbers without using a third variable.

let a=5;
let b =10;
console.log("Before Swaping:");
console.log("a=",a);
console.log("b=",b);

[a,b] =[b,a];

console.log("After Swapping:");
console.log("a =", a);
console.log("b =", b);

//2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.

let value = true;

if(typeof value=== "number"){
    console.log("it is number");
}
else if (typeof value === "string") {
    console.log("It is a String");
}
else if (typeof value === "boolean") {
    console.log("It is a Boolean");
}
else if (value === null) {
    console.log("It is Null");
}
else if (typeof value === "undefined") {
    console.log("It is Undefined");
}

//3. Convert temperature from Celsius to Fahrenheit using variables.

let Celsius = 30;
let Fahrenheit = (Celsius * 9/5)+32;
console.log ("Temperature in Fahrenheit =" , Fahrenheit);

//4. Create a simple calculator using variables and arithmetic operators

let num1 =20;
let num2 =10;
let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1/num2;

console.log("Addition =",add);
console.log("Subtraction =", sub);
console.log("Multiplication =", mul);
console.log("Division =", div);

//5. Write a program that takes a user’s birth year and calculates age.
let birthYear = 2003;
let currentYear = 2026;
let age = currentYear- birthYear;
console.log("Your age is:" , age);


