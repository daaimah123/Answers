def findTargetIndex(inputStr, targetStr):
    # Check if targetStr is empty
    if not targetStr:
        return -1
    
    # Use str.find() method to get the index of the first occurrence
    index = inputStr.find(targetStr)
    
    return index
  
# Test cases
test_cases = [
    ("hello world", "lo"),
    ("programming", "abc"),
    ("javascript", "script"),
    ("challenge", "len")
]

# Run each test case and print the result
for input_str, target_str in test_cases:
    result = findTargetIndex(input_str, target_str)
    print(f"Input: '{input_str}', Target: '{target_str}' -> Index: {result}")