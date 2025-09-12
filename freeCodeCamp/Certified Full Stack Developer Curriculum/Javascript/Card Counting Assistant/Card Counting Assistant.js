let count = 0

function cc(card) {
if (card <= 6) {
  count++
} else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
  count--
} 

if (count >= 1) {
  return count + " Bet"
} else if (count <= 0) {
  return count + " Hold"
} 
}
