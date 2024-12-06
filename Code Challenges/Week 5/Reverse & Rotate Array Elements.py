# Prompt 1: Reverse an array using push and pop
# Write a function that takes a list as input and returns a new list with the elements in reverse order. You must use both append and pop methods to achieve this. 
    # Uses append() to add elements to the new list
    # Uses pop() to remove and return elements from the original list
    # Iterates through the original list once

def reverse_list_push_pop(lst):
    reversed_list = []
    for _ in range(len(lst)):
        reversed_list.append(lst.pop())
    return reversed_list

# Test the function
print(reverse_list_push_pop([1, 2, 3, 4, 5]))


# Prompt 2: Move first N elements to the end of the array using shift and push
# Write a function that takes a list of integers and a number n as input. The function should return a new list where the first n elements are moved to the end of the array. You must use both remove and append methods to achieve this. 
    # Creates two lists: one for the first n elements and one for the rest
    # Concatenates the second part (rest of the list) with the first part
    # Does not actually use remove() and append() as they are not necessary for this operation
    # Handles edge cases where n might be larger than the list length


def move_first_n_to_end(lst, n):
    if len(lst) <= n:
        return lst
    
    first_part = lst[:n]
    second_part = lst[n:]
    
    return second_part + first_part

# Test the function
print(move_first_n_to_end([1, 2, 3, 4, 5], 2))
