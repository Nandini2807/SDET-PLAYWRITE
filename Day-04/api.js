// Step 1: Fetch API
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json()) // convert to JSON

// // Step 2: filter data
// .then(data => data.filter(d => d.id <= 10))

// // Step 3: modify data
// .then(data => data.map(d => ({
//     ...d,
//     title: "Test " + d.title
// })))

// // Step 4: print result
// .then(data => console.log(data))

// // Step 5: error handling
// .catch(err => console.error("Error:", err));


//

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())

// take only first 10 users
.then(data => data.slice(0, 10))

// modify data
.then(users => users.map(u => ({
    id: u.id,
    name: u.name.toUpperCase(),
    email: u.email
})))

// print result
.then(result => console.log(result))

.catch(err => console.error("Error:", err));