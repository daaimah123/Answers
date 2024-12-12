# An anagram is a word formed by rearranging the letters of a different word using all the original letters exactly once. The function is given two strings: s - to search in, p - a template word. Find the starting indexes of anagrams of p among substrings of the given s.

# Examples
# findAnagrams("cbaebabacd", "abc") ➞ [0, 6]
# // Anagrams: "cba", "bac"

# findAnagrams("abab", "ab") ➞ [0, 1, 2]
# // Anagrams: "ab", "ba", "ab"

# Analyze the requirements:
    # Find starting indexes of anagrams of a pattern in a given string
    # Return a list of integers representing these starting indexes
    # Handle cases where the pattern is longer than the string
# Identify Python equivalents:
    # String manipulation -> Python's built-in string methods
    # Array comparison -> Python's list comparison
    # Sliding window approach -> Python's list slicing
# Plan the structure:
    # Define a function to handle the logic
    # Create counters for pattern and window
    # Slide the window and compare counters
    # Keep track of matching windows

# Counting Characters Approach
from typing import List 
from collections import Counter

def find_anagrams(s: str, p: str) -> List[int]:
    if len(p) > len(s):
        return []
    
    pattern_counter = Counter(p)
    result = []
    
    for i in range(len(s) - len(p) + 1):
        window_counter = Counter(s[i:i+len(p)])
        if window_counter == pattern_counter:
            result.append(i)
    
    return result

# Sliding Window Approach
from typing import List 
from collections import Counter

def find_anagrams(s: str, p: str) -> List[int]:
    if len(p) > len(s):
        return []
    
    pattern_counter = Counter(p)
    result = []
    
    for i in range(len(s) - len(p) + 1):
        window_counter = Counter(s[i:i+len(p)])
        if window_counter == pattern_counter:
            result.append(i)
    
    return result


# Test cases
print(find_anagrams("cbaebabacd", "abc"))  # Output: [0, 6]
print(find_anagrams("abab", "ab"))  # Output: [0, 1, 2]


#  NOTES
# (s: str, p: str):
    # This part defines the types of the function parameters.
    # s is expected to be a string (str)
    # p is expected to be a string (str)
    # The comma separates multiple parameter type annotations.

# -> list[int]:
    # The arrow (->) indicates that we're specifying the return type.
    # list[int] means the function returns a list containing integers.

# s[i:i+len(p)] is extracting a substring from index i up to index i+len(p).
    # s: This is the original string we're working with.
    # [i:i+len(p)]: This is the slice notation.
    # i: This is the starting index of the slice. It represents the position in the string where we want to begin our extraction.
    # len(p): This gives us the length of the pattern string p.
    # The colon : acts as a separator between the start and end indices.