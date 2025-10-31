// Factorializer
// Given an integer from zero to 20, return the factorial of that number. The factorial of a number is the product of all the numbers between 1 and the given number.

// The factorial of zero is 1.


function factorial(n) {
  // Initialize result to 1 (factorial of 0 is 1)
  let result = 1;
  // Multiply result by each integer from 1 to n
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// console.log(factorial(5))