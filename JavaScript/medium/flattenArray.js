/*
Medium JS Whiteboard Question

Write a function flatten(arr) that takes a nested array and returns a single-level array.

Requirements:
- Do NOT use Array.prototype.flat()
- Must handle arrays nested to any depth
- Preserve element order

Examples:
flatten([1, [2, 3], [4, [5, 6]], 7]) -> [1, 2, 3, 4, 5, 6, 7]
flatten([1, [2, [3, [4]]]]) -> [1, 2, 3, 4]
flatten([1, [2, 3]]) -> [1, 2, 3]
flatten([]) -> []

Function signature:
*/

const flatten = (arr) => {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
};

console.log(flatten([1, [2, 3], [4, [5, 6]], 7]));
