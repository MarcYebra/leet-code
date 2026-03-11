/*

Problem 4: Convert names to uppercase

Given an array of names, return a new array where each name
is converted to uppercase.

Example Input: ["alex","sam","jordan"]

Expected Output: ["ALEX","SAM","JORDAN"]

*/

const names = ["alex","sam","jordan"]

const result = names.map(name=> name.toUpperCase())

console.log(result)