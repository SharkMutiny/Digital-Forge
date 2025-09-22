// Background Generator Exercise
// Select color input
// Select the h3
// Create a function that sets the background to a linear gradient.
// Set the function to run on input change

let css = document.querySelector("h3")
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2")
let body = document.getElementById("gradient")

function setGradient() {
    body.style.background = 
    `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.textContent = body.style.background
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)


// Additional Features Exercise
// Write code so that the color inputs match the background generated on the first page load. 
// BONUS: Add a random button which generates two random numbers for the color inputs.

// set the initial gradient and text on page load
window.onload = setGradient()

// BONUS: random color button
let random = document.getElementById("random")

// generate two random hex colors
function randomColor() {
    let hex = '0123456789ABCDEF'
    let hash = '#'
    
    for (let i = 0; i < 6; i++) {
    hash += hex[Math.floor(Math.random() * 16)]
    }    
    return hash
}

// add event listener to random button to set two random colors
random.addEventListener("click", function() {
color1.value = randomColor()
color2.value = randomColor()
setGradient()
})