function pyramid(str, rowNum, bool) {
  let result = []
  let space = " "
  let rowsDown = (rowNum * 2 - 1)
  let rowsUp = 1
  let spaceDownCount = 0
  let spaceUpCount = (rowNum - 1)
  for (let i = 0; i < rowNum; i++) {
    if (bool === true) {
      result += "\n" + space.repeat(spaceDownCount) + str.repeat(rowsDown)
      rowsDown -= 2
      spaceDownCount += 1
    } else if (bool === false) {
      result += "\n" + space.repeat(spaceUpCount) + str.repeat(rowsUp)
      rowsUp += 2
      spaceUpCount -= 1
    }
  }
  return result + "\n"
}

console.log(pyramid("o", 4, false))
console.log(JSON.stringify(pyramid("o", 4, false)));