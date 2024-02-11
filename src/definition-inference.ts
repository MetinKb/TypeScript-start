// function sum(num1, num2) {
//     return num1 + num2
// }

// const number1 = '30'
// const number2 = 20

// console.log(sum(number1, number2)) // 3020


function sum(num1: number, num2: number, showResult: boolean) {
    if (!showResult) throw new Error("we can't show the result right now")
    return num1 + num2
}

const number1 = '30' // or number1 = 30
const number2 = 20.5
const showResult = true

// console.log(sum(number1, number2, showResult)) // got an error because number1 was not of number type.
console.log(sum(Number(number1), number2, showResult)) // or
console.log(sum(+number1, number2, showResult))

const fullName: string = "Metin Karabulut" // There is no need for type assignment here. TypeScript already infers type based on first value
// const fullName = "Metin Karabulut" 


// Any type
// You can store "any" kind of value in there
const mixedArray: any[] = ["String", 1, null, undefined, true]
console.log(mixedArray)

let variable: any
variable = "String"
console.log(variable)
variable = 1
console.log(variable)
variable = null
console.log(variable)
variable = undefined
console.log(variable)
variable = true
console.log(variable)
