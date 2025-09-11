let email = "apple.pie@example.com"

function maskEmail(email) {
  let endPoint = email.indexOf("@") - 1
  let cutEmail = email.slice(1, endPoint)
  let newEmail = email.replace(cutEmail, "*".repeat(endPoint - 1))
  return newEmail
}

console.log(maskEmail(email))