function sumPrimes(num) {
  if (num < 2) return 0

  function isPrime(n) {
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

  let result = 0

  for (let i = 2; i <= num; i++) {
    if (isPrime(i))
      result += i
  }
  return result
}

// console.log(sumPrimes(10))