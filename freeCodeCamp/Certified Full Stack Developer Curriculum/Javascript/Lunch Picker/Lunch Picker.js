let lunches = []

function addLunchToEnd(arr, str) {
  arr.push(str)
  console.log(`${str} added to the end of the lunch menu.`)
  return arr
}

function addLunchToStart(arr, str) {
  arr.unshift(str)
  console.log(`${str} added to the start of the lunch menu.`)
  return arr
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    return console.log("No lunches to remove.")
  } else {
    let str = arr.pop()
    console.log(`${str} removed from the end of the lunch menu.`)
    return arr
  }
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    return console.log("No lunches to remove.")
  } else {
    let str = arr.shift()
    console.log(`${str} removed from the start of the lunch menu.`)
    return arr
  }
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    return console.log("No lunches available.")
  } else {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let str = arr[randomIndex]
    console.log(`Randomly selected lunch: ${str}`)
    return arr
  }
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    return console.log("The menu is empty.")
  } else {
    let str = arr.join(", ")
    console.log(`Menu items: ${str}`)
    return arr
  }
}