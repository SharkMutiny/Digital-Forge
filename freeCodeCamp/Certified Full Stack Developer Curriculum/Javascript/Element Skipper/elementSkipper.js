function dropElements(arr, func) {
  let drop = true
  let results = []

  for (let i = 0; i < arr.length; i++) {
    if (drop) {
      if (func(arr[i])) {
        results.push(arr[i])
        drop = false
      }
    } else {
      results.push(arr[i])
    }
  }
  return results
}

// console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}))
// console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}))
// console.log(dropElements([1, 2, 3], function(n) {return n > 0;}))
// console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
// console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}))
// console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}))