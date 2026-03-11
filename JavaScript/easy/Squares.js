/*

Problem: Convert numbers to their squares.

Given an array of numbers, return a new array where each number is squared.

*/

const numbers = [2,3,4,5]

const squared = numbers.map(num => num * num)

console.log(squared)

// or we can write it

const numberToSquare = [2,3,4,5]

const squaredFunction = (num) => {
    return num * num
}

const squaredOutcome = numberToSquare.map(squaredFunction)

console.log(squaredOutcome)