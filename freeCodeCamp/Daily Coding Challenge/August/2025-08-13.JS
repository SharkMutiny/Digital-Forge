// Fibonacci Sequence
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.

// Your function should handle sequences of any length greater than or equal to zero.
// If the length is zero, return an empty array.
// Note that the starting numbers are part of the sequence.


function fibonacciSequence(startSequence, length) {
  // Handle edge cases
  if (length === 0) return []
  if (length <= startSequence.length) {
    return startSequence.slice(0, length)
  }
  
  // Initialize the sequence with the starting numbers
  const sequence = [...startSequence]

  // Generate the Fibonacci sequence up to the desired length
  while (sequence.length < length) {
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    sequence.push(nextNumber)
  }

  return sequence;
}

// console.log(fibonacciSequence([8, 13], 5))