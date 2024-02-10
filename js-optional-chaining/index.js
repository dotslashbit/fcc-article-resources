const user = {
  name: "John",
  address: {
    city: "New York",
    zipcode: "10001"
  }
};

// Traditional Approach
let city;
if (user && user.address && user.address.city) {
  city = user.address.city;
} else {
  city = "Unknown";
}

console.log("Traditional Approach:", city); // Output: New York

// Optional Chaining Approach
const city = user?.address?.city || "Unknown";

console.log("Optional Chaining Approach:", city); // Output: New York

const user = {
  name: "Alice",
  getAddress() {
    return {
      city: "San Francisco",
      zipcode: "94105"
    };
  }
};

// Traditional Approach
let city;
if (user && user.getAddress) {
  const address = user.getAddress();
  if (address) {
    city = address.city;
  }
}

console.log("Traditional Approach:", city); // Output: San Francisco

// Optional Chaining Approach
const city = user?.getAddress?.().city || "Unknown";

console.log("Optional Chaining Approach:", city); // Output: San Francisco

const users = [
  { id: 1, profile: { name: "Alice" } },
  { id: 2 },
  { id: 3, profile: { name: "Bob" } }
];

// Traditional Approach
const names = users.map(user => {
  if (user && user.profile && user.profile.name) {
    return user.profile.name;
  } else {
    return "Unknown";
  }
});

console.log("Traditional Approach:", names); // Output: ["Alice", "Unknown", "Bob"]

// Optional Chaining Approach
const names = users.map(user => user?.profile?.name || "Unknown");

console.log("Optional Chaining Approach:", names); // Output: ["Alice", "Unknown", "Bob"]

