// Solution 1: Using String Reversal
const solution1 = (str) => {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
};

// Solution 2: Iterative Two-Pointer Approach
const solution2 = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
