// Function Types & Callbacks

let func: () => number
// The func variable can be assigned to any function and returns a value of type number.
// With params:
let func2: (a: number, b: number) => number;


function power(num: number, pow: number): number {
    return Math.pow(num, pow)
}

function greeting2(name: string) {
    console.log(`Hello, ${name}!`)
}

func2 = power;
console.log(func2(3, 3))

// func2 = greeting2("Metin") // We got an error

// we defined func2 as a function that takes 2 parameters and returns a value of the number type. For this reason, we can run it by assigning it to power. But if we try to assign it to a function of the void type, we get an error

// Callback

function callback(a: number, b: number, callback: (result: number) => void) {
    const result = a + b
    callback(result)
}

callback(16, 20, (result) => {
    console.log(result)
    return result // Callback functions can return something even if we define it as void 
})