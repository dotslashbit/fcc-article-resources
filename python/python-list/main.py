# Single line list
fruits = ["apple", "banana", "cherry"]

# Multi-line list for readability
numbers = [
    1,
    2,
    3,
    4,
    5,
]

# Mixed data type list
mixed_list = ["hello", 3.14, True]

print(f"First fruit: {fruits[0]}")  # Output: First fruit: apple
print(f"Second number: {numbers[1]}")  # Output: Second number: 2

# Modifying List
fruits.append("orange")  # fruits will now be ["apple", "banana", "cherry", "orange"]
fruits.insert(1, "grape")  # fruits will now be ["apple", "grape", "banana", "cherry", "orange"]
fruits.remove("banana")  # fruits will now be ["apple", "grape", "cherry", "orange"]
removed_item = fruits.pop(1)  # removed_item will be "grape", fruits will now be ["apple", "cherry", "orange"]
more_fruits = ["mango", "pineapple"]
fruits.extend(more_fruits)  # fruits will now be ["apple", "cherry", "orange", "mango", "pineapple"]

# Slicing
sub_list = fruits[1:3]  # sub_list will be ["cherry", "orange"] (extracts elements at index 1 and 2, excluding the element at index 3)
reversed_list = numbers[::-1]  # reversed_list will be [5, 4, 3, 2, 1] (step value of -1 reverses the order)

# Common List Methods
length = len(fruits)  # length will be 5
fruits.sort()  # fruits will now be ["apple", "cherry", "mango", "orange", "pineapple"]
sorted_numbers = sorted(numbers)  # sorted_numbers will be [1, 2, 3, 4, 5], numbers remains unchanged
fruits.reverse()  # fruits will now be ["pineapple", "orange", "mango", "cherry", "apple"]
index_of_cherry = fruits.index("cherry")  # index_of_cherry will be 3
is_apple_present = "apple" in fruits  # is_apple_present will be True
count_of_orange = fruits.count("orange")  # count_of_orange will be 1

# Advanced List Concepts
# List Comprehensions
squares = [x**2 for x in range(5)]  # squares will be [0, 1, 4, 9, 16]
even_numbers = [x for x in range(10) if x % 2 == 0]  # even_numbers will be [0, 2, 4, 6, 8]
matrix = [[x for x in range(i, i+3)] for i in range(0, 3, 3)]
# matrix will be [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

# Nested Lists
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Accessing elements in nested lists
print(nested_list[0][1])  # Output: 2

# Iterating over nested lists
for sublist in nested_list:
    for item in sublist:
        print(item)

