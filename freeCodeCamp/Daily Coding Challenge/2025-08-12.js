function isValidNumber(numberStr, base) {
  const validChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base)
  const upperNumStr = numberStr.toUpperCase()

  for (let char of upperNumStr) {
    if (!validChars.includes(char)) {
      return false
    }
  }
  return true;
}