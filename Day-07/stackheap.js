// 1.Create examples showing stack memory behavior.

let a = 10;

let b = a;

b = 20;

console.log("a =", a);
console.log("b =", b);

// 2. Create examples showing heap memory references.

let student1 = {
    name: "nandini"
};
let student2 = student1;
student2.name = "sarthak";

console.log(student1.name);
console.log(student2.name);

// 3. Demonstrate object mutation through references.
let obj1 = {
    city: "Pune"
};

let obj2 = obj1;

obj2.city = "Mumbai";

console.log(obj1.city);
console.log(obj2.city);

// 4. Predict outputs of memory-related programs.

let x = 5;

let y = x;

y = 100;

console.log(x);
console.log(y);

// 5. Create diagrams explaining memory allocation

let arr1 = [1, 2];

let arr2 = arr1;

arr2.push(3);

console.log(arr1);
console.log(arr2);