//1. Student Grade Calculator

let marks = 82;

if (marks >=90) {
    console.log("Grade A");
} else if(marks >=75){
    console.log("Grade B");
} else if (marks >=50){
    console.log("Grade C");
} else{
    console.log("Fail");
}

// 2. ATM Withdrawal Simulator

let balance = 10000;
let withdrawAmount = 2500;

if(withdrawAmount <= balance){
    balance = balance - withdrawAmount;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance =" ,balance);
} else{
    console.log("Insufficient Balance");
}

// 3. To-Do List using Arrays

let todoList = [];
todoList.push("Study JavaScript");
todoList.push("Pratice coding");
todoList.push("Complete Assignment");

console.log("To-Do List:");
todoList.forEach(task => {
    console.log(task);
});

// 4. Password Generator

function createPassword(){
    let password = "";
    let chars =   "abcdeABCDE12345@#$";

    for (let i = 1; i <= 6; i++){
        let index = Math.floor (Math.random() * chars.length);
        password = password + chars[index];
    }
    console.log("password =", password);
}
createPassword();

// 5. Quiz Application

let score = 0;
let answer1 = "nandini";
if (answer1 === "nandini"){
    console.log("correct answer");
    score++;
} else{
console.log("wrong answer");
}
console.log("final score =" , score);