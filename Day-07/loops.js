// 1.Print star pyramid patterns.

let rows = 5;

for (let i = 1; i <= rows; i++) {

    let pattern = "";

    // Spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
}
// 2. Print multiplication tables from 1 to 10.

for (let i = 1; i <= 10; i++) {

    console.log("Table of " + i);

    for (let j = 1; j <= 10; j++) {

        console.log(i + " x " + j + " = " + (i * j));
    }

    console.log("----------------");
}
// 3. Find sum of all even numbers between 1 and 100.

let sum = 0;

for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0) {
        sum = sum + i;
    }
}

console.log("Sum =", sum);

// 4. Print all prime numbers between 1 and 100.

for (let num = 2; num <= 100; num++) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
// 5. Create a number guessing game using loops.

let secretNumber = 7;
let guess = 0;

while (guess !== secretNumber) {

    guess = Number(prompt("Enter a number between 1 and 10"));

    if (guess === secretNumber) {

        console.log("Correct Guess!");

    } else {

        console.log("Try Again!");
    }
}