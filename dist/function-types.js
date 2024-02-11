"use strict";
// Function Types
let func;
// The func variable can be assigned to any function and returns a value of type number.
// With params:
let func2;
function power(num, pow) {
    return Math.pow(num, pow);
}
func2 = power;
console.log(func2(3, 3));
