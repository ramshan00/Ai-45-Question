//question 24
// Tests for equality and inequality with strings
let fruit: string = 'apple';

console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit === 'apple');

console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit !== 'banana');

// Tests using the lower case function
let rname: string = 'Ramsha';
let lowercaseName: string = rname.toLowerCase();

console.log("Is lowercaseName equal to 'ramsha'? I predict True.");
console.log(lowercaseName === 'ramsha');

console.log("Is lowercaseName not equal to 'RAMSHA'? I predict True.");
console.log(lowercaseName !== 'RAMSHA');

// Numerical tests
let number: number = 10;

console.log("Is number equal to 10? I predict True.");
console.log(number === 10);

console.log("Is number less than 5? I predict False.");
console.log(number < 5);

console.log("Is number greater than or equal to 10? I predict True.");
console.log(number >= 10);

console.log("Is number not equal to 15? I predict True.");
console.log(number !== 15);

// Tests using "and" and "or" operators
let x: number = 5;
let y: number = 8;

console.log("Is x less than 10 and y greater than 5? I predict True.");
console.log(x < 10 && y > 5);

console.log("Is x less than 3 or y greater than 10? I predict False.");
console.log(x < 3 || y > 10);

// Test whether an item is in an array
let colors: string[] = ['red', 'blue', 'green'];

console.log("Is 'red' in colors array? I predict True.");
console.log(colors.includes('red'));

// Test whether an item is not in an array
console.log("Is 'yellow' not in colors array? I predict True.");
console.log(!colors.includes('yellow'));
