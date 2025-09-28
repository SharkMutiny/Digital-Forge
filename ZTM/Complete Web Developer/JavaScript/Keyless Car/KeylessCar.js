// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

// else if statement exercise (pretend you a keyless car)

var age = prompt("What is your age?");

if (Number(age) < 18) {
    alert("Sorry, you are to young to drive this car.  Powering off.");
} else if (Number(age) > 18) {
    alert("Powering on, Enjoy your ride!");
} else if (Number(age) === 18) {
    alert("Congratulation on your first year of driving. Enjoy the ride!");
}


// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.

// Use Functions to check Drivers Age Exercise

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.

// Exercise 1 - Function Declaration

function checkDriversAge() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are to young to drive this car.  Powering off.");
	} else if (Number(age) > 18) {
		alert("Powering on, Enjoy your ride!");
	} else if (Number(age) === 18) {
		alert("Congratulation on your first year of driving. Enjoy the ride!");
	}
}


// Notice the benefit in having checkDriverAge() instead of copying and pasting the function every time?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

// Exercise 2 - Function Expression

var checkDriversAge2 = function() {
	var age = prompt("What is your age?");

	if (Number(age) < 18) {
		alert("Sorry, you are to young to drive this car.  Powering off.");
	} else if (Number(age) > 18) {
		alert("Powering on, Enjoy your ride!");
	} else if (Number(age) === 18) {
		alert("Congratulation on your first year of driving. Enjoy the ride!");
	}
}


// Bonus - Don't use prompt() - use console.log() instead
// make the checkDriverAge() function accept an argument of age
// so you can use checkDriverAge(42)

// Exercise 3 - Function with Argument

function checkDriversAge3(age) {
	if (Number(age) < 18) {
		alert("Sorry, you are to young to drive this car.  Powering off.");
	} else if (Number(age) > 18) {
		alert("Powering on, Enjoy your ride!");
	} else if (Number(age) === 18) {
		alert("Congratulation on your first year of driving. Enjoy the ride!");
	}
}