function largestOfAll(arr) {
  let results = []
  for (let i = 0; i < arr.length; i++) {
    let largest = Math.max(...arr[i])
    results.push(largest)
  }
  return results
}

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))