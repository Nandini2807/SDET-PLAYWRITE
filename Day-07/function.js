//1. Create a function that returns the greatest of three numbers.

function greatestNumber(a,b,c){
    if ( a>= b && a>=c){
        return a;
    } else if (b>=a && b>=c){
        return b;
    }else{
        returnc;
    }
}
let result = greatestNumber(25,40,15);
console.log ("Greatest number =" , result);

//2. Write a function to check whether a number is palindrome.

function isPalindrome(num){
    let original = num;
    let reversed = 0;
    while( num>0){
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num/10);
    }
    if (original === reversed){
        return "palindrome number";
    } else {
        return "not palindrome";
    }
}
console.log(isPalindrome(121));

// 3. Create a reusable function for currency conversion.

function convertCurrency(amount,rate){
    return amount * rate;
}
let rupees = convertCurrency(100,83);

console.log("coverted amount =" , rupees)

// 4. Write a function that accepts an array and returns only even numbers.

function getEvenNumbers(arr){
    let evenNumber =[];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNumber.push(arr[i]);
        }
    }
    return evenNumber;
}
 let results = getEvenNumbers([1,3,2,5,4,7,8,10]);
console.log (results);

// 5. Create a calculator using functions for add, subtract, multiply, and divide.

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("Addition =", add(10, 5));
console.log("Subtraction =", subtract(10, 5));
console.log("Multiplication =", multiply(10, 5));
console.log("Division =", divide(10, 5));