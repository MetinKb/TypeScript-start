// Unknown & Never Types

// unknown is better than any because it makes sure that you're not allowed to do everything but you have at least some type checking.

let input: unknown;
let input2: any
let userName = "MetinK"

input = 5
input = "Metin"

if (typeof userName === "string") input = userName
console.log(input)

// The function name was just added for clarity
// input2.whatever() // While we do not get an error of type any, we get an error of type unknown
// input.whatever()
// The reason for this is that any type is the most flexible type,
// but since the value of unknown type is not known, typescript is strict


function generateError(message: string, code: number): never /* or void */ {
    throw { message: message, code: code } // does not return any value
    // while(true) {} // never can also be used in an infinite loop because it does not return a value
}

generateError("An Error Occured!", 500) 