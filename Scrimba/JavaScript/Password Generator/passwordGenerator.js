const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const firstPass = document.getElementById("firstPass")
const secondPass = document.getElementById("secondPass")
const rangeLength = document.getElementById("range-length")

function generatePassword() {
    let result = ""
    let getLength = rangeLength.value
    for (let  i = 1; i <= getLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        result += characters[randomIndex]
    }
    return result
}

function getPassword() {
    firstPass.textContent = generatePassword()
    secondPass.textContent = generatePassword()
}

function makeCopy(text) {
    if (document.getElementById('firstPass').innerText.length === 0) {
        return
    } else {
        navigator.clipboard.writeText(text)
        alert(`Text copied to clipboard: ${text}`)
    }
}