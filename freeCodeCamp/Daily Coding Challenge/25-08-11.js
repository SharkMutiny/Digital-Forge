// Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

// The string can contain any characters.
// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// If there's an odd number of characters in the string, ignore the center character.

function isBalanced(s) {
  let vowels = "aeiouAEIOU"
  let sSplit = Math.floor(s.length / 2)
  let first = s.slice(0, sSplit)
  let second = s.slice(sSplit, s.length)
  console.log(sSplit)
  return s;
}

console.log(isBalanced("Kitty Ipsum"))