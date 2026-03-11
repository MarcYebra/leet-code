/*

Problem 7: Convert temperatures from Celsius to Fahrenheit

Formula: F = C * 9/5 + 32

Example Input: [0,10,20]

Expected Output: [32,50,68]

*/

const celsius = [0,10,20]

const result = celsius.map(temp => temp * 1.8 + 32)

console.log(result)