// Targeted Sum
// Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.

// The returned array should have the indices in ascending order.


function findTarget(arr, target) {
  // Iterate through each pair of numbers in the array
  for (let i = 0; i < arr.length; i++) {
    // Start the inner loop from the next index to avoid using the same element
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the sum of the two numbers equals the target
      if (arr[i] + arr[j] === target) {
        // Return the indices in ascending order
        return [i, j];
      }
    }
  }
  // If no such pair is found, return "Target not found"
  return "Target not found";
}

// console.log(findTarget([2, 7, 11, 15], 9))
