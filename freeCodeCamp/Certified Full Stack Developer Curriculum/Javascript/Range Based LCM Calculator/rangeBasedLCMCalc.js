function smallestCommons(arr) {
  // Sort the array to get min and max values
  const [min, max] = arr.sort((a, b) => a - b);
  // Create an array of all numbers in the range
  const range = [];
  // Fill the range array with numbers from min to max
  for (let i = min; i <= max; i++) {
    range.push(i);
  }
  // Function to calculate GCD
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  // Function to calculate LCM
  const lcm = (a, b) => (a * b) / gcd(a, b);
  // Reduce the range array to find the LCM of all numbers
  return range.reduce((acc, curr) => lcm(acc, curr));
}

// console.log(smallestCommons([1, 5]));
