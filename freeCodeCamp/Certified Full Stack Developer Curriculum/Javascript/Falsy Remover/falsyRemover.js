function bouncer(arr) {
  return arr.filter(Boolean)
}

console.log(bouncer([7, "ate", "", true, false, 9]))