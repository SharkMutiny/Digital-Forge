function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();

  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0)
    return false
  }
  return true
}
// console.log(mutation(["hello", "hey"]))


// Refactored Solution with a for of loop
function mutation(arr) {
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
    for (let char of second) {
        if (first.indexOf(char) === -1) {
            return false;
        }   
    }
    return true;
}   


// Refactored Solution with a for of loop and includes() method
function mutation(arr) {
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
    for (let char of second) {
        if (!first.includes(char)) {
            return false;
        }   
    }
    return true;
}   