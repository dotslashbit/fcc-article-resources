// TypeScript
let isDone: boolean = false;
console.log("isDone:", isDone); // Output: isDone: false
if (!isDone) {
    console.log("Task is not done yet.");
}

let count: number = 42;
let totalPrice: number = 24.99;
let quantity: number = 10;
console.log("count:", count); // Output: count: 42
console.log("totalPrice:", totalPrice); // Output: totalPrice: 24.99
console.log("quantity:", quantity); // Output: quantity: 10

let message: string = "Hello, TypeScript!";
let firstName: string = "John";
let lastName: string = "Doe";
console.log("message:", message); // Output: message: Hello, TypeScript!
console.log("firstName:", firstName); // Output: firstName: John
console.log("lastName:", lastName); // Output: lastName: Doe

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];
console.log("numbers:", numbers); // Output: numbers: [1, 2, 3, 4, 5]
console.log("fruits:", fruits); // Output: fruits: ["apple", "banana", "orange"]

let person: [string, number] = ["John", 30];
console.log("person:", person); // Output: person: ["John", 30]

enum Direction {
    Up,
    Down,
    Left,
    Right
}
let direction: Direction = Direction.Up;
console.log("direction:", direction); // Output: direction: 0

