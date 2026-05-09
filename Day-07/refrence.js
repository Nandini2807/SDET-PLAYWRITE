// 1. Create examples showing primitive copying behavior.
let a = 10;

let b = a;

b = 20;

console.log("a =", a);
console.log("b =", b);

// 2. Create examples showing object reference behavior.

let student1 = {
    name: "Nandini"
};

let student2 = student1;
student2.name = "Rahul";

console.log(student1.name);
console.log(student2.name);

// 3. Clone an object without affecting original object.

let original ={
    name:"nandini",
    age:22
};
let copy = {...original};
copy.name= "rahul";

console.log("original =",original);
console.log("copy = ",copy);

// 4. Compare arrays using reference equality.

let arr1 = [1, 2, 3];

let arr2 = [1, 2, 3];

console.log(arr1 === arr2);

// 5. Demonstrate shallow copy using spread operator.
let originalArray = [1, 2, 3];
let copiedArray = [...originalArray];
copiedArray.push(4);

console.log("Original Array =", originalArray);
console.log("Copied Array =", copiedArray);