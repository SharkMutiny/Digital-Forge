function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  let newStr = str.split("").map(char => htmlEntities[char] || char).join("");
  return newStr
}


// console.log(convertHTML("Dolce & Gabbana"))
// console.log(convertHTML("Hamburgers < Pizza < Tacos"))
// console.log(convertHTML("Sixty > twelve"))
// console.log(convertHTML('Stuff in "quotation marks"'))
// console.log(convertHTML("Schindler's List"))
// console.log(convertHTML("<>"))
// console.log(convertHTML("abc"))