# Write a function that takes a list of strings as input and returns a new list where the first element is moved to the end of the list. You must use both shift and push methods to achieve this. Additionally, handle edge cases such as empty lists or lists with fewer than two elements.

def move_first_to_end(lst):
    if len(lst) < 2:
        return lst
    
    # Create a new list to store the result
    result = []
    
    # Push all elements except the first one to the result list
    for i in range(1, len(lst)):
        result.append(lst[i])
    
    # Push the first element to the end of the result list
    result.append(lst[0])
    
    return result

# Test cases
print(move_first_to_end(['a', 'b', 'c']))  # ['b', 'c', 'a']
print(move_first_to_end(['x']))           # ['x']
print(move_first_to_end([]))              # []