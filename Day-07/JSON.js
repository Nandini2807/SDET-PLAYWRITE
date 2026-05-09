// 1. Convert JSON string into object.

let jsonString = `{"name": "nandini" , "age":22, "city": "pune"}`;
let obj = JSON.parse(jsonString);

console.log (obj);
console.log(obj.name);

// 2. Convert object into JSON string.
let student ={
    name:"nandini",
    age:"22",
    city:"pune"
}
let jsonData = JSON.stringify(student);
console.log(jsonData);

// 3. Parse API-like JSON data and display values.

let apiData = `{
    "id": 101,
    "product": "Mobile",
    "price": 25000
}`;
let data = JSON.parse(apiData);

console.log("Product =", data.product);
console.log("Price =", data.price);

// 4. Create a JSON array of employee records.

let employees = [
    {
        id: 1,
        name: "Nandini",
        salary: 50000
    },
    {
        id: 2,
        name: "sarthak",
        salary: 45000
    },
    {
        id: 3,
        name: "Amit",
        salary: 60000
    }
];

console.log(employees);

// 5. Filter JSON data based on conditions.

let employees1 = [
    { name: "Nandini", salary: 50000 },
    { name: "Rahul", salary: 30000 },
    { name: "Amit", salary: 60000 }
];

let result = employees1.filter(emp => emp.salary > 40000);

console.log(result);