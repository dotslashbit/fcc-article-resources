// Data Transformation
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Object Transformation
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];
const userIds = users.map(user => user.id);
console.log("User IDs:", userIds);

// String Manipulation
const names = ['John', 'Jane', 'Doe'];
const uppercasedNames = names.map(name => name.toUpperCase());
console.log("Uppercased Names:", uppercasedNames);

// Working with Index
const incrementedNumbers = numbers.map((num, index) => num + index);
console.log("Incremented Numbers:", incrementedNumbers);

