// Array Destructuring
const hobbies = ["Reading", "Coding", "Hiking"];
console.log(hobbies); // Output: ["Reading", "Coding", "Hiking"]

// Without Destructuring
const firstHobby = hobbies[0];
const secondHobby = hobbies[1];
const thirdHobby = hobbies[2];
console.log(firstHobby); // Output: Reading
console.log(secondHobby); // Output: Coding
console.log(thirdHobby); // Output: Hiking

// With Destructuring
const [firstHobby, secondHobby, thirdHobby] = hobbies;
console.log(firstHobby); // Output: Reading
console.log(secondHobby); // Output: Coding
console.log(thirdHobby); // Output: Hiking

// Skipping Elements from the Array
const [firstHobby, , thirdHobby] = hobbies;
console.log(firstHobby); // Output: Reading
console.log(thirdHobby); // Output: Hiking

// Nested Array Destructuring
const nestedArray = [1, [2, 3], 4];
const [firstValue, [secondValue, thirdValue], fourthValue] = nestedArray;
console.log(firstValue); // Output: 1
console.log(secondValue); // Output: 2
console.log(thirdValue); // Output: 3
console.log(fourthValue); // Output: 4

// Object Destructuring
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  occupation: "Software Engineer",
  hobbies: ["Reading", "Coding", "Hiking"]
};
console.log(person); // Output: { name: "John Doe", age: 30, city: "New York", occupation: "Software Engineer", hobbies: ["Reading", "Coding", "Hiking"] }

// Normal Destructuring
const { name, age, city } = person;
console.log(name); // Output: John Doe
console.log(age); // Output: 30
console.log(city); // Output: New York

// Destructuring with Different Names
const { name: personName, age: personAge, city: personCity } = person;
console.log(personName); // Output: John Doe
console.log(personAge); // Output: 30
console.log(personCity); // Output: New York

// Having Default Values while Destructuring
const { name, age, gender = "Unknown" } = person;
console.log(gender); // Output: Unknown

// Nested Objects
const { name, address: { city, country } } = person;
console.log(city); // Output: New York
console.log(country); // Output: undefined (assuming address does not have a country property)

