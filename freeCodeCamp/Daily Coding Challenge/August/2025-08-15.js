// Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

// The first and last letters of the words remain in place
// All letters between the first and last letter are sorted alphabetically.
// The input strings will contain no punctuation, and will be entirely lowercase.


function jbelmu(text) {
  // Split the text into words
  let words = text.split(" ");
  // Transform each word according to the rules
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 2) {
      let firstLetter = words[i][0];
      let lastLetter = words[i][words[i].length - 1];
      let middleLetters = words[i].slice(1, -1).split("").sort().join("");
      words[i] = firstLetter + middleLetters + lastLetter;
    }
  }
  // Join the transformed words back into a single string
  text = words.join(" ");

  return text;
}

// console.log(jbelmu("freecodecamp is my favorite place to learn to code"))