/*

Problem 3: Add 10 to each number

Given an array of numbers, return a new array where each number
has 10 added to it.

Example Input: [5,10,15]

Expected Output: [15,20,25]

*/

const numbers = [5,10,15]

const result = numbers.map(num => num + 10)

console.log(result)