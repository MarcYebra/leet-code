/*
Problem: Count how many times each character appears in a string.

Given a string, return an object where:
    - the keys are characters
    - the values are how many times they appear

input: "banana"
output: 
        {
          b: 1,
          a: 3,
          n: 2
        }

*/

const countRepeatChar = (str) => { //creating a function using the arrow function syntax
    const count = {} //creating a empty object that will be used to iterate over

    for (const char in str) { //creating for loop to iterate over each string and place it into our object charRepeat
        count[char] = (count[char] || 0) + 1 
        //count[char] accesses the value stored for that character in the object
        //(count[char] || 0) means use the existing count if it exists, otherwise use 0
        // +1 increments the count
    }
    return count //returns the completed frequency object from the function. This contains the final counts for every character.
}


