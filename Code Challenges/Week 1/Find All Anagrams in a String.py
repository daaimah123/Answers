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

# Sorting-based Approach
def find_anagrams(s: str, p: str) -> list[int]:
    if len(p) > len(s):
        return []
    
    pattern_sorted = sorted(p)
    result = []
    
    for i in range(len(s) - len(p) + 1):
        if sorted(s[i:i+len(p)]) == pattern_sorted:
            result.append(i)
    
    return result

# Counting Characters Approach
from collections import Counter

def find_anagrams(s: str, p: str) -> list[int]:
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
from collections import Counter

def find_anagrams(s: str, p: str) -> list[int]:
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
