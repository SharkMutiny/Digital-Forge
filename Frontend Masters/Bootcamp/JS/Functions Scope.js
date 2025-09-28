// Example of a function that adds two to a number
function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);


// Example of a function that greets a person with multiple parameters (Returns a string)
function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Simon", "Bradley", "BrightLord", "Life before Death"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));


// Example of a function that logs out your home location (Returns nothing)
const myHomeCity = "Melbourne";
const myHomeState = "Victoria";
const myHomeCountry = "Australia";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);


// Example of function scope
function addFive(number) {
  const someVariable = "you can't see me outside this function";
  return number + 5;
}
addFive(10);
// console.log(someVariable); // ReferenceError: someVariable is not defined // (is out of scope here)


// Example of block scope
let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
    // console.log(i); // This would log numbers 0 to 10 (is in scope here)
  friendsAtYourParty++;
}
// console.log(i); // ReferenceError: i is not defined // (is out of scope here)


// Example of variable declared outside block scope
let someOtherVariable
if (true){
  someOtherVariable = "you can see me outside this function because I was declared outside the block";
}
console.log(someOtherVariable)


/*Scope Exercise
// Scope Exercise - What will be logged to the console and why?
const A = "A";
let F;

function doStuff(B) {
  console.log(B); // works, still in scope during function execution
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in the if block and this is outside that block
  console.log(H); // works, H is declared in the function scope and we are still in that scope
  F = "F";
}

let E = 0;
while (E < 3) {
  E++;
  console.log(A);  // works, A was declared up top (global scope)
  const G = "G";
}
console.log(E); // works, E is declared before the while block
console.log(G); // does not work, G was declared inside the while block

doStuff("B");
console.log(B); // does not work, B is a parameter of the doStuff function and expires after the function call
console.log(C); // does not work, C declared inside doStuff function
console.log(F); // works, F was declared in global scope
// End of Scope Exercise
*/



// Example of nested scopes
let something = "Outside the if statement and outside the function";

function testScope() {
  let something = "Outside the if statement but inside the function";
    if (true) {
        let something = "Inside the if statement";
        console.log(something) // logs "Inside the if statement"
    }
  console.log(something) // logs "Outside the if statement but inside the function"
}
testScope();
console.log(something) // logs "Outside the if statement and outside the function"


// Built-in String Methods
// Example of .toUpperCase() method
const loudSentence = "this is so loud!!!";  
console.log(loudSentence.toUpperCase()); // "THIS IS SO LOUD!!!"
// Example of .toLowerCase() method
const sentence = "ThIs HaS wEiRd CaSiNg On It";
console.log(sentence.toLowerCase()); // "this has weird casing on it"

// Built-in Number Methods
// Example of .round() method to round to nearest integer
console.log(Math.round(5.1)); // 5
// Example of .floor() method to round down
console.log(Math.floor(5.9)); // 5  
// Example of .ceil() method to round up
console.log(Math.ceil(5.1)); // 6

// Example of .substring() method to get part of a string (substr is deprecated, use substring instead)
const myName = "Simon Bradley"; 
console.log(myName.substring(0, 5)); // "Simon" (first number is starting index,  second number is ending index, not inclusive)
console.log(myName.substring(2, 5)); // "mon" (first number is starting index,  second number is ending index, not inclusive)
console.log(myName.substring(6)); // "Bradley" (if only one number is provided, it goes to the end of the string)
