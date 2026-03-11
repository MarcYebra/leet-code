/*

Problem 2: Convert numbers to strings

Given an array of numbers, return a new array where each number
is converted to a string.

Example Input: [1,2,3]

Expected Output: ["1","2","3"]

*/

const numbers = [1,2,3]

const result = numbers.map(num => num.toString())

console.log(result)