function getIndexToIns(arr, num) {
  arr.push(num)
  arr.sort((a, b) => a - b)
  return arr.findIndex(n => n === num)
}

// console.log(getIndexToIns([20, 3, 5], 19))