function reverseString(str) {
  let arr = str.split("")
  let splitArr = arr.reverse()
  let revStr = splitArr.join("")
  return revStr
}

console.log(reverseString("hello"))