/*

Problem: check if a string is a palindrome

A palindrome reads the same forward and backward. If the string is a palindrome, print true, else print false.

*/

const isPalindrome = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};


