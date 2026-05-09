// 1. Double all numbers in an array using map().

let number = [1,2,3,4,5];
let doubledNumber = number.map (num => num*2);
console.log (doubledNumber);

// 2. Filter all students scoring above 80 marks.

let marks =[59,86,80,87,90,15,45];
let result = marks.filter(mark =>mark > 80);
console.log(result);

// 3. Print all array values using forEach().

let fruits =["apple", "banana", "grapes", "mango"];
fruits.forEach(fruit => {
    console.log(fruit);
});

// 4. Convert array of names into uppercase.

let names =["nandini", "rahul", "amit"];
let upperCaseNames = names.map(name => name.toUpperCase());
console.log(upperCaseNames);

// 5. Extract only even numbers using filter().

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers);