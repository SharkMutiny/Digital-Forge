// 3 Strikes
// Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.

function squaresWithThree(n) {
  // Validate input
  if (n < 1 || n > 10000) {
    return "Input must be an integer between 1 and 10,000.";
  }

  let count = 0;

  for (let i = 1; i <= n; i++) {
    // Calculate square and convert to string
    let squareStr = (i * i).toString();
    // If '3' is found, increment count
    if (squareStr.includes('3')) {
      count++;
    }
  }
  return count;
}

// console.log(squaresWithThree(10000))