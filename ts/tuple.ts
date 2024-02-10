// Tuple
const data: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string] // Defining Tuple (Variable type)
} = {
    name: "Metin",
    age: 20,
    hobbies: ["Cooking", "Gaming", "Coding"],
    role: [2, "admin"]
}

data.role[0] = 1
data.role[1] = "user"

data.role.push("author")                  // Typescript can't catch this error
// data.role = [1, "author", "admin"]     // We got an error here. TypeScript can't catch push method

// data.role[0] = "user" // We got an error
// data.role[1] = 1      // We got an error 