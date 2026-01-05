// OOP = Object Oriented Programming

// Objects can have a collection of variable properties
// Example: Person can have-> firstName, lastName, age

// JSON - JavaScript Object Notation
let person = {};
console.log(person);
console.log(typeof(person));

// Object properties are called key-value-pairs
// The key is the identifier of the property
person = {
    firstName : "Matt",
    lastName : "Cumbo",
    age : 34
};

console.log(person);

// Accessing properties via Dot Notation
console.log(person.firstName);

// Accessing properties via Bracket Notation
console.log(person["firstName"]);