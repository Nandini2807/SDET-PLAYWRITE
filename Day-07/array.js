let numbers =[12,20,39,48,89,60];
let largest = numbers[0];
let smallest = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if (numbers[i] > largest){
        largest = numbers[i];
    }
    if (numbers[i] < smallest){
        smallest = number[i];
    }
}
console.log("largest number:",largest);
console.log("smallest number:" , smallest);

//2. Remove duplicate elements from an array

let numbers3 = [1, 2, 3, 2, 4, 1, 5];
let uniqueArray = [];

for (let i = 0; i < numbers3.length; i++) {
    if (!uniqueArray.includes(numbers3[i])) {
        uniqueArray.push(numbers3[i]);
    }
}

console.log("Array after removing duplicates:");
console.log(uniqueArray);

//3.Sort an array without using built-in sort().

let numbers1 = [5, 2, 8, 1, 9];

for (let i = 0; i < numbers1.length; i++) {

    for (let j = i + 1; j < numbers1.length; j++) {
        if (numbers1[i] > numbers1[j]) {
            let temp = numbers1[i];
            numbers1[i] = numbers1[j];
            numbers1[j] = temp;
        }
    }
}

console.log("Sorted Array =", numbers1);

//4. Find second largest number in an array.

let numbers2 = [10, 45, 23, 89, 67];

let large = numbers2[0];
let secondLargest = numbers2[0];

for (let i = 0; i < numbers2.length; i++) {

    if (numbers2[i] > large) {

        secondLargest = large;
        large = numbers2[i];

    } else if (
        numbers2[i] > secondLargest &&
        numbers2[i] !== large
    ) {

        secondLarge = numbers2[i];
    }
}

console.log("Largest Number =", large);
console.log("Second Largest Number =", secondLargest);

//5. Merge two arrays and remove duplicates.

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let mergedArray = arr1.concat(arr2);
let uniqueArray1 = [];
for (let i = 0; i < mergedArray.length; i++) {

    if (!uniqueArray1.includes(mergedArray[i])) {
        uniqueArray1.push(mergedArray[i]);
    }
}

console.log("Merged Array =", mergedArray);
console.log("Array after removing duplicates =", uniqueArray1);