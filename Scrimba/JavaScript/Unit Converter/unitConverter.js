/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Getting references to HTML elements
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const lengthOutput = document.getElementById("length-output")
const volumeOutput = document.getElementById("volume-output")
const massOutput = document.getElementById("mass-output")

// Adding event listener to the convert button
// When clicked, it performs the conversions and updates the output elements
convertBtn.addEventListener("click", function() {
    let inputValue = inputEl.value

    // Length Conversion
    let metersToFeet = (inputValue * 3.281).toFixed(3)
    let feetToMeters = (inputValue / 3.281).toFixed(3)
    lengthOutput.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`
    // Volume Conversion
    let litersToGallons = (inputValue * 0.264).toFixed(3)
    let gallonsToLiters = (inputValue / 0.264).toFixed(3)
    volumeOutput.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`
    // Mass Conversion
    let kilosToPounds = (inputValue * 2.204).toFixed(3)
    let poundsToKilos = (inputValue / 2.204).toFixed(3)
    massOutput.textContent = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilos`
})
