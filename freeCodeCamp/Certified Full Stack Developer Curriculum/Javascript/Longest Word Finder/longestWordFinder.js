function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))