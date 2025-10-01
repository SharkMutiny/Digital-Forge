function fearNotLetter(str) {
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const startIndex = alphabet.indexOf(str[0])
const endIndex = alphabet.indexOf(str[str.length - 1])
const subAlphabet = alphabet.slice(startIndex, endIndex + 1)

  for (let i = 0; i < subAlphabet.length; i++) {
    if (str.indexOf(subAlphabet[i]) === -1) {
      return subAlphabet[i]
    }
  }
  return undefined
}

console.log(fearNotLetter("abce"))



// Alternative solution that returns all missing letters
function fearNotLetter(str) {
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const startIndex = alphabet.indexOf(str[0])
const endIndex = alphabet.indexOf(str[str.length - 1])
const subAlphabet = alphabet.slice(startIndex, endIndex + 1)
let missing = ''

  if (alphabet.includes(str)) {
    return undefined
    } else {
      for (let i = 0; i < subAlphabet.length; i++) {
        if (str.indexOf(subAlphabet[i]) === -1) {
        missing += subAlphabet[i]
        } 
      }  
    return missing
  }
}

console.log(fearNotLetter("abdfhlpqtxyz"))