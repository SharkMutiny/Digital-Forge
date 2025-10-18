// Vowel Balance

// Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

// The string can contain any characters.
// The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
// If there's an odd number of characters in the string, ignore the center character.

function isBalanced(str) {
  let vowels = "aeiouAEIOU"
  let strSplit = Math.floor(str.length / 2)
  let first = str.slice(0, strSplit)
  let second = str.length % 2 === 0 ? str.slice(strSplit, str.length) : str.slice(strSplit +1, str.length) 
  let firstCount = 0
  let secondCount = 0

    for (let char of first) {
        if (vowels.includes(char)) {
          firstCount++
        }
      }

    for (let char of second) {
          if (vowels.includes(char)) {
            secondCount++
          }
        }

    if (firstCount === secondCount) {
      return true
    } else {
      return false
    }
}

console.log(isBalanced("KittyXIpsom"))