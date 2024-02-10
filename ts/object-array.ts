const person: object = {
    name: "Metin",
    age: 20
}
// Both object definitions are valid
const person2: {} = {
    name: "Metin",
    age: 20
}

// Of course object types can also be created for nested objects.
// Let's say you have this JavaScript object:

const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

const person3: {
    name: string;
    age: number;
    hasDriverLicense: boolean;
    address: {
        country: string;
        city: string
    };
    friends: string[];
} = {
    name: "Metin",
    age: 20,
    hasDriverLicense: true,
    address: {
        country: "Türkiye",
        city: "Manisa"
    },
    friends: ["Hasan", "Ahmet"]
}

// console.log(person.surname) // We get an error when we try to access a value that does not exist
console.log(person)
console.log(person2)
console.log(person3)