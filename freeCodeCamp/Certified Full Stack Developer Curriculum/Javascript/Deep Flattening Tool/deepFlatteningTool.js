function steamrollArray(arr) {
  const flattenedArray = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      flattenedArray.push(element);
    }
  }
  arr.forEach(flatten);
  return flattenedArray;
}

// console.log(steamrollArray([1, [2], [3, [[4]]]]))
