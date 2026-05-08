//Strings
//1. Reverse a string without using built-in reverse methods.

let str = "JavaScript";
let reversed = "";
for(let i=str.length-1;i>=0 ;i--){
     reversed=reversed + str[i];
}
console.log("Reversed String = ", reversed)

//2. Count the number of vowels in a string.

let name = "Nandini";
let count =0;
for(let i = 0; i<name.length; i++){
    let ch = str[i].toLowerCase();
    if(
        ch === "a"||
        ch ==="e"||
        ch ==="i"||
        ch ==="0"||
        ch ==="u"
    )
    {
        count++;
    }
}

console.log("number of vowel = ",count); 

//3. Check whether a string is a palindrome.

let string = "madam";
let reverse = "";

for(let i = string.length-1 ; i>=0; i--)
{
    reverse = reverse + string[i];
}
if (string== reverse){
    console.log("parlindrom");
}else{
    console.log("not palindrom");
}

//4. Capitalize the first letter of every word in a sentence.

let sentence = "javascript is fun";
let words = sentence.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {

     let word = words[i];

     result += word[0].toUpperCase() + word.slice(1) + " ";
}
console.log(result);

//5. Find the longest word in a sentence.

let sent = "JavaScript is very powerful language";
let word = sent.split(" ");
let longest = "";

for (let i = 0; i < word.length; i++) {
    if (word[i].length > longest.length) {
        longest = word[i];
    }
}
console.log("Longest word =", longest);

