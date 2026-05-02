let a = "Nandini";
let b = "sarthak";
let c = "Dhanu";

let d ="hello" + a + "," + b + "and" + c +"! ";
// console.log(d);

let e = `Hellp ${a}, ${b} and ${c}!`;
let f =`the lenght of a is ${a.lenght*2}`;

console.log(e);
console.log(f);

//arrowfuction and function

function table(num) {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        // console.log(num + " x " + i + " = " + (num * i)); // Using string concatenation
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}
console.log(table(5)); // Displays the multiplication table for 5
function sum(a, b) {
    return a + b;
}

//arrow function

let add = (x, y) => x + y; // Arrow function for addition
console.log("Sum of 5 and 10 :", add(5, 10)); 

//array function & different between fuction and arrow function

let arr = [1, 2, 3, 4, 5, "Nandini"];
// arr.filter(function(x) {
//     return typeof x === "number";
// }).map(function(y) {
//     return y * 2;
// }).forEach(function(abc) {
//     console.log("Element after * 2:", abc * 2);
// });

arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));