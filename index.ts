// Alias for User ID
type UserID = number;

// Alias for Post
type Post = {
    title: string;
    content: string;
    author: Username;
};

// Alias for MathOperation
type MathOperation = (x: number, y: number) => number;

// Alias for Result
type Result = Success | Error;

// Define Success and Error types (for demonstration purposes)
class Success {
    constructor(public data: any) {}
}

class Error {
    constructor(public message: string) {}
}

// Base Alias for User
type BaseUser = {
    id: UserID;
    username: string;
    email: string;
};

// Extended Alias for Admin User
type AdminUser = BaseUser & {
    role: "admin";
};

// Usage
function getUserByID(id: UserID): User {
    // Implementation to fetch user by ID
    console.log("Fetching user with ID:", id);
    return {} as User; // Dummy return for demonstration
}

const newPost: Post = {
    title: "Introduction to TypeScript Type Aliases",
    content: "In this article, we explore TypeScript type aliases...",
    author: "dev_guru_123",
};

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

const successResult: Result = new Success("Data loaded successfully");
const errorResult: Result = new Error("Failed to load data");

function handleResult(result: Result) {
    if (result instanceof Success) {
        console.log("Success:", result.data);
    } else {
        console.error("Error:", result.message);
    }
}

const admin: AdminUser = {
    id: 1,
    username: "admin",
    email: "admin@example.com",
    role: "admin",
};

// Test
const user = getUserByID(123);
console.log("Fetched user:", user);

console.log("New post:", newPost);

console.log("Addition result:", add(5, 3));
console.log("Subtraction result:", subtract(8, 3));

handleResult(successResult); // Output: Success: Data loaded successfully
handleResult(errorResult);   // Output: Error: Failed to load data

console.log("Admin user:", admin);

