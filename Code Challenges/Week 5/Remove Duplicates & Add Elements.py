# Write a function that takes a list of strings and a string item as input. The function should remove the first occurrence of the item from the list and then add it to the end of the list. You must use both remove() and append() methods to achieve this.

def move_item_to_end(lst, item):
    if item in lst:
        lst.remove(item)
        lst.append(item)
    return lst

# Test the function
original_list = ['apple', 'banana', 'cherry', 'date', 'elderberry']
item_to_move = 'cherry'

result = move_item_to_end(original_list, item_to_move)
print(result)



# Write a function that takes a list of numbers as input and returns a new list with all duplicate numbers removed. You must use set() and list() methods to achieve this.

def remove_duplicates(numbers):
    unique_set = set(numbers)
    return list(unique_set)

# Test the function
numbers = [1, 2, 3, 2, 4, 5, 3, 6, 7, 8, 9, 1, 2]
result = remove_duplicates(numbers)
print(result)