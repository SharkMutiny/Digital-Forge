function sumFibs(num) {
  let firstNum = 0
  let secondNum = 1
  let total = 0

  while (secondNum <= num) {
    if (secondNum % 2 !== 0) {
      total += secondNum
    }
    let nextNum = firstNum + secondNum
    firstNum = secondNum
    secondNum = nextNum
  }
  return total
}

// console.log(sumFibs(1))
// console.log(sumFibs(1000))
// console.log(sumFibs(4000000))
// console.log(sumFibs(5))
// console.log(sumFibs(75024))
// console.log(sumFibs(75025))