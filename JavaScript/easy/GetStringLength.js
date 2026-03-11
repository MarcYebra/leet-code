/*

Problem 6: Get string lengths

Given an array of words, return a new array containing the
length of each word.

Example Input: ["cat","elephant","dog"]

Expected Output: [3,8,3]

*/

const words = ["cat","elephant","dog"]

const result = words.map(word => word.length)

console.log(result)