
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!


// Quick Calculator using prompt()
var firstNumber = prompt("Please enter the first number");
var secondNumber = prompt("Please enter the second number");

// Number() to change to numbers from strings
var sum = Number(firstNumber) + Number(secondNumber);

// alert() to give back the answer
alert("The answer is: " + sum);



// Shorter way
// var firstNumber = prompt("What is the first number");
// var secondNumber = prompt("What is the second number");
// alert(Number(firstNumber) + Number(secondNumber));

// subtract
// var firstNumber = prompt("What is the first number");
// var secondNumber = prompt("What is the second number");
// alert(Number(firstNumber) - Number(secondNumber));

// multiply
// var firstNumber = prompt("What is the first number");
// var secondNumber = prompt("What is the second number");
// alert(Number(firstNumber) * Number(secondNumber));

// divide
// var firstNumber = prompt("What is the first number");
// var secondNumber = prompt("What is the second number");
// alert(Number(firstNumber) / Number(secondNumber));