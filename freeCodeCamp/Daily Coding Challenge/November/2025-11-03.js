// Word Counter
// Given a sentence string, return the number of words that are in the sentence.

// Words are any sequence of non-space characters and are separated by a single space.

function countWords(sentence) {
  // Handle edge case of empty string
  if (sentence.trim() === "") {
    return 0;
  }
  // Split the sentence by spaces and count the resulting words
  const words = sentence.trim().split(" ");
  return words.length;
}

