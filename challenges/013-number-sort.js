/*
Problem: Number Sort

Given a string of comma-separated numbers, convert the values into numbers
and return them sorted in ascending order.

Example:
Input: "3,1,2"
Output: [1, 2, 3]

Concepts:
- Strings
- Arrays
- String Splitting
- Number Conversion
- Sorting

Source: FreeCodeCamp
*/

/*
Concepts Used:
- String Methods
- split()
- Arrays
- Number Conversion
- Array Sorting
- Compare Functions
*/


function sortNumbers(str) {
  return str
    .split(",")
    .map(Number)
    .sort((a, b) => a - b);
}
