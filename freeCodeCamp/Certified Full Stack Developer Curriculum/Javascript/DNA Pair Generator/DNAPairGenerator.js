function pairElement(str) {
  const basePairs = { "A": "T", "T": "A", "C": "G", "G": "C" }
  let results = []

  for (let char of str) {
    results.push([char, basePairs[char]])
  }
  return results
}

// console.log(pairElement("ATCGA"))
// console.log(pairElement("TTGAG"))
// console.log(pairElement("CTCTA"))