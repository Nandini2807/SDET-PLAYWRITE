// 1.Create an object for a student and display all properties dynamically.

let student = {
    name: "Nandini",
    age: 22,
    course: "Engineering",
    city: "Pune"
};
for (let key in student) {
    console.log(key + " : " + student[key]);
}
// 2. Count number of keys in an object.

let students = {
    name: "Nandini",
    age: 22,
    city: "Pune"
};

let count = Object.keys(students).length;
console.log("Number of keys =", count);

// 3. Merge two objects into one.

let obj1 = {
    name: "Nandini",
    age: 22
};

let obj2 = {
    city: "Pune",
    course: "Engineering"
};

let mergedObject = {
    ...obj1,
    ...obj2
};

console.log(mergedObject);

// 4. Convert an object into an array of keys and values.

let student1 = {
    name: "Nandini",
    age: 22,
    city: "Pune"
};

let keys = Object.keys(student1);
let values = Object.values(student1);

console.log("Keys =", keys);
console.log("Values =", values);

// 5. Create a shopping cart object and calculate total bill amount.

let cart = {
    mobile: 15000,
    earphones: 2000,
    charger: 1000
};

let total = 0;
for (let item in cart) {
    total = total + cart[item];
}

console.log("Total Bill Amount =", total);