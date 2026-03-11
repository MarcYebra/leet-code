/*

Problem: Convert numbers to their absolute values

Given an array of numbers, return a new array where each number
is converted to its absolute value (positive version).

Example Input: [-3, 5, -10, 8]

Expected Output: [3, 5, 10, 8]

*/

const numbers = [-3, 5, -10, 8]

const absoluteValues = numbers.map( num => Math.abs(num))

console.log(absoluteValues)