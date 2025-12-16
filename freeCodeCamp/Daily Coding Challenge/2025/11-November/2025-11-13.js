// Daily Coding Challenge: November 13, 2025
// Array Shift
// Given an array and an integer representing how many positions to shift the array, return the shifted array.

// A positive integer shifts the array to the left.
// A negative integer shifts the array to the right.
// The shift wraps around the array.
// For example, given [1, 2, 3] and 1, shift the array 1 to the left, returning [2, 3, 1].

function shiftArray(arr, n) {
    // Get the length of the array
    const len = arr.length;
    // Normalize the number of shifts
    const shift = ((n % len) + len) % len;
    
    for (let i = 0; i < shift; i++) {
        // Remove the first element from the array
        const firstElement = arr.shift();
        // Add the removed element to the end of the array
        arr.push(firstElement);
    }
  return arr;
}