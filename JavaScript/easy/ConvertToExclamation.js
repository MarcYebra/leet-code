/*

Problem 9: Convert words to exclamations

Given an array of words, return a new array where each word
has "!" added at the end.

Example Input: ["go","run","jump"]

Expected Output: ["go!","run!","jump!"]

*/

const words = ["go","run","jump"]

const result = words.map(word => `${word}!`)

console.log(result)