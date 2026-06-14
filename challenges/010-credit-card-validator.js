/*
Problem: Credit Card Validator

Given a credit card number as a string, determine whether it is valid
using the Luhn Algorithm.

Rules:
- Starting from the second-to-last digit, double every other digit moving left.
- If a doubled digit is greater than 9, subtract 9.
- Sum all digits.
- If the total is divisible by 10, the card is valid.

Example:
Input: "4532015112830366"
Output: true

Concepts:
- Strings
- Arrays
- Loops
- Number Manipulation
- Conditional Logic
- Luhn Algorithm

Source: FreeCodeCamp
*/