// Truthy and Falsy Values
// Truthy Values
if ('Hello') {
    console.log('Truthy!'); // Output: Truthy!
}

if (42) {
    console.log('Truthy!'); // Output: Truthy!
}

if (['apple', 'banana']) {
    console.log('Truthy!'); // Output: Truthy!
}

// Falsy Values
if ('') {
    console.log('Falsy!'); // This code block is not executed
}

if (0) {
    console.log('Falsy!'); // This code block is not executed
}

if (null) {
    console.log('Falsy!'); // This code block is not executed
}

// Short-Circuiting
// The && Operator
const value1 = 0;
const result1 = value1 && 'Truthy Value';
console.log(result1); // Output: 0

const value2 = 'Hello';
const result2 = value2 && 'Truthy Value';
console.log(result2); // Output: Truthy Value

// The || Operator
const name1 = '';
const displayName1 = name1 || 'Guest';
console.log(displayName1); // Output: Guest

const name2 = 'Alice';
const displayName2 = name2 || 'Guest';
console.log(displayName2); // Output: Alice

// Practical Use Cases
// Providing Default Values
const options = {};
const limit = options.limit || 10;
console.log(limit); // Output: 10 (default value)

// Safely Accessing Nested Properties
const user = { address: { city: 'New York' } };
const city = user.address && user.address.city;
console.log(city); // Output: New York

