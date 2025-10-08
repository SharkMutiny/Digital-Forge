let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function incrementHomeScore(num) {
    homeScore += num
    homeScoreEl.textContent = homeScore
}

function incrementGuestScore(num) {
    guestScore += num
    guestScoreEl.textContent = guestScore
}

function resetScores() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}

console.log("Let's play some basketball!")
