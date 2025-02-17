# Palindrome Check

## Problem Statement

Write a function that takes in a non-empty string and returns a boolean representing whether the string is a palindrome.

A palindrome is defined as a string that is written the same forward and backward. Note that single-character strings are palindromes.

## Sample Input

```plaintext
string = "abcdcba"
```

## Sample Output

```plaintext
true  // it's written the same forward and backward
```

## Hints

1. Start by building the input string in reverse order and comparing this newly built string to the input string. Can you do this without using string concatenations?
2. Can you optimize your algorithm by using recursion? What are the implications of recursion on an algorithm's space-time complexity analysis?
3. Try an iterative solution using pointers: start with a pointer at the first index of the string and a pointer at the final index of the string. Compare characters and move pointers inward.

## Optimal Space & Time Complexity

**O(n) time | O(1) space** - where `n` is the length of the input string.

## Solutions

### Solution 1: Using String Reversal

```python
def is_palindrome(string):
    return string == string[::-1]
```

### Solution 2: Iterative Two-Pointer Approach

```python
def is_palindrome(string):
    left, right = 0, len(string) - 1
    while left < right:
        if string[left] != string[right]:
            return False
        left += 1
        right -= 1
    return True
```

### Solution 3: Recursive Approach

```python
def is_palindrome_helper(string, left, right):
    if left >= right:
        return True
    if string[left] != string[right]:
        return False
    return is_palindrome_helper(string, left + 1, right - 1)

def is_palindrome(string):
    return is_palindrome_helper(string, 0, len(string) - 1)
```

## Notes

- The first solution runs in **O(n^2)** time in some languages where strings are immutable because each concatenation operation involves recreating the string.
- The optimal approach is the **two-pointer method**, which runs in **O(n) time** and **O(1) space**.
