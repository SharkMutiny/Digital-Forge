// Calculator functions in JavaScript

// Arrow function version
// const calculateSum = (num1, num2) => num1 + num2;

// Function to calculate the sum of two numbers
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

// Function to calculate the difference between two numbers
function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

// Function to calculate the product of two numbers
function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));

// Function to calculate the quotient of two numbers
// Handles division by zero
function calculateQuotient(num1, num2) {
    return num2 === 0 ? "Error: Division by zero" : num1 / num2;

    // Alternative using if statement
    // if (num2 === 0) {  
    //     return "Error: Division by zero";
    // }
    // return num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

// Function to calculate the square of a number
// squared is num times itself
function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

// Function to calculate the square root of a number
// root is a number that when multiplied by itself gives the original number
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));