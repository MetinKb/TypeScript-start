"use strict";
// Union Type
function combine(input1, input2) {
    return input1 + input2;
}
const combineAges = combine(16, 20);
console.log(combineAges);
// const combineFullName = combine("Metin", "Karabulut") // We got an error because the given type string
function combine2(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number")
        return input1 + input2;
    return input1.toString() + input2.toString();
}
const combineAges2 = combine2(16, 20);
console.log(combineAges2);
const combineFullName = combine2("Metin", "Karabulut");
console.log(combineFullName);
