// This is a comment in JavaScript
/*
Multi-line comment
*/

// Variables
const monthlyRent = 500;

let annualRent = monthlyRent * 12;
console.log(annualRent);


// Strings
const fistName = "Syhh";
const lastName = "Hoid";


// Concatenation
let concatsentence = "My name is " + fistName + " " + lastName + ". I pay $" + annualRent + " per year for rent.";
console.log(concatsentence);


// Template Literals (Template Strings)
let sentence = `My name is ${fistName} ${lastName}. I pay $${annualRent} per year for rent.`;
console.log(sentence);


// Booleans
const isTheSkyBlue = true;
console.log(isTheSkyBlue);


// Conditionals (If Statements)
if (isTheSkyBlue) {
    console.log("The sky is blue.");
} else {
    console.log("The sky is not blue.");
}

// Equality Comparisons
if (2 + 2 === 4) {
    console.log("Math works!");
}

// Else If (Conditionals)
const friendsAtYourParty = 10;
if (friendsAtYourParty === 0) {
    console.log("Cool, all the food is for me!");
} else if (friendsAtYourParty <= 5) {
    console.log("6 player board games. Go!");
} else {
    console.log("Wow, this party is going to be crazy!");
}


// Incrementing (Repeating Yourself)
let thisNumber = 0;
thisNumber = thisNumber + 1;
thisNumber = thisNumber + 1;
thisNumber = thisNumber + 1;
thisNumber = thisNumber + 1;
console.log(thisNumber);

// Shorthand Incrementing
let incrementingNumber = 0;
incrementingNumber = incrementingNumber + 1; // Longhand addition assignment (not common)
incrementingNumber += 1; // Shorthand addition assignment also works (very common)
incrementingNumber++; // Postfix increment also works (very common most used)
++incrementingNumber; // Prefix increment also works (not common)
console.log(thisNumber);

// Loops (While Loop)
let addToThisNumber = 0;
while (addToThisNumber < 10) {
addToThisNumber = addToThisNumber + 1;
}
console.log(addToThisNumber);


// Loops (For Loop)
let personsAtTheParty = 0;
for (let i = 0; i < 10; i++) {
    personsAtTheParty++;
}
console.log(personsAtTheParty);


// Final Exercise
/*
  Write some code that declares two variables, character and timesToRepeat.
  Using a loop, repeat that character that many times and then console.log it.
  Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
  'fffff'
*/

const character = 'Z';
const timesToRepeat = 8;    
let repeatedCharacter = '';

for (let i = 0; i < timesToRepeat; i++) {
    repeatedCharacter += character;
}
console.log(repeatedCharacter);
