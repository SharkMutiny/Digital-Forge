// Sum of Squares
// Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.


function sumOfSquares(n) {
  // Validate input
  if (n < 1 || n > 1000) {
    return "Input must be a positive integer up to 1,000.";
  }
  // Using the formula n(n + 1)(2n + 1) / 6 to calculate the sum of squares
  n = n * (n + 1) * (2 * n + 1) / 6;

  return n;
}

// console.log(sumOfSquares(5))