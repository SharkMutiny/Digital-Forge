function truncateString(str, num) {
  if (num >= str.length) {
    return str
  } else {
    let newStr = str.slice(0, num) + "..."
    return newStr
  }
}