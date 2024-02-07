// Spread Operator

// Original array
const arr = [1, 2, 3];
console.log("Original array:", arr); // [1, 2, 3]

// Before Spread Operator

// Traditional approach
const newArrBeforeSpread = [5, 6, arr[0], arr[1], arr[2]];
console.log("New array (before spread operator):", newArrBeforeSpread); // [5, 6, 1, 2, 3]

// After Spread Operator

// Using spread operator
const newArrAfterSpread = [5, 6, ...arr];
console.log("New array (after spread operator):", newArrAfterSpread); // [5, 6, 1, 2, 3]

// Spread Operator Use Cases

// 1. Combining Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log("Combined array:", combinedArray); // [1, 2, 3, 4, 5, 6]

// 2. Passing Arguments to Functions
function sum(a, b, c) {
    return a + b + c;
}
const nums = [1, 2, 3];
const result = sum(...nums);
console.log("Result of sum:", result); // 6

// 3. Copying Arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log("Copied array:", copiedArray); // [1, 2, 3]

// Rest Operator

// Before Rest Operator

// Manual approach
const arrBeforeRest = [1, 2, 3, 4, 5];
const firstElement = arrBeforeRest[0]; // Extracting the first element
const restElements = arrBeforeRest.slice(1); // Collecting the rest of the elements
console.log("First element:", firstElement); // 1
console.log("Rest of the elements:", restElements); // [2, 3, 4, 5]

// After Rest Operator

// Using rest operator
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log("First element:", first); // 1
console.log("Rest of the elements:", rest); // [2, 3, 4, 5]

// Rest Operator Use Cases

// 1. Handling Variable-Length Function Arguments
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum:", sumAll(1, 2, 3, 4, 5)); // Sum: 15
console.log("Sum:", sumAll(10, 20)); // Sum: 30

// 2. Array Destructuring
const [firstElementDestructure, secondElementDestructure, ...remainingElements] = [1, 2, 3, 4, 5];
console.log("First element:", firstElementDestructure); // First element: 1
console.log("Second element:", secondElementDestructure); // Second element: 2
console.log("Rest of the elements:", remainingElements); // Rest of the elements: [3, 4, 5]

