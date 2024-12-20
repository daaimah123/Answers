# Task 1 - Using filter to Extract Specific Elements Write a Python function that uses the filter method to extract all numbers greater than 10 from a list.

# Task 2 - Using reduce to Calculate the Sum of Numbers Write a Python function that uses the reduce method to calculate the sum of all numbers in a list.

# Task 3 - Create an Array of Unique Categories for a Restaurant Menu (reduce) Extract unique categories from a list of menu items using reduce.

# Task 4 - Count Coffee Shops by Neighborhood (filter) Imagine you have collected data on various coffee shops in Chicago, including their neighborhoods. You want to analyze this data to understand the distribution of coffee shops across different neighborhoods.

# Provide examples of acceptable solutions for each task.

from functools import reduce

def filter_numbers(numbers):
    return list(filter(lambda x: x > 10, numbers))

def sum_list(numbers):
    return sum(numbers)

def extract_unique_categories(menu_items):
    return set(item['category'] for item in menu_items)

def count_coffee_shops_by_neighborhood(coffee_shops):
    return {shop['neighborhood']: len(shop) for shop in coffee_shops.values()}

# Test the functions
numbers = [5, 10, 12, 3, 18, 130, 44]
menu_items = [
    {'name': 'Pizza', 'category': 'Main Dish'},
    {'name': 'Salad', 'category': 'Main Dish'},
    {'name': 'Caesar Salad', 'category': 'Salad'},
    {'name': 'Greek Salad', 'category': 'Salad'}
]

coffee_shops = {
    'Rogers Park': ['Cafe A', 'Cafe B', 'Cafe C'],
    'Wicker Park': ['Cafe D', 'Cafe E']
}

print(filter_numbers(numbers))
print(sum_list([1, 2, 3, 4, 5]))
print(extract_unique_categories(menu_items))
print(count_coffee_shops_by_neighborhood(coffee_shops))