//6. Conditional Types & the infer Keyword
//Scenario: You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
//Task: Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is, use the infer keyword to return the type the promise resolves to; otherwise, return T itself.


// Utility Type
type UnwrapPromise<T> =
    T extends Promise<infer U>
        ? U
        : T;


type A = UnwrapPromise<Promise<string>>;

type B = UnwrapPromise<Promise<number>>;

type C = UnwrapPromise<boolean>;

let value1: A = "Hello";
let value2: B = 100;
let value3: C = true;

console.log(value1);
console.log(value2);
console.log(value3);