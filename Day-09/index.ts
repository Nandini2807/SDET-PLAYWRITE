let name :string = "Nandini";
let result : number | string;
result = 50;
result = "success"    //updated value will print

console.log(name, result);

function add(a: number, b:number):string {
    return "Sum:" +(a+b);
}
console.log(add(5,10));


interface Person{
    id: number;
    name:string;
    role:Role ; //  using enum for role
    isAdmin ?: boolean;
    age:number;
}

interface Person{
    email: string; // merge interface to add email property
}

enum Role {
    User ="USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
}

const user: Person = {
    id: 1,
    name : "nandini",
    age: 23,
    role:Role.User,
    email: "nandini@gmail.com"
};

const admin: Person = {
    id :2,
    name:"nandu",
    age:24,
    email:"nandu@gmail.com",
    role:Role.Admin,
    isAdmin:true
};

console.log(user,admin);

let coordinates: [number, string] = [70.455, "-85.404"]; //tuples
console.log("Coordinates:", coordinates);

//function identify<T>(arg:T): T {
// return arg;
//}

//let output = identity<number>(10);
// let outpu1 = identity<string>("Aaryan");
// let outpu2 = identity<boolean>(true);
//console.log(output,output1,output2);

//generiic interface for a bag that canhold any type of content 
//interface Bag<T> {
// content: T;
//}

//const stringBag : Bag<string> = { content: "apple"};
//const numberBag : Bag<number> = {content : 5};

//console.log(stringBag, numberBag);

class Storage<T>{
    private items: T[] = [];
    addItems(item:T):void{
        this.items.push(item);
    }
    getItem (index:number):T {
        return this.items[index]!; // non-null assertion operator to indicate that the item will exist at the given index
    }
}

const names = new Storage<string>();
names.addItems("nandini");
names.addItems("sakshi");
names.addItems("Rohan");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3


interface HasLength{
    length:number;
}

function logLength<T extends HasLength>(arg: T): void { // T -> property .length --> string, arrays
 console.log(arg.length);
}
logLength("nandini"); // string --> length
logLength([1,2,3,4]); //array --> length
// logLength(10); // number --> it wil not define length of the number