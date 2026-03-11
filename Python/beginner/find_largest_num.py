"""
Problem: Find the largest number in a list

Write a function that returns the largest number in a list
without using Python's built-in max() function.

Example:
numbers = [4, 7, 1, 9, 3]
Expected output:
9
"""

def find_largest_number(numbers):
    largest = numbers[0]

    for num in numbers:
        if num > largest:
            largest = num
    
    return largest


# Testing the function
numbers = [4, 7, 1, 9, 3]
print("Largest number:", find_largest_number(numbers))