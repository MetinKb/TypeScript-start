// Enum

// const ADMIN = 0,
//     READ_ONLY = 1,
//     AUTHOR = 2

// const test = {
//     name: "Metin",
//     role: ADMIN // 0
// }

// or we con use enum 

// enum Role { ADMIN /* 0 */, READ_ONLY /* 1 */, AUTHOR /* 2 */ } // the default sorting starts with 0 and may cause problems in the conditions
enum Role { ADMIN = 1, READ_ONLY, AUTHOR }  // This way we start the ranking from 1

// enum Role2 { ADMIN = "ADMIN", READ_ONLY = "READ_ONLY", AUTHOR = "AUTHOR" } // We can use like this but this is unnecessary
console.log(Role.ADMIN, Role.READ_ONLY, Role.AUTHOR)

const employee = {
    name: "Metin",
    role: Role.ADMIN // 1
}

employee.role == Role.ADMIN ? console.log("Admin") : console.log("Not Admin!")