// Handling Numeric Defaults Without Nullish Coalescing Operator
const num1 = 0;
const num2 = null;
const num3 = 42;

const result1 = num1 !== null && num1 !== undefined ? num1 : 10;
const result2 = num2 !== null && num2 !== undefined ? num2 : 20;
const result3 = num3 !== null && num3 !== undefined ? num3 : 30;

console.log(result1); // Output: 0
console.log(result2); // Output: 20
console.log(result3); // Output: 42

// Handling Numeric Defaults With Nullish Coalescing Operator
const num1 = 0;
const num2 = null;
const num3 = 42;

const result1 = num1 ?? 10;
const result2 = num2 ?? 20;
const result3 = num3 ?? 30;

console.log(result1); // Output: 0
console.log(result2); // Output: 20
console.log(result3); // Output: 42

// Working with Nested Objects Without Nullish Coalescing Operator
const user = {
    name: 'John',
    age: null,
    address: {
        city: 'New York',
        postalCode: null
    }
};

const name = user.name !== null && user.name !== undefined ? user.name : 'Anonymous';
const age = user.age !== null && user.age !== undefined ? user.age : 30;
const city = user.address.city !== null && user.address.city !== undefined ? user.address.city : 'Unknown';
const postalCode = user.address.postalCode !== null && user.address.postalCode !== undefined ? user.address.postalCode : 'Not Available';

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York
console.log(postalCode); // Output: Not Available

// Working with Nested Objects With Nullish Coalescing Operator
const user = {
    name: 'John',
    age: null,
    address: {
        city: 'New York',
        postalCode: null
    }
};

const name = user.name ?? 'Anonymous';
const age = user.age ?? 30;
const city = user.address.city ?? 'Unknown';
const postalCode = user.address.postalCode ?? 'Not Available';

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York
console.log(postalCode); // Output: Not Available

