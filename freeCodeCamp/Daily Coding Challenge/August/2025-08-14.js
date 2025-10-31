// S  P  A  C  E  J  A  M

// Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.

// Non-alphabetical characters should remain unchanged (except for spaces).


function spaceJam(s) {
  // Remove spaces, convert to uppercase, and insert two spaces between characters
  let spacedString = s.replaceAll(" ", "").toUpperCase().split("").join("  ")
  return spacedString;
}

console.log(spaceJam("freeCodeCamp"))
console.log(spaceJam("   free   Code   Camp   "))
console.log(spaceJam("Hello World?!"))
console.log(spaceJam("C@t$ & D0g$"))
console.log(spaceJam("allyourbase"))