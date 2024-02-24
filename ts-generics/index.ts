// Example 1: Generic Function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello");
console.log(output); // Output: hello

// Example 2: Generic Class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

let box = new Box<number>(42);
console.log(box.getValue()); // Output: 42

// Example 3: Generic Constraints
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

let result = loggingIdentity("hello");
console.log(result); // Output: hello

// Example 4: Using Generics with Interfaces
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<number, string> = { first: 1, second: "two" };
console.log(pair); // Output: { first: 1, second: "two" }

// Example 5: Generic Functions with Array
function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

let numbers: number[] = [1, 2, 3, 4, 5];
let reversedNumbers: number[] = reverse(numbers);
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// Example 6: Generic Constraints with keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

let person = { name: "John", age: 30, city: "New York" };
let age: number = getProperty(person, "age");
console.log(age); // Output: 30

// Example 7: Generic Utility Functions
function toArray<T>(value: T): T[] {
    return [value];
}

let numberArray: number[] = toArray(42);
console.log(numberArray); // Output: [42]

let stringArray: string[] = toArray("hello");
console.log(stringArray); // Output: ["hello"]

// Example 8: Generic Interface with Function
interface Transformer<T, U> {
    (input: T): U;
}

function uppercase(input: string): string {
    return input.toUpperCase();
}

let transform: Transformer<string, string> = uppercase;
console.log(transform("hello")); // Output: HELLO

