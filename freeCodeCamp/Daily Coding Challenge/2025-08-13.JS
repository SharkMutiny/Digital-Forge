function fibonacciSequence(startSequence, length) {
  if (length === 0) return []
  
  if (length <= startSequence.length) {
    return startSequence.slice(0, length)
  }
  
  const sequence = [...startSequence]

  while (sequence.length < length) {
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2]
    sequence.push(nextNumber)
  }

  return sequence;
}

// console.log(fibonacciSequence([8, 13], 5))