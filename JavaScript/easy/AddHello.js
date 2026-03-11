/*

Problem 5: Add "Hello " before each name

Given an array of names, return a new array where each name
has "Hello " added in front.

Example Input: ["Tom","Lisa","Mark"]

Expected Output: ["Hello Tom","Hello Lisa","Hello Mark"]

*/

const names = ["Tom","Lisa","Mark"]

const result = names.map(name => `Hello ${name}`)

console.log(result)