/*

Problem: Convert numbers to strings with a label

Given a array of numbers, return a new array where each number becoms a string like "Number: X".


Example Input: [2,7,20]

Expected Output: ["Number: 2","Number: 7","Number: 20"]
*/

const numbers = [2,7,20]

const labeledStr = numbers.map(num => `Number: ${num}` )

console.log(labeledStr)