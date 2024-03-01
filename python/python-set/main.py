# Creating sets using curly braces
guest_set1 = {"Alice", "Bob", "Charlie", "David", "Eve"}

# Creating sets using set() constructor
guest_set2 = set(["David", "Eve", "Frank", "Grace", "Helen"])

# Adding elements using add() method
guest_set1.add("Frank")
print(guest_set1)  # Output: {'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'}

# Removing elements using remove() method
guest_set1.remove("Charlie")
print(guest_set1)  # Output: {'Alice', 'Bob', 'David', 'Eve', 'Frank'}

# Removing elements using discard() method
guest_set1.discard("Bob")
print(guest_set1)  # Output: {'Alice', 'David', 'Eve', 'Frank'}

# Getting the length of a set using len() function
print(len(guest_set1))  # Output: 4

# Union of sets using union() method
all_guests = guest_set1.union(guest_set2)
print(all_guests)  # Output: {'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Helen'}

# Intersection of sets using intersection() method
common_guests = guest_set1.intersection(guest_set2)
print(common_guests)  # Output: {'David', 'Eve'}

# Difference between sets using difference() method
unique_to_guest_set1 = guest_set1.difference(guest_set2)
print(unique_to_guest_set1)  # Output: {'Alice', 'Frank'}

# Symmetric difference between sets using symmetric_difference() method
exclusive_guests = guest_set1.symmetric_difference(guest_set2)
print(exclusive_guests)  # Output: {'Bob', 'Charlie', 'Grace', 'Alice', 'Frank', 'Helen'}

# Checking for subset using issubset() method
# Checking for superset using issuperset() method
print(guest_set1.issubset(all_guests))  # Output: True
print(all_guests.issuperset(guest_set1))  # Output: True

# Clearing a set using clear() method
guest_set1.clear()
print(guest_set1)  # Output: set()

