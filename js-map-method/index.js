// Data Transformation - Traditional Approach
const numbers = [1, 2, 3, 4, 5];
const doubledNumbersTraditional = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbersTraditional.push(numbers[i] * 2);
}
console.log("Doubled Numbers (Traditional):", doubledNumbersTraditional);

// Data Transformation - Map Approach
const doubledNumbersMap = numbers.map(num => num * 2);
console.log("Doubled Numbers (Map):", doubledNumbersMap);

// Object Transformation - Traditional Approach
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' }
];
const userIdsTraditional = [];
for (let i = 0; i < users.length; i++) {
  userIdsTraditional.push(users[i].id);
}
console.log("User IDs (Traditional):", userIdsTraditional);

// Object Transformation - Map Approach
const userIdsMap = users.map(user => user.id);
console.log("User IDs (Map):", userIdsMap);

// String Manipulation - Traditional Approach
const names = ['John', 'Jane', 'Doe'];
const uppercasedNamesTraditional = [];
for (let i = 0; i < names.length; i++) {
  uppercasedNamesTraditional.push(names[i].toUpperCase());
}
console.log("Uppercased Names (Traditional):", uppercasedNamesTraditional);

// String Manipulation - Map Approach
const uppercasedNamesMap = names.map(name => name.toUpperCase());
console.log("Uppercased Names (Map):", uppercasedNamesMap);

// Working with Index - Traditional Approach
const incrementedNumbersTraditional = [];
for (let i = 0; i < numbers.length; i++) {
  incrementedNumbersTraditional.push(numbers[i] + i);
}
console.log("Incremented Numbers (Traditional):", incrementedNumbersTraditional);

// Working with Index - Map Approach
const incrementedNumbersMap = numbers.map((num, index) => num + index);
console.log("Incremented Numbers (Map):", incrementedNumbersMap);

