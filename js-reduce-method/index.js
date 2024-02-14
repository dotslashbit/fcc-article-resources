// Calculating Totals

// Data
const products = [
  { name: "Shirt", price: 20 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 15 }
];

// Traditional approach with a loop
let totalPrice = 0;
for (const product of products) {
  totalPrice += product.price;
}
console.log("Total price (loop):", totalPrice); // Output: Total price (loop): 85

// Using reduce()
const totalPriceReduce = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total price (reduce):", totalPriceReduce); // Output: Total price (reduce): 85

// Finding Minimum or Maximum Values

// Data
const temperatures = [25, 18, 32, 20, 15];

// Traditional approach with loops
let maxTemp = -Infinity;
let minTemp = Infinity;
for (const temp of temperatures) {
  maxTemp = Math.max(maxTemp, temp);
  minTemp = Math.min(minTemp, temp);
}
console.log("Max temp (loop):", maxTemp); // Output: Max temp (loop): 32
console.log("Min temp (loop):", minTemp); // Output: Min temp (loop): 15

// Using reduce()
const maxTempReduce = temperatures.reduce((max, temp) => Math.max(max, temp), -Infinity);
const minTempReduce = temperatures.reduce((min, temp) => Math.min(min, temp), Infinity);
console.log("Max temp (reduce):", maxTempReduce); // Output: Max temp (reduce): 32
console.log("Min temp (reduce):", minTempReduce); // Output: Min temp (reduce): 15

// Building Complex Objects

// Data
const students = [
  { name: "Alice", age: 25, subject: "Math" },
  { name: "Bob", age: 30, subject: "Science" },
  { name: "Charlie", age: 28, subject: "History" },
];

// Traditional approach with loops
const subjectMap = {};
for (const student of students) {
  const subject = student.subject;
  if (!subjectMap[subject]) {
    subjectMap[subject] = [];
  }
  subjectMap[subject].push(student);
}
console.log("Subject map (loop):", subjectMap); // Output: { Math: [...], Science: [...], History: [...] }

// Using reduce()
const subjectMapReduce = students.reduce((map, student) => {
  const subject = student.subject;
  map[subject] = map[subject] || [];
  map[subject].push(student);
  return map;
}, {});
console.log("Subject map (reduce):", subjectMapReduce); // Output: { Math: [...], Science: [...], History: [...] }

// Flattening Multidimensional Arrays

// Data
const multiArray = [[1, 2], [3, 4], [5]];

// Traditional approach with loops
const flatArray = [];
for (const subArray of multiArray) {
  for (const element of subArray) {
    flatArray.push(element);
  }
}
console.log("Flat array (loop):", flatArray); // Output: [1, 2, 3, 4, 5]

// Using reduce()
const flatArrayReduce = multiArray.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);
console.log("Flat array (reduce):", flatArrayReduce); // Output: [1, 2, 3, 4, 5]

