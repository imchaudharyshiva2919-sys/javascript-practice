/*
Problem: Daily Code Challenge #301 - Laundry Detergent Usage
Source: freeCodeCamp Daily Challenge

Task:
Given the remaining detergent scoops and past daily usage,
calculate the average daily usage and return the number of
full days the detergent will last.

Key Concepts:
Arrays, Loops, Average Calculation, Math.floor()
*/


function lastLoadDate(scoops, usage) {
  let count = 0;

  for (let i = 0; i < usage.length; i++) {
    count += usage[i];
  }

  let avg = count / usage.length;

  return Math.floor(scoops / avg);
}

/*
Learned:
- Calculating averages from arrays
- Summing array values
- Using Math.floor() for whole numbers
- Basic forecasting using historical data
*/