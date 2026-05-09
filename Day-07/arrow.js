//1. Convert normal functions into arrow functions.

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 5));

// 2. Create one-line arrow functions with implicit return.

const square = num => num * num;

console.log(square(5));

// 3. Use arrow functions with map().

let number = [1,2,3,4];
let doubled = number.map(num1 => num1*2);
console.log(doubled);

// 4. Build an even/odd checker using arrow functions.

const checkEvenOdd = num2 => {
    if ( num2 % 2 ===0){
        return "Even number";
    } else{
        return "Odd number"
    }
};
console.log (checkEvenOdd(19));

// 5. Create a student grade calculator using arrow functions.

const calculateGrade = marks => {

    if (marks >= 90) {

        return "Grade A";

    } else if (marks >= 75) {

        return "Grade B";

    } else if (marks >= 50) {

        return "Grade C";

    } else {

        return "Fail";
    }
};

console.log(calculateGrade(82));