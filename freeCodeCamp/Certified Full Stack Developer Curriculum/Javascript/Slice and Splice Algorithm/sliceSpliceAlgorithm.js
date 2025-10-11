function frankenSplice(arr1, arr2, index) {
  let newArr = [...arr2]
  newArr.splice(index, 0, ...arr1)
  return newArr
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))