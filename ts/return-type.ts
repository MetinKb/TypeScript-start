// Function Return Types

// If you don't have a valid reason to set the return type, let typescript infer the return type
// The same applies to variable and constant definitions


// function add(num1: number, num2: number): string {
//     return num1 + num2 // We got an error because the return type is not string
// }

function add(num1: number, num2: number): number { // return type is number
    return num1 + num2
}

function greeting(name: string, surname: string): void { // Void means it does not return anything
    console.log(`Hello, ${name} ${surname}!`)
}

let number = add(16, 20)
console.log(number)

greeting("Metin", "Karabulut")