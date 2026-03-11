/*

Problem 10: Convert numbers to "Age: X"

Given an array of numbers, return a new array where each number
becomes a string like "Age: X".

Example Input: [18,21,30]

Expected Output: ["Age: 18","Age: 21","Age: 30"]

*/

const ages = [18,21,30]

const result = ages.map(age => `Age: ${age}`)

console.log(result)