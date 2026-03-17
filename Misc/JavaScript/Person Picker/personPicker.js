// taking an array of names and returning a random name from the array and removing it from the array
function pickRandomName(names) {
    if (names.length === 0) {
        return null; // Return null if the array is empty
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const selectedName = names[randomIndex];
    names.splice(randomIndex, 1); // Remove the selected name from the array
    return selectedName;
}

// Example usage:
const namesList = ["Person1", "Person2", "Person3", "Person4", "Person5", "Person6", "Person7", "Person8"];
const randomName = pickRandomName(namesList);
console.log("Selected Name:", randomName);
console.log("Remaining Names:", namesList);