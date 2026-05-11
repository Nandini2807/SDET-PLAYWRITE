// 1. Find missing number in array.

let arr =[1,2,4,5,6,9];
let n = 6;

let expectedSum = (n *(n+1)) /2;
let actualSum = 0;

for (let i = 0; i < arr.length; i++){
    actualSum +=arr[i];
}

let missing = expectedSum - actualSum;

console.log("Missing Number =" ,missing);

// 2. Check whether two strings are anagrams.

function isAnagram(str1,str2){
    let s1 = str1.split("").sort().join("");
    s2 = str2.split("").sort().join("");

    return s1 === s2;
}
console.log(isAnagram("listen" , "silent"));

// 3. Rotate array by k positions.
let arr2 = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++) {

    let last = arr2.pop();
    arr.unshift(last);
}

console.log(arr2);

// 4. Find duplicate elements in array.

let arr3 = [1,2,3,4,5,62,4,1,7,5,1];
let duplicates = [];
for (let i =0; i < arr.length; i++){
    for (let j = i + 1 ; j < arr.length; j++){
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push (arr[i]);
        }
    }
}
console.log ("duplicates = ", duplicates);

// 5. Flatten nested arrays manually.

let arr5 = [1,7 [2, 3], [4, 8 [5, 6]]];

let flat = [];

function flatten(array) {

    for (let i = 0; i < array.length; i++) {

        if (Array.isArray(array[i])) {
            flatten(array[i]);
        } else {
            flat.push(array[i]);
        }
    }
}

flatten(arr5);

console.log(flat);

