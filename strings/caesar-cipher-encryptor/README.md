# Caesar Cipher Encryptor

## Problem Statement

Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function that returns a new string obtained by shifting every letter in the input string by `k` positions in the alphabet, where `k` is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter `z` shifted by one returns the letter `a`.

## Sample Input

```plaintext
string = "xyz"
key = 2
```

## Sample Output

```plaintext
"zab"
```

## Hints

### Hint 1

Most languages have built-in functions that give you the Unicode value of a character as well as the character corresponding to a Unicode value. Consider using such functions to determine which letters the input string's letters should be mapped to.

### Hint 2

Try creating your own mapping of letters to codes. In other words, try associating each letter in the alphabet with a specific number - its position in the alphabet, for instance - and using that to determine which letters the input string's letters should be mapped to.

### Hint 3

How do you handle cases where a letter gets shifted to a position that requires wrapping around the alphabet? What about cases where the key is very large and causes multiple wrappings around the alphabet? The modulo operator should be your friend here.

## Optimal Space & Time Complexity

```plaintext
O(n) time | O(n) space - where n is the length of the input string
```

## Solutions

### Solution 1 (Python)

```python
def caesar_cipher_encryptor(string, key):
    new_letters = []
    new_key = key % 26
    for letter in string:
        new_letter_code = ord(letter) + new_key
        if new_letter_code <= 122:
            new_letters.append(chr(new_letter_code))
        else:
            new_letters.append(chr(96 + new_letter_code % 122))
    return "".join(new_letters)
```

## Edge Cases and Notes

For **Solution 2**, in the video explanation, we update the `newLetterCode` with the following formula if it's greater than `25`:

```plaintext
-1 + newLetterCode % 25
```

This logic is actually flawed, because if `newLetterCode % 25` happens to be equal to `0`, then we'll be accessing a letter in the `alphabet` at index `-1`, which will throw an error in a lot of languages or simply return an incorrect answer in other languages.

Instead, we need to use the following formula if the `newLetterCode` is greater than `25`:

```plaintext
newLetterCode % 26
```
