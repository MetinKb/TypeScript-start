"use strict";
// Type Aliases / Custom Types
const user1 = { name: 'Max', age: 30 }; // this works
let string = "Metin";
let age = 20;
// let isOlder: Combinable = false // We can't use this because the value is boolean. But we defined a number or string
function combine1(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number")
        return input1 + input2;
    return input1.toString() + input2.toString();
}
const combineString = combine1("Metin", "Karabulut");
const combineNumber = combine1(16, 20);
console.log(combineString);
console.log(combineNumber);
// This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:
// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
// }
// function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
// }
// To:
// type User2 = { name: string; age: number };
// function greet2(user: User2) {
//     console.log('Hi, I am ' + user.name);
// }
// function isOlder2(user: User2, checkAge: number) {
//     return checkAge > user.age;
// }
