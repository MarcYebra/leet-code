// Problem: Find the first non-repeating character in a string

// Given a string, return the first character that appears only once.
// If none exists, return null

//Example:
// Input: leetcode"
// Output: "l"

// Input: "aabbcc"
// Output: null
//-------------------------------------------------------------------------------------

const firstUniqueChar = (str) => { //creating a function using arrow function syntax
  const count = {}; // creates an empty object to be used as a frequency map to store how many times each character appears. 

  //starts a loop that iterates through str one characters at a time
  for (const char of str) { //char is the current character in each iteration

    //count[char] means "look up this character in the object."
    count[char] = (count[char] || 0) + 1; 
                //(count[char] || 0) means to use the current count if it exists, otherwise use 0, then +1 for current occurance.
  }

  // second loop to check which character is the first one that appears exactly once
  for (const char of str) { //loops through the string, again one character at a time in original order
    if (count[char] === 1) { //checks whether the current character appears exactly one time in the whole string.
      return char; //if the current character is unique, return it immediately and stop the function
    }
  }

  return null; //if the function finishes both loops and never found a character with count 1, it returns null
};

//checking for 'leetcode' in the first loop looks like:
// {
//  l: 1,
//  e: 3,
//  t: 1,
//  c: 1,
//  o: 1,
//  d: 1
// }