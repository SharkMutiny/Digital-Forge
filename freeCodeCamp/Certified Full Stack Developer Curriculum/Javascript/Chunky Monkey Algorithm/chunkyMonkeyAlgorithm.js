function chunkArrayInGroups(arr, num) {
  let results = []
  for (let i = 0; i < arr.length; i += num) {
    results.push(arr.slice(i, i + num))
  }
  return results
}