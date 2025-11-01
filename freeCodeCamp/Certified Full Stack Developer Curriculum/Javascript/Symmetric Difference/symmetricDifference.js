function diffArray(arr1, arr2) {
  const onlyInArr1 = arr1.filter(items => !arr2.includes(items))
  const onlyInArr2 = arr2.filter(items => !arr1.includes(items))
  return onlyInArr1.concat(onlyInArr2)
}

// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))