// Traditional approach for filtering even numbers
const numbers = [1, 2, 3, 4, 5];
const evenNumbersTraditional = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbersTraditional.push(numbers[i]);
  }
}
console.log("Traditional approach for filtering even numbers:");
console.log(evenNumbersTraditional); // Output: [2, 4]

// Using filter method for filtering even numbers
const evenNumbersFilter = numbers.filter(num => num % 2 === 0);
console.log("\nUsing filter method for filtering even numbers:");
console.log(evenNumbersFilter); // Output: [2, 4]

// Traditional approach for filtering null or undefined values
const values = [10, null, 20, undefined, 30];
const filteredValuesTraditional = [];
for (let i = 0; i < values.length; i++) {
  if (values[i] !== null && values[i] !== undefined) {
    filteredValuesTraditional.push(values[i]);
  }
}
console.log("\nTraditional approach for filtering null or undefined values:");
console.log(filteredValuesTraditional); // Output: [10, 20, 30]

// Using filter method for filtering null or undefined values
const filteredValuesFilter = values.filter(value => value !== null && value !== undefined);
console.log("\nUsing filter method for filtering null or undefined values:");
console.log(filteredValuesFilter); // Output: [10, 20, 30]

// Traditional approach for filtering products with prices greater than $50
const products = [
  { id: 1, name: 'Product 1', price: 40 },
  { id: 2, name: 'Product 2', price: 60 },
  { id: 3, name: 'Product 3', price: 30 }
];
const expensiveProductsTraditional = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 50) {
    expensiveProductsTraditional.push(products[i]);
  }
}
console.log("\nTraditional approach for filtering products with prices greater than $50:");
console.log(expensiveProductsTraditional); // Output: [{ id: 2, name: 'Product 2', price: 60 }]

// Using filter method for filtering products with prices greater than $50
const expensiveProductsFilter = products.filter(product => product.price > 50);
console.log("\nUsing filter method for filtering products with prices greater than $50:");
console.log(expensiveProductsFilter); // Output: [{ id: 2, name: 'Product 2', price: 60 }]

