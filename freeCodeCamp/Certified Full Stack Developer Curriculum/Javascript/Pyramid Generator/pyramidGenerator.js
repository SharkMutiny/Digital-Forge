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





// Old Legacy FCC Version
// Pyramid Generator - Learn Introductory JavaScript by Building a Pyramid Generator

// change these values for different pyramids
const character = "*";
const count = 20;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


for (let i = 1; i <= count; i++) {
    if (inverted) {
      rows.unshift(padRow(i, count));
    } else {
      rows.push(padRow(i, count));
    }
}
  
//   other ways to do the loops
/*while (rows.length < count) {
    rows.push(padRow(rows.length + 1, count));
}*/
  
/*for (let i = count; i > 0; i--) {
    rows.push(padRow(i, count));
}*/
 
let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);