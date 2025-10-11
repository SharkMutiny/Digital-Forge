function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

  let result = ""
  for (let i = 0; i < length; i++) {
    let rndNum = Math.floor(Math.random() * chars.length)
    result += chars.charAt(rndNum)
  }
return result
}

let password = generatePassword(10)
console.log(`Generated password: ${password}`)